import Taro from '@tarojs/taro';
import { View, Image, Canvas, Button } from '@tarojs/components';
import { message } from '@jxkang/wechat-utils';
import { AtModal } from "taro-ui";
import withPage from '@/components/with-page';
import Utils from '@/utils';
import Assets from '@/components/assets';
import styles from './index.module.styl';

const { drawQrcode, imgshare } = Utils;
// const getFileUrl = appUtils.getFileUrl;

@withPage
class Collect extends Taro.Component {
  constructor(props) {
    super(props);

    this.config = {
      navigationBarTitleText: '',
    }

    this.state = {
      // 界面/组件 初始数据
      modalVisible: false,
      tempFilePath: '',
      showAuthModal: false,
    };
  }
  componentDidMount() { }

  copyLink = (link) => {
    Taro.setClipboardData({
      data: link,
      success() {
        message.success('复制成功');
      }
    })
  }

  openImageShare = () => {
    this.setState({
      modalVisible: true
    })
  }

  closeImageShare = (e) => {
    if (e) {
      this.stopPropagation(e)
    }
    this.setState({
      modalVisible: false,
      tempFilePath: ''
    })
  }

  drawBall = () => {
    const { type } = this.props.params;
    if (type === 'goodsDetail') {
      this.drawGoodsShare()
    } else if (type === 'shop') {
      this.drawShopShare()
    } else if (type === 'qrcode') {
      this.drawQrcodeShare()
    } else if (type === 'live') {
      this.drawLiveShare()
    }
  }
  fillRoundRect = (cxt, x, y, width, height, radius, /*optional*/ fillColor) => {
    //圆的直径必然要小于矩形的宽高          
    if (2 * radius > width || 2 * radius > height) { return false; }

    cxt.save();
    cxt.translate(x, y);
    //绘制圆角矩形的各个边  
    this.drawRoundRectPath(cxt, width, height, radius);
    cxt.fillStyle = fillColor || "#000"; //若是给定了值就用给定的值否则给予默认值  
    cxt.fill();
    cxt.restore();
  }
  drawRoundRectPath = (cxt, width, height, radius) => {
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
    cxt.strokeStyle = 'transparent'
    cxt.closePath();
  }
  drawLiveShare = () => {
    const { globalStore } = this.props;
    const { shareImgInfo, userInfo } = globalStore.data;
    const { avatarImg, kxpLogo, liveShare, liveShareUrl } = shareImgInfo;
    const { liveImg, goodsImg, qrImg, liveShopLogo } = liveShare;
    const { nickName = '康小铺' } = userInfo;
    if (liveShareUrl) {
      this.openImageShare();
      this.setState({
        tempFilePath: liveShareUrl
      })
      return
    }
    if (!liveImg || !goodsImg || !qrImg || !avatarImg || !kxpLogo || !liveShopLogo) {
      console.log({liveImg, goodsImg, qrImg, liveShopLogo})
      imgshare.getLiveShare()
      message.warn('图片未保存成功，请再试一次');
      return
    }
    this.openImageShare();
    const drawCvs = () => {
      const canvasW = 540
      const canvasH = 870
      const logoW = 68
      const avatarW = 80
      const qrCodeW = 80
      const liveImgW = 472
      const shopImgW = 60
      const goodsW = 80
      drawQrcode({
        width: 0,
        height: 0,
        x: 0,
        y: 0,
        image: {},
        canvasId: 'liveCanvas',
        text: '',
        callback: (ctx) => {
          this.fillRoundRect(ctx, 0, 0, canvasW, canvasH, 12, '#ffffff');
          // 绘制用户头像
          this.drawCircleImg({ x: 32, y: 16, width: avatarW, imgObj: avatarImg, ctx, isCircle: true })
          // 用户昵称
          this.drawText({ x: 128, y: 46, color: '#323232', font: 'bold 32px sans-serif', text: nickName, maxSize: 10, ctx })
          // 用户邀请语
          this.drawText({ x: 128, y: 90, color: '#999999', font: '24px sans-serif', text: '邀请你一起看直播', ctx })
          // 绘制店铺logo
          ctx.drawImage(kxpLogo, (canvasW - logoW), 0, logoW, logoW);
          // 直播主图
          this.drawQuadShape({imgObj:liveImg, width:liveImgW, height:liveImgW, posx: 34, posy: 107, ctx})
          // ctx.drawImage(liveImg.path, 34, 107, liveImgW, liveImgW);
          // 口号
          this.drawText({ y: 636, color: '#333333', font: 'bold 28px sans-serif', text: '快来抢货，先来先得', ctx })
          // 推荐商品列表
          if(goodsImg && goodsImg.length > 0) {
            this.drawGoodsList({ goodsImg, x: 30, y: 660, imgWidth: goodsW, ctx })
          }
          // 店铺头像
          this.drawCircleImg({ x: 32, y: 782, width: shopImgW, imgObj: liveShopLogo, ctx, isCircle: true })
          // 用微信打开看看吧
          this.drawText({ x: 200, y: 824, color: '#C9C9C9', font: '24px sans-serif', text: '用微信打开看看吧', ctx })
          // 直播间二维码
          ctx.drawImage(qrImg, 430, 772, qrCodeW, qrCodeW);
          this.createImg(ctx, 'liveCanvas')
        }
      }, this);
    }
    drawCvs()
  }
  drawGoodsList = ({ goodsImg, x, y, imgWidth, ctx }) => {
    for (let i = 0; i < goodsImg.length; i++) {
      const drawingx = x + parseInt((imgWidth + 20) * i || 0, 10)
      ctx.drawImage(goodsImg[i].path, drawingx, y, imgWidth, imgWidth);
      // this.drawQuadShape({imgObj:goodsImg[i], width:imgWidth, height:imgWidth, posx: drawingx, posy: y, ctx})
    }
  }
  drawQuadShape = ({imgObj, width, height, posx, posy, ctx}) => {
    let cutSize = 0;
    if(width / imgObj.width > height / imgObj.height) {
      cutSize = imgObj.width
    } else {
      cutSize = imgObj.height
    }
    ctx.drawImage(imgObj.path, 0, 0, cutSize, cutSize, posx, posy, width, height);
  }
  drawGoodsShare = () => {
    const { price, originPrice, title } = this.props.params;
    const { globalStore } = this.props;
    const { shareImgInfo } = globalStore.data;
    const { avatarImg, kxpLogo, goodsShare } = shareImgInfo;
    const { goodsImg, qrImg } = goodsShare;
    console.log({ goodsImg, qrImg, avatarImg, kxpLogo })
    console.log({ price, originPrice, title })
    if (!price || !title) {
      message.warn('图片未保存成功，请再试一次');
      return
    }
    if (!avatarImg || !kxpLogo || !goodsImg || !qrImg) {
      imgshare.getGoodsShare()
      message.warn('图片未保存成功，请再试一次');
      return
    }
    this.openImageShare();
    const drawCvs = () => {
      const canvasW = 540
      const canvasH = 796
      const logoW = 68
      const logoH = 68
      const avatarW = 40
      const qrCodeW = 130
      drawQrcode({
        width: 1,
        height: 1,
        x: 10,
        y: 10,
        image: {},
        canvasId: 'canvas',
        text: '',
        callback: (ctx) => {
          this.fillRoundRect(ctx, 0, 0, canvasW, canvasH, 12, '#ffffff');
          // 绘制商品主图
          this.drawQuadShape({imgObj:goodsImg, width:canvasW, height:canvasW, posx: 0, posy: 0, ctx})
          // ctx.drawImage(goodsImg.path, 0, 0, canvasW, canvasW);
          // 绘制店铺logo
          ctx.drawImage(kxpLogo, (canvasW - logoW), 0, logoW, logoH);
          // 商品名称
          this.drawText({ x: 16, y: 600, color: '#333333', font: '28px sans-serif', text: title, maxSize: 12, ctx })
          // 绘制店铺二维码
          ctx.drawImage(qrImg, 386, 580, qrCodeW, qrCodeW);
          // 商品现价
          this.drawText({ x: 16, y: 655, color: '#F9482E', font: 'bold 36px sans-serif', text: `￥${price}`, ctx })
          // 商品原价
          if(originPrice) {
            const metrics = parseInt(ctx.measureText(`￥${price}`).width || 0, 10)
            this.drawText({ x: 24 + metrics, y: 655, color: '#C9C9C9', font: '24px sans-serif', text: `￥${originPrice}`, ctx, lineThrough: true })
          }
          // 绘制用户头像
          this.drawCircleImg({ x: 112, y: 742, width: avatarW, imgObj: avatarImg, ctx, isCircle: true })
          // 推荐语
          this.drawText({ x: 164, y: 770, color: '#999999', font: '24px sans-serif', text: '我发现了款好物推荐给你', ctx })
          this.createImg(ctx)
        }
      }, this);
    }
    drawCvs()
  }

