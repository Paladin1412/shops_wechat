(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/share-tool/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/share-tool/index.jsx?taro&type=script&parse=COMPONENT&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/components/share-tool/index.jsx?taro&type=script&parse=COMPONENT& ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _class2, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _wechatUtils = __webpack_require__(/*! @jxkang/wechat-utils */ "./node_modules/@jxkang/wechat-utils/dist/index.js");

var _index = __webpack_require__(/*! ../with-page/index */ "./src/components/with-page/index.jsx");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../../utils/index */ "./src/utils/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../assets/index */ "./src/components/assets/index.js");

var _index6 = _interopRequireDefault(_index5);

var _indexModule = __webpack_require__(/*! ./index.module.styl */ "./src/components/share-tool/index.module.styl");

var _indexModule2 = _interopRequireDefault(_indexModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var drawQrcode = _index4.default.drawQrcode,
    imgshare = _index4.default.imgshare;
// const getFileUrl = appUtils.getFileUrl;

var Collect = (0, _index2.default)(_class = (_temp2 = _class2 = function (_Taro$Component) {
  _inherits(Collect, _Taro$Component);

  function Collect() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Collect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Collect.__proto__ || Object.getPrototypeOf(Collect)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "$compid__160", "styles", "Assets", "showShareImg", "modalVisible", "tempFilePath", "type", "showAuthModal", "params", "globalStore"], _this.copyLink = function (link) {
      _taroWeapp2.default.setClipboardData({
        data: link,
        success: function success() {
          _wechatUtils.message.success('复制成功');
        }
      });
    }, _this.openImageShare = function () {
      _this.setState({
        modalVisible: true
      });
    }, _this.closeImageShare = function (e) {
      if (e) {
        _this.stopPropagation(e);
      }
      _this.setState({
        modalVisible: false,
        tempFilePath: ''
      });
    }, _this.drawBall = function () {
      var type = _this.props.params.type;

      if (type === 'goodsDetail') {
        _this.drawGoodsShare();
      } else if (type === 'shop') {
        _this.drawShopShare();
      } else if (type === 'qrcode') {
        _this.drawQrcodeShare();
      } else if (type === 'live') {
        _this.drawLiveShare();
      }
    }, _this.fillRoundRect = function (cxt, x, y, width, height, radius, /*optional*/fillColor) {
      //圆的直径必然要小于矩形的宽高          
      if (2 * radius > width || 2 * radius > height) {
        return false;
      }

      cxt.save();
      cxt.translate(x, y);
      //绘制圆角矩形的各个边  
      _this.drawRoundRectPath(cxt, width, height, radius);
      cxt.fillStyle = fillColor || "#000"; //若是给定了值就用给定的值否则给予默认值  
      cxt.fill();
      cxt.restore();
    }, _this.drawRoundRectPath = function (cxt, width, height, radius) {
      cxt.beginPath(0);
      //从右下角顺时针绘制，弧度从0到1/2PI  
      cxt.arc(width - radius, height - radius, radius, 0, Math.PI / 2);

      //矩形下边线  
      cxt.lineTo(radius, height);

      //左下角圆弧，弧度从1/2PI到PI  
      cxt.arc(radius, height - radius, radius, Math.PI / 2, Math.PI);

      //矩形左边线  
      cxt.lineTo(0, radius);

      //左上角圆弧，弧度从PI到3/2PI  
      cxt.arc(radius, radius, radius, Math.PI, Math.PI * 3 / 2);

      //上边线  
      cxt.lineTo(width - radius, 0);

      //右上角圆弧  
      cxt.arc(width - radius, radius, radius, Math.PI * 3 / 2, Math.PI * 2);

      //右边线  
      cxt.lineTo(width, height - radius);
      cxt.strokeStyle = 'transparent';
      cxt.closePath();
    }, _this.drawLiveShare = function () {
      var globalStore = _this.props.globalStore;
      var _globalStore$data = globalStore.data,
          shareImgInfo = _globalStore$data.shareImgInfo,
          userInfo = _globalStore$data.userInfo;
      var avatarImg = shareImgInfo.avatarImg,
          kxpLogo = shareImgInfo.kxpLogo,
          liveShare = shareImgInfo.liveShare,
          liveShareUrl = shareImgInfo.liveShareUrl;
      var liveImg = liveShare.liveImg,
          goodsImg = liveShare.goodsImg,
          qrImg = liveShare.qrImg,
          liveShopLogo = liveShare.liveShopLogo;
      var _userInfo$nickName = userInfo.nickName,
          nickName = _userInfo$nickName === undefined ? '康小铺' : _userInfo$nickName;

      if (liveShareUrl) {
        _this.openImageShare();
        _this.setState({
          tempFilePath: liveShareUrl
        });
        return;
      }
      if (!liveImg || !goodsImg || !qrImg || !avatarImg || !kxpLogo || !liveShopLogo) {
        console.log({ liveImg: liveImg, goodsImg: goodsImg, qrImg: qrImg, liveShopLogo: liveShopLogo });
        imgshare.getLiveShare();
        _wechatUtils.message.warn('图片未保存成功，请再试一次');
        return;
      }
      _this.openImageShare();
      var drawCvs = function drawCvs() {
        var canvasW = 540;
        var canvasH = 870;
        var logoW = 68;
        var avatarW = 80;
        var qrCodeW = 80;
        var liveImgW = 472;
        var shopImgW = 60;
        var goodsW = 80;
        drawQrcode({
          width: 0,
          height: 0,
          x: 0,
          y: 0,
          image: {},
          canvasId: 'liveCanvas',
          text: '',
          callback: function callback(ctx) {
            _this.fillRoundRect(ctx, 0, 0, canvasW, canvasH, 12, '#ffffff');
            // 绘制用户头像
            _this.drawCircleImg({ x: 32, y: 16, width: avatarW, imgObj: avatarImg, ctx: ctx, isCircle: true });
            // 用户昵称
            _this.drawText({ x: 128, y: 46, color: '#323232', font: 'bold 32px sans-serif', text: nickName, maxSize: 10, ctx: ctx });
            // 用户邀请语
            _this.drawText({ x: 128, y: 90, color: '#999999', font: '24px sans-serif', text: '邀请你一起看直播', ctx: ctx });
            // 绘制店铺logo
            ctx.drawImage(kxpLogo, 472, 0, logoW, logoW);
            // 直播主图
            _this.drawQuadShape({ imgObj: liveImg, width: liveImgW, height: liveImgW, posx: 34, posy: 107, ctx: ctx });
            // ctx.drawImage(liveImg.path, 34, 107, liveImgW, liveImgW);
            // 口号
            _this.drawText({ y: 636, color: '#333333', font: 'bold 28px sans-serif', text: '快来抢货，先来先得', ctx: ctx });
            // 推荐商品列表
            if (goodsImg.length > 0) {
              _this.drawGoodsList({ goodsImg: goodsImg, x: 30, y: 660, imgWidth: goodsW, ctx: ctx });
            }
            // 店铺头像
            _this.drawCircleImg({ x: 32, y: 782, width: shopImgW, imgObj: liveShopLogo, ctx: ctx, isCircle: true });
            // 用微信打开看看吧
            _this.drawText({ x: 200, y: 824, color: '#C9C9C9', font: '24px sans-serif', text: '用微信打开看看吧', ctx: ctx });
            // 直播间二维码
            ctx.drawImage(qrImg, 430, 772, qrCodeW, qrCodeW);
            _this.createImg(ctx, 'liveCanvas');
          }
        }, _this);
      };
      drawCvs();
    }, _this.drawGoodsList = function (_ref2) {
      var goodsImg = _ref2.goodsImg,
          x = _ref2.x,
          y = _ref2.y,
          imgWidth = _ref2.imgWidth,
          ctx = _ref2.ctx;

      for (var i = 0; i < goodsImg.length; i++) {
        var drawingx = x + parseInt((imgWidth + 20) * i || 0, 10);
        ctx.drawImage(goodsImg[i].path, drawingx, y, imgWidth, imgWidth);
        // this.drawQuadShape({imgObj:goodsImg[i], width:imgWidth, height:imgWidth, posx: drawingx, posy: y, ctx})
      }
    }, _this.drawQuadShape = function (_ref3) {
      var imgObj = _ref3.imgObj,
          width = _ref3.width,
          height = _ref3.height,
          posx = _ref3.posx,
          posy = _ref3.posy,
          ctx = _ref3.ctx;

      var cutSize = 0;
      if (width / imgObj.width > height / imgObj.height) {
        cutSize = imgObj.width;
      } else {
        cutSize = imgObj.height;
      }
      ctx.drawImage(imgObj.path, 0, 0, cutSize, cutSize, posx, posy, width, height);
    }, _this.drawGoodsShare = function () {
      var _this$props$params = _this.props.params,
          price = _this$props$params.price,
          originPrice = _this$props$params.originPrice,
          title = _this$props$params.title;
      var globalStore = _this.props.globalStore;
      var shareImgInfo = globalStore.data.shareImgInfo;
      var avatarImg = shareImgInfo.avatarImg,
          kxpLogo = shareImgInfo.kxpLogo,
          goodsShare = shareImgInfo.goodsShare;
      var goodsImg = goodsShare.goodsImg,
          qrImg = goodsShare.qrImg;

      console.log({ goodsImg: goodsImg, qrImg: qrImg, avatarImg: avatarImg, kxpLogo: kxpLogo });
      console.log({ price: price, originPrice: originPrice, title: title });
      if (!price || !title) {
        _wechatUtils.message.warn('图片未保存成功，请再试一次');
        return;
      }
      if (!avatarImg || !kxpLogo || !goodsImg || !qrImg) {
        imgshare.getGoodsShare();
        _wechatUtils.message.warn('图片未保存成功，请再试一次');
        return;
      }
      _this.openImageShare();
      var drawCvs = function drawCvs() {
        var canvasW = 540;
        var canvasH = 796;
        var logoW = 68;
        var logoH = 68;
        var avatarW = 40;
        var qrCodeW = 130;
        drawQrcode({
          width: 1,
          height: 1,
          x: 10,
          y: 10,
          image: {},
          canvasId: 'canvas',
          text: '',
          callback: function callback(ctx) {
            _this.fillRoundRect(ctx, 0, 0, canvasW, canvasH, 12, '#ffffff');
            // 绘制商品主图
            _this.drawQuadShape({ imgObj: goodsImg, width: canvasW, height: canvasW, posx: 0, posy: 0, ctx: ctx });
            // ctx.drawImage(goodsImg.path, 0, 0, canvasW, canvasW);
            // 绘制店铺logo
            ctx.drawImage(kxpLogo, 472, 0, logoW, logoH);
            // 商品名称
            _this.drawText({ x: 16, y: 600, color: '#333333', font: '28px sans-serif', text: title, maxSize: 12, ctx: ctx });
            // 绘制店铺二维码
            ctx.drawImage(qrImg, 386, 580, qrCodeW, qrCodeW);
            // 商品现价
            _this.drawText({ x: 16, y: 655, color: '#F9482E', font: 'bold 36px sans-serif', text: "\uFFE5" + price, ctx: ctx });
            // 商品原价
            if (originPrice) {
              var metrics = parseInt(ctx.measureText("\uFFE5" + price).width || 0, 10);
              _this.drawText({ x: 24 + metrics, y: 655, color: '#C9C9C9', font: '24px sans-serif', text: "\uFFE5" + originPrice, ctx: ctx, lineThrough: true });
            }
            // 绘制用户头像
            _this.drawCircleImg({ x: 112, y: 742, width: avatarW, imgObj: avatarImg, ctx: ctx, isCircle: true });
            // 推荐语
            _this.drawText({ x: 164, y: 770, color: '#999999', font: '24px sans-serif', text: '我发现了款好物推荐给你', ctx: ctx });
            _this.createImg(ctx);
          }
        }, _this);
      };
      drawCvs();
    }, _this.drawShopShare = function () {
      var globalStore = _this.props.globalStore;
      var shareImgInfo = globalStore.data.shareImgInfo;
      var shopShareUrl = shareImgInfo.shopShareUrl,
          shopBg = shareImgInfo.shopBg,
          avatarImg = shareImgInfo.avatarImg,
          shopLogo = shareImgInfo.shopLogo,
          shopName = shareImgInfo.shopName,
          shopQrImg = shareImgInfo.shopQrImg,
          jdLogo = shareImgInfo.jdLogo;

      console.log({ shopShareUrl: shopShareUrl, shopBg: shopBg, avatarImg: avatarImg, shopLogo: shopLogo, shopName: shopName, shopQrImg: shopQrImg, jdLogo: jdLogo });
      if (shopShareUrl) {
        _this.openImageShare();
        _this.setState({
          tempFilePath: shopShareUrl
        });
        return;
      }
      if (!shopBg || !avatarImg || !shopLogo || !shopName || !shopQrImg || !jdLogo) {
        imgshare.getShopShare();
        _wechatUtils.message.warn('图片未保存成功，请再试一次');
        return;
      }
      _this.openImageShare();
      var drawCvs = function drawCvs() {
        var canvasW = 540;
        var canvasH = 796;
        var logoW = 44;
        var logoH = 31;
        var avatarW = 88;
        var shopW = 68;
        var qrCodeW = 150;
        drawQrcode({
          width: 1,
          height: 1,
          x: 10,
          y: 10,
          image: shopBg ? {
            imageResource: shopBg,
            dWidth: canvasW,
            dHeight: canvasH,
            dx: 0,
            dy: 0
          } : {},
          canvasId: 'canvas',
          text: '',
          callback: function callback(ctx) {
            // 绘制用户头像
            _this.drawCircleImg({ y: 24, width: avatarW, imgObj: avatarImg, ctx: ctx, isCircle: true });
            // 绘制店铺头像
            _this.drawCircleImg({ y: 339, width: shopW, imgObj: shopLogo, ctx: ctx, isCircle: true });
            // 绘制jdlogo
            ctx.drawImage(jdLogo, 294, 326, logoW, logoH);
            // 店铺昵称
            _this.drawText({ y: 445, color: '#343434', font: 'bold 28px sans-serif', text: shopName, ctx: ctx });
            // 店铺推荐语
            _this.drawText({ y: 485, color: '#999999', font: '24px sans-serif', text: '百款低价好物，店铺持续上新中', ctx: ctx });

            // 绘制二维码
            ctx.drawImage(shopQrImg, 195, 534, qrCodeW, qrCodeW);

            // 二维码备注
            _this.drawText({ y: 728, color: '#999999', font: '22px sans-serif', text: '长按图片识别或扫描打开', ctx: ctx });
            _this.createImg(ctx);
          }
        }, _this);
      };
      drawCvs();
    }, _this.drawQrcodeShare = function () {
      var globalStore = _this.props.globalStore;
      var shareImgInfo = globalStore.data.shareImgInfo;
      var codeShareUrl = shareImgInfo.codeShareUrl,
          inviteCodeBg = shareImgInfo.inviteCodeBg,
          avatarImg = shareImgInfo.avatarImg,
          shopQrImg = shareImgInfo.shopQrImg,
          inviteCode = shareImgInfo.inviteCode;

      if (codeShareUrl) {
        _this.openImageShare();
        _this.setState({
          tempFilePath: codeShareUrl
        });
        return;
      }
      if (!inviteCodeBg || !avatarImg || !shopQrImg || !inviteCode) {
        imgshare.getInviteShare();
        _wechatUtils.message.warn('图片未保存成功，请再试一次');
        return;
      }
      _this.openImageShare();
      var drawCvs = function drawCvs() {
        var canvasW = 540;
        var canvasH = 796;
        var avatarW = 88;
        var qrCodeW = 220;
        drawQrcode({
          width: 1,
          height: 1,
          x: 10,
          y: 10,
          image: inviteCodeBg ? {
            imageResource: inviteCodeBg,
            dWidth: canvasW,
            dHeight: canvasH,
            dx: 0,
            dy: 0
          } : {},
          canvasId: 'canvas',
          text: '',
          callback: function callback(ctx) {
            // 绘制头像
            _this.drawCircleImg({ y: 24, width: avatarW, imgObj: avatarImg, ctx: ctx, isCircle: true });
            // 邀请码文字
            _this.drawText({ y: 336, color: '#9A9A9A', font: '28px sans-serif', text: '专属邀请码', ctx: ctx });
            // 邀请码
            _this.drawText({ y: 386, color: '#333333', font: 'bold 36px sans-serif', text: inviteCode, ctx: ctx });
            // 绘制二维码
            ctx.drawImage(shopQrImg, 160, 436, qrCodeW, qrCodeW);
            // 二维码备注
            _this.drawText({ y: 734, color: '#999999', font: '22px sans-serif', text: '长按图片识别或扫描打开', ctx: ctx });

            _this.createImg(ctx);
          }
        }, _this);
      };
      drawCvs();
    }, _this.drawCircleImg = function (_ref4) {
      var _ref4$x = _ref4.x,
          x = _ref4$x === undefined ? 0 : _ref4$x,
          y = _ref4.y,
          width = _ref4.width,
          imgObj = _ref4.imgObj,
          ctx = _ref4.ctx,
          isCircle = _ref4.isCircle;

      var canvasW = 540;
      var radius = parseInt(width / 2, 10);
      if (isCircle) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(x ? x + radius : 270, y + radius, radius, 0, Math.PI * 2, false);
        ctx.clip();
      }
      ctx.drawImage(imgObj, !!x ? x : 270 - radius, y, radius * 2, radius * 2);
      ctx.restore();
    }, _this.drawText = function (_ref5) {
      var _ref5$x = _ref5.x,
          x = _ref5$x === undefined ? 0 : _ref5$x,
          y = _ref5.y,
          color = _ref5.color,
          font = _ref5.font,
          text = _ref5.text,
          _ref5$maxSize = _ref5.maxSize,
          maxSize = _ref5$maxSize === undefined ? 0 : _ref5$maxSize,
          ctx = _ref5.ctx,
          _ref5$lineThrough = _ref5.lineThrough,
          lineThrough = _ref5$lineThrough === undefined ? false : _ref5$lineThrough;

      var canvasW = 540;
      ctx.font = font;
      if (!x) {
        ctx.setTextAlign('center');
      }
      if (maxSize) {
        text = "" + text.slice(0, maxSize) + (text.length > maxSize ? '...' : '');
      }
      ctx.setFillStyle(color);
      ctx.fillText(text, x ? x : 270, y);
      if (lineThrough) {
        var metrics = parseInt(ctx.measureText("\uFFE5" + text).width || 0, 10);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.moveTo(x, y - 7);
        ctx.lineTo(x + parseInt(0.8 * metrics, 10), y - 7);
        ctx.closePath();
        ctx.stroke();
      }
    }, _this.createImg = function (ctx, canvas) {
      var globalStore = _this.props.globalStore;
      var shareImgInfo = globalStore.data.shareImgInfo;

      ctx.draw(true);
      setTimeout(function () {
        _taroWeapp2.default.canvasToTempFilePath({
          canvasId: canvas ? canvas : 'canvas',
          success: function success(_ref6) {
            var tempFilePath = _ref6.tempFilePath;

            _this.setState({ tempFilePath: tempFilePath });
            var type = _this.props.params.type;

            if (type === 'shop' || type === 'qrcode' || type === 'live') {
              var idata = Object.assign({}, shareImgInfo);
              if (type === 'shop') {
                idata.shopShareUrl = tempFilePath;
              } else if (type === 'qrcode') {
                idata.codeShareUrl = tempFilePath;
              } else if (type === 'live') {
                idata.liveShareUrl = tempFilePath;
              }
              globalStore.setData('shareImgInfo', idata, 'share-tool.jsx,line:236');
            }
          }
        }, _this.$scope);
      }, 500);
    }, _this.saveImg = function (e) {
      var tempFilePath = _this.state.tempFilePath;

      if (e) {
        _this.stopPropagation(e);
      }

      if (tempFilePath) {
        _taroWeapp2.default.saveImageToPhotosAlbum({
          filePath: tempFilePath,
          success: function success() {
            _this.closeImageShare();
            _taroWeapp2.default.showToast({
              icon: 'none',
              title: '保存图片成功，可以分享到朋友圈啦',
              duration: 2000
            });
          },
          fail: function fail(err) {
            if (err.errMsg === 'saveImageToPhotosAlbum:fail:auth denied' || err.errMsg === 'saveImageToPhotosAlbum:fail auth deny' || err.errMsg === 'saveImageToPhotosAlbum:fail authorize no response') {
              _this.setState({
                showAuthModal: true
              });
            }
          }
        });
      }
    }, _this.handleConfirm = function () {
      _this.handleCloseModal();
      _taroWeapp2.default.openSetting().then(function (data) {
        if (data.authSetting['scope.writePhotosAlbum']) {
          _this.saveImg();
        }
      });
    }, _this.handleCloseModal = function () {
      _this.setState({
        showAuthModal: false
      });
    }, _this.stopPropagation = function (e) {
      e.preventDefault();
      e.stopPropagation();
    }, _this.config = {
      navigationBarTitleText: ''
    }, _this.customComponents = ["AtModal"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Collect, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Collect.prototype.__proto__ || Object.getPrototypeOf(Collect.prototype), "_constructor", this).call(this, props);

      this.state = {
        // 界面/组件 初始数据
        modalVisible: false,
        tempFilePath: '',
        showAuthModal: false
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}

    // 绘制头像

    // 绘制文字

    // canvas生成图片

  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__160"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__160 = _genCompid2[0],
          $compid__160 = _genCompid2[1];

      var _state = this.__state,
          modalVisible = _state.modalVisible,
          tempFilePath = _state.tempFilePath,
          showAuthModal = _state.showAuthModal;

      var _ref7 = this.__props.params || {},
          type = _ref7.type,
          showShareImg = _ref7.showShareImg;

      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)({ height: '796px', width: '540px' });
      var anonymousState__temp2 = (0, _taroWeapp.internal_inline_style)({ height: '870px', width: '540px' });
      _taroWeapp.propsManager.set({
        "isOpened": showAuthModal,
        "title": "\u63D0\u793A",
        "cancelText": "\u53D6\u6D88",
        "confirmText": "\u786E\u8BA4",
        "onClose": this.handleCloseModal,
        "onCancel": this.handleCloseModal,
        "onConfirm": this.handleConfirm,
        "content": "\u4FDD\u5B58\u5931\u8D25\uFF0C\u8BF7\u5F00\u542F\u76F8\u518C\u6743\u9650"
      }, $compid__160, $prevCompid__160);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        $compid__160: $compid__160,
        styles: _indexModule2.default,
        Assets: _index6.default,
        showShareImg: showShareImg,
        type: type
      });
      return this.__state;
    }
  }]);

  return Collect;
}(_taroWeapp2.default.Component), _class2.$$events = ["drawBall", "closeImageShare", "stopPropagation", "saveImg"], _class2.$$componentPath = "components/share-tool/index", _temp2)) || _class;

