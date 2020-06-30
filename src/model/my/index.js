import { $post, $get, $ajax } from '@jxkang/wechat-utils'

export default {
  //  查看/联系店铺微信二维码
  getStoreDetail: (reqModel) => $get('/userservice/shopShow/baseInfo', reqModel),
  // 修改个人信息
  updateBaseInfo: reqModel => $post('/userservice/userV2/upBaseInfo', reqModel),
  // 查询订单数量
  getOrderCount: reqModel => $get('/orderservice/order/count', reqModel),
  //会员等级详细信息
  getShopMemberLevelInfo: (reqModel) => $ajax({url: '/userservice/shopMember/getShopMemberLevelInfo', type: 'get', data: reqModel, special:{intactModel: true} }),
}