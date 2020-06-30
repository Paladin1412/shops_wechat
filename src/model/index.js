import Taro from '@tarojs/taro';
import { $ajax, message, Common } from '@jxkang/wechat-utils';
import Config from '@/config';
import Utils from '@/utils';
import Store from '@/store';
import login from './login';
import commonAPI from './common';
import inviter from './inviter';
import address from './address';
import goods from './goods';
import fund from './fund';
import order from './order';
import my from './my';
import liveapi from './liveapi';
import bankcard from './bankcard';

const clientHeader = 'cshop-wechat';
const requestCount = [];
let requestTid = null;

$ajax.setBaseUrl(
  Common.seek()
    // 正式环境
    .equal(process.env.NODE_ENV === 'production', 'https://api.jingxiaokang.com')
    // 预发环境
    .equal(process.env.NODE_ENV === 'pre', 'https://pre.jingxiaokang.com')
    // 测试环境
    .equal(process.env.NODE_ENV === 'test', 'https://daily-api.jdxiaokang.com')
    // 开发环境
    // ===   避免改文件 要在dev调daily接口，用命令 npm run daily:weapp   ===
    .else('https://dev-api.jdxiaokang.com')
    .get()
);
// 注入全局的请求头
$ajax.injectHeaders({
  jdxiaokang_client: clientHeader,
  app_version: Config.version,
  token: Taro.getStorageSync('userInfo').token || '',
  companyId: Store.globalStore.data.userInfo.companyId,
  parentInvitationCode: Store.globalStore.data.userInfo.parentInvitationCode || '',
});

export const getFetchHeader = (onlyClient, headers = {}) => Common.extend({
  jdxiaokang_client: clientHeader,
  app_version: Config.version,
},
  onlyClient ? {} : {
    token: Taro.getStorageSync('userInfo').token || '',
    companyId: Store.globalStore.data.userInfo.companyId,
    parentInvitationCode: Store.globalStore.data.userInfo.parentInvitationCode || '',
  },
  headers
);


$ajax.injectResponse((resModel) => {
  if (resModel) {
    const responseCode = `${resModel.responseCode}`;

    const currentPage = Utils.appUtils.getCurrentPage();
    const options = currentPage ? currentPage.options : {};
    if (responseCode === '1000010001' || responseCode === '1000010002') { // 登录信息过期,重新登录
      Utils.appUtils.navigateToLogin({
        params: options,
        desc: '[system] file:model.js line:39'
      });
    }
  }
});

/**
 * 一些code值不需要做弹框提示
 */
$ajax.injectAllowCode([
  '1000010001',
  '1000010002',
  '1000010003'
]);

$ajax.injectRevolution({
  fetchBefore: () => {
    requestCount.push('');
  },
  fetchComplete: () => {
    requestCount.shift();
    clearTimeout(requestTid);
    requestTid = setTimeout(function () {
      if (requestCount.length > 0) {
        message.loading('正在加载中...');
        setTimeout(function () {
          Taro.hideToast();
        }, 2500);
      }
    }, 1200);
  }
});


export default {
  goods,
  common: commonAPI,
  goods,
  login,
  inviter,
  address,
  fund,
  order,
  my,
  liveapi,
  bankcard
}