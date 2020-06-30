/**
 * @Author: qiang.zhang
 * @Email: 1196217890@qq.com
 * @Update: 2020-02-25 14:03:04
 * @Description: true
 */
import Taro from '@tarojs/taro';
import { View, Image, Text, Swiper, SwiperItem } from '@tarojs/components';
import { AtFloatLayout, AtModal } from "taro-ui";
import ListView from 'taro-listview';
// import { Ellipsis } from '@jxkang/wechat-cmpt';
import Ellipsis from '@/components/ellipsis';
import withPage from '@/components/with-page';
import ShareTool from '@/components/share-tool';
import Model from '@/model';
import Assets from '@/components/assets'
import Common from '@/utils/common'
import Utils, { imgshare } from '@/utils';
import Config from '@/config';
import Empty from '@/components/empty';
import Collectmodal from '@/components/collect-modal'
import styles from './index.module.styl';

const { getFileUrl } = Utils.appUtils;

@withPage
class Index extends Taro.Component {
  constructor(props) {
    super(props);

    this.config = {
      navigationBarTitleText: '',
      navigationStyle: 'custom',
      navigationBarTextStyle: 'white',
      enablePullDownRefresh: false,
      backgroundColorTop: '#F9482E',
    }

    this.state = {
      upgradeVisible: false,
      id: "",
      shopList: [],
      pageIndex: 1,
      hasMore: true,
      isEmpty: false,
      companyMes: {},
      screenHeight: '',
      shopLevel: 1,
      isOpenShare: false,
      noLive: 0,
      liveDetail: {},
      goodsList: [],
      statusBarHeight: 0,
      turnLiveList: [],
      // 弹窗等级
      dialogGrade: null,
      liveMes: [],
      mark: '',
      liveList: [1, 2, 3],
      currentNum: 0,
      isGoodsRequested: false, // 控制没有爆品时的图片显示时机
    };

    this.listStatus = false;

  }
  // 获取弹窗

  getDialog = () => {
    Model.common.getUpMemberMsg().then(data => {
      if (data) {
        this.setState({
          id: data.id,
          upgradeVisible: true,
          dialogGrade: data.bizExtend,
        })
      }
    })
  }

  componentWillReact() {

  }

  componentDidShow() {
    this.allGetInner();
    this.redirectMarket();
    this.addViewRecord();
    // this.companyCode()
    Taro.showShareMenu({
      withShareTicket: true
    })
    Taro.updateShareMenu({
      withShareTicket: true
    })
  }

  /**
   * 记录浏览店铺
   */
  addViewRecord = () => {
    const { globalStore } = this.props;
    const { userInfo, shopCacheList } = globalStore.data;
    const companyId = parseInt(this.getCompanyId() || '', 10);
    if (!companyId) {
      this.logger({ logs: '没有companyId, 不需要记录companyId' })
      return;
    }
    console.log('userInfo.token', userInfo.token);
    if (userInfo.token) {
      Model.login.addViewRecord({ companyIds: [companyId] });
    } else {
      if (shopCacheList.indexOf(companyId) == -1) {
        shopCacheList.push(companyId);
        globalStore.setData('shopCacheList', shopCacheList, 'index.jsx,line:112');
      }
    }
  }

  allGetInner = () => {
    const { globalStore } = this.props;
    const { userInfo } = globalStore.data;
    this.setState({
      shopList: [],
    })
    const that = this;

    const { systemInfo: { screenWidth, screenHeight, statusBarHeight } } = globalStore.data;
    const companyId = this.getCompanyId();
    imgshare.init({ companyId })
    const { bottom } = Taro.getMenuButtonBoundingClientRect();
    that.setState({
      screenHeight, // 80是底部Tab高度
      statusBarHeight,
    }, () => {
      that.agentitem({});
      that.memberStatistics();
      // that.queryLiveByCompanyId({ companyId: companyId });
      that.queryLiveListByCompanyId({ companyId: companyId })
      if (userInfo.token) {
        that.getDialog();
        that.getCompanyCode();
        that.getShopMemberLevel();
      } else {
        this.getQrCode({})
      }
    })

  }

  /**
   * 拉取直播间直播内容
   * */

