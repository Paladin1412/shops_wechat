(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/goodsdetail/goodsdetail"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/goodsdetail/goodsdetail.jsx?taro&type=script&parse=PAGE&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/goodsdetail/goodsdetail.jsx?taro&type=script&parse=PAGE& ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _class2, _temp2; /**
                              * @Author: qiang.zhang
                              * @Email: 1196217890@qq.com
                              * @Update: 2020-02-25 16:58:26
                              * @Description: 注意注意！！！本页面路径中的companyId、itemId、agentItemId、mark、pageFrom已做转化，全部存在this.state中了
                              */


var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index = __webpack_require__(/*! ../../components/with-page/index */ "./src/components/with-page/index.jsx");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../../model/index */ "./src/model/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../../utils/index */ "./src/utils/index.js");

var _index6 = _interopRequireDefault(_index5);

var _goodsdetailModule = __webpack_require__(/*! ./goodsdetail.module.styl */ "./src/pages/goodsdetail/goodsdetail.module.styl");

var _goodsdetailModule2 = _interopRequireDefault(_goodsdetailModule);

var _index7 = __webpack_require__(/*! ../../config/index */ "./src/config/index.js");

var _index8 = _interopRequireDefault(_index7);

var _index9 = __webpack_require__(/*! ../../components/assets/index */ "./src/components/assets/index.js");

var _index10 = _interopRequireDefault(_index9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Goodsdetail = (0, _index2.default)(_class = (_temp2 = _class2 = function (_Taro$Component) {
  _inherits(Goodsdetail, _Taro$Component);

  function Goodsdetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Goodsdetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Goodsdetail.__proto__ || Object.getPrototypeOf(Goodsdetail)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp6", "anonymousState__temp9", "anonymousState__temp14", "anonymousState__temp15", "anonymousState__temp16", "anonymousState__temp18", "anonymousState__temp19", "anonymousState__temp24", "anonymousState__temp25", "loopArray46", "loopArray47", "loopArray48", "loopArray49", "loopArray50", "$compid__110", "$compid__111", "$compid__112", "$compid__113", "$compid__114", "$compid__115", "defalutImgMes", "styles", "showTop", "pageFrom", "bannerList", "level", "tagList", "noArea", "imgList", "productList", "collectStatus", "skuList", "defalutDetail", "isOpenShare", "currentIndex", "goodsDetail", "isOpenItem", "newValue", "clickItem", "agentItemId", "itemId", "windowH", "companyId", "isLogin", "mark", "mainUrl", "itemTitle", "agentVipTradePrice", "buttonTop", "buttonHeight", "orderSource", "liveId", "pliveId", "selfItem", "noAreaModal", "globalStore"], _this.initData = function () {
      var that = _this;
      _this.getShopInfo();
      _this.addViewRecord();
      _taroWeapp2.default.showShareMenu({
        withShareTicket: true
      });
      _taroWeapp2.default.updateShareMenu({
        withShareTicket: true
      });

      var _Taro$getMenuButtonBo = _taroWeapp2.default.getMenuButtonBoundingClientRect(),
          top = _Taro$getMenuButtonBo.top,
          height = _Taro$getMenuButtonBo.height;

      var _this$$router$params = _this.$router.params,
          _this$$router$params$ = _this$$router$params.orderSource,
          orderSource = _this$$router$params$ === undefined ? 3 : _this$$router$params$,
          liveId = _this$$router$params.liveId,
          pliveId = _this$$router$params.pliveId,
          selfItem = _this$$router$params.selfItem;
      var pageFrom = _this.state.pageFrom;

      _taroWeapp2.default.getSystemInfo({
        success: function success(res) {
          //model中包含着设备信息
          var model = res.model;
          that.setState({
            // hasLiuHai: (model.includes('iPhone X') || model.includes('iPhone 11')),
            // statusBarHeight
            buttonTop: top,
            buttonHeight: height,
            orderSource: Number(orderSource),
            pageFrom: pageFrom,
            liveId: liveId,
            pliveId: pliveId,
            selfItem: selfItem
          });
        }
      });
    }, _this.intercept = function () {
      var pageParams = _this.$router.params;
      if (pageParams.scene) {
        _index4.default.common.parseShortCode({ shortCode: pageParams.scene }).then(function (res) {
          var obj = JSON.parse(res);
          _this.getRealRoute({ sceneMap: obj });
        });
      } else {
        _this.getRealRoute({ sceneMap: {} });
      }
    }, _this.getRealRoute = function (_ref2) {
      var sceneMap = _ref2.sceneMap;

      var pageParams = _this.$router.params;
      var agent = pageParams.agentItemId && pageParams.agentItemId !== 'null' ? pageParams.agentItemId : '';
      var tempitemId = pageParams.itemId && pageParams.itemId !== 'null' ? pageParams.itemId : '';

      var companyId = pageParams.companyId || sceneMap.cId || _this.getCompanyId();
      var pageFrom = pageParams.pageFrom || sceneMap.pageFrom || '';
      var agentItemId = agent || sceneMap.agentItemId || 'null';
      var itemId = tempitemId || sceneMap.itemId || '';
      _this.setState({
        companyId: companyId,
        pageFrom: pageFrom,
        agentItemId: agentItemId,
        itemId: itemId
      }, function () {
        console.log('路由参数', {
          companyId: companyId,
          pageFrom: pageFrom,
          agentItemId: agentItemId,
          itemId: itemId
        });
        _this.initData();
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
      if (userInfo.token) {
        _index4.default.login.addViewRecord({ companyIds: [companyId] });
      } else {
        if (shopCacheList.indexOf(companyId) == -1) {
          shopCacheList.push(companyId);
          globalStore.setData('shopCacheList', shopCacheList, 'goodsdetail.jsx,line:114');
        }
      }
    }, _this.getQrCode = function (params) {
      var _this$state = _this.state,
          agentItemId = _this$state.agentItemId,
          itemId = _this$state.itemId;

      var sceneMap = Object.assign(params, {
        agentItemId: agentItemId,
        itemId: itemId,
        pageFrom: 'goodsdetail'
      });
      console.log('getQrCode', sceneMap);
      _index5.imgshare.getGoodsqrImg(JSON.stringify(sceneMap));
    }, _this.onShareAppMessage = function (options) {
      var _this$state2 = _this.state,
          agentItemId = _this$state2.agentItemId,
          itemId = _this$state2.itemId,
          companyId = _this$state2.companyId,
          mainUrl = _this$state2.mainUrl,
          itemTitle = _this$state2.itemTitle,
          agentVipTradePrice = _this$state2.agentVipTradePrice,
          mark = _this$state2.mark,
          selfItem = _this$state2.selfItem;
      // 设置菜单中的转发按钮触发转发事件时的转发内

      var shareObj = {
        title: "\u6700\u4F4E" + agentVipTradePrice + "\u5143|" + itemTitle, // 默认是小程序的名称(可以写slogan等)
        path: "/pages/goodsdetail/goodsdetail?agentItemId=" + agentItemId + "&itemId=" + itemId + "&companyId=" + companyId + "&mark=" + mark + "&pageFrom=goodsdetail", // 默认是当前页面，必须是以‘/’开头的完整路径
        imageUrl: mainUrl ? _index6.default.appUtils.getFileUrl(mainUrl, { query: 'x-oss-process=image/quality,q_50/format,jpg/interlace,1' }) : '', //自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径，支持PNG及JPG，不传入 imageUrl 则使用默认截图。显示图片长宽比是 5:4
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
          console.log(111);
          // 转发结束之后的回调（转发成不成功都会执行）
        }
      };
      _this.logger({ logs: "C\u7AEF\u5546\u54C1\u8BE6\u60C5\u754C\u9762\u5206\u4EAB,\u53C2\u6570:" + JSON.stringify(shareObj) });
      return shareObj;
    }, _this.getShopInfo = function () {
      var globalStore = _this.props.globalStore;
      var userInfo = globalStore.data.userInfo;
      var companyId = _this.state.companyId;

      _index4.default.goods.shopBaseInfo({
        companyId: companyId
      }).then(function (res) {
        if (res) {
          userInfo.companyId = companyId;
          userInfo.shopId = res.shopId;
          userInfo.shopDetail = res;
          globalStore.setData('userInfo', userInfo, 'goodsdetail.jsx,line:124');
          var isLogin = _this.state.isLogin;

          _this.memberDetail();
          _this.getImage('oneToOne');
          _this.getImage('phoneDetail');
          if (isLogin) {
            _this.getCollectStatus();
            _this.getLevel();
            _this.companyCode();
          } else {
            _this.getQrCode({});
          }
        }
      });
    }, _this.handleChange = function (e) {
      _this.setState({
        currentIndex: e.detail.current + 1
      });
    }, _this.hrefOdwnOrder = function () {
      var globalStore = _this.props.globalStore;
      var _this$state3 = _this.state,
          newValue = _this$state3.newValue,
          defalutImgMes = _this$state3.defalutImgMes,
          goodsDetail = _this$state3.goodsDetail,
          defalutDetail = _this$state3.defalutDetail,
          agentItemId = _this$state3.agentItemId,
          itemId = _this$state3.itemId,
          orderSource = _this$state3.orderSource,
          liveId = _this$state3.liveId,
          pliveId = _this$state3.pliveId,
          mainImgUrl = _this$state3.mainImgUrl,
          noArea = _this$state3.noArea;

      var currentData = {
        agentItemId: agentItemId,
        itemTitle: goodsDetail.itemTitle,
        skuImg: defalutImgMes.skuImg || mainUrl,
        tradePrice: defalutImgMes.agentVipTradePrice, //单价
        brandId: defalutImgMes.brandId,
        brandName: defalutImgMes.brandName,
        count: newValue,
        freePostage: true,
        selectValue: defalutDetail,
        shopName: defalutImgMes.agentShopName,
        supplierId: defalutImgMes.supplierId,
        postage: defalutImgMes.postage,
        skuId: defalutImgMes.skuId,
        stockQty: defalutImgMes.stockQty,
        orderSource: orderSource,
        liveId: orderSource && orderSource == 5 ? pliveId : liveId, //四是直播五是转播
        noArea: noArea
      };
      globalStore.setData('infoForOrder', Object.assign({}, currentData), 'goodsdetail.jsx,line:169');
      globalStore.setData('checkAddress', null, 'goodsdetail.jsx,line:170');
      _taroWeapp2.default.navigateTo({
        url: '/pages/submission/submission'
      });
    }, _this.rightBuy = function (e) {
      _this.setState({
        isOpenItem: true,
        isOpenShare: false
      });
    }, _this.handleChangeItem = function (value) {
      _this.setState({
        newValue: value
      });
    }, _this.shareItem = function () {
      _this.setState({
        isOpenShare: true,
        isOpenItem: false
      });
    }, _this.onCancalItem = function () {
      _this.setState({
        isOpenShare: false
      });
    }, _this.clickItem = function (v, index) {
      var _this$state4 = _this.state,
          defalutDetail = _this$state4.defalutDetail,
          selfItem = _this$state4.selfItem;

      defalutDetail[index].propertyValue = v;
      _this.setState({
        defalutDetail: defalutDetail
      }, function () {
        _this.searchSpecification(defalutDetail[index], selfItem);
      });
    }, _this.searchSpecification = function (propsValues, selfItem) {
      var _this$state5 = _this.state,
          agentItemId = _this$state5.agentItemId,
          skuList = _this$state5.skuList,
          itemId = _this$state5.itemId;

      var params = {
        agentItemId: agentItemId,
        itemId: itemId,
        propsValues: [propsValues]
      };
      _index4.default.goods.getAgentItemPropsValue(params).then(function (data) {
        if (!data) {
          return false;
        }if (data.length > 0) {
          var name = data[0].specsName;
          for (var i = 0, len = skuList.length; i < len; i++) {
            if (name == skuList[i].specsName) {
              skuList[i] = {
                specsName: name,
                propertyValueList: data.map(function (item) {
                  return item.propertyValue;
                })
              };
            }
          }
          _this.setState({
            skuList: skuList
          });
        } else {
          _this.setState({
            defalutDetail: [propsValues]
          });
        }
        _this.getSku();
      });
    }, _this.getSku = function () {
      var _this$state6 = _this.state,
          agentItemId = _this$state6.agentItemId,
          defalutDetail = _this$state6.defalutDetail,
          itemId = _this$state6.itemId;

      var params = {
        itemId: itemId,
        agentItemId: agentItemId,
        propsValues: defalutDetail
      };
      _index4.default.goods.getSku(params).then(function (data) {
        if (!data) {
          return false;
        }_this.setState({
          defalutImgMes: data
        });
      });
    }, _this.memberDetail = function () {
      var _this$state7 = _this.state,
          agentItemId = _this$state7.agentItemId,
          itemId = _this$state7.itemId;

      console.log(typeof agentItemId === "undefined" ? "undefined" : _typeof(agentItemId));
      var currentData = {};
      if (agentItemId && agentItemId !== 'null') {
        currentData.agentItemId = agentItemId;
      } else {
        currentData.agentItemId = itemId;
      }
      console.log(currentData);
      _index4.default.goods.memberDetail(currentData).then(function (res) {
        if (res) {
          var d = res && res.sku || {};
          d.agentStatus = res.agentStatus;
          var _currentData = {
            title: res.itemTitle || '',
            // link: globalThis.location.href || '',
            desc: res.itemDescription || '',
            imgUrl: _index6.default.appUtils.getFileUrl(res.mainImgUrl) || ''
          };
          if (!_currentData.imgUrl) {
            delete _currentData.imgUrl;
          }
          // this.props.withPageScope.updateShareConfig(currentData);
          // res.noArea = [
          //   {
          //     "areaCode": "620000", "areaName": "甘肃省", "level": 0,
          //     "childs": [
          //       {
          //         "areaCode": "620101", "areaName": "兰州市", "level": 1,
          //         "childs": [
          //           { "areaCode": "620105", "areaName": "安宁区", "level": 2, "childs": null },
          //           { "areaCode": "620111", "areaName": "红古区", "level": 2, "childs": null }
          //         ]
          //       },
          //       {
          //         "areaCode": "620100", "areaName": "1兰州市", "level": 1,
          //         "childs": [
          //           { "areaCode": "620105", "areaName": "1安宁区", "level": 2, "childs": null },
          //           { "areaCode": "620111", "areaName": "1红古区", "level": 2, "childs": null }
          //         ]
          //       },

          //     ]
          //   },
          // ]
          console.log('看看默认规格', res.sku && res.sku.propsList || null);
          var that = _this;
          that.setState({
            agentVipTradePrice: res.sku.agentVipTradePrice || null,
            itemTitle: res.itemTitle,
            mainUrl: res.mainImgUrl,
            goodsDetail: res, //详情数据
            defalutDetail: res.sku && res.sku.propsList || null, //默认规格
            defalutImgMes: d, //默认商品
            skuList: res.propsList, //规格列表
            tagList: that.dealTag(res.tagList),
            noArea: res.noArea || []
          }, function () {
            that.getList(res.agentCompanyId);
            _index5.imgshare.getGoodsImg(res.mainImgUrl);
          });
        }
      });
    }, _this.getAreaAll = function (_ref3) {
      var _ref3$noArea = _ref3.noArea,
          noArea = _ref3$noArea === undefined ? [] : _ref3$noArea;

      var str = '';
      noArea.map(function (item, i) {
        str += "" + (i !== 0 ? '、' : '') + item.areaName;
        if (item.childs) {
          str += (item.level === 0 ? ':' : '') + " " + (item.level === 1 ? '(' : '') + "  " + _this.getAreaAll({ noArea: item.childs }) + " " + (item.level === 1 ? ')' : '');
        }
      });
      return str;
    }, _this.memberselfDetail = function (itemId) {
      _index4.default.goods.memberselfDetail({ itemId: itemId }).then(function (res) {
        if (res) {
          var d = res && res.sku || {};
          d.agentStatus = res.agentStatus;
          var currentData = {
            title: res.itemTitle || '',
            // link: globalThis.location.href || '',
            desc: res.itemDescription || '',
            imgUrl: _index6.default.appUtils.getFileUrl(res.mainImgUrl) || ''
          };
          if (!currentData.imgUrl) {
            delete currentData.imgUrl;
          }
          // this.props.withPageScope.updateShareConfig(currentData);
          console.log('看看默认规格', res.sku && res.sku.propsList || null);
          var that = _this;
          that.setState({
            agentVipTradePrice: res.sku.agentVipTradePrice,
            itemTitle: res.itemTitle,
            mainUrl: res.mainImgUrl,
            goodsDetail: res, //详情数据
            defalutDetail: res.sku && res.sku.propsList || null, //默认规格
            defalutImgMes: d, //默认商品
            skuList: res.propsList, //规格列表
            tagList: that.dealTag(res.tagList)
          }, function () {
            that.getList(res.agentCompanyId);
            _index5.imgshare.getGoodsImg(res.mainImgUrl);
          });
        }
      });
    }, _this.dealTag = function (tagList) {
      var a = Object.entries(tagList);
      return a;
    }, _this.getList = function (agentCompanyId) {
      var goodsDetail = _this.state.goodsDetail;

      if (goodsDetail && goodsDetail.agentCompanyId) {
        _index4.default.goods.getRecomdList({
          agentCompanyId: agentCompanyId
        }).then(function (data) {
          if (!data) {
            return false;
          }_this.setState({
            productList: data
          });
        });
      }
    }, _this.getCollect = function (collect) {
      var _this$state8 = _this.state,
          agentItemId = _this$state8.agentItemId,
          itemId = _this$state8.itemId,
          goodsDetail = _this$state8.goodsDetail,
          collectStatus = _this$state8.collectStatus;

      _index4.default.goods.collect({
        agentItemId: agentItemId,
        itemId: itemId,
        agentCompanyId: goodsDetail.agentCompanyId,
        collect: collect // 0:取消,1:关注
      }).then(function (data) {
        if (data) {
          _this.setState({
            collectStatus: !collectStatus
          });
        }
      });
    }, _this.getCollectStatus = function () {
      var _this$state9 = _this.state,
          agentItemId = _this$state9.agentItemId,
          itemId = _this$state9.itemId;

      var currentData = {
        agentItemId: agentItemId && agentItemId !== 'null' ? agentItemId : itemId
      };
      _index4.default.goods.isCollect(currentData).then(function (data) {
        if (data) {
          _this.setState({
            collectStatus: data
          });
        }
      });
    }, _this.getValueMes = function (defalutDetail) {
      var newPrice = (defalutDetail || []).map(function (v) {
        return v.propertyValue;
      });
      var priceMes = newPrice.join('/');
      return priceMes;
    }, _this.getImage = function (type) {
      var itemId = _this.state.itemId;

      _index4.default.goods.getImage({
        bizId: itemId,
        bizType: 'item',
        type: type
      }).then(function (data) {
        if (!data) {
          return false;
        }if (type == 'oneToOne') {
          _this.setState({
            bannerList: data.records
          });
        } else if (type == 'phoneDetail') {
          _this.setState({
            imgList: data.records
          });
        }
      });
    }, _this.goUrl = function (type) {
      var companyId = _this.state.companyId;

      if (type == 'home') {
        _taroWeapp2.default.switchTab({
          url: "/pages/index/index?companyId=" + companyId
        });
      } else {
        _taroWeapp2.default.switchTab({
          url: "/pages/contactus/contactus"
        });
      }
    }, _this.goIndex = function () {
      _taroWeapp2.default.switchTab({
        url: "/pages/index/index"
      });
    }, _this.goBack = function () {
      _taroWeapp2.default.navigateBack(-1);
    }, _this.companyCode = function () {
      _index4.default.inviter.userCode().then(function (res) {
        if (res) {
          _this.setState({
            mark: res.invitationCode
          });
          _this.getQrCode({
            M: res.invitationCode,
            cId: res.companyId
          });
        }
      });
    }, _this.getLevel = function () {
      var companyId = _this.getCompanyId();
      _index4.default.order.getShopMemberLevelInfo({ companyId: companyId }).then(function (data) {
        if (!data) {
          return;
        }_this.setState({
          level: Number(data.memberLevel)
        });
      });
    }, _this.onScroll = function (e) {
      var top = e.detail.scrollTop;
      if (top > 100) {
        _this.setState({
          showTop: true
        });
      } else {
        _this.setState({
          showTop: false
        });
      }
    }, _this.stopPropagation = function (e) {
      e.preventDefault();
      e.stopPropagation();
    }, _this.config = {
      navigationBarTitleText: '商品详情',
      navigationStyle: 'custom'
      // navigationBarBackgroundColor: '#d'
    }, _this.anonymousFunc8Map = {}, _this.customComponents = ["Ellipsis", "Item", "AtFloatLayout", "AtInputNumber", "Share"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Goodsdetail, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Goodsdetail.prototype.__proto__ || Object.getPrototypeOf(Goodsdetail.prototype), "_constructor", this).call(this, props);

      this.state = {
        currentIndex: 1,
        isOpenItem: false,
        isOpenShare: false,
        newValue: 1,
        goodsDetail: {},
        clickItem: [],
        defalutDetail: [],
        defalutImgMes: '',
        skuList: [],
        agentItemId: null,
        itemId: null,
        bannerList: [], // banner图
        imgList: [], //详情图
        windowH: '500px',
        companyId: null,
        productList: [],
        collectStatus: false, //状态
        level: 1,
        isLogin: _taroWeapp2.default.getStorageSync('userInfo') && _taroWeapp2.default.getStorageSync('userInfo').companyId && _taroWeapp2.default.getStorageSync('userInfo').token, //是否登陆
        mark: '',
        mainUrl: '', // 主图
        itemTitle: '',
        agentVipTradePrice: '',
        showTop: false,
        // hasLiuHai: false,
        buttonTop: 0,
        buttonHeight: 0,
        tagList: '',
        pageFrom: '',
        orderSource: '',
        liveId: '',
        pliveId: '',
        selfItem: '',
        noAreaModal: false
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentWillReact",
    value: function componentWillReact() {}
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      _index5.imgshare.initDetailShare();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.intercept();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _index5.imgshare.clearGoodsShare();
    }
    /**
     * 记录浏览店铺
     */

    // 根绝规格查询其他可选规格


    // 查询sku  非自营


    /**
     *  处理规格
    */


    //推荐商品列表


    // 收藏关注

    // 关注状态


    // 邀请信息

  }, {
    key: "_createData",
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__110"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__110 = _genCompid2[0],
          $compid__110 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__111"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__111 = _genCompid4[0],
          $compid__111 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__112"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__112 = _genCompid6[0],
          $compid__112 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__113"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__113 = _genCompid8[0],
          $compid__113 = _genCompid8[1];

      var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "$compid__114"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__114 = _genCompid10[0],
          $compid__114 = _genCompid10[1];

      var _genCompid11 = (0, _taroWeapp.genCompid)(__prefix + "$compid__115"),
          _genCompid12 = _slicedToArray(_genCompid11, 2),
          $prevCompid__115 = _genCompid12[0],
          $compid__115 = _genCompid12[1];

      var _state = this.__state,
          currentIndex = _state.currentIndex,
          isOpenItem = _state.isOpenItem,
          newValue = _state.newValue,
          isOpenShare = _state.isOpenShare,
          goodsDetail = _state.goodsDetail,
          defalutDetail = _state.defalutDetail,
          defalutImgMes = _state.defalutImgMes,
          skuList = _state.skuList,
          bannerList = _state.bannerList,
          imgList = _state.imgList,
          windowH = _state.windowH,
          productList = _state.productList,
          collectStatus = _state.collectStatus,
          level = _state.level,
          agentItemId = _state.agentItemId,
          companyId = _state.companyId,
          mark = _state.mark,
          mainUrl = _state.mainUrl,
          showTop = _state.showTop,
          buttonTop = _state.buttonTop,
          buttonHeight = _state.buttonHeight,
          tagList = _state.tagList,
          pageFrom = _state.pageFrom,
          orderSource = _state.orderSource,
          noArea = _state.noArea,
          noAreaModal = _state.noAreaModal;

      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)({
        height: isOpenItem || isOpenShare ? "" + windowH : '100%'
      });
      var anonymousState__temp2 = (0, _taroWeapp.internal_inline_style)({ marginTop: buttonTop + "px", height: buttonHeight + "px" });
      var anonymousState__temp3 = _index6.default.appUtils.getFileUrl(_index10.default.common.go_back, { w: 64 });

      this.anonymousFunc0 = function (e) {
        return _this2.handleChange(e);
      };

      var anonymousState__temp6 = level >= 2 && defalutImgMes.maxFee > 0 ? (0, _taroWeapp.internal_inline_style)({ marginLeft: '10px' }) : null;

      this.anonymousFunc1 = function () {
        return _this2.setState({ noAreaModal: true });
      };

      var anonymousState__temp9 = noArea && noArea.length > 0 ? this.getAreaAll({ noArea: noArea }) : null;

      this.anonymousFunc2 = function () {
        return _this2.goUrl('home');
      };

      var anonymousState__temp14 = (0, _taroWeapp.internal_inline_style)({ fontSize: '18px' });

      this.anonymousFunc3 = function () {
        return _this2.getCollect(collectStatus ? 0 : 1);
      };

      var anonymousState__temp15 = defalutImgMes && defalutImgMes.agentStatus == 'ON_SALES' ? (0, _taroWeapp.internal_inline_style)({ fontSize: '18px' }) : null;

      this.anonymousFunc4 = function () {
        return _this2.goUrl('contactn');
      };

      var anonymousState__temp16 = (0, _taroWeapp.internal_inline_style)({ fontSize: '18px' });

      this.anonymousFunc11 = function (e) {
        return _this2.rightBuy(e);
      };

      this.anonymousFunc5 = function (e) {
        _this2.shareItem(e);
      };

      this.anonymousFunc6 = function () {
        _this2.setState({
          isOpenItem: false
        });
      };

      this.anonymousFunc7 = function () {
        _this2.setState({
          isOpenItem: false
        });
      };

      var anonymousState__temp18 = (0, _taroWeapp.internal_inline_style)({ backgroundImage: "url(" + _index6.default.appUtils.getFileUrl(defalutImgMes.skuImg ? defalutImgMes.skuImg : mainUrl, { w: 178, h: 178 }) + ")" });
      var anonymousState__temp19 = this.getValueMes(defalutDetail);

      this.anonymousFunc9 = function (e) {
        return _this2.handleChangeItem(e);
      };

      var anonymousState__temp24 = _index6.default.appUtils.getFileUrl(mainUrl, { w: 178, h: 178 });
      var anonymousState__temp25 = {
        code: mark,
        link: _index8.default.webHost + "/#/pages/goodsdetail/goodsdetail?agentItemId=" + agentItemId + "&itemId=" + goodsDetail.itemId + "&companyId=" + companyId + "&mark=" + mark,
        type: 'goodsDetail',
        showShareImg: true,
        price: defalutImgMes.agentVipTradePrice,
        originPrice: defalutImgMes.agentScribingPrice || '',
        title: goodsDetail.itemTitle
      };

      this.anonymousFunc10 = function () {
        return _this2.setState({ noAreaModal: false });
      };

      var loopArray46 = (bannerList || []).map(function (item, _anonIdx) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var $loopState__temp5 = (0, _taroWeapp.internal_inline_style)({ backgroundImage: "url(" + _index6.default.appUtils.getFileUrl(item.$original.url) + ")" });
        return {
          $loopState__temp5: $loopState__temp5,
          $original: item.$original
        };
      });
      var loopArray47 = tagList && tagList.length > 0 ? tagList.map(function (v, index) {
        v = {
          $original: (0, _taroWeapp.internal_get_original)(v)
        };
        var $loopState__temp8 = tagList && tagList.length > 0 ? v.$original[1].length !== 0 ? index + 1 : null : null;
        return {
          $loopState__temp8: $loopState__temp8,
          $original: v.$original
        };
      }) : [];
      var loopArray48 = imgList.length > 0 ? (imgList || []).map(function (v, index) {
        v = {
          $original: (0, _taroWeapp.internal_get_original)(v)
        };
        var $loopState__temp11 = imgList.length > 0 ? index + 1 : null;
        var $loopState__temp13 = imgList.length > 0 ? _index6.default.appUtils.getFileUrl(v.$original.url) : null;
        return {
          $loopState__temp11: $loopState__temp11,
          $loopState__temp13: $loopState__temp13,
          $original: v.$original
        };
      }) : [];
      var loopArray49 = (skuList || []).map(function (v, index) {
        v = {
          $original: (0, _taroWeapp.internal_get_original)(v)
        };
        var $loopState__temp21 = index + 1;
        var $anonymousCallee__12 = v.$original.propertyValueList ? v.$original.propertyValueList.map(function (v1, idx) {
          v1 = {
            $original: (0, _taroWeapp.internal_get_original)(v1)
          };
          var $loopState__temp23 = v.$original.propertyValueList ? idx + 1 : null;
          var _$indexKey = "gfzzz" + index + "-" + idx;

          _this2.anonymousFunc8Map[_$indexKey] = function () {
            return _this2.clickItem(v1.$original, index);
          };

          return {
            $loopState__temp23: $loopState__temp23,
            _$indexKey: _$indexKey,
            $original: v1.$original
          };
        }) : [];
        return {
          $loopState__temp21: $loopState__temp21,
          $anonymousCallee__12: $anonymousCallee__12,
          $original: v.$original
        };
      });
      var loopArray50 = (noArea || []).map(function (item, _anonIdx3) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var $loopState__temp27 = item.$original.childs && _this2.getAreaAll({ noArea: item.$original.childs });
        return {
          $loopState__temp27: $loopState__temp27,
          $original: item.$original
        };
      });
      noArea && noArea.length > 0 && _taroWeapp.propsManager.set({
        "count": 1
      }, $compid__110, $prevCompid__110);
      _taroWeapp.propsManager.set({
        "data": productList
      }, $compid__111, $prevCompid__111);
      _taroWeapp.propsManager.set({
        "isOpened": isOpenItem,
        "onClose": this.anonymousFunc6
      }, $compid__112, $prevCompid__112);
      _taroWeapp.propsManager.set({
        "min": 1,
        "max": defalutImgMes.stockQty,
        "step": 1,
        "value": newValue,
        "onChange": this.anonymousFunc9
      }, $compid__113, $prevCompid__113);
      _taroWeapp.propsManager.set({
        "params": anonymousState__temp25
      }, $compid__114, $prevCompid__114);
      _taroWeapp.propsManager.set({
        "isOpened": noAreaModal,
        "title": "\u4E0D\u53D1\u8D27\u5730\u533A",
        "onClose": this.anonymousFunc10
      }, $compid__115, $prevCompid__115);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp6: anonymousState__temp6,
        anonymousState__temp9: anonymousState__temp9,
        anonymousState__temp14: anonymousState__temp14,
        anonymousState__temp15: anonymousState__temp15,
        anonymousState__temp16: anonymousState__temp16,
        anonymousState__temp18: anonymousState__temp18,
        anonymousState__temp19: anonymousState__temp19,
        anonymousState__temp24: anonymousState__temp24,
        anonymousState__temp25: anonymousState__temp25,
        loopArray46: loopArray46,
        loopArray47: loopArray47,
        loopArray48: loopArray48,
        loopArray49: loopArray49,
        loopArray50: loopArray50,
        $compid__110: $compid__110,
        $compid__111: $compid__111,
        $compid__112: $compid__112,
        $compid__113: $compid__113,
        $compid__114: $compid__114,
        $compid__115: $compid__115,
        styles: _goodsdetailModule2.default,
        noArea: noArea
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
    value: function anonymousFunc8(_$indexKey) {
      var _anonymousFunc8Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc8Map[_$indexKey] && (_anonymousFunc8Map = this.anonymousFunc8Map)[_$indexKey].apply(_anonymousFunc8Map, e);
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
  }, {
    key: "anonymousFunc11",
    value: function anonymousFunc11(e) {
      ;
    }
  }]);

  return Goodsdetail;
}(_taroWeapp2.default.Component), _class2.$$events = ["anonymousFunc11", "goBack", "onScroll", "anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5", "goIndex", "anonymousFunc7", "anonymousFunc8", "hrefOdwnOrder", "onCancalItem", "stopPropagation"], _class2.$$componentPath = "pages/goodsdetail/goodsdetail", _temp2)) || _class;

