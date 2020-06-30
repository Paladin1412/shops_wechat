
import Taro from '@tarojs/taro';
import { View, Button } from '@tarojs/components';
import { $ajax, message, Common } from '@jxkang/wechat-utils';
import withPage from '@/components/with-page';
import Model from '@/model';
import Assets from '@/components/assets';
import Utils from '@/utils';
import styles from './login-guide.module.styl'


@withPage
class PreLogin extends Taro.Component {
  constructor(props) {
    super(props);

    this.config = {
      navigationBarTitleText: '登录',
    }

    this.state = {
    };

    // 声明 wechatLogin 事件是能连续点击
    Utils.appUtils.delay(this, ['wechatLogin']);

  }

  wechatLogin = (event) => {
    const wxUserInfoData = event.detail;
    // wxUserInfoData.errMsg === 'getUserInfo:fail auth deny'; // 授权拒绝情况

    if (wxUserInfoData.userInfo) {
      const { globalStore } = this.props;
      const { userInfo, envUserInfo, shareImgInfo } = globalStore.data;
      const { params } = this.$router
      const searchs = Common.queryString(params || {})
      const source = 'kxp-c'
      Taro.login({
        success: (res) => {
          this.logger({
            logs: '微信授权登录获取jsCode',
            'api_res': JSON.stringify(res.code),
          });
          if (res && res.code) {
            Model.login.postCode({
              jsCode: res.code,
              source
            }).then(resq => {
              this.logger({
                logs: '获取openid',
                'api_url': '/userservice/wechat/jsCode',
                'api_req': JSON.stringify({ jsCode: res.code, source }),
                'api_res': JSON.stringify(resq.data),
              }); // 埋点
              if (resq && resq.data) {
                const resModel = resq.data;

                const userData = wxUserInfoData.userInfo;
                const wxUserInfo = {
                  headImgUrl: userData.avatarUrl,
                  nickName: userData.nickName,
                  openId: resModel.openId,
                  mobilePhone: resModel.phone,
                  companyId: this.getCompanyId(),
                  source,
                  unionId: "",
                  userInfoEcryptData: wxUserInfoData.encryptedData,
                  userInfoIv: wxUserInfoData.iv
                }

                Object.assign(envUserInfo, wxUserInfo);
                globalStore.setData('envUserInfo', envUserInfo, 'login-guide.jsx,line:60');

                if (resModel.openId) {
                  // 每次登录清空分享图，防止不同账号串图
                  globalStore.setData('shareImgInfo', {}, 'login-guide.jsx,line:77');
                  Taro.navigateTo({
                    url: `/pages/login/login${searchs ? '?' + searchs : ''}`
                  })
                } else {
                  message.warn('未获取到用户openId,请重新授权登录');
                }

              }
            })
          }
        },
        fail: (err) => {
          this.logger({
            logs: `小程序登录失败***${JSON.stringify(err)}`,
          })
        }
      })
    } else {
      message.warn('授权失败,为更好的体验康小铺系统,请重新授权');
    }
  }

  componentWillReact() { }

  componentDidMount() {

  }

  gotoBack = () => {
    Taro.redirectTo({
      url: '/pages/home/home'
    })
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {

    return (
      <View className={styles.prelogin_container}>
        <Image className={styles.logo} src={Utils.appUtils.getFileUrl(Assets.register.logoF, { w: 196 })}></Image>
        <Image className={`${styles.label} no-loading`} src={Utils.appUtils.getFileUrl(Assets.register.desc, { w: 369 })}></Image>
        <Image className={styles.guideMan} src={Utils.appUtils.getFileUrl(Assets.register.guideMan, { w: 500 })}></Image>
        <Button className={`${styles.reset_btn} ${styles.wechat_btn}`} onGetUserInfo={this.wechatLogin} open-type="getUserInfo">
          <View className={styles.text}>进入康小铺</View>
        </Button>
        <View className={styles.returnBtn} onClick={this.gotoBack}>暂不登录，返回主页</View>
      </View >
    );
  }

}

export default PreLogin;
