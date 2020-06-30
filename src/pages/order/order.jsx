/**
 * @Author: 福虎
 * @Email: Shenghu.tan@jdxiaokang.com
 * @Update: 2020-02-25 11:32:02
 * @Description: 订单列表
 */
import Taro from '@tarojs/taro';
import { View, Button, Image } from '@tarojs/components';
import {AtTabs, AtTabsPane} from 'taro-ui';
import withPage from '@/components/with-page';
import Model from '@/model';
import Utils from '@/utils';
import styles from './order.module.styl';



@withPage
class Order extends Taro.Component {
  constructor(props) {
    super(props);

    this.config = {
      navigationBarTitleText: '我的订单',
    }

    this.state = {
      tabCurrent: 0
    };

    this.tabList = [{ title: '全部' }, { title: '待付款' }, { title: '待发货' }, { title: '待收货' }, { title: '完成' }]
  }

  componentWillReact() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  onChangeTabs = (index) => {
    this.setState({tabCurrent: index});
  }

  render() {
    const { tabCurrent } = this.state;

    return (
      <View>
        <AtTabs
          current={tabCurrent}
          tabList={this.tabList}
          onClick={this.onChangeTabs}
          >
          <AtTabsPane current={tabCurrent} index={0} >
            <View className={styles.order_item_box}>
              <View className={styles.list_title}>
                <View>
                  <View className="iconfont icongoumai-dianpuicon" />
                  江河的杂货铺
                </View>
                <View>待付款</View>
              </View>
              <View>
                <Image src="" alt="商品图片" />
                <View>
                  商品标题
                </View>
                <View>¥298</View>
              </View>
              <View className={styles.list_footer}>
                <Button>去付款</Button>
              </View>
            </View>
          </AtTabsPane>
          <AtTabsPane current={tabCurrent} index={1}>
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页二的内容</View>
          </AtTabsPane>
          <AtTabsPane current={tabCurrent} index={2}>
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页三的内容</View>
          </AtTabsPane>
        </AtTabs>
      </View >
    );
  }

}

export default Order;
