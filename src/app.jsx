import Taro, { Component } from '@tarojs/taro';
import { Provider } from '@tarojs/mobx';
import 'taro-ui/dist/style/index.scss';
import Monitor from '@/utils/monitor';
import Assets from '@/components/assets';
import { Common, $ajax } from '@jxkang/wechat-utils';
import Model, { getFetchHeader } from '@/model';
import Utils, { Events } from '@/utils';
import Store from './store';
import appLaunch from './app-launch';
import './app.styl';
import Index from './pages/index';


const createApp = Taro.createApp;
Taro.createApp = function () {
  return Monitor.hookApp(
    createApp.apply(Taro, arguments)
  );
};

Taro.cloud.init({
  env: 'cloud-service-1',
  traceUser: false,
});

if(process.env.NODE_ENV !== Taro.getStorageSync('NODE_ENV')){
  const { userInfo } = Store.globalStore.data;
  userInfo.companyId = '';
  Store.globalStore.setData('userInfo', userInfo);
  Taro.setStorageSync('NODE_ENV', process.env.NODE_ENV);
}


class App extends Component {
  constructor(props) {
    super(props);
    this.config = {
      pages: [
        'pages/home/home', // 公共页
        'pages/login-guide/login-guide', // 登录引导页
        // 'pages/pre-login/pre-login', // 选择登录方式
        'pages/index/index', //  首页
        'pages/login/login', // 注册页面
        'pages/my-qrcode/my-qrcode', // 我的推荐码
        'pages/collect/collect', // 收藏夹
        'pages/my/my', // 我的
        'pages/submission/submission', // 提交订单
        'pages/address/address', // 地址管理
        'pages/edit-address/edit-address', // 编辑地址
        'pages/invitrecord/invitrecord', // true
        'pages/goodsdetail/goodsdetail', // 商品详情
        'pages/fans/fans', // 店主的粉丝圈
        'pages/shopstate/shopstate', // 店主动态
        'pages/contactus/contactus', // 联系店主
        'pages/fanscode/fanscode', // 店主粉丝圈二维码 
        'pages/pay-result/pay-result', // 支付结果
        'pages/sub-result/sub-result', // 提交结果
        'pages/personinfo/personinfo', // 修改个人资料
        'pages/setting/setting', // 设置
        'pages/inviterecord/inviterecord', // 邀请记录
        'pages/my-order/my-order', // 我的订单
        'pages/order-detail/order-detail', // 订单详情
        'pages/logistics-detail/logistics-detail', // 物流详情
        'pages/accountinfo/accountinfo', // 账户信息详情
        'pages/after-sales/after-sales', // 申请售后
        'pages/aftersales-detail/aftersales-detail', // 售后进度
        // 'pages/invitecode/invitecode', // 邀请码
        'pages/yq-list/yq-list', // 邀请列表
        'pages/edit-info/edit-info', // 修改个人资料
        'pages/order-search/order-search', //订单搜索结果
        'pages/cashout/cashout', //提现
        'pages/cashout-result/cashout-result', //提现结果
        'pages/addBank/addBank', //添加银行卡
      ],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#ffffff',
        navigationBarTitleText: 'C端 - 康小铺',
        navigationBarTextStyle: 'black',
      },
      tabBar: {
        color: '#9A9A9A',
        selectedColor: '#333333',
        borderStyle: 'black',
        list: [
          {
            iconPath: './tab-icons/tab_1.png',
            selectedIconPath: './tab-icons/tab_1_cur.png',
            pagePath: 'pages/index/index',
            text: '首页'
          },
          {
            iconPath: './tab-icons/tab_2.png',
            selectedIconPath: './tab-icons/tab_2_cur.png',
            pagePath: 'pages/contactus/contactus',
            text: '联系店主'
          },
          {
            iconPath: './tab-icons/tab_3.png',
            selectedIconPath: './tab-icons/tab_3_cur.png',
            pagePath: `pages/collect/collect`,
            text: '我的收藏'
          }, {
            iconPath: './tab-icons/tab_4.png',
            selectedIconPath: './tab-icons/tab_4_cur.png',
            pagePath: 'pages/my/my',
            text: '我的'
          }
        ]
      },
      subPackages: [
        {
          root: 'kangLive',
          pages: [
            'pages/golive/golive',
            'pages/prelive/prelive',
            'pages/turn-live/turn-live',
            'pages/backlive/backlive',
          ],
        },
      ],
    }

