/**
 * @Author: chunxiao.zhang
 * @Email: chunxiao.zhang@jdxiaokang.com
 * @Update: 2020-02-25 19:09:14
 * @Description: 设置
 */
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import withPage from '@/components/with-page';
import Config from '@/config';
import Utils from '@/utils';
import { getFetchHeader } from '@/model';
import styles from './setting.module.styl';
import { $ajax } from '@jxkang/wechat-utils'
import Mask from './components/mask'

const { navigateToLogin } = Utils.appUtils;

@withPage
class Setting extends Taro.Component {
  constructor(props) {
    super(props);

    this.config = {
      navigationBarTitleText: '设置',
    }

    this.state = {
      // 界面/组件 初始数据
      mask: false
    };
  }

  onExit = () => {
    const { globalStore } = this.props;
    const { userInfo } = globalStore.data;
    const companyId = this.getCompanyId();

    // 不能清除所有数据，只能清特定字段
    userInfo.token = '';
    globalStore.setData('userInfo', userInfo, 'setting.jsx,line:50');

    $ajax.uninjectHeaders();
    $ajax.injectHeaders(getFetchHeader(true));

    navigateToLogin({
      params: {
        companyId
      },
      desc: '[system] file:setting.jsx line:56'
    });
  }

  render() {
    const { mask } = this.state
    return (
      <View className={styles.container}>
        <View
          className={`${styles.list} last`}
          onClick={() => {
            this.setState({
              mask: true
            })
          }}
        >
          <View>投诉建议</View>
          <View className={`iconfont iconwode-gengduo ${styles.icon}`}></View>
        </View>
        <View className={`${styles.list} last`}>
          <View>当前版本号</View>
          <View className={styles.right_text}>v{Config.version}</View>
        </View>
        <View className={`${styles.list}`} onClick={this.onExit}>
          <View>退出登录</View>
        </View>
        {
          mask && <Mask close={() => {
            this.setState({
              mask: false
            })
          }} />
        }
      </View >
    );
  }

}

export default Setting;
