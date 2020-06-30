(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/personinfo/personinfo"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/personinfo/personinfo.jsx?taro&type=script&parse=PAGE&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/personinfo/personinfo.jsx?taro&type=script&parse=PAGE& ***!
  \***********************************************************************************************************************************************************/
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
                              * @Update: 2020-02-25 18:23:38
                              * @Description: 修改个人资料
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

var _personinfoModule = __webpack_require__(/*! ./personinfo.module.styl */ "./src/pages/personinfo/personinfo.module.styl");

var _personinfoModule2 = _interopRequireDefault(_personinfoModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Personinfo = (0, _index2.default)(_class = (_temp2 = _class2 = function (_Taro$Component) {
  _inherits(Personinfo, _Taro$Component);

  function Personinfo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Personinfo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Personinfo.__proto__ || Object.getPrototypeOf(Personinfo)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "$compid__116", "styles", "formData", "globalStore"], _this.onChangeUpload = function (files) {
      var file = files[0].file;
      var size = file.size;

      var arr = file.path.split('.');
      var extension = arr[arr.length - 1];
      // if (type.indexOf('image') !== 0) {
      //   return message.warn('请上传图片文件');
      // } else
      if (size > 5242880) {
        return _wechatUtils.message.warn('请上传5M以内的图片');
      }
      _wechatUtils.message.loading('正在上传');
      _taroWeapp2.default.uploadFile({
        url: _index4.default.common.upload(),
        name: 'file',
        filePath: file.path,
        header: (0, _index3.getFetchHeader)(),
        formData: {
          extension: extension
        }
      }).then(function (resData) {
        var resModel = JSON.parse(resData.data);
        if (resModel.responseCode !== 0) {
          return _wechatUtils.message.warn(resModel.message);
        } else {
          _taroWeapp2.default.hideToast();
          var formData = _this.state.formData;

          formData.headImg = resModel.entry.filePath;
          _this.setState({
            formData: formData
          }, function () {
            _this.onSave();
          });
        }
      });
    }, _this.enterEdit = function () {
      _taroWeapp2.default.navigateTo({
        url: '/pages/edit-info/edit-info'
      });
    }, _this.onSave = function () {
      var formData = _this.state.formData;
      var globalStore = _this.props.globalStore;

      /**
       * 接口参数 数据类型定义
       */

      var Interface = _wechatUtils.paramType.chain().add('headImg').rule('required', true, '请上传图片').rule('string').end().toConfig();

      if ((0, _wechatUtils.paramType)(formData, Interface, _wechatUtils.message.warn)) {
        var data = {
          headImg: formData.headImg
        };
        _index4.default.my.updateBaseInfo(data).then(function (resModel) {
          if (resModel) {
            var userInfo = globalStore.data.userInfo;
            Object.assign(userInfo, data);
            globalStore.setData('userInfo', userInfo, 'personinfo.jsx,line:103');
            _wechatUtils.message.success('操作成功');
            _this.editShareInfo(); // 头像改变时，删除本地缓存的分享图片
          }
        });
      }
    }, _this.editShareInfo = function () {
      var globalStore = _this.props.globalStore;
      var shareImgInfo = globalStore.data.shareImgInfo;

      shareImgInfo.shopShareUrl = '';
      shareImgInfo.codeShareUrl = '';
      shareImgInfo.avatarImg = '';
      globalStore.setData('shareImgInfo', shareImgInfo, 'personinfo.jsx,line:167');
      _index5.imgshare.init();
    }, _this.config = {
      navigationBarTitleText: '个人资料'
    }, _this.customComponents = ["AtImagePicker"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Personinfo, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Personinfo.prototype.__proto__ || Object.getPrototypeOf(Personinfo.prototype), "_constructor", this).call(this, props);

      this.state = {
        formData: {}
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      var userInfo = this.props.globalStore.data.userInfo;

      this.setState({
        formData: {
          headImg: userInfo.headImg,
          nickName: userInfo.nickName
        }
      });
    }

    /**
     * 保存个人信息
     */

  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__116"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__116 = _genCompid2[0],
          $compid__116 = _genCompid2[1];

      var formData = this.__state.formData;


      var anonymousState__temp = _index6.default.appUtils.getFileUrl(formData.headImg);
      _taroWeapp.propsManager.set({
        "className": _personinfoModule2.default.upload,
        "onChange": this.onChangeUpload,
        "multiple": false,
        "count": 1
      }, $compid__116, $prevCompid__116);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        $compid__116: $compid__116,
        styles: _personinfoModule2.default
      });
      return this.__state;
    }
  }]);

  return Personinfo;
}(_taroWeapp2.default.Component), _class2.$$events = ["enterEdit"], _class2.$$componentPath = "pages/personinfo/personinfo", _temp2)) || _class;

exports.default = Personinfo;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Personinfo, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/personinfo/personinfo.jsx?taro&type=template&parse=PAGE&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/personinfo/personinfo.jsx?taro&type=template&parse=PAGE& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/personinfo/personinfo.wxml";

/***/ }),

/***/ "./src/pages/personinfo/personinfo.jsx":
/*!*********************************************!*\
  !*** ./src/pages/personinfo/personinfo.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _personinfo_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./personinfo.jsx?taro&type=template&parse=PAGE& */ "./src/pages/personinfo/personinfo.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _personinfo_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./personinfo.jsx?taro&type=script&parse=PAGE& */ "./src/pages/personinfo/personinfo.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _personinfo_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _personinfo_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/personinfo/personinfo.jsx?taro&type=script&parse=PAGE&":
/*!**************************************************************************!*\
  !*** ./src/pages/personinfo/personinfo.jsx?taro&type=script&parse=PAGE& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_personinfo_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./personinfo.jsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/personinfo/personinfo.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_personinfo_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_personinfo_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_personinfo_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_personinfo_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_personinfo_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/personinfo/personinfo.jsx?taro&type=template&parse=PAGE&":
/*!****************************************************************************!*\
  !*** ./src/pages/personinfo/personinfo.jsx?taro&type=template&parse=PAGE& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_personinfo_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./personinfo.jsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/personinfo/personinfo.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_personinfo_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_personinfo_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_personinfo_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_personinfo_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/personinfo/personinfo.module.styl":
/*!*****************************************************!*\
  !*** ./src/pages/personinfo/personinfo.module.styl ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"personinfo-module__container___tnUzl","list":"personinfo-module__list_____tag","cellTitle":"personinfo-module__cellTitle___3bgEA","head_img":"personinfo-module__head_img___2Kv6u","user_photo":"personinfo-module__user_photo___1fnpk","upload":"personinfo-module__upload___3U6Z_","nickname":"personinfo-module__nickname___2uICq","icon":"personinfo-module__icon___M3FyX"};

/***/ })

},[["./src/pages/personinfo/personinfo.jsx","runtime","taro","vendors","common"]]]);