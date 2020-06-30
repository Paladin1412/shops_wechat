(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/home/home"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/home/home.jsx?taro&type=script&parse=PAGE&":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/home/home.jsx?taro&type=script&parse=PAGE& ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _class2, _temp2; /**
                              * @Author: limin.zhang
                              * @Email: limin.zhang@jdxiaokang.com
                              * @Update: 2020-04-10 12:30:50
                              * @Description: 公共页
                              */


var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index = __webpack_require__(/*! ../../components/with-page/index */ "./src/components/with-page/index.jsx");

var _index2 = _interopRequireDefault(_index);

var _wechatUtils = __webpack_require__(/*! @jxkang/wechat-utils */ "./node_modules/@jxkang/wechat-utils/dist/index.js");

var _index3 = __webpack_require__(/*! ../../model/index */ "./src/model/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../../utils/index */ "./src/utils/index.js");

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__(/*! ../../components/assets/index */ "./src/components/assets/index.js");

var _index8 = _interopRequireDefault(_index7);

var _homeModule = __webpack_require__(/*! ./home.module.styl */ "./src/pages/home/home.module.styl");

var _homeModule2 = _interopRequireDefault(_homeModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Utils$appUtils = _index6.default.appUtils,
    getFileUrl = _Utils$appUtils.getFileUrl,
    navigateToLogin = _Utils$appUtils.navigateToLogin;

var Home = (0, _index2.default)(_class = (_temp2 = _class2 = function (_Taro$Component) {
  _inherits(Home, _Taro$Component);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "loopArray41", "$compid__94", "styles", "isRequest", "isTokenValid", "exitPopup", "companyList", "Assets", "userInfo", "globalStore"], _this.enterShop = function (shop) {
      var isTokenValid = _this.state.isTokenValid;
      var globalStore = _this.props.globalStore;

      var userInfo = globalStore.data.userInfo;
      userInfo.companyId = shop.companyId;
      userInfo.shopId = shop.shopId;
      userInfo.shopName = shop.shopName;
      userInfo.parentInvitationCode = '';
      globalStore.setData('userInfo', userInfo, 'home.jsx,line:47');
      globalStore.setData('shareImgInfo', {}, 'login.jsx,line:125');
      if (isTokenValid) {
        _index4.default.login.addViewRecord({ companyIds: [shop.companyId] });
      }
      _taroWeapp2.default.switchTab({
        url: "/pages/index/index"
      });
    }, _this.initData = function () {
      var globalStore = _this.props.globalStore;
      var _globalStore$data = globalStore.data,
          shopCacheList = _globalStore$data.shopCacheList,
          userInfo = _globalStore$data.userInfo;

      _index4.default.login.getRecommendShopList({ companyIds: shopCacheList }).then(function (res) {
        var data = res.entry;
        _this.logger({
          logs: '获取店铺列表',
          api_url: '/userservice/shopSearch/getRecommendShopList',
          api_req: JSON.stringify(shopCacheList),
          api_res: JSON.stringify(res)
        });
        // noLoginUser 表示token已失效
        if (res.status && res.message === 'noLoginUser' && userInfo.token) {
          userInfo.token = '';
          globalStore.setData('userInfo', userInfo, 'home.jsx,line:72');
        }
        if (data && data.length) {
          var r = [].concat(_toConsumableArray(data));
          var list = r.map(function (item) {
            var itemList = (item.goodsInfoList || []).slice(0, 6);
            item.goodsInfoList = itemList;
            return item;
          });
          _this.setState({
            companyList: list,
            isRequest: true,
            isTokenValid: res.status && res.message == 'noLoginUser' ? false : true
          });
        } else {
          _this.setState({
            isRequest: true,
            isTokenValid: res.status && res.message == 'noLoginUser' ? false : true
          });
        }
      });
    }, _this.clickAvatar = function () {
      var isTokenValid = _this.state.isTokenValid;

      if (isTokenValid) {
        _this.showExitPopup();
      } else {
        _this.gotoLogin();
      }
    }, _this.showExitPopup = function () {
      var exitPopup = _this.state.exitPopup;

      _this.setState({
        exitPopup: !exitPopup
      });
    }, _this.onExit = function () {
      var globalStore = _this.props.globalStore;
      var userInfo = globalStore.data.userInfo;

      var companyId = _this.getCompanyId();

      _this.setState({
        exitPopup: false
      });

      // 不能清除所有数据，只能清特定字段
      userInfo.token = '';
      globalStore.setData('userInfo', userInfo, 'setting.jsx,line:50');

      _wechatUtils.$ajax.uninjectHeaders();
      _wechatUtils.$ajax.injectHeaders((0, _index3.getFetchHeader)(true));

      navigateToLogin({
        params: {
          companyId: companyId
        },
        desc: '[system] file:home.jsx line:132'
      });
    }, _this.onClearStorage = function () {
      var globalStore = _this.props.globalStore;

      globalStore.setData('userInfo', {});
      globalStore.setData('envUserInfo', {});
      _taroWeapp2.default.clearStorageSync();
      _wechatUtils.message.success('缓存数据清除成功');
    }, _this.gotoLogin = function () {
      navigateToLogin({
        params: {
          companyId: _this.getCompanyId()
        },
        desc: '[system] file:home.jsx line:141'
      });
    }, _this.config = {
      navigationBarTitleText: '康小铺'
    }, _this.anonymousFunc0Map = {}, _this.customComponents = ["Ellipsis"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Home.prototype.__proto__ || Object.getPrototypeOf(Home.prototype), "_constructor", this).call(this, props);

      this.state = {
        // 界面/组件 初始数据
        companyList: [],
        exitPopup: false,
        isRequest: false,
        isTokenValid: false
      };
      // 声明 wechatLogin 事件是能连续点击
      _index6.default.appUtils.delay(this, ['gotoLogin', 'onExit', 'enterShop']);
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentWillReact",
    value: function componentWillReact() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initData();
      // Utils.yunapi.getOpenId().then(e => {
      //   console.log(e)
      // })
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      _taroWeapp2.default.hideHomeButton({
        success: function success() {},
        fail: function fail() {},
        complete: function complete() {}
      });
    }
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "_createData",
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__94"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__94 = _genCompid2[0],
          $compid__94 = _genCompid2[1];

      var _state = this.__state,
          companyList = _state.companyList,
          exitPopup = _state.exitPopup,
          isRequest = _state.isRequest,
          isTokenValid = _state.isTokenValid;
      var globalStore = this.__props.globalStore;

      var userInfo = globalStore.data.userInfo;

      var anonymousState__temp = isTokenValid ? getFileUrl(userInfo.headImg) : _index8.default.common.default_photo;
      var anonymousState__temp2 = getFileUrl(_index8.default.common.homeFootprint, { query: 'x-oss-process=image/quality,q_50/format,jpg/interlace,1' });
      var loopArray41 = companyList.length || !isRequest ? companyList.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var $loopState__temp4 = companyList.length || !isRequest ? index + 1 : null;

        var _$indexKey = "fbzzz" + index;

        _this2.anonymousFunc0Map[_$indexKey] = function () {
          return _this2.enterShop(item.$original);
        };

        var $loopState__temp6 = companyList.length || !isRequest ? getFileUrl(item.$original.logo || _index8.default.register.logoF, { query: 'x-oss-process=image/quality,q_50/format,jpg/interlace,1' }) : null;
        var $loopState__temp8 = companyList.length || !isRequest ? getFileUrl(item.$original.logo || _index8.default.register.logoF, { query: 'x-oss-process=image/quality,q_50/format,jpg/interlace,1' }) : null;
        var $loopState__temp10 = companyList.length || !isRequest ? getFileUrl(_index8.default.common.jdLogo, { query: 'x-oss-process=image/quality,q_50/format,jpg/interlace,1' }) : null;
        var $anonymousCallee__9 = companyList.length || !isRequest ? item.$original.goodsInfoList.map(function (shop, index) {
          shop = {
            $original: (0, _taroWeapp.internal_get_original)(shop)
          };
          var $loopState__temp12 = companyList.length || !isRequest ? index + 1 : null;
          var $loopState__temp14 = companyList.length || !isRequest ? getFileUrl(shop.$original.mainImgUrl, { query: 'x-oss-process=image/quality,q_30/format,jpg/interlace,1' }) : null;
          return {
            $loopState__temp12: $loopState__temp12,
            $loopState__temp14: $loopState__temp14,
            $original: shop.$original
          };
        }) : [];
        return {
          $loopState__temp4: $loopState__temp4,
          _$indexKey: _$indexKey,
          $loopState__temp6: $loopState__temp6,
          $loopState__temp8: $loopState__temp8,
          $loopState__temp10: $loopState__temp10,
          $anonymousCallee__9: $anonymousCallee__9,
          $original: item.$original
        };
      }) : [];
      isRequest && _taroWeapp.propsManager.set({
        "count": 1
      }, $compid__94, $prevCompid__94);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        loopArray41: loopArray41,
        $compid__94: $compid__94,
        styles: _homeModule2.default,
        Assets: _index8.default,
        userInfo: userInfo
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(_$indexKey) {
      var _anonymousFunc0Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc0Map[_$indexKey] && (_anonymousFunc0Map = this.anonymousFunc0Map)[_$indexKey].apply(_anonymousFunc0Map, e);
    }
  }]);

  return Home;
}(_taroWeapp2.default.Component), _class2.$$events = ["clickAvatar", "onClearStorage", "onExit", "anonymousFunc0"], _class2.$$componentPath = "pages/home/home", _temp2)) || _class;

