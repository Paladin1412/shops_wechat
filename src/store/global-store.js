import Taro from '@tarojs/taro';
import { observable } from 'mobx';

const counterStore = observable({
  data: {
    // 登录的用户帐号信息
    userInfo: Taro.getStorageSync('userInfo') || {},
    // 环境用户信息 < 非康小铺用户信息 >
    envUserInfo: Taro.getStorageSync('envUserInfo') || {},
    // 系统信息
    systemInfo: Taro.getSystemInfoSync(),
    //选中商品
    infoForOrder: {},
    //选中地址
    checkAddress: {},
    // 用户登录后店铺浏览记录
    shopCacheList: Taro.getStorageSync('shopCacheList') || [],
    //订单搜索历史记录
    orderSearchHistory: Taro.getStorageSync('orderSearchHistory') || [],
    // 分享海报信息
    shareImgInfo: Taro.getStorageSync('shareImgInfo') || {},
  },
  setData(keyName, model, desc) {
    if (this.data.hasOwnProperty(keyName)) {
      this.data[keyName] = model;
      // 有一些记入存储的数据
      desc && console.log('[system]', desc);
      
      if (['userInfo', 'envUserInfo', 'infoForOrder', 'checkAddress','shopCacheList', 'orderSearchHistory', 'shareImgInfo'].includes(keyName)) {
        Taro.setStorageSync(keyName, model);
      }
    }
  }
})
export default counterStore;