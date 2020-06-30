import Taro from '@tarojs/taro';
import WXLogger from './wxLogger.js';

const userInfo = Taro.getStorageSync('userInfo');
const options = {
  pid: 'i4qwyawcw1@a49fb29efab7ba8',
  region: 'cn',
  behavior: true,
  disabled: process.env.NODE_ENV !== 'production',
  // enableConsole: true
}

if(userInfo.phone){
  options.uid = userInfo.phone;
}

const Monitor = WXLogger.init(options);
export default Monitor;