exports.default = Home;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Home, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/home/home.jsx?taro&type=template&parse=PAGE&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/home/home.jsx?taro&type=template&parse=PAGE& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/home/home.wxml";

/***/ }),

/***/ "./src/pages/home/home.jsx":
/*!*********************************!*\
  !*** ./src/pages/home/home.jsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.jsx?taro&type=template&parse=PAGE& */ "./src/pages/home/home.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _home_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.jsx?taro&type=script&parse=PAGE& */ "./src/pages/home/home.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _home_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _home_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/home/home.jsx?taro&type=script&parse=PAGE&":
/*!**************************************************************!*\
  !*** ./src/pages/home/home.jsx?taro&type=script&parse=PAGE& ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_home_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./home.jsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/home/home.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_home_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_home_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_home_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_home_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_home_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/home/home.jsx?taro&type=template&parse=PAGE&":
/*!****************************************************************!*\
  !*** ./src/pages/home/home.jsx?taro&type=template&parse=PAGE& ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_home_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./home.jsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/home/home.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_home_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_home_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_home_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_home_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/home/home.module.styl":
/*!*****************************************!*\
  !*** ./src/pages/home/home.module.styl ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"home-module__container___1NSnh","reset_btn":"home-module__reset_btn___3_5bb","header":"home-module__header___3xAmv","headerLeft":"home-module__headerLeft___1Fqhb","headerName":"home-module__headerName___FwOnR","headerExtra":"home-module__headerExtra___1-JS8","headerImg":"home-module__headerImg___g_H6u","exit":"home-module__exit___35Kh9","cleanStore":"home-module__cleanStore___1T34D","exitIcon":"home-module__exitIcon___24-gp","exitLabel":"home-module__exitLabel___2f4dR","popup_items":"home-module__popup_items___3QpDi","body":"home-module__body___1NkC3","bodyHeader":"home-module__bodyHeader___d4ZQq","bodyHeaderImg":"home-module__bodyHeaderImg___ZJ54K","bodyTitle":"home-module__bodyTitle___1MFXi","bodyContent":"home-module__bodyContent___2IX6W","listItem":"home-module__listItem___9Fgl8","shopMaster":"home-module__shopMaster___30dsc","imgBlur":"home-module__imgBlur___7vrry","itemHeader":"home-module__itemHeader___mfP2C","itemLogo":"home-module__itemLogo___3KTT_","itemName":"home-module__itemName___1-PGI","shopName":"home-module__shopName___2oBjC","jdLogo":"home-module__jdLogo___3lNFm","itemContent":"home-module__itemContent___Xid0c","itemBody":"home-module__itemBody___7uFH_","imgContainer":"home-module__imgContainer___2Bi4z","bodyImg":"home-module__bodyImg___1WR0D","imgExtra":"home-module__imgExtra___1zXP0","itemBtn":"home-module__itemBtn___2EvUQ","nogoodsContainer":"home-module__nogoodsContainer___3FVP4","nogoodsImg":"home-module__nogoodsImg___262TD","nogoodsLabel":"home-module__nogoodsLabel___2pzti"};

/***/ })

},[["./src/pages/home/home.jsx","runtime","taro","vendors","common"]]]);