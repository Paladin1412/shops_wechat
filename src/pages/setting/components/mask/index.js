import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import styles from './index.module.styl';


class Mask extends Taro.Component {
  constructor(props) {
    super(props);

    this.config = {
      navigationBarTitleText: '',
    }

    this.state = {
      // 界面/组件 初始数据
      telNo: '0571-88670307'
    };
  }

  close = () => {
    const { close } = this.props;
    close()
  }

  tel = () => {
    const { telNo } = this.state;
    Taro.makePhoneCall({
      phoneNumber: telNo
    });
  }

  render() {
    const { telNo } = this.state;

    return (
      <View className={styles.mask_box}>
        <View className={styles.content}>
          <View className={styles.title}> 投诉建议 </View>
          <View className={`${styles.contact} last`} onClick={this.tel}>平台联系电话：{telNo}</View>
          <View className={styles.close} onClick={this.close}>关闭</View>
        </View>
      </View>
    )
  }
}


export default Mask
