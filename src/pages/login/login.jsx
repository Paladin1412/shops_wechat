/**
 * @Author: chunxiao.zhang
 * @Email: chunxiao.zhang@jdxiaokang.com
 * @Update: 2020-02-18 15:13:03
 * @Description: 登陆页面
 */
import Taro from '@tarojs/taro';
import { View, Form, Text, Input, Button } from '@tarojs/components';
import { $ajax, message } from '@jxkang/wechat-utils';
import withPage from '@/components/with-page';
import Agreement from '@/components/agreement';
import Model, { getFetchHeader } from '@/model';
import Assets from '@/components/assets';
import Utils from '@/utils';
import styles from './login.module.styl';
import { AtModal, AtModalHeader, AtModalContent, AtInput } from 'taro-ui';



@withPage
class Login extends Taro.Component {
  constructor(props) {
    super(props);

    this.config = {
      navigationBarTitleText: '康小铺注册',
    }

    this.state = {
      // 界面/组件 初始数据
      telphone: '',//手机号码
      code: '',//验证码
      send: false,//是否发送验证码
      second: 60, //倒计时
      isPhone: true,
      agreeVisible: false, // 用户协议弹窗
      isAgree: true, // 提审过后可删除相关的代码
    };
  }

  componentDidMount = () => {

  }

  getCode = (value) => {
    this.setState({
      code: value.detail.value.slice(0, 6)
    })
  }

  onCodeBlur = () => {
    const { code } = this.state;
    this.setState({
      code: code.slice(0, 6)
    })
  }

  //发送验证码
  sendCode = () => {
    const { telphone } = this.state

    Model.login.sendCode({
      phone: telphone,
      codeType: 10
    }).then(data => {
      this.logger({
        logs: '获取验证码',
        'api_url': '/userservice/sms/sendCode',
        'api_req': JSON.stringify({phone: telphone,codeType: 10}),
        'api_res': JSON.stringify(data),
      }); // 埋点
      if (data) {
        this.setState({
          send: true
        })
        message.success('发送成功');
        this.countTime()
      }
    })
  }

  // 60秒倒计时
  countTime = () => {
    let second = 60
    let timer = setInterval(() => {
      second = second - 1
      if (second <= 0) {
        clearInterval(timer);
      }
      this.setState({
        second: second == 0 ? 60 : second,
        send: second > 0
      })
    }, 1000)
  }

