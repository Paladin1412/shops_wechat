(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.jsx?taro&type=script&parse=PAGE&":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/index/index.jsx?taro&type=script&parse=PAGE& ***!
  \*************************************************************************************************************************************************/
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
                              * @Update: 2020-02-25 14:03:04
                              * @Description: true
                              */

// import { Ellipsis } from '@jxkang/wechat-cmpt';

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index = __webpack_require__(/*! ../../components/with-page/index */ "./src/components/with-page/index.jsx");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../../model/index */ "./src/model/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../../components/assets/index */ "./src/components/assets/index.js");

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__(/*! ../../utils/common/index */ "./src/utils/common/index.js");

var _index8 = _interopRequireDefault(_index7);

var _index9 = __webpack_require__(/*! ../../utils/index */ "./src/utils/index.js");

var _index10 = _interopRequireDefault(_index9);

var _index11 = __webpack_require__(/*! ../../config/index */ "./src/config/index.js");

var _index12 = _interopRequireDefault(_index11);

var _indexModule = __webpack_require__(/*! ./index.module.styl */ "./src/pages/index/index.module.styl");

var _indexModule2 = _interopRequireDefault(_indexModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getFileUrl = _index10.default.appUtils.getFileUrl;

var Index = (0, _index2.default)(_class = (_temp2 = _class2 = function (_Taro$Component) {
  _inherits(Index, _Taro$Component);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "anonymousState__temp5", "anonymousState__temp6", "anonymousState__temp7", "anonymousState__temp20", "anonymousState__temp21", "anonymousState__temp28", "loopArray42", "loopArray43", "loopArray44", "$compid__98", "$compid__99", "$compid__100", "$compid__101", "statusBarHeight", "styles", "shopList", "isGoodsRequested", "Assets", "noLive", "liveList", "turnLiveList", "shopLevel", "isOpenShare", "dialogGrade", "companyMes", "upgradeVisible", "id", "pageIndex", "hasMore", "isEmpty", "screenHeight", "liveDetail", "goodsList", "liveMes", "mark", "currentNum", "globalStore"], _this.getDialog = function () {
      _index4.default.common.getUpMemberMsg().then(function (data) {
        if (data) {
          _this.setState({
            id: data.id,
            upgradeVisible: true,
            dialogGrade: data.bizExtend
          });
        }
      });
    }, _this.addViewRecord = function () {
      var globalStore = _this.props.globalStore;
      var _globalStore$data = globalStore.data,
          userInfo = _globalStore$data.userInfo,
          shopCacheList = _globalStore$data.shopCacheList;

      var companyId = parseInt(_this.getCompanyId() || '', 10);
      if (!companyId) {
        _this.logger({ logs: '没有companyId, 不需要记录companyId' });
        return;
      }
      console.log('userInfo.token', userInfo.token);
      if (userInfo.token) {
        _index4.default.login.addViewRecord({ companyIds: [companyId] });
      } else {
        if (shopCacheList.indexOf(companyId) == -1) {
          shopCacheList.push(companyId);
          globalStore.setData('shopCacheList', shopCacheList, 'index.jsx,line:112');
        }
      }
    }, _this.allGetInner = function () {
      var globalStore = _this.props.globalStore;
      var userInfo = globalStore.data.userInfo;

      _this.setState({
        shopList: []
      });
      var that = _this;

      var _globalStore$data$sys = globalStore.data.systemInfo,
          screenWidth = _globalStore$data$sys.screenWidth,
          screenHeight = _globalStore$data$sys.screenHeight,
          statusBarHeight = _globalStore$data$sys.statusBarHeight;

      var companyId = _this.getCompanyId();
      _index9.imgshare.init({ companyId: companyId });

      var _Taro$getMenuButtonBo = _taroWeapp2.default.getMenuButtonBoundingClientRect(),
          bottom = _Taro$getMenuButtonBo.bottom;

      that.setState({
        screenHeight: screenHeight, // 80是底部Tab高度
        statusBarHeight: statusBarHeight
      }, function () {
        that.agentitem({});
        that.memberStatistics();
        // that.queryLiveByCompanyId({ companyId: companyId });
        that.queryLiveListByCompanyId({ companyId: companyId });
        if (userInfo.token) {
          that.getDialog();
          that.getCompanyCode();
          that.getShopMemberLevel();
        } else {
          _this.getQrCode({});
        }
      });
    }, _this.queryLiveListByCompanyId = function (_ref2) {
      var companyId = _ref2.companyId;

      var currentData = {
        companyId: companyId
      };
      _index4.default.liveapi.queryLiveListByCompanyId(currentData).then(function (res) {
        if (!res) {
          return false;
        }console.log('获取到的信息', res);
        _this.setState({
          liveList: res,
          noLive: res.length != 0 ? 1 : 0
        });
      });
    }, _this.getCompanyCode = function () {
      _index4.default.inviter.userCode().then(function (res) {
        if (res) {
          _this.setState({
            mark: res.invitationCode,
            icon: res.icon
          });
          _this.getQrCode({ M: res.invitationCode });
        }
      });
    }, _this.getQrCode = function (params) {
      var companyId = _this.getCompanyId();
      var sceneMap = Object.assign(params, {
        cId: companyId
      });
      console.log('getQrCode', sceneMap);
      _index9.imgshare.getShopQrImg({ sceneMap: sceneMap, companyId: companyId });
    }, _this.onShareAppMessage = function (options) {
      _this.logger({ logs: 'C端分享' });
      var _this$state = _this.state,
          companyMes = _this$state.companyMes,
          mark = _this$state.mark;

      var companyId = _this.getCompanyId();

      var that = _this;
      // 设置菜单中的转发按钮触发转发事件时的转发内容
      var shareObj = {
        title: companyMes.shopName, // 默认是小程序的名称(可以写slogan等)
        path: "/pages/index/index?companyId=" + companyId + "&mark=" + mark, // 默认是当前页面，必须是以‘/’开头的完整路径
        imageUrl: _index6.default.common.share_logo,
        success: function success(res) {
          // 转发成功之后的回调
          if (res.errMsg == 'shareAppMessage:ok') {}
        },
        fail: function fail() {
          // 转发失败之后的回调
          if (res.errMsg == 'shareAppMessage:fail cancel') {
            // 用户取消转发
          } else if (res.errMsg == 'shareAppMessage:fail') {
            // 转发失败，其中 detail message 为详细失败信息
          }
        },
        complete: function complete() {
          // 转发结束之后的回调（转发成不成功都会执行）
        }
      };
      return shareObj;
    }, _this.queryLiveByCompanyId = function (_ref3) {
      var companyId = _ref3.companyId,
          callBack = _ref3.callBack;

      var currentData = {
        companyId: companyId
      };
      _index4.default.liveapi.queryLiveByCompanyId(currentData).then(function (res) {
        if (res) {
          if (!res.id) {
            _this.setState({
              noLive: 0
            });
          } else {
            _this.setState({
              noLive: 1,
              liveDetail: res
            }, function () {
              var liveDetail = _this.state.liveDetail;

              if (callBack) {
                callBack();
              }
            });
          }
        }
      });
    }, _this.getShopMemberLevel = function () {
      var companyId = _this.getCompanyId();
      _index4.default.order.getShopMemberLevelInfo({ companyId: companyId }).then(function (res) {
        if (res) {
          _this.setState({
            shopLevel: Number(res.memberLevel)
          });
        }
      });
    }, _this.agentitem = function (_ref4) {
      var _ref4$pageNo = _ref4.pageNo,
          pageNo = _ref4$pageNo === undefined ? 1 : _ref4$pageNo,
          callBack = _ref4.callBack,
          _ref4$pageSize = _ref4.pageSize,
          pageSize = _ref4$pageSize === undefined ? 15 : _ref4$pageSize;
      var shopList = _this.state.shopList;

      var companyId = _this.getCompanyId();
      var currentData = {
        pageNo: pageNo,
        pageSize: pageSize,
        agentCompanyId: companyId
      };
      _index4.default.goods.agentitem(currentData).then(function (res) {
        if (!res) {
          return false;
        }
        _this.setState({
          shopList: shopList.concat(res),
          pageIndex: pageNo,
          hasMore: !(res.length < pageSize),
          isGoodsRequested: true
        }, function () {
          if (callBack) {
            callBack();
          }
        });
      });
    }, _this.onScrollToLower = function (fn) {
      _this.state.pageIndex += 1;
      var pageNum = _this.state.pageIndex;

      _this.agentitem({ pageNo: pageNum, callBack: fn });
    }, _this.memberStatistics = function () {
      var companyId = _this.getCompanyId();
      var currentData = {
        companyId: companyId
      };
      _index4.default.goods.shopBaseInfo(currentData).then(function (res) {
        if (res) {
          _this.setState({
            companyMes: res
          });
          _index9.imgshare.getshopInfo({
            shopInfo: { shopName: res.shopName, logo: res.logo || _index6.default.goods.defalutHead },
            companyId: companyId
          });
        }
      });
    }, _this.shareItem = function (item, type) {
      var companyId = _this.getCompanyId();
      if (type === 2) {
        _taroWeapp2.default.navigateTo({
          url: "/pages/goodsdetail/goodsdetail?agentItemId=" + item.agentItemId + "&itemId=" + item.itemId + "&companyId=" + (companyId || _taroWeapp2.default.getStorageSync('userInfo').companyId)
        });
      } else {
        _this.setState({
          isOpenShare: true
        });
      }
    }, _this.onCancalItem = function () {
      _this.setState({
        isOpenShare: false
      });
    }, _this.goBackLiveList = function () {
      _taroWeapp2.default.navigateTo({
        url: '/kangLive/pages/backlive/backlive'
      });
    }, _this.goLive = function (livedetail) {
      console.log('livedetail', livedetail);
      var companyId = _this.getCompanyId();
      console.log("/kangLive/pages/prelive/prelive?liveId=" + livedetail.id + "&companyId=" + companyId + "&isLiveOrRedirectLive=" + (livedetail.isLiveOrRedirectLive || '') + "&pliveId=" + (livedetail.pliveId || 0));

      if (livedetail.liveStatus == 2) {
        if (livedetail.streamStatus == 0) {
          _taroWeapp2.default.navigateTo({
            url: "/kangLive/pages/golive/golive?liveId=" + livedetail.id + "&companyId=" + companyId + "&isLiveOrRedirectLive=" + livedetail.isLiveOrRedirectLive + "&pliveId=" + (livedetail.pliveId || 0)
          });
        } else {
          return false;
        }
      } else {
        _taroWeapp2.default.navigateTo({
          url: "/kangLive/pages/prelive/prelive?liveId=" + livedetail.id + "&companyId=" + companyId + "&isLiveOrRedirectLive=" + (livedetail.isLiveOrRedirectLive || '') + "&pliveId=" + (livedetail.pliveId || 0)
        });
      }
    }, _this.insRef = function (node) {
      _this.refList = node;
    }, _this.onShowItem = function () {
      _this.collect.setState({
        shareVisible: true
      });
    }, _this.redirectMarket = function () {
      var companyId = _this.getCompanyId();
      var currentData = {
        page: 1,
        pageSize: 5,
        companyId: companyId
      };
      _index4.default.liveapi.redirectMarket(currentData).then(function (res) {
        if (res) {
          console.log(res);
          _this.setState({
            turnLiveList: res || []
          });
        }
      });
    }, _this.resetValue = function () {
      if (_this.state.upgradeVisible) {
        _this.setState({ upgradeVisible: false });
      }
      if (_this.state.isGoodsRequested) {
        _this.setState({ isGoodsRequested: false });
      }
    }, _this.backToHome = function () {
      _taroWeapp2.default.redirectTo({
        url: '/pages/home/home'
      });
    }, _this.onCloseUpgrade = function () {
      var id = _this.state.id;
      if (id) {
        _index4.default.common.upRead({
          id: id
        });
      }
      _this.setState({ upgradeVisible: false });
    }, _this.pullDownRefresh = function (fn) {
      var companyId = _this.getCompanyId();
      // this.queryLiveByCompanyId({ callBack: fn, companyId: companyId });
    }, _this.swiperChange = function (e) {
      var current = e.detail.current;

      console.log(current);
      _this.setState({
        currentNum: current
      });
    }, _this.lookMoreMes = function () {
      _taroWeapp2.default.navigateTo({
        url: '/kangLive/pages/turn-live/turn-live'
      });
    }, _this.stopPropagation = function (e) {
      e.preventDefault();
      e.stopPropagation();
    }, _this.config = {
      navigationBarTitleText: '',
      navigationStyle: 'custom',
      navigationBarTextStyle: 'white',
      enablePullDownRefresh: false,
      backgroundColorTop: '#F9482E'
    }, _this.anonymousFunc2Map = {}, _this.anonymousFunc3Map = {}, _this.anonymousFunc4Map = {}, _this.customComponents = ["ListView", "Empty", "Ellipsis", "ShareTool", "Collectmodal", "AtModal"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).call(this, props);

      this.state = {
        upgradeVisible: false,
        id: "",
        shopList: [],
        pageIndex: 1,
        hasMore: true,
        isEmpty: false,
        companyMes: {},
        screenHeight: '',
        shopLevel: 1,
        isOpenShare: false,
        noLive: 0,
        liveDetail: {},
        goodsList: [],
        statusBarHeight: 0,
        turnLiveList: [],
        // 弹窗等级
        dialogGrade: null,
        liveMes: [],
        mark: '',
        liveList: [1, 2, 3],
        currentNum: 0,
        isGoodsRequested: false // 控制没有爆品时的图片显示时机
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
    // 获取弹窗

  }, {
    key: "componentWillReact",
    value: function componentWillReact() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      this.allGetInner();
      this.redirectMarket();
      this.addViewRecord();
      // this.companyCode()
      _taroWeapp2.default.showShareMenu({
        withShareTicket: true
      });
      _taroWeapp2.default.updateShareMenu({
        withShareTicket: true
      });
    }

    /**
     * 记录浏览店铺
     */


    /**
     * 拉取直播间直播内容
     * */

    //  获取自己的邀请码


    // onPullDownRefresh =()=> {
    //   const that = this;
    //   that.queryLiveByCompanyId(companyId);
    // }

    /**
     * @description: 获取商品列表
     * @param {type} 
     * @return: 
     */

    /**
     * @description: 分页获取数据
     * @param {type} 
     * @return: 
     */

    /**
     * @description: 店铺会员统计
     * @param {type} 
     * @return: 
     */

    /**
      * @description: 进入门店详情
      * @param {type} 
      * @return: 
      */

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {
      this.resetValue();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__98"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__98 = _genCompid2[0],
          $compid__98 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__99"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__99 = _genCompid4[0],
          $compid__99 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__100"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__100 = _genCompid6[0],
          $compid__100 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__101"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__101 = _genCompid8[0],
          $compid__101 = _genCompid8[1];

      var _state = this.__state,
          upgradeVisible = _state.upgradeVisible,
          id = _state.id,
          isLoaded = _state.isLoaded,
          shopList = _state.shopList,
          dialogGrade = _state.dialogGrade,
          hasMore = _state.hasMore,
          isEmpty = _state.isEmpty,
          screenHeight = _state.screenHeight,
          statusBarHeight = _state.statusBarHeight,
          liveMes = _state.liveMes,
          companyMes = _state.companyMes,
          isOpenShare = _state.isOpenShare,
          shopLevel = _state.shopLevel,
          icon = _state.icon,
          mark = _state.mark,
          companyId = _state.companyId,
          noLive = _state.noLive,
          liveDetail = _state.liveDetail,
          goodsList = _state.goodsList,
          liveList = _state.liveList,
          currentNum = _state.currentNum,
          isGoodsRequested = _state.isGoodsRequested,
          turnLiveList = _state.turnLiveList;

      var _Taro$getMenuButtonBo2 = _taroWeapp2.default.getMenuButtonBoundingClientRect(),
          top = _Taro$getMenuButtonBo2.top,
          height = _Taro$getMenuButtonBo2.height;

      if (!statusBarHeight) {
        return null;
      } // 防止头部信息抖动
      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)({ height: statusBarHeight + 44 + "px" });
      var anonymousState__temp2 = (0, _taroWeapp.internal_inline_style)({ height: statusBarHeight + 44 + "px" });
      var anonymousState__temp3 = { top: top + height + "px" };
      var anonymousState__temp4 = {
        launchEmpty: true
      };
      var anonymousState__temp5 = (0, _taroWeapp.internal_inline_style)({ backgroundImage: "url(" + _index10.default.appUtils.getFileUrl(_index6.default.home.bg) + ")" });
      var anonymousState__temp6 = _index10.default.appUtils.getFileUrl(companyMes.logo) || _index6.default.goods.defalutHead;

      this.anonymousFunc0 = function () {
        return _this2.shareItem(null, 1);
      };

      var anonymousState__temp7 = noLive == 1 ? (0, _taroWeapp.internal_inline_style)({ height: '390rpx' }) : null;

      this.anonymousFunc1 = function (e) {
        return _this2.swiperChange(e);
      };

      var anonymousState__temp20 = noLive == 1 ? (0, _taroWeapp.internal_inline_style)({ width: liveList.length * 40 + "px" }) : null;
      var anonymousState__temp21 = noLive == 1 ? (0, _taroWeapp.internal_inline_style)({ width: '40px', left: Number(currentNum) * 40 + "px" }) : null;

      this.anonymousFunc5 = function () {
        return _this2.onCancalItem();
      };

      var anonymousState__temp28 = {
        code: mark,
        link: _index12.default.webHost + "/#/pages/login-guide/login-guide?mark=" + mark + "&companyId=" + companyId,
        icon: icon ? _index12.default.crossFile + "?uri=" + getFileUrl(icon) : getFileUrl(_index6.default.common.default_avatar),
        type: 'shop',
        showShareImg: true
      };

      this.anonymousFunc6 = function () {
        return _this2.onCancalItem();
      };

      var loopArray42 = noLive == 1 ? (liveList || []).map(function (v, index) {
        v = {
          $original: (0, _taroWeapp.internal_get_original)(v)
        };
        var $loopState__temp9 = noLive == 1 ? index + 1 : null;

        var _$indexKey = "fdzzz" + index;

        _this2.anonymousFunc2Map[_$indexKey] = function () {
          return _this2.goLive(v.$original);
        };

        var $loopState__temp11 = !v.$original.supportPlayBack ? _index10.default.appUtils.getFileUrl(v.$original.adverImgUrl) : null;
        var $loopState__temp13 = !v.$original.supportPlayBack ? console.log('11111', Boolean(v.$original.isReservation && v.$original.isReservation == 0)) : null;
        var $loopState__temp15 = v.$original.isReservation != 0 ? _index8.default.formatDateTime(v.$original.startTime) : null;
        var $anonymousCallee__10 = !v.$original.supportPlayBack ? v.$original.showItemList.map(function (vs, inx) {
          vs = {
            $original: (0, _taroWeapp.internal_get_original)(vs)
          };
          var $loopState__temp17 = !v.$original.supportPlayBack ? inx + 1 : null;
          var $loopState__temp19 = !v.$original.supportPlayBack ? _index10.default.appUtils.getFileUrl(vs.$original.mainImgUrl) : null;
          return {
            $loopState__temp17: $loopState__temp17,
            $loopState__temp19: $loopState__temp19,
            $original: vs.$original
          };
        }) : [];
        return {
          $loopState__temp9: $loopState__temp9,
          _$indexKey: _$indexKey,
          $loopState__temp11: $loopState__temp11,
          $loopState__temp13: $loopState__temp13,
          $loopState__temp15: $loopState__temp15,
          $anonymousCallee__10: $anonymousCallee__10,
          $original: v.$original
        };
      }) : [];
      var loopArray43 = turnLiveList.length !== 0 ? (turnLiveList || []).map(function (v, index) {
        v = {
          $original: (0, _taroWeapp.internal_get_original)(v)
        };
        var $loopState__temp23 = index < 2 ? index + 1 : null;

        var _$indexKey2 = "fezzz" + index;

        _this2.anonymousFunc3Map[_$indexKey2] = function () {
          return _this2.goLive(v.$original);
        };

        var $loopState__temp25 = v.$original.liveStatus == 1 ? _index8.default.formatDateTime(v.$original.startTime) : null;

        var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "fizzzzzzzz" + index, true),
            _genCompid10 = _slicedToArray(_genCompid9, 2),
            $prevCompid__95 = _genCompid10[0],
            $compid__95 = _genCompid10[1];

        turnLiveList.length !== 0 && index < 2 && _taroWeapp.propsManager.set({
          "count": 1,
          "className": _indexModule2.default.lookNum_style
        }, $compid__95, $prevCompid__95);

        var _genCompid11 = (0, _taroWeapp.genCompid)(__prefix + "fjzzzzzzzz" + index, true),
            _genCompid12 = _slicedToArray(_genCompid11, 2),
            $prevCompid__96 = _genCompid12[0],
            $compid__96 = _genCompid12[1];

        turnLiveList.length !== 0 && index < 2 && _taroWeapp.propsManager.set({
          "count": 1,
          "className": _indexModule2.default.lookShop_style
        }, $compid__96, $prevCompid__96);
        return {
          $loopState__temp23: $loopState__temp23,
          _$indexKey2: _$indexKey2,
          $loopState__temp25: $loopState__temp25,
          $compid__95: $compid__95,
          $compid__96: $compid__96,
          $original: v.$original
        };
      }) : [];
      var loopArray44 = (shopList || []).map(function (v, index) {
        v = {
          $original: (0, _taroWeapp.internal_get_original)(v)
        };

        var _$indexKey3 = "ffzzz" + index;

        _this2.anonymousFunc4Map[_$indexKey3] = function () {
          return _this2.shareItem(v.$original, 2);
        };

        var $loopState__temp27 = _index10.default.appUtils.getFileUrl(v.$original.mainImgUrl) || _index6.default.home.backImage;

        var _genCompid13 = (0, _taroWeapp.genCompid)(__prefix + "gazzzzzzzz" + index, true),
            _genCompid14 = _slicedToArray(_genCompid13, 2),
            $prevCompid__97 = _genCompid14[0],
            $compid__97 = _genCompid14[1];

        _taroWeapp.propsManager.set({
          "count": 2
        }, $compid__97, $prevCompid__97);
        return {
          _$indexKey3: _$indexKey3,
          $loopState__temp27: $loopState__temp27,
          $compid__97: $compid__97,
          $original: v.$original
        };
      });
      _taroWeapp.propsManager.set({
        "isLoaded": isLoaded,
        "hasMore": hasMore,
        "style": anonymousState__temp3,
        "className": _indexModule2.default.scroll_content,
        "onScrollToLower": this.onScrollToLower,
        "onPullDownRefresh": this.pullDownRefresh,
        "launch": anonymousState__temp4
      }, $compid__98, $prevCompid__98);
      _taroWeapp.propsManager.set({
        "count": 1
      }, $compid__99, $prevCompid__99);
      _taroWeapp.propsManager.set({
        "params": anonymousState__temp28
      }, $compid__100, $prevCompid__100);
      _taroWeapp.propsManager.set({
        "isOpened": upgradeVisible,
        "onClose": this.onCloseUpgrade
      }, $compid__101, $prevCompid__101);
      this.$$refs.pushRefs([{
        type: "component",
        id: "fczzz",
        refName: "",
        fn: function fn(node) {
          return _this2.insRef(node);
        }
      }, {
        type: "component",
        id: "fgzzz",
        refName: "",
        fn: function fn(node) {
          return _this2.share = node;
        }
      }, {
        type: "component",
        id: "fhzzz",
        refName: "",
        fn: function fn(node) {
          return _this2.collect = node;
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
        anonymousState__temp20: anonymousState__temp20,
        anonymousState__temp21: anonymousState__temp21,
        anonymousState__temp28: anonymousState__temp28,
        loopArray42: loopArray42,
        loopArray43: loopArray43,
        loopArray44: loopArray44,
        $compid__98: $compid__98,
        $compid__99: $compid__99,
        $compid__100: $compid__100,
        $compid__101: $compid__101,
        styles: _indexModule2.default,
        Assets: _index6.default
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
    value: function anonymousFunc2(_$indexKey) {
      var _anonymousFunc2Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc2Map[_$indexKey] && (_anonymousFunc2Map = this.anonymousFunc2Map)[_$indexKey].apply(_anonymousFunc2Map, e);
    }
  }, {
    key: "anonymousFunc3",
    value: function anonymousFunc3(_$indexKey2) {
      var _anonymousFunc3Map;

      ;

      for (var _len3 = arguments.length, e = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        e[_key3 - 1] = arguments[_key3];
      }

      return this.anonymousFunc3Map[_$indexKey2] && (_anonymousFunc3Map = this.anonymousFunc3Map)[_$indexKey2].apply(_anonymousFunc3Map, e);
    }
  }, {
    key: "anonymousFunc4",
    value: function anonymousFunc4(_$indexKey3) {
      var _anonymousFunc4Map;

      ;

      for (var _len4 = arguments.length, e = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        e[_key4 - 1] = arguments[_key4];
      }

      return this.anonymousFunc4Map[_$indexKey3] && (_anonymousFunc4Map = this.anonymousFunc4Map)[_$indexKey3].apply(_anonymousFunc4Map, e);
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

  return Index;
}(_taroWeapp2.default.Component), _class2.$$events = ["backToHome", "anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "goBackLiveList", "lookMoreMes", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5", "stopPropagation", "anonymousFunc6", "onCloseUpgrade"], _class2.$$componentPath = "pages/index/index", _temp2)) || _class;

exports.default = Index;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Index, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.jsx?taro&type=template&parse=PAGE&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/index/index.jsx?taro&type=template&parse=PAGE& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/index/index.wxml";

/***/ }),

/***/ "./src/pages/index/index.jsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.jsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.jsx?taro&type=template&parse=PAGE& */ "./src/pages/index/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.jsx?taro&type=script&parse=PAGE& */ "./src/pages/index/index.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/index/index.jsx?taro&type=script&parse=PAGE&":
/*!****************************************************************!*\
  !*** ./src/pages/index/index.jsx?taro&type=script&parse=PAGE& ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/index/index.jsx?taro&type=template&parse=PAGE&":
/*!******************************************************************!*\
  !*** ./src/pages/index/index.jsx?taro&type=template&parse=PAGE& ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/index/index.module.styl":
/*!*******************************************!*\
  !*** ./src/pages/index/index.module.styl ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"header":"index-module__header___3u1vt","headerInner":"index-module__headerInner___r1gB6","headerTitle":"index-module__headerTitle___2raBl","indexBtn":"index-module__indexBtn___26n0R","allInner":"index-module__allInner___3_jH0","topInner":"index-module__topInner___1bfDK","scroll_body":"index-module__scroll_body___a6CPi","indexInner":"index-module__indexInner___3eP77","titleTwoInner":"index-module__titleTwoInner___1vPOE","headInner":"index-module__headInner___1Z6kK","headInnerImg":"index-module__headInnerImg___1ZNoa","logoImg":"index-module__logoImg___3SOo1","leftText":"index-module__leftText___17dX8","shopName":"index-module__shopName___3KPOo","bottomContainer":"index-module__bottomContainer___dsvaX","fans":"index-module__fans____T_7y","logoImgMes":"index-module__logoImgMes___26kSD","botInner":"index-module__botInner___1ltwA","numMes":"index-module__numMes___2pCZq","titleMes":"index-module__titleMes___2e8_D","fandom":"index-module__fandom___3vZtf","titleFree":"index-module__titleFree___3mj2h","headeve":"index-module__headeve___23Ya0","headMes":"index-module__headMes___2i0F6","headImg":"index-module__headImg___1aYgw","dailytMes":"index-module__dailytMes___1390t","dailytMes_sec":"index-module__dailytMes_sec___2N-Dj","left_Point_img":"index-module__left_Point_img___3fxTM","leftpoint_Img":"index-module__leftpoint_Img___lckd1","leftPoint":"index-module__leftPoint___2O2bs","rightText":"index-module__rightText___2gmqH","priceTwoInner":"index-module__priceTwoInner___3Eaux","shareLabel":"index-module__shareLabel___20hZi","firInner":"index-module__firInner___3WlSP","noLoaded":"index-module__noLoaded___3KCJy","eveInner":"index-module__eveInner___yg4qH","topContent":"index-module__topContent___2KerB","leftInner":"index-module__leftInner___2XUbq","RightInner":"index-module__RightInner___3fZZf","priceInner":"index-module__priceInner___2ucRz","titleInner":"index-module__titleInner___3JJwc","priLogo":"index-module__priLogo___kCkwr","priStyle":"index-module__priStyle___3z7TP","botStyle":"index-module__botStyle___2s3Ab","pointstyle":"index-module__pointstyle___4YjC5","point":"index-module__point___3p6qM","editorMes":"index-module__editorMes___1WhYA","delItem":"index-module__delItem___3RO6c","downItem":"index-module__downItem___3GlWX","ediItem":"index-module__ediItem___19aQp","sharePrice":"index-module__sharePrice___25pIQ","sharePriceInner":"index-module__sharePriceInner___3OAQN","twoButton":"index-module__twoButton___1gVZn","shareButton":"index-module__shareButton___3fFWW","getButton":"index-module__getButton___2udAK","shareImgMes":"index-module__shareImgMes___2Fyl4","shareImgTe":"index-module__shareImgTe___2oQnJ","liveStyle":"index-module__liveStyle___1577V","imgMes":"index-module__imgMes___3Gzdy","liveLeft":"index-module__liveLeft___2Szp5","imgTopStyle":"index-module__imgTopStyle___RbQDO","liveText":"index-module__liveText___2rbr_","liveLeftText":"index-module__liveLeftText___1O0Yf","myliveIcon":"index-module__myliveIcon___wRG8_","myliveNum":"index-module__myliveNum___2Pa6D","turnLeftText":"index-module__turnLeftText___Fscbo","preLeftText":"index-module__preLeftText___1SVim","liveLeftText_pre":"index-module__liveLeftText_pre___2Qzm-","imgStyle":"index-module__imgStyle___29D7p","liveRight":"index-module__liveRight___308qX","liveRightText":"index-module__liveRightText___2Xzag","turnLiveLabel":"index-module__turnLiveLabel___3XHBN","topHead":"index-module__topHead___1-HFb","botHead":"index-module__botHead___35W1D","eveImg":"index-module__eveImg___1H_ZB","eveImg_mes":"index-module__eveImg_mes___1SmW9","eveNum":"index-module__eveNum___1ULnl","numText":"index-module__numText___2UJfz","all_Mes":"index-module__all_Mes____AAQA","text_Mes":"index-module__text_Mes___1U91R","share_popup":"index-module__share_popup___3Qth-","share_inner":"index-module__share_inner___3mcLI","share_title":"index-module__share_title___1ZKuU","share_content":"index-module__share_content___11evZ","visibility":"index-module__visibility___3JafI","botImg":"index-module__botImg___ennR1","eve_Inner":"index-module__eve_Inner___TeraW","topImg":"index-module__topImg___2gopL","cancalItem":"index-module__cancalItem___2pcd1","cancalBtn":"index-module__cancalBtn___1ib3R","gray":"index-module__gray___Cn9LG","upgrade_tip":"index-module__upgrade_tip___3SgLx","silverImg":"index-module__silverImg___12hnH","img":"index-module__img___2nu25","close":"index-module__close___3jneo","swiper_style":"index-module__swiper_style___2ofRK","pro_style":"index-module__pro_style___15ISd","progress_mes":"index-module__progress_mes___14ZaT","eveProess":"index-module__eveProess___3J-yS","nogoodsContainer":"index-module__nogoodsContainer___1z5l2","nogoodsImg":"index-module__nogoodsImg___1aITX","nogoodsLabel":"index-module__nogoodsLabel___3Lxd6","scroll_content":"index-module__scroll_content___1nGoF","turnLive":"index-module__turnLive___26Tgd","dailytMes_fir":"index-module__dailytMes_fir___1CZF4","turnLive_mes":"index-module__turnLive_mes___3GycB","turnList":"index-module__turnList___3Pahm","turn_Data_List":"index-module__turn_Data_List___mJzLa","fixed_style":"index-module__fixed_style___GiHPr","bot_style":"index-module__bot_style___1xFdD","bgGradient":"index-module__bgGradient___XoSq3","look_More":"index-module__look_More___2nvAB","turn_Data_Img":"index-module__turn_Data_Img___3PzFR","lookNum_style":"index-module__lookNum_style___2yhbR","lookShop_style":"index-module__lookShop_style___1Uvy0","look_more_style":"index-module__look_more_style___V6bEA","icon_style":"index-module__icon_style___Xogcp","fixed_style_img":"index-module__fixed_style_img___2LHwa"};

/***/ })

},[["./src/pages/index/index.jsx","runtime","taro","vendors","common"]]]);