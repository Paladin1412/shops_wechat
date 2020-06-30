(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/submission/submission"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/submission/submission.jsx?taro&type=script&parse=PAGE&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/submission/submission.jsx?taro&type=script&parse=PAGE& ***!
  \***********************************************************************************************************************************************************/
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
                              * @Author: cai.ping
                              * @Email: cai.ping@jdxiaokang.com
                              * @Update: 2020-02-24 12:09:48
                              * @Description: 订单提交界面
                              */


var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _wechatUtils = __webpack_require__(/*! @jxkang/wechat-utils */ "./node_modules/@jxkang/wechat-utils/dist/index.js");

var _index = __webpack_require__(/*! ../../components/with-page/index */ "./src/components/with-page/index.jsx");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../../utils/index */ "./src/utils/index.js");

var _index4 = __webpack_require__(/*! ../../model/index */ "./src/model/index.js");

var _index5 = _interopRequireDefault(_index4);

var _index6 = __webpack_require__(/*! ../../store/index */ "./src/store/index.js");

var _index7 = _interopRequireDefault(_index6);

var _submissionModule = __webpack_require__(/*! ./submission.module.styl */ "./src/pages/submission/submission.module.styl");

var _submissionModule2 = _interopRequireDefault(_submissionModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getFileUrl = _index3.appUtils.getFileUrl,
    formatPoint = _index3.appUtils.formatPoint;

var Submission = (0, _index2.default)(_class = (_temp2 = _class2 = function (_Taro$Component) {
  _inherits(Submission, _Taro$Component);

  function Submission() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Submission);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Submission.__proto__ || Object.getPrototypeOf(Submission)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "$compid__124", "$compid__125", "$compid__126", "styles", "address", "info"], _this.handleInputChange = function (v) {
      var info = _this.state.info;

      info.count = v;
      _this.setState({
        info: info
      });
      _index7.default.globalStore.setData('infoForOrder', Object.assign({}, info), 'submission.jsx,line:44');
    }, _this.goAddress = function () {
      _taroWeapp2.default.navigateTo({
        url: '/pages/edit-address/edit-address?backUrl=/pages/submission/submission&first=1'
      });
    }, _this.checkAddress = function () {
      _taroWeapp2.default.navigateTo({
        url: '/pages/address/address?backUrl=/pages/submission/submission'
      });
    }, _this.onCallPay = function () {
      var _this$state = _this.state,
          address = _this$state.address,
          info = _this$state.info;
      var openId = _index7.default.globalStore.data.envUserInfo.openId;

      if (!openId) {
        _wechatUtils.message.warn('请先登录授权之后再操作');
        _index3.appUtils.navigateToLogin({
          params: _index3.appUtils.getCurrentPage().options || {},
          desc: '[system] file:orderpay/index.js line:10'
        });
        _this.logger({
          logs: '重新授权'
        });
        return false;
      }
      var noArea = info.noArea || [];
      var arr = _this.getnoAreaCode(noArea);
      console.log(">>>arr", arr);
      if (arr.indexOf("" + address.areaId) !== -1 || arr.indexOf("" + address.provinceId) !== -1 || arr.indexOf("" + address.cityId) !== -1) {
        _wechatUtils.message.error('所选地区不支持发货');
        return;
      }
      var orderSource = info.orderSource || 3;
      // let flag = true
      // noArea.map(item => {
      //   if (address.provinceId===item.areaCode&&item.level===0) {
      //     flag = false
      //   }
      //   if (item.childs) {

      //   }
      // })
      var params = {
        areaCode: address.areaId,
        cityCode: address.cityId,
        provinceCode: address.provinceId,
        province: address.province,
        city: address.city,
        area: address.area,
        detailAddress: address.house || address.address,
        receiveName: address.receiver,
        receivePhone: address.phone,
        streetCode: address.streetId,
        count: info.count,
        skuId: info.skuId,
        agentItemId: info.agentItemId !== 'null' ? info.agentItemId : null,
        // orderSource,
        liveId: info.liveId
      };

      if (Number(orderSource) === 4 || Number(orderSource) === 5) {
        params.orderSource = orderSource;
      }
      _index5.default.order.doOrder(params).then(function (res) {
        if (res) {
          _this.logger({
            logs: '下单成功',
            api_url: '/orderservice/order/create',
            api_req: JSON.stringify(params),
            api_res: JSON.stringify(res)
          });
          _index3.orderPay.Opay(_this, res);
        }
      });
    }, _this.defAddress = function () {
      _index5.default.order.defAddress().then(function (res) {
        _this.setState({
          address: res
        });
      });
    }, _this.adressList = function () {
      _index5.default.address.getList().then(function (res) {
        if (res.totalRecordSize > 0) {
          var i = res.records.findIndex(function (r) {
            return r.isDefault === true;
          });
          _this.setState({
            address: i >= 0 ? res.records[i] : res.records[0]
          });
        }
      });
    }, _this.getSelect = function () {
      var propsValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      var arr = [];
      console.log(propsValue);
      propsValue.map(function (p, pi) {
        arr.push(p.propertyValue);
      });
      var str = arr.join('/');
      return str;
    }, _this.getnoAreaCode = function (arr) {
      var list = [];
      arr.map(function (item) {
        if (item.childs && item.childs.length > 0) {
          list = [].concat(_toConsumableArray(list), _toConsumableArray(_this.getnoAreaCode(item.childs)));
        } else {
          list.push(item.areaCode);
        }
      });
      return Array.from(new Set(list));
    }, _this.config = {
      navigationBarTitleText: '提交订单',
      navigationBarBackgroundColor: '#F7F8FA'
    }, _this.customComponents = ["AtIcon", "Ellipsis", "AtInputNumber"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Submission, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Submission.prototype.__proto__ || Object.getPrototypeOf(Submission.prototype), "_constructor", this).call(this, props);

      this.state = {
        // 界面/组件 初始数据
        info: {},
        address: null
      };

      // this.onCallPay = Orderly.call(
      //   this,
      //   this.onCallPay,
      //   {
      //     // 如果接口或其它各种异常，3秒之后自动解锁 <防止极端情况>
      //     orderlyTimer: 3000
      //   }
      // );
      _index3.appUtils.delay(this, ['onCallPay']);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentWillReact",
    value: function componentWillReact() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var info = _taroWeapp2.default.getStorageSync('infoForOrder');
      var checkAddress = _taroWeapp2.default.getStorageSync('checkAddress');
      if (info) {
        info.propsValue = this.getSelect(info.selectValue || []);
        this.setState({
          info: info
        });
      }
      if (checkAddress) {
        this.setState({
          address: checkAddress
        });
      } else {
        this.adressList(); //地址列表
      }
      // this.defAddress() //默认地址
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__124"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__124 = _genCompid2[0],
          $compid__124 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__125"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__125 = _genCompid4[0],
          $compid__125 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__126"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__126 = _genCompid6[0],
          $compid__126 = _genCompid6[1];

      var _state = this.__state,
          address = _state.address,
          info = _state.info;

      var anonymousState__temp = address ? ("" + address.receiver).substr(0, 12) : null;
      var anonymousState__temp2 = getFileUrl(info.skuImg);
      var anonymousState__temp3 = formatPoint(info.tradePrice * info.count, 4);
      var anonymousState__temp4 = formatPoint(info.tradePrice * info.count);
      !address && _taroWeapp.propsManager.set({
        "value": "add",
        "size": "20",
        "color": "#676767",
        "className": _submissionModule2.default.icon
      }, $compid__124, $prevCompid__124);
      _taroWeapp.propsManager.set({
        "count": 1
      }, $compid__125, $prevCompid__125);
      _taroWeapp.propsManager.set({
        "min": 1,
        "max": info.stockQty,
        "step": 1,
        "value": info.count,
        "onChange": this.handleInputChange
      }, $compid__126, $prevCompid__126);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        $compid__124: $compid__124,
        $compid__125: $compid__125,
        $compid__126: $compid__126,
        styles: _submissionModule2.default
      });
      return this.__state;
    }
  }]);

  return Submission;
}(_taroWeapp2.default.Component), _class2.$$events = ["goAddress", "checkAddress", "onCallPay"], _class2.$$componentPath = "pages/submission/submission", _temp2)) || _class;

