(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/area-picker/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/area-picker/index.jsx?taro&type=script&parse=COMPONENT&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/components/area-picker/index.jsx?taro&type=script&parse=COMPONENT& ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2; /**
                     * @Author: 福虎
                     * @Email: Shenghu.tan@jdxiaokang.com
                     * @Update: 2020-02-22 13:52:26
                     * @Description: taro行政区划选择组件
                     */


var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _wechatUtils = __webpack_require__(/*! @jxkang/wechat-utils */ "./node_modules/@jxkang/wechat-utils/dist/index.js");

var _index = __webpack_require__(/*! ../../model/index */ "./src/model/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AreaPicker = (_temp2 = _class = function (_Taro$Component) {
  _inherits(AreaPicker, _Taro$Component);

  function AreaPicker() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AreaPicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AreaPicker.__proto__ || Object.getPrototypeOf(AreaPicker)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["range", "valueIndex", "checked", "value", "children"], _this.dealData = function (datas) {
      _this.regionDatas[0] = datas.filter(function (v) {
        return v.level === 0;
      });
      _this.regionDatas[1] = datas.filter(function (v) {
        return v.level === 1;
      });
      _this.regionDatas[2] = datas.filter(function (v) {
        return v.level === 2;
      });
    }, _this.getList = function () {
      // 默认历史数据
      var value = _this.props.value;
      var _this$state = _this.state,
          range = _this$state.range,
          checked = _this$state.checked;


      _index2.default.common.getAreaList({
        parentCode: null,
        level: null,
        pageNo: 0,
        pageSize: 50000 // 因为后端接口原因，这里只能传一个比较大的pageSize值
      }).then(function (resModel) {
        if (resModel) {
          var data = resModel.records;
          _this.dealData(_wechatUtils.Common.clone(data));

          if (Array.isArray(value) && value.length) {
            var preItem = void 0;
            value.forEach(function (item, idx) {
              range[idx] = idx === 0 ? _this.regionDatas[0] : _this.onFindChild(idx - 1, preItem);
              checked[idx] = range[idx].find(function (v) {
                return "" + v.areaCode === "" + item;
              }) || {};
              preItem = item;
            });
          } else {
            range[0] = _this.regionDatas[0];
            range[1] = _this.onFindChild(0, range[0][0].areaCode);
            range[2] = _this.onFindChild(1, range[1][0].areaCode);
            checked.push(range[0][0], range[1][0], range[2][0]);
          }
          _this.setState({
            checked: checked,
            range: range
          });
        }
      }).catch(function (err) {
        throw err;
      });
    }, _this.onFindChild = function (currentIndex, currentId) {
      var nextIndex = currentIndex + 1;
      return _this.regionDatas[nextIndex] && _this.regionDatas[nextIndex].filter(function (item) {
        return currentId && "" + item.parentCode === "" + currentId;
      });
    }, _this.onFindIndex = function () {
      var checked = _this.state.checked;
      var _this$props$value = _this.props.value,
          value = _this$props$value === undefined ? checked.map(function (v) {
        return v.areaCode;
      }) : _this$props$value;
      var range = _this.state.range;

      var valueIndex = void 0;
      if (Array.isArray(value) && value.length) {
        valueIndex = [];
        value.forEach(function (item, index) {
          valueIndex.push(range[index].findIndex(function (v) {
            return item && "" + v.areaCode === "" + item;
          }));
        });
      }
      return valueIndex;
    }, _this.onChangeCity = function (e) {
      var onChange = _this.props.onChange;

      _this.props.onChange(e, _this.state.checked);
    }, _this.onColumnSelect = function (e) {
      var _e$detail = e.detail,
          column = _e$detail.column,
          value = _e$detail.value;
      var _this$state2 = _this.state,
          range = _this$state2.range,
          checked = _this$state2.checked;


      var current = range[column][value];
      checked[column] = current;

      var loopCurrent = current;

      new Array(range.length - column - 1).fill('').forEach(function (item, idx) {
        if (range[column + idx + 1]) {
          range[column + idx + 1] = _this.onFindChild(column + idx, loopCurrent.areaCode);
          loopCurrent = range[column + idx + 1][0];
          // 选中值
          checked[column + idx + 1] = loopCurrent;
        }
      });

      _this.setState({ checked: checked, range: range });
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AreaPicker, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(AreaPicker.prototype.__proto__ || Object.getPrototypeOf(AreaPicker.prototype), "_constructor", this).call(this, props);
      this.state = {
        range: [[], [], []],
        checked: []
      };
      this.regionDatas = [];
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getList();
    }

    /**
     * 数据处理
     */


    /**
     * 查找指定下级数据
     */


    /**
     * 查找相应数据索引值
     */

  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var range = this.__state.range;
      var children = this.__props.children;

      var valueIndex = this.onFindIndex();

      Object.assign(this.__state, {
        valueIndex: valueIndex
      });
      return this.__state;
    }
  }]);

  return AreaPicker;
}(_taroWeapp2.default.Component), _class.$$events = ["onChangeCity", "onColumnSelect"], _class.$$componentPath = "components/area-picker/index", _temp2);
exports.default = AreaPicker;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(AreaPicker));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/area-picker/index.jsx?taro&type=template&parse=COMPONENT&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/components/area-picker/index.jsx?taro&type=template&parse=COMPONENT& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "components/area-picker/index.wxml";

/***/ }),

/***/ "./src/components/area-picker/index.jsx":
/*!**********************************************!*\
  !*** ./src/components/area-picker/index.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.jsx?taro&type=template&parse=COMPONENT& */ "./src/components/area-picker/index.jsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.jsx?taro&type=script&parse=COMPONENT& */ "./src/components/area-picker/index.jsx?taro&type=script&parse=COMPONENT&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/components/area-picker/index.jsx?taro&type=script&parse=COMPONENT&":
/*!********************************************************************************!*\
  !*** ./src/components/area-picker/index.jsx?taro&type=script&parse=COMPONENT& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=script&parse=COMPONENT& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/area-picker/index.jsx?taro&type=script&parse=COMPONENT&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/area-picker/index.jsx?taro&type=template&parse=COMPONENT&":
/*!**********************************************************************************!*\
  !*** ./src/components/area-picker/index.jsx?taro&type=template&parse=COMPONENT& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=template&parse=COMPONENT& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/area-picker/index.jsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/components/area-picker/index.jsx","runtime","taro","vendors","common"]]]);