exports.default = Goodsdetail;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Goodsdetail, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/goodsdetail/goodsdetail.jsx?taro&type=template&parse=PAGE&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/goodsdetail/goodsdetail.jsx?taro&type=template&parse=PAGE& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/goodsdetail/goodsdetail.wxml";

/***/ }),

/***/ "./src/pages/goodsdetail/goodsdetail.jsx":
/*!***********************************************!*\
  !*** ./src/pages/goodsdetail/goodsdetail.jsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _goodsdetail_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goodsdetail.jsx?taro&type=template&parse=PAGE& */ "./src/pages/goodsdetail/goodsdetail.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _goodsdetail_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goodsdetail.jsx?taro&type=script&parse=PAGE& */ "./src/pages/goodsdetail/goodsdetail.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _goodsdetail_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _goodsdetail_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/goodsdetail/goodsdetail.jsx?taro&type=script&parse=PAGE&":
/*!****************************************************************************!*\
  !*** ./src/pages/goodsdetail/goodsdetail.jsx?taro&type=script&parse=PAGE& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_goodsdetail_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./goodsdetail.jsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/goodsdetail/goodsdetail.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_goodsdetail_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_goodsdetail_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_goodsdetail_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_goodsdetail_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_goodsdetail_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/goodsdetail/goodsdetail.jsx?taro&type=template&parse=PAGE&":
/*!******************************************************************************!*\
  !*** ./src/pages/goodsdetail/goodsdetail.jsx?taro&type=template&parse=PAGE& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_goodsdetail_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./goodsdetail.jsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/goodsdetail/goodsdetail.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_goodsdetail_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_goodsdetail_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_goodsdetail_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_goodsdetail_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/goodsdetail/goodsdetail.module.styl":
/*!*******************************************************!*\
  !*** ./src/pages/goodsdetail/goodsdetail.module.styl ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"imgturn":"goodsdetail-module__imgturn___14BMd","bannerMes":"goodsdetail-module__bannerMes___17ILI","bannerImg":"goodsdetail-module__bannerImg___3QmXG","banner_img_items":"goodsdetail-module__banner_img_items___2TcVB","numPoint":"goodsdetail-module__numPoint___C-kZE","detailprice":"goodsdetail-module__detailprice___adHqt","detailMes":"goodsdetail-module__detailMes___Rmu7X","titleGoods":"goodsdetail-module__titleGoods___ZITiB","tuijian_buy":"goodsdetail-module__tuijian_buy___1gG8a","priceLogo":"goodsdetail-module__priceLogo___2lbDO","priceNum":"goodsdetail-module__priceNum___2pUiX","getPrice":"goodsdetail-module__getPrice___2IX9m","price_sales":"goodsdetail-module__price_sales___ouIwx","topMes":"goodsdetail-module__topMes___c2P6f","topleft":"goodsdetail-module__topleft___1WdVR","originPrice":"goodsdetail-module__originPrice___1L3VO","volume_text":"goodsdetail-module__volume_text___XHDzS","originpriceNum":"goodsdetail-module__originpriceNum___2SINX","volume_num":"goodsdetail-module__volume_num___2MHDM","backpoint":"goodsdetail-module__backpoint___1gt99","goodsName":"goodsdetail-module__goodsName___2pmlB","allImg":"goodsdetail-module__allImg___3O9hi","img_item":"goodsdetail-module__img_item___3dqL9","off_notice":"goodsdetail-module__off_notice___2Wain","footbar":"goodsdetail-module__footbar___3Mp4m","leftFootbar":"goodsdetail-module__leftFootbar___3gkGS","rightFootbar":"goodsdetail-module__rightFootbar___26U3R","leftButton":"goodsdetail-module__leftButton___2ySnA","leftButton1":"goodsdetail-module__leftButton1___3QIeK","rightButton":"goodsdetail-module__rightButton___1XaKO","btnfooter":"goodsdetail-module__btnfooter___2niug","right_btn":"goodsdetail-module__right_btn___1MELn","openInner":"goodsdetail-module__openInner___2eJbY","icon_box":"goodsdetail-module__icon_box___2lFSt","icon_close":"goodsdetail-module__icon_close___3i4xQ","pricePhoto":"goodsdetail-module__pricePhoto___2Icq0","leftPriceImg":"goodsdetail-module__leftPriceImg___1-YTr","selectColor":"goodsdetail-module__selectColor___HA4Qd","eveMes":"goodsdetail-module__eveMes___q4QHl","titleMes":"goodsdetail-module__titleMes___35owq","spaceEve":"goodsdetail-module__spaceEve___kt4bQ","eveStyle":"goodsdetail-module__eveStyle___3ffF5","activeColor":"goodsdetail-module__activeColor___1o7IA","button_box":"goodsdetail-module__button_box___1bNwj","buyButton":"goodsdetail-module__buyButton___1aUNP","active":"goodsdetail-module__active____zeGl","share_avatar":"goodsdetail-module__share_avatar___3l1Eh","getMoney":"goodsdetail-module__getMoney___2SmGz","money_sign":"goodsdetail-module__money_sign___E8Y2X","money_num":"goodsdetail-module__money_num___3vhVQ","own_money":"goodsdetail-module__own_money___10YVg","sign":"goodsdetail-module__sign___3iZKt","share_title":"goodsdetail-module__share_title___TSavU","botImg":"goodsdetail-module__botImg___1zPTv","eveInner":"goodsdetail-module__eveInner___K8Jfo","topImg":"goodsdetail-module__topImg___uYDKf","cancalItem":"goodsdetail-module__cancalItem___2JpMY","cancalBtn":"goodsdetail-module__cancalBtn___2EhwI","gray":"goodsdetail-module__gray___34MWj","detail_box":"goodsdetail-module__detail_box___TcwO4","buy_layout":"goodsdetail-module__buy_layout___1Skm5","content_box":"goodsdetail-module__content_box___gxjzz","top_box":"goodsdetail-module__top_box___3C3wI","top_inner":"goodsdetail-module__top_inner___VbSgK","font":"goodsdetail-module__font___2jzTB","back_img":"goodsdetail-module__back_img___34PED","go_back_icon":"goodsdetail-module__go_back_icon___1Ullh","top_box_active":"goodsdetail-module__top_box_active___3uIEb","inline_style":"goodsdetail-module__inline_style___1LRa9","label":"goodsdetail-module__label___3aGI7","inline_mes":"goodsdetail-module__inline_mes___1lJVd","share_popup":"goodsdetail-module__share_popup___3JmS0","visibility":"goodsdetail-module__visibility___dQQP7","share_inner":"goodsdetail-module__share_inner___D-3WL","popup_header":"goodsdetail-module__popup_header___3WtvS","popup_body":"goodsdetail-module__popup_body___34ygK","mes_item":"goodsdetail-module__mes_item___2_sXN","left":"goodsdetail-module__left___2nXpT","title":"goodsdetail-module__title___3GQBP","area":"goodsdetail-module__area___3frot","icon_more":"goodsdetail-module__icon_more___2DSAt","noArea_box":"goodsdetail-module__noArea_box___2pEe5","item":"goodsdetail-module__item___2AW0L","mes":"goodsdetail-module__mes___1qAVQ"};

/***/ })

},[["./src/pages/goodsdetail/goodsdetail.jsx","runtime","taro","vendors","common"]]]);