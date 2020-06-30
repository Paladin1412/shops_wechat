(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/aftersales-detail/aftersales-detail"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/aftersales-detail/aftersales-detail.jsx?taro&type=script&parse=PAGE&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/aftersales-detail/aftersales-detail.jsx?taro&type=script&parse=PAGE& ***!
  \*************************************************************************************************************************************************************************/
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
                              * @Author: limin.zhang
                              * @Email: limin.zhang@jdxiaokang.com
                              * @Update: 2020-03-02 11:54:29
                              * @Description: 售后进度
                              */


var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index = __webpack_require__(/*! ../../components/with-page/index */ "./src/components/with-page/index.jsx");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../../model/index */ "./src/model/index.js");

var _index4 = _interopRequireDefault(_index3);

var _wechatUtils = __webpack_require__(/*! @jxkang/wechat-utils */ "./node_modules/@jxkang/wechat-utils/dist/index.js");

var _aftersalesDetailModule = __webpack_require__(/*! ./aftersales-detail.module.styl */ "./src/pages/aftersales-detail/aftersales-detail.module.styl");

var _aftersalesDetailModule2 = _interopRequireDefault(_aftersalesDetailModule);

var _index5 = __webpack_require__(/*! ../../utils/index */ "./src/utils/index.js");

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import AfterSales from '../after-sales/after-sales';

var _Utils$appUtils = _index6.default.appUtils,
    getFileUrl = _Utils$appUtils.getFileUrl,
    formatPoint = _Utils$appUtils.formatPoint;

