(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/after-sales/after-sales"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/after-sales/after-sales.jsx?taro&type=script&parse=PAGE&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/after-sales/after-sales.jsx?taro&type=script&parse=PAGE& ***!
  \*************************************************************************************************************************************************************/
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
                              * @Update: 2020-03-02 11:54:29
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

var _afterSalesModule = __webpack_require__(/*! ./after-sales.module.styl */ "./src/pages/after-sales/after-sales.module.styl");

var _afterSalesModule2 = _interopRequireDefault(_afterSalesModule);

var _index5 = __webpack_require__(/*! ../../utils/index */ "./src/utils/index.js");

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Utils$appUtils = _index6.default.appUtils,
    getFileUrl = _Utils$appUtils.getFileUrl,
    formatPoint = _Utils$appUtils.formatPoint;

var AfterSales = (0, _index2.default)(_class = (_temp2 = _class2 = function (_Taro$Component) {
  _inherits(AfterSales, _Taro$Component);

  function AfterSales() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AfterSales);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AfterSales.__proto__ || Object.getPrototypeOf(AfterSales)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "anonymousState__temp5", "anonymousState__temp6", "anonymousState__temp7", "anonymousState__temp8", "$compid__136", "$compid__137", "$compid__138", "$compid__139", "$compid__140", "$compid__141", "$compid__142", "$compid__143", "$compid__144", "$compid__145", "$compid__146", "$compid__147", "$compid__148", "styles", "shopLevel", "type", "checkTuiType", "remarks", "checkReasonType", "amount", "item", "tuiModal", "tuiOption", "reasonModalOption", "reasonModal", "postFile", "maxAmount"], _this.tuiClick = function () {
      _this.setState({
        tuiModal: true
      });
    }, _this.handleClose = function () {
      _this.setState({
        tuiModal: false
      });
    }, _this.changetuiModal = function (v) {
      var reasonModalOption = [];
      if (v === 2) {
        reasonModalOption = [{ label: '七天无理由', value: '七天无理由' }, { label: '质量做工不好', value: '质量做工不好' }, { label: '商品描述不符', value: '商品描述不符' }, { label: '卖家发错货', value: '卖家发错货' }, { label: '其他', value: '其他' }];
      }
      if (v === 3) {
        reasonModalOption = [{ label: '少发漏发不足分量', value: '少发漏发不足分量' }, { label: '有明显破损补差', value: '有明显破损补差' }, { label: '其他', value: '其他' }];
      }
      _this.setState({
        checkTuiType: v,
        reasonModalOption: reasonModalOption,
        checkReasonType: null
        // tuiModal: false
      });
    }, _this.reasonClick = function () {
      _this.setState({
        reasonModal: true
      });
    }, _this.reasonModalClose = function () {
      _this.setState({
        reasonModal: false
      });
    }, _this.changereasonModal = function (v) {
      _this.setState({
        checkReasonType: v
        // reasonModal: false
      });
    }, _this.goResult = function () {
      // Taro.navigateTo({
      //   url: '/pages/sub-result/sub-result'
      // })
      var orderNo = _this.$router.params.orderNo;
      var _this$state = _this.state,
          checkTuiType = _this$state.checkTuiType,
          postFile = _this$state.postFile,
          checkReasonType = _this$state.checkReasonType,
          remarks = _this$state.remarks,
          item = _this$state.item,
          amount = _this$state.amount;
      //只有订单状态为1待发货 2已发货 3已完成的情况可以发起售后

      if (item.orderStatus !== 1 && item.orderStatus !== 2 && item.orderStatus !== 3) {
        _wechatUtils.message.error('该订单不支持发起售后');
        return false;
      } else if (item.settle === 1) {
        _wechatUtils.message.error('订单可结算，不支持售后');
        return false;
      }
      _index4.default.order.creatAfter({
        afterSaleType: checkTuiType,
        imgs: postFile.join(','),
        orderNo: orderNo,
        reason: checkReasonType,
        remarks: remarks,
        scmOrderNo: item.scmOrderNo,
        afterSaleAmount: amount
      }).then(function (res) {
        if (res) {
          _taroWeapp2.default.navigateTo({
            url: '/pages/sub-result/sub-result'
          });
        }
      });
    }, _this.removeWx = function (index) {
      var postFile = _this.state.postFile;

      postFile.splice(index, 1);
      _this.setState({
        postFile: postFile
      });
    }, _this.successWx = function (url) {
      var postFile = _this.state.postFile;

      postFile.push(url);
      _this.setState({
        postFile: postFile
      });
    }, _this.queryDetail = function (orderNo) {
      _index4.default.order.queryDetail({
        orderNo: orderNo
      }).then(function (res) {
        if (res) {
          res.propsValue = _this.getProps(res.newPropsValue);
          var type = Number(res.orderStatus) === 2 || Number(res.orderStatus) === 3 ? 2 : 1;
          var tuiOption = type == 2 ? [{ label: '退货退款', value: 2 }, { label: '申请赔付', value: 3 }] : [{ label: '仅退款', value: 1 }];
          var reasonModalOption = type === 2 ? [{ label: '七天无理由', value: '七天无理由' }, { label: '质量做工不好', value: '质量做工不好' }, { label: '商品描述不符', value: '商品描述不符' }, { label: '卖家发错货', value: '卖家发错货' }, { label: '其他', value: '其他' }] : [{ label: '我不想要了', value: '我不想要了' }, { label: '未按约定时间发货', value: '未按约定时间发货' }, { label: '快递无跟踪记录', value: '快递无跟踪记录' }, { label: '其他', value: '其他' }];

          _this.setState({
            item: res,
            amount: formatPoint(res.agentUnitPrice * res.count),
            tuiOption: tuiOption, //售后选项
            type: Number(type),
            checkTuiType: Number(type), //售后选中类型
            reasonModalOption: reasonModalOption
          }, function () {
            return _this.checkClaimAmount();
          });
        }
      });
    }, _this.goIndex = function () {
      var companyId = _this.getCompanyId();

      _taroWeapp2.default.switchTab({
        url: "/pages/index/index?companyId=" + companyId
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
    }, _this.checkClaimAmount = function () {
      var orderNo = _this.$router.params.orderNo;
      var amount = _this.state.amount;

      _index4.default.order.checkClaimAmount({ orderNo: orderNo }).then(function (res) {
        if (res !== null) {
          _this.setState({
            maxAmount: res,
            amount: amount > res ? res : amount
          });
        }
      });
    }, _this.setAmount = function (e) {
      // const { value } = e.detail
      var value = e;
      var maxAmount = _this.state.maxAmount;

      var s = value.replace(/[^\d.]/g, ''); //去除小数点和数字以外
      s = s.replace(/\.{2,}/g, ".").replace(".", "$#$").replace(/\./g, "").replace("$#$", "."); //只留一个小数点
      s = s.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3'); //最多两位小数
      s = s > maxAmount ? maxAmount : s;
      _this.setState({
        amount: s
      });
      return s;
    }, _this.config = {
      navigationBarTitleText: '申请售后',
      navigationBarBackgroundColor: '#F7F8FA'
    }, _this.customComponents = ["Ellipsis", "AtList", "AtListItem", "AtInput", "AtTextarea", "Upload", "AtFloatLayout", "AtRadio"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AfterSales, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(AfterSales.prototype.__proto__ || Object.getPrototypeOf(AfterSales.prototype), "_constructor", this).call(this, props);

      this.state = {
        // 界面/组件 初始数据
        tuiModal: false,
        tuiOption: [],
        checkTuiType: '', //售后类型
        reasonModalOption: [{ label: '质量问题', value: 1 }, { label: '实物与图片不符', value: 2 }, { label: '七天无理由', value: 3 }, { label: '其他', value: 4 }],
        reasonModal: false,
        checkReasonType: null,
        postFile: [],
        item: {},
        remarks: '',
        amount: '',
        maxAmount: 0
      };
      _index5.appUtils.delay(this, ['goResult']);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
    // 赔付最大金额

  }, {
    key: "componentWillReact",
    value: function componentWillReact() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var orderNo = this.$router.params.orderNo;

      this.queryDetail(orderNo);
      // const { tuiOption } = this.state
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__136"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__136 = _genCompid2[0],
          $compid__136 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__137"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__137 = _genCompid4[0],
          $compid__137 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__138"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__138 = _genCompid6[0],
          $compid__138 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__139"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__139 = _genCompid8[0],
          $compid__139 = _genCompid8[1];

      var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "$compid__140"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__140 = _genCompid10[0],
          $compid__140 = _genCompid10[1];

      var _genCompid11 = (0, _taroWeapp.genCompid)(__prefix + "$compid__141"),
          _genCompid12 = _slicedToArray(_genCompid11, 2),
          $prevCompid__141 = _genCompid12[0],
          $compid__141 = _genCompid12[1];

      var _genCompid13 = (0, _taroWeapp.genCompid)(__prefix + "$compid__142"),
          _genCompid14 = _slicedToArray(_genCompid13, 2),
          $prevCompid__142 = _genCompid14[0],
          $compid__142 = _genCompid14[1];

      var _genCompid15 = (0, _taroWeapp.genCompid)(__prefix + "$compid__143"),
          _genCompid16 = _slicedToArray(_genCompid15, 2),
          $prevCompid__143 = _genCompid16[0],
          $compid__143 = _genCompid16[1];

      var _genCompid17 = (0, _taroWeapp.genCompid)(__prefix + "$compid__144"),
          _genCompid18 = _slicedToArray(_genCompid17, 2),
          $prevCompid__144 = _genCompid18[0],
          $compid__144 = _genCompid18[1];

      var _genCompid19 = (0, _taroWeapp.genCompid)(__prefix + "$compid__145"),
          _genCompid20 = _slicedToArray(_genCompid19, 2),
          $prevCompid__145 = _genCompid20[0],
          $compid__145 = _genCompid20[1];

      var _genCompid21 = (0, _taroWeapp.genCompid)(__prefix + "$compid__146"),
          _genCompid22 = _slicedToArray(_genCompid21, 2),
          $prevCompid__146 = _genCompid22[0],
          $compid__146 = _genCompid22[1];

      var _genCompid23 = (0, _taroWeapp.genCompid)(__prefix + "$compid__147"),
          _genCompid24 = _slicedToArray(_genCompid23, 2),
          $prevCompid__147 = _genCompid24[0],
          $compid__147 = _genCompid24[1];

      var _genCompid25 = (0, _taroWeapp.genCompid)(__prefix + "$compid__148"),
          _genCompid26 = _slicedToArray(_genCompid25, 2),
          $prevCompid__148 = _genCompid26[0],
          $compid__148 = _genCompid26[1];

      var _state = this.__state,
          tuiModal = _state.tuiModal,
          tuiOption = _state.tuiOption,
          checkTuiType = _state.checkTuiType,
          reasonModal = _state.reasonModal,
          checkReasonType = _state.checkReasonType,
          reasonModalOption = _state.reasonModalOption,
          files = _state.files,
          item = _state.item,
          remarks = _state.remarks,
          type = _state.type,
          amount = _state.amount,
          maxAmount = _state.maxAmount;
      var shopLevel = this.$router.params.shopLevel;

      shopLevel = Number(shopLevel);
      var anonymousState__temp = _taroWeapp2.default.getStorageSync('userInfo').shopName;
      var anonymousState__temp2 = getFileUrl(item.skuImg);
      var anonymousState__temp3 = formatPoint(item.agentUnitPrice * item.count, 4);
      var anonymousState__temp4 = type === 1 ? tuiOption[tuiOption.findIndex(function (r) {
        return r.value === checkTuiType;
      })].label || '请选择类型' : null;
      var anonymousState__temp5 = type === 2 ? "" + checkTuiType && tuiOption[tuiOption.findIndex(function (r) {
        return r.value === checkTuiType;
      })].label || '请选择类型' : null;
      var anonymousState__temp6 = checkTuiType !== 3 ? "\uFFE5" + amount : null;
      var anonymousState__temp7 = checkReasonType ? reasonModalOption[reasonModalOption.findIndex(function (r) {
        return r.value === checkReasonType;
      })].label : '请选择原因';

      this.anonymousFunc0 = function (e) {
        _this2.setState({ remarks: e });
      };

      this.anonymousFunc1 = function () {
        return _this2.setState({ mask: true });
      };

      var anonymousState__temp8 = (type === 1 ? '退款' : '售后') + " \u7C7B\u578B";
      _taroWeapp.propsManager.set({
        "count": 1
      }, $compid__136, $prevCompid__136);
      type === 1 && _taroWeapp.propsManager.set({
        "title": '退款类型',
        "extraText": anonymousState__temp4
      }, $compid__137, $prevCompid__137);
      type === 2 && _taroWeapp.propsManager.set({
        "title": '售后类型',
        "onClick": this.tuiClick,
        "arrow": "down",
        "extraText": anonymousState__temp5
      }, $compid__138, $prevCompid__138);
      checkTuiType !== 3 && _taroWeapp.propsManager.set({
        "title": "\u9000\u6B3E\u91D1\u989D",
        "extraText": anonymousState__temp6
      }, $compid__139, $prevCompid__139);
      checkTuiType === 3 && _taroWeapp.propsManager.set({
        "title": "\u9000\u6B3E\u91D1\u989D"
      }, $compid__140, $prevCompid__140);
      checkTuiType === 3 && _taroWeapp.propsManager.set({
        "value": amount,
        "onChange": this.setAmount,
        "onBlur": this.getAmount
      }, $compid__141, $prevCompid__141);
      _taroWeapp.propsManager.set({
        "title": "\u9000\u6B3E\u539F\u56E0",
        "onClick": this.reasonClick,
        "arrow": "down",
        "extraText": anonymousState__temp7
      }, $compid__142, $prevCompid__142);
      _taroWeapp.propsManager.set({
        "value": remarks,
        "onChange": this.anonymousFunc0,
        "maxLength": 200,
        "placeholder": ""
      }, $compid__143, $prevCompid__143);
      type === 2 && _taroWeapp.propsManager.set({
        "onRemove": this.removeWx,
        "onSuccess": this.successWx,
        "onClick": this.anonymousFunc1,
        "size": 5
      }, $compid__144, $prevCompid__144);
      _taroWeapp.propsManager.set({
        "isOpened": tuiModal,
        "title": anonymousState__temp8,
        "onClose": this.handleClose
      }, $compid__145, $prevCompid__145);
      _taroWeapp.propsManager.set({
        "options": tuiOption,
        "value": checkTuiType,
        "onClick": this.changetuiModal
      }, $compid__146, $prevCompid__146);
      _taroWeapp.propsManager.set({
        "isOpened": reasonModal,
        "title": "\u9000\u6B3E\u539F\u56E0",
        "onClose": this.reasonModalClose
      }, $compid__147, $prevCompid__147);
      _taroWeapp.propsManager.set({
        "options": reasonModalOption,
        "value": checkReasonType,
        "onClick": this.changereasonModal
      }, $compid__148, $prevCompid__148);
      this.$$refs.pushRefs([{
        type: "component",
        id: "hizzz",
        refName: "",
        fn: function fn(node) {
          return _this2.wxup = node;
        }
      }]);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        anonymousState__temp5: anonymousState__temp5,
        anonymousState__temp6: anonymousState__temp6,
        anonymousState__temp7: anonymousState__temp7,
        anonymousState__temp8: anonymousState__temp8,
        $compid__136: $compid__136,
        $compid__137: $compid__137,
        $compid__138: $compid__138,
        $compid__139: $compid__139,
        $compid__140: $compid__140,
        $compid__141: $compid__141,
        $compid__142: $compid__142,
        $compid__143: $compid__143,
        $compid__144: $compid__144,
        $compid__145: $compid__145,
        $compid__146: $compid__146,
        $compid__147: $compid__147,
        $compid__148: $compid__148,
        styles: _afterSalesModule2.default,
        shopLevel: shopLevel,
        type: type
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

  return AfterSales;
}(_taroWeapp2.default.Component), _class2.$$events = ["goIndex", "goResult", "handleClose", "reasonModalClose"], _class2.$$componentPath = "pages/after-sales/after-sales", _temp2)) || _class;

exports.default = AfterSales;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(AfterSales, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/after-sales/after-sales.jsx?taro&type=template&parse=PAGE&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/after-sales/after-sales.jsx?taro&type=template&parse=PAGE& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/after-sales/after-sales.wxml";

/***/ }),

/***/ "./src/pages/after-sales/after-sales.jsx":
/*!***********************************************!*\
  !*** ./src/pages/after-sales/after-sales.jsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _after_sales_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./after-sales.jsx?taro&type=template&parse=PAGE& */ "./src/pages/after-sales/after-sales.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _after_sales_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./after-sales.jsx?taro&type=script&parse=PAGE& */ "./src/pages/after-sales/after-sales.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _after_sales_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _after_sales_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/after-sales/after-sales.jsx?taro&type=script&parse=PAGE&":
/*!****************************************************************************!*\
  !*** ./src/pages/after-sales/after-sales.jsx?taro&type=script&parse=PAGE& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_after_sales_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./after-sales.jsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/after-sales/after-sales.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_after_sales_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_after_sales_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_after_sales_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_after_sales_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_after_sales_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/after-sales/after-sales.jsx?taro&type=template&parse=PAGE&":
/*!******************************************************************************!*\
  !*** ./src/pages/after-sales/after-sales.jsx?taro&type=template&parse=PAGE& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_after_sales_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./after-sales.jsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/after-sales/after-sales.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_after_sales_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_after_sales_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_after_sales_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_after_sales_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/after-sales/after-sales.module.styl":
/*!*******************************************************!*\
  !*** ./src/pages/after-sales/after-sales.module.styl ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"content":"after-sales-module__content___3KWuc","product_box":"after-sales-module__product_box___3-_Rd","title":"after-sales-module__title___34bM6","icon_shop":"after-sales-module__icon_shop___87FbL","font":"after-sales-module__font___1WWVv","status_box":"after-sales-module__status_box___y_PMk","red":"after-sales-module__red___3_qSg","info_box":"after-sales-module__info_box___27xA9","img":"after-sales-module__img___e32kT","info_right":"after-sales-module__info_right___ewCAP","income_container":"after-sales-module__income_container___3mcVZ","item_line":"after-sales-module__item_line___2M2b7","info_title":"after-sales-module__info_title___3dF7G","num":"after-sales-module__num___18kKi","recv":"after-sales-module__recv___1XDto","second":"after-sales-module__second___SIdmH","all_price":"after-sales-module__all_price___ldyBx","all_num":"after-sales-module__all_num___36hPn","transfee_box":"after-sales-module__transfee_box___14m71","form_box":"after-sales-module__form_box___2kNOA","photo_box":"after-sales-module__photo_box___1tZTX","lable_font":"after-sales-module__lable_font___1U7de","bottom_box":"after-sales-module__bottom_box___2t67O","button":"after-sales-module__button___3172u","gray_button":"after-sales-module__gray_button___2VzXr","sure_button":"after-sales-module__sure_button___2uh1v","line_box":"after-sales-module__line_box___Mhgfu","label":"after-sales-module__label___e_ljA","right":"after-sales-module__right___3CmCg","input_box":"after-sales-module__input_box___bVrne","inner":"after-sales-module__inner___3XBE3"};

/***/ })

},[["./src/pages/after-sales/after-sales.jsx","runtime","taro","vendors","common"]]]);