  drawShopShare = () => {
    const { globalStore } = this.props;
    const { shareImgInfo } = globalStore.data;
    const { shopShareUrl, shopBg, avatarImg, shopLogo, shopName, shopQrImg, jdLogo } = shareImgInfo;
    console.log({ shopShareUrl, shopBg, avatarImg, shopLogo, shopName, shopQrImg, jdLogo })
    if (shopShareUrl) {
      this.openImageShare();
      this.setState({
        tempFilePath: shopShareUrl
      })
      return
    }
    if (!shopBg || !avatarImg || !shopLogo || !shopName || !shopQrImg || !jdLogo) {
      imgshare.getShopShare()
      message.warn('图片未保存成功，请再试一次');
      return
    }
    this.openImageShare();
    const drawCvs = () => {
      const canvasW = 540
      const canvasH = 796
      const logoW = 44
      const logoH = 31
      const avatarW = 88
      const shopW = 68
      const qrCodeW = 150
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
        callback: (ctx) => {
          // 绘制用户头像
          this.drawCircleImg({ y: 24, width: avatarW, imgObj: avatarImg, ctx, isCircle: true })
          // 绘制店铺头像
          this.drawCircleImg({ y: 339, width: shopW, imgObj: shopLogo, ctx, isCircle: true })
          // 绘制jdlogo
          ctx.drawImage(jdLogo, (canvasW - logoW) / 2 + 46, 326, logoW, logoH);
          // 店铺昵称
          this.drawText({ y: 445, color: '#343434', font: 'bold 28px sans-serif', text: shopName, ctx })
          // 店铺推荐语
          this.drawText({ y: 485, color: '#999999', font: '24px sans-serif', text: '百款低价好物，店铺持续上新中', ctx })

          // 绘制二维码
          ctx.drawImage(shopQrImg, (canvasW - qrCodeW) / 2, 534, qrCodeW, qrCodeW);

          // 二维码备注
          this.drawText({ y: 728, color: '#999999', font: '22px sans-serif', text: '长按图片识别或扫描打开', ctx })
          this.createImg(ctx)
        }
      }, this);
    }
    drawCvs();
  }

  drawQrcodeShare = () => {
    const { globalStore } = this.props;
    const { shareImgInfo } = globalStore.data;
    const { codeShareUrl, inviteCodeBg, avatarImg, shopQrImg, inviteCode } = shareImgInfo;
    if (codeShareUrl) {
      this.openImageShare();
      this.setState({
        tempFilePath: codeShareUrl
      })
      return
    }
    if (!inviteCodeBg || !avatarImg || !shopQrImg || !inviteCode) {
      imgshare.getInviteShare()
      message.warn('图片未保存成功，请再试一次');
      return
    }
    this.openImageShare();
    const drawCvs = () => {
      const canvasW = 540
      const canvasH = 796
      const avatarW = 88
      const qrCodeW = 220
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
        callback: (ctx) => {
          // 绘制头像
          this.drawCircleImg({ y: 24, width: avatarW, imgObj: avatarImg, ctx, isCircle: true })
          // 邀请码文字
          this.drawText({ y: 336, color: '#9A9A9A', font: '28px sans-serif', text: '专属邀请码', ctx })
          // 邀请码
          this.drawText({ y: 386, color: '#333333', font: 'bold 36px sans-serif', text: inviteCode, ctx })
          // 绘制二维码
          ctx.drawImage(shopQrImg, (canvasW - qrCodeW) / 2, 436, qrCodeW, qrCodeW);
          // 二维码备注
          this.drawText({ y: 734, color: '#999999', font: '22px sans-serif', text: '长按图片识别或扫描打开', ctx })

          this.createImg(ctx);
        }
      }, this);
    }
    drawCvs();
  }

  // 绘制头像
  drawCircleImg = ({ x = 0, y, width, imgObj, ctx, isCircle }) => {
    const canvasW = 540;
    const radius = parseInt(width / 2, 10)
    if (isCircle) {
      ctx.save()
      ctx.beginPath()
      ctx.arc(x ? x + radius : canvasW / 2, y + radius, radius, 0, Math.PI * 2, false)
      ctx.clip()
    }
    ctx.drawImage(
      imgObj,
      !!x ? x : canvasW / 2 - radius,
      y,
      radius * 2,
      radius * 2,
    );
    ctx.restore()
  }
  // 绘制文字
  drawText = ({ x = 0, y, color, font, text, maxSize = 0, ctx, lineThrough = false }) => {
    const canvasW = 540;
    ctx.font = font
    if (!x) {
      ctx.setTextAlign('center')
    }
    if (maxSize) {
      text = `${text.slice(0, maxSize)}${text.length > maxSize ? '...' : ''}`
    }
    ctx.setFillStyle(color)
    ctx.fillText(
      text,
      x ? x : canvasW / 2,
      y,
    )
    if (lineThrough) {
      const metrics = parseInt(ctx.measureText(`￥${text}`).width || 0, 10)
      ctx.beginPath()
      ctx.strokeStyle = color
      ctx.moveTo(x, y - 7)
      ctx.lineTo(x + parseInt(0.8*metrics, 10), y - 7)
      ctx.closePath();
      ctx.stroke()
    }
  }
  // canvas生成图片
  createImg = (ctx, canvas) => {
    const { globalStore } = this.props;
    const { shareImgInfo } = globalStore.data;
    ctx.draw(true);
    setTimeout(() => {
      Taro.canvasToTempFilePath({
        canvasId: canvas ? canvas : 'canvas',
        success: ({ tempFilePath }) => {
          this.setState({ tempFilePath: tempFilePath })
          const { type } = this.props.params;
          if(type === 'shop' || type === 'qrcode' || type === 'live') {
            const idata = Object.assign({}, shareImgInfo);
            if (type === 'shop') {
              idata.shopShareUrl = tempFilePath
            } else if (type === 'qrcode') {
              idata.codeShareUrl = tempFilePath
            } else if (type === 'live') {
              idata.liveShareUrl = tempFilePath
            }
            globalStore.setData('shareImgInfo', idata, 'share-tool.jsx,line:236');
          }
        }
      }, this.$scope)
    }, 500);
  }
  saveImg = (e) => {
    const { tempFilePath } = this.state;
    if (e) {
      this.stopPropagation(e)
    }

    if (tempFilePath) {
      Taro.saveImageToPhotosAlbum({
        filePath: tempFilePath,
        success: () => {
          this.closeImageShare()
          Taro.showToast({
            icon: 'none',
            title: '保存图片成功，可以分享到朋友圈啦',
            duration: 2000,
          })
        },
        fail: (err) => {
          if (err.errMsg === 'saveImageToPhotosAlbum:fail:auth denied' || err.errMsg === 'saveImageToPhotosAlbum:fail auth deny' || err.errMsg === 'saveImageToPhotosAlbum:fail authorize no response') {
            this.setState({
              showAuthModal: true
            })
          }
        }
      })
    }
  }

  handleConfirm = () => {
    this.handleCloseModal();
    Taro.openSetting()
      .then((data) => {
        if (data.authSetting['scope.writePhotosAlbum']) {
          this.saveImg();
        }
      })
  }

  handleCloseModal = () => {
    this.setState({
      showAuthModal: false
    });
  }

  stopPropagation = (e) => {
    e.preventDefault();
    e.stopPropagation();
  }

  render() {
    const { modalVisible, tempFilePath, showAuthModal } = this.state;
    const {
      // link,
      type,
      showShareImg } = this.props.params || {};

    return (
      <View className={styles.out}>
        <View className={styles.share_box}>
          <Button className={styles.item} open-type='share'>
            <Image src={Assets.share.wechat} className={styles.imgicon}></Image>
            <View className={styles.font}>分享好友</View>
          </Button>
          {/* <Button className={styles.item} open-type='share'>
            <Image src={Assets.other.friend} className={styles.imgicon}></Image>
            <View className={styles.font}  >朋友圈</View>
          </Button> */}
          {
            showShareImg ?
              <Button className={styles.item} onClick={this.drawBall}>
                <Image src={Assets.share.wxMoments} className={styles.imgicon}></Image>
                <View className={styles.font}>生成分享图</View>
              </Button> : null
          }
          {/* <Button className={styles.item} onClick={() => this.copyLink(link)}>
            <Image src={Assets.other.link} className={styles.imgicon}></Image>
            <View className={styles.font}>链接</View>
          </Button> */}
        </View>

        {/* 生成图片 */}
        <View className={`${styles.qrModal} ${modalVisible ? styles.qrModal1 : ''}`} onClick={this.closeImageShare}>
          <Image src={Assets.share.close} className={styles.imgClose} onClick={this.closeImageShare}></Image>
          <Image src={tempFilePath}
            className={`${styles.canvasImg} ${type == 'live' ? styles.canvasLive : ''}`}
            onClick={this.stopPropagation}
          ></Image>
          <View className={styles.operation}>
            {/* <View className={styles.wechatBtn}>微信</View> */}
            {/* <Button className={styles.shareBtn} open-type='share'>
              <Image src={Assets.share.wechat} className={styles.wxicon}></Image>
              <View className={styles.btnLabel}>分享给好友</View>
            </Button> */}
            <View className={`${styles.shareBtn} ${styles.downloadBtn}`} onClick={this.saveImg}>
              <Image src={Assets.share.download} className={styles.loadicon}></Image>
              <View className={styles.btnLabel}>保存分享图</View>
            </View>
          </View>
        </View>
        {/* 分享微信 */}
        {/* <Collectmodal ref={node => this.collect = node}></Collectmodal> */}
        <Canvas
          className={styles.shareContainer}
          canvasId='canvas'
          style={{ height: '796px', width: '540px' }}
        />
        <Canvas
          className={styles.shareContainer}
          canvasId='liveCanvas'
          style={{ height: '870px', width: '540px' }}
        />
        <AtModal
          isOpened={showAuthModal}
          title='提示'
          cancelText='取消'
          confirmText='确认'
          onClose={this.handleCloseModal}
          onCancel={this.handleCloseModal}
          onConfirm={this.handleConfirm}
          content='保存失败，请开启相册权限'
        />
      </View >
    );
  }

}

export default Collect;