  doLogin = () => {
    const { telphone, code } = this.state
    const { globalStore } = this.props;
    const { userInfo, shopCacheList } = globalStore.data;
    const companyId = this.getCompanyId();
    const submitData = {
      phone: telphone,
      smsCode: code,
      companyId,
    };
    Model.login.smsLogin(submitData).then(data => {
      this.logger({
        logs: '手机号登录注册',
        'api_url': '/userservice/login/doSmsLoginForMember',
        'api_req': JSON.stringify(submitData),
        'api_res': JSON.stringify(data),
      }); // 埋点
      if (data) {
        this.saveInfo(data);
      }
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
          globalStore.setData('envUserInfo', envUserInfo, 'login.jsx,line:89');
          this.wechatLoginAction(envUserInfo)
        }
      })
    }

  }
  wechatLoginAction = (params) => {
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
        this.saveInfo(data)
      }
    })
  }

  saveInfo = (data) => {
    const { globalStore } = this.props;
    const { shopCacheList, userInfo } = globalStore.data;
    // 本地记录用户登录过的店铺
    if(data.companyId && shopCacheList.indexOf(parseInt(data.companyId, 10)) == -1) {
      shopCacheList.push(parseInt(data.companyId, 10));
      globalStore.setData('shopCacheList', shopCacheList, 'login.jsx,line:162');
    }

    // 判断是否有图像，没有就用默认头像
    data.headImg = data.headImg || Assets.common.default_avatar;
    const idata = Object.assign({}, userInfo, data);
    globalStore.setData('userInfo', idata, 'login.jsx,line:157');
    globalStore.setData('shareImgInfo', {}, 'login.jsx,line:125');
    $ajax.injectHeaders(getFetchHeader());
    const fromUrl = Taro.getStorageSync('fromUrl') || '';
    Taro.removeStorageSync('fromUrl')

    if(shopCacheList.length) {
      Model.login.addViewRecord({companyIds: shopCacheList});
      globalStore.setData('shopCacheList', []);
    }

    if (data.needBindShop === true) { // 跳转公共页
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

  getInput = (e, name) => {
    this.setState({
      [name]: e
    }, () => {
      if (name === 'telphone') {
        this.setState({
          isPhone: /^1\d{10}$/.test(e)
        })
      }

    })
  }
  handleAgreement = () => {
    const agree = this.state.isAgree;
    this.setState({
      isAgree: !agree
    })
  }
  changeAgreeStatus = (value) => {
    this.setState({
      agreeVisible: value
    })
  }

  render() {
    const { globalStore } = this.props;
    const { userInfo, envUserInfo } = globalStore.data;
    const { telphone, code, send, second, isPhone, agreeVisible, isAgree } = this.state;
    const reg = /^1\d{10}$/
    const isOkLogin = telphone.length > 0 && reg.test(telphone) && code.length == 6;

    return (
      <View className={styles.container}>
        {/**
         * 店铺名称
         * */}
        <View className={styles.store_name}>欢迎光临康小铺</View>
        <View className={styles.store_desc}>来了福利多多，既能省钱又能赚钱～</View>
        {/**
         * 注册表单
         */}
        <View className={styles.form_box}>
          <View className={`${styles.info_box} ${styles.phone_box}`}>
            <View className={styles.area_code}>+86</View>
            <View className={styles.phone_inner}>
              <AtInput
                className={styles.info_insert_phone}
                name='telphone'
                error={!isPhone && !!telphone}
                type='phone'
                onChange={(e) => { this.getInput(e, 'telphone') }}
                value={telphone}
                placeholder='请输入手机号'
              />
            </View>
          </View>
          <View className={styles.info_box}>
            <View className={styles.code_box}>
              <Input
                className={styles.info_insert_code}
                name='code'
                type='number'
                maxLength={6}
                onInput={this.getCode}
                placeholder='请输入验证码'
                placeholderClass={styles.placeholder}
                onBlur={this.onCodeBlur}
              />
              {!send && <Text className={styles.code} onClick={this.sendCode}>获取验证码</Text>}
              {send && <Text className={styles.time}>{second}s后重发</Text>}
            </View>
          </View>
          {
            <View className={isOkLogin ? styles.btn_able : styles.btn_disable} onClick={() => isOkLogin ? this.doLogin() : null}>登录</View>
          }
        </View>
        <Button
          className={`${styles.reset_btn} ${styles.wechat_btn}`}
          onClick={this.getPhoneNumber}
          open-type={isAgree && !envUserInfo.mobilePhone ? 'getPhoneNumber' : null}
          bindgetphonenumber="getPhoneNumber"
        >
          <View className={`iconfont ${styles.wxIcon}`}>&#xe648;</View>
          <View className={styles.wxLabel}>微信一键登录</View>
        </Button>
        <View className={styles.footerAgree}>
          {/* <View className={styles.agree_img_container} onClick={this.handleAgreement}>
            {
              isAgree
                ? <View className={`iconfont ${styles.agree_img}`}>&#xe6d6;</View>
                : <View className={`iconfont ${styles.disagree_img}`}>&#xe6d7;</View>
            }
          </View> */}
          <View className={styles.agreement}>登录即代表已阅读并同意<Text className={styles.agreement_btn} onClick={() => this.changeAgreeStatus(true)}>《康小铺用户协议》</Text></View>
        </View>
        <AtModal isOpened={agreeVisible} onClose={() => this.changeAgreeStatus(false)}>
          <AtModalHeader>康小铺用户注册协议</AtModalHeader>
          <AtModalContent>
            <Agreement></Agreement>
          </AtModalContent>
        </AtModal>
      </View>
    );
  }

}

export default Login;
