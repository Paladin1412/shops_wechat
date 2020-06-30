/**
 * @Author: chunxiao.zhang
 * @Email: chunxiao.zhang@jdxiaokang.com
 * @Update: 2020-02-25 15:53:05
 * @Description: 联系店主
 */
import Taro from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import withPage from '@/components/with-page';
import Model from '@/model';
import Utils from '@/utils';
import styles from './contactus.module.styl';
import Empty from '@/components/empty';
import Entry from '@/components/entry';


@withPage
class Contactus extends Taro.Component {
  constructor(props) {
    super(props);

    this.config = {
      navigationBarTitleText: '店主的微信',
    }

    this.state = {
      // 店铺详细信息
      detail: {},
      companyId: null,
    };
  }
  toAllScreen = () => {
    const { detail } = this.state;
    const urls = [Utils.appUtils.getFileUrl(detail.weixnQrCode)]
    Taro.previewImage({
      current: urls[0],
      urls
    })
  }

  componentDidMount() {
  }

  /**
   * 查店铺详情
   */
  getDetail = () => {
    const { globalStore } = this.props;
    const { userInfo } = globalStore.data;
    if (!userInfo.token) {
      return;
    }
    const companyId = this.getCompanyId();
    if(companyId === this.state.companyId && !!this.state.detail.weixnQrCode) {
      return;
    }
    Model.my.getStoreDetail({ companyId }).then(resModel => {
      if (resModel) {
        this.setState({ 
          detail: resModel,
          companyId
        });
      }
    });
  }

  componentWillUnmount() { }

  componentDidShow() { 
    this.getDetail();
  }

  componentDidHide() { }

  render() {
    const { detail } = this.state;
    const { globalStore } = this.props;
    const { userInfo } = globalStore.data;

    return (
      <View className={styles.container}>
        {
          userInfo.token
            ? <View className={styles.box}>
              <View className={styles.info} onClick={this.toAllScreen}>
                {
                  detail.weixnQrCode ?
                    <Image src={Utils.appUtils.getFileUrl(detail.weixnQrCode)} className={styles.qr_img} mode="widthFix" />
                    :
                    <Empty />
                }
              </View>
            </View>
            : <View className={styles.nologin}>
              <Entry />
            </View>
        }
      </View >
    );
  }

}

export default Contactus;
