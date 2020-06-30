/**
 * @Author: cai.ping
 * @Email: cai.ping@jdxiaokang.com
 * @Update: 2020-02-27 10:09:23
 * @Description: true
 */
import Taro from '@tarojs/taro';
import { AtTabs, AtModal } from 'taro-ui'
import ListView from 'taro-listview';
import { View, Text, Image } from '@tarojs/components';
import { message, Orderly } from '@jxkang/wechat-utils';
import Ellipsis from '@/components/ellipsis';
import withPage from '@/components/with-page';
import { appUtils, orderPay } from '@/utils'
import Empty from '@/components/empty';
import Model from '@/model';
import styles from './my-order.module.styl';

const { getFileUrl, formatPoint, getOrderStatus, getAfterStatus } = appUtils;

let hasListenSubMsg = false;

@withPage
class MyOrder extends Taro.Component {
  constructor(props) {
    super(props);
    this.config = {
      navigationBarTitleText: '我的订单',
      navigationBarBackgroundColor: '#F7F8FA',
      enablePullDownRefresh: false,
      disableScroll: true,
      navigationStyle: 'custom',
    }

    this.state = {
      // 界面/组件 初始数据
      type: 0,
      tabList: [
        { title: '全部', type: -1 },
        { title: '待支付', type: 0 },
        { title: '待发货', type: 1 },
        { title: '待收货', type: 2 },
        { title: '已完成', type: 3 },
        { title: '已关闭', type: 4 },
        // { title: '退换货', type: 6 },
      ],
      afterTab: [
        { title: '全部' },
        { title: '退款单' },
        { title: '退货单' },
        { title: '赔付单' }
      ],
      buyList: [
        { title: '自购', type: 0 },
        { title: '分享购', type: 1 },
      ],
      isLoaded: false,
      error: false,
      hasMore: true,
      isEmpty: false,
      list: [],
      screenHeight: '',
      buyType: 0,
      isShow: false,
      pageNum: 1,
      shopLevel: 1,
      sureModal: false,
      checkNo: '',
      actionType: '',
      actionDesc: '',
      isOrder: 1,
      afterSaleNo: ''
    };

    // this.onCallPay = Orderly.call(this, this.onCallPay);
    appUtils.delay(
      this,
      ['onCallPay']
    );

    this.listStatus = false;
  }

  getData = ({ pageNum = 1, pageSize = 4, callback }) => {
    const { buyType, type, list, tabList, isOrder } = this.state
    const orderStatus = type === 0 ? '' : tabList[type].type
    let query = {}
    if (type === 6) {
      query = {
        pageNum,
        pageSize,
        queryAfterSale: type === 6,
        invite: buyType === 1,
      }
    } else {
      query = {
        pageNum,
        pageSize,
        orderStatus,
        invite: buyType === 1
      }
    }
    if (isOrder === 2) {
      query = {
        pageNum,
        pageSize,
        status: type
      }
    }
    const m = isOrder === 2 ?
      Model.order.afterList(
        query
      ) : Model.order.queryList(
        query
      )
    m.then(res => {
      if (res) {
        const l = list.concat(res.list)
        this.setState({
          isLoaded: true,
          isShow: true,
          list: l,
          hasMore: res.hasNextPage,
          pageNum,
          isEmpty: l.length <= 0
        }, () => {
          if (callback) {
            callback()
            this.listStatus = false;
          }
        })
      }
    })

  };
  getSearchData = ({ pageNum = 1, callback }) => {
    const { orderNo = '', itemName = '', consigneeName = '', phone = '' } = this.$router.params
    const { queryType, list } = this.state
    let params = {
      queryType,
      orderNo: decodeURI(orderNo),
      itemName: decodeURI(itemName),
      consigneeName: decodeURI(consigneeName),
      phone: decodeURI(phone),
    }
    Model.order.queryListByParam(params).then(res => {
      if (res) {
        const l = list.concat(res)
        this.setState({
          isLoaded: true,
          isShow: true,
          list: l,
          hasMore: false,
          pageNum,
          isEmpty: l.length <= 0
        }, () => {
          if (callback) {
            callback()
          }
        })
      }
    })
  }



