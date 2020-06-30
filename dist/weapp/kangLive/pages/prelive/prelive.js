(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["kangLive/pages/prelive/prelive"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/kangLive/pages/prelive/prelive.jsx?taro&type=script&parse=PAGE&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/kangLive/pages/prelive/prelive.jsx?taro&type=script&parse=PAGE& ***!
  \**************************************************************************************************************************************************************/
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
                              * @Update: 2020-04-17 14:35:56
                              * @Description: 预约直播页面
                              */


var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index = __webpack_require__(/*! ../../../utils/index */ "./src/utils/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../../../components/with-page/index */ "./src/components/with-page/index.jsx");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../../../model/index */ "./src/model/index.js");

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__(/*! ../../../components/assets/index */ "./src/components/assets/index.js");

var _index8 = _interopRequireDefault(_index7);

var _index9 = __webpack_require__(/*! ../../../utils/common/index */ "./src/utils/common/index.js");

var _index10 = _interopRequireDefault(_index9);

var _preliveModule = __webpack_require__(/*! ./prelive.module.styl */ "./src/kangLive/pages/prelive/prelive.module.styl");

var _preliveModule2 = _interopRequireDefault(_preliveModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 下面代码可删用于测试事件延迟效果


var Prelive = (0, _index4.default)(_class = (_temp2 = _class2 = function (_Taro$Component) {
  _inherits(Prelive, _Taro$Component);

  function Prelive() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Prelive);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Prelive.__proto__ || Object.getPrototypeOf(Prelive)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "anonymousState__temp5", "anonymousState__temp6", "anonymousState__temp7", "anonymousState__temp8", "loopArray70", "styles", "showTop", "liveDetail", "Assets", "liveHad", "shopList", "mark", "liveMes", "timeCount", "companyMes", "buttonTop", "buttonHeight", "liveId", "isLiveOrRedirectLive"], _this.getCompanyCode = function () {
      _index6.default.inviter.userCode().then(function (res) {
        if (res) {
          _this.setState({
            mark: res.invitationCode
          });
        }
      });
    }, _this.onShareAppMessage = function () {
      _this.logger({ logs: 'C端分享' });
      var _this$state = _this.state,
          mark = _this$state.mark,
          liveDetail = _this$state.liveDetail,
          liveId = _this$state.liveId,
          isLiveOrRedirectLive = _this$state.isLiveOrRedirectLive;

      var companyId = _this.getCompanyId();
      var shareObj = {
        title: liveDetail.name,
        path: "/kangLive/pages/prelive/prelive?companyId=" + companyId + "&liveId=" + liveId + "&mark=" + mark + "&isLiveOrRedirectLive=" + isLiveOrRedirectLive,
        imageUrl: _index2.default.appUtils.getFileUrl(liveDetail.adverImgUrl),
        success: function success(res) {
          // 转发成功之后的回调
          if (res.errMsg == 'shareAppMessage:ok') {
            console.log('转发成功');
          }
        },
        fail: function fail(res) {
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
    }, _this.findDetail = function () {
      var _this$state2 = _this.state,
          liveId = _this$state2.liveId,
          isLiveOrRedirectLive = _this$state2.isLiveOrRedirectLive;

      var currentData = {
        liveId: liveId
      };
      if (!isLiveOrRedirectLive) {
        _index6.default.liveapi.getReservationLiveDetail(currentData).then(function (res) {
          var that = _this;
          if (res) {
            that.setState({
              liveDetail: res.liveBroadcastVO,
              shopList: res.recommendItemVOList
            }, function () {
              var liveDetail = that.state.liveDetail;

              if (liveDetail.liveStatus == 1) {
                that.timeMes = setInterval(function () {
                  that.countItem(liveDetail.startTime);
                }, 1000);
              }
            });
          }
        });
      } else {
        _index6.default.liveapi.getReservationLiveDetailForRedirect(currentData).then(function (res) {
          var that = _this;
          if (res) {
            that.setState({
              liveDetail: res.liveBroadcastVO,
              shopList: res.recommendItemVOList
            }, function () {
              var liveDetail = that.state.liveDetail;

              if (liveDetail.liveStatus == 1) {
                that.timeMes = setInterval(function () {
                  that.countItem(liveDetail.startTime);
                }, 1000);
              }
            });
          }
        });
      }
    }, _this.memberStatistics = function () {
      var companyId = _this.getCompanyId();
      var currentData = {
        companyId: companyId
      };
      _index6.default.goods.shopBaseInfo(currentData).then(function (res) {
        if (res) {
          _this.setState({
            companyMes: res
          });
        }
      });
    }, _this.queryStreamStatus = function () {
      // "streamStatus" : 1    // 0-活跃  1-禁播  2-非活跃
      var liveId = _this.state.liveId;

      var currentData = {
        liveId: liveId
      };
      var that = _this;
      _index6.default.liveapi.queryStreamStatus(currentData).then(function (res) {
        if (!res) {
          return false;
        }that.setState({
          liveMes: res
        });
      });
    }, _this.goItemlive = function () {
      var liveDetail = _this.state.liveDetail;

      _taroWeapp2.default.navigateTo({
        url: "/kangLive/pages/golive/golive?liveId=" + liveDetail.id
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
    }, _this.shareItem = function (item, type) {
      var companyId = _this.getCompanyId();
      if (type === 2) {
        _taroWeapp2.default.navigateTo({
          url: "/pages/goodsdetail/goodsdetail?agentItemId=" + item.agentItemId + "&itemId=" + item.itemId + "&companyId=" + (companyId || _taroWeapp2.default.getStorageSync('userInfo').companyId) + "&selfItem=" + item.selfItem
        });
      }
    }, _this.countItem = function (end) {
      var date = new Date();
      var now = date.getTime();
      var leftTime = end - now;
      var d, h, m, s;
      if (leftTime >= 0) {
        if (leftTime >= 0) {
          d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
          h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
          m = Math.floor(leftTime / 1000 / 60 % 60);
          s = Math.floor(leftTime / 1000 % 60);
        }
        d = _this.checkTime(d);
        h = _this.checkTime(h);
        m = _this.checkTime(m);
        s = _this.checkTime(s);

        _this.setState({
          timeCount: d + "\u5929" + h + "\u65F6" + m + "\u5206" + s + "\u79D2",
          liveHad: 1
        });
      } else {
        _this.setState({
          liveHad: 0
        });
      }
    }, _this.checkTime = function (i) {
      if (i < 10) {
        i = '0' + i;
      }
      return i;
    }, _this.goIndex = function () {
      _taroWeapp2.default.switchTab({
        url: '/pages/index/index'
      });
    }, _this.config = {
      // navigationBarTitleText: '初始化界面标题',
      navigationStyle: 'custom',
      navigationBarTextStyle: 'white'
    }, _this.customComponents = ["Ellipsis"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Prelive, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Prelive.prototype.__proto__ || Object.getPrototypeOf(Prelive.prototype), "_constructor", this).call(this, props);

      this.state = {
        buttonTop: '',
        buttonHeight: '',
        shopList: [1, 2, 3, 4, 5, 6],
        showTop: false,
        liveId: this.$router.params.liveId,
        mark: '',
        liveDetail: '',
        companyMes: '',
        timeCount: '',
        liveMes: '',
        liveHad: '',
        isLiveOrRedirectLive: this.$router.params.isLiveOrRedirectLive
      };

      _index.appUtils.delay(this, ['goItemlive']);
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentWillReact",
    value: function componentWillReact() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}

    //  获取自己的邀请码

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.timeMes);
    }
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      _taroWeapp2.default.showShareMenu({
        withShareTicket: true
      });
      _taroWeapp2.default.updateShareMenu({
        withShareTicket: true
      });

      var _Taro$getMenuButtonBo = _taroWeapp2.default.getMenuButtonBoundingClientRect(),
          top = _Taro$getMenuButtonBo.top,
          height = _Taro$getMenuButtonBo.height;

      var that = this;
      that.setState({
        buttonTop: top,
        buttonHeight: height
      }, function () {
        that.findDetail();
        that.memberStatistics();
        that.queryStreamStatus();
      });
    }
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}

    /**
     * 获取直播详情信息
     * */

    /**
     * @description: 获取店铺头像
     * @param {type} 
     * @return: 
     */

    /**
     * 获取流状态
     * */

    /**
     * 检测手势内容
     * */

    /**
     * 进入商品详情
     * */

    // 时间倒计时计算


    /**
     * 返回上一页
     * */

  }, {
    key: "_createData",
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _state = this.__state,
          buttonTop = _state.buttonTop,
          buttonHeight = _state.buttonHeight,
          shopList = _state.shopList;
      var _state2 = this.__state,
          liveDetail = _state2.liveDetail,
          companyMes = _state2.companyMes,
          timeCount = _state2.timeCount,
          liveMes = _state2.liveMes,
          mark = _state2.mark,
          showTop = _state2.showTop,
          liveHad = _state2.liveHad;

      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)({ marginTop: buttonTop + "px", height: buttonHeight + "px" });
      var anonymousState__temp2 = _index2.default.appUtils.getFileUrl(_index8.default.common.go_back, { w: 64 });
      var anonymousState__temp3 = _index2.default.appUtils.getFileUrl(liveDetail.adverImgUrl);
      var anonymousState__temp4 = (0, _taroWeapp.internal_inline_style)({ top: buttonTop + buttonHeight + 34 + "px" });
      var anonymousState__temp5 = liveDetail.liveStatus == 1 ? _index10.default.formatDateTime(liveDetail.startTime) : null;
      var anonymousState__temp6 = liveDetail.liveStatus == 1 ? (0, _taroWeapp.internal_inline_style)({ top: buttonTop + buttonHeight + 160 + "px" }) : null;
      var anonymousState__temp7 = _index2.default.appUtils.getFileUrl(companyMes.logo || _index8.default.goods.defalutHead);
      var anonymousState__temp8 = (0, _taroWeapp.internal_inline_style)({ paddingBottom: '140px' });
      this.anonymousFunc0 = mark ? null : function () {
        return _this2.getCompanyCode();
      };
      this.anonymousFunc1 = liveMes == 0 ? this.goItemlive : null;
      var loopArray70 = (shopList || []).map(function (v, _anonIdx) {
        v = {
          $original: (0, _taroWeapp.internal_get_original)(v)
        };
        var $loopState__temp10 = _index2.default.appUtils.getFileUrl(v.$original.mainImgUrl) || _index8.default.home.backImage;

        var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "igzzzzzzzz" + _anonIdx, true),
            _genCompid2 = _slicedToArray(_genCompid, 2),
            $prevCompid__173 = _genCompid2[0],
            $compid__173 = _genCompid2[1];

        _taroWeapp.propsManager.set({
          "count": 2
        }, $compid__173, $prevCompid__173);
        return {
          $loopState__temp10: $loopState__temp10,
          $compid__173: $compid__173,
          $original: v.$original
        };
      });
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        anonymousState__temp5: anonymousState__temp5,
        anonymousState__temp6: anonymousState__temp6,
        anonymousState__temp7: anonymousState__temp7,
        anonymousState__temp8: anonymousState__temp8,
        loopArray70: loopArray70,
        styles: _preliveModule2.default,
        Assets: _index8.default
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

  return Prelive;
}(_taroWeapp2.default.Component), _class2.$$events = ["goIndex", "onScroll", "anonymousFunc0", "anonymousFunc1"], _class2.$$componentPath = "kangLive/pages/prelive/prelive", _temp2)) || _class;

