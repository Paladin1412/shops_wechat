/**
 * @Author: chunxiao.zhang
 * @Email: chunxiao.zhang@jdxiaokang.com
 * @Update: 2020-03-05 18:54:32
 * @Description: 邀请码
 */
import Taro from '@tarojs/taro';
import { View, Input, Text } from '@tarojs/components';
import withPage from '@/components/with-page';
import Model from '@/model';
import Utils from '@/utils';
import styles from './invitecode.module.styl';
import { message } from '@jxkang/wechat-utils';

@withPage
class Invitecode extends Taro.Component {
  constructor(props) {
    super(props);
    const { globalStore: { data: { userInfo } } } = this.props;

    this.config = {
      navigationBarTitleText: '康小铺注册',
    }

    this.state = {
      // 界面/组件 初始数据
      info: {},
      mark: userInfo.parentInvitationCode || this.$router.params.mark || '',
      code: userInfo.parentInvitationCode || this.$router.params.mark || ''
    };
  }

  bind = ({ type = 2 }) => {
    const { code, mark } = this.state
    const { globalStore } = this.props;
    const { userInfo } = globalStore.data;
    const shopId = this.$router.params.shopId || userInfo.shopId
    const m = code || mark
    Model.login.bindShopMemberInvUser({
      shopId,
      invitationCode: type === 2 ? m : '',
    }).then((data) => {
      this.logger({
        logs: '绑定邀请码',
        'api_url': '/userservice/shopMember/bindShopMemberInvUser',
        'api_req': JSON.stringify({shopId, invitationCode: type === 2 ? m : '',}),
        'api_res': JSON.stringify(data),
      }); // 埋点
      if (data) {
        userInfo.parentInvitationCode = '';
        globalStore.setData('userInfo', userInfo, 'invitecode.jsx,line:157');
        Taro.switchTab({
          url: `/pages/index/index`
        })
      }
    })
  }

  getBind = (invitationCode) => {
    Model.login.getInviterInfo({
      invitationCode: invitationCode,
      shopId: Taro.getStorageSync('userInfo').shopId
    }).then(data => {
      if (data) {
        data.icon = data.icon || 'https://jxkcdn.jingxiaokang.com/assets/images/1584440832408_8101.png'
        this.setState({
          info: data
        })
      }
    })
  }
  getCode = (value) => {
    this.setState({
      code: value.detail.value,
      info: {}
    }, () => {
      this.getBind(value.detail.value)
    })

  }

  componentWillReact() { }

  componentDidMount() {
    const { code } = this.state;
    if (!code) return;
    this.getBind(code)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const { info, code, mark } = this.state;

    return (
      <View>

        <View className={styles.invite_box}>
          <View className={styles.info_box}>
            <Text className={styles.invite_code}>邀请码（选填）</Text>
            <Input className={styles.info_insert} onInput={this.getCode} value={code}></Input>
          </View>

          {Object.keys(info).length > 0 && <View className={styles.invite}>
            <View className={styles.invite_img} style={{ backgroundImage: `url(${info.icon})` }}></View>
            <View className={styles.invite_info}>
              <View>{info.inviterName}邀请你开通</View>
              <View className={styles.invite_show_code}>邀请码：{info.invitationCode}</View>
            </View>
          </View>}
          {
            Object.keys(info).length == 0 &&
            <View>
              <View className={`${styles.btn_bind} ${styles.gray_btn}`}>立即绑定</View>
            </View>
          }
          {
            Object.keys(info).length > 0 &&
            <View>
              <View className={styles.btn_bind1} onClick={() => this.bind({})}>立即绑定</View>
            </View>
          }
          {!mark && <View className={styles.pass_btn} onClick={() => this.bind({ type: 1 })}>跳过</View>}
        </View>
      </View >
    );
  }

}

export default Invitecode;