  onScrollToLower = (fn) => {
    if(this.listStatus){
      return false;
    }
    this.listStatus = true;
    this.state.pageNum += 1;
    const pageNum = this.state.pageNum;
    this.getData({ pageNum: pageNum, callback: fn })
  };
  onPullDownRefresh = (fn) => {
    const { isSearchResult } = this.state
    this.setState({
      list: []
    }, () => {
      if (isSearchResult === 1) {
        this.getData({ callback: fn })
      } else if (isSearchResult === 2) {
        this.getSearchData({ callback: fn })
      }
    })
  }
  getShopMemberLevel = () => {
    const { index = 0 } = this.$router.params
    const { isOrder = 1, isSearchResult = 1, queryType = 1 } = this.$router.params
    const { top, height } = Taro.getMenuButtonBoundingClientRect();
    const companyId = this.getCompanyId();
    Model.order.getShopMemberLevelInfo({ companyId }).then(res => {
      // res.memberLevel = 1
      if (res) {
        this.setState({
          shopLevel: res.memberLevel,
          type: Number(index),
          isOrder: Number(isOrder),
          isSearchResult: Number(isSearchResult),
          queryType: Number(queryType),
          buttonTop: top,
          buttonHeight: height,
        }, () => {
          if (Number(isSearchResult) === 1) { //非搜索情况下请求订单接口
            this.getData({})
          } else {
            this.getSearchData({})
          }
        })
      }
    })
  }
  setaction = () => {
    const { actionType } = this.state
    if (actionType === '删除') {
      this.deleteOrder()
    } else if (actionType === '收货') {
      this.receivedOrder()
    } else if (actionType === '取消') {
      this.cancelAfter()
    }
  }
  cancelAfter = () => {
    const { afterSaleNo } = this.state
    Model.order.cancelAfter({ afterSaleNo }).then(res => {
      this.setState({
        sureModal: false
      })
      if (res) {
        message.success("已取消")
        Taro.navigateTo({
          url: `/pages/my-order/my-order?t=${new Date().getTime()}&isOrder=2`
        })
      }
    })
  }
  deleteOrder = () => {
    const { checkNo } = this.state
    const { index } = this.$router.params
    Model.order.deleteOrder({ orderNo: checkNo }).then(res => {
      this.setState({
        sureModal: false
      })
      if (res) {
        message.success("已删除")
        Taro.navigateTo({
          url: `/pages/my-order/my-order?t=${new Date().getTime()}&index=${index}`
        })
      }
    })
  }
  receivedOrder = (orderNo) => {
    const { checkNo } = this.state
    Model.order.receivedOrder({ orderNo: checkNo }).then(res => {
      if (res === true) {
        this.setState({
          sureModal: false
        })
        message.success("已收货")
        setTimeout(() => {
          Taro.navigateTo({
            url: `/pages/my-order/my-order?t=${new Date().getTime()}&index=3`
          })
        }, 500)
      }
    })
  }

  componentWillReact() { }