  queryLiveListByCompanyId = ({ companyId }) => {
    const currentData = {
      companyId,
    }
    Model.liveapi.queryLiveListByCompanyId(currentData).then(res => {
      if (!res) return false;
      console.log('获取到的信息', res);
      this.setState({
        liveList: res,
        noLive: res.length != 0 ? 1 : 0
      })
    })
  }

  //  获取自己的邀请码
  getCompanyCode = () => {
    Model.inviter.userCode().then(res => {
      if (res) {
        this.setState({
          mark: res.invitationCode,
          icon: res.icon,
        })
        this.getQrCode({ M: res.invitationCode })
      }
    })
  }

  getQrCode = (params) => {
    const companyId = this.getCompanyId();
    const sceneMap = Object.assign(params, {
      cId: companyId,
    })
    console.log('getQrCode', sceneMap)
    imgshare.getShopQrImg({ sceneMap, companyId })
  }

  // onPullDownRefresh =()=> {
  //   const that = this;
  //   that.queryLiveByCompanyId(companyId);
  // }

  onShareAppMessage = (options) => {
    this.logger({ logs: 'C端分享' })
    const { companyMes, mark } = this.state;
    const companyId = this.getCompanyId();

    var that = this;
    // 设置菜单中的转发按钮触发转发事件时的转发内容
    var shareObj = {
      title: companyMes.shopName,        // 默认是小程序的名称(可以写slogan等)
      path: `/pages/index/index?companyId=${companyId}&mark=${mark}`,        // 默认是当前页面，必须是以‘/’开头的完整路径
      imageUrl: Assets.common.share_logo,
      success: function (res) {
        // 转发成功之后的回调
        if (res.errMsg == 'shareAppMessage:ok') {

        }
      },
      fail: function () {
        // 转发失败之后的回调
        if (res.errMsg == 'shareAppMessage:fail cancel') {
          // 用户取消转发
        } else if (res.errMsg == 'shareAppMessage:fail') {
          // 转发失败，其中 detail message 为详细失败信息
        }
      },
      complete: function () {
        // 转发结束之后的回调（转发成不成功都会执行）
      }
    };
    return shareObj;
  }


  queryLiveByCompanyId = ({ companyId, callBack }) => {
    const currentData = {
      companyId: companyId
    }
    Model.liveapi.queryLiveByCompanyId(currentData).then(res => {
      if (res) {
        if (!res.id) {
          this.setState({
            noLive: 0,
          })
        } else {
          this.setState({
            noLive: 1,
            liveDetail: res,
          }, () => {
            const { liveDetail } = this.state;
            if (callBack) {
              callBack();
            }
          })
        }
      }
    })
  }

  getShopMemberLevel = () => {
    const companyId = this.getCompanyId();
    Model.order.getShopMemberLevelInfo({ companyId }).then(res => {
      if (res) {
        this.setState({
          shopLevel: Number(res.memberLevel)
        })
      }
    })
  }

  /**
   * @description: 获取商品列表
   * @param {type} 
   * @return: 
   */

  agentitem = ({ pageNo = 1, callBack, pageSize = 15 }) => {
    const { shopList } = this.state;
    const companyId = this.getCompanyId();
    const currentData = {
      pageNo: pageNo,
      pageSize: pageSize,
      agentCompanyId: companyId,
    }
    Model.goods.agentitem(currentData).then(res => {
      if (!res) {
        return false
      }
      this.setState({
        shopList: shopList.concat(res),
        pageIndex: pageNo,
        hasMore: !(res.length < pageSize),
        isGoodsRequested: true
      }, () => {
        if (callBack) {
          callBack();
          this.listStatus = false;
        }
      })
    })
  }

  /**
   * @description: 分页获取数据
   * @param {type} 
   * @return: 
   */

  onScrollToLower = (fn) => {
    if(this.listStatus){
      return false;
    }

    this.listStatus = true;

    this.state.pageIndex += 1;
    const pageNum = this.state.pageIndex;

    this.agentitem({ pageNo: pageNum, callBack: fn });
  };

  /**
   * @description: 店铺会员统计
   * @param {type} 
   * @return: 
   */

