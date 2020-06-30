/**
 * @Author: cai.ping
 * @Email: cai.ping@jdxiaokang.com
 * @Update: 2020-02-26 15:13:21
 * @Description: true
 */
import Taro from '@tarojs/taro';
import { View, Text, Image, ScrollView } from '@tarojs/components';
import { message, Orderly } from '@jxkang/wechat-utils';
// import { Ellipsis } from '@jxkang/wechat-cmpt';
import Ellipsis from '@/components/ellipsis';
import withPage from '@/components/with-page';
import Model from '@/model';
import Assets from '@/components/assets';
import Utils, { orderPay, appUtils } from '@/utils'
import { AtModal } from 'taro-ui'
import styles from './order-detail.module.styl';

const { getFileUrl, formatPoint, getOrderStatus } = appUtils;

@withPage
class OrderDetail extends Taro.Component {
  constructor(props) {
    super(props);

    this.config = {
      navigationBarTitleText: '我的订单',
      navigationStyle: 'custom',
    }

    this.state = {
      // 界面/组件 初始数据
      item: {},
      sureModal: false,
      actionType: '',
      buttonTop: 0,
      buttonHeight: 0,
      addressInfo: {
        list: []
      }
    };
    appUtils.delay(
      this,
      ['onCallPay']
    );
    // this.onCallPay = Orderly.call(this, this.onCallPay);
  }
  goTransDetail = () => {
    Taro.navigateTo({
      url: '/pages/logistics-detail/logistics-detail'
    })
  }
  queryDetail = (orderNo) => {
    Model.order.queryDetail({
      orderNo
    }).then(res => {
      // res.orderStatus = 1
      // res.afterSale = 1
      if (res) {
        res.propsValue = this.getProps(res.newPropsValue)
        // res.logisticsType = res.logisticsType || 2
        this.setState({
          item: res,
        }, () => {
          if (res.logisticsType === 2) {
            this.getDeliveryTrail(orderNo)
          }
        })
      }

    })
  }
  getDeliveryTrail = (orderNo) => {
    Model.order.getDeliveryTrail({ orderNo }).then(res => {
      if (res) {
        this.setState({
          addressInfo: res
        })
      }
    })
  }
  getProps = (propsValue = '') => {
    propsValue = `${propsValue}`.replace('[', '').replace(']', '').replace(/\"/g, "").split(',')
    const str = []
    for (let k of propsValue) {
      str.push(k.split(':')[1])
    }
    return str.join('/')
  }
  deleteOrder = () => {
    const { orderNo } = this.$router.params
    Model.order.deleteOrder({ orderNo }).then(res => {
      this.setState({
        sureModal: false
      })
      if (res) {
        message.success("已删除")
        setTimeout(() => {
          Taro.navigateTo({
            url: `/pages/my-order/my-order?index=4`
          })
        }, 500)

      }
    })
  }
  cancelOrder = () => {
    const { orderNo } = this.$router.params
    Model.order.cancelOrder({ orderNo }).then(res => {
      this.setState({
        sureModal: false
      })
      if (res === true) {
        message.success("订单已取消")
        setTimeout(() => {
          Taro.navigateTo({
            url: `/pages/my-order/my-order?index=0`
          })
        }, 500)
      }
    })
  }
  goRefund = (type) => {
    const { orderNo } = this.$router.params
    const { shopLevel } = this.$router.params
    Taro.navigateTo({
      url: `/pages/after-sales/after-sales?type=${type}&orderNo=${orderNo}&shopLevel=${shopLevel}`
    })
  }
  goIndex = () => {
    const companyId = this.getCompanyId();
    Taro.switchTab({
      url: `/pages/index/index?companyId=${companyId}`
    })
  }
  goGoodDetail = () => {
    const { item } = this.state;
    const { orderSource = 3 } = this.$router.params
    const companyId = this.getCompanyId();
    Taro.navigateTo({
      url: `/pages/goodsdetail/goodsdetail?agentItemId=${item.agentItemId}&itemId=${item.itemId}&companyId=${companyId}&orderSource=${item.orderSource || orderSource}`
    })
  }

  goAfter = (afterSaleNo) => {
    Taro.navigateTo({
      url: `/pages/aftersales-detail/aftersales-detail?afterSaleNo=${afterSaleNo}`
    })
  }
  setaction = () => {
    const { actionType } = this.state
    if (actionType === '删除') {
      this.deleteOrder()
    } else if (actionType === '收货') {
      this.receivedOrder()
    } else if (actionType === '取消') {
      this.cancelOrder()
    }
  }

  receivedOrder = () => {
    const { orderNo } = this.$router.params
    Model.order.receivedOrder({ orderNo }).then(res => {
      this.setState({
        sureModal: false
      })
      if (res === true) {
        message.success("已收货")
        setTimeout(() => {
          Taro.navigateTo({
            url: `/pages/my-order/my-order?t=${new Date().getTime()}&index=3`
          })
        }, 500)

      }
    })
  }
  copyAction = (data) => {
    Taro.setClipboardData({
      data,
      success() {
        message.success('复制成功');
      }
    })
  }
  goAddress = () => {
    const { orderNo } = this.$router.params
    Taro.navigateTo({
      url: `/pages/logistics-detail/logistics-detail?orderNo=${orderNo}`
    })
  }

  onCallPay = (orderNo) => {
    orderPay.Opay(this, orderNo)
  }

  componentWillReact() { }

  componentDidMount() {
    const { orderNo } = this.$router.params
    this.queryDetail(orderNo)
    // this.getDeliveryTrail(orderNo)
    const that = this
    const { top, height } = Taro.getMenuButtonBoundingClientRect()
    Taro.getSystemInfo({
      success: function (res) {
        //model中包含着设备信息
        var model = res.model
        that.setState({
          buttonTop: top,
          buttonHeight: height
        })
      }
    })
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const {
      item, sureModal, actionType,
      buttonTop,
      buttonHeight, addressInfo
    } = this.state;
    let { shopLevel } = this.$router.params
    shopLevel = Number(shopLevel)
    return (
      <View className={styles.container}>
        <View className={`${styles.top_box}`} >
          <View className={styles.top_inner} style={{ marginTop: `${buttonTop}px`, height: `${buttonHeight}px` }}>
            <View className={`iconfont ${styles.go_back_icon}`} onClick={() => { Taro.navigateBack(-1) }}>&#xe682;</View>
            <View className={styles.font}>订单详情</View>
          </View>
        </View>
        <View className={styles.back}></View>
        {item.afterSale === 0 ? <View className={styles.red_back}>
          <View className={styles.status_line}>
            {item.orderStatus === 0 ? <View className="iconfont icondaizhifu" /> : null}
            {item.orderStatus === 3 ? <View className="iconfont iconyiwancheng" /> : null}
            {item.orderStatus === 2 ? <View className="iconfont icondaishouhuo2" /> : null}
            {item.orderStatus === 1 ? <View className="iconfont iconxiangqing-daifahuo" /> : null}
            {item.orderStatus === 4 ? <View className="iconfont iconguanbi" /> : null}
            {item.orderStatus === 7 ? <View className="iconfont iconyiquxiao" /> : null}
            {item.afterSale === 1 ? <View className="iconfont iconshouhou" /> : null}
            <View>
              {item.orderStatus === 0 ? '待支付' : null}
              {item.orderStatus === 1 ? '待发货' : null}
              {item.orderStatus === 2 ? '待收货' : null}
              {item.orderStatus === 3 ? '已完成' : null}
              {item.orderStatus === 4 ? '已关闭' : null}
              {item.orderStatus === 7 ? '已取消' : null}
              {(item.afterSale === 1 && item.orderStatus === 2) ? '退款中' : null}
              {(item.afterSale === 1 && item.orderStatus === 3) ? '售后中' : null}
            </View>
            {/* <View className={styles.clock_box}>
              <View class="iconfont">&#xe683;</View>
              <RunSecond
                secondClassName={styles.secondClassName}
                deadline={new Date(item.gmtModified).getTime()}
                onFinish={this.onFinish}
              />
            </View> */}
          </View>
          <View className={styles.desc}>
            {item.orderStatus === 0 ? '请尽快支付，给您安排发货' : null}
            {item.orderStatus === 1 ? '您的订单已受理，请耐心等待' : null}
            {item.orderStatus === 2 ? '您的订单已发货，快递小哥正在快马加鞭向您赶来…' : null}
            {item.orderStatus === 3 ? '您的订单已签收完成，感谢您使用康小铺购物' : null}
            {item.orderStatus === 4 ? '您的订单已关闭，请重新下单' : null}
            {item.orderStatus === 7 ? '您的订单已取消，请重新下单' : null}
            {(item.afterSale === 1 && item.orderStatus === 2) ? '您的退款申请已提交，正在等待审核...' : null}
            {(item.afterSale === 1 && item.orderStatus === 3) ? '您的售后申请已提交，正在等待审核...' : null}
          </View>
        </View> : null}
        {
          (item.afterSale === 1 && item.afterSaleStatus !== 53 && item.afterSaleStatus !== 99 && item.afterSaleStatus !== 98) ?
            <View className={styles.red_back}>
              <View className={styles.status_line}>
                <View className="iconfont iconshouhou" />
                <View>售后中</View>
              </View>
              <View className={styles.desc}>
                您的订单有售后记录，可到售后详情里查看进度
            </View>
            </View>
            : null
        }
        {
          (item.afterSale === 1 && (item.afterSaleStatus === 53 || item.afterSaleStatus === 99)) ?
            <View className={styles.red_back}>
              <View className={styles.status_line}>
                <View className="iconfont iconshouhou" />
                <View>售后已完结</View>
              </View>
              <View className={styles.desc}>
                您的订单已完成售后，可到售后详情里查看进度
            </View>
            </View>
            : null
        }
        {
          item.afterSale === 1 && item.afterSaleStatus === 98 &&
          <View className={styles.red_back}>
            <View className={styles.status_line}>
              <View className="iconfont iconzhifushibai" />
              <View>
                {item.orderStatus === 1 ? '退款驳回' : null}
                {(item.orderStatus === 2 || item.orderStatus === 3) ? '退货驳回' : null}
              </View>
            </View>
            <View className={styles.desc}>
              您的
              {item.orderStatus === 1 ? '退款申请' : null}
              {(item.orderStatus === 2 || item.orderStatus === 3) ? '退货申请' : null}
              已被驳回，请联系商家解决
            </View>
          </View>
        }
        <ScrollView scrollY className={styles.scroll_box}>
          <View className={styles.addres_box}>
            <View className={styles.item}>
              <View className={styles.left}>
                <View className={styles.name_box}>
                  <Text className={styles.name}>{`${item.receiveName}`.substr(0.10)}{item.receiveName > 10 ? '...' : null}</Text>
                  <Text className={styles.tel}>{item.receivePhone}</Text>
                </View>
                <View className={styles.gray}>
                  <Ellipsis count={2}> {item.detailAddress}</Ellipsis>
                </View>
              </View>
            </View>
          </View>
          {(addressInfo.expName || item.deliveryNo) && item.logisticsType === 2 &&
            <View className={`${styles.addres_box} ${styles.trans_box}`} >
              <View className={styles.item}>
                <View className={styles.left}>
                  <View className={styles.name_box}>
                    <Text className={styles.name}>{addressInfo.expName || item.deliveryCompany}</Text>
                    <View className={styles.tel}>{addressInfo.number || item.deliveryNo}
                      <View className={styles.copy_box} onClick={() => this.copyAction(addressInfo.number || item.deliveryNo)}>复制</View>
                    </View>
                  </View>
                  {addressInfo.list.length > 0 &&
                    <View>
                      <Text className={`${styles.gray} ${styles.red}`}> {addressInfo.list ? addressInfo.list[0].status : '--'}</Text>
                      <View className={styles.date}>{addressInfo.list ? addressInfo.list[0].time : '--'}</View>
                    </View>
                  }
                </View>
                {addressInfo.list.length > 0 && <View className={`iconfont ${styles.icon}`} onClick={this.goAddress} >&#xe68f;</View>}
              </View>
            </View>
          }
          {item.logisticsType === 1 && item.orderStatus >= 2 &&
            <View className={styles.product_box}>
              <View className={styles.order_info}>
                <View className={styles.title}>配送方式：</View>
                <View>店主配送</View>
              </View>
            </View>
          }
          <View className={styles.product_box}>
            <View className={styles.title}>
              <View className={`iconfont ${styles.icon_shop}`}>&#xe6dd;</View>
              <Text className={styles.font} onClick={this.goIndex}>{Taro.getStorageSync('userInfo').shopName}</Text>

              <View className={`${styles.status_box}`}>
                <Text className={styles.red}>
                  {getOrderStatus({
                    afterSale: item.afterSale,
                    afterSaleStatus: item.afterSaleStatus,
                    orderStatus: item.orderStatus,
                    afterSaleType: item.afterSaleType
                  })}
                </Text>
              </View>
            </View>
            <View className={styles.info_box} onClick={this.goGoodDetail}>
              <Image className={styles.img} src={getFileUrl(item.skuImg)}></Image>
              <View className={styles.info_right}>
                {/* <View className={styles.info_title}>
                  <Ellipsis count={2}>{item.itemTitle}</Ellipsis>
                </View>
                <View className={styles.size_box}>
                  {item.propsValue}
                </View>
                <View className={styles.price_box}>
                  <View className={styles.left}>
                    <View className={styles.num}>¥ {item.agentUnitPrice} <Text className={styles.count}>x{item.count}合计:￥{formatPoint(item.agentUnitPrice * item.count, 4)}</Text></View>
                    {shopLevel >= 2 && <View className={styles.recv}>预计收益￥{item.income || 0}</View>}
                  </View>
                </View> */}
                <View className={styles.item_line}>
                  <View className={styles.info_title}>
                    <Ellipsis count={1}>{item.itemTitle}</Ellipsis>
                  </View>
                  <View className={styles.num}>¥ {item.agentUnitPrice}</View>
                </View>
                <View className={`${styles.item_line} ${styles.second}`}>
                  <View>
                    {item.propsValue}
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
                  总计:<View className={styles.all_num}>￥{formatPoint(item.agentUnitPrice * item.count, 4)}</View>
                </View>
              </View>
            </View>
          </View>

          <View className={styles.product_box}>
            <View className={styles.order_info}>
              <Text className={styles.title}>订单编号：</Text>
              <Text>{item.orderNo}</Text>
              <View className={styles.copy_box} onClick={() => this.copyAction(item.orderNo)}>复制</View>
            </View>
            <View className={styles.order_info}>
              <Text className={styles.title}>提交时间：</Text>
              <Text>
                {item.gmtCreated}
              </Text>
            </View>
            {item.gmtPayment && < View className={styles.order_info}>
              <Text className={styles.title}>支付时间：</Text>
              <Text>{item.gmtPayment}</Text>
            </View>}
            {item.gmtSend && <View className={styles.order_info}>
              <Text className={styles.title}>发货时间：</Text>
              <Text>{item.gmtSend}</Text>
            </View>}
            {item.gmtReceive && <View className={styles.order_info}>
              <Text className={styles.title}>完成时间：</Text>
              <Text>{item.gmtReceive}</Text>
            </View>}
          </View>

          <View className={styles.product_box}>
            <View className={styles.transfee_box}>
              <Text className={styles.label}>运费</Text>
              <Text className={styles.gray}>{item.freePostage === 1 ? '免运费' : null}<Text className={styles.red}>¥ {item.postage || '0.00'}</Text></Text>
            </View>
          </View>
          <View className={styles.product_box}>
            <View className={styles.transfee_box}>
              <Text className={styles.label}>总金额</Text>
              <Text className={styles.gray}><Text className={styles.red}>¥ {formatPoint(item.agentUnitPrice * item.count + (item.postage || 0), 4)}</Text></Text>
            </View>
          </View>
        </ScrollView>

        <View className={styles.button_box}>
          <View className={styles.content}>
            {/* <View className={styles.left}>
              <Text>应付：</Text>
              <Text className={styles.red}>¥ {item.totalOrderAmount}</Text>
              <Text className={styles.gray}>(包含运费)</Text>
            </View> */}
            <View className={styles.rigth}>

              {/* {item.orderStatus === 1 && '待支付'}
                {item.orderStatus === 2 && '待发货'}
                {item.orderStatus === 3 && '待收货'}
                {item.orderStatus === 4 && '已完成'}
                {item.orderStatus === 5 && '已关闭'} */}

              {/* {item.orderStatus === 0 && <View className={`${styles.button} ${styles.gray_button}`} onClick={() => this.setState({ sureModal: true, actionType: '取消' })}>取消订单</View>} */}
              {item.orderStatus === 0 && <View className={`${styles.button} ${styles.red_button}`} onClick={() => this.onCallPay(item.orderNo)}>立即支付</View>}
              {item.orderStatus === 1 && item.afterSale === 0 && item.settle !== 1 && <View className={`${styles.button} ${styles.gray_button}`} onClick={() => this.goRefund(1)}>申请退款</View>}
              {(item.orderStatus === 2 || item.orderStatus === 3) && item.afterSale === 0 && item.settle !== 1 &&
                <View className={`${styles.button} ${styles.gray_button}`} onClick={() => this.goRefund(2)}>申请售后</View>
              }
              {item.orderStatus === 2 && item.afterSale === 0 &&
                <View className={`${styles.button} ${styles.red_button}`} onClick={() => this.setState({ sureModal: true, actionType: '收货' })}>
                  确认收货
                </View>}
              {/* {item.orderStatus === 7 && <View className={`${styles.button} ${styles.gray_button}`} onClick={() => this.setState({ sureModal: true, actionType: '删除' })}>删除订单</View>} */}
              {item.afterSale === 1 && <View className={`${styles.button} ${styles.gray_button}`} onClick={() => this.goAfter(item.afterSaleNo)}>查看售后</View>}
            </View>
          </View>
        </View>
        <AtModal
          isOpened={sureModal}
          title={false}
          cancelText='取消'
          confirmText='是的'
          onClose={() => this.setState({ sureModal: false })}
          onCancel={() => this.setState({ sureModal: false })}
          onConfirm={() => this.setaction()}
          content={`确定${actionType}吗`}
        />
      </View >
    );
  }

}

export default OrderDetail;
