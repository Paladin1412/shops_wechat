/**
 * @Author: qiang.zhang
 * @Email: 1196217890@qq.com
 * @Update: 2020-04-17 14:35:56
 * @Description: 预约直播页面
 */
import Taro from '@tarojs/taro';
import { View, Image, ScrollView, Text, Button } from '@tarojs/components';
import Utils, { appUtils } from '@/utils';
import withPage from '@/components/with-page';
import Ellipsis from '@/components/ellipsis';
import Model from '@/model';
import Assets from '@/components/assets';
import Common from '@/utils/common'
import styles from './prelive.module.styl';


// 下面代码可删用于测试事件延迟效果


@withPage
class Prelive extends Taro.Component {
  constructor(props) {
    super(props);

    this.config = {
      // navigationBarTitleText: '初始化界面标题',
      navigationStyle: 'custom',
      navigationBarTextStyle: 'white'
    }
    this.state = {
      buttonTop: '',
      buttonHeight: '',
      shopList: [1, 2, 3, 4, 5, 6],
      showTop: false,
      liveId: this.$router.params.liveId,
      mark: '',
      liveDetail: '',
      companyMes: '',
      timeCount: '',
      liveMes: '',
      liveHad: '',
      isLiveOrRedirectLive: this.$router.params.isLiveOrRedirectLive,
    };

    appUtils.delay(
      this,
      ['goItemlive']
    );
  }

  componentWillReact() { }

  componentDidMount() {

  }

  //  获取自己的邀请码
  getCompanyCode = () => {
    Model.inviter.userCode().then(res => {
      if (res) {
        this.setState({
          mark: res.invitationCode,
        })
      }
    })
  }

