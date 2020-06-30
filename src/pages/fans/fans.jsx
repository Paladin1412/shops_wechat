/**
 * @Author: chunxiao.zhang
 * @Email: chunxiao.zhang@jdxiaokang.com
 * @Update: 2020-02-25 11:41:02
 * @Description: 店主的粉丝圈
 */
import Taro from '@tarojs/taro';
import { View, Text, AtButton } from '@tarojs/components';
import withPage from '@/components/with-page';
import Model from '@/model';
import Utils from '@/utils';
import Assets from '@/components/assets';
import styles from './fans.module.styl';


@withPage
class Fans extends Taro.Component {
  constructor(props) {
    super(props);

    this.config = {
      navigationBarTitleText: '店主的粉丝圈',
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
        <View className={styles.info}>
          <View className={styles.head_img}></View>
          <View className={styles.name}><Text>塞外</Text> <Image src={Assets.home.jd} alt="" className={styles.icon_img} /></View>
          <View>欢迎加入我的粉丝圈，群内种草各种各种好用商品</View>
          <View className={styles.btn_box}>
            <View>
              <Text className={styles.btn}>店主</Text>
              <Text className={styles.btn}>群主</Text>
            </View>
          </View>
          <View className={styles.fans}>
            <View className={styles.box}>
              <View className={`iconfont iconfensi ${styles.mr10}`}></View>
              粉丝兴趣群
            </View>
          </View>
          <View className={styles.list_box}>
            {
              new Array(5).fill('').map((item) => {
                return (
                  <View className={styles.list}>
                    <View className={styles.qun_icon}>
                      <View className={styles.pic} style={{ background: 'red' }}>1</View>
                      <View className={styles.pic} style={{ background: 'yellow' }}>1</View>
                      <View className={styles.pic} style={{ background: 'blue' }}>1</View>
                      <View className={styles.pic} style={{ background: 'green' }}>1</View>
                    </View>
                    <Text className={styles.qun_name}>新人红包群新人红包群新人红包群新人红包群新人红包群新人红包群新人红包群新人红包群新人红包群</Text>
                    <Text className={styles.qun_tip}>进群领红包</Text>
                  </View>
                )
              })
            }

          </View>
        </View>

      </View >
    );
  }

}

export default Fans;
