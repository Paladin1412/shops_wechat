(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/my/my"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/my/my.jsx?taro&type=script&parse=PAGE&":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/my/my.jsx?taro&type=script&parse=PAGE& ***!
  \*******************************************************************************************************************************************/
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
                              * @Author: chunxiao.zhang
                              * @Email: chunxiao.zhang@jdxiaokang.com
                              * @Update: 2020-02-19 10:22:28
                              * @Description: 我的
                              */


var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _wechatUtils = __webpack_require__(/*! @jxkang/wechat-utils */ "./node_modules/@jxkang/wechat-utils/dist/index.js");

var _index = __webpack_require__(/*! ../../components/with-page/index */ "./src/components/with-page/index.jsx");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../../model/index */ "./src/model/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../../utils/index */ "./src/utils/index.js");

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__(/*! ../../components/assets/index */ "./src/components/assets/index.js");

var _index8 = _interopRequireDefault(_index7);

var _myModule = __webpack_require__(/*! ./my.module.styl */ "./src/pages/my/my.module.styl");

var _myModule2 = _interopRequireDefault(_myModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var navigateToLogin = _index6.default.appUtils.navigateToLogin;

var My = (0, _index2.default)(_class = (_temp2 = _class2 = function (_Taro$Component) {
  _inherits(My, _Taro$Component);

  function My() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, My);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = My.__proto__ || Object.getPrototypeOf(My)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "anonymousState__temp5", "anonymousState__temp6", "anonymousState__temp7", "$compid__106", "$compid__107", "$compid__108", "$compid__109", "styles", "userInfo", "memberLevel", "Assets", "memberLevelInfo", "orderCount", "dialogGrade", "profitDetail", "upgradeVisible", "id", "isLogin", "statusBarHeight", "isOpenShare", "globalStore"], _this.goItem = function (item) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'navigateTo';

      if (item === 'qrcode') {
        _index4.default.inviter.userCode().then(function (res) {
          if (res) {
            _taroWeapp2.default.navigateTo({
              url: "/pages/my-qrcode/my-qrcode?mark=" + res.invitationCode
            });
          }
        });
        return;
      }
      // switchTab
      var url = _wechatUtils.Common.seek().equal(item === 'collect', '/pages/collect/collect').equal(item === 'inviterecord', '/pages/yq-list/yq-list').equal(item === 'address', '/pages/address/address').equal(item === 'setting', '/pages/setting/setting').get();
      _taroWeapp2.default[type]({
        url: url
      });
    }, _this.getDialog = function () {
      _index4.default.common.getUpMemberMsg().then(function (data) {
        if (data) {
          _this.setState({
            id: data.id,
            upgradeVisible: true,
            dialogGrade: data.bizExtend
          });
        }
      });
    }, _this.getAccountInfo = function () {
      _index4.default.fund.show().then(function (resModel) {
        if (resModel) {
          _this.setState({ profitDetail: resModel });
        }
      });
    }, _this.getShopMemberLevel = function () {
      var companyId = _this.getCompanyId();
      _index4.default.my.getShopMemberLevelInfo({ companyId: companyId }).then(function (resp) {
        var resModel = resp.entry;
        // 1000010011 会员信息不存在
        if ("" + resp.responseCode === '1000010011') {
          _index6.default.appUtils.navigateToLogin({
            params: {
              companyId: companyId
            },
            desc: '[system] file:my.jsx line:107'
          });
        } else if (resModel) {
          _this.setState({
            memberLevelInfo: resModel
          });
        }
      });
    }, _this.getSystemInfo = function () {
      var globalStore = _this.props.globalStore;
      var statusBarHeight = globalStore.data.systemInfo.statusBarHeight;


      _this.setState({
        statusBarHeight: statusBarHeight
      });
    }, _this.gotoOrder = function (index) {
      _taroWeapp2.default.navigateTo({
        url: "/pages/my-order/my-order?index=" + index
      });
    }, _this.gotoAfter = function () {
      _taroWeapp2.default.navigateTo({
        url: "/pages/my-order/my-order?index=0&isOrder=2"
      });
    }, _this.onGotoUpgrade = function () {
      _taroWeapp2.default.navigateTo({
        url: '/pages/index/index'
      });
    }, _this.onGotoModify = function () {
      var userInfo = _this.state.userInfo;

      if (userInfo.token) {
        _taroWeapp2.default.navigateTo({
          url: '/pages/personinfo/personinfo'
        });
      } else {
        _this.gotoLogin();
      }
    }, _this.gotoLogin = function () {
      navigateToLogin({
        params: {
          companyId: _this.getCompanyId()
        },
        desc: '[system] file:my.js line:193'
      });
    }, _this.getOrderCount = function () {
      var orderCount = _this.state.orderCount;

      var setCount = 0;
      var setVal = function setVal() {
        setCount += 1;
        if (setCount >= 4) {
          _this.setState({ orderCount: orderCount });
        }
      };
      // 全部订单
      // Model.my.getOrderCount().then(resModel => {
      //   orderCount[0] = resModel;
      //   setVal();
      // });
      // 待付款
      _index4.default.my.getOrderCount({ orderStatus: 0 }).then(function (resModel) {
        orderCount[1] = resModel;
        setVal();
      });
      // 待发货
      _index4.default.my.getOrderCount({ orderStatus: 1 }).then(function (resModel) {
        orderCount[2] = resModel;
        setVal();
      });
      // 待收货
      _index4.default.my.getOrderCount({ orderStatus: 2 }).then(function (resModel) {
        orderCount[3] = resModel;
        setVal();
      });
      // 退换货
      _index4.default.order.afterCount().then(function (res) {
        orderCount[4] = res;
        setVal();
      });
    }, _this.gotoAmountDetail = function (index) {
      _taroWeapp2.default.navigateTo({
        url: "/pages/accountinfo/accountinfo?current=" + index
      });
    }, _this.onShowItem = function () {
      _this.collect.setState({
        shareVisible: true
      });
    }, _this.onCloseUpgrade = function () {
      var id = _this.state.id;
      if (id) {
        _index4.default.common.upRead({
          id: id
        });
      }
      _this.setState({ upgradeVisible: false });
    }, _this.showInvite = function () {
      // this.setState({
      //   isOpenShare: true
      // })
      _this.goItem('qrcode');
    }, _this.onCancalShare = function () {
      _this.setState({
        isOpenShare: false
      });
    }, _this.config = {
      navigationBarTitleText: '康小铺',
      navigationStyle: 'custom',
      navigationBarTextStyle: 'white'
    }, _this.customComponents = ["AtProgress", "Collectmodal", "AtModal", "AtFloatLayout"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(My, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(My.prototype.__proto__ || Object.getPrototypeOf(My.prototype), "_constructor", this).call(this, props);

      var userInfo = props && props.globalStore ? props.globalStore.data.userInfo : {};
      this.state = {
        // 界面/组件 初始数据
        upgradeVisible: false,
        id: null,
        isLogin: !!userInfo.token,
        // 会员等级
        memberLevelInfo: {},
        // 弹窗等级
        dialogGrade: null,
        // 个人收益数据
        profitDetail: {},
        // 订单数量统计
        orderCount: [],
        // 用户信息
        userInfo: userInfo,
        statusBarHeight: 0,
        isOpenShare: false
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }

    // 跳转二级页面


    // 获取弹窗


    // 获取个人收益信息


    // 查会员等级

  }, {
    key: "componentWillReact",
    value: function componentWillReact() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "initData",
    value: function initData() {
      this.getDialog();
      this.getAccountInfo();
      this.getShopMemberLevel();
      this.getOrderCount();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      this.getSystemInfo();
      var userInfo = this.props.globalStore.data.userInfo;
      this.setState({ userInfo: userInfo });
      if (userInfo.token) {
        this.initData();
      }
    }
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {
      if (this.state.upgradeVisible) {
        this.setState({ upgradeVisible: false });
      }
    }

    /**
     * 进入订单界面
     */

    // 售后列表


    /**
     * 立即升级
     */


    /**
     * 修改个人信息
     */


    /**
     * 查询订单数量
     */


    /**
     * 跳转至收益详情界面
     */

  }, {
    key: "_createData",
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__106"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__106 = _genCompid2[0],
          $compid__106 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__107"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__107 = _genCompid4[0],
          $compid__107 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__108"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__108 = _genCompid6[0],
          $compid__108 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__109"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__109 = _genCompid8[0],
          $compid__109 = _genCompid8[1];

      var _state = this.__state,
          upgradeVisible = _state.upgradeVisible,
          id = _state.id,
          profitDetail = _state.profitDetail,
          memberLevelInfo = _state.memberLevelInfo,
          dialogGrade = _state.dialogGrade,
          orderCount = _state.orderCount,
          userInfo = _state.userInfo,
          statusBarHeight = _state.statusBarHeight,
          isOpenShare = _state.isOpenShare;


      var memberLevel = memberLevelInfo && memberLevelInfo.memberLevel;
      var percent = 0;
      if (memberLevelInfo.invitationMemberNum) {
        percent = (memberLevelInfo.invitationMemberNum / memberLevelInfo.nextMemberNeedInvitationNum).toFixed(2);
      }

      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)({ paddingTop: statusBarHeight + 50 + "px" });
      var anonymousState__temp2 = userInfo.token ? _index6.default.appUtils.getFileUrl(userInfo.headImg) : _index8.default.common.default_photo;
      var anonymousState__temp3 = userInfo.token ? this.getCompanyId() : null;
      var anonymousState__temp4 = memberLevelInfo.invitationMemberNum ? memberLevel === 1 && memberLevelInfo.invitationMemberNum && memberLevelInfo.nextMemberNeedInvitationNum ? (0, _taroWeapp.internal_inline_style)({
        left: parseInt(205 * percent, 10) + "px"
      }) : null : null;
      var anonymousState__temp5 = memberLevel === 1 && memberLevelInfo.invitationMemberNum && memberLevelInfo.nextMemberNeedInvitationNum ? parseInt(percent * 100, 10) : null;
      var anonymousState__temp6 = memberLevelInfo.invitationMemberNum ? memberLevel === 2 && memberLevelInfo.nextMemberNeedInvitationNum ? (0, _taroWeapp.internal_inline_style)({
        left: parseInt(205 * percent, 10) + "px"
      }) : null : null;
      var anonymousState__temp7 = memberLevel === 2 && memberLevelInfo.nextMemberNeedInvitationNum ? parseInt(percent * 100, 10) : null;

      this.anonymousFunc0 = function () {
        return _this2.goItem('inviterecord');
      };

      this.anonymousFunc1 = function () {
        return _this2.gotoAmountDetail(0);
      };

      this.anonymousFunc2 = function () {
        return _this2.gotoAmountDetail(1);
      };

      this.anonymousFunc3 = function () {
        return _this2.gotoAmountDetail(2);
      };

      this.anonymousFunc4 = function () {
        return _this2.gotoOrder(0);
      };

      this.anonymousFunc5 = function () {
        return _this2.gotoOrder(1);
      };

      this.anonymousFunc6 = function () {
        return _this2.gotoOrder(2);
      };

      this.anonymousFunc7 = function () {
        return _this2.gotoOrder(3);
      };

      this.anonymousFunc8 = function () {
        return _this2.gotoAfter();
      };

      this.anonymousFunc9 = function () {
        return _this2.goItem('collect', 'switchTab');
      };

      this.anonymousFunc10 = function () {
        return _this2.goItem('address');
      };

      this.anonymousFunc11 = function () {
        return _this2.goItem('qrcode');
      };

      this.anonymousFunc12 = function () {
        return _this2.goItem('inviterecord');
      };

      this.anonymousFunc13 = function () {
        return _this2.goItem('setting');
      };

      this.anonymousFunc14 = function () {
        return _this2.onCancalShare();
      };

      this.anonymousFunc15 = function () {
        return _this2.onCancalShare();
      };

      memberLevel === 1 && memberLevelInfo.invitationMemberNum && memberLevelInfo.nextMemberNeedInvitationNum && _taroWeapp.propsManager.set({
        "className": _myModule2.default.silverProgress,
        "percent": anonymousState__temp5,
        "color": "#FF590A",
        "isHidePercent": true,
        "strokeWidth": 4
      }, $compid__106, $prevCompid__106);
      memberLevel === 2 && memberLevelInfo.nextMemberNeedInvitationNum && _taroWeapp.propsManager.set({
        "className": _myModule2.default.goldProgress,
        "percent": anonymousState__temp7,
        "color": "#FFFFFF",
        "isHidePercent": true,
        "strokeWidth": 4
      }, $compid__107, $prevCompid__107);
      _taroWeapp.propsManager.set({
        "isOpened": upgradeVisible,
        "onClose": this.onCloseUpgrade
      }, $compid__108, $prevCompid__108);
      _taroWeapp.propsManager.set({
        "isOpened": isOpenShare,
        "onClose": this.anonymousFunc14
      }, $compid__109, $prevCompid__109);
      this.$$refs.pushRefs([{
        type: "component",
        id: "gezzz",
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
        $compid__106: $compid__106,
        $compid__107: $compid__107,
        $compid__108: $compid__108,
        $compid__109: $compid__109,
        styles: _myModule2.default,
        memberLevel: memberLevel,
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
  }, {
    key: "anonymousFunc11",
    value: function anonymousFunc11(e) {
      ;
    }
  }, {
    key: "anonymousFunc12",
    value: function anonymousFunc12(e) {
      ;
    }
  }, {
    key: "anonymousFunc13",
    value: function anonymousFunc13(e) {
      ;
    }
  }, {
    key: "anonymousFunc14",
    value: function anonymousFunc14(e) {
      ;
    }
  }, {
    key: "anonymousFunc15",
    value: function anonymousFunc15(e) {
      ;
    }
  }]);

  return My;
}(_taroWeapp2.default.Component), _class2.$$events = ["onGotoModify", "showInvite", "anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5", "anonymousFunc6", "anonymousFunc7", "anonymousFunc8", "anonymousFunc9", "anonymousFunc10", "anonymousFunc11", "anonymousFunc12", "anonymousFunc13", "onCloseUpgrade", "anonymousFunc15"], _class2.$$componentPath = "pages/my/my", _temp2)) || _class;

