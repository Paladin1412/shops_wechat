/**
 * @Author: chunxiao.zhang
 * @Email: chunxiao.zhang@jdxiaokang.com
 * @Update: 2020-02-28 14:19:17
 * @Description: 账户信息详情
 */
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtTabs, AtTabsPane } from 'taro-ui';
import ListView from 'taro-listview';
import withPage from '@/components/with-page';
import Empty from '@/components/empty';
import Model from '@/model';
import Utils from '@/utils';
import styles from './accountinfo.module.styl';


@withPage
class Accountinfo extends Taro.Component {
  constructor(props) {
    super(props);

    this.config = {
      navigationBarTitleText: '康小铺',
      enablePullDownRefresh: false
    }

    this.state = {
      // 界面/组件 初始数据
      current: +this.$router.params.current || 0,
      add: 0, //累计收入
      withdraw: 0, //提现
      showInfo: {},
      settleStatus: 5, //结算状态：1-待结算 5-已结算
      dataList: [], //列表数据,
      isLoaded: false,
      error: false,
      hasMore: true,
      isEmpty: false,
      screenHeight: '',
      pageNum: 1,
    };
  }
  formateTime = () => {
    let date = new Date()

    let year = date.getFullYear();
    let month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    return {
      startTime: `${year}-${month}-${day} 00:00:00`,
      endTime: `${year}-${month}-${day} 23:59:59`,
    }
  }
  handleClick(value) {
    this.setState({
      current: value,
      add: 0,
      dataList: []
    }, () => {
      if (value == 2) {
        let params = this.formateTime()
        this.getIncomeList({ ...params, settleStatus: '' })
      }
      if (value == 1) {
        this.getWithdrawList({})
      }

      if (value == 0) {
        this.getIncomeList({ settleStatus: 5 })
      }
    })
  }
  changeAdd = (index, type) => {
    this.setState({
      add: index,
      settleStatus: type
    })
    this.getIncomeList({ settleStatus: type })
  }
  // 资金展示
  fundShow = () => {
    Model.fund.show().then(data => {
      if (!data) return false
      this.setState({
        showInfo: data,
      })
    })
  }

  // 收益明细
  getIncomeList = ({ settleStatus = this.state.settleStatus, pageNum = 1, pageSize = 20, callback, startTime, endTime }) => {
    let parmas = {}
    if (settleStatus) {
      parmas.settleStatus = settleStatus
    }
    if (startTime) {
      parmas.startTime = startTime
    }
    if (endTime) {
      parmas.endTime = endTime
    }
    parmas.pageNum = pageNum;
    parmas.pageSize = pageSize;
    Model.fund.incomeList(parmas).then(data => {
      if (!data) return false
      const { dataList } = this.state
      let l;
      if (pageNum == 1) {
        l = [].concat(data.records)
      } else {
        l = dataList.concat(data.records)
      }
      this.setState({
        isLoaded: true,
        isShow: true,
        dataList: l,
        hasMore: data.hasNextPage,
        pageNum: data.pageNum,
        isEmpty: l.length <= 0
      })
      if (callback) {
        callback()
      }

    })
  }

  // 提现记录
  getWithdrawList = ({ pageNum = 1, pageSize = 20, callback }) => {

    Model.fund.withdrawList({
      pageNum,
      pageSize
    }).then(data => {
      if (!data) return;
      const { dataList } = this.state
      if (data && data.records.length == 0) return false

      const l = dataList.concat(data.records)
      this.setState({
        isLoaded: true,
        isShow: true,
        dataList: l,
        hasMore: data.hasNextPage,
        pageNum: data.pageNum,
        isEmpty: l.length <= 0
      })
      if (callback) {
        callback()
      }
    })
  }

  add0 = v => {
    return v < 10 ? `0${v}` : v
  }
  // 根据时间戳拿到时间
  getTime = (v, formate) => {
    const time = new Date(v)
    const year = time.getFullYear(),
      month = this.add0(time.getMonth() + 1),
      day = this.add0(time.getDate()),
      hours = this.add0(time.getHours()),
      minutes = this.add0(time.getMinutes()),
      second = this.add0(time.getSeconds());
    if (formate == '-') {
      return `${year}-${month}-${day} ${hours}:${minutes}:${second}`;
    } else if (formate == '/') {
      return `${year}/${month}/${day} ${hours}:${minutes}:${second}`;
    }
    return `${year}-${month}-${day} ${hours}:${minutes}:${second}`;
  }
  goCash = () => {
    Taro.redirectTo({
      url: '/pages/cashout/cashout'
    })
  }

  componentWillReact() { }

  componentDidMount() {
    const { globalStore } = this.props;
    const { systemInfo: { screenWidth, screenHeight } } = globalStore.data;
    const { settleStatus, current } = this.state
    const that = this;
    this.fundShow()
    if (current == 0) {
      that.getIncomeList({ settleStatus })
    } else if (current == 2) {
      let params = that.formateTime()
      that.getIncomeList({ ...params, settleStatus: '' })
    } else if (current == 1) {
      this.getWithdrawList({})
    }

  }
  onScrollToLower = (fn) => {
    let { current } = this.state;

    this.state.pageNum += 1;
    const pageNum = this.state.pageNum;

    if (current == 2) {
      let params = this.formateTime()
      this.getIncomeList({ pageNum, time: params, callback: fn })
    } else {
      this.getIncomeList({ pageNum, callback: fn })
    }

  };
  onPullDownRefresh = (fn) => {
    const { current } = this.state
    this.setState({
      dataList: []
    }, () => {
      if (current === 0) {
        this.getIncomeList({ callback: fn })
      } else if (current === 2) {
        let params = this.formateTime()
        this.getIncomeList({ ...params, settleStatus: '', callback: fn })
      } else if (current === 1) {
        this.getWithdrawList({ callback: fn })
      }
    })
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }


