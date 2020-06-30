(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/collect/collect"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/collect/collect.jsx?taro&type=script&parse=PAGE&":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/collect/collect.jsx?taro&type=script&parse=PAGE& ***!
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

var _class, _class2, _temp2; /**
                              * @Author: chunxiao.zhang
                              * @Email: chunxiao.zhang@jdxiaokang.com
                              * @Update: 2020-02-18 21:23:18
                              * @Description: 收藏夹
                              */


var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index = __webpack_require__(/*! ../../components/with-page/index */ "./src/components/with-page/index.jsx");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../../model/index */ "./src/model/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../../components/assets/index */ "./src/components/assets/index.js");

var _index6 = _interopRequireDefault(_index5);

var _collectModule = __webpack_require__(/*! ./collect.module.styl */ "./src/pages/collect/collect.module.styl");

var _collectModule2 = _interopRequireDefault(_collectModule);

var _index7 = __webpack_require__(/*! ../../utils/index */ "./src/utils/index.js");

var _index8 = _interopRequireDefault(_index7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Collect = (0, _index2.default)(_class = (_temp2 = _class2 = function (_Taro$Component) {
  _inherits(Collect, _Taro$Component);

  function Collect() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Collect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Collect.__proto__ || Object.getPrototypeOf(Collect)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "loopArray45", "$compid__104", "$compid__105", "userInfo", "list", "styles", "level", "isLoaded", "hasMore", "isEmpty", "globalStore"], _this.getLevel = function () {
      var companyId = _this.getCompanyId();
      if (companyId) {
        _index4.default.order.getShopMemberLevelInfo({ companyId: companyId }).then(function (data) {
          if (data) {
            _this.setState({
              level: data.memberLevel
            });
          }
        });
      }
    }, _this.clearProduct = function (v, index) {
      var list = _this.state.list;
      var id = v.id,
          itemId = v.itemId,
          agentCompanyId = v.agentCompanyId;

      _index4.default.goods.collect({
        agentItemId: id,
        itemId: itemId,
        agentCompanyId: agentCompanyId,
        collect: 0
      }).then(function (data) {
        if (data) {
          list.splice(index, 1);
          _this.setState({
            list: list,
            isEmpty: list.length == 0
          });
        }
      });
    }, _this.goProduct = function (v) {
      var companyId = _this.getCompanyId();

      _taroWeapp2.default.navigateTo({
        url: "/pages/goodsdetail/goodsdetail?agentItemId=" + v.agentItemId + "&itemId=" + v.itemId + "&companyId=" + companyId
      });
    }, _this.getData = function (_ref2) {
      var _ref2$pageNo = _ref2.pageNo,
          pageNo = _ref2$pageNo === undefined ? 1 : _ref2$pageNo,
          _ref2$pageSize = _ref2.pageSize,
          pageSize = _ref2$pageSize === undefined ? 15 : _ref2$pageSize,
          callback = _ref2.callback;
      var list = _this.state.list;

      var companyId = _this.getCompanyId();
      _index4.default.goods.collectList({
        pageNo: pageNo, pageSize: pageSize, agentCompanyId: companyId
      }).then(function (resModel) {

        var data = _this.filterList(resModel);

        if (!data) {
          _this.setState({
            isEmpty: true
          });
          return false;
        }
        var l = list.concat(data);
        _this.setState({
          isLoaded: true,
          isShow: true,
          list: l,
          pageNum: pageNo,
          isEmpty: l.length <= 0
        });
        if (data.length < pageSize) {
          _this.setState({
            hasMore: false
          });
        } else {
          _this.setState({
            hasMore: true
          });
        }

        if (callback) {
          callback();
        }
      });
    }, _this.onScrollToLower = function (fn) {
      _this.state.pageNum += 1;
      var pageNum = _this.state.pageNum;

      _this.getData({ pageNo: pageNum, callback: fn });
    }, _this.onPullDownRefresh = function (fn) {
      _this.setState({
        list: []
      }, function () {
        return _this.getData({ callback: fn });
      });
    }, _this.filterList = function (datas) {
      return datas.filter(function (item) {
        return item.status === 'ON_SALES';
      })
      // 下架商品
      .concat(datas.filter(function (item) {
        return item.status === 'DOWN_SALES' || item.status === 'INVALID';
      }));
    }, _this.config = {
      navigationBarTitleText: '我的收藏',
      enablePullDownRefresh: false
    }, _this.anonymousFunc0Map = {}, _this.anonymousFunc1Map = {}, _this.customComponents = ["ListView", "Empty", "Entry"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Collect, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Collect.prototype.__proto__ || Object.getPrototypeOf(Collect.prototype), "_constructor", this).call(this, props);

      this.state = {
        // 界面/组件 初始数据
        list: [],
        isLoaded: true,
        hasMore: false,
        isEmpty: false,
        level: '1'
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }

    // 清除


    // 抢购

  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      var _this2 = this;

      var globalStore = this.props.globalStore;
      var userInfo = globalStore.data.userInfo;

      this.setState({
        list: []
      }, function () {
        if (userInfo.token) {
          _this2.getData({});
        }
      });
      if (userInfo.token) {
        this.getLevel();
      }
    }
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {
      if (this.state.isEmpty) {
        this.setState({
          isEmpty: false
        });
      }
    }

    /**
     * 按一定条件展示列表数据
     */

  }, {
    key: "_createData",
    value: function _createData() {
      var _this3 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__104"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__104 = _genCompid2[0],
          $compid__104 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__105"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__105 = _genCompid4[0],
          $compid__105 = _genCompid4[1];

      var _state = this.__state,
          isLoaded = _state.isLoaded,
          hasMore = _state.hasMore,
          isEmpty = _state.isEmpty,
          list = _state.list,
          level = _state.level;
      var globalStore = this.__props.globalStore;
      var _globalStore$data = globalStore.data,
          _globalStore$data$sys = _globalStore$data.systemInfo,
          screenHeight = _globalStore$data$sys.screenHeight,
          windowHeight = _globalStore$data$sys.windowHeight,
          userInfo = _globalStore$data.userInfo;


      var anonymousState__temp = userInfo.token ? { height: windowHeight + "px" } : null;
      var anonymousState__temp2 = userInfo.token ? {
        launchEmpty: true
      } : null;
      var anonymousState__temp3 = userInfo.token ? (0, _taroWeapp.internal_inline_style)({ minHeight: screenHeight + "px" }) : null;
      var loopArray45 = userInfo.token ? (list || []).map(function (v, index) {
        v = {
          $original: (0, _taroWeapp.internal_get_original)(v)
        };

        var _$indexKey = "gczzz" + index;

        _this3.anonymousFunc0Map[_$indexKey] = function () {
          return _this3.goProduct(v.$original);
        };

        var $loopState__temp5 = v.$original && v.$original.status == 'ON_SALES' ? userInfo.token ? (0, _taroWeapp.internal_inline_style)({ backgroundImage: "url(" + _index8.default.appUtils.getFileUrl(v.$original.mainImgUrl) + ")" }) : null : null;
        var $loopState__temp7 = v.$original && (v.$original.status == 'DOWN_SALES' || v.$original.status == 'INVALID') ? userInfo.token ? (0, _taroWeapp.internal_inline_style)({ backgroundImage: "url(" + _index8.default.appUtils.getFileUrl(v.$original.mainImgUrl) + ")" }) : null : null;
        var $loopState__temp9 = v.$original && (v.$original.status == 'DOWN_SALES' || v.$original.status == 'INVALID') ? userInfo.token ? (0, _taroWeapp.internal_inline_style)({ backgroundImage: "url(" + _index6.default.goods.down + ")" }) : null : null;

        var _$indexKey2 = "gdzzz" + index;

        _this3.anonymousFunc1Map[_$indexKey2] = function () {
          return _this3.clearProduct(v.$original, index);
        };

        return {
          _$indexKey: _$indexKey,
          $loopState__temp5: $loopState__temp5,
          $loopState__temp7: $loopState__temp7,
          $loopState__temp9: $loopState__temp9,
          _$indexKey2: _$indexKey2,
          $original: v.$original
        };
      }) : [];
      userInfo.token && _taroWeapp.propsManager.set({
        "isLoaded": isLoaded,
        "hasMore": hasMore,
        "isEmpty": isEmpty,
        "onScrollToLower": this.onScrollToLower,
        "onPullDownRefresh": this.onPullDownRefresh,
        "style": anonymousState__temp,
        "launch": anonymousState__temp2
      }, $compid__104, $prevCompid__104);
      userInfo.token && _taroWeapp.propsManager.set({
        "msg": "\u60A8\u8FD8\u672A\u6536\u85CF\u8FC7\u5546\u54C1",
        "type": 2
      }, $compid__105, $prevCompid__105);
      this.$$refs.pushRefs([{
        type: "component",
        id: "gbzzz",
        refName: "",
        fn: function fn(node) {
          return _this3.scrollV = node;
        }
      }]);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        loopArray45: loopArray45,
        $compid__104: $compid__104,
        $compid__105: $compid__105,
        userInfo: userInfo,
        styles: _collectModule2.default
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
    value: function anonymousFunc1(_$indexKey2) {
      var _anonymousFunc1Map;

      ;

      for (var _len3 = arguments.length, e = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        e[_key3 - 1] = arguments[_key3];
      }

      return this.anonymousFunc1Map[_$indexKey2] && (_anonymousFunc1Map = this.anonymousFunc1Map)[_$indexKey2].apply(_anonymousFunc1Map, e);
    }
  }]);

  return Collect;
}(_taroWeapp2.default.Component), _class2.$$events = ["anonymousFunc0", "anonymousFunc1"], _class2.$$componentPath = "pages/collect/collect", _temp2)) || _class;

