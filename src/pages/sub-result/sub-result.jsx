/**
 * @Author: cai.ping
 * @Email: cai.ping@jdxiaokang.com
 * @Update: 2020-02-25 12:14:58
 * @Description: 提交结果界面
 */
import Taro from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';
import withPage from '@/components/with-page';
import Model from '@/model';
import Assets from '@/components/assets';
import Utils from '@/utils';
import styles from './sub-result.module.styl';
import { AtIcon, AtDivider } from 'taro-ui'


@withPage
class PayResult extends Taro.Component {
  constructor(props) {
    super(props);

    this.config = {
      navigationBarTitleText: '提交结果',
    }

    this.state = {
      // 界面/组件 初始数据
    };
  }
  goOrder = () => {
    Taro.switchTab({
      // url: `/pages/my-order/my-order?index=0`
      url: `/pages/my/my`
    })
  }

  componentWillReact() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const { } = this.state;

    return (
      <View className={styles.content}>
        <View className={styles.back}></View>
        <View className={styles.pay_success}>
          <View className={styles.title}>
            <View className="iconfont">&#xe6af;</View>
            <View className={styles.status}>提交成功</View>
          </View>
          <View className={styles.gray}>您的售后申请已提交，正在等待审核...</View>
          <View className={styles.goback} onClick={this.goOrder}>好的</View>
        </View>

        {/* <View className={`${styles.pay_success} ${styles.pay_false}`}>
          <View className={styles.title}>
            <View className="iconfont">&#xe697;</View>
            <View className={styles.status}>提交失败</View>
          </View>
          <View className={styles.gray}>请重新发起请求</View>
        </View> */}
        {/* <View className={styles.tj_out}>
          <AtDivider content='为你推荐' fontColor='#333' lineColor='#F7F7F7' fontSize="28px" />
          <View className={styles.tuijian_box}>
            {[1, 2, 3, 4].map(item =>
              <View className={styles.item}>
                <Image className={styles.img} src="http://img5.imgtn.bdimg.com/it/u=3836022977,4193961472&fm=26&gp=0.jpg"></Image>
                <View className={styles.bottom}>
                  <View className={styles.title}>单行或可折行的标题，通常最多显示两行文字</View>
                  <View className={styles.price_box}>
                    <Text>￥</Text>
                    <Text className={styles.num}>187</Text>
                    <Text className={styles.small_num}>¥299</Text>
                  </View>
                  <View className={styles.tag}>包邮</View>
                </View>
              </View>
            )}
          </View>
        </View> */}
      </View >
    );
  }

}

export default PayResult;
