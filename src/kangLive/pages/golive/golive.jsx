/* eslint-disable react/no-unused-state */
/**
 * @Author: qiang.zhang
 * @Email: 1196217890@qq.com
 * @Update: 2020-03-13 18:17:24
 * @Description: 本页面分享需要的 路径(this.$router.params) 中的参数（包括：isLiveOrRedirectLive, pliveId, liveId, companyId ）已做转换，用到时取 this.state中相应的参数
 */
import Taro from '@tarojs/taro';
import { View, Text, ScrollView, Image, LivePlayer, Video } from '@tarojs/components';
import Ellipsis from '@/components/ellipsis';
import ShareTool from '@/components/share-tool';
import { AtFloatLayout, AtInput, AtSlider } from "taro-ui"
import Config from '@/config';
import withPage from '@/components/with-page';
import Utils, { imgshare } from '@/utils';
import Assets from '@/components/assets';
import styles from './index.module.styl';
import Controller from './controller';

const { getFileUrl } = Utils.appUtils;

@withPage
class GoLive extends Taro.Component {
  constructor(props) {

    super(props);
    this.clearstorage();
    Controller(this);

    this.config = {
      // navigationBarTitleText: '直播',
      navigationStyle: 'custom',
      navigationBarTextStyle: 'white'
    }

    this.state = {
      isOpened: false,
      isOpenShare: false,
      chatInputPopup: false,
      liveStatus: 1,
      barrageArr: [
        {
          avatar: '',
          name: '直播公告',
          text: '康小铺努力营造积极健康的直播氛围，请各位亲文明发言哦！',
          type: 'IM_NOTICE_TEXT',
          notice: true,
          userType: 2,
        },
      ],
      windowHeight: '',
      focusMes: false,
      statusBarHeight: '',
      scrollTop: 100,
      // 界面/组件 初始数据
      // im聊天相关
      liveSign: '',
      identifier: '',
      liveId: '',
      isLiveOrRedirectLive: '',
      pliveId: '',
      companyId: '',
      liveDetail: {},
      goodslist: [],
      chatInputValue: '',
      showBtnItem: false,
      recommendItemVOList: [],
      clientPullUrl: '',
      companyMes: '',
      positionType: 0,
      keyBordHeight: 0,
      companyId: '',
      enjoyPersonal: false,
      persnolaMes: '',
      clickshow: false,
      playbackUrl: '',
      isIphoneX: false,
      sliderValue: '',
      minutes: '00',
      seconds: '00',
      countTime: 0,
      currentTime: '00:00',
      duration: '',
      // 计时器
      updateState: true,
      isbackLive: '',
      code: '',
    };
    this.messageRandom = null;
  }



  componentWillReact() { }

  componentWillMount() {
    imgshare.initLiveShare()
  }

  componentWillUnmount() {
    imgshare.clearLiveShare()
  }

  componentDidShow() {
    this.intercept();
  }

  componentDidMount() { }

  clearstorage = () => {
    const arrMes = Taro.getStorageInfoSync();
    console.log('本地缓数据', arrMes);
  };


  shareItem = (item) => {
    const { liveId, isLiveOrRedirectLive, pliveId, companyId } = this.state;
    // 0 是直播 1 是转播
    Taro.navigateTo({
      url: `/pages/goodsdetail/goodsdetail?agentItemId=${item.id}&itemId=${item.itemId}&companyId=${companyId}&orderSource=${(isLiveOrRedirectLive && isLiveOrRedirectLive == 1) ? 5 : 4}&liveId=${liveId}&pliveId=${pliveId || ''}&selfItem=${item.selfItem}`
    });
  }

  timeContent = () => {
    setTimeout(() => {
      this.setState({
        enjoyPersonal: false,
      })
    }, 2000);
  }

  timeUpdataMes = (e) => {
    const mss = e.detail.duration;  //705177
    const { updateState } = this.state;
    var minutes = parseInt((mss / (60)));
    if (minutes < 10) {
      minutes = `0${minutes}`
    } else {
      minutes = `${minutes}`
    }
    var seconds = parseInt((mss % (60)));
    if (seconds < 10) {
      seconds = `0${seconds}`
    } else {
      seconds = `${seconds}`
    }

    let sliderValue = e.detail.currentTime / e.detail.duration * 100;
    const { countTime } = this.state;
    console.log('总时间', countTime >= mss)
    if (countTime > mss) {
      this.clearTime()
    }
    this.setState({
      duration: e.detail.duration,
      minutes: minutes,
      seconds: seconds,
    })

    if (updateState) {
      this.setState({
        sliderValue: sliderValue,
      })
    }
  }