var AftersalesDetail = (0, _index2.default)(_class = (_temp2 = _class2 = function (_Taro$Component) {
  _inherits(AftersalesDetail, _Taro$Component);

  function AftersalesDetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AftersalesDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AftersalesDetail.__proto__ || Object.getPrototypeOf(AftersalesDetail)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "anonymousState__temp5", "anonymousState__temp6", "anonymousState__temp7", "anonymousState__temp8", "anonymousState__temp9", "anonymousState__temp10", "loopArray63", "loopArray64", "$compid__151", "$compid__152", "$compid__153", "$compid__154", "styles", "afterInfo", "stateList", "newObj", "imgs", "company", "expressNumber", "telNo", "showLogisticsPopup", "actionType", "actionDesc", "sureModal", "kefuVisible"], _this.logisticsInfoClick = function () {
      _this.setState({
        showLogisticsPopup: true,
        kefuVisible: false
      });
    }, _this.handleClose = function () {
      _this.setState({
        showLogisticsPopup: false,
        sureModal: false,
        kefuVisible: false
      });
    }, _this.getExpressCompany = function (value) {
      _this.setState({
        company: value.detail.value
      });
    }, _this.getExpressNumber = function (value) {
      _this.setState({
        expressNumber: value.detail.value
      });
    }, _this.handleExpressInfo = function (value) {
      _this.setState({
        showLogisticsPopup: false
      });
    }, _this.setaction = function () {
      var actionType = _this.state.actionType;
      // if (actionType === '删除') {
      //   this.deleteOrder()
      // } else if (actionType === '收货') {
      //   this.receivedOrder()
      // } else

      if (actionType === '取消') {
        _this.cancelAfter();
      }
    }, _this.cancelAfter = function () {
      var afterSaleNo = _this.$router.params.afterSaleNo;

      _index4.default.order.cancelAfter({ afterSaleNo: afterSaleNo }).then(function (res) {
        _this.setState({
          sureModal: false
        });
        if (res) {
          _wechatUtils.message.success("已取消");
          _taroWeapp2.default.navigateTo({
            url: "/pages/my-order/my-order?t=" + new Date().getTime() + "&isOrder=2"
          });
        }
      });
    }, _this.afterDetail = function () {
      var afterSaleNo = _this.$router.params.afterSaleNo;

      var that = _this;
      _index4.default.order.afterDetail(afterSaleNo).then(function (res) {
        if (res) {
          var imgs = (res.imgs || '').split(',');
          // res.reason = Number(res.reason)
          that.setState({
            afterInfo: res,
            imgs: imgs
          }, function () {
            var afterInfo = that.state.afterInfo;

            var stateList = [{
              text: '申请售后',
              isFinish: false
            }, {
              text: '店主审核',
              isFinish: false
            }, {
              text: '商家收货',
              isFinish: false
            }, {
              text: '售后完成',
              isFinish: false
            }];
            if (res.afterSaleType === 3) {
              stateList = [{
                text: '申请售后',
                isFinish: false
              }, {
                text: '店主审核',
                isFinish: false
              }, {
                text: '售后完成',
                isFinish: false
              }];
            }
            if (afterInfo.afterSaleStatus === 98) {
              stateList = [{
                text: '申请售后',
                isFinish: false
              }, {
                text: '店主审核',
                isFinish: false
              }, {
                text: '售后驳回',
                isFinish: false
              }];
            }
            var newObj = that.afterStatus(afterInfo.afterSaleStatus);
            _this.setState({
              newObj: newObj,
              stateList: stateList
            });
          });
        }
      });
    }, _this.afterStatus = function (status) {
      var title = '售后中';
      var desc = '您的售后申请已提交，正在等待审核...';
      var iconName = 'iconshouhou';
      var currentStatus = Number(status);
      if (currentStatus === 98) {
        title = '商家驳回';
        desc = '商家已驳回申请,请与商家沟通';
        iconName = 'iconzhifushibai';
      } else if (21 <= currentStatus && currentStatus < 52) {
        title = '商家审核通过';
        desc = '请保持物品完好、无破损、根据商家提供的地址联系快递退回并录入快递信息';
        iconName = 'iconkaidianchenggong';
      } else if (52 <= currentStatus && currentStatus < 53) {
        title = '商家确认收货';
        desc = '等待商家收货后，售后即可完成';
        iconName = 'iconkaidianchenggong';
      } else if (currentStatus === 99 || currentStatus === 53) {
        title = '售后成功';
        desc = '您的售后订单已成功，退款金已原路退回';
        iconName = 'iconkaidianchenggong';
      } else if (currentStatus === 97) {
        title = '售后已取消';
        desc = '您的售后订单已取消';
        iconName = 'iconkaidianchenggong';
      }
      return { title: title, desc: desc, iconName: iconName };
    }, _this.sendAfter = function (afterSaleNo) {
      var _this$state = _this.state,
          company = _this$state.company,
          expressNumber = _this$state.expressNumber;

      _index4.default.order.sendAfter({
        orderAfterNo: afterSaleNo,
        shippingCompany: company,
        shippingId: expressNumber
      }).then(function (res) {
        if (res) {
          _this.setState({
            showLogisticsPopup: false
          });
          _taroWeapp2.default.navigateTo({
            url: "/pages/my-order/my-order?isOrder=2"
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
    }, _this.tel = function () {
      var telNo = _this.state.telNo;

      _taroWeapp2.default.makePhoneCall({
        phoneNumber: telNo
      });
    }, _this.config = {
      navigationBarTitleText: '查看售后',
      navigationBarBackgroundColor: "#F9482E", //头部背景色
      navigationBarTextStyle: "white", //头部字体颜色，
      enablePullDownRefresh: false,
      disableScroll: true
    }, _this.customComponents = ["Ellipsis", "AtFloatLayout", "AtModal", "AtModalContent"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AftersalesDetail, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(AftersalesDetail.prototype.__proto__ || Object.getPrototypeOf(AftersalesDetail.prototype), "_constructor", this).call(this, props);

      this.state = {
        // 界面/组件 初始数据
        showLogisticsPopup: false,
        stateList: [],
        imgs: [],
        afterInfo: {},
        newObj: {},
        actionType: '',
        actionDesc: '',
        sureModal: false,
        kefuVisible: false,
        telNo: '0571-88670307'
      };
      _index5.appUtils.delay(this, ['sendAfter']);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentWillReact",
    value: function componentWillReact() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.afterDetail();
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__151"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__151 = _genCompid2[0],
          $compid__151 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__152"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__152 = _genCompid4[0],
          $compid__152 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__153"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__153 = _genCompid6[0],
          $compid__153 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__154"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__154 = _genCompid8[0],
          $compid__154 = _genCompid8[1];

      var _state = this.__state,
          stateList = _state.stateList,
          imgs = _state.imgs,
          showLogisticsPopup = _state.showLogisticsPopup,
          afterInfo = _state.afterInfo,
          expressNumber = _state.expressNumber,
          company = _state.company,
          newObj = _state.newObj,
          actionType = _state.actionType,
          actionDesc = _state.actionDesc,
          sureModal = _state.sureModal,
          kefuVisible = _state.kefuVisible,
          telNo = _state.telNo;


      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)({ fontSize: '18px' });
      var anonymousState__temp2 = _taroWeapp2.default.getStorageSync('userInfo').shopName;
      var anonymousState__temp3 = getFileUrl(afterInfo.skuImgs);
      var anonymousState__temp4 = this.getProps(afterInfo.propsValue);
      var anonymousState__temp5 = formatPoint(afterInfo.unitPrice * afterInfo.afterSaleCount, 4);
      var anonymousState__temp6 = Number(afterInfo.reason) === 1 ? '质量问题' : '';
      var anonymousState__temp7 = Number(afterInfo.reason) === 2 ? '实物与图片不符' : '';
      var anonymousState__temp8 = Number(afterInfo.reason) === 3 ? '七天无理由' : '';
      var anonymousState__temp9 = Number(afterInfo.reason) === 4 ? '其他' : '';
      var anonymousState__temp10 = !Number(afterInfo.reason) ? afterInfo.reason : '';

      this.anonymousFunc0 = function () {
        return _this2.setState({ kefuVisible: true });
      };

      this.anonymousFunc1 = function () {
        return _this2.setState({
          sureModal: true,
          kefuVisible: false,
          showLogisticsPopup: false,
          actionType: '取消',
          actionDesc: '您仅能主动取消一次，取消后将不能再主动取消，且超出保障期无法再次发起售后'
        });
      };

      this.anonymousFunc2 = function () {
        return _this2.sendAfter(afterInfo.afterSaleNo);
      };

      this.anonymousFunc3 = function () {
        return _this2.setState({ sureModal: false, kefuVisible: false, showLogisticsPopup: false });
      };

      this.anonymousFunc4 = function () {
        return _this2.setState({ sureModal: false, kefuVisible: false, showLogisticsPopup: false });
      };

      this.anonymousFunc5 = function () {
        return _this2.setaction();
      };

      this.anonymousFunc6 = function () {
        return _this2.setState({ sureModal: false, kefuVisible: false, showLogisticsPopup: false });
      };

      var loopArray63 = afterInfo.afterSaleType === 2 || afterInfo.afterSaleType === 3 ? stateList.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var isFinish = item.$original.isFinish;
        // 1、2申请售后   21、23店主审核 52买家发送物流 53商家收货 99售后成功 98商家驳回申请
        if (index === 0) {
          isFinish = true;
        } else if (index === 1 && afterInfo.afterSaleStatus >= 21) {
          isFinish = true;
        } else if (index === 2 && afterInfo.afterSaleStatus >= 52) {
          isFinish = true;
        } else if (index === 3 && afterInfo.afterSaleStatus >= 53) {
          isFinish = true;
        }
        return {
          isFinish: isFinish,
          $original: item.$original
        };
      }) : [];
      var loopArray64 = afterInfo.afterSaleType === 2 || afterInfo.afterSaleType === 3 ? imgs.map(function (item, _anonIdx) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var $loopState__temp12 = afterInfo.afterSaleType === 2 || afterInfo.afterSaleType === 3 ? getFileUrl(item.$original) : null;
        return {
          $loopState__temp12: $loopState__temp12,
          $original: item.$original
        };
      }) : [];
      _taroWeapp.propsManager.set({
        "count": 1
      }, $compid__151, $prevCompid__151);
      _taroWeapp.propsManager.set({
        "isOpened": showLogisticsPopup,
        "onClose": this.handleClose
      }, $compid__152, $prevCompid__152);
      _taroWeapp.propsManager.set({
        "isOpened": sureModal,
        "title": false,
        "cancelText": "\u518D\u60F3\u60F3",
        "confirmText": "\u786E\u5B9A",
        "onClose": this.anonymousFunc3,
        "onCancel": this.anonymousFunc4,
        "onConfirm": this.anonymousFunc5,
        "content": actionType === '取消' && actionDesc
      }, $compid__153, $prevCompid__153);
      _taroWeapp.propsManager.set({
        "isOpened": kefuVisible,
        "onClose": this.anonymousFunc6
      }, $compid__154, $prevCompid__154);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        anonymousState__temp5: anonymousState__temp5,
        anonymousState__temp6: anonymousState__temp6,
        anonymousState__temp7: anonymousState__temp7,
        anonymousState__temp8: anonymousState__temp8,
        anonymousState__temp9: anonymousState__temp9,
        anonymousState__temp10: anonymousState__temp10,
        loopArray63: loopArray63,
        loopArray64: loopArray64,
        $compid__151: $compid__151,
        $compid__152: $compid__152,
        $compid__153: $compid__153,
        $compid__154: $compid__154,
        styles: _aftersalesDetailModule2.default,
        company: company,
        expressNumber: expressNumber
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
  }]);

  return AftersalesDetail;
}(_taroWeapp2.default.Component), _class2.$$events = ["logisticsInfoClick", "anonymousFunc0", "anonymousFunc1", "handleClose", "getExpressCompany", "getExpressNumber", "anonymousFunc2", "tel"], _class2.$$componentPath = "pages/aftersales-detail/aftersales-detail", _temp2)) || _class;

