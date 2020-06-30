import TIM from 'tim-wx-sdk';
import Taro from '@tarojs/taro';
import Model from '@/model';

export default function InitTim() {
  // 初始化Tim
  this.initTim = function () {
    console.log('==initTim初始化开始==');
    let options = {
      SDKAppID: 1400327979
    }
    this.objTim = TIM.create(options);
    this.objTim.setLogLevel(4)
    this.objTim.on(TIM.EVENT.SDK_READY, () => {
      this.onSdkReady()
    }, this);
    this.objTim.on(TIM.EVENT.MESSAGE_RECEIVED, this.dealTimMessageReceived, this);
    // this.objTim.on(TIM.EVENT.SDK_NOT_READY, this.onSdkNotReady, this);
    this.dealTimLogin()
    // 获取UserSign
  }.bind(this);

  this.onSdkNotReady = function () {
    this.dealTimLogin();
  }

  /**
   * 登陆聊天室
  */

  this.dealTimLogin = function () {
    Model.liveapi.createUserSign().then(res => {
      console.log('++res.usersig++', res.usersig)
      console.log('++res.identifier++', res.identifier)
      if (res) {
        this.setState({
          liveSign: res.usersig,
          identifier: res.identifier,
        }, () => {
          const { liveSign, identifier } = this.state;
          let promise = this.objTim.login({ userID: identifier, userSig: liveSign })
          promise.then((imResponse) => {
            console.log('==检测登陆是否成功==', imResponse)
          }).catch(function (imError) {
            console.warn('login error:', imError)
          })
        })
      }
    })


  }.bind(this);


  //sdk信息

  this.onSdkReady = function () {
    console.log('==init-onSdkReady==')
    this.dealTimUpdateMyProfile()
  }.bind(this);

  /**
  * IM 更新用户资料
  * */
  this.dealTimUpdateMyProfile = function () {
    const { identifier } = this.state;
    const userInfo = this.props.globalStore.data.userInfo;
    if (userInfo) {
      let promise = this.objTim.updateMyProfile({
        nick: userInfo.nickName ? userInfo.nickName : `游客_${identifier}`,
        allowType: TIM.TYPES.ALLOW_TYPE_ALLOW_ANY
      })
      promise.then(() => {
        this.dealJoinGroup()
      }).catch(function (imError) {
        console.log(imError);
      })
    }
  }.bind(this);


  /**
   * tim 邀请用户加入组群
   * */

  this.dealJoinGroup = function () {
    const { liveDetail, identifier } = this.state;
    const userInfo = this.props.globalStore.data.userInfo;
    let promise = this.objTim.joinGroup({ groupID: liveDetail.chatGroupId, type: TIM.TYPES.GRP_AVCHATROOM });
    promise.then((imResponse) => {
      // 进入直播间调用
      console.log('userInfo', userInfo);
      this.sendCustomMsg({ type: 14, msgValue: userInfo.nickName ? userInfo.nickName : `游客_${identifier}` })
      switch (imResponse.data.status) {
        case TIM.TYPES.JOIN_STATUS_WAIT_APPROVAL:
          break // 等待管理员同意
        case TIM.TYPES.JOIN_STATUS_SUCCESS: // 加群成功
          console.log('==加组已成功==', imResponse.data.group) // 加入的群组资料
          this.dealBroadcast2JoinGroup8Custom(
            {
              data: userInfo.nickName ? userInfo.nickName : `游客_${identifier}`,
              description: '这是一条广播消息',
              extension: 'IM_MSG_CUSTOM_JOIN_GROUP'
            }
          );
          break
        default:
          break
      }
    }).catch(function (imError) {
      console.warn('joinGroup error:', imError) // 申请加群失败的相关信息
    })
  }.bind(this);


  /**
   * tim 广播加入组群消息-通过自定义消息方式
   * */

  this.dealBroadcast2JoinGroup8Custom = function (newObj) {
    const { liveDetail } = this.state;
    let message = this.objTim.createCustomMessage({
      to: liveDetail.chatGroupId,
      conversationType: TIM.TYPES.CONV_GROUP,
      payload: newObj
      // {
      //   data: userInfo.nickName ? userInfo.nickName : `游客_${identifier}`,
      //   description: '这是一条广播消息',
      //   extension: 'IM_MSG_CUSTOM_JOIN_GROUP'
      // }
    })
    let promise = this.objTim.sendMessage(message)
    promise.then(function (imResponse) {
      console.log('广播自定义发送成功: ', imResponse)
    }).catch(function (imError) {
      console.warn('广播自定义发送失败: ', imError)
    })
  }.bind(this);


  /**
   * 有人进入直播间发送自定义通知后端人数增加减
   * */

  this.sendCustomMsg = function ({ msgType = 14, msgValue = 1 }) {
    const { liveId } = this.state;
    const data = {
      liveId: liveId,
      msgType: msgType,
      msgValue: msgValue
    }
    Model.liveapi.sendNoticeMsg(data).then(res => {
      if (!res) return false;
      this.setState({
        viewCount: res,
      })
    })
  }.bind(this);

  this.formatName = function (name) {
    let newStr;
    if (name.length > 6) {
      newStr = name.substr(0, 6) + '...';
    } else {
      newStr = name;
    }
    return newStr;
  }

  // IM 处理消息接收
  this.dealTimMessageReceived = function (event) {
    console.log('==init-dealTimMessageReceived==')
    if (event.data) {
      for (const itemMsg of event.data) {
        if (itemMsg.random === this.messageRandom) {
          return;
        }
        this.messageRandom = itemMsg.random;
        if (itemMsg.elements) {
          for (const itemElem of itemMsg.elements) {
            this.analysisMsgElem(itemElem, itemMsg.nick)
          }
        }
      }
    }
  }.bind(this);

  // IM 消息解析
  this.analysisMsgElem = function (objParaMsgElem) {
    switch (objParaMsgElem.type) {
      case TIM.TYPES.MSG_CUSTOM:
        if (objParaMsgElem.content && objParaMsgElem.content.data) {
          this.handleIMData(objParaMsgElem)
        }
        break
      default:
        break
    }
  }.bind(this);

  // 被动接收并处理message 下发消息 =====
  this.handleIMData = function (IMData) {
    if (IMData) {
      if (IMData.content.extension === 'IM_MSG_CUSTOM_JOIN_GROUP') {
        return
      }
      const data = JSON.parse(IMData.content.data);
      console.log('IMData1111', IMData);
      console.log('dataparse1111', data);
      const objChat = {
        name: data.operatorName,
        text: data.chatContent,
        avatar: data.operatorAdverImg,
        userType: data.userType,
        msgType: data.msgType,
      }
      // debugger
      switch (data.msgType) {
        case 1:
          objChat.type = 'CHAT_MSG'    //聊天消息
          this.fillArrChat(objChat);
          break
        case 9:
          const showBuyObj = {
            type: 'SHOW_BUY_SHOP',     //准备剁手
            msgContent: data.msgContent,
          }
          this.fillArrChat(showBuyObj);
          break
        // 下单
        // 分享
        case 11:
          const newObjChat = {
            type: 'SHARE_MSG',     //分享
            msgContent: data.msgContent,
          }
          this.fillArrChat(newObjChat);
          break
        // 下单
        case 10:
          const newObj = {
            type: 'ORDER_MSG',     //下单成功
            msgContent: data.msgContent,
          }
          this.fillArrChat(newObj);
          break
        // 更新人数
        case 14:
          this.setState({
            viewCount: data.value,
          })
          const newObjView = {
            type: 'VIEW_LIVE_MSG',   //进入直播间   
            msgContent: data.operatorName,
          }
          // this.setState({
          //   viewCount: data.value,
          //   persnolaMes: IMData.content.data,
          //   enjoyPersonal: true,
          // }, () => {
          //   this.timeContent();
          // });
          this.fillArrChat(newObjView);
          break
        case 20:
          objChat.type = 'END_LIVE_MSG'   //直播结束
          this.setState({
            liveStatus: 2,
          })
          break
        case 21:
          objChat.type = 'ITEM_LIST_CHANGE'   //商品列表发生更改
          this.getLivingData();
          this.queryLiveItems();
        case 24:
          objChat.type = 'RECOMMEND_ITEM'   //推荐商品列表发生变化
          this.getLivingData();
      }

    }
  }.bind(this);

  /**
     * 更新arrChat数组，添加游客所发消息
  * */

  this.fillArrChat = function (objParaChat) {
    if (objParaChat.type === 'CHAT_MSG') {
      const { barrageArr } = this.state;
      barrageArr.push(objParaChat);

      this.setState({
        barrageArr: barrageArr,
      }, () => {
        this.onScrollPanelChat2Bottom();
      })
    } else if (objParaChat.type === 'SHARE_MSG' || objParaChat.type == 'ORDER_MSG' || objParaChat.type == 'SHOW_BUY_SHOP') {
      const { barrageArr } = this.state;
      barrageArr.push(objParaChat);
      this.setState({
        barrageArr: barrageArr,
      }, () => {
        this.onScrollPanelChat2Bottom();
      })
    } else if (objParaChat.type == 'VIEW_LIVE_MSG') {
      console.log('12313123', objParaChat)
      this.setState({
        persnolaMes: objParaChat.msgContent,
        enjoyPersonal: true,
      }, () => {
        this.timeContent();
      })
    }
  }.bind(this);


  /**
   * 消息即时更新
   * 
  */
  this.onScrollPanelChat2Bottom = function () {
    const _this = this;
    Taro.createSelectorQuery().select('#hihi').boundingClientRect(function (res) {
      _this.setState({
        scrollTop: res.height,
      })
    }).exec()
  }.bind(this);

}