  componentDidMount() {
    this.getShopMemberLevel()
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  handleClick = (value) => {
    this.setState({
      isShow: false,
      type: value,
      list: []
    }, () => this.getData({}))
  }

  goDetail = ({ orderNo, afterSaleNo, orderSource = 3 }) => {
    const { buyType, shopLevel } = this.state
    if (buyType === 1) {
      return false
    }
    Taro.navigateTo({
      url: `/pages/order-detail/order-detail?orderNo=${orderNo}&afterSaleNo=${afterSaleNo}&shopLevel=${shopLevel}&orderSource=${orderSource}`
    })
  }
  goAfter = (afterSaleNo) => {
    Taro.navigateTo({
      url: `/pages/aftersales-detail/aftersales-detail?afterSaleNo=${afterSaleNo}`
    })
  }
  setType = (type) => {
    this.setState({
      buyType: type,
      type: 0,
      isShow: false,
      list: []
    }, () => this.getData({}))
  }
  goIndex = () => {
    const { companyId } = Taro.getStorageSync('userInfo')
    Taro.switchTab({
      url: `/pages/index/index?companyId=${companyId}`
    })
  }

  goRefund = (type, orderNo) => {
    const { shopLevel } = this.state
    Taro.navigateTo({
      url: `/pages/after-sales/after-sales?type=${type}&orderNo=${orderNo}&shopLevel=${shopLevel}`
    })
  }
  geSearch = () => {
    Taro.navigateTo({
      url: `/pages/order-search/order-search`
    })
  }
  goMy = () => {
    const { isSearchResult } = this.state
    let url = isSearchResult === 2 ? '/pages/my-order/my-order' : '/pages/my/my'
    let action = isSearchResult === 2 ? 'navigateTo' : 'switchTab'
    Taro[action]({
      url
    })
  }
  onCallPay = (orderNo) => {
    orderPay.Opay(this, orderNo)
  }

  getProps = (propsValue = '') => {
    propsValue = `${propsValue}`.replace('[', '').replace(']', '').replace(/\"/g, "").split(',')
    const str = []
    for (let k of propsValue) {
      str.push(k.split(':')[1])
    }
    return str.join('/')
  }

  /**
   * 消息订阅
   */
  onListenSubMsg = () => {
    if(!hasListenSubMsg){
      appUtils.subscribeMessage((res, status) => {
        if(status){
          hasListenSubMsg = true;
        }
      })
    }
  }

  render() {
    const {
      isLoaded, error, hasMore, isEmpty, list,
      screenHeight, type, tabList, buyType,
      buyList, isShow, shopLevel,
      sureModal, checkNo, actionType, actionDesc, afterTab, isOrder, isSearchResult,
      buttonTop,
      buttonHeight,
    } = this.state;

    return (
      <View className={styles.order_content} onClick={this.onListenSubMsg}>
        <View className={styles.back}></View>
        <View className={styles.nav_out}>
          <View className={styles.top_inner} style={{ marginTop: `${buttonTop}px`, height: `${buttonHeight}px` }}>
            <View className={`iconfont ${styles.go_back_icon}`} onClick={this.goMy}>&#xe682;</View>
            <View className={styles.font}>订单列表</View>
          </View>
        </View>

        {isOrder === 1 && <View
          style={{ paddingTop: `${buttonTop + buttonHeight}px` }}
          className={`${styles.search_out} ${isSearchResult === 2 ? styles.result_search_out : styles.default_search_out}`}>
          <View className={styles.search_box} onClick={this.geSearch}>
            <View className={`iconfont ${styles.icon}`}>&#xe6f6;</View>
            <View>搜索</View>
          </View>
        </View>}
        {shopLevel >= 2 && isOrder === 1 && isSearchResult === 1 && <View className={styles.buy_type_box}>
          {buyList.map((it, index) =>
            <View key={index + 1} className={`${styles.item} ${buyType === it.type ? styles.active : null}`} onClick={() => this.setType(it.type)}>{it.title}</View>
          )}
        </View>}
        {isOrder === 1 && isSearchResult === 1 && <View className={`${styles.tab_box} ${shopLevel < 2 ? styles.tab_style : null}`}>
          <AtTabs
            current={type}
            scroll
            tabList={tabList}
            onClick={this.handleClick}>
          </AtTabs>
        </View>}


        {isShow &&
          <ListView
            // lazy
            ref={node => this.scrollV = node}
            isLoaded={isLoaded}
            hasMore={hasMore}
            isEmpty={isEmpty}
            launch={{
              launchEmpty: true
            }}
            style={{ paddingTop: `${buttonTop + buttonHeight + 9}px` }}
            renderEmpty={
              <View className={styles.grid_empty}>
                <Empty
                  msg="暂无订单数据"
                  type={1}
                />
                <View className={styles.to_buy_button} onClick={this.goIndex}>去购买商品</View>
              </View>
            }
            onScrollToLower={this.onScrollToLower}
            onPullDownRefresh={this.onPullDownRefresh}
            className={`${styles.scroll_content} 
            ${shopLevel >= 2 ? isOrder === 1 && styles.scroll_content_vip : isOrder === 1 && styles.scroll_content_def} 
            ${isOrder === 2 && styles.after_content} 
            ${isSearchResult === 2 && styles.scroll_content_search}`}
          >
            <View>
              {isOrder === 2 && list.map((item, i) =>
                <View className={styles.product_box} key={i + 1}>
                  <View className={styles.title}>
                    <View className="iconfont">&#xe691;</View>
                    <Text className={styles.font} onClick={this.goIndex}>{Taro.getStorageSync('userInfo').shopName}</Text>
                    <View className="iconfont turnright" onClick={this.goIndex}>&#xe68f;</View>
                    <Text className={`${styles.status_box} ${styles.red}`}>
                      {getAfterStatus({
                        afterSaleStatus: item.afterSaleStatus,
                        afterSaleType: item.afterSaleType
                      })}
                    </Text>
                  </View>
                  <View className={styles.info_box} onClick={() => this.goAfter(item.afterSaleNo)}>
                    <Image className={styles.img} src={getFileUrl(item.skuImg)}></Image>
                    <View className={styles.info_right}>
                      <View className={styles.item_line}>
                        <View className={styles.info_title}>
                          <Ellipsis count={1}>{item.itemTitle}</Ellipsis>
                        </View>
                        <View className={styles.num}>¥ {item.agentUnitPrice}</View>
                      </View>
                      <View className={`${styles.item_line} ${styles.second}`}>
                        <View>
                          {this.getProps(item.propsValue)}
                        </View>
                        <View className={styles.count_box}>x{item.afterSaleCount}</View>
                      </View>
                      <View className={`${styles.item_line}`}>
                        <View className={styles.after_Amount}>退款金额 ￥{item.afterSaleAmount}</View>
                        <View ></View>
                      </View>
                      <View className={`${styles.all_price}`} style={{ marginTop: '10px' }}>
                        总计:
                        <View className={styles.all_num}>￥{formatPoint(item.agentUnitPrice * item.afterSaleCount, 4)}</View>
                      </View>
                    </View>
                  </View>
                  {/* <View className={styles.after_Amount}>退款金额 ￥{item.afterSaleAmount}</View> */}
                  <View className={styles.bottom_box}>
                    <View className={styles.button_box}>
                      {item.afterSaleStatus !== 53 && item.afterSaleStatus !== 99 && item.afterSaleStatus !== 97 && item.afterSaleStatus !== 98 &&
                        <View className={`${styles.button} ${styles.gray_button}`}
                          onClick={() => this.setState({ sureModal: true, afterSaleNo: item.afterSaleNo, actionType: '取消', actionDesc: '您仅能主动取消一次，取消后将不能再主动取消，且超出保障期无法再次发起售后' })}>
                          取消售后
                      </View>
                      }
                      <View className={`${styles.button} ${styles.shouhuo}`} onClick={() => this.goAfter(item.afterSaleNo)}>查看售后</View>
                    </View>
                  </View>

                </View>
              )}
              {/* 订单显示 */}
              {isOrder === 1 && list.map((item, i) =>
                <View className={styles.product_box} key={i + 1}>
                  <View className={styles.title}>
                    <View className="iconfont">&#xe691;</View>
                    <Text className={styles.font} onClick={this.goIndex}>{Taro.getStorageSync('userInfo').shopName}</Text>
                    <View className="iconfont turnright" onClick={this.goIndex}>&#xe68f;</View>
                    <Text className={`${styles.status_box} ${styles.red}`}>
                      {getOrderStatus({
                        afterSale: item.afterSale,
                        afterSaleStatus: item.afterSaleStatus,
                        orderStatus: item.orderStatus,
                        afterSaleType: item.afterSaleType
                      })}
                    </Text>
                  </View>
                  <View className={styles.info_box} onClick={() => this.goDetail({
                    orderNo: item.orderNo,
                    afterSaleNo: item.afterSaleNo,
                    orderSource: item.orderSource
                  })}>
                    <Image className={styles.img} src={getFileUrl(item.skuImg)}></Image>
                    <View className={styles.info_right}>
                      <View className={styles.item_line}>
                        <View className={styles.info_title}>
                          <Ellipsis count={1}>{item.itemTitle}</Ellipsis>
                        </View>
                        <View className={styles.num}>¥ {item.agentUnitPrice}</View>
                      </View>
                      <View className={`${styles.item_line} ${styles.second}`}>
                        <View>
                          {this.getProps(item.propsValue)}
                        </View>
                        <View className={styles.count_box}>x{item.count}</View>
                      </View>
                      <View className={`${styles.item_line_container}`}>
                        {shopLevel >= 2 && <View className={`${styles.item_line}`}>
                          <View className={styles.recv}>预计收益￥{item.income || 0}</View>
                          <View ></View>
                        </View>}
                      </View>
                      <View className={`${styles.all_price}`}>
                        总计:
                        <View className={styles.all_num}>￥{formatPoint(item.agentUnitPrice * item.count, 4)}</View>
                      </View>
                    </View>
                  </View>
                  <View className={styles.bottom_box}>
                    {/* <View className={styles.clock_box}>
                    <View className="iconfont">&#xe683;</View>
                    12:00
                  </View> */}
                    {buyType === 0 && <View className={styles.button_box}>
                      {item.orderStatus === 0 && <View className={`${styles.button} ${styles.shouhuo}`} onClick={() => this.onCallPay(item.orderNo)}>去付款</View>}
                      {/* {(item.orderStatus === 3 || item.orderStatus === 2) && item.afterSale === 0 && <View className={`${styles.button} ${styles.gray_button}`} onClick={() => this.goRefund(2, item.orderNo)}>申请售后</View>} */}
                      {/* {item.orderStatus === 1 && item.afterSale === 0 && <View className={`${styles.button} ${styles.gray_button}`} onClick={() => this.goRefund(1, item.orderNo)}>申请退款</View>} */}

                      {/* <View className={`${styles.button} ${styles.wuliu}`}>查看物流</View> */}
                      {item.orderStatus === 2 && item.afterSale === 0 &&
                        <View className={`${styles.button} ${styles.shouhuo}`}
                          onClick={() => this.setState({ sureModal: true, checkNo: item.orderNo, actionType: '收货' })}>
                          确认收货
                        </View>
                      }
                      {/* {item.orderStatus === 7 &&
                      <View className={`${styles.button} ${styles.gray_button}`}
                        onClick={() => this.setState({ sureModal: true, checkNo: item.orderNo, actionType: '删除' })}>
                        删除订单
                      </View>
                    } */}
                    </View>}
                  </View>
                </View>
              )}
            </View>
          </ListView>
        }
        <AtModal
          isOpened={sureModal}
          title={actionType !== '取消' && `确定${actionType}吗`}
          cancelText='再想想'
          confirmText='确定'
          onClose={() => this.setState({ sureModal: false })}
          onCancel={() => this.setState({ sureModal: false })}
          onConfirm={() => this.setaction()}
          content={actionType === '取消' && actionDesc}
        />
        {/** 非生产环境跳汇付模拟分账 */}
        {/* {
          Config.env === 'production' ?
          null :
          <WebView
            src={undefined}
          />
        } */}
      </View >
    );
  }

}

export default MyOrder;
