/**
 * @Author: zhanglimin
 * @Email: czhanglimin@126.com
 * @Update: 2020-04-20 15:27:17
 * @Description: 提现结果页
 */
import Taro from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import withPage from '@/components/with-page';
import Ellipsis from '@/components/ellipsis';
// import Model from '@/model';
import Assets from '@/components/assets';
import styles from './cashout-result.module.styl';



@withPage
class CashoutResult extends Taro.Component {
  constructor(props) {
    super(props);

    this.config = {
      navigationBarTitleText: '提现',
      navigationBarBackgroundColor: '#ffffff',
      navigationBarTextStyle: 'black',
    }

    this.state = {
      // 界面/组件 初始数据
      type: 'success', // success || failed
    };
  }

  componentDidMount() {
    const { type = 'success' } = this.$router.params
    this.setState({
      type
    })
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  btnClick = () => {
    const { type } = this.state;
    if (type === 'success') {
      Taro.switchTab({
        url: '/pages/my/my'
      })
    } else {
      Taro.redirectTo({
        url: '/pages/cashout/cashout'
      })
    }

  }

  render() {
    const { type } = this.state;
    if (!type) {
      return;
    }

    return (
      <View className={`${styles.container} pageBorder`}>
        <View className={styles.content}>
          <Image src={type == 'success' ? Assets.other.success : Assets.other.failed} className={styles.img}></Image>
          <View className={styles.title}>{type == 'success' ? '提现成功' : '提现失败'}</View>
          <View className={styles.label}>
            <Ellipsis count={2}>预计会在1-2个工作日内到账,以银行的实际处理结果为准。</Ellipsis>
          </View>
        </View>
        <View className={styles.btn} onClick={this.btnClick}>{type == 'success' ? '我知道了' : '重新提现'}</View>
      </View >
    );
  }

}

export default CashoutResult;