  onChangeValue = (e) => {
    const { duration } = this.state;
    this.videoContext.seek(e / 100 * duration); //完成拖动后，计算对应时间并跳转到指定位置
    console.log('看看时间', e / 100 * duration);
    this.clearTime();
    this.setState({
      sliderValue: e,
      countTime: e / 100 * duration,
      updateState: true //完成拖动后允许更新滚动条
    }, () => {
      this.onPlayItem();
      this.timeEnd();
    })
  }

  onEndItem = () => {
    this.clearTime();
  }

  onPlayItem = () => {
    this.videoContext.play();
  }

  newStatus = (e) => {
    console.log('判断网络状态', e);
  }

  onChangeing = (e) => {
    console.log('拖动过程中的数据', e);
    this.setState({
      updateState: false, //拖拽过程中，不允许更新进度
      sliderValue: e,
    })
  }

  onShareAppMessage = () => {
    this.logger({ logs: 'C端分享' })
    const { liveId, liveDetail, isLiveOrRedirectLive, pliveId, identifier, playbackUrl, isbackLive, code } = this.state;
    const { userInfo } = this.props.globalStore.data;
    this.sendCustomMsg({ msgType: 11, msgValue: userInfo.nickName ? userInfo.nickName : `游客_${identifier}` });
    // 设置菜单中的转发按钮触发转发事件时的转发内容
    var shareUrl;
    if (playbackUrl && isbackLive == 1) {
      shareUrl = `/kangLive/pages/golive/golive?companyId=${this.getCompanyId()}&liveId=${liveId}&isLiveOrRedirectLive=${isLiveOrRedirectLive || ''}&pliveId=${pliveId || ''}&isbackLive=1&mark=${code}`;       // 默认是当前页面，必须是以‘/’开头的完整路径
    } else {
      shareUrl = `/kangLive/pages/golive/golive?companyId=${this.getCompanyId()}&liveId=${liveId}&isLiveOrRedirectLive=${isLiveOrRedirectLive || ''}&pliveId=${pliveId || ''}&mark=${code}`;       // 默认是当前页面，必须是以‘/’开头的完整路径
    }
    var shareObj = {
      title: liveDetail.name,
      path: shareUrl,
      imageUrl: getFileUrl(liveDetail.adverImgUrl),
    };
    return shareObj;
  }

  componentWillUnmount() {
    const { playbackUrl, isbackLive } = this.state;
    this.clearTime();
    this.clearShareImg();
    if (!(playbackUrl && isbackLive == 1)) {
      this.destroyAction();
    }
  }

  componentDidHide() {
    this.clearTime();
  }

