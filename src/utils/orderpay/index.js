import Taro from '@tarojs/taro';
import { message } from '@jxkang/wechat-utils';
import Model from '@/model';
import Store from '@/store';
import { appUtils } from '@/utils';

// const noop = () => { }
//支付
export default {
  Opay(selfThis, relationId) {

    const { openId } = Store.globalStore.data.envUserInfo
    if (!openId) {
      message.warn('请先登录授权之后再操作');
      selfThis.logger({
        logs: '支付授权',
      });
      appUtils.navigateToLogin({
        params: appUtils.getCurrentPage().options || {},
        desc: '[system] file:orderpay/index.js line:10'
      });
      return false
    }
    const host = process.env.NODE_ENV === 'production' ? 'https://shop.kangxiaopu.com' : 'https://daily-shop.kangxiaopu.com'
    const params = { // 正式
      relationId,
      openId,
      callBackUrl: `${host}/#/pages/pay-result/pay-result`,
      payType: '07',
      source: 'kxp-c'
    }
    selfThis.logger({
      logs: '开始调用支付接口',
      api_url: '/settleservice/trade/kxp-order-pay',
      api_req: JSON.stringify(params),
    });

    Model.order.formalOrderPay(params).then(res => {
      if (res) {
        Store.globalStore.setData('launchPay', { payInfo: res.payInfo, backUrl: `/pages/pay-result/pay-result?orderNo=${relationId}` }, 'index.js,line:26'); // 存支付参数payInfo
        const info = JSON.parse(res.payInfo);
        selfThis.logger({
          logs: '支付成功',
          api_url: '/settleservice/trade/kxp-order-pay',
          api_req: JSON.stringify(params),
          api_res: JSON.stringify(res)
        });
        Taro.requestPayment({
          timeStamp: info.timeStamp,
          nonceStr: info.nonceStr,
          package: info.package,
          signType: info.signType,
          paySign: info.paySign,
          success: () => {
            // complete(ret, res);
            const liveInfo = Taro.getStorageSync('infoForOrder');
            if (Number(liveInfo.orderSource) === 4 || Number(liveInfo.orderSource) === 5) {
              const userInfo = Taro.getStorageSync('userInfo');
              this.sendCustomMsg({ msgType: 10, msgValue: userInfo.nickName, liveId: liveInfo.liveId });
            }
            Taro.navigateTo({
              url: `/pages/pay-result/pay-result?ret=1&orderNo=${relationId}`
            });
          },
          fail: () => {
            // complete(err, res);
            Taro.navigateTo({
              url: `/pages/pay-result/pay-result?ret=2&orderNo=${relationId}`
            });
          }
        })
      }
    })
  },

  sendCustomMsg({ msgType = 14, msgValue = 1, liveId }) {
    const data = {
      liveId: liveId,
      msgType: msgType,
      msgValue: msgValue,
    }
    Model.liveapi.sendNoticeMsg(data).then(res => {
      if (!res) return false;
    })
  },

  formatName(name) {
    let newStr;
    if (name.length === 2) {
      newStr = name.substr(0, 1) + '*';
    } else if (name.length > 2) {
      let char = '';
      for (let i = 0, len = name.length - 2; i < len; i++) {
        char += '*';
      }
      newStr = name.substr(0, 1) + char + name.substr(-1, 1);
    } else {
      newStr = name;
    }

    return newStr;
  }

}
