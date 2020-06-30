(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["kangLive/pages/turn-live/turn-live"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/kangLive/pages/turn-live/turn-live.jsx?taro&type=script&parse=PAGE&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/kangLive/pages/turn-live/turn-live.jsx?taro&type=script&parse=PAGE& ***!
  \******************************************************************************************************************************************************************/
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
                              * @Author: qiang.zhang
                              * @Email: 1196217890@qq.com
                              * @Update: 2020-05-14 13:44:44
                              * @Description: 转播列表页面
                              */


// import Utils from '@/utils';


var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index = __webpack_require__(/*! ../../../components/with-page/index */ "./src/components/with-page/index.jsx");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../../../model/index */ "./src/model/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../../../components/assets/index */ "./src/components/assets/index.js");

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__(/*! ../../../utils/common/index */ "./src/utils/common/index.js");

var _index8 = _interopRequireDefault(_index7);

var _turnLiveModule = __webpack_require__(/*! ./turn-live.module.styl */ "./src/kangLive/pages/turn-live/turn-live.module.styl");

var _turnLiveModule2 = _interopRequireDefault(_turnLiveModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TurnLive = (0, _index2.default)(_class = (_temp2 = _class2 = function (_Taro$Component) {
  _inherits(TurnLive, _Taro$Component);

  function TurnLive() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TurnLive);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TurnLive.__proto__ || Object.getPrototypeOf(TurnLive)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "loopArray71", "$compid__175", "styles", "shopList", "Assets", "pageIndex", "hasMore"], _this.redirectMarket = function (_ref2) {
      var _ref2$pageNo = _ref2.pageNo,
          pageNo = _ref2$pageNo === undefined ? 1 : _ref2$pageNo,
          callBack = _ref2.callBack,
          _ref2$pageSize = _ref2.pageSize,
          pageSize = _ref2$pageSize === undefined ? 10 : _ref2$pageSize;
      var shopList = _this.state.shopList;

      var companyId = _this.getCompanyId();
      var currentData = {
        page: pageNo,
        pageSize: pageSize,
        companyId: companyId
      };
      _index4.default.liveapi.redirectMarket(currentData).then(function (res) {
        if (!res) {
          return false;
        }
        _this.setState({
          shopList: shopList.concat(res),
          pageIndex: pageNo,
          hasMore: !(res.length < pageSize)
          // isGoodsRequested: true
        }, function () {
          if (callBack) {
            callBack();
          }
        });
      });
    }, _this.goLive = function (livedetail) {
      var companyId = _this.getCompanyId();
      if (livedetail.liveStatus == 2) {
        if (livedetail.streamStatus == 0) {
          _taroWeapp2.default.navigateTo({
            url: "/kangLive/pages/golive/golive?liveId=" + livedetail.id + "&companyId=" + companyId + "&isLiveOrRedirectLive=" + (livedetail.isLiveOrRedirectLive || null) + "&pliveId=" + (livedetail.pliveId || 0)
          });
        } else {
          return false;
        }
      } else {
        _taroWeapp2.default.navigateTo({
          url: "/kangLive/pages/prelive/prelive?liveId=" + livedetail.id + "&companyId=" + companyId + "&isLiveOrRedirectLive=" + (livedetail.isLiveOrRedirectLive || null) + "&pliveId=" + (livedetail.pliveId || 0)
        });
      }
    }, _this.insRef = function (node) {
      _this.refList = node;
    }, _this.pullDownRefresh = function () {}
    // const companyId = this.getCompanyId();
    // this.queryLiveByCompanyId({ callBack: fn, companyId: companyId });


    /**
     * @description: 分页获取数据
     * @param {type} 
     * @return: 
     */

    , _this.onScrollToLower = function (fn) {
      var pageIndex = _this.state.pageIndex;

      _this.setState({
        pageIndex: pageIndex += 1
      });
      var pageNum = _this.state.pageIndex;
      _this.redirectMarket({ pageNo: pageNum, callBack: fn });
    }, _this.config = {
      navigationBarTitleText: '推荐直播'
    }, _this.anonymousFunc0Map = {}, _this.customComponents = ["ListView", "Empty", "Ellipsis"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TurnLive, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(TurnLive.prototype.__proto__ || Object.getPrototypeOf(TurnLive.prototype), "_constructor", this).call(this, props);

      this.state = {
        pageIndex: 1,
        hasMore: true,
        shopList: []
        // 界面/组件 初始数据
      };
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
    value: function componentDidShow() {
      var _this2 = this;

      this.setState({
        shopList: []
      }, function () {
        _this2.redirectMarket({});
      });
    }
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}

    /**
     * @description: 获取商品列表
     * @param {type} 
     * @return: 
     */

    /**
     * @description: 下拉刷新
     * @param {type} 
     * @return: 
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__175"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__175 = _genCompid2[0],
          $compid__175 = _genCompid2[1];

      var _state = this.__state,
          isLoaded = _state.isLoaded,
          hasMore = _state.hasMore,
          shopList = _state.shopList;


      var anonymousState__temp = {
        launchEmpty: true
      };
      var loopArray71 = (shopList || []).map(function (v, index) {
        v = {
          $original: (0, _taroWeapp.internal_get_original)(v)
        };
        var $loopState__temp3 = index + 1;

        var _$indexKey = "iizzz" + index;

        _this3.anonymousFunc0Map[_$indexKey] = function () {
          return _this3.goLive(v.$original);
        };

        var $loopState__temp5 = v.$original.liveStatus == 1 ? _index8.default.formatDateTime(v.$original.startTime) : null;

        var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "ijzzzzzzzz" + index, true),
            _genCompid4 = _slicedToArray(_genCompid3, 2),
            $prevCompid__174 = _genCompid4[0],
            $compid__174 = _genCompid4[1];

        _taroWeapp.propsManager.set({
          "count": 1,
          "className": _turnLiveModule2.default.lookShop_style
        }, $compid__174, $prevCompid__174);
        return {
          $loopState__temp3: $loopState__temp3,
          _$indexKey: _$indexKey,
          $loopState__temp5: $loopState__temp5,
          $compid__174: $compid__174,
          $original: v.$original
        };
      });
      _taroWeapp.propsManager.set({
        "isLoaded": isLoaded,
        "hasMore": hasMore,
        "className": _turnLiveModule2.default.scroll_content,
        "onScrollToLower": this.onScrollToLower,
        "onPullDownRefresh": this.pullDownRefresh,
        "launch": anonymousState__temp
      }, $compid__175, $prevCompid__175);
      this.$$refs.pushRefs([{
        type: "component",
        id: "ihzzz",
        refName: "",
        fn: function fn(node) {
          return _this3.insRef(node);
        }
      }]);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        loopArray71: loopArray71,
        $compid__175: $compid__175,
        styles: _turnLiveModule2.default,
        Assets: _index6.default
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

  return TurnLive;
}(_taroWeapp2.default.Component), _class2.$$events = ["anonymousFunc0"], _class2.$$componentPath = "kangLive/pages/turn-live/turn-live", _temp2)) || _class;

exports.default = TurnLive;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(TurnLive, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/kangLive/pages/turn-live/turn-live.jsx?taro&type=template&parse=PAGE&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/kangLive/pages/turn-live/turn-live.jsx?taro&type=template&parse=PAGE& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "kangLive/pages/turn-live/turn-live.wxml";

/***/ }),

/***/ "./src/kangLive/pages/turn-live/turn-live.jsx":
/*!****************************************************!*\
  !*** ./src/kangLive/pages/turn-live/turn-live.jsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _turn_live_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./turn-live.jsx?taro&type=template&parse=PAGE& */ "./src/kangLive/pages/turn-live/turn-live.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _turn_live_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./turn-live.jsx?taro&type=script&parse=PAGE& */ "./src/kangLive/pages/turn-live/turn-live.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _turn_live_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _turn_live_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/kangLive/pages/turn-live/turn-live.jsx?taro&type=script&parse=PAGE&":
/*!*********************************************************************************!*\
  !*** ./src/kangLive/pages/turn-live/turn-live.jsx?taro&type=script&parse=PAGE& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_turn_live_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./turn-live.jsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/kangLive/pages/turn-live/turn-live.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_turn_live_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_turn_live_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_turn_live_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_turn_live_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_turn_live_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/kangLive/pages/turn-live/turn-live.jsx?taro&type=template&parse=PAGE&":
/*!***********************************************************************************!*\
  !*** ./src/kangLive/pages/turn-live/turn-live.jsx?taro&type=template&parse=PAGE& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_turn_live_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!../../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./turn-live.jsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/kangLive/pages/turn-live/turn-live.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_turn_live_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_turn_live_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_turn_live_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_turn_live_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/kangLive/pages/turn-live/turn-live.module.styl":
/*!************************************************************!*\
  !*** ./src/kangLive/pages/turn-live/turn-live.module.styl ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"firInner":"turn-live-module__firInner___3wwEg","liveText":"turn-live-module__liveText___12RCg","imgStyle":"turn-live-module__imgStyle___1j0aC","liveLeftText":"turn-live-module__liveLeftText___9aSyB","turnLeftText":"turn-live-module__turnLeftText___1JjX4","preLeftText":"turn-live-module__preLeftText___1VjJH","turnList":"turn-live-module__turnList___2zkbQ","turn_Data_List":"turn-live-module__turn_Data_List___3AgQI","fixed_style":"turn-live-module__fixed_style___TZGhw","fixed_style_img":"turn-live-module__fixed_style_img___2wz6q","bot_style":"turn-live-module__bot_style___t-lCs","look_More":"turn-live-module__look_More___3Ccfc","turn_Data_Img":"turn-live-module__turn_Data_Img___1EPOJ","lookNum_style":"turn-live-module__lookNum_style___3ElK-","lookShop_style":"turn-live-module__lookShop_style___3oAla","look_more_style":"turn-live-module__look_more_style___2MKcX","icon_style":"turn-live-module__icon_style___1n9sC","scroll_content":"turn-live-module__scroll_content___3KmMK"};

/***/ })

},[["./src/kangLive/pages/turn-live/turn-live.jsx","runtime","taro","vendors","common"]]]);