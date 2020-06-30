import { $get } from '@jxkang/wechat-utils'

export default {
  //  用户邀请记录
  getRecordList: (reqModel) => $get('/commission-service/invite/user-invitation-records', reqModel),
  //用户邀请码信息
  userCode: (reqModel) => $get('/commission-service/invite/user-invitation-code', reqModel),
}