import Taro from '@tarojs/taro';
import drawQrcode, { saveCanvas } from './qrcode';
import appUtils from './common';
import Events from './events';
import orderPay from './orderpay';
import imgshare from './imgshare';
import yunapi from './yunapi';


const logger = appUtils.logger;
export default {
  appUtils,
  drawQrcode,
  saveCanvas,
  Events,
  orderPay,
  imgshare,
  yunapi
}

export { appUtils }
export { drawQrcode }
export { saveCanvas }
export { Events }
export { orderPay }
export { logger }
export { imgshare }
export { yunapi }
