(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/my-qrcode/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/my-qrcode/index.jsx?taro&type=script&parse=COMPONENT&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/components/my-qrcode/index.jsx?taro&type=script&parse=COMPONENT& ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2; /**
                     * @Author: cai.ping
                     * @Email: cai.ping@jdxiaokang.com
                     * @Update: 2020-02-27 10:24:17
                     * @Description: true
                     */


var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _wechatUtils = __webpack_require__(/*! @jxkang/wechat-utils */ "./node_modules/@jxkang/wechat-utils/dist/index.js");

var _index = __webpack_require__(/*! ../../config/index */ "./src/config/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../../utils/index */ "./src/utils/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../../model/index */ "./src/model/index.js");

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__(/*! ../assets/index */ "./src/components/assets/index.js");

var _index8 = _interopRequireDefault(_index7);

var _myQrcodeModule = __webpack_require__(/*! ./my-qrcode.module.styl */ "./src/components/my-qrcode/my-qrcode.module.styl");

var _myQrcodeModule2 = _interopRequireDefault(_myQrcodeModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var appUtils = _index4.default.appUtils;

var getFileUrl = appUtils.getFileUrl;

var MyQrcode = (_temp2 = _class = function (_Taro$Component) {
  _inherits(MyQrcode, _Taro$Component);

  function MyQrcode() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MyQrcode);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MyQrcode.__proto__ || Object.getPrototypeOf(MyQrcode)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "$compid__161", "styles", "wxcode", "code", "icon", "companyId"], _this.copys = function () {
      var code = _this.state.code;

      _taroWeapp2.default.setClipboardData({
        data: code,
        success: function success() {
          _wechatUtils.message.success('复制成功');
        }
      });
    }, _this.companyCode = function () {
      _index6.default.inviter.userCode().then(function (res) {
        if (res) {
          _this.setState({
            code: res.invitationCode,
            icon: res.icon,
            companyId: res.companyId
          });
          _this.getQrCode(res.invitationCode, res.companyId);
        }
      });
    }, _this.getQrCode = function (code, companyId) {
      var sceneMap = {
        cId: companyId,
        M: code
      };
      var wxcode = encodeURI(_index6.default.common.getGoodsDetailQrCode() + "?wechatSourceEnum=KXP_C&page=pages/index/index&sceneMap=" + JSON.stringify(sceneMap));
      _this.setState({ wxcode: wxcode });
      _index3.imgshare.getShopQrImg({ sceneMap: sceneMap, companyId: companyId });
    }, _this.goList = function () {
      _taroWeapp2.default.navigateTo({
        url: "/pages/yq-list/yq-list"
      });
    }, _this.config = {
      navigationBarTitleText: '我的推荐码'
    }, _this.customComponents = ["Share"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MyQrcode, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(MyQrcode.prototype.__proto__ || Object.getPrototypeOf(MyQrcode.prototype), "_constructor", this).call(this, props);

      this.state = {
        // 界面/组件 初始数据
        code: '--',
        icon: '', //二维码中间的图片
        companyId: '',
        wxcode: ''
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      _index3.imgshare.initInviteShare();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}

    // eslint-disable-next-line react/sort-comp

  }, {
    key: "componentWillReact",
    value: function componentWillReact() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.companyCode();
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
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__161"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__161 = _genCompid2[0],
          $compid__161 = _genCompid2[1];

      var _state = this.__state,
          code = _state.code,
          companyId = _state.companyId,
          icon = _state.icon,
          wxcode = _state.wxcode;


      var anonymousState__temp = {
        code: code,
        link: _index2.default.webHost + "/#/pages/login/login?mark=" + code + "&companyId=" + companyId,
        icon: icon ? _index2.default.crossFile + "?uri=" + getFileUrl(icon) : getFileUrl(_index8.default.common.default_avatar),
        type: 'qrcode',
        showShareImg: true
      };
      _taroWeapp.propsManager.set({
        "params": anonymousState__temp
      }, $compid__161, $prevCompid__161);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        $compid__161: $compid__161,
        styles: _myQrcodeModule2.default
      });
      return this.__state;
    }
  }]);

  return MyQrcode;
}(_taroWeapp2.default.Component), _class.$$events = ["copys", "goList"], _class.$$componentPath = "components/my-qrcode/index", _temp2);
exports.default = MyQrcode;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(MyQrcode));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/my-qrcode/index.jsx?taro&type=template&parse=COMPONENT&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/components/my-qrcode/index.jsx?taro&type=template&parse=COMPONENT& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "components/my-qrcode/index.wxml";

/***/ }),

/***/ "./src/components/my-qrcode/index.jsx":
/*!********************************************!*\
  !*** ./src/components/my-qrcode/index.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.jsx?taro&type=template&parse=COMPONENT& */ "./src/components/my-qrcode/index.jsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.jsx?taro&type=script&parse=COMPONENT& */ "./src/components/my-qrcode/index.jsx?taro&type=script&parse=COMPONENT&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/components/my-qrcode/index.jsx?taro&type=script&parse=COMPONENT&":
/*!******************************************************************************!*\
  !*** ./src/components/my-qrcode/index.jsx?taro&type=script&parse=COMPONENT& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=script&parse=COMPONENT& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/my-qrcode/index.jsx?taro&type=script&parse=COMPONENT&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/my-qrcode/index.jsx?taro&type=template&parse=COMPONENT&":
/*!********************************************************************************!*\
  !*** ./src/components/my-qrcode/index.jsx?taro&type=template&parse=COMPONENT& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=template&parse=COMPONENT& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/my-qrcode/index.jsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/my-qrcode/my-qrcode.module.styl":
/*!********************************************************!*\
  !*** ./src/components/my-qrcode/my-qrcode.module.styl ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"content":"my-qrcode-module__content___-iltm","code_box":"my-qrcode-module__code_box___3ukN1","black_bar":"my-qrcode-module__black_bar___2v9t0","code_content":"my-qrcode-module__code_content___e494e","title":"my-qrcode-module__title___2ewKC","font":"my-qrcode-module__font___3MrUC","copy":"my-qrcode-module__copy___1qTmb","code_imgbox":"my-qrcode-module__code_imgbox___163SA","desc":"my-qrcode-module__desc___ClOzU","qrcode_box":"my-qrcode-module__qrcode_box___3ZfoZ","sharQRImg":"my-qrcode-module__sharQRImg___3qLPQ","yq_list_button":"my-qrcode-module__yq_list_button___3oKqV"};

/***/ })

},[["./src/components/my-qrcode/index.jsx","runtime","taro","vendors","common"]]]);