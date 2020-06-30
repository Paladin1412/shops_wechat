/**
 * @Author: cai.ping
 * @Email: cai.ping@jdxiaokang.com
 * @Update: 2020-02-27 10:24:17
 * @Description: true
 */
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import withPage from '@/components/with-page';
import Model from '@/model';
import Config from '@/config';
import Assets from '@/components/assets';
import styles from './my-qrcode.module.styl';
import Utils from '@/utils';
import QrCode from '@/components/my-qrcode';
const { appUtils } = Utils;
const getFileUrl = appUtils.getFileUrl;

@withPage
class MyQrcode extends Taro.Component {
  constructor(props) {
    super(props);

    this.config = {
      navigationBarTitleText: '我的推荐码',
    }

    this.state = {
      mark: '',
      icon: '',
      companyId: '',
      companyMes: {}
    };
  }
  componentDidMount() {
    Taro.showShareMenu({
      withShareTicket: true
    })
    Taro.updateShareMenu({
      withShareTicket: true
    })
    this.userCode()
    this.baseInfo()
  }
  baseInfo = () => {
    const companyId = this.getCompanyId();
    Model.goods.shopBaseInfo({ companyId }).then(res => {
      if (res) {
        this.setState({
          companyMes: res,
        })
      }
    })
  }

  userCode = () => {
    Model.inviter.userCode().then(res => {
      if (res) {
        this.setState({
          mark: res.invitationCode,
          icon: res.icon,
          companyId: res.companyId
        })
      }
    })
  }

  onShareAppMessage = (options) => {
    this.logger({ logs: 'C端分享'})
    const { icon, mark, companyId, companyMes } = this.state
    // 设置菜单中的转发按钮触发转发事件时的转发内容
    var shareObj = {
      title: companyMes.shopName || '这个店不错',        // 默认是小程序的名称(可以写slogan等)
      path: `/pages/index/index?companyId=${companyId}&mark=${mark}`,
      imageUrl: companyMes.logo ? `${Config.crossFile}?uri=${getFileUrl(companyMes.logo)}` : Assets.common.share_logo,
      // Assets.register.logo
      success: function (res) {
        // 转发成功之后的回调
        if (res.errMsg == 'shareAppMessage:ok') {

        }
      },
      fail: function (res) {
        // 转发失败之后的回调
        if (res.errMsg == 'shareAppMessage:fail cancel') {
          // 用户取消转发
        } else if (res.errMsg == 'shareAppMessage:fail') {
          // 转发失败，其中 detail message 为详细失败信息
        }
      },
      complete: function () {
        // 转发结束之后的回调（转发成不成功都会执行）
      }
    };
    // 来自页面内的按钮的转发
    // if (options.from == 'button') {
    //   // 此处可以修改 shareObj 中的内容
    //   shareObj.path = link;
    // }
    return shareObj;
  }

  render() {

    return (
      <View>
        <QrCode />
      </View>
    );
  }

}

export default MyQrcode;
