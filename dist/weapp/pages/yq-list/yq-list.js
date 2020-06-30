(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/yq-list/yq-list"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/yq-list/yq-list.jsx?taro&type=script&parse=PAGE&":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/yq-list/yq-list.jsx?taro&type=script&parse=PAGE& ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _class2, _temp2; // 邀请列表


var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _wechatUtils = __webpack_require__(/*! @jxkang/wechat-utils */ "./node_modules/@jxkang/wechat-utils/dist/index.js");

var _index = __webpack_require__(/*! ../../components/with-page/index */ "./src/components/with-page/index.jsx");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../../model/index */ "./src/model/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../../components/assets/index */ "./src/components/assets/index.js");

var _index6 = _interopRequireDefault(_index5);

var _yqListModule = __webpack_require__(/*! ./yq-list.module.styl */ "./src/pages/yq-list/yq-list.module.styl");

var _yqListModule2 = _interopRequireDefault(_yqListModule);

var _index7 = __webpack_require__(/*! ../../utils/index */ "./src/utils/index.js");

var _index8 = _interopRequireDefault(_index7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getFileUrl = _index8.default.appUtils.getFileUrl;

var Success = (0, _index2.default)(_class = (_temp2 = _class2 = function (_Taro$Component) {
  _inherits(Success, _Taro$Component);

  function Success() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Success);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Success.__proto__ || Object.getPrototypeOf(Success)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "loopArray62", "$compid__149", "$compid__150", "styles", "list", "screenHeight", "isLoaded", "error", "hasMore", "isEmpty", "pageNum", "globalStore"], _this.getData = function (_ref2) {
      var _ref2$pageNum = _ref2.pageNum,
          pageNum = _ref2$pageNum === undefined ? 1 : _ref2$pageNum,
          _ref2$pageSize = _ref2.pageSize,
          pageSize = _ref2$pageSize === undefined ? 15 : _ref2$pageSize,
          callback = _ref2.callback;

      _index4.default.inviter.getRecordList({
        pageNum: pageNum,
        pageSize: pageSize
      }).then(function (res) {
        if (res) {
          var list = _this.state.list;

          var l = list.concat(res.records);
          _this.setState({
            isLoaded: true,
            isShow: true,
            list: l,
            hasMore: res.hasNextPage,
            pageNum: res.pageNum,
            isEmpty: l.length <= 0
          });
          if (callback) {
            callback();
          }
        }
      });
    }, _this.onScrollToLower = function (fn) {
      _this.state.pageNum += 1;
      var pageNum = _this.state.pageNum;
      _this.getData({ pageNum: pageNum, callback: fn });
    }, _this.onPullDownRefresh = function (fn) {
      _this.setState({
        list: []
      }, function () {
        return _this.getData({ callback: fn });
      });
    }, _this.onInvite = function () {
      _index4.default.inviter.userCode().then(function (res) {
        if (res) {
          _taroWeapp2.default.navigateTo({
            url: "/pages/my-qrcode/my-qrcode?mark=" + res.invitationCode
          });
        }
      });
    }, _this.config = {
      navigationBarTitleText: '邀请记录',
      enablePullDownRefresh: false
    }, _this.customComponents = ["ListView", "Empty"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Success, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Success.prototype.__proto__ || Object.getPrototypeOf(Success.prototype), "_constructor", this).call(this, props);

      this.state = {
        // 界面/组件 初始数据
        list: [],
        screenHeight: '',
        isLoaded: false,
        error: false,
        hasMore: true,
        isEmpty: false,
        pageNum: 1
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentWillReact",
    value: function componentWillReact() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var globalStore = this.props.globalStore;
      var screenHeight = globalStore.data.systemInfo.screenHeight;


      this.setState({
        screenHeight: screenHeight
      });
      this.getData({});
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__149"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__149 = _genCompid2[0],
          $compid__149 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__150"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__150 = _genCompid4[0],
          $compid__150 = _genCompid4[1];

      var _state = this.__state,
          isLoaded = _state.isLoaded,
          hasMore = _state.hasMore,
          isEmpty = _state.isEmpty,
          list = _state.list,
          screenHeight = _state.screenHeight;


      var anonymousState__temp = { height: screenHeight + "px" };
      var anonymousState__temp2 = {
        launchEmpty: true
      };
      var anonymousState__temp3 = (0, _taroWeapp.internal_inline_style)({ height: screenHeight + "px" });
      var anonymousState__temp4 = (0, _taroWeapp.internal_inline_style)({ 'min-height': screenHeight + "px" });
      var loopArray62 = list.map(function (item, _anonIdx) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var $loopState__temp6 = getFileUrl(item.$original.icon) || _index6.default.register.logo;
        var $loopState__temp8 = item.$original.phone.substr(0, 3);
        var $loopState__temp10 = item.$original.phone.substr(7, 10);
        var $loopState__temp12 = _wechatUtils.Common.dateFormat(item.$original.invitationTime, 'yyyy-mm-dd hh:ii:ss');
        return {
          $loopState__temp6: $loopState__temp6,
          $loopState__temp8: $loopState__temp8,
          $loopState__temp10: $loopState__temp10,
          $loopState__temp12: $loopState__temp12,
          $original: item.$original
        };
      });
      _taroWeapp.propsManager.set({
        "isLoaded": isLoaded,
        "hasMore": hasMore,
        "isEmpty": isEmpty,
        "onScrollToLower": this.onScrollToLower,
        "onPullDownRefresh": this.onPullDownRefresh,
        "className": _yqListModule2.default.scroll_content,
        "style": anonymousState__temp,
        "launch": anonymousState__temp2
      }, $compid__149, $prevCompid__149);
      _taroWeapp.propsManager.set({
        "msg": "\u60A8\u8FD8\u672A\u9080\u8BF7\u8FC7\u7528\u6237\uFF0C\u5FEB\u53BB\u9080\u8BF7\u597D\u53CB\u5427\uFF5E",
        "type": 5
      }, $compid__150, $prevCompid__150);
      this.$$refs.pushRefs([{
        type: "component",
        id: "hjzzz",
        refName: "",
        fn: function fn(node) {
          return _this2.scrollV = node;
        }
      }]);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        loopArray62: loopArray62,
        $compid__149: $compid__149,
        $compid__150: $compid__150,
        styles: _yqListModule2.default
      });
      return this.__state;
    }
  }]);

  return Success;
}(_taroWeapp2.default.Component), _class2.$$events = ["onInvite"], _class2.$$componentPath = "pages/yq-list/yq-list", _temp2)) || _class;

