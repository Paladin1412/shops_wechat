/**
 * @Author: qiang.zhang
 * @Email: 1196217890@qq.com
 * @Update: 2020-02-25 16:58:26
 * @Description: 注意注意！！！本页面路径中的companyId、itemId、agentItemId、mark、pageFrom已做转化，全部存在this.state中了
 */
import Taro from '@tarojs/taro';
import {
  View, Swiper, SwiperItem, Image, Text, ScrollView,

} from '@tarojs/components';
import { Common, message } from '@jxkang/wechat-utils';
import withPage from '@/components/with-page';
import Model from '@/model';
import Utils, { imgshare } from '@/utils';
import Ellipsis from '@/components/ellipsis';
import styles from './goodsdetail.module.styl';
import Item from '@/components/product-list/item2'
import { AtFloatLayout, AtInputNumber, AtModal, AtModalContent, AtModalAction } from "taro-ui"
import Share from '@/components/share-tool'
import Config from '@/config';
import Assets from '@/components/assets';

@withPage
class Goodsdetail extends Taro.Component {
  constructor(props) {
    super(props);

    this.config = {
      navigationBarTitleText: '商品详情',
      navigationStyle: 'custom',
      // navigationBarBackgroundColor: '#d'
    }

    this.state = {
      currentIndex: 1,
      isOpenItem: false,
      isOpenShare: false,
      newValue: 1,
      goodsDetail: {},
      clickItem: [],
      defalutDetail: [],
      defalutImgMes: '',
      skuList: [],
      agentItemId: null,
      itemId: null,
      bannerList: [],// banner图
      imgList: [], //详情图
      windowH: '500px',
      companyId: null,
      productList: [],
      collectStatus: false,//状态
      level: 1,
      isLogin: Taro.getStorageSync('userInfo') && Taro.getStorageSync('userInfo').companyId && Taro.getStorageSync('userInfo').token, //是否登陆
      mark: '',
      mainUrl: '', // 主图
      itemTitle: '',
      agentVipTradePrice: '',
      showTop: false,
      // hasLiuHai: false,
      buttonTop: 0,
      buttonHeight: 0,
      tagList: '',
      pageFrom: '',
      orderSource: '',
      liveId: '',
      pliveId: '',
      selfItem: '',
      noAreaModal: false
    };
  }

  componentWillReact() { }

  componentWillMount() {
    imgshare.initDetailShare()
  }

