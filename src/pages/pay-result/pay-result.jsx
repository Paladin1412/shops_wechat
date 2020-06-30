/**
 * @Author: cai.ping
 * @Email: cai.ping@jdxiaokang.com
 * @Update: 2020-02-25 12:14:58
 * @Description: true
 */
import Taro from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';
import withPage from '@/components/with-page';
import Model from '@/model';
import Assets from '@/components/assets';
import styles from './pay-result.module.styl';
import { AtIcon, AtDivider } from 'taro-ui'
import Utils from '@/utils';


@withPage
class PayResult extends Taro.Component {
  constructor(props) {
    super(props);

    this.config = {
      navigationBarTitleText: '支付结果',
    }

    this.state = {
      // 界面/组件 初始数据
      goodsList: []
    };
  }

  componentDidMount() {
    this.getGoodsList();
  }

  getGoodsList = () => {
    const companyId = this.getCompanyId();

    Model.goods.getRecomdList({ "agentCompanyId": companyId }).then(resModel => {
      if (resModel) {
        this.setState({
          goodsList: resModel
        });
      }
    });
  }

  onViewOrder = () => {
    const { orderNo } = this.$router.params;
    Taro.navigateTo({
      url: `/pages/order-detail/order-detail?orderNo=${orderNo}`
    });
  }

  onKeep = () => {
    Taro.switchTab({
      url: '/pages/index/index'
    });
  }

  goDetail = (v) => {
    const companyId = this.getCompanyId();
    Taro.navigateTo({
      url: `/pages/goodsdetail/goodsdetail?agentItemId=${v.agentItemId}&itemId=${v.itemId}&companyId=${companyId}`
    });
  }

  goPay = () => {
    Taro.navigateBack(-1)
  }

  render() {
    const { goodsList } = this.state;
    const { ret = '1' } = this.$router.params;

    return (
      <View className={styles.content}>
        {/* 成功 */}
        <View className={styles.back}></View>
        {
          ret != '2' ?
            <View className={styles.pay_success}>
              <View className={styles.icont_box}>
                <View>
                  <Image className={styles.ret_icon} src={Assets.other.success} />
                </View>
              </View>
              <View className={styles.status}>支付成功</View>
              <View className={styles.gray}>卖家会在48小时内发货给您，请耐心等待！</View>
              <View className={styles.button_box}>
                <View className={`${styles.button} ${styles.left_button}`} onClick={this.onViewOrder}>查看订单</View>
                <View className={`${styles.button} ${styles.right_button}`} onClick={this.onKeep}>继续逛逛</View>
              </View>
            </View> : // 失败情况
            <View className={`${styles.pay_success} ${styles.pay_false}`}>
              <View className={styles.icont_box}>
                <Image className={styles.ret_icon} src={Assets.other.failed} />
              </View>
              <View className={styles.status}>支付失败</View>
              <View className={styles.gray}>请重新发起支付</View>
              <View className={styles.button_box}>
                <View className={`${styles.button} ${styles.left_button}`} onClick={this.onKeep}>返回首页</View>
                <View className={`${styles.button} ${styles.right_button}`} onClick={this.goPay}>重新支付</View>
              </View>
            </View>
        }
        <View className={styles.tj_out}>
          {/* <AtDivider content='为你推荐' fontColor='#333' lineColor='#F7F7F7' fontSize="28px" /> */}
          <View className={`${styles.titleGoods} ${styles.tuijian_buy}`}>大家都在买</View>
          <View className={styles.tuijian_box}>
            {goodsList.map((item, idx) =>
              <View className={styles.item} key={idx + 1} onClick={() => this.goDetail(item)}>
                <Image className={styles.img} src={Utils.appUtils.getFileUrl(item.mainImgUrl)} />
                <View className={styles.bottom}>
                  <View className={styles.title}>{item.itemTitle}</View>
                  <View className={styles.price_box}>
                    <Text>￥</Text>
                    <Text className={styles.num}>{item.minTradePrice || 0}</Text>
                    {/* <Text className={styles.small_num}>¥{item.minScribingPrice||0}</Text> */}
                  </View>
                  <View className={styles.tag}>包邮</View>
                </View>
              </View>
            )}
          </View>
        </View>
      </View >
    );
  }

}

export default PayResult;
