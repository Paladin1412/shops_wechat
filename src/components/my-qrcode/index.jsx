/**
 * @Author: cai.ping
 * @Email: cai.ping@jdxiaokang.com
 * @Update: 2020-02-27 10:24:17
 * @Description: true
 */
import Taro from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { message } from '@jxkang/wechat-utils';
import Share from '@/components/share-tool'
import Config from '@/config';
import Utils, { imgshare } from '@/utils';
import Model from '@/model';
import Assets from '@/components/assets';
import styles from './my-qrcode.module.styl';


const { appUtils } = Utils;
const getFileUrl = appUtils.getFileUrl;

class MyQrcode extends Taro.Component {
  constructor(props) {
    super(props);

    this.config = {
      navigationBarTitleText: '我的推荐码',
    }

    this.state = {
      // 界面/组件 初始数据
      code: '--',
      icon: '',//二维码中间的图片
      companyId: '',
      wxcode: '',
    };
  }
  componentWillMount() { 
    imgshare.initInviteShare()
  }
  componentWillUnmount() { }

  // eslint-disable-next-line react/sort-comp
  componentWillReact() { }

  componentDidMount() {
    this.companyCode()
  }

  copys = () => {
    const { code } = this.state
    Taro.setClipboardData({
      data: code,
      success() {
        message.success('复制成功');
      }
    })
  }
  companyCode = () => {
    Model.inviter.userCode().then(res => {
      if (res) {
        this.setState({
          code: res.invitationCode,
          icon: res.icon,
          companyId: res.companyId
        })
        this.getQrCode(res.invitationCode, res.companyId)
      }
    })
  }
  getQrCode = (code, companyId) => {
    const sceneMap = {
      cId: companyId,
      M: code
    };
    const wxcode = encodeURI(`${Model.common.getGoodsDetailQrCode()}?useShortCode=true&wechatSourceEnum=KXP_C&page=pages/index/index&sceneMap=${JSON.stringify(sceneMap)}`);
    this.setState({wxcode})
    imgshare.getShopQrImg({sceneMap, companyId})
  }

  goList = () => {
    Taro.navigateTo({
      url: `/pages/yq-list/yq-list`
    })
  }

  componentWillUnmount() {

  }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const { code, companyId, icon, wxcode } = this.state;

    return (
      <View className={styles.content}>
        <View className={styles.code_box}>
          <View className={styles.black_bar}></View>
          <View className={styles.code_content}>
            <View className={styles.title}>推荐码</View>
            <View className={styles.font}>{code}</View>
            <View className={styles.copy} onClick={this.copys}>复制</View>
            <View className={styles.code_imgbox}>
              <View className={styles.qrcode_box}>
                <Image className={styles.sharQRImg} src={wxcode} />
              </View>
              <View className={styles.desc}>您的专属二维码，可让您的朋友直接扫码注册</View>
            </View>
          </View>
          <Share
            params={{
              code,
              link: `${Config.webHost}/#/pages/login/login?mark=${code}&companyId=${companyId}`,
              icon: icon ? `${Config.crossFile}?uri=${getFileUrl(icon)}` : getFileUrl(Assets.common.default_avatar),
              type: 'qrcode',
              showShareImg: true
            }}
          />
          <View className={styles.yq_list_button} onClick={this.goList}>我的邀请记录</View>
        </View>
      </View>
    );
  }

}

export default MyQrcode;
