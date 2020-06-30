import InitData from './tile/init'
import InitTim from './tile/tim'
import TimOperate from './tile/timoperate'
import ModelContro from './tile/modelcontro'

export default function (cmpt) {
  // 数据初始化
  InitData.call(cmpt);
  // tim初始化
  InitTim.call(cmpt);
  // tim操作
  TimOperate.call(cmpt);
  // 弹出控制
  ModelContro.call(cmpt);
}