exports.default = Success;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Success, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/yq-list/yq-list.jsx?taro&type=template&parse=PAGE&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/yq-list/yq-list.jsx?taro&type=template&parse=PAGE& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/yq-list/yq-list.wxml";

/***/ }),

/***/ "./src/pages/yq-list/yq-list.jsx":
/*!***************************************!*\
  !*** ./src/pages/yq-list/yq-list.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _yq_list_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./yq-list.jsx?taro&type=template&parse=PAGE& */ "./src/pages/yq-list/yq-list.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _yq_list_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./yq-list.jsx?taro&type=script&parse=PAGE& */ "./src/pages/yq-list/yq-list.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _yq_list_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _yq_list_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/yq-list/yq-list.jsx?taro&type=script&parse=PAGE&":
/*!********************************************************************!*\
  !*** ./src/pages/yq-list/yq-list.jsx?taro&type=script&parse=PAGE& ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_yq_list_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./yq-list.jsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/yq-list/yq-list.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_yq_list_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_yq_list_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_yq_list_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_yq_list_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_yq_list_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/yq-list/yq-list.jsx?taro&type=template&parse=PAGE&":
/*!**********************************************************************!*\
  !*** ./src/pages/yq-list/yq-list.jsx?taro&type=template&parse=PAGE& ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_yq_list_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./yq-list.jsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/yq-list/yq-list.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_yq_list_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_yq_list_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_yq_list_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_yq_list_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/yq-list/yq-list.module.styl":
/*!***********************************************!*\
  !*** ./src/pages/yq-list/yq-list.module.styl ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"list_out":"yq-list-module__list_out___2zwkY","container":"yq-list-module__container___giL13","item":"yq-list-module__item___1bVEJ","img":"yq-list-module__img___t0HIP","right":"yq-list-module__right___9b9iP","rightTop":"yq-list-module__rightTop___2CfRn","name":"yq-list-module__name___INqim","bottom":"yq-list-module__bottom___2AImH","empty_box":"yq-list-module__empty_box___16jis","inviteBtn":"yq-list-module__inviteBtn___2av6A"};

/***/ })

},[["./src/pages/yq-list/yq-list.jsx","runtime","taro","vendors","common"]]]);