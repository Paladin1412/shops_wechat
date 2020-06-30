(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["kangLive/pages/backlive/backlive"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/kangLive/pages/backlive/backlive.jsx?taro&type=script&parse=PAGE&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/kangLive/pages/backlive/backlive.jsx?taro&type=script&parse=PAGE& ***!
  \****************************************************************************************************************************************************************/
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
// import Common from '@/utils/common'

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index = __webpack_require__(/*! ../../../components/with-page/index */ "./src/components/with-page/index.jsx");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../../../model/index */ "./src/model/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../../../components/assets/index */ "./src/components/assets/index.js");

var _index6 = _interopRequireDefault(_index5);

var _backliveModule = __webpack_require__(/*! ./backlive.module.styl */ "./src/kangLive/pages/backlive/backlive.module.styl");

var _backliveModule2 = _interopRequireDefault(_backliveModule);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TurnLive.__proto__ || Object.getPrototypeOf(TurnLive)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "loopArray83", "$compid__191", "styles", "shopList", "Assets", "pageIndex", "hasMore"], _this.playBackLiveList = function (_ref2) {
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
      _index4.default.liveapi.playBackLiveList(currentData).then(function (res) {
        if (!res) {
          return false;
        }
        _this.setState({
          shopList: shopList.concat(res.list),
          pageIndex: pageNo,
          hasMore: !(res.list.length < pageSize)
          // isGoodsRequested: true
        }, function () {
          if (callBack) {
            callBack();
          }
        });
      });
    }, _this.goLive = function (livedetail) {
      var companyId = _this.getCompanyId();
      _taroWeapp2.default.navigateTo({
        url: "/kangLive/pages/golive/golive?liveId=" + livedetail.id + "&companyId=" + companyId + "&isbackLive=1"
      });
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
      // eslint-disable-next-line react/no-direct-mutation-state
      _this.state.pageIndex += 1;
      _this.playBackLiveList({ pageNo: _this.state.pageIndex, callBack: fn });
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
        _this2.playBackLiveList({});
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__191"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__191 = _genCompid2[0],
          $compid__191 = _genCompid2[1];

      var _state = this.__state,
          isLoaded = _state.isLoaded,
          hasMore = _state.hasMore,
          shopList = _state.shopList;


      var anonymousState__temp = {
        launchEmpty: true
      };
      var loopArray83 = (shopList || []).map(function (v, index) {
        v = {
          $original: (0, _taroWeapp.internal_get_original)(v)
        };
        var $loopState__temp3 = index + 1;

        var _$indexKey = "bagzz" + index;

        _this3.anonymousFunc0Map[_$indexKey] = function () {
          return _this3.goLive(v.$original);
        };

        var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "bahzzzzzzz" + index, true),
            _genCompid4 = _slicedToArray(_genCompid3, 2),
            $prevCompid__190 = _genCompid4[0],
            $compid__190 = _genCompid4[1];

        _taroWeapp.propsManager.set({
          "count": 1,
          "className": _backliveModule2.default.lookShop_style
        }, $compid__190, $prevCompid__190);
        return {
          $loopState__temp3: $loopState__temp3,
          _$indexKey: _$indexKey,
          $compid__190: $compid__190,
          $original: v.$original
        };
      });
      _taroWeapp.propsManager.set({
        "isLoaded": isLoaded,
        "hasMore": hasMore,
        "className": _backliveModule2.default.scroll_content,
        "onScrollToLower": this.onScrollToLower,
        "onPullDownRefresh": this.pullDownRefresh,
        "launch": anonymousState__temp
      }, $compid__191, $prevCompid__191);
      this.$$refs.pushRefs([{
        type: "component",
        id: "bafzz",
        refName: "",
        fn: function fn(node) {
          return _this3.insRef(node);
        }
      }]);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        loopArray83: loopArray83,
        $compid__191: $compid__191,
        styles: _backliveModule2.default,
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
}(_taroWeapp2.default.Component), _class2.$$events = ["anonymousFunc0"], _class2.$$componentPath = "kangLive/pages/backlive/backlive", _temp2)) || _class;

exports.default = TurnLive;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(TurnLive, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/kangLive/pages/backlive/backlive.jsx?taro&type=template&parse=PAGE&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/kangLive/pages/backlive/backlive.jsx?taro&type=template&parse=PAGE& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "kangLive/pages/backlive/backlive.wxml";

/***/ }),

/***/ "./src/kangLive/pages/backlive/backlive.jsx":
/*!**************************************************!*\
  !*** ./src/kangLive/pages/backlive/backlive.jsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _backlive_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backlive.jsx?taro&type=template&parse=PAGE& */ "./src/kangLive/pages/backlive/backlive.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _backlive_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backlive.jsx?taro&type=script&parse=PAGE& */ "./src/kangLive/pages/backlive/backlive.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _backlive_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _backlive_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/kangLive/pages/backlive/backlive.jsx?taro&type=script&parse=PAGE&":
/*!*******************************************************************************!*\
  !*** ./src/kangLive/pages/backlive/backlive.jsx?taro&type=script&parse=PAGE& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_backlive_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./backlive.jsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/kangLive/pages/backlive/backlive.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_backlive_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_backlive_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_backlive_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_backlive_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_backlive_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/kangLive/pages/backlive/backlive.jsx?taro&type=template&parse=PAGE&":
/*!*********************************************************************************!*\
  !*** ./src/kangLive/pages/backlive/backlive.jsx?taro&type=template&parse=PAGE& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_backlive_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!../../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./backlive.jsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/kangLive/pages/backlive/backlive.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_backlive_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_backlive_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_backlive_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_backlive_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/kangLive/pages/backlive/backlive.module.styl":
/*!**********************************************************!*\
  !*** ./src/kangLive/pages/backlive/backlive.module.styl ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"firInner":"backlive-module__firInner___3rDu1","liveText":"backlive-module__liveText___3edsL","imgStyle":"backlive-module__imgStyle___39l73","liveLeftText":"backlive-module__liveLeftText___1tmED","turnLeftText":"backlive-module__turnLeftText___1PYud","preLeftText":"backlive-module__preLeftText___S4sJt","turnList":"backlive-module__turnList___3MKjs","turn_Data_List":"backlive-module__turn_Data_List___2WL96","fixed_style":"backlive-module__fixed_style___22GMd","fixed_style_img":"backlive-module__fixed_style_img___2pP8i","bot_style":"backlive-module__bot_style___2H4kX","look_More":"backlive-module__look_More___3cKU5","turn_Data_Img":"backlive-module__turn_Data_Img___BF4Cy","lookNum_style":"backlive-module__lookNum_style___wGryJ","lookShop_style":"backlive-module__lookShop_style___3qhO1","look_more_style":"backlive-module__look_more_style___1bmBM","icon_style":"backlive-module__icon_style___3OWRm","scroll_content":"backlive-module__scroll_content___2DfXh"};

/***/ })

},[["./src/kangLive/pages/backlive/backlive.jsx","runtime","taro","vendors","common"]]]);