  render() {
    const {
      add,
      showInfo,
      dataList,
      isLoaded,
      hasMore,
      isEmpty,
      current,
    } = this.state;
    const tabList = [{ title: '累计收入' }, { title: '可提现' }, { title: '今日推广' }]
    return (
      <View className={styles.container}>
        {/**
        * tab
        */}
        <View className={styles.back}></View>
        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)} className={styles.tab_box}>
          <AtTabsPane current={this.state.current} index={0}>
            <View className={styles.income}>
              <View className={styles.income_name}>累计收入</View>
              <View>¥ {showInfo.totalIncome}</View>
            </View>
            <View className={styles.type_box}>
              <View className={` ${add == 0 ? styles.active : ''} ${styles.type}`} onClick={() => this.changeAdd(0, 5)}>
                <View className={styles.type_name}>已结算</View>
                <View className={styles.type_price}>¥ {showInfo.totalIncome}</View>
                {add == 0 && <View className={`iconfont iconsanjiaoxing ${styles.icon}`}></View>}
              </View>
              <View className={` ${add == 1 ? styles.active : ''} ${styles.type}`} onClick={() => this.changeAdd(1, 1)}>
                <View className={styles.type_name}>待结算</View>
                <View className={styles.type_price}>¥ {showInfo.pendingSettle}</View>
                {add == 1 && <View className={`iconfont iconsanjiaoxing ${styles.icon}`}></View>}
              </View>
            </View>

          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View className={styles.income}>
              <View className={styles.income_name}>可提现金额</View>
              <View>¥ {showInfo.balanceAccount}</View>
              <View className={styles.go_btn} onClick={this.goCash}>提现</View>
            </View>
            {/* <View className={styles.grid_empty}>
              <Empty
                msg="暂无可提现金额"
                type={7}
              />
            </View> */}
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
            <View className={styles.income}>
              <View className={styles.income_name}>今日预计收益</View>
              <View>¥ {showInfo.todayIncome}</View>
            </View>




          </AtTabsPane>
        </AtTabs>

        <ListView
          ref={node => this.scrollV = node}
          isLoaded={isLoaded}
          hasMore={hasMore}
          isEmpty={isEmpty}
          onScrollToLower={this.onScrollToLower}
          onPullDownRefresh={this.onPullDownRefresh}
          className={`${styles.scroll_content} ${current === 0 && styles.lj_scroll} ${current === 1 && styles.tx_1_scroll}  ${current === 2 && styles.js_scroll}`}
          launch={{
            launchEmpty: true
          }}
          renderEmpty={<View className={styles.grid_empty}>
            <Empty
              msg={`${current === 0 ? '暂无累计收益' : ''}  ${current === 1 ? '暂无可提现金额' : ''} ${current === 2 ? '暂无今日收益' : ''}`}
              type={7}
            />
          </View>}
        >
          {current === 0 &&
            dataList.map(v => {
              return (
                <View className={styles.list_box}>
                  <View className={`${styles.list} last`}>
                    <View>
                      <View>订单号：{v.relationOrderId}</View>
                      <View className={styles.list_name}>{v.costTypeDesc}</View>
                      <View>时间：{this.getTime(v.createTime)}</View>
                    </View>
                    <View className={styles.list_price}>¥ {v.amount}</View>
                  </View>
                </View>
              )
            })
          }
          {current === 2 &&
            dataList.map(v => {
              return (
                <View className={styles.list_box}>
                  <View className={`${styles.list} last`}>
                    <View>
                      <View>订单号：{v.relationOrderId}</View>
                      <View className={styles.list_name}>{v.costTypeDesc}</View>
                      <View>时间：{this.getTime(v.createTime)}</View>
                    </View>
                    <View className={styles.list_price}>¥ {v.amount}</View>
                  </View>
                </View>
              )
            })
          }
          {current === 1 &&
            dataList.map(v => {
              return (
                <View className={styles.list_box}>
                  <View className={`${styles.list} last`}>
                    <View className={styles.left}>
                      <View>{v.costTypeDesc}</View>
                      <View className={styles.list_name}>
                        <Text className={styles.red}>¥ {v.amount}</Text>
                        <Text>  (含{v.serviceFeeAmount}元手续费)</Text>
                      </View>
                      {v.tradeStatus === 3 && <View className={styles.mes}>失败原因：{v.tradeMessage}</View>}
                      <View>时间：{this.getTime(v.createTime)}</View>
                    </View>
                    <View className={`${styles.list_price} ${v.tradeStatus === 2 && styles.green} ${v.tradeStatus === 1 && styles.yellow}`}>{v.tradeStatusDesc}</View>
                  </View>
                </View>
              )
            })

          }
        </ListView>



      </View >
    );
  }

}

export default Accountinfo;
