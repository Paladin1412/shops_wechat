/**
 * @Author: cai.ping
 * @Email: cai.ping@jdxiaokang.com
 * @Update: 2020-02-24 12:09:48
 * @Description: 订单提交界面
 */
import Taro from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import { message, Orderly } from '@jxkang/wechat-utils';
import { AtIcon, AtInputNumber } from 'taro-ui';
import withPage from '@/components/with-page';
import Utils, { appUtils, orderPay } from '@/utils'
import Model from '@/model';
import Store from '@/store';
import Assets from '@/components/assets';
import Ellipsis from '@/components/ellipsis';
import styles from './submission.module.styl';


const { getFileUrl, formatPoint } = appUtils;

@withPage
class Submission extends Taro.Component {
  constructor(props) {
    super(props);

    this.config = {
      navigationBarTitleText: '提交订单',
      navigationBarBackgroundColor: '#F7F8FA',
    }

    this.state = {
      // 界面/组件 初始数据
      info: {},
      address: null,
    };

    // this.onCallPay = Orderly.call(
    //   this,
    //   this.onCallPay,
    //   {
    //     // 如果接口或其它各种异常，3秒之后自动解锁 <防止极端情况>
    //     orderlyTimer: 3000
    //   }
    // );
    appUtils.delay(
      this,
      ['onCallPay']
    );

  }

  handleInputChange = (v) => {
    const { info } = this.state
    info.count = v
    this.setState({
      info
    })
    Store.globalStore.setData('infoForOrder', Object.assign({}, info), 'submission.jsx,line:44')
  }

  goAddress = () => {
    Taro.navigateTo({
      url: '/pages/edit-address/edit-address?backUrl=/pages/submission/submission&first=1'
    })
  }

  checkAddress = () => {
    Taro.navigateTo({
      url: '/pages/address/address?backUrl=/pages/submission/submission'
    })
  }

  onCallPay = () => {
    const { address, info } = this.state;
    const { openId } = Store.globalStore.data.envUserInfo
    if (!openId) {
      message.warn('请先登录授权之后再操作');
      appUtils.navigateToLogin({
        params: appUtils.getCurrentPage().options || {},
        desc: '[system] file:orderpay/index.js line:10'
      });
      this.logger({
        logs: '重新授权',
      });
      return false
    }
    const noArea = info.noArea || []
    const arr = this.getnoAreaCode(noArea)
    console.log(">>>arr", arr)
    if (arr.indexOf(`${address.areaId}`) !== -1 || arr.indexOf(`${address.provinceId}`) !== -1 || arr.indexOf(`${address.cityId}`) !== -1) {
      message.error('所选地区不支持发货')
      return
    }
    const orderSource = info.orderSource || 3;
    // let flag = true
    // noArea.map(item => {
    //   if (address.provinceId===item.areaCode&&item.level===0) {
    //     flag = false
    //   }
    //   if (item.childs) {

    //   }
    // })
    const params =
    {
      areaCode: address.areaId,
      cityCode: address.cityId,
      provinceCode: address.provinceId,
      province: address.province,
      city: address.city,
      area: address.area,
      detailAddress: address.house || address.address,
      receiveName: address.receiver,
      receivePhone: address.phone,
      streetCode: address.streetId,
      count: info.count,
      skuId: info.skuId,
      agentItemId: info.agentItemId !== 'null' ? info.agentItemId : null,
      // orderSource,
      liveId: info.liveId
    }

    if (Number(orderSource) === 4 || Number(orderSource) === 5) {
      params.orderSource = orderSource
    }
    Model.order.doOrder(
      params
    ).then(res => {
      if (res) {
        this.logger({
          logs: '下单成功',
          api_url: '/orderservice/order/create',
          api_req: JSON.stringify(params),
          api_res: JSON.stringify(res)
        });
        orderPay.Opay(this, res)
      }
    })
  }
  defAddress = () => {
    Model.order.defAddress().then(res => {
      this.setState({
        address: res
      })
    })
  }
  adressList = () => {
    Model.address.getList().then(res => {
      if (res.totalRecordSize > 0) {
        const i = res.records.findIndex(r => r.isDefault === true)
        this.setState({
          address: i >= 0 ? res.records[i] : res.records[0]
        })
      }
    })
  }
  getSelect = (propsValue = []) => {
    let arr = [];
    console.log(propsValue);
    propsValue.map((p, pi) => {
      arr.push(p.propertyValue)
    })
    const str = arr.join('/')
    return str
  }
  getnoAreaCode = (arr) => {
    let list = []
    arr.map(item => {
      if (item.childs && item.childs.length > 0) {
        list = [...list, ...this.getnoAreaCode(item.childs)]
      } else {
        list.push(item.areaCode)
      }
    })
    return Array.from(new Set(list))
  }

