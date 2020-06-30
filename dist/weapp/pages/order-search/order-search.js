(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/order-search/order-search"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/order-search/order-search.jsx?taro&type=script&parse=PAGE&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/order-search/order-search.jsx?taro&type=script&parse=PAGE& ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _class2, _temp2; /**
                              * @Author: cai.ping
                              * @Email: cai.ping@jdxiaokang.com
                              * @Update: 2020-05-25 14:01:45
                              * @Description: 订单搜索界面
                              */


var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index = __webpack_require__(/*! ../../components/with-page/index */ "./src/components/with-page/index.jsx");

var _index2 = _interopRequireDefault(_index);

var _wechatUtils = __webpack_require__(/*! @jxkang/wechat-utils */ "./node_modules/@jxkang/wechat-utils/dist/index.js");

var _orderSearchModule = __webpack_require__(/*! ./order-search.module.styl */ "./src/pages/order-search/order-search.module.styl");

var _orderSearchModule2 = _interopRequireDefault(_orderSearchModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = (0, _index2.default)(_class = (_temp2 = _class2 = function (_Taro$Component) {
  _inherits(Search, _Taro$Component);

  function Search() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Search);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Search.__proto__ || Object.getPrototypeOf(Search)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "loopArray65", "loopArray66", "styles", "showList", "typelist", "value", "taglist", "$anonymousCallee__16", "type"], _this.taggleTip = function () {
      var showList = _this.state.showList;

      _this.setState({
        showList: !showList
      });
    }, _this.setType = function (type) {
      _this.setState({
        type: type,
        showList: false
      });
    }, _this.goOrderIndex = function () {
      _taroWeapp2.default.navigateTo({
        url: "/pages/my-order/my-order?isSearchResult=1&isOrder=1"
      });
    }, _this.goOrder = function () {
      var _this$$router$params = _this.$router.params,
          _this$$router$params$ = _this$$router$params.isOrder,
          isOrder = _this$$router$params$ === undefined ? 1 : _this$$router$params$,
          _this$$router$params$2 = _this$$router$params.isSelf,
          isSelf = _this$$router$params$2 === undefined ? 1 : _this$$router$params$2;
      var _this$state = _this.state,
          value = _this$state.value,
          type = _this$state.type;

      var orderSearchHistory = _taroWeapp2.default.getStorageSync('orderSearchHistory') || [];
      var key = 'orderNo';
      if (type === 1) {
        key = 'orderNo';
      } else if (type === 2) {
        key = 'itemName';
      } else if (type === 3) {
        key = 'consigneeName';
      } else if (type === 4) {
        key = 'phone';
      }
      if (!value) {
        _wechatUtils.message.error('请输入关键字');
        return;
      }
      orderSearchHistory.map(function (item, i) {
        if (item.queryType === type && item.value === value) {
          orderSearchHistory.splice(i, 1);
        }
      });
      orderSearchHistory.push({ key: key, queryType: type, value: value });
      console.log("orderSearchHistory", orderSearchHistory);
      _taroWeapp2.default.setStorageSync('orderSearchHistory', orderSearchHistory);
      _taroWeapp2.default.reLaunch({
        url: "/pages/my-order/my-order?isSearchResult=2&isOrder=" + isOrder + "&isSelf=" + isSelf + "&queryType=" + type + "&" + key + "=" + value
      });
    }, _this.setValue = function (e) {
      var value = e.target.value;

      var s = value.replace(/(^\s*)|(\s*$)/g, '');
      s = s.substr(0, 20);
      _this.setState({
        value: s
      });
      return s;
    }, _this.setTag = function (item) {
      _this.setState({
        value: item.value,
        type: item.queryType
      });
    }, _this.clearHistory = function () {
      _taroWeapp2.default.setStorageSync('orderSearchHistory', []);
      _this.setState({
        taglist: []
      });
    }, _this.config = {
      navigationBarTitleText: '订单查询',
      navigationStyle: 'custom'
    }, _this.anonymousFunc0Map = {}, _this.anonymousFunc2Map = {}, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Search, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Search.prototype.__proto__ || Object.getPrototypeOf(Search.prototype), "_constructor", this).call(this, props);

      this.state = {
        // 界面/组件 初始数据
        showList: false,
        type: 2,
        value: '',
        typelist: [{
          name: '商品名称',
          type: 2
        }, {
          name: '订单编号',
          type: 1
        }, {
          name: '收货人',
          type: 3
        }, {
          name: '电话',
          type: 4
        }],
        taglist: [{
          value: 'x',
          key: 'orderNo',
          queryType: 1
        }]
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentWillReact",
    value: function componentWillReact() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var orderSearchHistory = _taroWeapp2.default.getStorageSync('orderSearchHistory') || [];

      var _Taro$getMenuButtonBo = _taroWeapp2.default.getMenuButtonBoundingClientRect(),
          top = _Taro$getMenuButtonBo.top,
          height = _Taro$getMenuButtonBo.height;

      this.setState({
        taglist: orderSearchHistory.reverse(),
        buttonTop: top,
        buttonHeight: height
      });
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
          showList = _state.showList,
          type = _state.type,
          typelist = _state.typelist,
          taglist = _state.taglist,
          value = _state.value,
          buttonTop = _state.buttonTop,
          buttonHeight = _state.buttonHeight;
      // const i = typelist.findIndex(r => r.type === type)

      var getI = function getI() {
        return typelist.findIndex(function (r) {
          return r.type === type;
        });
      };
      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)({ paddingTop: buttonTop + buttonHeight + "px" });
      var anonymousState__temp2 = (0, _taroWeapp.internal_inline_style)({ marginTop: buttonTop + "px", height: buttonHeight + "px" });
      var anonymousState__temp3 = typelist[getI()].name;

      this.anonymousFunc1 = function () {
        _this2.setState({ value: '' });
      };

      var $anonymousCallee__16 = taglist.length > 0 ? taglist.slice(0, 20) : [];
      var loopArray65 = showList ? typelist.map(function (item, i) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey = "iazzz" + i;

        _this2.anonymousFunc0Map[_$indexKey] = function () {
          return _this2.setType(item.$original.type);
        };

        return {
          _$indexKey: _$indexKey,
          $original: item.$original
        };
      }) : [];
      var loopArray66 = taglist.length > 0 ? taglist.slice(0, 20).map(function (item, i) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey2 = "ibzzz" + i;

        _this2.anonymousFunc2Map[_$indexKey2] = function () {
          return _this2.setTag(item.$original);
        };

        var $loopState__temp5 = taglist.length > 0 ? item.$original.value.substr(0, 20) : null;
        return {
          _$indexKey2: _$indexKey2,
          $loopState__temp5: $loopState__temp5,
          $original: item.$original
        };
      }) : [];
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        loopArray65: loopArray65,
        loopArray66: loopArray66,
        styles: _orderSearchModule2.default,
        $anonymousCallee__16: $anonymousCallee__16
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
  }, {
    key: "anonymousFunc1",
    value: function anonymousFunc1(e) {
      ;
    }
  }, {
    key: "anonymousFunc2",
    value: function anonymousFunc2(_$indexKey2) {
      var _anonymousFunc2Map;

      ;

      for (var _len3 = arguments.length, e = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        e[_key3 - 1] = arguments[_key3];
      }

      return this.anonymousFunc2Map[_$indexKey2] && (_anonymousFunc2Map = this.anonymousFunc2Map)[_$indexKey2].apply(_anonymousFunc2Map, e);
    }
  }]);

  return Search;
}(_taroWeapp2.default.Component), _class2.$$events = ["goOrderIndex", "taggleTip", "anonymousFunc0", "setValue", "anonymousFunc1", "goOrder", "clearHistory", "anonymousFunc2"], _class2.$$componentPath = "pages/order-search/order-search", _temp2)) || _class;

