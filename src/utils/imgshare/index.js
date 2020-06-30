import Taro from '@tarojs/taro';
import Store from '@/store';
import { appUtils } from '@/utils';
import Model from '@/model';
import Assets from '@/components/assets';

const getInfo = {
  init({companyId}) {
    const { shareImgInfo } = Store.globalStore.data;
    const { shareCompanyId } = shareImgInfo;
    if(parseInt(shareCompanyId, 10) !== parseInt(companyId, 10)) {
      shareImgInfo.shareCompanyId = companyId
      shareImgInfo.shopShareUrl = ''
      shareImgInfo.codeShareUrl = ''
      shareImgInfo.shopName = ''
      shareImgInfo.shopLogo = ''
      shareImgInfo.shopQrImg = ''
      shareImgInfo.inviteCode = ''
      shareImgInfo.shopInfo = ''
      shareImgInfo.shopSceneMap = ''
      Store.globalStore.setData('shareImgInfo', shareImgInfo, 'imgshare.jsx,line:53');
    }
    getInfo.initShopShare()
  },
  /** 公共start */
  getinviteCodeBg() {
    const getFileUrl = appUtils.getFileUrl;
    const { shareImgInfo } = Store.globalStore.data;
    if(!shareImgInfo.inviteCodeBg) {
      Taro.getImageInfo({
        src: getFileUrl(Assets.share.shareQrcodebg, {query: 'x-oss-process=image/quality,q_50/format,jpg/interlace,1' })
      }).then((res) => {
        if(res.width < 0) {
          return
        }
        getInfo.saveImgInfo('inviteCodeBg', res.path)
      })
    }
  },
  getshopBg() {
    const getFileUrl = appUtils.getFileUrl;
    const { shareImgInfo } = Store.globalStore.data;
    if(!shareImgInfo.shopBg) {
      Taro.getImageInfo({
        src: getFileUrl(Assets.share.shareShopbg, {query: 'x-oss-process=image/quality,q_50/format,jpg/interlace,1' })
      }).then((res) => {
        if(res.width < 0) {
          return
        }
        getInfo.saveImgInfo('shopBg', res.path)
      })
    }
  },
  getAvatarImg() {
    const getFileUrl = appUtils.getFileUrl;
    const { shareImgInfo, userInfo } = Store.globalStore.data;
    if(!shareImgInfo.avatarImg) {
      const img = userInfo.headImg && userInfo.headImg.indexOf('.svg') === -1 ? userInfo.headImg : Assets.common.default_avatar
      Taro.getImageInfo({
        src: getFileUrl(img, {query: 'x-oss-process=image/quality,q_50/format,jpg/interlace,1' })
      }).then((res) => {
        if(res.width < 0) {
          return
        }
        getInfo.saveImgInfo('avatarImg', res.path)
      })
    }
  },
  getjdLogo() {
    const getFileUrl = appUtils.getFileUrl;
    const { shareImgInfo } = Store.globalStore.data;
    if(!shareImgInfo.jdLogo) {
      Taro.getImageInfo({
        src: getFileUrl(Assets.share.jdLogo, {query: 'x-oss-process=image/quality,q_50/format,jpg/interlace,1' })
      }).then((res) => {
        if(res.width < 0) {
          return
        }
        getInfo.saveImgInfo('jdLogo', res.path)
      })
    }
  },
  getKxpLogo() {
    const getFileUrl = appUtils.getFileUrl;
    const { shareImgInfo } = Store.globalStore.data;
    if(!shareImgInfo.kxpLogo) {
      Taro.getImageInfo({
        src: getFileUrl(Assets.share.logo, {query: 'x-oss-process=image/quality,q_50/format,jpg/interlace,1' })
      }).then((res) => {
        if(res.width < 0) {
          return
        }
        getInfo.saveImgInfo('kxpLogo', res.path)
      })
    }
  },
  getshopInfo({shopInfo, companyId=''}) {
    const getFileUrl = appUtils.getFileUrl;
    const { shareImgInfo } = Store.globalStore.data;
    let force = false;
    if(companyId) {
      force = parseInt(shareImgInfo.shareCompanyId, 10) !== parseInt(companyId, 10)
    }
    if(!shareImgInfo.shopInfo || force) {
      getInfo.saveImgInfo('shopInfo', shopInfo)
    }
    if(!shareImgInfo.shopName || force) {
      getInfo.saveImgInfo('shopName', shopInfo.shopName || '康小铺')
    }
    if(!shareImgInfo.shopLogo || force) {
      Taro.getImageInfo({
        src: getFileUrl(shopInfo.logo, {query: 'x-oss-process=image/quality,q_50/format,jpg/interlace,1' })
      }).then((res) => {
        if(res.width < 0) {
          return
        }
        getInfo.saveImgInfo('shopLogo', res.path)
      })
    }
  },
  getShopQrImg({sceneMap, companyId=''}) {
    const getFileUrl = appUtils.getFileUrl;
    const { shareImgInfo } = Store.globalStore.data;
    const { shopQrImg } = shareImgInfo;
    let force = false;
    if(companyId) {
      force = parseInt(shareImgInfo.shareCompanyId, 10) !== parseInt(companyId, 10)
    }
    if(!shareImgInfo.shopsceneMap || force) {
      getInfo.saveImgInfo('shopsceneMap', sceneMap)
    }
    if(!shareImgInfo.inviteCode || force) {
      getInfo.saveImgInfo('inviteCode', sceneMap.M)
    }
    if(!shopQrImg || force) {
      const wxcode = encodeURI(`${Model.common.getGoodsDetailQrCode()}?useShortCode=true&wechatSourceEnum=KXP_C&page=pages/index/index&sceneMap=${JSON.stringify(sceneMap)}`);
      Taro.getImageInfo({
        src: getFileUrl(wxcode, {query: 'x-oss-process=image/quality,q_50/format,jpg/interlace,1' })
      }).then((res) => {
        if(res.width < 0) {
          return
        }
        getInfo.saveImgInfo('shopQrImg', res.path)
      })
    }
  },
  saveImgInfo(key, value) {
    const { globalStore } = Store;
    const { shareImgInfo } = globalStore.data;
    shareImgInfo[key] = value;
    globalStore.setData('shareImgInfo', shareImgInfo, 'imgshare.jsx,line:53');
  },
  /** 公共end */
  /** 店铺start */
  initShopShare() {
    getInfo.getshopBg();
    getInfo.getAvatarImg();
    getInfo.getjdLogo();
    
  },
  getShopShare() {
    const { shareImgInfo } = Store.globalStore.data;
    const { shopLogo, shopQrImg } = shareImgInfo;
    getInfo.initShopShare()
    if(!shopQrImg && shareImgInfo.shopsceneMap) {
      getInfo.getShopQrImg({sceneMap:shareImgInfo.shopsceneMap})
    }
    if(!shopLogo && shareImgInfo.shopInfo) {
      getInfo.getshopInfo({shopInfo: shareImgInfo.shopInfo})
    }
  },
  /** 店铺end */
  /** 二维码start */
  initInviteShare() {
    getInfo.getinviteCodeBg();
    getInfo.getAvatarImg();
  },
  getInviteShare() {
    const { shareImgInfo } = Store.globalStore.data;
    const { shopLogo, shopQrImg } = shareImgInfo;
    getInfo.initInviteShare()
    if(!shopQrImg && shareImgInfo.shopsceneMap) {
      getInfo.getShopQrImg({sceneMap:shareImgInfo.shopsceneMap})
    }
    if(!shopLogo && shareImgInfo.shopInfo) {
      getInfo.getshopInfo({shopInfo: shareImgInfo.shopInfo})
    }
  },
  /** 二维码end */
  /** 直播间start */
  initLiveShare() {
    getInfo.getAvatarImg();
    getInfo.getKxpLogo();
  },
  getLiveShare() {
    const { shareImgInfo } = Store.globalStore.data;
    const { liveShare={} } = shareImgInfo;
    getInfo.initLiveShare()
    if(!liveShare.qrImg && liveShare.sceneMap) {
      getInfo.getLivesqrImg(liveShare.sceneMap)
    }
    if(!liveShare.liveImg && liveShare.originliveImg) {
      getInfo.getLiveMainImg(liveShare.originliveImg)
    }
    if(!liveShare.goodsImg && liveShare.origingoodsImg) {
      getInfo.getLiveGoodsImg(liveShare.origingoodsImg)
    }
    if(!liveShare.liveShopLogo && liveShare.originLiveShopImg) {
      getInfo.getLiveShopImg(liveShare.originLiveShopImg)
    }
  },
  getLiveGoodsImg(list) {
    const getFileUrl = appUtils.getFileUrl;
    const { shareImgInfo } = Store.globalStore.data;
    const { liveShare={} } = shareImgInfo;
    if(list.length == 0) {
      liveShare.goodsImg = []
      getInfo.saveImgInfo('liveShare', liveShare)
      return
    }
    if(!liveShare.origingoodsImg) {
      liveShare.origingoodsImg = list.slice(0,5)
      getInfo.saveImgInfo('liveShare', liveShare)
    }
    const imgs = list.map((item) => item.mainImgUrl)
    const selectList = imgs.slice(0,5);
    const tempList = []
    for(let i = 0; i < selectList.length; i++) {
      Taro.getImageInfo({
        src: getFileUrl(selectList[i], {query: 'x-oss-process=image/quality,q_50/format,jpg/interlace,1' })
      }).then((res) => {
        tempList[i] = {
          path: res.path,
          width: res.width,
          height: res.height
        }
        if(i == selectList.length - 1) {
          liveShare.goodsImg = tempList
          getInfo.saveImgInfo('liveShare', liveShare)
        }
      }).catch(() => {
      })
    }
  },
  getLiveMainImg(image) {
    const getFileUrl = appUtils.getFileUrl;
    const { shareImgInfo } = Store.globalStore.data;
    const { liveShare={} } = shareImgInfo;
    if(!liveShare.originliveImg) {
      liveShare.originliveImg = image
      getInfo.saveImgInfo('liveShare', liveShare)
    }
    Taro.getImageInfo({
      src: getFileUrl(image, {query: 'x-oss-process=image/quality,q_50/format,jpg/interlace,1' })
    }).then((res) => {
      if(res.width < 0) {
        return
      }
      liveShare.liveImg = {
        path: res.path,
        width: res.width,
        height: res.height
      }
      getInfo.saveImgInfo('liveShare', liveShare)
    }).catch(() => {
    })
  },
  getLivesqrImg(sceneMap) {
    const getFileUrl = appUtils.getFileUrl;
    const { shareImgInfo } = Store.globalStore.data;
    const { liveShare={} } = shareImgInfo;
    if(!liveShare.sceneMap) {
      liveShare.sceneMap = sceneMap;
      getInfo.saveImgInfo('liveShare', liveShare)
    }
    const wxcode = encodeURI(`${Model.common.getGoodsDetailQrCode()}?useShortCode=true&wechatSourceEnum=KXP_C&page=kangLive/pages/golive/golive&sceneMap=${sceneMap}`);
    if(!liveShare.qrImg) {
      Taro.getImageInfo({
        src: getFileUrl(wxcode, {query: 'x-oss-process=image/quality,q_50/format,jpg/interlace,1' })
      }).then((res) => {
        console.log('getLivesqrImg', res)
        if(res.width < 0) {
          return
        }
        liveShare.qrImg = res.path;
        getInfo.saveImgInfo('liveShare', liveShare)
      }).catch(() => {
      })
    }
  },
  getLiveShopImg(img) {
    const getFileUrl = appUtils.getFileUrl;
    const { shareImgInfo } = Store.globalStore.data;
    const { liveShare={} } = shareImgInfo;
    if(!liveShare.originLiveShopImg) {
      liveShare.originLiveShopImg = img;
      getInfo.saveImgInfo('liveShare', liveShare)
    }
    if(!liveShare.liveShopLogo) {
      Taro.getImageInfo({
        src: getFileUrl(img, {query: 'x-oss-process=image/quality,q_50/format,jpg/interlace,1' })
      }).then((res) => {
        if(res.width < 0) {
          return
        }
        liveShare.liveShopLogo = res.path;
        getInfo.saveImgInfo('liveShare', liveShare)
      })
    }
  },
  clearLiveShare() {
    const { shareImgInfo } = Store.globalStore.data;
      if(shareImgInfo.liveShareUrl || (shareImgInfo.liveShare&& shareImgInfo.liveShare !== {})) {
      shareImgInfo.liveShare = {}
      shareImgInfo.liveShareUrl = ''
      Store.globalStore.setData('shareImgInfo', shareImgInfo, 'imgshare.jsx,line:53');
    }
  },
  /** 直播间end */
  /** 商品详情start */
  initDetailShare() {
    getInfo.getAvatarImg();
    getInfo.getKxpLogo();
  },
  getGoodsShare() {
    const { shareImgInfo } = Store.globalStore.data;
    const { goodsShare={} } = shareImgInfo
    getInfo.initDetailShare()
    if(!goodsShare.goodsImg && goodsShare.mainUrl) {
      getInfo.getGoodsImg(goodsShare.mainUrl)
    }
    if(!goodsShare.qrImg && goodsShare.sceneMap) {
      getInfo.getGoodsqrImg(goodsShare.sceneMap)
    }
  },
  getGoodsImg(mainUrl) {
    const getFileUrl = appUtils.getFileUrl;
    const { shareImgInfo } = Store.globalStore.data;
    const { goodsShare={} } = shareImgInfo;
    if(!goodsShare.mainUrl) {
      goodsShare.mainUrl = mainUrl;
      getInfo.saveImgInfo('goodsShare', goodsShare)
    }
    if(!goodsShare.goodsImg) {
      Taro.getImageInfo({
        src: getFileUrl(mainUrl, {query: 'x-oss-process=image/quality,q_50/format,jpg/interlace,1' })
      }).then((res) => {
        if(res.width < 0) {
          return
        }
        goodsShare.goodsImg = {
          path: res.path,
          width: res.width,
          height: res.height
        };
        getInfo.saveImgInfo('goodsShare', goodsShare)
      }).catch(() => {
      })
    }
  },
  getGoodsqrImg(sceneMap) {
    const getFileUrl = appUtils.getFileUrl;
    const { shareImgInfo } = Store.globalStore.data;
    const { goodsShare={} } = shareImgInfo;
    if(!goodsShare.sceneMap) {
      goodsShare.sceneMap = sceneMap;
      getInfo.saveImgInfo('goodsShare', goodsShare)
    }
    const wxcode = encodeURI(`${Model.common.getGoodsDetailQrCode()}?useShortCode=true&wechatSourceEnum=KXP_C&page=pages/goodsdetail/goodsdetail&sceneMap=${sceneMap}`);
    if(!goodsShare.qrImg) {
      Taro.getImageInfo({
        src: getFileUrl(wxcode, {query: 'x-oss-process=image/quality,q_50/format,jpg/interlace,1' })
      }).then((res) => {
        if(res.width < 0) {
          return
        }
        goodsShare.qrImg = res.path;
        getInfo.saveImgInfo('goodsShare', goodsShare)
      }).catch(() => {
      })
    }
  },
  clearGoodsShare() {
    getInfo.saveImgInfo('goodsShare', {})
  },
  /** 商品详情end */
}

export default getInfo;