exports.default = Collect;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Collect, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/collect/collect.jsx?taro&type=template&parse=PAGE&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/collect/collect.jsx?taro&type=template&parse=PAGE& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/collect/collect.wxml";

/***/ }),

/***/ "./src/pages/collect/collect.jsx":
/*!***************************************!*\
  !*** ./src/pages/collect/collect.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _collect_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collect.jsx?taro&type=template&parse=PAGE& */ "./src/pages/collect/collect.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _collect_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collect.jsx?taro&type=script&parse=PAGE& */ "./src/pages/collect/collect.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _collect_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _collect_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/collect/collect.jsx?taro&type=script&parse=PAGE&":
/*!********************************************************************!*\
  !*** ./src/pages/collect/collect.jsx?taro&type=script&parse=PAGE& ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_collect_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./collect.jsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/collect/collect.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_collect_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_collect_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_collect_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_collect_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_collect_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/collect/collect.jsx?taro&type=template&parse=PAGE&":
/*!**********************************************************************!*\
  !*** ./src/pages/collect/collect.jsx?taro&type=template&parse=PAGE& ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_collect_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./collect.jsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/collect/collect.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_collect_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_collect_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_collect_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_collect_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/collect/collect.module.styl":
/*!***********************************************!*\
  !*** ./src/pages/collect/collect.module.styl ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"list":"collect-module__list___1G9G0","store_desc":"collect-module__store_desc___2GD8Z","store_icon":"collect-module__store_icon___QfkWu","arrow_icon":"collect-module__arrow_icon___1Nn-F","product_desc":"collect-module__product_desc___2S15X","product_img":"collect-module__product_img___R9dtv","product_info":"collect-module__product_info___1BQ2L","product_title":"collect-module__product_title___3GBrM","product_price":"collect-module__product_price___1eoQn","product_profit":"collect-module__product_profit___2xfxM","product_price_box":"collect-module__product_price_box___tuCBF","product_buy":"collect-module__product_buy___3oC-c","gray":"collect-module__gray___1pWRR","black":"collect-module__black___yPm_M","product_clear":"collect-module__product_clear___3Krfr","product_profit_gray":"collect-module__product_profit_gray___1eGac","mask":"collect-module__mask___2JRb_","empty":"collect-module__empty___3kLGc","empty_box":"collect-module__empty_box___1BPcW","nologinContainer":"collect-module__nologinContainer___259Jt","nologinInner":"collect-module__nologinInner___2aaVV"};

/***/ })

},[["./src/pages/collect/collect.jsx","runtime","taro","vendors","common"]]]);