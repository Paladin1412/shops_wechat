(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/my-order/my-order"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/my-order/my-order.jsx?taro&type=script&parse=PAGE&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/my-order/my-order.jsx?taro&type=script&parse=PAGE& ***!
  \*******************************************************************************************************************************************************/
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
                              * @Update: 2020-02-27 10:09:23
                              * @Description: true
                              */


var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _wechatUtils = __webpack_require__(/*! @jxkang/wechat-utils */ "./node_modules/@jxkang/wechat-utils/dist/index.js");

var _index = __webpack_require__(/*! ../../components/with-page/index */ "./src/components/with-page/index.jsx");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../../utils/index */ "./src/utils/index.js");

var _index4 = __webpack_require__(/*! ../../model/index */ "./src/model/index.js");

var _index5 = _interopRequireDefault(_index4);

var _myOrderModule = __webpack_require__(/*! ./my-order.module.styl */ "./src/pages/my-order/my-order.module.styl");

var _myOrderModule2 = _interopRequireDefault(_myOrderModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getFileUrl = _index3.appUtils.getFileUrl,
    formatPoint = _index3.appUtils.formatPoint,
    getOrderStatus = _index3.appUtils.getOrderStatus,
    getAfterStatus = _index3.appUtils.getAfterStatus;

var MyOrder = (0, _index2.default)(_class = (_temp2 = _class2 = function (_Taro$Component) {
  _inherits(MyOrder, _Taro$Component);

  function MyOrder() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MyOrder);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MyOrder.__proto__ || Object.getPrototypeOf(MyOrder)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp5", "anonymousState__temp6", "anonymousState__temp7", "loopArray55", "loopArray56", "loopArray57", "$compid__120", "$compid__121", "$compid__122", "$compid__123", "styles", "isOrder", "isSearchResult", "shopLevel", "buyType", "buyList", "isShow", "list", "type", "tabList", "afterTab", "isLoaded", "error", "hasMore", "isEmpty", "screenHeight", "pageNum", "sureModal", "checkNo", "actionType", "actionDesc", "afterSaleNo"], _this.getData = function (_ref2) {
      var _ref2$pageNum = _ref2.pageNum,
          pageNum = _ref2$pageNum === undefined ? 1 : _ref2$pageNum,
          _ref2$pageSize = _ref2.pageSize,
          pageSize = _ref2$pageSize === undefined ? 4 : _ref2$pageSize,
          callback = _ref2.callback;
      var _this$state = _this.state,
          buyType = _this$state.buyType,
          type = _this$state.type,
          list = _this$state.list,
          tabList = _this$state.tabList,
          isOrder = _this$state.isOrder;

      var orderStatus = type === 0 ? '' : tabList[type].type;
      var query = {};
      if (type === 6) {
        query = {
          pageNum: pageNum,
          pageSize: pageSize,
          queryAfterSale: type === 6,
          invite: buyType === 1
        };
      } else {
        query = {
          pageNum: pageNum,
          pageSize: pageSize,
          orderStatus: orderStatus,
          invite: buyType === 1
        };
      }
      if (isOrder === 2) {
        query = {
          pageNum: pageNum,
          pageSize: pageSize,
          status: type
        };
      }
      var m = isOrder === 2 ? _index5.default.order.afterList(query) : _index5.default.order.queryList(query);
      m.then(function (res) {
        if (res) {
          var l = list.concat(res.list);
          _this.setState({
            isLoaded: true,
            isShow: true,
            list: l,
            hasMore: res.hasNextPage,
            pageNum: pageNum,
            isEmpty: l.length <= 0
          }, function () {
            if (callback) {
              callback();
            }
          });
        }
      });
    }, _this.getSearchData = function (_ref3) {
      var _ref3$pageNum = _ref3.pageNum,
          pageNum = _ref3$pageNum === undefined ? 1 : _ref3$pageNum,
          callback = _ref3.callback;
      var _this$$router$params = _this.$router.params,
          _this$$router$params$ = _this$$router$params.orderNo,
          orderNo = _this$$router$params$ === undefined ? '' : _this$$router$params$,
          _this$$router$params$2 = _this$$router$params.itemName,
          itemName = _this$$router$params$2 === undefined ? '' : _this$$router$params$2,
          _this$$router$params$3 = _this$$router$params.consigneeName,
          consigneeName = _this$$router$params$3 === undefined ? '' : _this$$router$params$3,
          _this$$router$params$4 = _this$$router$params.phone,
          phone = _this$$router$params$4 === undefined ? '' : _this$$router$params$4;
      var _this$state2 = _this.state,
          queryType = _this$state2.queryType,
          list = _this$state2.list;

      var params = {
        queryType: queryType,
        orderNo: decodeURI(orderNo),
        itemName: decodeURI(itemName),
        consigneeName: decodeURI(consigneeName),
        phone: decodeURI(phone)
      };
      _index5.default.order.queryListByParam(params).then(function (res) {
        if (res) {
          var l = list.concat(res);
          _this.setState({
            isLoaded: true,
            isShow: true,
            list: l,
            hasMore: false,
            pageNum: pageNum,
            isEmpty: l.length <= 0
          }, function () {
            if (callback) {
              callback();
            }
          });
        }
      });
    }, _this.onScrollToLower = function (fn) {
      _this.state.pageNum += 1;
      var pageNum = _this.state.pageNum;
      _this.getData({ pageNum: pageNum, callback: fn });
    }, _this.onPullDownRefresh = function (fn) {
      var isSearchResult = _this.state.isSearchResult;

      _this.setState({
        list: []
      }, function () {
        if (isSearchResult === 1) {
          _this.getData({ callback: fn });
        } else if (isSearchResult === 2) {
          _this.getSearchData({ callback: fn });
        }
      });
    }, _this.getShopMemberLevel = function () {
      var _this$$router$params$5 = _this.$router.params.index,
          index = _this$$router$params$5 === undefined ? 0 : _this$$router$params$5;
      var _this$$router$params2 = _this.$router.params,
          _this$$router$params3 = _this$$router$params2.isOrder,
          isOrder = _this$$router$params3 === undefined ? 1 : _this$$router$params3,
          _this$$router$params4 = _this$$router$params2.isSearchResult,
          isSearchResult = _this$$router$params4 === undefined ? 1 : _this$$router$params4,
          _this$$router$params5 = _this$$router$params2.queryType,
          queryType = _this$$router$params5 === undefined ? 1 : _this$$router$params5;

      var _Taro$getMenuButtonBo = _taroWeapp2.default.getMenuButtonBoundingClientRect(),
          top = _Taro$getMenuButtonBo.top,
          height = _Taro$getMenuButtonBo.height;

      var companyId = _this.getCompanyId();
      _index5.default.order.getShopMemberLevelInfo({ companyId: companyId }).then(function (res) {
        // res.memberLevel = 1
        if (res) {
          _this.setState({
            shopLevel: res.memberLevel,
            type: Number(index),
            isOrder: Number(isOrder),
            isSearchResult: Number(isSearchResult),
            queryType: Number(queryType),
            buttonTop: top,
            buttonHeight: height
          }, function () {
            if (Number(isSearchResult) === 1) {
              //非搜索情况下请求订单接口
              _this.getData({});
            } else {
              _this.getSearchData({});
            }
          });
        }
      });
    }, _this.setaction = function () {
      var actionType = _this.state.actionType;

      if (actionType === '删除') {
        _this.deleteOrder();
      } else if (actionType === '收货') {
        _this.receivedOrder();
      } else if (actionType === '取消') {
        _this.cancelAfter();
      }
    }, _this.cancelAfter = function () {
      var afterSaleNo = _this.state.afterSaleNo;

      _index5.default.order.cancelAfter({ afterSaleNo: afterSaleNo }).then(function (res) {
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
    }, _this.deleteOrder = function () {
      var checkNo = _this.state.checkNo;
      var index = _this.$router.params.index;

      _index5.default.order.deleteOrder({ orderNo: checkNo }).then(function (res) {
        _this.setState({
          sureModal: false
        });
        if (res) {
          _wechatUtils.message.success("已删除");
          _taroWeapp2.default.navigateTo({
            url: "/pages/my-order/my-order?t=" + new Date().getTime() + "&index=" + index
          });
        }
      });
    }, _this.receivedOrder = function (orderNo) {
      var checkNo = _this.state.checkNo;

      _index5.default.order.receivedOrder({ orderNo: checkNo }).then(function (res) {
        if (res === true) {
          _this.setState({
            sureModal: false
          });
          _wechatUtils.message.success("已收货");
          setTimeout(function () {
            _taroWeapp2.default.navigateTo({
              url: "/pages/my-order/my-order?t=" + new Date().getTime() + "&index=3"
            });
          }, 500);
        }
      });
    }, _this.handleClick = function (value) {
      _this.setState({
        isShow: false,
        type: value,
        list: []
      }, function () {
        return _this.getData({});
      });
    }, _this.goDetail = function (_ref4) {
      var orderNo = _ref4.orderNo,
          afterSaleNo = _ref4.afterSaleNo,
          _ref4$orderSource = _ref4.orderSource,
          orderSource = _ref4$orderSource === undefined ? 3 : _ref4$orderSource;
      var _this$state3 = _this.state,
          buyType = _this$state3.buyType,
          shopLevel = _this$state3.shopLevel;

      if (buyType === 1) {
        return false;
      }
      _taroWeapp2.default.navigateTo({
        url: "/pages/order-detail/order-detail?orderNo=" + orderNo + "&afterSaleNo=" + afterSaleNo + "&shopLevel=" + shopLevel + "&orderSource=" + orderSource
      });
    }, _this.goAfter = function (afterSaleNo) {
      _taroWeapp2.default.navigateTo({
        url: "/pages/aftersales-detail/aftersales-detail?afterSaleNo=" + afterSaleNo
      });
    }, _this.setType = function (type) {
      _this.setState({
        buyType: type,
        type: 0,
        isShow: false,
        list: []
      }, function () {
        return _this.getData({});
      });
    }, _this.goIndex = function () {
      var _Taro$getStorageSync = _taroWeapp2.default.getStorageSync('userInfo'),
          companyId = _Taro$getStorageSync.companyId;

      _taroWeapp2.default.switchTab({
        url: "/pages/index/index?companyId=" + companyId
      });
    }, _this.goRefund = function (type, orderNo) {
      var shopLevel = _this.state.shopLevel;

      _taroWeapp2.default.navigateTo({
        url: "/pages/after-sales/after-sales?type=" + type + "&orderNo=" + orderNo + "&shopLevel=" + shopLevel
      });
    }, _this.geSearch = function () {
      _taroWeapp2.default.navigateTo({
        url: "/pages/order-search/order-search"
      });
    }, _this.goMy = function () {
      var isSearchResult = _this.state.isSearchResult;

      var url = isSearchResult === 2 ? '/pages/my-order/my-order' : '/pages/my/my';
      var action = isSearchResult === 2 ? 'navigateTo' : 'switchTab';
      _taroWeapp2.default[action]({
        url: url
      });
    }, _this.onCallPay = function (orderNo) {
      _index3.orderPay.Opay(_this, orderNo);
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
    }, _this.config = {
      navigationBarTitleText: '我的订单',
      navigationBarBackgroundColor: '#F7F8FA',
      enablePullDownRefresh: false,
      disableScroll: true,
      navigationStyle: 'custom'
    }, _this.anonymousFunc0Map = {}, _this.anonymousFunc1Map = {}, _this.anonymousFunc2Map = {}, _this.anonymousFunc3Map = {}, _this.anonymousFunc4Map = {}, _this.anonymousFunc5Map = {}, _this.anonymousFunc6Map = {}, _this.customComponents = ["AtTabs", "ListView", "Empty", "Ellipsis", "AtModal"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MyOrder, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(MyOrder.prototype.__proto__ || Object.getPrototypeOf(MyOrder.prototype), "_constructor", this).call(this, props);

      this.state = {
        // 界面/组件 初始数据
        type: 0,
        tabList: [{ title: '全部', type: -1 }, { title: '待支付', type: 0 }, { title: '待发货', type: 1 }, { title: '待收货', type: 2 }, { title: '已完成', type: 3 }, { title: '已关闭', type: 4 }],
        afterTab: [{ title: '全部' }, { title: '退款单' }, { title: '退货单' }, { title: '赔付单' }],
        buyList: [{ title: '自购', type: 0 }, { title: '分享购', type: 1 }],
        isLoaded: false,
        error: false,
        hasMore: true,
        isEmpty: false,
        list: [],
        screenHeight: '',
        buyType: 0,
        isShow: false,
        pageNum: 1,
        shopLevel: 1,
        sureModal: false,
        checkNo: '',
        actionType: '',
        actionDesc: '',
        isOrder: 1,
        afterSaleNo: ''
      };

      // this.onCallPay = Orderly.call(this, this.onCallPay);
      _index3.appUtils.delay(this, ['onCallPay']);
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentWillReact",
    value: function componentWillReact() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getShopMemberLevel();
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__120"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__120 = _genCompid2[0],
          $compid__120 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__121"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__121 = _genCompid4[0],
          $compid__121 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__122"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__122 = _genCompid6[0],
          $compid__122 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__123"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__123 = _genCompid8[0],
          $compid__123 = _genCompid8[1];

      var _state = this.__state,
          isLoaded = _state.isLoaded,
          error = _state.error,
          hasMore = _state.hasMore,
          isEmpty = _state.isEmpty,
          list = _state.list,
          screenHeight = _state.screenHeight,
          type = _state.type,
          tabList = _state.tabList,
          buyType = _state.buyType,
          buyList = _state.buyList,
          isShow = _state.isShow,
          shopLevel = _state.shopLevel,
          sureModal = _state.sureModal,
          checkNo = _state.checkNo,
          actionType = _state.actionType,
          actionDesc = _state.actionDesc,
          afterTab = _state.afterTab,
          isOrder = _state.isOrder,
          isSearchResult = _state.isSearchResult,
          buttonTop = _state.buttonTop,
          buttonHeight = _state.buttonHeight;

      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)({ marginTop: buttonTop + "px", height: buttonHeight + "px" });
      var anonymousState__temp2 = isOrder === 1 ? (0, _taroWeapp.internal_inline_style)({ paddingTop: buttonTop + buttonHeight + "px" }) : null;
      var anonymousState__temp5 = isShow ? {
        launchEmpty: true
      } : null;
      var anonymousState__temp6 = isShow ? { paddingTop: buttonTop + buttonHeight + 9 + "px" } : null;
      var anonymousState__temp7 = isShow ? _myOrderModule2.default.scroll_content + " \n            " + (shopLevel >= 2 ? isOrder === 1 && _myOrderModule2.default.scroll_content_vip : isOrder === 1 && _myOrderModule2.default.scroll_content_def) + " \n            " + (isOrder === 2 && _myOrderModule2.default.after_content) + " \n            " + (isSearchResult === 2 && _myOrderModule2.default.scroll_content_search) : null;

      this.anonymousFunc7 = function () {
        return _this2.setState({ sureModal: false });
      };

      this.anonymousFunc8 = function () {
        return _this2.setState({ sureModal: false });
      };

      this.anonymousFunc9 = function () {
        return _this2.setaction();
      };

      var loopArray55 = shopLevel >= 2 && isOrder === 1 && isSearchResult === 1 ? buyList.map(function (it, index) {
        it = {
          $original: (0, _taroWeapp.internal_get_original)(it)
        };
        var $loopState__temp4 = shopLevel >= 2 && isOrder === 1 && isSearchResult === 1 ? index + 1 : null;

        var _$indexKey = "ghzzz" + index;

        _this2.anonymousFunc0Map[_$indexKey] = function () {
          return _this2.setType(it.$original.type);
        };

        return {
          $loopState__temp4: $loopState__temp4,
          _$indexKey: _$indexKey,
          $original: it.$original
        };
      }) : [];
      var loopArray56 = isShow ? list.map(function (item, i) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var $loopState__temp9 = isOrder === 2 ? i + 1 : null;
        var $loopState__temp11 = isOrder === 2 ? _taroWeapp2.default.getStorageSync('userInfo').shopName : null;
        var $loopState__temp13 = isOrder === 2 ? getAfterStatus({
          afterSaleStatus: item.$original.afterSaleStatus,
          afterSaleType: item.$original.afterSaleType
        }) : null;

        var _$indexKey2 = "gjzzz" + i;

        _this2.anonymousFunc1Map[_$indexKey2] = function () {
          return _this2.goAfter(item.$original.afterSaleNo);
        };

        var $loopState__temp15 = isOrder === 2 ? getFileUrl(item.$original.skuImg) : null;
        var $loopState__temp17 = isOrder === 2 ? _this2.getProps(item.$original.propsValue) : null;
        var $loopState__temp19 = isOrder === 2 ? (0, _taroWeapp.internal_inline_style)({ marginTop: '10px' }) : null;
        var $loopState__temp21 = isOrder === 2 ? formatPoint(item.$original.agentUnitPrice * item.$original.afterSaleCount, 4) : null;

        var _$indexKey3 = "hazzz" + i;

        _this2.anonymousFunc2Map[_$indexKey3] = function () {
          return _this2.setState({ sureModal: true, afterSaleNo: item.$original.afterSaleNo, actionType: '取消', actionDesc: '您仅能主动取消一次，取消后将不能再主动取消，且超出保障期无法再次发起售后' });
        };

        var _$indexKey4 = "hbzzz" + i;

        _this2.anonymousFunc3Map[_$indexKey4] = function () {
          return _this2.goAfter(item.$original.afterSaleNo);
        };

        var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "hfzzzzzzzz" + i, true),
            _genCompid10 = _slicedToArray(_genCompid9, 2),
            $prevCompid__118 = _genCompid10[0],
            $compid__118 = _genCompid10[1];

        isShow && _taroWeapp.propsManager.set({
          "count": 1
        }, $compid__118, $prevCompid__118);
        return {
          $loopState__temp9: $loopState__temp9,
          $loopState__temp11: $loopState__temp11,
          $loopState__temp13: $loopState__temp13,
          _$indexKey2: _$indexKey2,
          $loopState__temp15: $loopState__temp15,
          $loopState__temp17: $loopState__temp17,
          $loopState__temp19: $loopState__temp19,
          $loopState__temp21: $loopState__temp21,
          _$indexKey3: _$indexKey3,
          _$indexKey4: _$indexKey4,
          $compid__118: $compid__118,
          $original: item.$original
        };
      }) : [];
      var loopArray57 = isShow ? list.map(function (item, i) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var $loopState__temp23 = isOrder === 1 ? i + 1 : null;
        var $loopState__temp25 = isOrder === 1 ? _taroWeapp2.default.getStorageSync('userInfo').shopName : null;
        var $loopState__temp27 = isOrder === 1 ? getOrderStatus({
          afterSale: item.$original.afterSale,
          afterSaleStatus: item.$original.afterSaleStatus,
          orderStatus: item.$original.orderStatus,
          afterSaleType: item.$original.afterSaleType
        }) : null;

        var _$indexKey5 = "hczzz" + i;

        _this2.anonymousFunc4Map[_$indexKey5] = function () {
          return _this2.goDetail({
            orderNo: item.$original.orderNo,
            afterSaleNo: item.$original.afterSaleNo,
            orderSource: item.$original.orderSource
          });
        };

        var $loopState__temp29 = isOrder === 1 ? getFileUrl(item.$original.skuImg) : null;
        var $loopState__temp31 = isOrder === 1 ? _this2.getProps(item.$original.propsValue) : null;
        var $loopState__temp33 = isOrder === 1 ? formatPoint(item.$original.agentUnitPrice * item.$original.count, 4) : null;

        var _$indexKey6 = "hdzzz" + i;

        _this2.anonymousFunc5Map[_$indexKey6] = function () {
          return _this2.onCallPay(item.$original.orderNo);
        };

        var _$indexKey7 = "hezzz" + i;

        _this2.anonymousFunc6Map[_$indexKey7] = function () {
          return _this2.setState({ sureModal: true, checkNo: item.$original.orderNo, actionType: '收货' });
        };

        var _genCompid11 = (0, _taroWeapp.genCompid)(__prefix + "hgzzzzzzzz" + i, true),
            _genCompid12 = _slicedToArray(_genCompid11, 2),
            $prevCompid__119 = _genCompid12[0],
            $compid__119 = _genCompid12[1];

        isShow && _taroWeapp.propsManager.set({
          "count": 1
        }, $compid__119, $prevCompid__119);
        return {
          $loopState__temp23: $loopState__temp23,
          $loopState__temp25: $loopState__temp25,
          $loopState__temp27: $loopState__temp27,
          _$indexKey5: _$indexKey5,
          $loopState__temp29: $loopState__temp29,
          $loopState__temp31: $loopState__temp31,
          $loopState__temp33: $loopState__temp33,
          _$indexKey6: _$indexKey6,
          _$indexKey7: _$indexKey7,
          $compid__119: $compid__119,
          $original: item.$original
        };
      }) : [];
      isOrder === 1 && isSearchResult === 1 && _taroWeapp.propsManager.set({
        "current": type,
        "scroll": true,
        "tabList": tabList,
        "onClick": this.handleClick
      }, $compid__120, $prevCompid__120);
      isShow && _taroWeapp.propsManager.set({
        "isLoaded": isLoaded,
        "hasMore": hasMore,
        "isEmpty": isEmpty,
        "launch": anonymousState__temp5,
        "style": anonymousState__temp6,
        "onScrollToLower": this.onScrollToLower,
        "onPullDownRefresh": this.onPullDownRefresh,
        "className": anonymousState__temp7
      }, $compid__121, $prevCompid__121);
      isShow && _taroWeapp.propsManager.set({
        "msg": "\u6682\u65E0\u8BA2\u5355\u6570\u636E",
        "type": 1
      }, $compid__122, $prevCompid__122);
      _taroWeapp.propsManager.set({
        "isOpened": sureModal,
        "title": actionType !== '取消' && "\u786E\u5B9A" + actionType + "\u5417",
        "cancelText": "\u518D\u60F3\u60F3",
        "confirmText": "\u786E\u5B9A",
        "onClose": this.anonymousFunc7,
        "onCancel": this.anonymousFunc8,
        "onConfirm": this.anonymousFunc9,
        "content": actionType === '取消' && actionDesc
      }, $compid__123, $prevCompid__123);
      this.$$refs.pushRefs([{
        type: "component",
        id: "gizzz",
        refName: "",
        fn: function fn(node) {
          return _this2.scrollV = node;
        }
      }]);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp5: anonymousState__temp5,
        anonymousState__temp6: anonymousState__temp6,
        anonymousState__temp7: anonymousState__temp7,
        loopArray55: loopArray55,
        loopArray56: loopArray56,
        loopArray57: loopArray57,
        $compid__120: $compid__120,
        $compid__121: $compid__121,
        $compid__122: $compid__122,
        $compid__123: $compid__123,
        styles: _myOrderModule2.default,
        isSearchResult: isSearchResult
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
  }, {
    key: "anonymousFunc2",
    value: function anonymousFunc2(_$indexKey3) {
      var _anonymousFunc2Map;

      ;

      for (var _len4 = arguments.length, e = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        e[_key4 - 1] = arguments[_key4];
      }

      return this.anonymousFunc2Map[_$indexKey3] && (_anonymousFunc2Map = this.anonymousFunc2Map)[_$indexKey3].apply(_anonymousFunc2Map, e);
    }
  }, {
    key: "anonymousFunc3",
    value: function anonymousFunc3(_$indexKey4) {
      var _anonymousFunc3Map;

      ;

      for (var _len5 = arguments.length, e = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        e[_key5 - 1] = arguments[_key5];
      }

      return this.anonymousFunc3Map[_$indexKey4] && (_anonymousFunc3Map = this.anonymousFunc3Map)[_$indexKey4].apply(_anonymousFunc3Map, e);
    }
  }, {
    key: "anonymousFunc4",
    value: function anonymousFunc4(_$indexKey5) {
      var _anonymousFunc4Map;

      ;

      for (var _len6 = arguments.length, e = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
        e[_key6 - 1] = arguments[_key6];
      }

      return this.anonymousFunc4Map[_$indexKey5] && (_anonymousFunc4Map = this.anonymousFunc4Map)[_$indexKey5].apply(_anonymousFunc4Map, e);
    }
  }, {
    key: "anonymousFunc5",
    value: function anonymousFunc5(_$indexKey6) {
      var _anonymousFunc5Map;

      ;

      for (var _len7 = arguments.length, e = Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
        e[_key7 - 1] = arguments[_key7];
      }

      return this.anonymousFunc5Map[_$indexKey6] && (_anonymousFunc5Map = this.anonymousFunc5Map)[_$indexKey6].apply(_anonymousFunc5Map, e);
    }
  }, {
    key: "anonymousFunc6",
    value: function anonymousFunc6(_$indexKey7) {
      var _anonymousFunc6Map;

      ;

      for (var _len8 = arguments.length, e = Array(_len8 > 1 ? _len8 - 1 : 0), _key8 = 1; _key8 < _len8; _key8++) {
        e[_key8 - 1] = arguments[_key8];
      }

      return this.anonymousFunc6Map[_$indexKey7] && (_anonymousFunc6Map = this.anonymousFunc6Map)[_$indexKey7].apply(_anonymousFunc6Map, e);
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
  }]);

  return MyOrder;
}(_taroWeapp2.default.Component), _class2.$$events = ["goMy", "geSearch", "anonymousFunc0", "goIndex", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5", "anonymousFunc6"], _class2.$$componentPath = "pages/my-order/my-order", _temp2)) || _class;

exports.default = MyOrder;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(MyOrder, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/my-order/my-order.jsx?taro&type=template&parse=PAGE&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/my-order/my-order.jsx?taro&type=template&parse=PAGE& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/my-order/my-order.wxml";

/***/ }),

