/**
 * @Author: limin.zhang
 * @Email: limin.zhang@jdxiaokang.com
 * @Update: 2020-03-02 11:54:29
 * @Description: 未登录公共页
 */
import Taro from '@tarojs/taro';
import { View, Image, Button } from '@tarojs/components';
import withPage from '@/components/with-page';
import Utils from '@/utils';
import Assets from '@/components/assets';
import styles from './index.module.styl';

const { navigateToLogin } = Utils.appUtils;

@withPage
class Entry extends Taro.Component {
  constructor(props) {
    super(props);

    this.config = {
      navigationBarTitleText: '',
    }

    this.state = {
      // 界面/组件 初始数据

    };
    Utils.appUtils.delay(this, ['gotoLogin']);
  }
  componentDidMount() { }
  componentWillUnmount() { }
  componentDidShow() { }
  componentDidHide() { }

  gotoLogin = () => {
    navigateToLogin({
      params: {
        companyId: this.getCompanyId()
      },
      desc: '[system] file:my.js line:193'
    });
  }
  render() {
    return (
      <View className={styles.container}>
        <Image className={styles.empty_img} src={Assets.common.empty} mode='widthFix' />
        <View className={styles.label}>您好，请先去登录账号</View>
        <Button className={`${styles.reset_btn} ${styles.btn}`} onClick={this.gotoLogin}>去登录</Button>
      </View>
    );
  }
}

export default Entry;