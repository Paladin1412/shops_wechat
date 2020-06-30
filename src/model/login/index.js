import { $post, $get, $ajax } from '@jxkang/wechat-utils'

export default {
  // 发送短信
  sendCode: (reqModel) => $post('/userservice/sms/sendCode', reqModel),
  // (小C进个人店)短信验证码-登陆注册 
  smsLogin: (reqModel) => $post('/userservice/login/doSmsLoginForMember', reqModel),
  // 绑定-店铺-会员-邀请人-关系
  bindShopMemberInvUser: (reqModel) => $post('/userservice/shopMember/bindShopMemberInvUser', reqModel),
  // 用户邀请人信息
  getInviterInfo: (reqModel) => $get('/commission-service/invite/user-inviter-info', reqModel),
  //小程序登录凭证
  postCode: (reqModel) => $post(`/userservice/wechat/jsCode`, reqModel),
  //c端微信授权登陆
  wechatLoginAction: (reqModel) => $post(`/userservice/wechat/wechat-login-c`, reqModel),
  //手机号解密
  wechatPhone: (reqModel) => $post(`/userservice/wechat/wechat-phone`, reqModel),
  // 公共页店铺列表
  getRecommendShopList: (reqModel) => $ajax({url: '/userservice/shopSearch/getRecommendShopList', type: 'post', data: reqModel, special:{intactModel: true} }),
  // 判断是否是店铺会员
  existMemberByCompanyId: (reqModel) => $get(`/userservice/shopMember/existMemberByCompanyId`, reqModel),
  // 记录 店铺访问记录
  addViewRecord: reqModel => $post('/userservice/shopVisitRecord/addRecord', reqModel),
}