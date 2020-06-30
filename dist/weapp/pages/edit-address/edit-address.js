(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/edit-address/edit-address"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/edit-address/edit-address.jsx?taro&type=script&parse=PAGE&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/edit-address/edit-address.jsx?taro&type=script&parse=PAGE& ***!
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
                              * @Update: 2020-02-24 16:40:32
                              * @Description: 地址新增/修改
                              */


var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _wechatUtils = __webpack_require__(/*! @jxkang/wechat-utils */ "./node_modules/@jxkang/wechat-utils/dist/index.js");

var _index = __webpack_require__(/*! ../../components/with-page/index */ "./src/components/with-page/index.jsx");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../../model/index */ "./src/model/index.js");

var _index4 = _interopRequireDefault(_index3);

var _editAddressModule = __webpack_require__(/*! ./edit-address.module.styl */ "./src/pages/edit-address/edit-address.module.styl");

var _editAddressModule2 = _interopRequireDefault(_editAddressModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditAddress = (0, _index2.default)(_class = (_temp2 = _class2 = function (_Taro$Component) {
  _inherits(EditAddress, _Taro$Component);

  function EditAddress() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, EditAddress);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EditAddress.__proto__ || Object.getPrototypeOf(EditAddress)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "$compid__162", "$compid__163", "$compid__164", "$compid__165", "$compid__166", "$compid__167", "$compid__168", "$compid__169", "styles", "visiable", "isDefault", "id", "cityData", "isPhone", "phone", "receiver", "house", "globalStore"], _this.getDetail = function (id) {
      _index4.default.address.getDetail({ id: id }).then(function (data) {
        if (!data) {
          return;
        }_this.setState({
          receiver: data.receiver,
          phone: data.phone,
          isDefault: data.isDefault,
          house: data.house,
          area: data.province + "/" + data.city + "/" + data.area,
          cityData: [{
            areaName: data.province,
            areaCode: data.provinceId
          }, {
            areaName: data.city,
            areaCode: data.cityId
          }, {
            areaName: data.area,
            areaCode: data.areaId
          }]
        });
      });
    }, _this.onSubmit = function (event) {
      var globalStore = _this.props.globalStore;
      var _this$$router$params = _this.$router.params,
          _this$$router$params$ = _this$$router$params.backUrl,
          backUrl = _this$$router$params$ === undefined ? '' : _this$$router$params$,
          first = _this$$router$params.first;
      var _this$state = _this.state,
          isPhone = _this$state.isPhone,
          isDefault = _this$state.isDefault,
          cityData = _this$state.cityData,
          id = _this$state.id,
          receiver = _this$state.receiver,
          phone = _this$state.phone,
          house = _this$state.house;
      // const { receiver, phone, area, house } = event.detail.value

      if (!receiver) {
        _wechatUtils.message.error('请填写收件人');
        return;
      }
      if (!isPhone || !phone) {
        _wechatUtils.message.error('请填写正确的手机号码');
        return;
      }
      if (cityData.length < 3) {
        _wechatUtils.message.error('请选择正确的省市区');
        return;
      }
      if (!house) {
        _wechatUtils.message.error('请填详细的地址');
        return;
      }

      var reqModel = {
        id: id ? id : '',
        receiver: receiver,
        phone: phone,
        provinceId: cityData[0].areaCode,
        province: cityData[0].areaName,
        cityId: cityData[1].areaCode,
        city: cityData[1].areaName,
        areaId: cityData[2].areaCode,
        area: cityData[2].areaName,
        isDefault: isDefault,
        house: house
      };

      _index4.default.address.addAddress(reqModel).then(function (data) {
        if (data) {
          _wechatUtils.message.success(id ? '修改成功' : '添加成功');
          setTimeout(function () {
            var params = _this.$router.params;

            delete params.id;
            var str = '?';
            for (var k in params) {
              str += k + "=" + params[k];
            }

            if (backUrl.indexOf('submission') > 0 && first == '1') {
              var backData = _wechatUtils.Common.clone(reqModel);
              backData.streetId = '';
              globalStore.setData('checkAddress', Object.assign({}, backData), 'edit-address.jsx,line:113');
              _taroWeapp2.default.reLaunch({
                url: "/pages/submission/submission" + str
              });
              return false;
            }

            _taroWeapp2.default.reLaunch({
              url: "/pages/address/address" + str
            });
          }, 1000);
        }
      });
    }, _this.changeMoren = function (e) {
      _this.setState({
        isDefault: e
      });
    }, _this.getInput = function (e, name) {
      _this.setState(_defineProperty({}, name, e), function () {
        if (name === 'phone') {
          _this.setState({
            isPhone: /^1\d{10}$/.test(e)
          });
        }
      });
    }, _this.delAddress = function () {
      _this.setState({
        visiable: true
      });
    }, _this.cancle = function () {
      _this.setState({
        visiable: false
      });
    }, _this.ok = function () {
      var id = _this.state.id;

      _index4.default.address.deleteAddress({ id: id }).then(function (data) {
        if (data) {
          var params = _this.$router.params;

          delete params.id;
          var str = '?';
          for (var k in params) {
            str += k + "=" + params[k];
          }
          _taroWeapp2.default.reLaunch({
            url: "/pages/address/address" + str
          });
        }
      });
    }, _this.AreaPickerChange = function (e, values) {
      _this.setState({ cityData: values });
    }, _this.config = {
      navigationBarTitleText: '编辑地址'
    }, _this.customComponents = ["Dialog", "AtForm", "AtInput", "AreaPicker", "AtTextarea", "AtSwitch", "AtButton"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(EditAddress, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(EditAddress.prototype.__proto__ || Object.getPrototypeOf(EditAddress.prototype), "_constructor", this).call(this, props);

      this.state = {
        cityData: [],
        isPhone: true,
        phone: '',
        receiver: '', //收货人
        isDefault: false, //默认
        id: '',
        house: '', // 详细地址
        visiable: false
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }

    // 删除地址

  }, {
    key: "componentWillReact",
    value: function componentWillReact() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var id = this.$router.params.id;

      if (!id) {
        return false;
      }this.setState({
        id: id
      }, function () {
        return _this2.getDetail(id);
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

    /**
     * 城市地区选择
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__162"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__162 = _genCompid2[0],
          $compid__162 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__163"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__163 = _genCompid4[0],
          $compid__163 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__164"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__164 = _genCompid6[0],
          $compid__164 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__165"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__165 = _genCompid8[0],
          $compid__165 = _genCompid8[1];

      var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "$compid__166"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__166 = _genCompid10[0],
          $compid__166 = _genCompid10[1];

      var _genCompid11 = (0, _taroWeapp.genCompid)(__prefix + "$compid__167"),
          _genCompid12 = _slicedToArray(_genCompid11, 2),
          $prevCompid__167 = _genCompid12[0],
          $compid__167 = _genCompid12[1];

      var _genCompid13 = (0, _taroWeapp.genCompid)(__prefix + "$compid__168"),
          _genCompid14 = _slicedToArray(_genCompid13, 2),
          $prevCompid__168 = _genCompid14[0],
          $compid__168 = _genCompid14[1];

      var _genCompid15 = (0, _taroWeapp.genCompid)(__prefix + "$compid__169"),
          _genCompid16 = _slicedToArray(_genCompid15, 2),
          $prevCompid__169 = _genCompid16[0],
          $compid__169 = _genCompid16[1];

      var _state = this.__state,
          cityData = _state.cityData,
          phone = _state.phone,
          isPhone = _state.isPhone,
          receiver = _state.receiver,
          house = _state.house,
          isDefault = _state.isDefault,
          id = _state.id,
          visiable = _state.visiable;


      this.anonymousFunc0 = function (e) {
        _this3.getInput(e, 'receiver');
      };

      var anonymousState__temp = !isPhone;

      this.anonymousFunc1 = function (e) {
        _this3.getInput(e, 'phone');
      };

      this.anonymousFunc2 = function (e) {
        _this3.getInput(e, 'house');
      };

      var anonymousState__temp2 = cityData.length ? cityData.map(function (v) {
        return v.areaName;
      }).join(' / ') : null;
      visiable && _taroWeapp.propsManager.set({
        "cancle": this.cancle,
        "ok": this.ok,
        "content": "\u662F\u5426\u786E\u5B9A\u5220\u9664\u6536\u8D27\u5730\u5740",
        "okText": "\u786E\u5B9A\u5220\u9664"
      }, $compid__162, $prevCompid__162);
      _taroWeapp.propsManager.set({
        "onSubmit": this.onSubmit,
        "onReset": this.onReset
      }, $compid__163, $prevCompid__163);
      _taroWeapp.propsManager.set({
        "name": "receiver",
        "title": "\u6536\u8D27\u4EBA",
        "type": "text",
        "placeholder": "\u8BF7\u8F93\u5165",
        "value": receiver,
        "onChange": this.anonymousFunc0
      }, $compid__164, $prevCompid__164);
      _taroWeapp.propsManager.set({
        "name": "phone",
        "title": "\u624B\u673A\u53F7",
        "error": anonymousState__temp,
        "type": "phone",
        "placeholder": "\u8BF7\u8F93\u5165\u6536\u8D27\u4EBA\u624B\u673A\u53F7",
        "onChange": this.anonymousFunc1,
        "value": phone
      }, $compid__165, $prevCompid__165);
      _taroWeapp.propsManager.set({
        "onChange": this.AreaPickerChange
      }, $compid__166, $prevCompid__166);
      _taroWeapp.propsManager.set({
        "className": _editAddressModule2.default.textarea,
        "name": "house",
        "type": "text",
        "placeholder": "\u8BF7\u8F93\u5165\u8857\u9053\u3001\u5C0F\u533A\u3001\u95E8\u724C\u53F7\u7B49",
        "value": house,
        "onChange": this.anonymousFunc2,
        "placeholderClass": _editAddressModule2.default.placeholder
      }, $compid__167, $prevCompid__167);
      _taroWeapp.propsManager.set({
        "title": "\u8BBE\u4E3A\u9ED8\u8BA4\u5730\u5740",
        "checked": isDefault,
        "onChange": this.changeMoren,
        "name": "isDefault",
        "color": "#FF3013"
      }, $compid__168, $prevCompid__168);
      _taroWeapp.propsManager.set({
        "formType": "submit"
      }, $compid__169, $prevCompid__169);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        $compid__162: $compid__162,
        $compid__163: $compid__163,
        $compid__164: $compid__164,
        $compid__165: $compid__165,
        $compid__166: $compid__166,
        $compid__167: $compid__167,
        $compid__168: $compid__168,
        $compid__169: $compid__169,
        styles: _editAddressModule2.default
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
  }]);

  return EditAddress;
}(_taroWeapp2.default.Component), _class2.$$events = ["delAddress"], _class2.$$componentPath = "pages/edit-address/edit-address", _temp2)) || _class;

exports.default = EditAddress;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(EditAddress, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/edit-address/edit-address.jsx?taro&type=template&parse=PAGE&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/edit-address/edit-address.jsx?taro&type=template&parse=PAGE& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/edit-address/edit-address.wxml";

/***/ }),

/***/ "./src/pages/edit-address/edit-address.jsx":
/*!*************************************************!*\
  !*** ./src/pages/edit-address/edit-address.jsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_address_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-address.jsx?taro&type=template&parse=PAGE& */ "./src/pages/edit-address/edit-address.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _edit_address_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-address.jsx?taro&type=script&parse=PAGE& */ "./src/pages/edit-address/edit-address.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _edit_address_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _edit_address_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/edit-address/edit-address.jsx?taro&type=script&parse=PAGE&":
/*!******************************************************************************!*\
  !*** ./src/pages/edit-address/edit-address.jsx?taro&type=script&parse=PAGE& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_edit_address_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./edit-address.jsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/edit-address/edit-address.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_edit_address_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_edit_address_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_edit_address_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_edit_address_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_edit_address_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/edit-address/edit-address.jsx?taro&type=template&parse=PAGE&":
/*!********************************************************************************!*\
  !*** ./src/pages/edit-address/edit-address.jsx?taro&type=template&parse=PAGE& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_edit_address_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./edit-address.jsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/edit-address/edit-address.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_edit_address_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_edit_address_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_edit_address_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_edit_address_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/edit-address/edit-address.module.styl":
/*!*********************************************************!*\
  !*** ./src/pages/edit-address/edit-address.module.styl ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"edit_box":"edit-address-module__edit_box___3ITcY","moren":"edit-address-module__moren___3FjyY","switch":"edit-address-module__switch___3fbwI","area_content":"edit-address-module__area_content___yUXXq","icon_arrow":"edit-address-module__icon_arrow___1e8Iv","area_box":"edit-address-module__area_box___mNfjw","show_area_box":"edit-address-module__show_area_box___27XWE","grayText":"edit-address-module__grayText___3KLz3","button_box":"edit-address-module__button_box___X4Wz2","del_address":"edit-address-module__del_address___2tZd8","addressContainer":"edit-address-module__addressContainer___3ZU5D","addressTitle":"edit-address-module__addressTitle___1HC90","textarea":"edit-address-module__textarea___1bxhb"};

/***/ })

},[["./src/pages/edit-address/edit-address.jsx","runtime","taro","vendors","common"]]]);