  componentWillReact() { }

  componentDidMount() {
    const info = Taro.getStorageSync('infoForOrder')
    const checkAddress = Taro.getStorageSync('checkAddress')
    if (info) {
      info.propsValue = this.getSelect(info.selectValue || [])
      this.setState({
        info,
      })
    }
    if (checkAddress) {
      this.setState({
        address: checkAddress
      })
    } else {
      this.adressList() //地址列表
    }
    // this.defAddress() //默认地址

  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const { address, info } = this.state;
    return (
      <View className={styles.container}>
        {!address &&
          <View className={styles.addres_box} onClick={this.goAddress}>
            <AtIcon value='add' size='20' color='#676767' className={styles.icon}></AtIcon>
            <Text>添加收货地址</Text>
          </View>
        }
        {address &&
          <View className={styles.addres_box} onClick={this.checkAddress}>
            <View className={styles.item}>
              <View className={styles.left}>
                <View className={styles.name_box}>
                  <Text className={styles.name}>
                    {`${address.receiver}`.substr(0, 12)}
                    {address.receiver.length > 12 ? '...' : null}
                  </Text>
                  <Text className={styles.tel}>{address.phone}</Text>
                </View>
                <Text className={styles.gray}>{address.address || address.house}</Text>
              </View>
              <View className="iconfont">&#xe6b2;</View>
            </View>
          </View>
        }

        <View className={styles.product_box}>
          <View className={styles.title}>
            <View className={`iconfont ${styles.icon_shop}`}>&#xe6b9;</View>
            <Text className={styles.font}>{info.shopName}</Text>
          </View>
          <View className={styles.info_box}>
            <Image className={styles.img} src={getFileUrl(info.skuImg)}></Image>
            <View className={styles.info_right}>
              {/* <Text className={styles.info_title}>{info.itemTitle}</Text> */}
              {/* <View className={styles.size_box}>
                {info.propsValue}
              </View> */}
              {/* <View className={styles.price_box}>
                <View className={styles.left}>
                  <View className={styles.num}>¥ {info.tradePrice}</View>
                  {info.freePostage === true && <View className={styles.tag}>包邮</View>}
                </View>
                <View className={styles.count_box}>
                  <AtInputNumber
                    min={1}
                    max={info.stockQty}
                    step={1}
                    value={info.count}
                    onChange={this.handleInputChange}
                  />
                </View>
              </View> */}
              <View className={styles.item_line}>
                <View className={styles.info_title}>
                  <Ellipsis count={1}>{info.itemTitle}</Ellipsis>
                </View>
                <View className={styles.num}>¥ {info.tradePrice}</View>
              </View>
              <View className={`${styles.item_line} ${styles.second}`}>
                <View>
                  {info.propsValue}
                </View>
                <View>x{info.count}</View>
              </View>
              <View className={styles.count_box}>
                <AtInputNumber
                  min={1}
                  max={info.stockQty}
                  step={1}
                  value={info.count}
                  onChange={this.handleInputChange}
                />
              </View>
              <View className={`${styles.all_price}`}>
                总计:<View className={`${styles.all_num} ${styles.red}`}>￥{formatPoint(info.tradePrice * info.count, 4)}</View>
              </View>
            </View>
          </View>
        </View>
        <View className={styles.product_box}>
          <View className={styles.transfee_box}>
            <Text>运费</Text>
            <Text className={styles.gray}>免运费<Text className={styles.red}>¥ 0.00</Text></Text>
          </View>
        </View>
        <View className={styles.product_box}>
          <View className={styles.transfee_box}>
            <Text>支付</Text>
            <Text>微信支付</Text>
          </View>
        </View>
        <View className={styles.button_box}>
          <View className={styles.content}>
            <View className={styles.left}>
              <Text>应付：</Text>
              <Text className={styles.red}>¥ {formatPoint(info.tradePrice * info.count)}</Text>
              <Text className={styles.gray}>(包含运费)</Text>
            </View>
            {info && address && <View className={styles.button} onClick={this.onCallPay}>提交订单</View>}
            {(!info || !address) && <View className={`${styles.button} ${styles.gray_button}`}>提交订单</View>}
          </View>
        </View>
      </View >
    );
  }

}

export default Submission;
