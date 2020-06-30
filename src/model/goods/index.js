import { $get, $post } from '@jxkang/wechat-utils'

export default {
  //  用户邀请记录
  agentitem: (reqModel) => $post('/productservice/product/agentitem/list', reqModel),
  memberStatistics: (reqModel) => $post('/userservice/shopMember/memberStatistics', reqModel),
  memberDetail: (reqModel) => $get('/productservice/product/agentitem/detail', reqModel),
  // memberselfDetail: (reqModel) => $get('/productservice/product/agentitem/selfDetail', reqModel),
  // 获取店铺基本信息
  shopBaseInfo: (reqModel) => $get('/userservice/shopShow/baseInfo', reqModel),
  // 点击规格查询其他可选择规格属性
  getAgentItemPropsValue: (reqModel) => $post('/productservice/product/agentitem/getAgentItemPropsValueV2', reqModel),
  // 通过规格反查sku
  getSku: (reqModel) => $post('/productservice/product/agentitem/getItemSkuByPropsValue', reqModel),
  // getSkuByProps: (reqModel) => $post('/productservice/product/agentitem/getSelfItemSkuByPropsValue', reqModel),
  // 查询图片
  getImage: (reqModel) => $get('/productservice/img/getImageByType', reqModel),
  //商品列表推荐展示
  getRecomdList: (reqModel) => $post('/productservice/product/agentitem/recommendV2', reqModel),
  // 关注或取消商品
  collect: (reqModel) => $post('/productservice/product/itemcollect/addOrCancelCollect', reqModel),
  // 查询代理商品是否被关注
  isCollect: (reqModel) => $get('/productservice/product/itemcollect/itemCollected', reqModel),
  // 收藏列表
  collectList: (reqModel) => $post('/productservice/product/agentitem/collect', reqModel),
  // 判断是否为店铺会员
  isExistMember: (reqModel) => $post('/userservice/shopMember/isExistMember', reqModel),
  // 由agentItemId获取itemId
  getItemId: (reqModel) => $get('/productservice/product/agentitem/getItemIdByAgentItemId', reqModel),
}