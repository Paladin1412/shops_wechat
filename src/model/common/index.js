import { $post, $get, $ajax } from '@jxkang/wechat-utils';

export default {
  // 获取微信 openid
  getOpenId: reqModel => $get('/settleservice/hf/pay-c/get-openid', reqModel),
  // 获取微信 jsapi授权
  getTicket: reqModel => $get('/settleservice/hf/pay-c/get-ticket', reqModel),
  // 订单支付
  orderPay: reqModel => $post('/settleservice/trade/kxp-order-pay', reqModel),
  // 行政区域查询
  getAreaList: (reqModel) => $post('/productservice/sys/getAreaList', reqModel),
  // 获取会员升级弹窗消息
  getUpMemberMsg: reqModel => $post('/userservice/uMsg/getUpMemberMsg', reqModel),
  // 修改消息为已读
  upRead: reqModel => $post('/userservice/uMsg/upRead', reqModel),
  // 查看店铺详情
  getShopDetail: reqModel => $post('/userservice/shop/detail', reqModel),
  // 文件上传接口
  upload: () => `${$ajax.getBaseUrl()}/productservice/img/h5-upload`,
  // 获取商品详情小程序二维码 
  getGoodsDetailQrCode: () => `${$ajax.getBaseUrl()}/userservice/shop/getSmallWxCode`,
  // 获取短码
  parseShortCode: reqModel => $get('/userservice/tool/parse-short-code', reqModel),
}

