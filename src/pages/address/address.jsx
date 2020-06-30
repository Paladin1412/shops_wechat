/**
 * @Author: cai.ping
 * @Email: cai.ping@jdxiaokang.com
 * @Update: 2020-02-24 15:57:31
 * @Description: 地址管理
 */
import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import withPage from '@/components/with-page';
import Model from '@/model';
import Assets from '@/components/assets';
import Empty from '@/components/empty';
import styles from './address.module.styl';


@withPage
class Address extends Taro.Component {
  constructor(props) {
    super(props);

    this.config = {
      navigationBarTitleText: '地址管理',
    }

    this.state = {
      // 界面/组件 初始数据
      listObj: []
    };
  }

  goEdit = (id, e) => {
    e.stopPropagation()
    const { backUrl = '' } = this.$router.params
    if (id === 'add') {
      Taro.navigateTo({
        url: `/pages/edit-address/edit-address?backUrl=${backUrl}`
      })
    } else {
      Taro.navigateTo({
        url: `/pages/edit-address/edit-address?backUrl=${backUrl}&id=${id}`
      })
    }

  }

  getList = () => {
    Model.address.getList().then(data => {

      if (data && data.totalRecordSize > 0) {
        const { backUrl = '' } = this.$router.params
        let arr = []
        if (backUrl) {
          const info = Taro.getStorageSync('infoForOrder')
          const noArea = info.noArea || []
          arr = this.getnoAreaCode(noArea)
        }
        data.records.map(item => {
          if (arr.indexOf(`${item.areaId}`) !== -1 || arr.indexOf(`${item.provinceId}`) !== -1 || arr.indexOf(`${item.cityId}`) !== -1) {
            item.disable = true
          }
        })
        this.setState({
          listObj: data.records
        })
      }

    })
  }

  checkItem = (item) => {
    const { globalStore } = this.props;
    const { backUrl = '' } = this.$router.params
    // item.address = item.address || item.house || '服务器没给你地址，找后端-选地址'
    if (backUrl && backUrl !== '') {
      globalStore.setData('checkAddress', Object.assign({}, item), 'address.jsx,line:62')
      Taro.reLaunch({
        url: backUrl
      })
    }
  }
  getnoAreaCode = (arr) => {
    let list = []
    arr.map(item => {
      if (item.childs && item.childs.length > 0) {
        list = [...list, ...this.getnoAreaCode(item.childs)]
      } else {
        list.push(item.areaCode)
      }
    })
    return Array.from(new Set(list))
  }

  componentWillReact() { }

  componentDidMount() {

  }

  componentWillUnmount() { }

  componentDidShow() {
    this.getList()
  }

  componentDidHide() { }

  render() {
    const { listObj } = this.state;

    return (
      <View className={styles.content}>
        <View className={styles.back}></View>
        {
          listObj && listObj.length > 0 && listObj.map(item =>
            <View className={`${styles.item} ${item.disable === true && styles.disable}`}>
              <View className={styles.left} onClick={() => { !item.disable && this.checkItem(item) }}>
                <View className={styles.name_box}>
                  <Text className={styles.name}>{`${item.receiver}`.substr(0, 10)}{item.receiver.length > 10 ? '...' : null}</Text>
                  <Text className={styles.tel}>{item.phone}</Text>
                  {item.isDefault && <Text className={styles.tag}>默认</Text>}
                </View>
                <Text className={styles.gray}>{item.address}</Text>
              </View>
              <View className={`iconfont icondizhibianji`} onClick={(e) => this.goEdit(item.id, e)}></View>
            </View>
          )
        }
        {
          listObj && listObj.length > 0 && < View className={styles.button_box}>
            <View className={styles.button} onClick={(e) => this.goEdit('add', e)}>新增收货地址</View>
          </View>
        }
        {listObj && listObj.length == 0 && <View>
          <Empty
            msg="您还未设置过收货地址呢～"
            type={3}
          />
          <View className={styles.add_btn} onClick={(e) => this.goEdit('add', e)}>新增地址</View>
        </View>}

      </View >
    );
  }

}

export default Address;
