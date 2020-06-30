(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/addBank/addBank"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/addBank/addBank.jsx?taro&type=script&parse=PAGE&":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/addBank/addBank.jsx?taro&type=script&parse=PAGE& ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _class2, _temp2;
// import { AtIcon } from "taro-ui"
// import Assets from '@/components/assets';


var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index = __webpack_require__(/*! ../../components/with-page/index */ "./src/components/with-page/index.jsx");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../../model/index */ "./src/model/index.js");

var _index4 = _interopRequireDefault(_index3);

var _wechatUtils = __webpack_require__(/*! @jxkang/wechat-utils */ "./node_modules/@jxkang/wechat-utils/dist/index.js");

var _addBankModule = __webpack_require__(/*! ./addBank.module.styl */ "./src/pages/addBank/addBank.module.styl");

var _addBankModule2 = _interopRequireDefault(_addBankModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import Pre from './pre'


var Bankcard = (0, _index2.default)(_class = (_temp2 = _class2 = function (_Taro$Component) {
  _inherits(Bankcard, _Taro$Component);

  function Bankcard() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Bankcard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Bankcard.__proto__ || Object.getPrototypeOf(Bankcard)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "styles", "userName", "bankNum", "bankName", "tel"], _this.getBankNum = function (value) {
      _this.setState({
        bankNum: value.detail.value
      }, function () {
        if (value.detail.value.length >= 16 && value.detail.value.length <= 19) {
          _this.getBankInfo();
        } else {
          _wechatUtils.message.error('请填写正确的银行卡号');
        }
      });
    }, _this.getBankInfo = function () {
      // this.setState({
      //   bankName: '',
      // })
      var bankNum = _this.state.bankNum;

      _index4.default.bankcard.getBankInfo({
        bankNum: bankNum
      }).then(function (data) {
        if (data) {
          _this.setState({
            bankName: data.bankName
          });
        }
      });
    }, _this.getBind = function () {
      var _this$state = _this.state,
          bankName = _this$state.bankName,
          bankNum = _this$state.bankNum,
          tel = _this$state.tel,
          userName = _this$state.userName,
          agree = _this$state.agree;

      if (agree === false) {
        _wechatUtils.message.error('请勾选同意开户服务协议');
        return;
      }
      var params = {
        accountName: userName,
        cardNo: bankNum,
        bankName: bankName
        // userMobile: tel,

        // let p = hasInfo === true ?
        //   Model.bankcard.localBindCard(params) :
        //   Model.bankcard.getBindCard(params)
      };var p = _index4.default.bankcard.addCard(params);
      p.then(function (res) {
        if (res) {
          // this.logger('绑定银行卡信息', res); // 埋点
          _taroWeapp2.default.navigateTo({
            url: "/pages/cashout/cashout"
          });
        }
      });
    }, _this.changeInput = function (e, name) {
      var s = e.detail.value;
      if (name === 'userName') {
        // s = s.replace(/[^\a-zA-Z\u4E00-\u9FA5]/g, '')
        s = s.replace(/[^\u4E00-\u9FA5]/g, '').substr(0, 15);
      }
      if (name === 'idCard') {
        s = s.replace(/[\W]/g, '');
      }
      if (name === 'bankNum') {
        _this.setState({
          bankName: ''
        });
        s = s.replace(/\D/g, '');
      }
      _this.setState(_defineProperty({}, name, s));
      return s;
    }, _this.accountInfo = function () {
      _index4.default.bankcard.accountInfo().then(function (res) {
        if (res) {
          _this.setState({
            // bankName: res.bankName,
            // bankNum: res.cardNum,
            // idCard: res.idCard,
            // tel: res.userMobile,
            userName: res
            // customerId: res.customerId
          });
        }
      });
    }, _this.config = {
      navigationBarTitleText: '添加银行卡'
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Bankcard, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Bankcard.prototype.__proto__ || Object.getPrototypeOf(Bankcard.prototype), "_constructor", this).call(this, props);

      this.state = {
        // 界面/组件 初始数据
        userName: '',
        bankNum: '',
        tel: '', //
        bankName: '' //银行名称
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }

    // componentWillReact() { }

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      // this.accountInfo()
    }
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
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _state = this.__state,
          bankName = _state.bankName,
          userName = _state.userName,
          bankNum = _state.bankNum,
          tel = _state.tel;
      // const isId = /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/

      var isPhone = /^1\d{10}$/;

      this.anonymousFunc0 = function (e) {
        return _this2.changeInput(e, 'userName');
      };

      this.anonymousFunc1 = function (e) {
        return _this2.changeInput(e, 'bankNum');
      };

      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)({ float: 'right' });
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        styles: _addBankModule2.default
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      ;
    }
  }, {
    key: "anonymousFunc1",
    value: function anonymousFunc1(e) {
      ;
    }
  }]);

  return Bankcard;
}(_taroWeapp2.default.Component), _class2.$$events = ["scroll", "anonymousFunc0", "getBankNum", "anonymousFunc1", "getBind"], _class2.$$componentPath = "pages/addBank/addBank", _temp2)) || _class;

