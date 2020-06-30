import { $get, $post, $ajax } from '@jxkang/wechat-utils'

export default {
  //  获取用户签名
  createUserSign: (reqModel) => $get('/kanglive/live/v1/createUserSign', reqModel),
  // 获取直播详情
  findDetail: reqModel => $get('/kanglive/live/v1/findDetail', reqModel),
  getReservationLiveDetail: reqModel => $get('/kanglive/live/v2/getReservationLiveDetail', reqModel),
  getReservationLiveDetailForRedirect: reqModel => $get('/kanglive/live/v3/getReservationLiveDetailForRedirect', reqModel),
  // 获取直播相关商品
  liveAllItemList: reqModel => $get('/kanglive/live/v1/liveAllItemList', reqModel),
  // 校验直播状态
  queryStreamStatus: reqModel => $get('/kanglive/live/v1/queryStreamStatus', reqModel),
  // 自定义发送消息
  sendNoticeMsg: reqModel => $post('/kanglive/live/v1/sendNoticeMsg', reqModel),
  // 保存消息接口
  addChatRecord: reqModel => $post('/kanglive/live/v1/addChatRecord', reqModel),
  // 获取直播最终的十条评论
  lastCommentList: reqModel => $get('/kanglive/live/v1/lastCommentList', reqModel),
  // 获取直播中信息
  getLivingData: reqModel => $get('/kanglive/live/v1/getLivingData', reqModel),
  // 拉去店铺直播  /live/v1/queryLiveByCompanyId
  queryLiveByCompanyId: reqModel => $ajax({ url: '/kanglive/live/v1/queryLiveByCompanyId', type: 'GET', special: { customTip: true }, data: reqModel }),
  // queryLiveListByCompanyId: reqModel => $ajax({ url: '/kanglive/live/v2/queryLiveListByCompanyId', type: 'GET', special: { customTip: true }, data: reqModel }),
  queryLiveListByCompanyId: reqModel => $ajax({ url: '/kanglive/live/v2/queryLiveListByCompanyIdNew', type: 'GET', special: { customTip: true }, data: reqModel }),
  // $get('/kanglive/live/v1/queryLiveByCompanyId', reqModel),
  // 获取直播间商品  /live/v1/queryLiveItems
  queryLiveItems: reqModel => $get('/kanglive/live/v1/queryLiveItems', reqModel),
  redirectMarket: reqModel => $get('/kanglive/live/v3/getShopIndexRedirectLiveListForClient', reqModel),
  playBackLiveList: reqModel => $get('/kanglive/live/v1/playBackLiveList', reqModel),
}