  memberStatistics = () => {
    const companyId = this.getCompanyId();
    const currentData = {
      companyId: companyId,
    }
    Model.goods.shopBaseInfo(currentData).then(res => {
      if (res) {
        this.setState({
          companyMes: res,
        })
        imgshare.getshopInfo({
          shopInfo: { shopName: res.shopName, logo: res.logo || Assets.goods.defalutHead },
          companyId
        })
      }
    })
  }

  /**
    * @description: 进入门店详情
    * @param {type} 
    * @return: 
    */
  shareItem = (item, type) => {
    const companyId = this.getCompanyId();
    if (type === 2) {
      Taro.navigateTo({
        url: `/pages/goodsdetail/goodsdetail?agentItemId=${item.agentItemId}&itemId=${item.itemId}&companyId=${companyId || Taro.getStorageSync('userInfo').companyId}`
      });
    } else {
      this.setState({
        isOpenShare: true,
      })
    }
  }

  onCancalItem = () => {
    this.setState({
      isOpenShare: false,
    })
  }

  goBackLiveList = () => {
    Taro.navigateTo({
      url: '/kangLive/pages/backlive/backlive'
    })
  }

  goLive = (livedetail) => {
    console.log('livedetail', livedetail);
    const companyId = this.getCompanyId();
    console.log(`/kangLive/pages/prelive/prelive?liveId=${livedetail.id}&companyId=${companyId}&isLiveOrRedirectLive=${livedetail.isLiveOrRedirectLive || ''}&pliveId=${livedetail.pliveId || 0}`);

    if (livedetail.liveStatus == 2) {
      if (livedetail.streamStatus == 0) {
        Taro.navigateTo({
          url: `/kangLive/pages/golive/golive?liveId=${livedetail.id}&companyId=${companyId}&isLiveOrRedirectLive=${livedetail.isLiveOrRedirectLive}&pliveId=${livedetail.pliveId || 0}`
        })
      } else {
        return false;
      }
    } else {
      Taro.navigateTo({
        url: `/kangLive/pages/prelive/prelive?liveId=${livedetail.id}&companyId=${companyId}&isLiveOrRedirectLive=${livedetail.isLiveOrRedirectLive || ''}&pliveId=${livedetail.pliveId || 0}`
      })
    }
  }

  insRef = (node) => {
    this.refList = node;
  };

  onShowItem = () => {
    this.collect.setState({
      shareVisible: true
    })
  }

  componentWillUnmount() { }

  componentDidHide() {
    this.resetValue();
  }

  redirectMarket = () => {
    const companyId = this.getCompanyId();
    const currentData = {
      page: 1,
      pageSize: 5,
      companyId: companyId,
    }
    Model.liveapi.redirectMarket(currentData).then((res) => {
      if (res) {
        console.log(res);
        this.setState({
          turnLiveList: res || [],
        })
      }
    })
  }

  resetValue = () => {
    if (this.state.upgradeVisible) {
      this.setState({ upgradeVisible: false });
    }
    if (this.state.isGoodsRequested) {
      this.setState({ isGoodsRequested: false });
    }
  }

  backToHome = () => {
    Taro.redirectTo({
      url: '/pages/home/home'
    })
  }

  onCloseUpgrade = () => {
    const id = this.state.id;
    if (id) {
      Model.common.upRead({
        id
      })
    }
    this.setState({ upgradeVisible: false });
  }

  pullDownRefresh = (fn) => {
    const companyId = this.getCompanyId();
    // this.queryLiveByCompanyId({ callBack: fn, companyId: companyId });
  }

  swiperChange = (e) => {
    const { current } = e.detail;
    console.log(current);
    this.setState({
      currentNum: current,
    })
  }

  lookMoreMes = () => {
    Taro.navigateTo({
      url: '/kangLive/pages/turn-live/turn-live'
    })
  }

  stopPropagation = (e) => {
    e.preventDefault();
    e.stopPropagation();
  }