exports.default = Bankcard;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Bankcard, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/addBank/addBank.jsx?taro&type=template&parse=PAGE&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/addBank/addBank.jsx?taro&type=template&parse=PAGE& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/addBank/addBank.wxml";

/***/ }),

/***/ "./src/pages/addBank/addBank.jsx":
/*!***************************************!*\
  !*** ./src/pages/addBank/addBank.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addBank_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addBank.jsx?taro&type=template&parse=PAGE& */ "./src/pages/addBank/addBank.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _addBank_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addBank.jsx?taro&type=script&parse=PAGE& */ "./src/pages/addBank/addBank.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _addBank_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _addBank_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/addBank/addBank.jsx?taro&type=script&parse=PAGE&":
/*!********************************************************************!*\
  !*** ./src/pages/addBank/addBank.jsx?taro&type=script&parse=PAGE& ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_addBank_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./addBank.jsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/addBank/addBank.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_addBank_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_addBank_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_addBank_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_addBank_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_addBank_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/addBank/addBank.jsx?taro&type=template&parse=PAGE&":
/*!**********************************************************************!*\
  !*** ./src/pages/addBank/addBank.jsx?taro&type=template&parse=PAGE& ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_addBank_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./addBank.jsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/addBank/addBank.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_addBank_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_addBank_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_addBank_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_addBank_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/addBank/addBank.module.styl":
/*!***********************************************!*\
  !*** ./src/pages/addBank/addBank.module.styl ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"out":"addBank-module__out___3Fc3T","container":"addBank-module__container___1Y2hw","head_img":"addBank-module__head_img___2t4o4","store_name":"addBank-module__store_name___m4giC","store_desc":"addBank-module__store_desc___14deo","form_box":"addBank-module__form_box___2x5Vw","list":"addBank-module__list___tDpGH","label_box":"addBank-module__label_box___3UARR","list_bank":"addBank-module__list_bank___2KEcn","name":"addBank-module__name___saE0M","symbol":"addBank-module__symbol___FuD1i","insert":"addBank-module__insert___1TKuz","bank_title":"addBank-module__bank_title___3Wkqy","desc":"addBank-module__desc___1kZFk","icon":"addBank-module__icon___1TLW1","active":"addBank-module__active___3BkaY","bind_btn":"addBank-module__bind_btn___2MqJy","gray":"addBank-module__gray___3ApZl","nocheck":"addBank-module__nocheck___1PLuc","mes":"addBank-module__mes___14j2E","back":"addBank-module__back___SdB4e","error_icon":"addBank-module__error_icon___3ql85"};

/***/ })

},[["./src/pages/addBank/addBank.jsx","runtime","taro","vendors","common"]]]);