exports.default = AftersalesDetail;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(AftersalesDetail, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/aftersales-detail/aftersales-detail.jsx?taro&type=template&parse=PAGE&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/aftersales-detail/aftersales-detail.jsx?taro&type=template&parse=PAGE& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/aftersales-detail/aftersales-detail.wxml";

/***/ }),

/***/ "./src/pages/aftersales-detail/aftersales-detail.jsx":
/*!***********************************************************!*\
  !*** ./src/pages/aftersales-detail/aftersales-detail.jsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _aftersales_detail_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aftersales-detail.jsx?taro&type=template&parse=PAGE& */ "./src/pages/aftersales-detail/aftersales-detail.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _aftersales_detail_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aftersales-detail.jsx?taro&type=script&parse=PAGE& */ "./src/pages/aftersales-detail/aftersales-detail.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _aftersales_detail_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _aftersales_detail_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/aftersales-detail/aftersales-detail.jsx?taro&type=script&parse=PAGE&":
/*!****************************************************************************************!*\
  !*** ./src/pages/aftersales-detail/aftersales-detail.jsx?taro&type=script&parse=PAGE& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_aftersales_detail_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./aftersales-detail.jsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/aftersales-detail/aftersales-detail.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_aftersales_detail_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_aftersales_detail_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_aftersales_detail_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_aftersales_detail_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_aftersales_detail_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/aftersales-detail/aftersales-detail.jsx?taro&type=template&parse=PAGE&":
/*!******************************************************************************************!*\
  !*** ./src/pages/aftersales-detail/aftersales-detail.jsx?taro&type=template&parse=PAGE& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_aftersales_detail_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./aftersales-detail.jsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/aftersales-detail/aftersales-detail.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_aftersales_detail_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_aftersales_detail_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_aftersales_detail_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_aftersales_detail_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/aftersales-detail/aftersales-detail.module.styl":
/*!*******************************************************************!*\
  !*** ./src/pages/aftersales-detail/aftersales-detail.module.styl ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"content":"aftersales-detail-module__content___3UVLq","header":"aftersales-detail-module__header___1dN91","header_title":"aftersales-detail-module__header_title___oSrwE","header_icon":"aftersales-detail-module__header_icon___3yTIi","header_content":"aftersales-detail-module__header_content___3RRl7","body":"aftersales-detail-module__body___23VnJ","scroll_content":"aftersales-detail-module__scroll_content___2YPTm","info_box":"aftersales-detail-module__info_box___38key","progress_bar":"aftersales-detail-module__progress_bar___1R6V0","state_item":"aftersales-detail-module__state_item___1XPeF","state_next":"aftersales-detail-module__state_next___1kHdh","state_item_large":"aftersales-detail-module__state_item_large___k75-2","state_info":"aftersales-detail-module__state_info___3lRoK","state_num":"aftersales-detail-module__state_num___LTV8H","finish_num":"aftersales-detail-module__finish_num___1HwUn","state_text":"aftersales-detail-module__state_text___3p9zX","finish_text":"aftersales-detail-module__finish_text___2jFdo","next":"aftersales-detail-module__next___1tj2o","refund_item":"aftersales-detail-module__refund_item___1sgRE","return_item":"aftersales-detail-module__return_item___3mfYX","return_title":"aftersales-detail-module__return_title___1NOpB","refund_title":"aftersales-detail-module__refund_title___37aLu","refund_remarks":"aftersales-detail-module__refund_remarks___2q-Mm","return_remarks":"aftersales-detail-module__return_remarks___onNYE","refund_proof":"aftersales-detail-module__refund_proof___2DKZX","title":"aftersales-detail-module__title___3cPTO","proof_img":"aftersales-detail-module__proof_img___1ncor","img":"aftersales-detail-module__img___2EhcB","noborder_bottom":"aftersales-detail-module__noborder_bottom___1Psei","return":"aftersales-detail-module__return___KipsS","button_box":"aftersales-detail-module__button_box___2sujm","button":"aftersales-detail-module__button___3Orsw","popup_header":"aftersales-detail-module__popup_header___1QvsC","close":"aftersales-detail-module__close___3AN8J","popup_body":"aftersales-detail-module__popup_body___1Dnj4","xrequired":"aftersales-detail-module__xrequired___3geeS","item":"aftersales-detail-module__item___1M3lR","input":"aftersales-detail-module__input___28-Y1","popup_button":"aftersales-detail-module__popup_button___2ZFyy","btn":"aftersales-detail-module__btn___3Co4A","gray_btn":"aftersales-detail-module__gray_btn___tGJKn","red":"aftersales-detail-module__red___2GEPy","info_box_title":"aftersales-detail-module__info_box_title___3HKWf","back":"aftersales-detail-module__back___2StZi","product_box":"aftersales-detail-module__product_box___3O5kp","font":"aftersales-detail-module__font___jDnx0","status_box":"aftersales-detail-module__status_box___3sYk4","info_right":"aftersales-detail-module__info_right___2Zc4e","item_line":"aftersales-detail-module__item_line___2Md43","info_title":"aftersales-detail-module__info_title___2bDL2","num":"aftersales-detail-module__num___2tOqj","recv":"aftersales-detail-module__recv___5nZR9","second":"aftersales-detail-module__second___27-vm","all_price":"aftersales-detail-module__all_price___2ZngM","all_num":"aftersales-detail-module__all_num____NYrY","last_button":"aftersales-detail-module__last_button___3kh9O","icon_phone":"aftersales-detail-module__icon_phone___3DdxD","red_button":"aftersales-detail-module__red_button___rKZZU","kefu_box":"aftersales-detail-module__kefu_box___wiuGI"};

/***/ })

},[["./src/pages/aftersales-detail/aftersales-detail.jsx","runtime","taro","vendors","common"]]]);