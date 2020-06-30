/**
 * @Author: chunxiao.zhang
 * @Email: chunxiao.zhang@jdxiaokang.com
 * @Update: 2020-02-25 16:28:43
 * @Description: 店主粉丝圈二维码
 */
import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import withPage from '@/components/with-page';
import Model from '@/model';
import Utils from '@/utils';
import Assets from '@/components/assets';
import styles from './fanscode.module.styl';


@withPage
class Fanscode extends Taro.Component {
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

        <View className={styles.box}>
          <View className={styles.info}>
            <View className={styles.name_info}>
              <View className={styles.qun_icon}>
                <View className={styles.pic} style={{ background: 'red' }}>1</View>
                <View className={styles.pic} style={{ background: 'yellow' }}>1</View>
                <View className={styles.pic} style={{ background: 'blue' }}>1</View>
                <View className={styles.pic} style={{ background: 'green' }}>1</View>
              </View>
              <Text>新人红包群</Text>
            </View>
            <View className={styles.code}></View>
            <View className={styles.wechat}>识别二维码进群，或截图保存</View>
          </View>
          <Image src={Assets.other.close} alt='' className={styles.close} />
        </View>
      </View >
    );
  }

}

export default Fanscode;
