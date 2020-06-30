/**
 * @Author: chunxiao.zhang
 * @Email: chunxiao.zhang@jdxiaokang.com
 * @Update: 2020-02-25 19:22:00
 * @Description: 邀请记录
 */
import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import withPage from '@/components/with-page';
import Model from '@/model';
import Utils from '@/utils';
import styles from './inviterecord.module.styl';



@withPage
class Inviterecord extends Taro.Component {
  constructor(props) {
    super(props);

    this.config = {
      navigationBarTitleText: '邀请记录',
    }

    this.state = {
      // 用户邀请记录
      dataList: null
    };
  }

  getList = () => {
    Model.inviter.getRecordList().then(resModel => {
      if(resModel){
        this.setState({dataList: resModel.records})
      }
    })
  }
  componentWillReact() { }

  componentDidMount() {
    this.getList()
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const { dataList } = this.state;

    return (
      <View className={styles.container}>
        {
          Array.isArray(dataList) ? dataList.length ? dataList.map((item) => {
            return (
              <View className={`${styles.list} last`}>
                <View className={styles.head_img}>
                  <Image src={item.icon} />
                </View>
                <View>
                  <View>
                    {item.inviteeName}
                    <Text className={styles.year}>{item.phone}</Text>
                  </View>
                  <View className={styles.date}>
                    {item.invitationTime}
                  </View>
                </View>
              </View>
            )
          }) : <View>暂无数据</View> : null
        }
      </View >
    );
  }

}

export default Inviterecord;
