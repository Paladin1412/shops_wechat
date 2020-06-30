/**
 * @Author: chunxiao.zhang
 * @Email: chunxiao.zhang@jdxiaokang.com
 * @Update: 2020-02-25 13:48:54
 * @Description: 店主动态
 */
import Taro from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import withPage from '@/components/with-page';
import Model from '@/model';
import Assets from '@/components/assets';
import Utils from '@/utils';
import styles from './shopstate.module.styl';



@withPage
class Shopstate extends Taro.Component {
  constructor(props) {
    super(props);

    this.config = {
      navigationBarTitleText: '店主动态',
    }

    this.state = {
      // 界面/组件 初始数据
    };
  }

  componentWillReact() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const { } = this.state;

    return (
      <View className={styles.container}>
        {
          [1, 2].map((data) => {
            return (
              <View className={styles.list}>
                <View className={styles.date}>
                  <View className={styles.day}>11</View>
                  <View className={styles.month}>2月</View>
                </View>
                <View className={styles.right}>
                  {
                    new Array(6).fill('').map((item) => {
                      return (
                        <View className={styles.data}>
                          <View className={styles.head}>
                            <View className={styles.head_img}></View>
                            <View>
                              <View className={styles.name}>塞外</View>
                              <View className={styles.time}>刚刚发布</View>
                            </View>
                          </View>
                          <View className={styles.sell}>
                            我刚刚卖出“<Text className={styles.detail}>FFAN泛泛 闭眼入神裤 三季可穿 升级加长加绒款高腰九分烟管裤女</Text>”
                  </View>
                          <View className={styles.product}>
                            <View className={styles.product_img}></View>
                            <View className={styles.product_info}>
                              <View className={styles.product_title}>商品标题商品标题最多一行商品标题商品标题最多一行</View>
                              <View className={styles.price}>
                                <View>
                                  <Text className={styles.symbol}>¥</Text> <Text className={styles.price_red}>899</Text>
                                  <Text className={styles.del}>¥ 1099</Text>
                                </View>

                                <View className={styles.buy_btn}>抢购</View>
                              </View>
                            </View>
                          </View>
                        </View>
                      )
                    })
                  }

                </View>


              </View>
            )
          })
        }

      </View >
    );
  }

}

export default Shopstate;