exports.default = Submission;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Submission, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/submission/submission.jsx?taro&type=template&parse=PAGE&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/submission/submission.jsx?taro&type=template&parse=PAGE& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/submission/submission.wxml";

/***/ }),

/***/ "./src/pages/submission/submission.jsx":
/*!*********************************************!*\
  !*** ./src/pages/submission/submission.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _submission_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./submission.jsx?taro&type=template&parse=PAGE& */ "./src/pages/submission/submission.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _submission_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submission.jsx?taro&type=script&parse=PAGE& */ "./src/pages/submission/submission.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _submission_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _submission_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/submission/submission.jsx?taro&type=script&parse=PAGE&":
/*!**************************************************************************!*\
  !*** ./src/pages/submission/submission.jsx?taro&type=script&parse=PAGE& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_submission_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./submission.jsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/submission/submission.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_submission_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_submission_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_submission_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_submission_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_submission_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/submission/submission.jsx?taro&type=template&parse=PAGE&":
/*!****************************************************************************!*\
  !*** ./src/pages/submission/submission.jsx?taro&type=template&parse=PAGE& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_submission_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./submission.jsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/submission/submission.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_submission_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_submission_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_submission_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_submission_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/submission/submission.module.styl":
/*!*****************************************************!*\
  !*** ./src/pages/submission/submission.module.styl ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"submission-module__container___2x8AC","addres_box":"submission-module__addres_box___1qBQj","icon":"submission-module__icon___3tiSo","product_box":"submission-module__product_box___1a6el","title":"submission-module__title___2Ooa2","font":"submission-module__font___3j6y0","icon_shop":"submission-module__icon_shop___PYgG7","info_box":"submission-module__info_box___3A683","img":"submission-module__img___18T3M","info_right":"submission-module__info_right___2UHEL","item_line":"submission-module__item_line___JrzIw","info_title":"submission-module__info_title___2SBZW","num":"submission-module__num___2GVlX","recv":"submission-module__recv___3UVL4","second":"submission-module__second___3hyC7","all_price":"submission-module__all_price___1gy9J","all_num":"submission-module__all_num___1_aqc","count_box":"submission-module__count_box___1Y-oU","transfee_box":"submission-module__transfee_box___1aG_B","red":"submission-module__red___2u0EM","gray":"submission-module__gray___1OWAP","button_box":"submission-module__button_box___1J_gI","content":"submission-module__content___25fFC","button":"submission-module__button___2Bsuz","gray_button":"submission-module__gray_button___3AL1Y","item":"submission-module__item___Kcbqd","left":"submission-module__left___1xO8_","name_box":"submission-module__name_box___25ilT","name":"submission-module__name___2wNHs","tel":"submission-module__tel___3TRCB"};

/***/ })

},[["./src/pages/submission/submission.jsx","runtime","taro","vendors","common"]]]);