/**
 * @Author: qiang.zhang
 * @Email: 1196217890@qq.com
 * @Update: 2020-02-19 09:49:49
 * @Description: true
 */
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import withPage from '@/components/with-page';
import Model from '@/model';
import Utils from '@/utils';
import styles from './invitrecord.module.styl';
import { AtList, AtListItem, AtInputNumber } from 'taro-ui'



@withPage
class Invitrecord extends Taro.Component {
  constructor(props) {
    super(props);

    this.config = {
      navigationBarTitleText: '资金管理',
    }

    this.state = {

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
      <View className={styles.invirecord}>
        <View className={styles.evestyle}>
          <View style={styles.accountInner}>账户余额</View>
          <View className={styles.priceStyle}>¥10394.00</View>
          <View className={styles.eveprice}>
            <View>
              <View>总收益</View>
              <View>¥100000.00</View>
            </View>

            <View>
              <View>今日收益</View>
              <View>¥100000.00</View>
            </View>

            <View>
              <View>已提现</View>
              <View>¥100000.00</View>
            </View>
          </View>
        </View>

        <View className={styles.botInner}>
          <View className={styles.evebotstyle}>
            <View className={styles.leftstyle}>资金明细</View>
            <View className='chevron-right'>

            </View>
          </View>

          <View className={styles.evebotstyle}>
            <View className={styles.leftstyle}>提现记录</View>
            <View className='chevron-right'>

            </View>
          </View>
        </View>

        <View className={styles.fixedBottom}>
          <View className={styles.buttonInner}>提现</View>
        </View>
      </View >
    );
  }

}

export default Invitrecord;
