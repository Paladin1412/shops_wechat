import Taro from '@tarojs/taro';
import Model from '@/model';
import Assets from '@/components/assets';
import { imgshare } from '@/utils';

export default function InitData() {

  this.intercept = function () {
    const pageParams = this.$router.params
    console.log('pageParams', pageParams)
    if (pageParams.scene) {
      Model.common.parseShortCode({ shortCode: pageParams.scene }).then((res) => {
        const obj = JSON.parse(res)
        this.initRouterData({ sceneMap: obj, pageParams })
      })
    } else {
      this.initRouterData({ sceneMap: {}, pageParams })
    }
  }.bind(this);
  // 路由参数转换
  this.initRouterData = function ({ sceneMap, pageParams }) {
    const isLiveOrRe = pageParams.isLiveOrRedirectLive && pageParams.isLiveOrRedirectLive !== 'undefined' ? pageParams.isLiveOrRedirectLive : ''
    const companyId = pageParams.companyId || sceneMap.cId || this.getCompanyId();
    const liveId = pageParams.liveId || sceneMap.L;
    const pliveId = pageParams.pliveId || sceneMap.P || '';
    const isLiveOrRedirectLive = isLiveOrRe || sceneMap.I || '';
    const isbackLive = pageParams.isbackLive || sceneMap.isbackLive || '';
    this.setState({
      companyId,
      liveId,
      pliveId,
      isLiveOrRedirectLive,
      isbackLive,
    }, () => {
      this.initData()
    })
  }.bind(this);
  // 数据请求
  this.initData = function () {
    console.log('this.state.companyId', this.state.companyId)

    this.findDetail();  // init.js 直播详情

    this.setKeepScreenOn(); // init.js 屏幕常亮
    this.getSystemInfo(); // init.js 获取设备信息设置底部按钮距离

    Taro.hideShareMenu()

    this.getLivingData();  // init.js 获取直播间推荐商品（左上角）
    this.queryLiveItems();  // init.js 获取直播间推荐商品（弹出层）

    this.memberStatistics(); // init.js 获取直播店铺信息

    this.videoContext = Taro.createVideoContext('myVideo')

  }.bind(this);

  /**
   * 获取小程序二维码
   * */

  this.getLivesqrImg = function (params) {
    const { isLiveOrRedirectLive, pliveId, liveId, playbackUrl, isbackLive } = this.state;
    const obj = {
      I: isLiveOrRedirectLive,
      P: pliveId,
      L: liveId
    }
    if (playbackUrl && isbackLive == 1) {
      obj.isbackLive = 1;
    }
    const sceneMap = JSON.stringify(Object.assign({}, params, obj))
    imgshare.getLivesqrImg(sceneMap)
  }.bind(this);

  /**
   * 获取直播详情信息,推拉流
   **/

  this.findDetail = function () {
    const { liveId } = this.state;
    const currentData = {
      liveId: liveId
    }
    Model.liveapi.findDetail(currentData).then(res => {
      if (res) {
        // 海报直播主图
        imgshare.getLiveMainImg(res.adverImgUrl)
        this.setState({
          liveDetail: res,
          clientPullUrl: res.clientPullUrl,
          playbackUrl: res.playbackUrl,
          viewCount: res.viewCount,
        }, () => {
          const { playbackUrl, isbackLive } = this.state;
          if (!(playbackUrl && isbackLive == 1)) {
            this.queryStreamStatus(liveId); //查询流状态
          } else {
            // this.lastCommentList(liveId);  //拉取十条评论
            this.timeEnd();  //计时器开始
          }
        })
      }
    })
  }.bind(this);

  this.timeEnd = function () {
    let { countTime } = this.state;
    console.log(countTime);
    this.totalTime = setInterval(() => {
      countTime++;
      this.setState({
        currentTime: this.formateTime(countTime),
        countTime: countTime,
      })
    }, 1000);
  }

  this.clearTime = function () {
    clearInterval(this.totalTime);
  }

  this.formateTime = function (t = 0) {
    console.log(t);
    let sec, min;
    let currentSec = (Number.parseInt(t % 60));
    let currentMin = (Number.parseInt(t / 60));
    if (currentSec < 10) {
      sec = `0${currentSec}`
    } else {
      sec = `${currentSec}`
    }

    if (currentMin < 10) {
      min = `0${currentMin}`
    } else {
      min = `${currentMin}`
    }
    return `${min}:${sec}`;

  }


  /**
   * 获取流状态,用来判断是否要拉流
   * */

  this.queryStreamStatus = function (liveId) {
    const currentData = {
      liveId: liveId
    }
    Model.liveapi.queryStreamStatus(currentData).then(res => {
      if (!res) return false;
      if (Number(res) == 0) {
        // 0-活跃  1-禁播  2-非活跃   
        Taro.createLivePlayerContext('pusher');
        this.getSystemInfo();
        this.initTim();  // 初始化TIm聊天室
      } else {
        Taro.switchTab({
          url: '/pages/index/index'
        })
      }
    })
  }.bind(this);


  // 拉取十条评论 (暂时直播中的话不调用)
  // {
  //   name: data.operatorName,
  //   text: data.chatContent,
  //   avatar: data.operatorAdverImg,
  //   userType: data.userType,
  //   msgType: data.msgType,
  // }
  this.lastCommentList = function () {
    const { liveId } = this.state;
    const currentData = {
      liveId: liveId,
    }
    Model.liveapi.lastCommentList(currentData).then(res => {
      if (!res) return false;
      if (res.length > 0) {
        (res || []).map((v) => {
          this.fillArrChat({
            name: v.operatorName,
            text: v.content,
            userType: v.userType,
            type: 'CHAT_MSG'
          })
          return v;
        })
      }
    })
  }

  /**
   * 设置屏幕常亮
   * */

  this.setKeepScreenOn = function () {
    Taro.setKeepScreenOn({
      keepScreenOn: true
    }).then(() => {
      console.log('屏幕常亮设置成功')
    }).catch((err) => {
      console.log('屏幕常亮设置失败', err)
    })
  }

  /**
   * 获取设备宽高
  */

  this.getSystemInfo = function () {
    Taro.getSystemInfo({
      success: (res) => {
        if (res) {
          console.log('设备信息', res);
          let distance;
          if (res.platform == "devtools") {

          } else if (res.platform == "ios") {
            distance = 0;
          } else if (res.platform == "android") {
            distance = 10;
          }
          if (res.model === 'iPhone X') {
            this.setState({
              isIphoneX: true
            })
          }
          this.setState({
            windowHeight: res.windowHeight,
            statusBarHeight: res.statusBarHeight,
            positionType: distance ? distance : 0,
          })
        }
      }
    })
  }.bind(this);

  /**
  * 获取直播中的推荐商品(左上角)
  * */
  this.getLivingData = function () {
    const { liveId } = this.state;
    const currentData = {
      liveId: liveId,
      dataType: 3,
    }
    Model.liveapi.getLivingData(currentData).then(res => {
      if (!res) return false;
      this.setState({
        recommendItemVOList: res.recommendItemVOList || [],
      })
    })
  }.bind(this);


  /**
  * 获取直播相关所有商品(弹出层商品)
  * */

  this.queryLiveItems = function () {
    const { liveId } = this.state;
    const currentData = {
      liveId: liveId,
    }
    Model.liveapi.queryLiveItems(currentData).then(res => {
      if (!res) return false;
      // 海报商品列表
      imgshare.getLiveGoodsImg(res)
      this.setState({
        goodslist: res
      })
    })
  }.bind(this);

  /**
 * @description: 当前店铺信息
 * @param {type} 
 * @return: 
 */

  this.memberStatistics = function () {
    const { companyId } = this.state;
    const currentData = {
      companyId: companyId,
    }
    Model.goods.shopBaseInfo(currentData).then(res => {
      if (res) {
        console.log('+++++=companyMes++++', res);
        this.setState({
          companyMes: res,
        })
        imgshare.getLiveShopImg(res.logo || Assets.goods.defalutHead)
      }
    })
  }.bind(this);

}