  componentDidMount() {
    this.intercept();
  }
  initData = () => {
    const that = this;
    this.getShopInfo();
    this.addViewRecord();
    Taro.showShareMenu({
      withShareTicket: true
    })
    Taro.updateShareMenu({
      withShareTicket: true
    })
    const { top, height } = Taro.getMenuButtonBoundingClientRect();
    const { orderSource = 3, liveId, pliveId, selfItem } = this.$router.params;
    const { pageFrom } = this.state;
    Taro.getSystemInfo({
      success: function (res) {
        //model中包含着设备信息
        var model = res.model
        that.setState({
          // hasLiuHai: (model.includes('iPhone X') || model.includes('iPhone 11')),
          // statusBarHeight
          buttonTop: top,
          buttonHeight: height,
          orderSource: Number(orderSource),
          pageFrom,
          liveId,
          pliveId,
          selfItem,
        })
      }
    })
  }
  componentWillUnmount() {
    imgshare.clearGoodsShare()
  }
  intercept = () => {
    const pageParams = this.$router.params
    if(pageParams.scene) {
      Model.common.parseShortCode({shortCode: pageParams.scene}).then((res) => {
        const obj = JSON.parse(res)
        this.getRealRoute({sceneMap:obj})
      })
    } else {
      this.getRealRoute({sceneMap: {}})
    }
  }
  getRealRoute = ({sceneMap}) => {
    const pageParams = this.$router.params
    const agent = pageParams.agentItemId && pageParams.agentItemId !== 'null' ? pageParams.agentItemId : ''
    const tempitemId = pageParams.itemId && pageParams.itemId !== 'null' ? pageParams.itemId : ''

    const companyId = pageParams.companyId || sceneMap.cId || this.getCompanyId();
    const pageFrom = pageParams.pageFrom || sceneMap.pageFrom || '';
    const agentItemId = agent || sceneMap.agentItemId || 'null';
    const itemId = tempitemId || sceneMap.itemId || '';
    this.setState({
      companyId,
      pageFrom,
      agentItemId,
      itemId
    }, () => {
      console.log('路由参数', {
        companyId,
        pageFrom,
        agentItemId,
        itemId
      })
      this.initData()
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
    if (userInfo.token) {
      Model.login.addViewRecord({ companyIds: [companyId] });
    } else {
      if (shopCacheList.indexOf(companyId) == -1) {
        shopCacheList.push(companyId);
        globalStore.setData('shopCacheList', shopCacheList, 'goodsdetail.jsx,line:114');
      }
    }
  }
  getQrCode = (params) => {
    const { agentItemId, itemId } = this.state;
    const sceneMap = Object.assign(params, {
      agentItemId,
      itemId,
      pageFrom: 'goodsdetail',
    })
    console.log('getQrCode', sceneMap)
    imgshare.getGoodsqrImg(JSON.stringify(sceneMap))
  }
  onShareAppMessage = (options) => {
    const { agentItemId, itemId, companyId, mainUrl, itemTitle, agentVipTradePrice, mark, selfItem } = this.state;
    // 设置菜单中的转发按钮触发转发事件时的转发内
    var shareObj = {
      title: `最低${agentVipTradePrice}元|${itemTitle}`,        // 默认是小程序的名称(可以写slogan等)
      path: `/pages/goodsdetail/goodsdetail?agentItemId=${agentItemId}&itemId=${itemId}&companyId=${companyId}&mark=${mark}&pageFrom=goodsdetail`,        // 默认是当前页面，必须是以‘/’开头的完整路径
      imageUrl: mainUrl ? Utils.appUtils.getFileUrl(mainUrl, { query: 'x-oss-process=image/quality,q_50/format,jpg/interlace,1' }) : '',     //自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径，支持PNG及JPG，不传入 imageUrl 则使用默认截图。显示图片长宽比是 5:4
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
        console.log(111);
        // 转发结束之后的回调（转发成不成功都会执行）
      }
    };
    this.logger({ logs: `C端商品详情界面分享,参数:${JSON.stringify(shareObj)}` });
    return shareObj;
  }

  getShopInfo = () => {
    const { globalStore } = this.props;
    const { userInfo } = globalStore.data;
    const { companyId } = this.state;
    Model.goods.shopBaseInfo({
      companyId
    }).then(res => {
      if (res) {
        userInfo.companyId = companyId
        userInfo.shopId = res.shopId
        userInfo.shopDetail = res;
        globalStore.setData('userInfo', userInfo, 'goodsdetail.jsx,line:124');
        const { isLogin } = this.state
        this.memberDetail();
        this.getImage('oneToOne');
        this.getImage('phoneDetail');
        if (isLogin) {
          this.getCollectStatus()
          this.getLevel()
          this.companyCode()
        } else {
          this.getQrCode({})
        }
      }
    })
  }

  handleChange = (e) => {
    this.setState({
      currentIndex: e.detail.current + 1
    })
  }

  hrefOdwnOrder = () => {
    const { globalStore } = this.props;
    const { newValue, defalutImgMes, goodsDetail,
      defalutDetail, agentItemId, itemId, orderSource, liveId, pliveId, mainImgUrl,
      noArea,
    } = this.state
    const currentData = {
      agentItemId,
      itemTitle: goodsDetail.itemTitle,
      skuImg: defalutImgMes.skuImg || mainUrl,
      tradePrice: defalutImgMes.agentVipTradePrice,  //单价
      brandId: defalutImgMes.brandId,
      brandName: defalutImgMes.brandName,
      count: newValue,
      freePostage: true,
      selectValue: defalutDetail,
      shopName: defalutImgMes.agentShopName,
      supplierId: defalutImgMes.supplierId,
      postage: defalutImgMes.postage,
      skuId: defalutImgMes.skuId,
      stockQty: defalutImgMes.stockQty,
      orderSource,
      liveId: orderSource && orderSource == 5 ? pliveId : liveId,  //四是直播五是转播
      noArea
    }
    globalStore.setData('infoForOrder', Object.assign({}, currentData), 'goodsdetail.jsx,line:169')
    globalStore.setData('checkAddress', null, 'goodsdetail.jsx,line:170')
    Taro.navigateTo({
      url: '/pages/submission/submission'
    })
  }

  rightBuy = (e) => {
    this.setState({
      isOpenItem: true,
      isOpenShare: false
    })
  }

  handleChangeItem = (value) => {
    this.setState({
      newValue: value
    })
  }

  shareItem = () => {
    this.setState({
      isOpenShare: true,
      isOpenItem: false
    })
  }

  onCancalItem = () => {
    this.setState({
      isOpenShare: false,
    })
  }

  clickItem = (v, index) => {
    const { defalutDetail, selfItem } = this.state;
    defalutDetail[index].propertyValue = v;
    this.setState({
      defalutDetail: defalutDetail,
    }, () => {
      this.searchSpecification(defalutDetail[index], selfItem)
    })

  }
  // 根绝规格查询其他可选规格
  searchSpecification = (propsValues, selfItem) => {

    const { agentItemId, skuList, itemId } = this.state
    const params = {
      agentItemId,
      itemId,
      propsValues: [propsValues]
    }
    Model.goods.getAgentItemPropsValue(params).then(data => {
      if (!data) return false;
      if (data.length > 0) {
        const name = data[0].specsName;
        for (let i = 0, len = skuList.length; i < len; i++) {
          if (name == skuList[i].specsName) {
            skuList[i] = {
              specsName: name,
              propertyValueList: data.map(item => {
                return item.propertyValue
              })
            }
          }
        }
        this.setState({
          skuList
        })
      } else {
        this.setState({
          defalutDetail: [propsValues]
        })
      }
      this.getSku()
    })
  }

  // 查询sku  非自营
  getSku = () => {
    const { agentItemId, defalutDetail, itemId } = this.state;
    const params = {
      itemId,
      agentItemId,
      propsValues: defalutDetail
    }
    Model.goods.getSku(params).then(data => {
      if (!data) return false;
      this.setState({
        defalutImgMes: data
      })
    })
  }

  memberDetail = () => {
    const { agentItemId, itemId } = this.state;
    console.log(typeof (agentItemId));
    const currentData = {}
    if (agentItemId && agentItemId !== 'null') {
      currentData.agentItemId = agentItemId;
    } else {
      currentData.agentItemId = itemId;
    }
    console.log(currentData);
    Model.goods.memberDetail(currentData).then(res => {
      if (res) {
        let d = (res && res.sku) || {};
        d.agentStatus = res.agentStatus;
        const currentData = {
          title: res.itemTitle || '',
          // link: globalThis.location.href || '',
          desc: res.itemDescription || '',
          imgUrl: Utils.appUtils.getFileUrl(res.mainImgUrl) || '',
        }
        if (!currentData.imgUrl) {
          delete currentData.imgUrl
        }

        const that = this;
        that.setState({
          agentVipTradePrice: res.sku.agentVipTradePrice || null,
          itemTitle: res.itemTitle,
          mainUrl: res.mainImgUrl,
          goodsDetail: res, //详情数据
          defalutDetail: res.sku && res.sku.propsList || null, //默认规格
          defalutImgMes: d,   //默认商品
          skuList: res.propsList,  //规格列表
          tagList: that.dealTag(res.tagList),
          noArea: res.noArea || []
        }, () => {
          that.getList(res.agentCompanyId)
          imgshare.getGoodsImg(res.mainImgUrl)
        })
      }

    })
  }

  getAreaAll = ({ noArea = [] }) => {
    let str = ''
    noArea.map((item, i) => {
      str += `${i !== 0 ? '、' : ''}${item.areaName}`
      if (item.childs) {
        str += `${item.level === 0 ? ':' : ''} ${item.level === 1 ? '(' : ''}  ${this.getAreaAll({ noArea: item.childs })} ${item.level === 1 ? ')' : ''}`
      }
    })
    return str
  }
  memberselfDetail = (itemId) => {
    Model.goods.memberselfDetail({ itemId }).then(res => {
      if (res) {
        let d = (res && res.sku) || {};
        d.agentStatus = res.agentStatus;
        const currentData = {
          title: res.itemTitle || '',
          // link: globalThis.location.href || '',
          desc: res.itemDescription || '',
          imgUrl: Utils.appUtils.getFileUrl(res.mainImgUrl) || '',
        }
        if (!currentData.imgUrl) {
          delete currentData.imgUrl
        }

        const that = this;
        that.setState({
          agentVipTradePrice: res.sku.agentVipTradePrice,
          itemTitle: res.itemTitle,
          mainUrl: res.mainImgUrl,
          goodsDetail: res, //详情数据
          defalutDetail: res.sku && res.sku.propsList || null, //默认规格
          defalutImgMes: d,   //默认商品
          skuList: res.propsList,  //规格列表
          tagList: that.dealTag(res.tagList),
        }, () => {
          that.getList(res.agentCompanyId)
          imgshare.getGoodsImg(res.mainImgUrl)
        })
      }

    })
  }


  /**
   *  处理规格
  */
  dealTag = (tagList) => {
    const a = Object.entries(tagList);
    return a;
  }

  //推荐商品列表
  getList = (agentCompanyId) => {
    const { goodsDetail } = this.state
    if (goodsDetail && goodsDetail.agentCompanyId) {
      Model.goods.getRecomdList({
        agentCompanyId
      }).then(data => {
        if (!data) return false;
        this.setState({
          productList: data
        })
      })
    }

  }

  // 收藏关注
  getCollect = (collect) => {
    const { agentItemId, itemId, goodsDetail, collectStatus } = this.state;
    Model.goods.collect({
      agentItemId,
      itemId,
      agentCompanyId: goodsDetail.agentCompanyId,
      collect // 0:取消,1:关注
    }).then(data => {
      if (data) {
        this.setState({
          collectStatus: !collectStatus
        })
      }
    })

  }
  // 关注状态
  getCollectStatus = () => {
    const { agentItemId, itemId } = this.state;
    const currentData = {
      agentItemId: agentItemId && agentItemId !== 'null' ? agentItemId : itemId
    }
    Model.goods.isCollect(currentData).then(data => {
      if (data) {
        this.setState({
          collectStatus: data
        })
      }

    })
  }

  getValueMes = (defalutDetail) => {
    const newPrice = (defalutDetail || []).map((v) => {
      return v.propertyValue
    })
    const priceMes = newPrice.join('/');
    return priceMes
  }

  getImage = (type) => {
    const { itemId } = this.state
    Model.goods.getImage({
      bizId: itemId,
      bizType: 'item',
      type
    }).then(data => {
      if (!data) return false
      if (type == 'oneToOne') {
        this.setState({
          bannerList: data.records
        })
      } else if (type == 'phoneDetail') {
        this.setState({
          imgList: data.records
        })
      }

    })
  }

  goUrl = (type) => {
    const { companyId } = this.state
    if (type == 'home') {
      Taro.switchTab({
        url: `/pages/index/index?companyId=${companyId}`
      })
    } else {
      Taro.switchTab({
        url: `/pages/contactus/contactus`
      })
    }

  }
  goIndex = () => {
    Taro.switchTab({
      url: `/pages/index/index`
    })
  }

  goBack = () => {
    Taro.navigateBack(-1)
  }

  // 邀请信息
  companyCode = () => {
    Model.inviter.userCode().then(res => {
      if (res) {
        this.setState({
          mark: res.invitationCode,
        })
        this.getQrCode({ 
          M: res.invitationCode,
          cId: res.companyId
        })
      }
    })
  }

  getLevel = () => {
    const companyId = this.getCompanyId();
    Model.order.getShopMemberLevelInfo({ companyId }).then(data => {
      if (!data) return;
      this.setState({
        level: Number(data.memberLevel)
      })
    })
  }

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
  stopPropagation = (e) => {
    e.preventDefault();
    e.stopPropagation();
  }

  render() {
    const { currentIndex,
      isOpenItem,
      newValue,
      isOpenShare,
      goodsDetail,
      defalutDetail,
      defalutImgMes,
      skuList,
      bannerList,
      imgList,
      windowH,
      productList,
      collectStatus,
      level,
      agentItemId,
      companyId,
      mark,
      mainUrl,
      showTop,
      buttonTop,
      buttonHeight,
      tagList,
      pageFrom,
      orderSource,
      noArea,
      noAreaModal
    } = this.state;
    return (
      <View className={`${styles.imgturn}`} style={{
        height: (isOpenItem || isOpenShare) ? `${windowH}` : '100%'
      }
      }>
        <View
          className={`${styles.top_box}  ${showTop === true ? styles.top_box_active : null}`}
        >
          <View className={styles.top_inner} style={{ marginTop: `${buttonTop}px`, height: `${buttonHeight}px` }}>
            {pageFrom == 'goodsdetail' ? null : <Image src={Utils.appUtils.getFileUrl(Assets.common.go_back, { w: 64 })} className={`${styles.back_img} no-loading`} onClick={this.goBack}></Image>}
            {pageFrom == 'goodsdetail' ? null : <View className={`iconfont ${styles.go_back_icon}`} onClick={this.goBack}>&#xe682;</View>}
            <View className={styles.font}>商品详情</View>
          </View>

        </View>
        <ScrollView
          lowerThreshold={0}
          upperThreshold={0}
          scrollY={true}
          scrollWithAnimation
          className={styles.content_box}
          onScroll={this.onScroll}>
          <View className={styles.bannerImg} >
            <Swiper
              className={styles.bannerMes}
              indicatorColor='#999'
              indicatorActiveColor='#333'
              onAnimationFinish={(e) => this.handleChange(e)}
              autoplay>
              {(bannerList || []).map((item) => {
                return (
                  <SwiperItem>
                    {/* <Image className={styles.banner_img_items} src={Utils.appUtils.getFileUrl(item.url)} alt={item.name} /> */}
                    <View className={styles.banner_img_items} style={{ backgroundImage: `url(${Utils.appUtils.getFileUrl(item.url)})` }}></View>
                  </SwiperItem>
                )
              })}
            </Swiper>
            <View className={styles.numPoint}>{currentIndex}/{bannerList.length}</View>
          </View >
          <View className={styles.detailprice}>
            <View className={styles.topMes}>
              <View className={styles.topleft}>
                {defalutImgMes && defalutImgMes.agentVipTradePrice &&
                  <View>
                    <Text className={styles.priceLogo}>¥</Text>
                    <Text className={styles.priceNum}>{defalutImgMes.agentVipTradePrice || ''}</Text>
                  </View>
                }
                {level >= 2 && defalutImgMes.maxFee > 0 &&
                  <View style={{ marginLeft: '10px' }}>
                    <Text className={styles.getPrice}>赚¥{defalutImgMes && defalutImgMes.maxFee}</Text>
                  </View>
                }
              </View>

              <View>
                <Text className={`${styles.originPrice} ${styles.volume_text}`}>已售：</Text>
                <Text className={`${styles.originpriceNum} ${styles.volume_num}`}>
                  {defalutImgMes && (defalutImgMes.saleTotal ? defalutImgMes.saleTotal : 0)}
                </Text>
              </View>

            </View>
            {/* <View className={styles.price_sales}>
            <View >
              <Text className={styles.originPrice}>原价</Text>
              <Text className={styles.originpriceNum}>¥{defalutImgMes && defalutImgMes.agentScribingPrice}</Text>
            </View>
            <View>
              <Text className={`${styles.originPrice} ${styles.volume_text}`}>已售：</Text>
              <Text className={`${styles.originpriceNum} ${styles.volume_num}`}>
                {defalutImgMes && (defalutImgMes.saleTotal ? defalutImgMes.saleTotal : 0)}
              </Text>
            </View>
          </View> */}
            <View className={styles.goodsName}>
              {goodsDetail.itemTitle}
            </View>
          </View>

          {tagList && tagList.length > 0 &&
            <View className={styles.detailMes}>
              {tagList.map((v, index) => {
                return (
                  v[1].length !== 0 ?
                    <View className={styles.inline_style} key={index + 1}>
                      <View className={styles.label}>{v[0]}：</View>
                      {
                        (v[1] || []).map((item, inx) => {
                          return <View className={styles.inline_mes} key={inx}>
                            {item}
                            {(v[1].length - 1) == inx ? null : <View className={styles.backpoint}></View>}
                          </View>
                        })
                      }
                    </View> : null
                )
              })}
            </View>
          }
          {noArea && noArea.length > 0 &&
            <View className={styles.mes_item} onClick={() => this.setState({ noAreaModal: true })}>
              <View className={styles.left}>
                <View className={styles.title}>不发货地区</View>
                <View className={styles.area}><Ellipsis count={1}>{this.getAreaAll({ noArea })}</Ellipsis></View>
              </View>
              <View className={`iconfont ${styles.icon_more}`}>&#xe68f;</View>
            </View>
          }
          {imgList.length > 0 &&
            <View className={styles.detail_box}>
              <View className={styles.titleGoods}>商品详情</View>
              <View className={styles.allImg}>
                {(imgList || []).map((v, index) =>
                  <Image key={index + 1} mode="widthFix" src={Utils.appUtils.getFileUrl(v.url)} className={styles.img_item} alt={v.name} />
                )}
              </View>
            </View>
          }
          {/* {imgList.length > 0 && }
        <View className={styles.allImg}>
          {(imgList || []).map(v => {
            return (
              <Image src={Utils.appUtils.getFileUrl(v.url, { w: 750 })} className={styles.img_item} alt={v.name} />
            )
          })}
        </View> */}
          {productList && productList.length > 0 && <View className={`${styles.titleGoods} ${styles.tuijian_buy}`}>大家都在买</View>}

          <View>
            <Item data={productList}></Item>
          </View>
        </ScrollView>
        {defalutImgMes && defalutImgMes.agentStatus == 'DOWN_SALES' && <View className={styles.off_notice}>该商品已下架，非常抱歉</View>}
        {defalutImgMes && defalutImgMes.agentStatus == 'INVALID' && <View className={styles.off_notice}>该商品已失效，非常抱歉</View>}
        <View className={styles.footbar}>
          <View className={styles.leftFootbar}>
            <View className={styles.btnfooter} onClick={() => this.goUrl('home')}>
              <View className='iconfont icondianpuicon' style={{ fontSize: '18px' }}></View>
              <View>首页</View>
            </View>

            {defalutImgMes && defalutImgMes.agentStatus == 'ON_SALES' && (<View className={styles.btnfooter} onClick={() => this.getCollect(collectStatus ? 0 : 1)}>
              <View className={`iconfont ${collectStatus ? 'iconyishoucang' : 'iconshoucang'} `} style={{ fontSize: '18px' }}></View>
              <View>收藏</View>
            </View>)}

            <View className={styles.btnfooter} onClick={() => this.goUrl('contactn')}>
              <View className='iconfont iconzixun' style={{ fontSize: '18px' }}></View>
              <View>咨询</View>
            </View>
          </View>
          {
            defalutImgMes && defalutImgMes.agentStatus == 'ON_SALES' &&
            < View className={styles.rightFootbar}>
              {<View className={styles.leftButton} onClick={(e) => this.rightBuy(e)}>立即购买</View>}
              <View className={styles.rightButton} onClick={(e) => { this.shareItem(e) }}>
                分享赚
                {/* ¥{defalutImgMes && defalutImgMes.maxFee} */}
              </View>
            </View>
          }
          {/* {
            defalutImgMes && defalutImgMes.agentStatus == 'ON_SALES' &&
            <View className={styles.rightFootbar}>
              {<View className={styles.leftButton1} onClick={(e) => this.rightBuy(e)}>立即购买</View>}
            </View>
          } */}
          {/* {
            defalutImgMes && defalutImgMes.agentStatus == 'ON_SALES' && defalutImgMes.maxFee <= 0 &&
            < View className={styles.rightFootbar}>
              {<View className={styles.leftButton1} onClick={(e) => this.rightBuy(e)}>立即购买</View>}
            </View>
          } */}
          {(defalutImgMes && defalutImgMes.agentStatus != 'ON_SALES') ? <View className={styles.right_btn} onClick={this.goIndex}>
            <View>进首页选商品</View>
          </View> : null
          }
        </View>
        <View className={styles.buy_layout}>
          <AtFloatLayout isOpened={isOpenItem} onClose={() => {
            this.setState({
              isOpenItem: false
            })
          }}>
            <View className={styles.icon_box}>
              <View className={`iconfont ${styles.icon_close}`} onClick={() => {
                this.setState({
                  isOpenItem: false
                })
              }}>&#xe693;</View>
            </View>

            <ScrollView scrollY className={styles.openInner}>
              <View className={styles.pricePhoto}>
                <View className={styles.leftPriceImg} style={{ backgroundImage: `url(${Utils.appUtils.getFileUrl(defalutImgMes.skuImg ? defalutImgMes.skuImg : mainUrl, { w: 178, h: 178 })})` }} />
                <View className={styles.rightPriceBtn}>
                  <View>
                    <Text className={styles.priceLogo}>¥</Text>
                    <Text className={styles.priceNum}>{defalutImgMes.agentVipTradePrice || ''}</Text>
                  </View>
                  <View className={styles.selectColor}>已选：{this.getValueMes(defalutDetail)}</View>
                </View>
              </View>
              {
                (skuList || []).map((v, index) => (
                  <View key={index + 1} className={styles.eveMes}>
                    <View className={styles.titleMes}>{v.specsName}</View>
                    <View className={styles.spaceEve}>
                      {
                        v.propertyValueList && v.propertyValueList.map((v1, idx) => (
                          <View key={idx + 1} className={`${styles.eveStyle} ${defalutDetail && defalutDetail[index].propertyValue == v1 ? styles.activeColor : ''}`}
                            onClick={() => this.clickItem(v1, index)}>
                            {v1}
                          </View>
                        ))
                      }
                    </View>
                  </View>
                ))
              }

              <View className={styles.eveMes}>
                <View className={styles.titleMes}>数量</View>
                <View className={styles.spaceEve}>
                  <AtInputNumber
                    min={1}
                    max={defalutImgMes.stockQty}
                    step={1}
                    value={newValue}
                    onChange={(e) => this.handleChangeItem(e)}
                  />
                </View>
              </View>
            </ScrollView>
            <View className={styles.button_box}>
              {defalutImgMes.stockQty > 0 && <View className={styles.buyButton} onClick={this.hrefOdwnOrder}>购买</View>}
              {defalutImgMes.stockQty <= 0 && <View className={`${styles.buyButton} ${styles.gray}`} >此规格暂时无货</View>}
            </View>
          </AtFloatLayout>
        </View>
        <View className={`${styles.share_popup} ${isOpenShare ? styles.visibility : null}`} onClick={this.onCancalItem}>
          <View className={styles.share_inner} onClick={this.stopPropagation}>
            <Image className={styles.popup_header} src={Utils.appUtils.getFileUrl(mainUrl, { w: 178, h: 178 })} />
            <View className={styles.popup_body}>
              <View className={styles.getMoney}>
                <View className={styles.money_sign}>￥</View>
                <View className={styles.money_num}>{defalutImgMes && defalutImgMes.agentVipTradePrice}</View>
                {defalutImgMes && defalutImgMes.maxFee !== 0 ?
                  <View className={styles.getPrice}>
                    <Text>好友成单最高可赚</Text>
                    <Text className={styles.sign}>￥</Text>
                    <Text>{defalutImgMes && defalutImgMes.maxFee}</Text>
                  </View> : null}
              </View>
              <View className={styles.share_title}>{goodsDetail.itemTitle}</View>
              <View>
                <Share params={{
                  code: mark,
                  link: `${Config.webHost}/#/pages/goodsdetail/goodsdetail?agentItemId=${agentItemId}&itemId=${goodsDetail.itemId}&companyId=${companyId}&mark=${mark}`,
                  type: 'goodsDetail',
                  showShareImg: true,
                  price: defalutImgMes.agentVipTradePrice,
                  originPrice: defalutImgMes.agentScribingPrice || '',
                  title: goodsDetail.itemTitle,
                }} />
              </View>
              <View className={styles.cancalItem}>
                <View className={styles.cancalBtn} onClick={this.onCancalItem}>
                  取消
                </View>
              </View>
            </View>
          </View>
        </View>

        <View className={styles.noArea_box}>
          <AtFloatLayout isOpened={noAreaModal} title="不发货地区" onClose={() => this.setState({ noAreaModal: false })}>
            {/* {this.getAreaAll({ noArea })} */}
            {(noArea || []).map(item =>
              <View className={styles.item}>
                <View className={styles.title}>{item.areaName}
                  <View className={styles.mes}>
                    {
                      item.childs && (
                        this.getAreaAll({ noArea: item.childs })
                      )
                    }
                  </View>
                </View>
              </View>
            )}
          </AtFloatLayout>
        </View>

      </View >
    );
  }

}

export default Goodsdetail;