exports.default = Collect;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Collect));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/share-tool/index.jsx?taro&type=template&parse=COMPONENT&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/components/share-tool/index.jsx?taro&type=template&parse=COMPONENT& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "components/share-tool/index.wxml";

/***/ }),

/***/ "./src/components/share-tool/index.jsx":
/*!*********************************************!*\
  !*** ./src/components/share-tool/index.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.jsx?taro&type=template&parse=COMPONENT& */ "./src/components/share-tool/index.jsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.jsx?taro&type=script&parse=COMPONENT& */ "./src/components/share-tool/index.jsx?taro&type=script&parse=COMPONENT&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/components/share-tool/index.jsx?taro&type=script&parse=COMPONENT&":
/*!*******************************************************************************!*\
  !*** ./src/components/share-tool/index.jsx?taro&type=script&parse=COMPONENT& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=script&parse=COMPONENT& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/share-tool/index.jsx?taro&type=script&parse=COMPONENT&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/share-tool/index.jsx?taro&type=template&parse=COMPONENT&":
/*!*********************************************************************************!*\
  !*** ./src/components/share-tool/index.jsx?taro&type=template&parse=COMPONENT& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=template&parse=COMPONENT& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/mac/Desktop/shops_wechat/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/share-tool/index.jsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_mac_Desktop_shops_wechat_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/share-tool/index.module.styl":
/*!*****************************************************!*\
  !*** ./src/components/share-tool/index.module.styl ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"share_box":"index-module__share_box___3D-Kg","item":"index-module__item___2LKZ_","font":"index-module__font___1LAZr","imgicon":"index-module__imgicon___3MZMY","out":"index-module__out___1k0_e","canvasImg":"index-module__canvasImg___m6oMi","img_desc":"index-module__img_desc___1701A","qrModal":"index-module__qrModal___1QxLC","imgClose":"index-module__imgClose___tHAne","canvasLive":"index-module__canvasLive___27UXy","operation":"index-module__operation___3CTsa","shareBtn":"index-module__shareBtn___2W0sf","wxBtn":"index-module__wxBtn___14y9Q","downloadBtn":"index-module__downloadBtn___2bxVC","wxicon":"index-module__wxicon___1uhyq","loadicon":"index-module__loadicon___1ZStd","btnLabel":"index-module__btnLabel___2IqAB","shareContainer":"index-module__shareContainer___3nNx0","qrModal1":"index-module__qrModal1___3CHv1"};

/***/ })

},[["./src/components/share-tool/index.jsx","runtime","taro","vendors","common"]]]);