exports.default = Search;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Search, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/order-search/order-search.jsx?taro&type=template&parse=PAGE&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/order-search/order-search.jsx?taro&type=template&parse=PAGE& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/order-search/order-search.wxml";

/***/ }),

/***/ "./src/pages/order-search/order-search.jsx":
/*!*************************************************!*\
  !*** ./src/pages/order-search/order-search.jsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _order_search_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-search.jsx?taro&type=template&parse=PAGE& */ "./src/pages/order-search/order-search.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _order_search_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-search.jsx?taro&type=script&parse=PAGE& */ "./src/pages/order-search/order-search.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _order_search_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _order_search_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/order-search/order-search.jsx?taro&type=script&parse=PAGE&":
/*!******************************************************************************!*\
  !*** ./src/pages/order-search/order-search.jsx?taro&type=script&parse=PAGE& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_search_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./order-search.jsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/order-search/order-search.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_search_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_search_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_search_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_search_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_search_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/order-search/order-search.jsx?taro&type=template&parse=PAGE&":
/*!********************************************************************************!*\
  !*** ./src/pages/order-search/order-search.jsx?taro&type=template&parse=PAGE& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_search_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./order-search.jsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/order-search/order-search.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_search_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_search_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_search_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_search_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/order-search/order-search.module.styl":
/*!*********************************************************!*\
  !*** ./src/pages/order-search/order-search.module.styl ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"search_box":"order-search-module__search_box___3oPQn","left":"order-search-module__left___3eEjw","delete":"order-search-module__delete___20Hco","search_type":"order-search-module__search_type___FwHft","icon":"order-search-module__icon___12Cv3","down":"order-search-module__down___3u6kd","tip_box":"order-search-module__tip_box___3tFiz","item":"order-search-module__item___fBpsI","input":"order-search-module__input___3eCM5","search_buttton":"order-search-module__search_buttton___3xB3h","tags_box":"order-search-module__tags_box___3ALU3","title_box":"order-search-module__title_box___3e5vv","tags_content":"order-search-module__tags_content___3xxT3","red":"order-search-module__red___1KAwX","back":"order-search-module__back___2yvej","nav_out":"order-search-module__nav_out___2oStm","top_inner":"order-search-module__top_inner___2a4N5","font":"order-search-module__font___2A6w9","go_back_icon":"order-search-module__go_back_icon___HldLJ"};

/***/ })

},[["./src/pages/order-search/order-search.jsx","runtime","taro","vendors","common"]]]);