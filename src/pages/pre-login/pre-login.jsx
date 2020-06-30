/**
 * @Author: limin.zhang
 * @Email: limin.zhang@jdxiaokang.com
 * @Update: 2020-04-06 15:07:23
 * @Description: 选择登录方式
 */
import Taro from '@tarojs/taro';
import { View, Button } from '@tarojs/components';
import withPage from '@/components/with-page';
import Model, { getFetchHeader } from '@/model';
import Assets from '@/components/assets';
import Agreement from '@/components/agreement';
import { $ajax, Common, message } from '@jxkang/wechat-utils';
import Utils from '@/utils';
import styles from './pre-login.module.styl';
import { AtModal, AtModalHeader, AtModalContent } from 'taro-ui';



@withPage
class PreLogin extends Taro.Component {
  constructor(props) {
    super(props);

    this.config = {
      navigationBarTitleText: '登录',
    }

    this.state = {
      // 界面/组件 初始数据
      // logo: 'https://jxkcdn.jingxiaokang.com/assets/images/1585016841695_278.png',
      params: {},
      agreeVisible: false,
      isAgree: false,
    };
    // 声明 wechatLogin 事件是能连续点击
    Utils.appUtils.delay(this, ['phoneLogin']);
  }

  handleAgreement = () => {
    const agree = this.state.isAgree;
    this.setState({
      isAgree: !agree
    })
  }

  phoneLogin = () => {
    if (!this.state.isAgree) {
      message.error('请先勾选用户服务协议')
      return;
    }
    const { params } = this.$router
    const searchs = Common.queryString(params || {})
    Taro.navigateTo({
      url: `/pages/login/login${searchs ? '?' + searchs : ''}`
    })
  }

  getPhoneNumber = (data) => {
    if (!this.state.isAgree) {
      message.error('请先勾选用户服务协议')
      return;
    }
    this.logger({
      'logs': 'getPhoneNumber返回结果',
      'api_res': JSON.stringify(data.detail),
    }); // 埋点

    const { globalStore } = this.props;
    const { envUserInfo } = globalStore.data;
    const { userInfoEcryptData, userInfoIv, openId, mobilePhone } = envUserInfo
    const { encryptedData, errMsg, iv } = data.detail

    // 直接登录
    if (mobilePhone) {
      this.wechatLoginAction(envUserInfo);
    } else if (errMsg === 'getPhoneNumber:ok') { // 授权情况登录
      const submitData = {
        phoneEcryptData: encryptedData,
        phoneIv: iv,
        userInfoEcryptData,
        userInfoIv,
        openId
      };
      Model.login.wechatPhone(submitData).then(res => {
        this.logger({
          logs: '手机号解密',
          'api_url': '/userservice/wechat/wechat-phone',
          'api_req': JSON.stringify(submitData),
          'api_res': JSON.stringify(res),
        }); // 埋点
        if (res) {
          envUserInfo.mobilePhone = res.phone
          envUserInfo.unionId = res.unionId || ''
          this.setState({
            params: envUserInfo
          })
          globalStore.setData('envUserInfo', envUserInfo, 'pre-login.jsx,line:89');
          this.wechatLoginAction(envUserInfo)
        }
      })
    }

  }

  wechatLoginAction = (params) => {
    const { mark } = this.$router.params
    const { globalStore } = this.props;
    const { envUserInfo, shopCacheList, userInfo } = globalStore.data;

    if (envUserInfo.avatarUrl) {
      params.headImgUrl = envUserInfo.avatarUrl;
    }
    if (!envUserInfo.mobilePhone) {
      message.error('未获取到微信绑定的手机号，请用其他方式登录')
      return;
    }
    Model.login.wechatLoginAction(params).then(data => {
      this.logger({
        logs: '微信授权登录',
        'api_url': '/userservice/wechat/wechat-login-c',
        'api_req': JSON.stringify(params),
        'api_res': JSON.stringify(data),
      }); // 埋点
      if (data) {
        // 本地记录用户登录过的店铺
        if(data.companyId && shopCacheList.indexOf(parseInt(data.companyId, 10)) == -1) {
          shopCacheList.push(parseInt(data.companyId, 10));
          globalStore.setData('shopCacheList', shopCacheList, 'login.jsx,line:162');
        }

        // 判断是否有图像，没有就用默认头像
        data.headImg = data.headImg || Assets.common.default_photo;
        const idata = Object.assign({}, userInfo, data);
        globalStore.setData('userInfo', idata, 'login.jsx,line:157');
        $ajax.injectHeaders(getFetchHeader());
        const fromUrl = Taro.getStorageSync('fromUrl') || '';
        Taro.removeStorageSync('fromUrl');

        if(!!shopCacheList.length) {
          Model.login.addViewRecord({companyIds: shopCacheList});
          globalStore.setData('shopCacheList', []);
        }
        
        // 跳转绑定页面
        if (data.needBindInvitation === true) {
          Taro.navigateTo({
            url: mark ? `/pages/invitecode/invitecode?mark=${mark}` : `/pages/invitecode/invitecode`
          })
        } else if (data.needBindShop === true) { // 跳转公共页
          Taro.navigateTo({
            url: '/pages/home/home'
          })
        } else { // 跳转首页
          if (fromUrl) {
              Taro.switchTab({
                url: fromUrl
              });
              Taro.navigateTo({
                url: fromUrl
              });
          } else {
            Taro.switchTab({
              url: `/pages/index/index`
            })
          }
        }
      }
    })
  }
  componentWillReact() { }

  componentDidMount() {

  }

  showAgreeDetail = () => {
    this.setState({
      agreeVisible: true
    })
  }
  hideAgreeModal = () => {
    this.setState({
      agreeVisible: false
    })
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const { globalStore } = this.props;
    const { agreeVisible, isAgree } = this.state;
    const { envUserInfo } = globalStore.data;

    return (
      <View className={styles.prelogin_container}>
        <Image className={styles.logo} src={Utils.appUtils.getFileUrl(Assets.register.logoF, { w: 196 })}></Image>
        <Image className={`${styles.label} no-loading`} src={Utils.appUtils.getFileUrl(Assets.register.desc, { w: 369 })}></Image>
        <Button
          className={`${styles.reset_btn} ${styles.wechat_btn}`}
          onClick={this.getPhoneNumber}
          open-type={isAgree && !envUserInfo.mobilePhone ? 'getPhoneNumber' : null}
          bindgetphonenumber="getPhoneNumber"
        >
          <View className={`iconfont ${styles.icon}`}>&#xe6f0;</View>
          <View className={styles.text}>微信账号登录</View>
        </Button>

        <Button className={`${styles.reset_btn} ${styles.phone_btn}`} onClick={this.phoneLogin}>
          使用手机号登录/注册
        </Button>
        <View className={styles.footerContainer}>
          <View className={styles.agree_img_container} onClick={this.handleAgreement}>
            {
              isAgree
                ? <View className={`iconfont ${styles.agree_img}`}>&#xe6d6;</View>
                : <View className={`iconfont ${styles.disagree_img}`}>&#xe6d7;</View>
            }
          </View>
          <View className={styles.agreement}>我已阅读并同意<Text className={styles.agreement_btn} onClick={this.showAgreeDetail}>《康小铺用户协议》</Text></View>
        </View>
        <AtModal isOpened={agreeVisible} onClose={this.hideAgreeModal}>
          <AtModalHeader>康小铺用户注册协议</AtModalHeader>
          <AtModalContent>
            <Agreement></Agreement>
          </AtModalContent>
        </AtModal>
      </View >
    );
  }

}

export default PreLogin;