exports.default = Prelive;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Prelive, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/kangLive/pages/prelive/prelive.jsx?taro&type=template&parse=PAGE&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/kangLive/pages/prelive/prelive.jsx?taro&type=template&parse=PAGE& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "kangLive/pages/prelive/prelive.wxml";

/***/ }),

/***/ "./src/kangLive/pages/prelive/prelive.jsx":
/*!************************************************!*\
  !*** ./src/kangLive/pages/prelive/prelive.jsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prelive_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prelive.jsx?taro&type=template&parse=PAGE& */ "./src/kangLive/pages/prelive/prelive.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _prelive_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prelive.jsx?taro&type=script&parse=PAGE& */ "./src/kangLive/pages/prelive/prelive.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _prelive_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _prelive_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/kangLive/pages/prelive/prelive.jsx?taro&type=script&parse=PAGE&":
/*!*****************************************************************************!*\
  !*** ./src/kangLive/pages/prelive/prelive.jsx?taro&type=script&parse=PAGE& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_prelive_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./prelive.jsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/kangLive/pages/prelive/prelive.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_prelive_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_prelive_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_prelive_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_prelive_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_prelive_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/kangLive/pages/prelive/prelive.jsx?taro&type=template&parse=PAGE&":
/*!*******************************************************************************!*\
  !*** ./src/kangLive/pages/prelive/prelive.jsx?taro&type=template&parse=PAGE& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_prelive_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!../../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./prelive.jsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/kangLive/pages/prelive/prelive.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_prelive_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_prelive_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_prelive_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_prelive_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/kangLive/pages/prelive/prelive.module.styl":
/*!********************************************************!*\
  !*** ./src/kangLive/pages/prelive/prelive.module.styl ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"pre_imgMes":"prelive-module__pre_imgMes___2btHf","pre_img_detail":"prelive-module__pre_img_detail___1imeX","liveLeftText":"prelive-module__liveLeftText___1DVhc","liveLeftText_livemes":"prelive-module__liveLeftText_livemes___212pE","imgStyle":"prelive-module__imgStyle___3NvDq","liveText":"prelive-module__liveText___6sZgP","pre_time":"prelive-module__pre_time___3ugB7","pre_time_button":"prelive-module__pre_time_button___1i0nm","liveRight":"prelive-module__liveRight___FEo34","liveRightText":"prelive-module__liveRightText___3o573","top_box":"prelive-module__top_box___2Bn4J","top_inner":"prelive-module__top_inner___2D5L0","font":"prelive-module__font___3gqC-","back_img":"prelive-module__back_img___1wwON","go_back_icon":"prelive-module__go_back_icon___26Fpo","top_box_active":"prelive-module__top_box_active___1ZrSK","shop_list":"prelive-module__shop_list___2-CY-","live_style_top":"prelive-module__live_style_top___1v36e","live_shop_mes":"prelive-module__live_shop_mes___gGpTI","box_height":"prelive-module__box_height___20XZ9","box_Top":"prelive-module__box_Top___2XhIi","head_top":"prelive-module__head_top___1pF0B","head_left":"prelive-module__head_left___OVdA_","head_left_img":"prelive-module__head_left_img___sEJ1Y","head_right":"prelive-module__head_right___dUzCe","head_bottom":"prelive-module__head_bottom___9Njod","live_line":"prelive-module__live_line___3iTOL","live_title":"prelive-module__live_title___1uFCv","share_item_style":"prelive-module__share_item_style___1CkRe","share_item_Button":"prelive-module__share_item_Button___1QcCi","share_item_Button_enter":"prelive-module__share_item_Button_enter___pYtdC","shareButton":"prelive-module__shareButton___2K2j_","eveInner":"prelive-module__eveInner___VC0lF","leftInner":"prelive-module__leftInner___1I_ML","leftInnerImg":"prelive-module__leftInnerImg___OJILH","RightInner":"prelive-module__RightInner___2m4y-","priceInner":"prelive-module__priceInner___2Kfes","titleInner":"prelive-module__titleInner___8MDjG","priLogo":"prelive-module__priLogo___3yfOo","priStyle":"prelive-module__priStyle___3m4WZ","botStyle":"prelive-module__botStyle___XQP6c","pointstyle":"prelive-module__pointstyle___21ZmW","point":"prelive-module__point___1W1CC","editorMes":"prelive-module__editorMes___3152c","delItem":"prelive-module__delItem___1CztU","downItem":"prelive-module__downItem___1nSdg","ediItem":"prelive-module__ediItem___9g-Ye","sharePrice":"prelive-module__sharePrice___1Z9Sq","twoButton":"prelive-module__twoButton___32T55","getButton":"prelive-module__getButton___2d6vk"};

/***/ })

},[["./src/kangLive/pages/prelive/prelive.jsx","runtime","taro","vendors","common"]]]);