/***/ "./src/pages/my-order/my-order.jsx":
/*!*****************************************!*\
  !*** ./src/pages/my-order/my-order.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _my_order_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-order.jsx?taro&type=template&parse=PAGE& */ "./src/pages/my-order/my-order.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _my_order_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-order.jsx?taro&type=script&parse=PAGE& */ "./src/pages/my-order/my-order.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _my_order_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _my_order_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/my-order/my-order.jsx?taro&type=script&parse=PAGE&":
/*!**********************************************************************!*\
  !*** ./src/pages/my-order/my-order.jsx?taro&type=script&parse=PAGE& ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_my_order_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./my-order.jsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/my-order/my-order.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_my_order_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_my_order_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_my_order_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_my_order_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_my_order_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/my-order/my-order.jsx?taro&type=template&parse=PAGE&":
/*!************************************************************************!*\
  !*** ./src/pages/my-order/my-order.jsx?taro&type=template&parse=PAGE& ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_my_order_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./my-order.jsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/my-order/my-order.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_my_order_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_my_order_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_my_order_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_my_order_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/my-order/my-order.module.styl":
/*!*************************************************!*\
  !*** ./src/pages/my-order/my-order.module.styl ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"order_content":"my-order-module__order_content___3xKQg","after_tab":"my-order-module__after_tab___346kG","tab_style":"my-order-module__tab_style___1bGtb","product_box":"my-order-module__product_box___1hmlf","title":"my-order-module__title___3A2Q5","font":"my-order-module__font___1JDfL","status_box":"my-order-module__status_box___jkZD4","red":"my-order-module__red___9UZ1c","info_box":"my-order-module__info_box___1iFRg","img":"my-order-module__img___1AqCb","info_right":"my-order-module__info_right___1HTHD","item_line_container":"my-order-module__item_line_container___x9jLk","item_line":"my-order-module__item_line___1Ibsb","info_title":"my-order-module__info_title___3gihT","num":"my-order-module__num___1KLA8","recv":"my-order-module__recv___5RGHC","second":"my-order-module__second___3Yvhm","all_price":"my-order-module__all_price___2V_tg","all_num":"my-order-module__all_num___3yGXM","bottom_box":"my-order-module__bottom_box___1CF-J","button_box":"my-order-module__button_box___1Tw_j","button":"my-order-module__button___jnnHk","wuliu":"my-order-module__wuliu___3t2Fo","shouhuo":"my-order-module__shouhuo___3De_e","gray_button":"my-order-module__gray_button___Y_0ky","clock_box":"my-order-module__clock_box___Ju6zU","list_content":"my-order-module__list_content___CzUua","tab_box":"my-order-module__tab_box___2_yVr","buy_type_box":"my-order-module__buy_type_box___3BsAZ","item":"my-order-module__item___3-nCe","active":"my-order-module__active___kpSn2","grid_empty":"my-order-module__grid_empty___XStSb","to_buy_button":"my-order-module__to_buy_button___1SS4V","scroll_content":"my-order-module__scroll_content___2vYBd","scroll_content_def":"my-order-module__scroll_content_def___3wBH3","scroll_content_vip":"my-order-module__scroll_content_vip___1-S7X","after_content":"my-order-module__after_content___39NZ5","scroll_content_search":"my-order-module__scroll_content_search___21F0n","back":"my-order-module__back___2_eY5","after_Amount":"my-order-module__after_Amount___2hwXR","search_out":"my-order-module__search_out___2ThLI","result_search_out":"my-order-module__result_search_out___28yn8","search_box":"my-order-module__search_box___29fVT","icon":"my-order-module__icon___1ikgq","nav_out":"my-order-module__nav_out___3DCrh","top_inner":"my-order-module__top_inner___QsRnf","go_back_icon":"my-order-module__go_back_icon___XZ--i"};

/***/ })

},[["./src/pages/my-order/my-order.jsx","runtime","taro","vendors","common"]]]);