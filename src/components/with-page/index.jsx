/**
 * @Author: 福虎
 * @Email: Shenghu.tan@jdxiaokang.com
 * @Update: 2020-01-22 13:52:26
 * @Description: taro项目界面注解
 */
import Taro from '@tarojs/taro';
import { observer, inject } from '@tarojs/mobx';
import { $ajax, Common } from '@jxkang/wechat-utils';
import Monitor from '@/utils/monitor';
import { logger, Events } from '@/utils';
import { getFetchHeader } from '@/model';

const noop = function(){return void(0)}
let unSceneCodeFinish = false;
Events.on('unSceneCodeFinish', function(){
  unSceneCodeFinish = true;
});

function withPage(Cmpt) {
  const componentDidMount = Cmpt.prototype.componentDidMount || noop;
  const componentDidShow = Cmpt.prototype.componentDidShow || noop;
  const componentDidHide = Cmpt.prototype.componentDidHide || noop;
  Cmpt.prototype.getCompanyId = function(type){
    const { globalStore } = this.props;
    const { userInfo } = globalStore.data;
    const params = this.$router.params;
    return type === 'r' ? params.companyId : type === 's' ? userInfo.companyId : params.companyId || userInfo.companyId || '';
  }
  Cmpt.prototype.logger = function(){
    logger.apply(this, arguments);
  };
  Cmpt.prototype.componentDidShow = function(){
    $ajax.injectHeaders(getFetchHeader(false, {companyId: this.getCompanyId()}));

    // 提的手机号界面登录界面兼容性问题 fuck额外做过多的偶合性处理
    const params = Common.queryString(this.$router.params);
    
    // if (this.$router.path.includes('/home/') && Taro.getStorageSync('browseLastPage').includes('/login/')) {
    //   Taro.reLaunch({ url: Taro.getStorageSync('browseLastPage') });
    //   return false;
    // }

    Taro.setStorageSync('browseLastPage', this.$router.path+(params&&'?'+params));
    
    Common.pollQuery({
      // 每隔半秒钟轮询一次
      interval: 500,
      // 总轮询次数不超过10次
      execCount: 10,
      func: () => {
        if(unSceneCodeFinish){
          componentDidShow.apply(this, arguments);
          return false;
        }
      }
    });
  }
  Cmpt.prototype.componentDidMount = function(){
    Common.pollQuery({
      // 每隔半秒钟轮询一次
      interval: 500,
      // 总轮询次数不超过10次
      execCount: 10,
      func: () => {
        if(unSceneCodeFinish){
          componentDidMount.apply(this, arguments);
          return false;
        }
      }
    });
    Monitor.pageShow();
  }
  Cmpt.prototype.componentDidHide = function(){
    componentDidHide.apply(this, arguments);
    Monitor.pageHide();
  }
  return inject('globalStore')(observer(Cmpt));
}

export default withPage;