    this.appLaunch = appLaunch.bind(this);
  }

  // onLaunch
  componentDidMount() {
    const { params } = this.$router;
    this.appLaunch();
    this.clearShareImgInfo();

    // 提的手机号界面登录界面兼容性问题 fuck额外做过多的偶合性处理
    if (params.path.includes('/home/') && Taro.getStorageSync('browseLastPage').includes('/login/')) {
      Taro.reLaunch({ url: Taro.getStorageSync('browseLastPage') });
    }
  }

  componentDidHide() {
    this.clearInviteCodeCache()
  }

  clearShareImgInfo = () => {
    // 清除分享图片缓存
    Store.globalStore.setData('shareImgInfo', {}, 'app.jsx,line:143');
  }

  clearInviteCodeCache = () => {
    const { userInfo } = Store.globalStore.data;
    if (userInfo.parentInvitationCode) {
      userInfo.parentInvitationCode = ''
      Store.globalStore.setData('userInfo', userInfo);
    }
  }

  intercept = () => {
    const { query } = this.$router.params;
    const params = query;
    // 二维码都是短码，需解码
    if(params.scene) {  
      Model.common.parseShortCode({shortCode: params.scene}).then((res) => {
        const obj = JSON.parse(res)
        this.goNext({sceneMap: obj})
      })
    } else {
      this.goNext({sceneMap: {}})
    }
  }

  goNext({sceneMap}) {
    const { path, query } = this.$router.params;
    const params = query;
    const { userInfo } = Store.globalStore.data;
    console.log('app里的params', params)
    console.log('app里的sceneMap', sceneMap)
    let { companyId = sceneMap.cId || userInfo.companyId || '' } = params;
    let { mark = sceneMap.M || '' } = params;
    if (mark) {
      userInfo.parentInvitationCode = mark; // 邀请人的码
      Store.globalStore.setData('userInfo', userInfo);
    }
    $ajax.injectHeaders(getFetchHeader(false, {
      companyId,
      parentInvitationCode: mark || ''
    }));

    console.log('');
    console.log('路由参数:', params.companyId, '二维码参数:', sceneMap.cId, '内存参数:', userInfo.companyId);
    console.log('');

    /**
     * 极端情况判断companyId是否存在的情况
     */
    if (Object.keys(userInfo).length > 2 && !companyId) {
      // message.warn('companyId丢失，请重新登录');
      Utils.appUtils.logger.call(this, {
        logger: 'companyId丢失,请重新登录',
        pathname: path,
        url: `${path}?${Common.queryString(query)}`
      });
    }

    /**
     * 防止数据串号 不一样的公司主体跳登录
     * 备注：后端优化处理静默登切换店铺，前端无需处理
    if (pathname.path.search(/\/login-guide|\/goodsdetail|\/index\//) === -1 && params.companyId && userInfo.companyId && params.companyId != userInfo.companyId) {
      return Utils.appUtils.navigateToLogin({
        params: Object.assign({}, params, { companyId: params.companyId }),
        desc: '[system] file:app.jsx line:160'
      });
    }
    */

    /**
     * 通过扫码/识别 二维码情况
     */
    userInfo.companyId = companyId;
    Store.globalStore.setData('userInfo', userInfo, 'app.jsx,line:107');

    setTimeout(function(){
      Events.emit('unSceneCodeFinish', {});
    });

    if (companyId) {
      Model.goods.shopBaseInfo({ companyId }).then((resModel) => {
        if (resModel) {
          userInfo.shopId = resModel.shopId;
          resModel.logo = resModel.logo || Assets.common.default_logo;
          userInfo.shopDetail = resModel;
          userInfo.shopName = resModel.shopName;
          Store.globalStore.setData('userInfo', userInfo);
        }
      })
    } else {
      Taro.reLaunch({
        url: '/pages/home/home'
      });
    }
  }

  componentDidShow() {
    this.intercept();
  }

  componentDidCatchError(err) {
    const { path, query } = this.$router.params;
    Utils.appUtils.logger.call(this, {
      page_err: err.toString(),
      pathname: path,
      url: `${path}?${Common.queryString(query)}`
    });
    Monitor.error(err);
  }

  render() {
    return <Provider store={Store}><Index /></Provider>
  }
}

Taro.render(<App />, document.getElementById('app'))