exports.default = My;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(My, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/my/my.jsx?taro&type=template&parse=PAGE&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/my/my.jsx?taro&type=template&parse=PAGE& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/my/my.wxml";

/***/ }),

/***/ "./src/pages/my/my.jsx":
/*!*****************************!*\
  !*** ./src/pages/my/my.jsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _my_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my.jsx?taro&type=template&parse=PAGE& */ "./src/pages/my/my.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _my_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my.jsx?taro&type=script&parse=PAGE& */ "./src/pages/my/my.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _my_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _my_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/my/my.jsx?taro&type=script&parse=PAGE&":
/*!**********************************************************!*\
  !*** ./src/pages/my/my.jsx?taro&type=script&parse=PAGE& ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_my_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./my.jsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/my/my.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_my_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_my_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_my_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_my_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_my_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/my/my.jsx?taro&type=template&parse=PAGE&":
/*!************************************************************!*\
  !*** ./src/pages/my/my.jsx?taro&type=template&parse=PAGE& ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_my_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./my.jsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/my/my.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_my_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_my_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_my_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_my_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/my/my.module.styl":
/*!*************************************!*\
  !*** ./src/pages/my/my.module.styl ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"user_box":"my-module__user_box___3ISSu","user_box_inner":"my-module__user_box_inner___2TwPo","user_pic":"my-module__user_pic___wACDC","user_photo":"my-module__user_photo___rUWgT","name":"my-module__name___eaQ5Q","desc":"my-module__desc___3B2ak","id":"my-module__id___53kgL","account_info":"my-module__account_info___U3d1a","account_item":"my-module__account_item___1H76k","account_type":"my-module__account_type___3yJV9","user_info":"my-module__user_info___2e3kO","nologinName":"my-module__nologinName___8Fz9e","info":"my-module__info___2Pte3","price":"my-module__price___1n1CU","btn":"my-module__btn___2KiDP","login_btn":"my-module__login_btn___11Q8w","order_box":"my-module__order_box___26s16","order_header":"my-module__order_header___2SQL4","header_title":"my-module__header_title___2kvfm","header_label":"my-module__header_label___29A_6","header_arrow":"my-module__header_arrow___NAX0F","order_list":"my-module__order_list___Mz6KI","order_item":"my-module__order_item___2W6oj","account_price":"my-module__account_price___18ysA","icon":"my-module__icon___h9gqk","list_box":"my-module__list_box___2-gaP","list":"my-module__list___2OErH","list_header":"my-module__list_header___NEB03","list_icon":"my-module__list_icon___3osVT","list_title":"my-module__list_title___3qvCj","arrow":"my-module__arrow___1e0As","more":"my-module__more___6IjhD","whiteBg":"my-module__whiteBg___3ezvw","num":"my-module__num___yfuDa","mr":"my-module__mr___1BjBm","order_num":"my-module__order_num___3pQEF","levelIcon":"my-module__levelIcon___31kPu","levelIcon_diamond":"my-module__levelIcon_diamond___2m8tL","levelText":"my-module__levelText___128KU","goldLevelText":"my-module__goldLevelText___WXVaU","diamondLevelText":"my-module__diamondLevelText___13c06","top_back":"my-module__top_back___13Ze-","upgrade_container":"my-module__upgrade_container___t_Iuu","upgrade_img":"my-module__upgrade_img___3_f5e","silver_noinvite_img":"my-module__silver_noinvite_img___yJ_z1","silver_invited_img":"my-module__silver_invited_img___2bVEn","gold_img":"my-module__gold_img___1H985","diamond_img":"my-module__diamond_img___3z5uE","upgradeHeader":"my-module__upgradeHeader___3nhN0","percentInner":"my-module__percentInner___19RRB","innerBg":"my-module__innerBg___3Fb22","silverProgress":"my-module__silverProgress___1-F98","goldProgress":"my-module__goldProgress___1Sz3r","headerTitle":"my-module__headerTitle___R9WUC","headBtn":"my-module__headBtn___1wS0z","diamondTitle":"my-module__diamondTitle___3dWu6","silverBtn":"my-module__silverBtn___2d-5G","goldbtn":"my-module__goldbtn___RAwEp","diamondbtn":"my-module__diamondbtn___1GMK4","headerPadding":"my-module__headerPadding___2x32X","diamondHeader":"my-module__diamondHeader___3sHW2","upgradeFooter":"my-module__upgradeFooter___xYvhg","footerMargin":"my-module__footerMargin___354YO","goldFooter":"my-module__goldFooter___nhrU5","upgrade_tip":"my-module__upgrade_tip___1fvx1","silverImg":"my-module__silverImg___1Harw","img":"my-module__img___3BvCp","close":"my-module__close___wW1SZ","share_popup":"my-module__share_popup___3mZIP","share_title":"my-module__share_title___1Fy7w","cancalItem":"my-module__cancalItem___2aKtu","cancalBtn":"my-module__cancalBtn___1ItTV","share_container":"my-module__share_container___2ABxz","item":"my-module__item___3swKE","font":"my-module__font___Fk776","imgicon":"my-module__imgicon___lZQ_Y","reset_btn":"my-module__reset_btn___sao-j"};

/***/ })

},[["./src/pages/my/my.jsx","runtime","taro","vendors","common"]]]);