(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/order-detail/order-detail"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/order-detail/order-detail.jsx?taro&type=script&parse=PAGE&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/order-detail/order-detail.jsx?taro&type=script&parse=PAGE& ***!
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

var _class, _class2, _temp2; /**
                              * @Author: cai.ping
                              * @Email: cai.ping@jdxiaokang.com
                              * @Update: 2020-02-26 15:13:21
                              * @Description: true
                              */

// import { Ellipsis } from '@jxkang/wechat-cmpt';

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _wechatUtils = __webpack_require__(/*! @jxkang/wechat-utils */ "./node_modules/@jxkang/wechat-utils/dist/index.js");

var _index = __webpack_require__(/*! ../../components/with-page/index */ "./src/components/with-page/index.jsx");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../../model/index */ "./src/model/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../../utils/index */ "./src/utils/index.js");

var _orderDetailModule = __webpack_require__(/*! ./order-detail.module.styl */ "./src/pages/order-detail/order-detail.module.styl");

var _orderDetailModule2 = _interopRequireDefault(_orderDetailModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getFileUrl = _index5.appUtils.getFileUrl,
    formatPoint = _index5.appUtils.formatPoint,
    getOrderStatus = _index5.appUtils.getOrderStatus;

var OrderDetail = (0, _index2.default)(_class = (_temp2 = _class2 = function (_Taro$Component) {
  _inherits(OrderDetail, _Taro$Component);

  function OrderDetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, OrderDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OrderDetail.__proto__ || Object.getPrototypeOf(OrderDetail)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "anonymousState__temp5", "anonymousState__temp6", "anonymousState__temp7", "anonymousState__temp8", "$compid__133", "$compid__134", "$compid__135", "styles", "item", "addressInfo", "shopLevel", "sureModal", "actionType", "buttonTop", "buttonHeight"], _this.goTransDetail = function () {
      _taroWeapp2.default.navigateTo({
        url: '/pages/logistics-detail/logistics-detail'
      });
    }, _this.queryDetail = function (orderNo) {
      _index4.default.order.queryDetail({
        orderNo: orderNo
      }).then(function (res) {
        // res.orderStatus = 1
        // res.afterSale = 1
        if (res) {
          res.propsValue = _this.getProps(res.newPropsValue);
          // res.logisticsType = res.logisticsType || 2
          _this.setState({
            item: res
          }, function () {
            if (res.logisticsType === 2) {
              _this.getDeliveryTrail(orderNo);
            }
          });
        }
      });
    }, _this.getDeliveryTrail = function (orderNo) {
      _index4.default.order.getDeliveryTrail({ orderNo: orderNo }).then(function (res) {
        if (res) {
          _this.setState({
            addressInfo: res
          });
        }
      });
    }, _this.getProps = function () {
      var propsValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      propsValue = ("" + propsValue).replace('[', '').replace(']', '').replace(/\"/g, "").split(',');
      var str = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = propsValue[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var k = _step.value;

          str.push(k.split(':')[1]);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return str.join('/');
    }, _this.deleteOrder = function () {
      var orderNo = _this.$router.params.orderNo;

      _index4.default.order.deleteOrder({ orderNo: orderNo }).then(function (res) {
        _this.setState({
          sureModal: false
        });
        if (res) {
          _wechatUtils.message.success("已删除");
          setTimeout(function () {
            _taroWeapp2.default.navigateTo({
              url: "/pages/my-order/my-order?index=4"
            });
          }, 500);
        }
      });
    }, _this.cancelOrder = function () {
      var orderNo = _this.$router.params.orderNo;

      _index4.default.order.cancelOrder({ orderNo: orderNo }).then(function (res) {
        _this.setState({
          sureModal: false
        });
        if (res === true) {
          _wechatUtils.message.success("订单已取消");
          setTimeout(function () {
            _taroWeapp2.default.navigateTo({
              url: "/pages/my-order/my-order?index=0"
            });
          }, 500);
        }
      });
    }, _this.goRefund = function (type) {
      var orderNo = _this.$router.params.orderNo;
      var shopLevel = _this.$router.params.shopLevel;

      _taroWeapp2.default.navigateTo({
        url: "/pages/after-sales/after-sales?type=" + type + "&orderNo=" + orderNo + "&shopLevel=" + shopLevel
      });
    }, _this.goIndex = function () {
      var companyId = _this.getCompanyId();
      _taroWeapp2.default.switchTab({
        url: "/pages/index/index?companyId=" + companyId
      });
    }, _this.goGoodDetail = function () {
      var item = _this.state.item;
      var _this$$router$params$ = _this.$router.params.orderSource,
          orderSource = _this$$router$params$ === undefined ? 3 : _this$$router$params$;

      var companyId = _this.getCompanyId();
      _taroWeapp2.default.navigateTo({
        url: "/pages/goodsdetail/goodsdetail?agentItemId=" + item.agentItemId + "&itemId=" + item.itemId + "&companyId=" + companyId + "&orderSource=" + (item.orderSource || orderSource)
      });
    }, _this.goAfter = function (afterSaleNo) {
      _taroWeapp2.default.navigateTo({
        url: "/pages/aftersales-detail/aftersales-detail?afterSaleNo=" + afterSaleNo
      });
    }, _this.setaction = function () {
      var actionType = _this.state.actionType;

      if (actionType === '删除') {
        _this.deleteOrder();
      } else if (actionType === '收货') {
        _this.receivedOrder();
      } else if (actionType === '取消') {
        _this.cancelOrder();
      }
    }, _this.receivedOrder = function () {
      var orderNo = _this.$router.params.orderNo;

      _index4.default.order.receivedOrder({ orderNo: orderNo }).then(function (res) {
        _this.setState({
          sureModal: false
        });
        if (res === true) {
          _wechatUtils.message.success("已收货");
          setTimeout(function () {
            _taroWeapp2.default.navigateTo({
              url: "/pages/my-order/my-order?t=" + new Date().getTime() + "&index=3"
            });
          }, 500);
        }
      });
    }, _this.copyAction = function (data) {
      _taroWeapp2.default.setClipboardData({
        data: data,
        success: function success() {
          _wechatUtils.message.success('复制成功');
        }
      });
    }, _this.goAddress = function () {
      var orderNo = _this.$router.params.orderNo;

      _taroWeapp2.default.navigateTo({
        url: "/pages/logistics-detail/logistics-detail?orderNo=" + orderNo
      });
    }, _this.onCallPay = function (orderNo) {
      _index5.orderPay.Opay(_this, orderNo);
    }, _this.config = {
      navigationBarTitleText: '我的订单',
      navigationStyle: 'custom'
    }, _this.customComponents = ["Ellipsis", "AtModal"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(OrderDetail, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(OrderDetail.prototype.__proto__ || Object.getPrototypeOf(OrderDetail.prototype), "_constructor", this).call(this, props);

      this.state = {
        // 界面/组件 初始数据
        item: {},
        sureModal: false,
        actionType: '',
        buttonTop: 0,
        buttonHeight: 0,
        addressInfo: {
          list: []
        }
      };
      _index5.appUtils.delay(this, ['onCallPay']);
      // this.onCallPay = Orderly.call(this, this.onCallPay);
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentWillReact",
    value: function componentWillReact() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var orderNo = this.$router.params.orderNo;

      this.queryDetail(orderNo);
      // this.getDeliveryTrail(orderNo)
      var that = this;

      var _Taro$getMenuButtonBo = _taroWeapp2.default.getMenuButtonBoundingClientRect(),
          top = _Taro$getMenuButtonBo.top,
          height = _Taro$getMenuButtonBo.height;

      _taroWeapp2.default.getSystemInfo({
        success: function success(res) {
          //model中包含着设备信息
          var model = res.model;
          that.setState({
            buttonTop: top,
            buttonHeight: height
          });
        }
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__133"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__133 = _genCompid2[0],
          $compid__133 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__134"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__134 = _genCompid4[0],
          $compid__134 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__135"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__135 = _genCompid6[0],
          $compid__135 = _genCompid6[1];

      var _state = this.__state,
          item = _state.item,
          sureModal = _state.sureModal,
          actionType = _state.actionType,
          buttonTop = _state.buttonTop,
          buttonHeight = _state.buttonHeight,
          addressInfo = _state.addressInfo;
      var shopLevel = this.$router.params.shopLevel;

      shopLevel = Number(shopLevel);
      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)({ marginTop: buttonTop + "px", height: buttonHeight + "px" });

      this.anonymousFunc0 = function () {
        _taroWeapp2.default.navigateBack(-1);
      };

      var anonymousState__temp2 = ("" + item.receiveName).substr(0.10);

      this.anonymousFunc1 = function () {
        return _this2.copyAction(addressInfo.number || item.deliveryNo);
      };

      var anonymousState__temp3 = _taroWeapp2.default.getStorageSync('userInfo').shopName;
      var anonymousState__temp4 = getOrderStatus({
        afterSale: item.afterSale,
        afterSaleStatus: item.afterSaleStatus,
        orderStatus: item.orderStatus,
        afterSaleType: item.afterSaleType
      });
      var anonymousState__temp5 = getFileUrl(item.skuImg);
      var anonymousState__temp6 = formatPoint(item.agentUnitPrice * item.count, 4);

      this.anonymousFunc2 = function () {
        return _this2.copyAction(item.orderNo);
      };

      var anonymousState__temp7 = formatPoint(item.agentUnitPrice * item.count + (item.postage || 0), 4);

      this.anonymousFunc3 = function () {
        return _this2.onCallPay(item.orderNo);
      };

      this.anonymousFunc4 = function () {
        return _this2.goRefund(1);
      };

      this.anonymousFunc5 = function () {
        return _this2.goRefund(2);
      };

      this.anonymousFunc6 = function () {
        return _this2.setState({ sureModal: true, actionType: '收货' });
      };

      this.anonymousFunc7 = function () {
        return _this2.goAfter(item.afterSaleNo);
      };

      this.anonymousFunc8 = function () {
        return _this2.setState({ sureModal: false });
      };

      this.anonymousFunc9 = function () {
        return _this2.setState({ sureModal: false });
      };

      this.anonymousFunc10 = function () {
        return _this2.setaction();
      };

      var anonymousState__temp8 = "\u786E\u5B9A" + actionType + "\u5417";
      _taroWeapp.propsManager.set({
        "count": 2
      }, $compid__133, $prevCompid__133);
      _taroWeapp.propsManager.set({
        "count": 1
      }, $compid__134, $prevCompid__134);
      _taroWeapp.propsManager.set({
        "isOpened": sureModal,
        "title": false,
        "cancelText": "\u53D6\u6D88",
        "confirmText": "\u662F\u7684",
        "onClose": this.anonymousFunc8,
        "onCancel": this.anonymousFunc9,
        "onConfirm": this.anonymousFunc10,
        "content": anonymousState__temp8
      }, $compid__135, $prevCompid__135);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        anonymousState__temp5: anonymousState__temp5,
        anonymousState__temp6: anonymousState__temp6,
        anonymousState__temp7: anonymousState__temp7,
        anonymousState__temp8: anonymousState__temp8,
        $compid__133: $compid__133,
        $compid__134: $compid__134,
        $compid__135: $compid__135,
        styles: _orderDetailModule2.default,
        shopLevel: shopLevel
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
  }, {
    key: "anonymousFunc2",
    value: function anonymousFunc2(e) {
      ;
    }
  }, {
    key: "anonymousFunc3",
    value: function anonymousFunc3(e) {
      ;
    }
  }, {
    key: "anonymousFunc4",
    value: function anonymousFunc4(e) {
      ;
    }
  }, {
    key: "anonymousFunc5",
    value: function anonymousFunc5(e) {
      ;
    }
  }, {
    key: "anonymousFunc6",
    value: function anonymousFunc6(e) {
      ;
    }
  }, {
    key: "anonymousFunc7",
    value: function anonymousFunc7(e) {
      ;
    }
  }, {
    key: "anonymousFunc8",
    value: function anonymousFunc8(e) {
      ;
    }
  }, {
    key: "anonymousFunc9",
    value: function anonymousFunc9(e) {
      ;
    }
  }, {
    key: "anonymousFunc10",
    value: function anonymousFunc10(e) {
      ;
    }
  }]);

  return OrderDetail;
}(_taroWeapp2.default.Component), _class2.$$events = ["anonymousFunc0", "anonymousFunc1", "goAddress", "goIndex", "goGoodDetail", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5", "anonymousFunc6", "anonymousFunc7"], _class2.$$componentPath = "pages/order-detail/order-detail", _temp2)) || _class;

exports.default = OrderDetail;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(OrderDetail, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/order-detail/order-detail.jsx?taro&type=template&parse=PAGE&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/order-detail/order-detail.jsx?taro&type=template&parse=PAGE& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/order-detail/order-detail.wxml";

/***/ }),

/***/ "./src/pages/order-detail/order-detail.jsx":
/*!*************************************************!*\
  !*** ./src/pages/order-detail/order-detail.jsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _order_detail_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-detail.jsx?taro&type=template&parse=PAGE& */ "./src/pages/order-detail/order-detail.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _order_detail_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-detail.jsx?taro&type=script&parse=PAGE& */ "./src/pages/order-detail/order-detail.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _order_detail_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _order_detail_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/order-detail/order-detail.jsx?taro&type=script&parse=PAGE&":
/*!******************************************************************************!*\
  !*** ./src/pages/order-detail/order-detail.jsx?taro&type=script&parse=PAGE& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_detail_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./order-detail.jsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/order-detail/order-detail.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_detail_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_detail_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_detail_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_detail_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_detail_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/order-detail/order-detail.jsx?taro&type=template&parse=PAGE&":
/*!********************************************************************************!*\
  !*** ./src/pages/order-detail/order-detail.jsx?taro&type=template&parse=PAGE& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_detail_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./order-detail.jsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/order-detail/order-detail.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_detail_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_detail_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_detail_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_detail_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/order-detail/order-detail.module.styl":
/*!*********************************************************!*\
  !*** ./src/pages/order-detail/order-detail.module.styl ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"order-detail-module__container___2_Yss","addres_box":"order-detail-module__addres_box___2DrGf","icon":"order-detail-module__icon___3NrTW","transfee_box":"order-detail-module__transfee_box___3v1tx","label":"order-detail-module__label___1RJZb","red":"order-detail-module__red___oLwB8","order_info":"order-detail-module__order_info___3E8nu","product_box":"order-detail-module__product_box___1OlQ4","title":"order-detail-module__title___1XLPP","icon_shop":"order-detail-module__icon_shop___eL-U4","font":"order-detail-module__font___16lhS","status_box":"order-detail-module__status_box___1tio4","info_box":"order-detail-module__info_box___2wFFo","img":"order-detail-module__img___rdXzP","info_right":"order-detail-module__info_right___28pf7","item_line_container":"order-detail-module__item_line_container___2qtsB","item_line":"order-detail-module__item_line___1WtKI","info_title":"order-detail-module__info_title___28VUs","num":"order-detail-module__num___2irs4","recv":"order-detail-module__recv___38Pnu","second":"order-detail-module__second___hgElT","all_price":"order-detail-module__all_price___1BMx8","all_num":"order-detail-module__all_num___2z223","clock_box":"order-detail-module__clock_box___3zGtk","gray":"order-detail-module__gray___gOjXF","button_box":"order-detail-module__button_box___19Ea8","content":"order-detail-module__content___2_Qbj","rigth":"order-detail-module__rigth___WV05_","button":"order-detail-module__button___3IbzD","gray_button":"order-detail-module__gray_button___1YPK2","item":"order-detail-module__item___29THd","left":"order-detail-module__left___3BTA8","name_box":"order-detail-module__name_box___3eMvv","name":"order-detail-module__name___1QTsd","tel":"order-detail-module__tel___3sdsg","copy_box":"order-detail-module__copy_box___37ESg","red_back":"order-detail-module__red_back___2KEUg","status_line":"order-detail-module__status_line___3a-6x","desc":"order-detail-module__desc___3_EkQ","trans_box":"order-detail-module__trans_box___3qLrf","date":"order-detail-module__date___3lMig","back":"order-detail-module__back___QS4To","top_box":"order-detail-module__top_box___2SQtJ","top_inner":"order-detail-module__top_inner___3cAXF","go_back_icon":"order-detail-module__go_back_icon___3qPfN","scroll_box":"order-detail-module__scroll_box___3fIow"};

/***/ })

},[["./src/pages/order-detail/order-detail.jsx","runtime","taro","vendors","common"]]]);