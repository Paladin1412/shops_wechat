(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/login-guide/login-guide"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/login-guide/login-guide.jsx?taro&type=script&parse=PAGE&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/login-guide/login-guide.jsx?taro&type=script&parse=PAGE& ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _class2, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _wechatUtils = __webpack_require__(/*! @jxkang/wechat-utils */ "./node_modules/@jxkang/wechat-utils/dist/index.js");

var _index = __webpack_require__(/*! ../../components/with-page/index */ "./src/components/with-page/index.jsx");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../../model/index */ "./src/model/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../../components/assets/index */ "./src/components/assets/index.js");

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__(/*! ../../utils/index */ "./src/utils/index.js");

var _index8 = _interopRequireDefault(_index7);

var _loginGuideModule = __webpack_require__(/*! ./login-guide.module.styl */ "./src/pages/login-guide/login-guide.module.styl");

var _loginGuideModule2 = _interopRequireDefault(_loginGuideModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PreLogin = (0, _index2.default)(_class = (_temp2 = _class2 = function (_Taro$Component) {
  _inherits(PreLogin, _Taro$Component);

  function PreLogin() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PreLogin);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PreLogin.__proto__ || Object.getPrototypeOf(PreLogin)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "styles", "globalStore"], _this.wechatLogin = function (event) {
      var wxUserInfoData = event.detail;
      // wxUserInfoData.errMsg === 'getUserInfo:fail auth deny'; // 授权拒绝情况

      if (wxUserInfoData.userInfo) {
        var globalStore = _this.props.globalStore;
        var _globalStore$data = globalStore.data,
            userInfo = _globalStore$data.userInfo,
            envUserInfo = _globalStore$data.envUserInfo,
            shareImgInfo = _globalStore$data.shareImgInfo;
        var params = _this.$router.params;

        var searchs = _wechatUtils.Common.queryString(params || {});
        var source = 'kxp-c';
        _taroWeapp2.default.login({
          success: function success(res) {
            _this.logger({
              logs: '微信授权登录获取jsCode',
              'api_res': JSON.stringify(res.code)
            });
            if (res && res.code) {
              _index4.default.login.postCode({
                jsCode: res.code,
                source: source
              }).then(function (resq) {
                _this.logger({
                  logs: '获取openid',
                  'api_url': '/userservice/wechat/jsCode',
                  'api_req': JSON.stringify({ jsCode: res.code, source: source }),
                  'api_res': JSON.stringify(resq.data)
                }); // 埋点
                if (resq && resq.data) {
                  var resModel = resq.data;

                  var userData = wxUserInfoData.userInfo;
                  var wxUserInfo = {
                    headImgUrl: userData.avatarUrl,
                    nickName: userData.nickName,
                    openId: resModel.openId,
                    mobilePhone: resModel.phone,
                    companyId: _this.getCompanyId(),
                    source: source,
                    unionId: "",
                    userInfoEcryptData: wxUserInfoData.encryptedData,
                    userInfoIv: wxUserInfoData.iv
                  };

                  Object.assign(envUserInfo, wxUserInfo);
                  globalStore.setData('envUserInfo', envUserInfo, 'login-guide.jsx,line:60');

                  if (resModel.openId) {
                    // 每次登录清空分享图，防止不同账号串图
                    globalStore.setData('shareImgInfo', {}, 'login-guide.jsx,line:77');
                    _taroWeapp2.default.navigateTo({
                      url: "/pages/login/login" + (searchs ? '?' + searchs : '')
                    });
                  } else {
                    _wechatUtils.message.warn('未获取到用户openId,请重新授权登录');
                  }
                }
              });
            }
          },
          fail: function fail(err) {
            _this.logger({
              logs: "\u5C0F\u7A0B\u5E8F\u767B\u5F55\u5931\u8D25***" + JSON.stringify(err)
            });
          }
        });
      } else {
        _wechatUtils.message.warn('授权失败,为更好的体验康小铺系统,请重新授权');
      }
    }, _this.gotoBack = function () {
      _taroWeapp2.default.redirectTo({
        url: '/pages/home/home'
      });
    }, _this.config = {
      navigationBarTitleText: '登录'
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PreLogin, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(PreLogin.prototype.__proto__ || Object.getPrototypeOf(PreLogin.prototype), "_constructor", this).call(this, props);

      this.state = {};

      // 声明 wechatLogin 事件是能连续点击
      _index8.default.appUtils.delay(this, ['wechatLogin']);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentWillReact",
    value: function componentWillReact() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var anonymousState__temp = _index8.default.appUtils.getFileUrl(_index6.default.register.logoF, { w: 196 });
      var anonymousState__temp2 = _index8.default.appUtils.getFileUrl(_index6.default.register.desc, { w: 369 });
      var anonymousState__temp3 = _index8.default.appUtils.getFileUrl(_index6.default.register.guideMan, { w: 500 });
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        styles: _loginGuideModule2.default
      });
      return this.__state;
    }
  }]);

  return PreLogin;
}(_taroWeapp2.default.Component), _class2.$$events = ["wechatLogin", "gotoBack"], _class2.$$componentPath = "pages/login-guide/login-guide", _temp2)) || _class;

exports.default = PreLogin;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(PreLogin, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/login-guide/login-guide.jsx?taro&type=template&parse=PAGE&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/login-guide/login-guide.jsx?taro&type=template&parse=PAGE& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/login-guide/login-guide.wxml";

/***/ }),

/***/ "./src/pages/login-guide/login-guide.jsx":
/*!***********************************************!*\
  !*** ./src/pages/login-guide/login-guide.jsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_guide_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-guide.jsx?taro&type=template&parse=PAGE& */ "./src/pages/login-guide/login-guide.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _login_guide_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-guide.jsx?taro&type=script&parse=PAGE& */ "./src/pages/login-guide/login-guide.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _login_guide_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _login_guide_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/login-guide/login-guide.jsx?taro&type=script&parse=PAGE&":
/*!****************************************************************************!*\
  !*** ./src/pages/login-guide/login-guide.jsx?taro&type=script&parse=PAGE& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_login_guide_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./login-guide.jsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/login-guide/login-guide.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_login_guide_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_login_guide_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_login_guide_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_login_guide_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_login_guide_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/login-guide/login-guide.jsx?taro&type=template&parse=PAGE&":
/*!******************************************************************************!*\
  !*** ./src/pages/login-guide/login-guide.jsx?taro&type=template&parse=PAGE& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_login_guide_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./login-guide.jsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/login-guide/login-guide.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_login_guide_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_login_guide_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_login_guide_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_login_guide_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/login-guide/login-guide.module.styl":
/*!*******************************************************!*\
  !*** ./src/pages/login-guide/login-guide.module.styl ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"reset_btn":"login-guide-module__reset_btn___1cAB2","prelogin_container":"login-guide-module__prelogin_container___3kHLt","logo":"login-guide-module__logo___1CE4s","label":"login-guide-module__label___2NA-F","wechat_btn":"login-guide-module__wechat_btn___1XXF4","icon":"login-guide-module__icon___3gjl0","text":"login-guide-module__text___17toa","guideMan":"login-guide-module__guideMan___mzPuA","returnBtn":"login-guide-module__returnBtn___34Bxb"};

/***/ })

},[["./src/pages/login-guide/login-guide.jsx","runtime","taro","vendors","common"]]]);