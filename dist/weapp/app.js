require("./runtime");
require("./common");
require("./vendors");
require("./taro");

(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/app.jsx?taro&type=script&parse=ENTRY&":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/app.jsx?taro&type=script&parse=ENTRY& ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _mobx = __webpack_require__(/*! @tarojs/mobx */ "./node_modules/@tarojs/mobx/index.js");

__webpack_require__(/*! taro-ui/dist/style/index.scss */ "./node_modules/taro-ui/dist/style/index.scss");

var _monitor = __webpack_require__(/*! ./utils/monitor */ "./src/utils/monitor.js");

var _monitor2 = _interopRequireDefault(_monitor);

var _index = __webpack_require__(/*! ./components/assets/index */ "./src/components/assets/index.js");

var _index2 = _interopRequireDefault(_index);

var _wechatUtils = __webpack_require__(/*! @jxkang/wechat-utils */ "./node_modules/@jxkang/wechat-utils/dist/index.js");

var _index3 = __webpack_require__(/*! ./model/index */ "./src/model/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ./utils/index */ "./src/utils/index.js");

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__(/*! ./store/index */ "./src/store/index.js");

var _index8 = _interopRequireDefault(_index7);

var _appLaunch = __webpack_require__(/*! ./app-launch */ "./src/app-launch.js");

var _appLaunch2 = _interopRequireDefault(_appLaunch);

__webpack_require__(/*! ./app.styl */ "./src/app.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _mobx.setStore)(_index8.default);
;


var createApp = _taroWeapp2.default.createApp;
_taroWeapp2.default.createApp = function () {
  return _monitor2.default.hookApp(createApp.apply(_taroWeapp2.default, arguments));
};

_taroWeapp2.default.cloud.init({
  env: 'cloud-service-1',
  traceUser: false
});

var _App = function (_BaseComponent) {
  _inherits(_App, _BaseComponent);

  function _App(props) {
    _classCallCheck(this, _App);

    var _this = _possibleConstructorReturn(this, (_App.__proto__ || Object.getPrototypeOf(_App)).call(this, props));

    _this.clearShareImgInfo = function () {
      // 清除分享图片缓存
      _index8.default.globalStore.setData('shareImgInfo', {}, 'app.jsx,line:143');
    };

    _this.clearInviteCodeCache = function () {
      var userInfo = _index8.default.globalStore.data.userInfo;

      if (userInfo.parentInvitationCode) {
        userInfo.parentInvitationCode = '';
        _index8.default.globalStore.setData('userInfo', userInfo);
      }
    };

    _this.intercept = function () {
      var query = _this.$router.params.query;

      var params = query;
      // 二维码都是短码，需解码
      if (params.scene) {
        _index4.default.common.parseShortCode({ shortCode: params.scene }).then(function (res) {
          var obj = JSON.parse(res);
          _this.goNext({ sceneMap: obj });
        });
      } else {
        _this.goNext({ sceneMap: {} });
      }
    };

    _this.config = {
      pages: ['pages/home/home', // 公共页
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
      'pages/addBank/addBank'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#ffffff',
        navigationBarTitleText: 'C端 - 康小铺',
        navigationBarTextStyle: 'black'
      },
      tabBar: {
        color: '#9A9A9A',
        selectedColor: '#333333',
        borderStyle: 'black',
        list: [{
          iconPath: './tab-icons/tab_1.png',
          selectedIconPath: './tab-icons/tab_1_cur.png',
          pagePath: 'pages/index/index',
          text: '首页'
        }, {
          iconPath: './tab-icons/tab_2.png',
          selectedIconPath: './tab-icons/tab_2_cur.png',
          pagePath: 'pages/contactus/contactus',
          text: '联系店主'
        }, {
          iconPath: './tab-icons/tab_3.png',
          selectedIconPath: './tab-icons/tab_3_cur.png',
          pagePath: "pages/collect/collect",
          text: '我的收藏'
        }, {
          iconPath: './tab-icons/tab_4.png',
          selectedIconPath: './tab-icons/tab_4_cur.png',
          pagePath: 'pages/my/my',
          text: '我的'
        }]
      },
      subPackages: [{
        root: 'kangLive',
        pages: ['pages/golive/golive', 'pages/prelive/prelive', 'pages/turn-live/turn-live', 'pages/backlive/backlive']
      }]
    };


    _this.appLaunch = _appLaunch2.default.bind(_this);
    return _this;
  }

  // onLaunch


  _createClass(_App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var params = this.$router.params;

      this.appLaunch();
      this.clearShareImgInfo();

      // 提的手机号界面登录界面兼容性问题 fuck额外做过多的偶合性处理
      if (params.path.includes('/home/') && _taroWeapp2.default.getStorageSync('browseLastPage').includes('/login/')) {
        _taroWeapp2.default.reLaunch({ url: _taroWeapp2.default.getStorageSync('browseLastPage') });
      }
    }
  }, {
    key: 'componentDidHide',
    value: function componentDidHide() {
      this.clearInviteCodeCache();
    }
  }, {
    key: 'goNext',
    value: function goNext(_ref) {
      var sceneMap = _ref.sceneMap;
      var _$router$params = this.$router.params,
          path = _$router$params.path,
          query = _$router$params.query;

      var params = query;
      var userInfo = _index8.default.globalStore.data.userInfo;

      console.log('app里的params', params);
      console.log('app里的sceneMap', sceneMap);
      var _params$companyId = params.companyId,
          companyId = _params$companyId === undefined ? sceneMap.cId || userInfo.companyId || '' : _params$companyId;
      var _params$mark = params.mark,
          mark = _params$mark === undefined ? sceneMap.M || '' : _params$mark;

      if (mark) {
        userInfo.parentInvitationCode = mark; // 邀请人的码
        _index8.default.globalStore.setData('userInfo', userInfo);
      }
      _wechatUtils.$ajax.injectHeaders((0, _index3.getFetchHeader)(false, {
        companyId: companyId,
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
        _index6.default.appUtils.logger.call(this, {
          logger: 'companyId丢失,请重新登录',
          pathname: path,
          url: path + "?" + _wechatUtils.Common.queryString(query)
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
      _index8.default.globalStore.setData('userInfo', userInfo, 'app.jsx,line:107');

      setTimeout(function () {
        _index5.Events.emit('unSceneCodeFinish', {});
      });

      if (companyId) {
        _index4.default.goods.shopBaseInfo({ companyId: companyId }).then(function (resModel) {
          if (resModel) {
            userInfo.shopId = resModel.shopId;
            resModel.logo = resModel.logo || _index2.default.common.default_logo;
            userInfo.shopDetail = resModel;
            userInfo.shopName = resModel.shopName;
            _index8.default.globalStore.setData('userInfo', userInfo);
          }
        });
      } else {
        _taroWeapp2.default.reLaunch({
          url: '/pages/home/home'
        });
      }
    }
  }, {
    key: 'componentDidShow',
    value: function componentDidShow() {
      this.intercept();
    }
  }, {
    key: 'componentDidCatchError',
    value: function componentDidCatchError(err) {
      var _$router$params2 = this.$router.params,
          path = _$router$params2.path,
          query = _$router$params2.query;

      _index6.default.appUtils.logger.call(this, {
        page_err: err.toString(),
        pathname: path,
        url: path + "?" + _wechatUtils.Common.queryString(query)
      });
      _monitor2.default.error(err);
    }
  }, {
    key: '_createData',
    value: function _createData() {}
  }]);

  return _App;
}(_taroWeapp.Component);

exports.default = _App;

App(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createApp(_App));
_taroWeapp2.default.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});

/***/ }),

/***/ "./node_modules/taro-ui/dist/style/index.scss":
/*!****************************************************!*\
  !*** ./node_modules/taro-ui/dist/style/index.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app-launch.js":
/*!***************************!*\
  !*** ./src/app-launch.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = appLaunch;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import Config from '@/config';
//import Utils from '@/utils';

function appLaunch() {
  /**
   * 自动升级处理
   */
  if (_taroWeapp2.default.canIUse('getUpdateManager')) {
    var updateManager = _taroWeapp2.default.getUpdateManager();
    updateManager.onCheckForUpdate(function (res) {
      if (res.hasUpdate) {
        updateManager.onUpdateReady(function () {
          _taroWeapp2.default.showModal({
            title: '更新提示',
            content: '新版本已经准备好，是否重启应用？',
            success: function success(resp) {
              if (resp.confirm) {
                updateManager.applyUpdate();
              }
            }
          });
        });
        updateManager.onUpdateFailed(function () {
          _taroWeapp2.default.showModal({
            title: '已经有新版本了哟~',
            content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~'
          });
        });
      }
    });
  } else {
    _taroWeapp2.default.showModal({
      title: '提示',
      content: '当前微信版本过低，无法使用自动升级功能，请升级到最新微信版本后重试。'
    });
  }

  /**
   * 消息订阅
   */
  /*
  if(!Taro.requestSubscribeMessage){
    Taro.showModal({
      title: '提示',
      content: '当前微信版本过低，无法使用消息订阅功能，请升级到最新微信版本后重试。'
    })
  } else {
    Taro.getSetting({
      withSubscriptions: true,
      success: function(e){
        function showTip(notActive){
          const msgNames = notActive.map((v,i) => `${i+1}. ${v.name}`).join('\n');
          Taro.showModal({
            title: '提示',
            content: `为更好体验小程序,请在小程序右上角点开设置并开启如下消息订阅功能\n${msgNames}`,
            success (res) {
              if (res.confirm) {
                Utils.appUtils.subscribeMessage();
              } else if (res.cancel) {
                console.log('可惜用户已经取消了,下次再弹框吧');
              }
            }
          })
        }
        if(e.subscriptionsSetting){
          const ret = Config.subscribe.filter(item => e.subscriptionsSetting[item.id] !== 'accept');
          if(ret.length){
            showTip(ret);
          }
        }
      }
    })
  }
  */
}

/***/ }),

/***/ "./src/app.jsx":
/*!*********************!*\
  !*** ./src/app.jsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_jsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.jsx?taro&type=script&parse=ENTRY& */ "./src/app.jsx?taro&type=script&parse=ENTRY&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _app_jsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _app_jsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./src/app.jsx?taro&type=script&parse=ENTRY&":
/*!***************************************************!*\
  !*** ./src/app.jsx?taro&type=script&parse=ENTRY& ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_app_jsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./app.jsx?taro&type=script&parse=ENTRY& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/app.jsx?taro&type=script&parse=ENTRY&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_app_jsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_app_jsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_app_jsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_app_jsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_app_jsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/app.styl":
/*!**********************!*\
  !*** ./src/app.styl ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/app.jsx","runtime","taro","vendors","common"]]]);;