  render() {

    const { barrageArr, liveDetail, goodslist,
      viewCount, strInputText, recommendItemVOList, code, companyId, icon,
      liveStatus, clientPullUrl, companyMes, } = this.state;

    const { isOpened, isOpenShare, chatInputPopup } = this.state;

    const { statusBarHeight, windowHeight, scrollTop, positionType, keyBordHeight, focusMes, persnolaMes, enjoyPersonal } = this.state;

    const { playbackUrl, sliderValue, minutes, seconds, currentTime, isbackLive } = this.state;

    return (
      <View className={styles.liveMes} style={{ height: `${windowHeight}px` }}>
        {/* 回放标签 */}
        {playbackUrl && isbackLive == 1 ?
          <Video
            src={playbackUrl}
            controls={false}
            mode='RTC'
            autoplay
            initialTime='0'
            objectFit='fill'
            showFullscreenBtn={false}
            id='myVideo'
            loop={false}
            muted={false}
            style={{ width: '100%', height: `${windowHeight}px` }}
            onPlay={this.onPlayItem}
            onTimeUpdate={(e) => this.timeUpdataMes(e)}
            onEnded={this.onEndItem}
          /> : null}
        {/* 直播标签 */}
        {!(playbackUrl && isbackLive == 1) ? <LivePlayer
          src={clientPullUrl}
          mode='RTC'
          autoplay
          object-fit='fillCrop'
          onStateChange={(e) => this.stateChange(e)}
          onNetstatus={(e) => this.netStateus(e)}
          style={{ width: '100%', height: windowHeight ? `${windowHeight}px` : '100vh' }}
        >
        </LivePlayer>
          : null}

        {liveStatus == 2 ? <View className={styles.live_end_style}
          //  style={{ 
          //    backgroundImage:`url(${Utils.getFileUrl(liveDetail.adverImgUrl)}) top center no-repeat` ,
          //    backgroundSize:'100%'
          //  }} 
          onClick={this.backIndexPage}
          onTouchMove={this.handleTochMove}
        >

          <View className={styles.live_end_style}>
            <Image className={`${styles.live_start_mes} no-loading`} src={getFileUrl(liveDetail.adverImgUrl)}></Image>
            <View className={styles.top_text}>主播直播已结束</View>
            <View className={styles.center_text}>
              <View className={styles.top_bottom_text}>
                回到首页
              </View>
            </View>
          </View>
        </View> : null}

        {/* {showPlayMes == 1 ? <View className={styles.play_Item_style} onClick={this.click_play}>
          <Image className={styles.liveStyle} src={Assets.my.pash}></Image>
        </View> : null} */}
        <View className={styles.maskFixed}>
          {/* 头部信息，观看人数 */}
          <View className={styles.headTop} style={{ marginTop: `${statusBarHeight + positionType}px` }}>
            <View className={styles.left_back_mes}>
              <View className={`iconfont iconfanhui1 ${styles.icon_back}`} onClick={this.backIndexPage}></View>
              <View className={styles.headleft}>
                <View className={styles.lefthead}>
                  <Image className={`${styles.headInnerImg} no-loading`} src={getFileUrl(companyMes.logo) || Assets.goods.defalutHead} alt='' />
                </View>
                <View className={styles.righthead}>
                  <View className={styles.topText}>{companyMes.shopName || '京小铺'}</View>
                  <View className={styles.botText}>{viewCount || '0'}人观看</View>
                </View>
              </View>
            </View>
          </View>
          {/* 右侧图标 */}
          <View className={styles.head_mes} style={{ marginTop: `${statusBarHeight + 44}px` }}>
            <View className={styles.headRight}>
              <View className={styles.topImg}>
                <Image className={`${styles.topImg_img} no-loading`} src={Assets.common.shopLive} alt='' />
              </View>
              <View className={styles.botImg}>ID:{liveDetail.roomId || '112344'}</View>
            </View>
          </View>
          {/* 左侧商品 */}
          {(recommendItemVOList).length != 0 ? (<View className={styles.goodsList}>
            <View className={styles.live_list_Img}>
              <Image className={`${styles.live_img} no-loading`} src={Assets.common.goods_list}></Image>
            </View>
            <View className={styles.recom_mes}>
              {(recommendItemVOList || []).map((v, index) => {
                return (
                  <View className={styles.evegoods} key={index + 1} onClick={() => this.shareItem(v)}>
                    <View className={styles.leftHeadImg}>
                      <Image className={styles.left_img_head} src={getFileUrl(v.mainImgUrl, { query: 'x-oss-process=image/quality,q_50/format,jpg/interlace,1' })}></Image>
                    </View>
                    <View className={styles.rightHeadImg}>
                      <Ellipsis>
                        {v.itemTitle}
                      </Ellipsis>
                      <View className={styles.botHeadImg}>
                        ¥{v.minTradePrice}
                      </View>
                    </View>
                  </View>
                )
              })}
            </View>
          </View>) : null}
          {/* {enjoyPersonal ? <View className={styles.enjoyMes}>{persnolaMes}进入直播间</View> : ''} */}
          {<View className={styles.enjoyMes}>
            <View className={styles.animateMes} style={{ 'left': enjoyPersonal ? '0' : '' }}>
              {persnolaMes}进入直播间
            </View>
          </View>}
          <View>
            <ScrollView
              className={styles.barrageMes}
              scrollY
              scrollWithAnimation
              scrollTop={scrollTop}
            >
              {/* 聊天信息 */}
              <View id='hihi' className={styles.mes_style}>
                {(barrageArr || []).map((v, index) => {
                  return (
                    <View key={index + 1}>
                      {v.type == "IM_NOTICE_TEXT" ?
                        (<View key={index + 1} className={`${styles.noticeMes} ${styles.newnoticeMes}`}>
                          {v.name}:{v.text}
                        </View>) : null}
                      {v.type == "CHAT_MSG" ?
                        (<View>
                          <View className={styles.newnoticeMes}>
                            {v.userType == 1 ? <Text className={styles.anchor}>主播</Text> : null}
                            <Text className={`${styles.textName} ${v.type == 1 ? styles.ancher : null}`}>{v.name ? `${v.name}：` : ''}</Text>
                            <Text className={styles.textInner}>{v.text}</Text>
                          </View>
                        </View>) : null}
                      {v.type == "SHARE_MSG" || v.type == "ORDER_MSG" || v.type == 'SHOW_BUY_SHOP' ?
                        (<View>
                          <View className={v.type == "SHARE_MSG" ? styles.shareMes : v.type == "ORDER_MSG" ? styles.orderMes : styles.showbuyMes}>
                            <Image className={`${styles.shareImg} no-loading`} src={Assets.common.buyItem}></Image>
                            <Text className={styles.textInner}>{v.msgContent}</Text>
                          </View>
                        </View>) : null}
                    </View>
                  )
                })
                }
              </View>
            </ScrollView>
          </View>
          {/* 点击商品按钮商品弹框 */}
          <View className={styles.product_lay}>
            <AtFloatLayout isOpened={isOpened} onClose={this.handleClose}>
              <ScrollView>
                {
                  (goodslist || []).map((v, index) => {
                    return (<View className={styles.eveInner} key={v.id} onClick={() => this.shareItem(v, 2)}>
                      <View className={styles.leftInner}>
                        <Image className={`${styles.leftInner_Img} no-loading`} src={getFileUrl(v.mainImgUrl, { w: 178, h: 178 }) || Assets.home.backImage} alt='' />
                        <View className={styles.shopNum} style={index + 1 == 1 ? { background: '#FF2100' } : { background: '#333333' }}>
                          {index + 1}
                        </View>
                      </View>
                      <View className={styles.RightInner}>
                        <View className={styles.titleInner} >
                          <Ellipsis count={2}>{v.itemTitle}</Ellipsis>
                        </View>
                        <View className={styles.priceInner}>
                          <View className={styles.priceMes}>
                            <Text className={styles.priLogo}>¥</Text>
                            <Text className={styles.priStyle}>{v.minTradePrice}</Text>
                            {/* <Text className={styles.botStyle}>¥ {v.minScribingPrice}</Text> */}
                          </View>
                          <View className={styles.twoButton}>
                            <View className={styles.shareButton}>分享</View>
                            <View className={styles.getButton}>抢购</View>
                          </View>
                        </View>
                      </View>
                    </View>)
                  })
                }

                {goodslist.length == 0 ? <View className={styles.nogoodsContainer}>
                  <Image className={styles.nogoodsImg} src={Assets.goods.defalutNoGoods}></Image>
                  <View className={styles.nogoodsLabel}>直播间暂无商品...</View>
                </View> : null}

                {/* <View className={styles.allNum}>全部宝贝 {(goodslist).length}</View> */}
              </ScrollView>
            </AtFloatLayout>
          </View>
          {/* 底部输入框 */}
          <View className={styles.shop} style={{ 'position': `fixed`, 'bottom': `${positionType == 0 ? '28px' : null}` }}>
            <View className={styles.logoImg} onClick={this.openisOpened}>
              <Image className={`${styles.logoImg_img} no-loading`} src={`${Assets.common.shopStore}`} alt='' />
              <View className={styles.goodlist_style}>{(goodslist).length}</View>
            </View>
            {playbackUrl && isbackLive == 1 ?
              <View className={styles.newInputMes}>
                <AtSlider
                  className={styles.newInputMes}
                  step={1}
                  value={sliderValue}
                  activeColor='#4285F4'
                  backgroundColor='#ffffff'
                  blockColor='#ffffff'
                  blockSize={16}
                  onChange={(e) => this.onChangeValue(e)}
                  onChanging={(e) => this.onChangeing(e)}
                >
                </AtSlider>
                <View className={styles.timeMes}>{currentTime}</View>
                <View className={styles.totalTimeMes}>{minutes}:{seconds}</View>
              </View>
              :
              <View className={styles.inputMes} onClick={this.showPopUp}>
                <View>想问些什么...</View>
              </View>}
            <View className={styles.rightShare} onClick={this.share_item_mes}>
              <Image className={`${styles.right_share_img} no-loading`} src={`${Assets.common.share}`}></Image>
            </View>
          </View>
          {/* 分享弹窗 */}
          <View className={`${styles.share_popup} ${isOpenShare ? styles.visibility : null}`} onClick={() => this.onCancalItem()}>
            <View className={styles.share_inner} onClick={(e) => this.stopPropagation(e)}>
              <View className={`${styles.share_title} last`}>分享店铺到</View>
              <View className={styles.share_content}>
                <ShareTool
                  params={
                    {
                      code,
                      link: `${Config.webHost}/#/pages/login-guide/login-guide?mark=${code}&companyId=${companyId}`,
                      icon: icon && `${Config.crossFile}?uri=${getFileUrl(icon)}`,
                      type: 'live',
                      showShareImg: isbackLive == 1 ? false : true,
                      shopName: companyMes.shopName || '京小铺'
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
          {/* 聊天输入框 */}
          {
            chatInputPopup
              ? <View className={styles.chat_container}>
                <View className={styles.chat_popup} onClick={() => this.hidePopup()}></View>
                <View className={styles.chat_body} style={{ 'bottom': `${keyBordHeight}px` }}>
                  <View className={styles.input_inner}>
                    <AtInput
                      adjustPosition={false}
                      cursorSpacing='100px'
                      className={styles.chat_input}
                      name='value'
                      type='text'
                      title=''
                      focus={focusMes}
                      placeholder='想问点什么...'
                      value={strInputText}
                      onChange={this.showBtn}
                      onFocus={(values, e) => this.getFocus(values, e)}
                      onBlur={() => this.hidePopup()}
                    />
                  </View>
                  <View className={styles.chat_text} onClick={this.dealSendMessage}>发送</View>
                </View>
              </View>
              : null
          }
        </View>

      </View >
    );
  }

}

export default GoLive;