  onShareAppMessage = () => {
    this.logger({ logs: 'C端分享' })
    const { mark, liveDetail, liveId, isLiveOrRedirectLive } = this.state;
    const companyId = this.getCompanyId();
    var shareObj = {
      title: liveDetail.name,
      path: `/kangLive/pages/prelive/prelive?companyId=${companyId}&liveId=${liveId}&mark=${mark}&isLiveOrRedirectLive=${isLiveOrRedirectLive}`,
      imageUrl: Utils.appUtils.getFileUrl(liveDetail.adverImgUrl),
      success: function (res) {
        // 转发成功之后的回调
        if (res.errMsg == 'shareAppMessage:ok') {
          console.log('转发成功')
        }
      },
      fail: function (res) {
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

  componentWillUnmount() {
    clearInterval(this.timeMes);
  }

  componentDidShow() {
    Taro.showShareMenu({
      withShareTicket: true
    })
    Taro.updateShareMenu({
      withShareTicket: true
    })
    const { top, height } = Taro.getMenuButtonBoundingClientRect();
    const that = this;
    that.setState({
      buttonTop: top,
      buttonHeight: height
    }, () => {
      that.findDetail();
      that.memberStatistics();
      that.queryStreamStatus();
    })
  }

  componentDidHide() { }

  /**
   * 获取直播详情信息
   * */

  findDetail = () => {
    const { liveId, isLiveOrRedirectLive } = this.state;
    const currentData = {
      liveId: liveId
    }
    if (!isLiveOrRedirectLive) {
      Model.liveapi.getReservationLiveDetail(currentData).then(res => {
        const that = this;
        if (res) {
          that.setState({
            liveDetail: res.liveBroadcastVO,
            shopList: res.recommendItemVOList,
          }, () => {
            const { liveDetail } = that.state;
            if (liveDetail.liveStatus == 1) {
              that.timeMes = setInterval(() => {
                that.countItem(liveDetail.startTime)
              }, 1000);
            }
          })
        }
      })
    } else {
      Model.liveapi.getReservationLiveDetailForRedirect(currentData).then(res => {
        const that = this;
        if (res) {
          that.setState({
            liveDetail: res.liveBroadcastVO,
            shopList: res.recommendItemVOList,
          }, () => {
            const { liveDetail } = that.state;
            if (liveDetail.liveStatus == 1) {
              that.timeMes = setInterval(() => {
                that.countItem(liveDetail.startTime)
              }, 1000);
            }
          })
        }
      })
    }
  }

  /**
   * @description: 获取店铺头像
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
      }
    })
  }

  /**
   * 获取流状态
   * */

  queryStreamStatus = () => {
    // "streamStatus" : 1    // 0-活跃  1-禁播  2-非活跃
    const { liveId } = this.state;
    const currentData = {
      liveId
    }
    const that = this;
    Model.liveapi.queryStreamStatus(currentData).then(res => {
      if (!res) return false;
      that.setState({
        liveMes: res
      })
    })
  }

  goItemlive = () => {
    const { liveDetail } = this.state;
    Taro.navigateTo({
      url: `/kangLive/pages/golive/golive?liveId=${liveDetail.id}`
    })
  }
  /**
   * 检测手势内容
   * */
  onScroll = (e) => {
    const top = e.detail.scrollTop
    if (top > 100) {
      this.setState({
        showTop: true
      })
    } else {
      this.setState({
        showTop: false
      })
    }
  }
  /**
   * 进入商品详情
   * */

  shareItem = (item, type) => {
    const companyId = this.getCompanyId();
    if (type === 2) {
      Taro.navigateTo({
        url: `/pages/goodsdetail/goodsdetail?agentItemId=${item.agentItemId}&itemId=${item.itemId}&companyId=${companyId || Taro.getStorageSync('userInfo').companyId}&selfItem=${item.selfItem}`
      });
    }
  }

  // 时间倒计时计算
  countItem = (end) => {
    var date = new Date();
    var now = date.getTime();
    var leftTime = end - now;
    var d, h, m, s;
    if (leftTime >= 0) {
      if (leftTime >= 0) {
        d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
        h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
        m = Math.floor(leftTime / 1000 / 60 % 60);
        s = Math.floor(leftTime / 1000 % 60);
      }
      d = this.checkTime(d);
      h = this.checkTime(h);
      m = this.checkTime(m);
      s = this.checkTime(s);

      this.setState({
        timeCount: `${d}天${h}时${m}分${s}秒`,
        liveHad: 1,
      })
    } else {
      this.setState({
        liveHad: 0
      })
    }
  }

  checkTime = (i) => {
    if (i < 10) {
      i = '0' + i
    }
    return i
  }

  /**
   * 返回上一页
   * */
  goIndex = () => {
    Taro.switchTab({
      url: '/pages/index/index'
    })
  }

  render() {
    const { buttonTop, buttonHeight, shopList } = this.state;
    const { liveDetail, companyMes, timeCount, liveMes, mark, showTop, liveHad } = this.state;
    return (
      <View className={styles.preLive}>
        <View
          className={`${styles.top_box} ${showTop === true ? styles.top_box_active : null}`}
        >
          <View className={styles.top_inner} style={{ marginTop: `${buttonTop}px`, height: `${buttonHeight}px` }} onClick={this.goIndex}>
            <Image src={Utils.appUtils.getFileUrl(Assets.common.go_back, { w: 64 })} className={`${styles.back_img} no-loading`}></Image>
            <View className={`iconfont ${styles.go_back_icon}`} onClick={this.goIndex}>&#xe682;</View>
            <View className={styles.font}>直播详情</View>
          </View>

        </View>

        <View className={styles.pre_imgMes}>
          <Image className={styles.pre_img_detail} src={Utils.appUtils.getFileUrl(liveDetail.adverImgUrl)}></Image>
          <View className={styles.liveText} style={{ top: `${buttonTop + buttonHeight + 34}px` }}>
            {liveDetail.liveStatus == 1 ? <View className={styles.liveLeftText}>
              <Image className={styles.imgStyle} src={Assets.my.shopgif}></Image>
              <Text>预告</Text>
            </View> : null}
            {liveDetail.liveStatus == 2 ? <View className={styles.liveLeftText_livemes}>
              <Image className={styles.imgStyle} src={Assets.my.shopgif}></Image>
              <Text>{liveMes == 0 ? "直播中" : '主播暂时离开'}</Text>
            </View> : null}
            {liveDetail.liveStatus == 1 ? <View className={styles.liveRightText}>{Common.formatDateTime(liveDetail.startTime)}开播</View> : null}
            {liveDetail.liveStatus == 2 ? <View className={styles.liveRightText}>{`${liveDetail.viewCount || 0}人正在观看`}</View> : null}

          </View>
          {liveDetail.liveStatus == 1 ? <View className={styles.pre_time} style={{ top: `${buttonTop + buttonHeight + 160}px` }}>
            {liveHad == 1 ? <View className={styles.pre_time_button}>
              距离开播还有{timeCount}
            </View> : null}

          </View> : null}

        </View>

        <ScrollView
          className={styles.shop_list}
          scrollY
          scrollWithAnimation
          onScroll={this.onScroll}
        >
          <View className={styles.live_style_top}></View>
          <View className={styles.live_shop_mes}>
            <View className={styles.box_Top}>
              <View className={styles.head_top}>
                <View className={styles.head_left}>
                  <Image className={styles.head_left_img} src={Utils.appUtils.getFileUrl(companyMes.logo || Assets.goods.defalutHead)}></Image>
                </View>
                <View className={styles.head_right}>{companyMes.shopName}</View>
              </View>
              <View className={styles.head_bottom}>
                <View className={styles.live_line}></View>
                <View className={styles.live_title}>
                  <Ellipsis>
                    {liveDetail.name}
                  </Ellipsis>
                </View>
              </View>
            </View>
            <View style={{ paddingBottom: '140px' }}>
              {
                (shopList || []).map((v) => {
                  return (<View className={styles.eveInner} key={v.id}>
                    <View className={styles.leftInner}>
                      <Image className={styles.leftInnerImg} src={Utils.appUtils.getFileUrl(v.mainImgUrl) || Assets.home.backImage} alt='' />
                    </View>
                    <View className={styles.RightInner}>
                      <View className={styles.titleInner} >
                        <Ellipsis count={2}>{v.itemTitle}</Ellipsis>
                      </View>

                      <View className={styles.priceInner}>
                        {liveDetail.liveStatus == 1 ? null : <View className={styles.priceMes}>
                          <Text className={styles.priLogo}>直播间价格：</Text>
                          {liveDetail.liveStatus == 1 ? <Text className={styles.priStyle}>???</Text> : null}
                          {liveDetail.liveStatus == 2 ? <Text className={styles.priStyle}>¥{v.minTradePrice}</Text> : null}
                        </View>}
                      </View>
                    </View>
                  </View>)
                })
              }
            </View>
          </View>
        </ScrollView>
        <View className={styles.share_item_style}>

          {liveDetail.liveStatus == 1 ? <Button open-type={mark ? 'share' : ''} className={styles.share_item_Button} onClick={mark ? null : () => this.getCompanyCode()}>分享直播间预告</Button> : null}

          {liveDetail.liveStatus == 2 ?
            <View
              className={styles.share_item_Button_enter}
              onClick={liveMes == 0 ? this.goItemlive : null}
            >
              {liveMes == 0 ? '进入直播间' : ' 主播暂时离开'}
            </View> : null}
        </View>
      </View >
    );
  }

}

export default Prelive;
