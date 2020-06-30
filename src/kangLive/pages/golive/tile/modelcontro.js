import TIM from 'tim-wx-sdk';
import Taro from '@tarojs/taro';
import Model from '@/model';
import { imgshare } from '@/utils';
import { message } from '@jxkang/wechat-utils';

export default function ModelContro() {
  /**
   * 改变时输入框中的值
  */
  this.showBtn = function (e) {
    this.setState({
      strInputText: e,
    })
  }.bind(this);

  /**
     * 控制分享开关
    */
  this.onCancalItem = function () {
    this.setState({
      isOpenShare: false,
      isOpened: false
    })
  }.bind(this);
  /**
   * 控制分享开关
  */
  this.share_item_mes = function () {
    this.setState({
      isOpenShare: true,
      isOpened: false
    })
    this.companyCode();  //获取邀请码
  }.bind(this);

  /**
   * 获取分享信息
   */
  this.companyCode = function () {
    Model.inviter.userCode().then(res => {
      if (res) {
        Taro.showShareMenu({
          withShareTicket: true
        })
        Taro.updateShareMenu({
          withShareTicket: true
        })
        this.setState({
          code: res.invitationCode,
          icon: res.icon,
          companyId: res.companyId
        })
        this.getLivesqrImg({ M: res.invitationCode, cId: res.companyId })
      }
    })
  }.bind(this);

  /**
   * 回到首页
   * */

  this.backIndexPage = function () {
    this.clearShareImg()
    Taro.switchTab({
      url: '/pages/index/index'
    })
  }.bind(this);

  this.hidePopup = function () {
    this.setState({
      chatInputPopup: false,
      focusMes: false,
    })
  }.bind(this);

  this.showPopUp = function () {
    this.setState({
      chatInputPopup: true,
      focusMes: true,
    })
  }.bind(this)
  /**
   * 获取键盘高度，将键盘顶起输入框
   * */
  this.getFocus = function (values, e) {
    const { height } = e.detail;
    console.log('height', height);
    this.setState({
      // keyBordHeight: `${height}px` || `0px`,
      keyBordHeight: Math.max(height || 0, this.state.keyBordHeight),
    })
  }.bind(this);


  /**
 * 控制按钮是否展示商品
*/

  this.handleClose = function () {
    this.setState({
      isOpened: false,
      isOpenShare: false,
    })
  }.bind(this);

  /**
   * 控制按钮是否展示商品
  */

  this.openisOpened = function () {
    const { playbackUrl, identifier, isbackLive } = this.state;
    const userInfo = this.props.globalStore.data.userInfo;
    this.setState({
      isOpened: true,
      isOpenShare: false,
    })
    this.queryLiveItems();
    if (!(playbackUrl && isbackLive == 1)) {
      this.dealBroadcast2JoinGroup8Custom({
        data: JSON.stringify(
          {
            'operatorName': userInfo.nickName ? userInfo.nickName : `游客_${identifier}`,
            'msgType': 9,
            'msgContent': `${userInfo.nickName ? this.formatName(userInfo.nickName) : `游客_${identifier}`}正在去买`
          }),
        description: '加入购物袋广播消息',
        extension: 'SHOW_BUY_SHOP'
      })

      const showBuyObj = {
        type: 'SHOW_BUY_SHOP',     //准备剁手
        msgContent: `${userInfo.nickName ? this.formatName(userInfo.nickName) : `游客_${identifier}`}正在去买`
      }
      this.fillArrChat(showBuyObj);
    }
  }.bind(this);


  this.stateChange = function (res) {
    console.log('看看错误码', `${res.detail.code}:${res.detail.message}`);
    switch (res.detail.code) {
      case -2301:
        message.warn('你的网络已经断开链接,请稍后重试');
        break
      case 2104:
        message.warn('当前网络不稳定');
        break
      case 2103:
        message.warn('网络断连, 已启动自动重连');
        break
    }
  }.bind(this);

  this.netStateus = function (res) {
    console.log('网络状', res);
  }

  // 退出群组信息

  // 页面销毁操作
  this.destroyAction = function () {
    this.dealQuitGroup()
    this.dealLogout()
    this.objTim.off(TIM.EVENT.SDK_READY, this.onSdkReady)
    this.objTim.off(TIM.EVENT.MESSAGE_RECEIVED, this.dealTimMessageReceived)
    this.objTim = null
  }.bind(this);

  // tim 退出组群  2.4.1
  this.dealQuitGroup = function () {
    const { liveDetail } = this.state;
    let promise = this.objTim.quitGroup(liveDetail.chatGroupId)
    promise.then(function (imResponse) {
      console.log(imResponse.data.groupID, '退出群组')
    }).catch(function (imError) {
      console.warn('quitGroup error:', imError)
    })
  }.bind(this);
  // tim 退出登录
  this.dealLogout = function () {
    let promise = this.objTim.logout()
    promise.then((imResponse) => {
      console.log(imResponse, '退出登录')
    }).catch(function (imError) {
      console.warn('logout error:', imError)
    })
  }.bind(this);

  this.stopPropagation = function (e) {
    e.preventDefault();
    e.stopPropagation();
  }.bind(this);

  this.clearShareImg = function () {
    imgshare.clearLiveShare()
  }.bind(this);

}