  render() {
    const { upgradeVisible, id, isLoaded, shopList, dialogGrade,
      hasMore, isEmpty, screenHeight, statusBarHeight, liveMes,
      companyMes, isOpenShare, shopLevel, icon, mark, companyId,
      noLive, liveDetail, goodsList, liveList, currentNum,
      isGoodsRequested, turnLiveList } = this.state;
    const { top, height } = Taro.getMenuButtonBoundingClientRect();
    if (!statusBarHeight) { return; } // 防止头部信息抖动
    return (
      <View className={`${styles.allInner} ${shopList.length == 0 && isGoodsRequested ? styles.noLoaded : ''}`}>
        <View className={`${styles.header}`} style={{ height: `${statusBarHeight + 44}px` }}>
          <View className={`${styles.headerInner}`} style={{ height: `${statusBarHeight + 44}px` }}>
            <View className={styles.headerTitle}>康小铺</View>
            <Image onClick={this.backToHome} className={`${styles.indexBtn} no-loading`} src={Assets.common.indexBtn}></Image>
          </View>
        </View>
        <View className={styles.listContainer}>
          <ListView
            ref={node => this.insRef(node)}
            isLoaded={isLoaded}
            hasMore={hasMore}
            style={{ top: `${top + height}px` }}
            className={styles.scroll_content}
            onScrollToLower={this.onScrollToLower}
            onPullDownRefresh={this.pullDownRefresh}
            launch={{
              launchEmpty: true
            }}
            renderEmpty={<View className={styles.empty_box}><Empty /></View>}
          >
            {/* 头部信息 */}
            <View style={{ backgroundImage: `url(${Utils.appUtils.getFileUrl(Assets.home.bg)})` }} className={styles.topInner}>
              <View className={styles.indexInner}>
                <View className={styles.titleTwoInner}>
                  <View className={styles.headInner}>
                    <Image className={`${styles.headInnerImg}`} src={Utils.appUtils.getFileUrl(companyMes.logo) || Assets.goods.defalutHead} alt="" />
                  </View>
                  <View className={styles.logoImg}>
                    <View className={styles.leftText}>
                      <View className={styles.shopName}>
                        <Ellipsis count={1}>{companyMes.shopName || null}</Ellipsis>
                      </View>
                    </View>
                    <View className={styles.bottomContainer}>
                      <Image className={`${styles.logoImgMes} no-loading`} src={Assets.other.indexJD}></Image>
                      <View className={styles.fans}>粉丝 {companyMes.memberNum || 0}</View>
                    </View>
                  </View>
                </View>

                <View className={styles.priceTwoInner} onClick={() => this.shareItem(null, 1)}>
                  <View className={styles.shareLabel}>分享店铺</View>
                </View>
              </View>
            </View>
            <View className={styles.scroll_body}>
              {/* 他的直播 */}
              {noLive == 1 ? (
                <View>
                  {/* <View className={styles.dailytMes} style={{ marginBottom: '14px' }}>
                    <View className={styles.leftPoint}></View>
                    <View className={styles.rightText}>Ta的直播</View>
                  </View> */}
                  <Swiper
                    style={{ height: '390rpx' }}
                    onChange={(e) => this.swiperChange(e)}
                  >
                    {(liveList || []).map((v, index) => {

                      return (

                        <SwiperItem key={index + 1}>
                          {!v.supportPlayBack ?
                            <View className={styles.liveStyle} onClick={() => this.goLive(v)}>
                              <View className={styles.liveLeft}>
                                <Image className={`${styles.imgTopStyle} no-loading`} src={Utils.appUtils.getFileUrl(v.adverImgUrl)}></Image>
                                {console.log('11111', Boolean(v.isReservation && v.isReservation == 0))}
                                {v.isReservation == 0 ? <View className={styles.liveText}>
                                  <View className={styles.liveLeftText}>
                                    <Image className={`${styles.imgStyle} no-loading`} src={Assets.my.shopgif}></Image>
                                    <Text>{v.streamStatus == 0 ? '直播中' : '主播已离开'}</Text>
                                  </View>
                                  {v.viewCount == 0 ? null : <View className={styles.liveRightText}>{v.viewCount || 0}人观看</View>}
                                </View> : null}

                                {v.isReservation != 0 ? <View className={styles.liveText}>
                                  <View className={styles.liveLeftText_pre}>
                                    <Text>{v.liveStatus !== 2 ? '直播预告' : null}</Text>
                                  </View>
                                  <View className={styles.liveRightText}>{Common.formatDateTime(v.startTime)}</View>
                                </View> : null}

                              </View>

                              <View className={styles.liveRight}>
                                <View className={styles.topHead}>
                                  {v.name}
                                </View>

                                <View className={styles.botHead}>
                                  {(v.showItemList).map((vs, inx) => {
                                    return (
                                      <View className={styles.eveImg} key={inx + 1}>
                                        <Image className={styles.eveImg_mes} src={Utils.appUtils.getFileUrl(vs.mainImgUrl)}></Image>
                                        {
                                          inx === v.showItemList.length - 1
                                            ? <View className={styles.eveNum}>
                                              <View className={styles.numText}>{v.itemCount < 100 ? v.itemCount : '99+'}</View>
                                              <View className={styles.numText}>宝贝</View>
                                            </View>
                                            : null
                                        }
                                      </View>
                                    )
                                  })}
                                </View>
                              </View>
                            </View>
                            : null}
                          {v.supportPlayBack ? <View className={styles.liveStyle} onClick={this.goBackLiveList}>
                            <Image className={styles.imgMes} src={v.adverImgUrl}></Image>
                          </View> : null}
                        </SwiperItem>
                      )
                    })}
                  </Swiper>
                  <View className={styles.pro_style}>
                    <View className={styles.progress_mes} style={{ width: `${liveList.length * 40}px` }}>
                      <View className={styles.eveProess} style={{ width: '40px', left: `${Number(currentNum) * 40}px` }}></View>
                    </View>
                  </View>
                </View>) : null}

              {/* 他的转播 */}
              {turnLiveList.length !== 0 ? <View className={styles.turnLive}>
                <View className={`${styles.dailytMes_fir}`}>
                  <View className={styles.turnLive_mes}>
                    <View className={styles.left_Point_img}>
                      <Image className={`${styles.leftpoint_Img} no-loading`} src={Assets.common.turnImg}></Image>
                    </View>
                    <View className={styles.rightText}>推荐直播</View>
                  </View>
                  {
                    turnLiveList.length > 2 ?
                      <View className={styles.look_more_style} onClick={this.lookMoreMes}>
                        <Text className={styles.look_More}>查看更多</Text>
                        <View className={`iconfont icongengduo ${styles.icon_style}`}></View>
                      </View> : null
                  }
                </View>
                <View className={styles.turnList}>
                  {(turnLiveList || []).map((v, index) => {
                    return (
                      index < 2 ?
                        <View className={styles.turn_Data_List} key={index + 1}>
                          <View className={styles.fixed_style} onClick={() => this.goLive(v)}>
                            <Image className={styles.fixed_style_img} src={v.adverImgUrl}></Image>
                            <View className={styles.bgGradient}></View>
                            <View className={styles.liveText}>
                              {v.liveStatus == 2 ?
                                <View className={`${styles.liveLeftText} ${styles.turnLeftText}`}>
                                  <Image className={`${styles.imgStyle} no-loading`} src={Assets.my.shopgif}></Image>
                                  <Text>{v.streamStatus == 0 ? '直播中' : '主播已离开'}</Text>
                                </View> : <View className={`${styles.liveLeftText} ${styles.preLeftText}`}>
                                  <Text>{v.liveStatus !== 2 ? '直播预告' : null}</Text>
                                </View>}
                            </View>
                            <View className={styles.bot_style}>
                              <Ellipsis count={1} className={styles.lookNum_style}>
                                {v.liveStatus == 1 ? <View className={styles.liveRightText}>{Common.formatDateTime(v.startTime)}开播</View> : null}
                                {v.liveStatus == 2 && v.viewCount != 0 ? <View className={`${styles.liveRightText} ${styles.turnLiveLabel}`}>{`${v.viewCount || 0}人正在观看`}</View> : null}
                              </Ellipsis>
                              <Ellipsis count={1} className={styles.lookShop_style}>
                                {v.name}
                              </Ellipsis>
                            </View>

                          </View>
                        </View> : null

                    )
                  })}

                </View>
              </View> : null
              }

              {/* 今日爆品 */}
              <View className={styles.firInner}>
                <View className={`${styles.dailytMes_sec}`}>
                  <View className={styles.left_Point_img}>
                    <Image className={`${styles.leftpoint_Img} no-loading`} src={Assets.home.todayrot}></Image>
                  </View>
                  <View className={styles.rightText}>今日爆品</View>
                </View>

                {
                  (shopList || []).map((v, index) => {
                    return (<View className={styles.eveInner} key={v.id} onClick={() => this.shareItem(v, 2)}>
                      <View className={styles.topContent}>
                        <Image className={styles.leftInner} src={Utils.appUtils.getFileUrl(v.mainImgUrl) || Assets.home.backImage} alt="" />
                        <View className={styles.RightInner}>
                          <View className={styles.titleInner} >
                            <Ellipsis count={2}>{v.itemTitle}</Ellipsis>
                          </View>
                          <View className={styles.sharePrice}>
                            {shopLevel == 1 ? null : v.maxShareFee != 0 ? <View className={styles.sharePriceInner}>分享赚{v.maxShareFee}元</View> : null}
                          </View>
                          <View className={styles.priceInner}>
                            <View className={styles.priceMes}>
                              <Text className={styles.priLogo}>¥</Text>
                              <Text className={styles.priStyle}>{v.minTradePrice}</Text>
                              {v.minScribingPrice ? <Text className={styles.botStyle}><Text className={styles.symbol}>¥</Text>{v.minScribingPrice}</Text> : ''}
                            </View>
                          </View>
                          <View className={styles.twoButton}>
                            <View className={styles.shareButton}>分享</View>
                            <View className={styles.getButton}>
                              抢购
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>)
                  })
                }
                {
                  shopList.length == 0 && isGoodsRequested
                    ? <View className={styles.nogoodsContainer}>
                      <Image className={styles.nogoodsImg} src={Assets.goods.defalutNoGoods}></Image>
                      <View className={styles.nogoodsLabel}>这个小店还没上新过商品呢...</View>
                    </View>
                    : null
                }
              </View>
            </View>
          </ListView>

        </View>
        {/* <Foot onShowItem={this.onShowItem} /> */}

        {/* {shopLevel == 1 ? null : <View className={styles.shareImgMes}>
          <Image className={styles.shareImgTe} src={Assets.goods.shareImg} alt="" onClick={() => this.shareItem(null, 1)} />
        </View >} */}

        <View className={`${styles.share_popup} ${isOpenShare ? styles.visibility : null}`} onClick={() => this.onCancalItem()}>
          <View className={styles.share_inner} onClick={this.stopPropagation}>
            <View className={`${styles.share_title} last`}>分享店铺到</View>
            <View className={styles.share_content}>
              <ShareTool
                params={
                  {
                    code: mark,
                    link: `${Config.webHost}/#/pages/login-guide/login-guide?mark=${mark}&companyId=${companyId}`,
                    icon: icon ? `${Config.crossFile}?uri=${getFileUrl(icon)}` : getFileUrl(Assets.common.default_avatar),
                    type: 'shop',
                    showShareImg: true,
                  }
                }
                ref={node => this.share = node}
              />
              <View className={styles.cancalItem}>
                <View className={styles.cancalBtn} onClick={() => this.onCancalItem()}>
                  取消
              </View>
              </View>
            </View>
          </View>
        </View>
        <Collectmodal ref={node => this.collect = node} />
        {/** 已成为 高级会员 用户提示 */}
        <View className={styles.upgrade_tip}>
          <AtModal
            isOpened={upgradeVisible}
            onClose={this.onCloseUpgrade}
          >
            {dialogGrade == 1 && <Image className={styles.silverImg} src={Assets.common.silverDialog} onClick={this.onCloseUpgrade} />}
            {dialogGrade == 2 && <Image className={styles.img} src={Assets.common.goldDialog} onClick={this.onCloseUpgrade} />}
            {dialogGrade == 3 && <Image className={styles.img} src={Assets.common.diamondDialog} onClick={this.onCloseUpgrade} />}
            <View className={`iconfont iconguanbi1 ${styles.close}`} onClick={this.onCloseUpgrade} />
          </AtModal>
        </View>
      </View >
    );
  }
}

export default Index;
