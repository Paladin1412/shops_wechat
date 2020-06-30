import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import Utils from '@/utils';
import styles from './index.module.styl'

class Collect extends Taro.Component {
  constructor(props) {
    super(props);

    this.state = {
      // 界面/组件 初始数据
    };
  }


  goDetail = (v) => {
    const { companyId } = this.$router.params
    Taro.navigateTo({
      url: `/pages/goodsdetail/goodsdetail?agentItemId=${v.agentItemId}&itemId=${v.itemId}&companyId=${companyId || Taro.getStorageSync('userInfo').companyId}`
    })
  }

  render() {
    const { data } = this.props;
    return (
      <View className={styles.container}>
        {
          (data || []).map((item, index) => {
            return (
              <View className={styles.list} key={`${item}-${index}`} onClick={() => this.goDetail(item)}>
                <View style={{ backgroundImage: `url(${Utils.appUtils.getFileUrl(item.mainImgUrl)})` }} className={styles.product_image} alt={item.itemTitle}></View>
                <View className={styles.product_title}>{item.itemTitle}</View>
                <View className={styles.price_box}>
                  <Text className={styles.symbol}>¥</Text>
                  <Text className={styles.small_price}>{item.minTradePrice || 0}</Text>
                  {/* <Text className={styles.big_price}>¥{item.minScribingPrice || 0}</Text> */}
                </View>
                <Text className={styles.tag}>包邮</Text>
              </View>
            )
          })
        }

      </View >
    );
  }

}

export default Collect;
