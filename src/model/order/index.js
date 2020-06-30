import { $post, $get } from "@jxkang/wechat-utils";

export default {
  //默认地址
  defAddress: (reqModel) => $post('/userservice/userAddress/defAddress', reqModel),
  //商品下单
  doOrder: (reqModel) => $post('/orderservice/order/create', reqModel),
  //订单列表
  queryList: (reqModel) => $get('/orderservice/order/list', reqModel),
  //订单详情
  queryDetail: (reqModel) => $get(`/orderservice/order/detail/${reqModel.orderNo}`, reqModel),
  // 支付 < 测试 走汇付 >
  orderPay: (reqModel) => $post('/settleservice/trade/union-pay-temp', reqModel),//kxp-order-pay
  // 支付 < 正式 走微信支付 >
  formalOrderPay: (reqModel) => $post('/settleservice/trade/kxp-order-pay', reqModel),
  //会员等级详细信息
  getShopMemberLevelInfo: (reqModel) => $get('/userservice/shopMember/getShopMemberLevelInfo', reqModel),
  //删除订单
  deleteOrder: (reqModel) => $get(`/orderservice/order/delete/${reqModel.orderNo}`, reqModel),
  //取消订单
  cancelOrder: (reqModel) => $get(`/orderservice/order/cancel/${reqModel.orderNo}`, reqModel),
  //取消售后
  cancelAfter: (reqModel) => $get(`/orderservice/afterSale/cancel/${reqModel.afterSaleNo}`, reqModel),
  //创建售后
  creatAfter: (reqModel) => $post('/orderservice/afterSale/create', reqModel),
  //售后列表
  afterList: (reqModel) => $get('/orderservice/afterSale/list', reqModel),
  //确认收货
  receivedOrder: (reqModel) => $get(`/orderservice/order/confirm-order-received/${reqModel.orderNo}`, reqModel),
  //售后个数
  afterCount: (reqModel) => $get(`/orderservice/afterSale/count`, reqModel),
  //售后详情
  afterDetail: (afterSaleNo, reqModel) => $get(`/orderservice/afterSale/detail/${afterSaleNo}`, reqModel),
  //售后发货
  sendAfter: (reqModel) => $post(`/orderservice/afterSale/send-after-goods`, reqModel),
  //赔付金额
  checkClaimAmount: (reqModel) => $get(`/orderservice/afterSale/checkClaimAmount`, reqModel),
  //订单搜索
  queryListByParam: (reqModel) => $get(`/orderservice/common/queryOrderByParam`, reqModel),
  //物流信息
  getDeliveryTrail: (reqModel) => $get(`/orderservice/common/getDeliveryTrail`, reqModel),
}