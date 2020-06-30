/**
 * @Author: chunxiao.zhang
 * @Email: chunxiao.zhang@jdxiaokang.com
 * @Update: 2020-02-18 21:23:18
 * @Description: 收藏夹
 */
import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import withPage from '@/components/with-page';
import Model from '@/model';
import Assets from '@/components/assets';
import styles from './collect.module.styl';
import Utils from '@/utils';
import ListView from 'taro-listview';
import Store from '@/store';
import Empty from '@/components/empty'
import Entry from '@/components/entry';

@withPage
class Collect extends Taro.Component {
  constructor(props) {
    super(props);

    this.config = {
      navigationBarTitleText: '我的收藏',
      enablePullDownRefresh: false
    }

    this.state = {
      // 界面/组件 初始数据
      list: [],
      isLoaded: true,
      hasMore: false,
      isEmpty: false,
      level: '1'
    };
  }

  getLevel = () => {
    const companyId = this.getCompanyId();
    if (companyId) {
      Model.order.getShopMemberLevelInfo({ companyId }).then(data => {
        if (data){
          this.setState({
            level: data.memberLevel
          })
        }
      })
    }
  }


  // 清除
  clearProduct = (v, index) => {
    const { list } = this.state
    const { id, itemId, agentCompanyId } = v
    Model.goods.collect({
      agentItemId: id,
      itemId,
      agentCompanyId,
      collect: 0
    }).then(data => {
      if (data) {
        list.splice(index, 1)
        this.setState({
          list,
          isEmpty: list.length == 0
        })
      }
    })
  }

  // 抢购
  goProduct = (v) => {
    const companyId = this.getCompanyId();

    Taro.navigateTo({
      url: `/pages/goodsdetail/goodsdetail?agentItemId=${v.agentItemId}&itemId=${v.itemId}&companyId=${companyId}`
    })
  }

  getData = ({ pageNo = 1, pageSize = 15, callback }) => {
    const { list } = this.state;
    const companyId = this.getCompanyId();
    Model.goods.collectList({
      pageNo, pageSize, agentCompanyId: companyId
    }).then((resModel) => {

      const data = this.filterList(resModel);

      if (!data) {
        this.setState({
          isEmpty: true,
        })
        return false;
      }
      const l = list.concat(data)
      this.setState({
        isLoaded: true,
        isShow: true,
        list: l,
        pageNum: pageNo,
        isEmpty: l.length <= 0
      })
      if (data.length < pageSize) {
        this.setState({
          hasMore: false
        })
      } else {
        this.setState({
          hasMore: true,
        })
      }

      if (callback) {
        callback()
      }

    })
  }

  onScrollToLower = (fn) => {
    this.state.pageNum += 1;
    const pageNum = this.state.pageNum;

    this.getData({ pageNo: pageNum, callback: fn })
  }

  onPullDownRefresh = (fn) => {
    this.setState({
      list: []
    }, () => this.getData({ callback: fn }))
  }

  componentDidShow() {
    const { globalStore } = this.props;
    const { userInfo } = globalStore.data;
    this.setState({
      list: [],
    }, () => {
      if (userInfo.token) {
        this.getData({})
      }
    }
    )
    if (userInfo.token) {
      this.getLevel()
    }
  }

  componentDidHide() {
    if (this.state.isEmpty) {
      this.setState({
        isEmpty: false
      })
    }
  }

  /**
   * 按一定条件展示列表数据
   */
  filterList = (datas) => {
    return datas.filter(item => item.status === 'ON_SALES')
    // 下架商品
    .concat(
      datas.filter(item => item.status === 'DOWN_SALES' || item.status === 'INVALID')
    );
  }

  render() {
    const { isLoaded, hasMore, isEmpty, list, level } = this.state;
    const { globalStore } = this.props;
    const { systemInfo: { screenHeight, windowHeight }, userInfo } = globalStore.data;

    return (
      <View>
        {
        userInfo.token ? <ListView
          ref={node => this.scrollV = node}
          isLoaded={isLoaded}
          hasMore={hasMore}
          isEmpty={isEmpty}
          onScrollToLower={this.onScrollToLower}
          onPullDownRefresh={this.onPullDownRefresh}
          style={{ height: `${windowHeight}px` }}
          launch={{
            launchEmpty: true
          }}
          renderEmpty={<View className={styles.empty_box}>
            <Empty
              msg="您还未收藏过商品"
              type={2}
            />
          </View>}
        >
          <View style={{ minHeight: `${screenHeight}px` }}>
            {
              (list || []).map((v, index) => {
                return (
                  <View>
                    {
                      v && v.status == 'ON_SALES' && (
                        <View className={`${styles.list} ${styles.black}`} onClick={() => this.goProduct(v)}>
                          <View className={styles.store_desc}>
                            <View className={`iconfont icondingdan-dianpuicon ${styles.store_icon}`}></View>
                            <View>{v.agentShopName}</View>
                            <View className={`iconfont icongengduo ${styles.arrow_icon}`}></View>
                          </View>
                          <View className={styles.product_desc}>
                            <View className={styles.product_img} style={{ backgroundImage: `url(${Utils.appUtils.getFileUrl(v.mainImgUrl)})` }}></View>
                            <View className={styles.product_info}>
                              <View className={styles.product_title}>{v.itemTitle}</View>
                              <View className={styles.product_price_box}>
                                <View className={styles.product_price}>¥ {v.minTradePrice}</View>
                                {level >= 2 && v.maxShareFee > 0 && <View className={styles.product_profit}>预计收益 ¥ {v.maxShareFee}</View>}
                              </View>
                              <View className={styles.product_buy} >
                                抢购
                          <Text className={`iconfont icongengduo`}></Text>
                              </View>
                            </View>
                          </View>
                        </View>
                      )
                    }
                    { // 下架商品
                      v && (v.status == 'DOWN_SALES' || v.status == 'INVALID') && <View className={`${styles.list} ${styles.gray}`}>
                        <View className={styles.store_desc}>
                          <View className={`iconfont icondingdan-dianpuicon ${styles.store_icon}`}></View>
                          <View>{v.agentShopName}</View>
                          <View className={`iconfont icongengduo ${styles.arrow_icon}`}></View>
                        </View>
                        <View className={styles.product_desc}>
                          <View className={styles.product_img} style={{ backgroundImage: `url(${Utils.appUtils.getFileUrl(v.mainImgUrl)})` }}>
                            <View className={styles.mask} style={{ backgroundImage: `url(${Assets.goods.down})` }}></View>
                          </View>
                          <View className={styles.product_info}>
                            <View className={styles.product_title}>{v.itemTitle}</View>
                            <View className={styles.product_price_box}>
                              <View className={styles.product_price}>¥ {v.minTradePrice}</View>
                              {level >= 2 && v.maxShareFee > 0 && <View className={styles.product_profit_gray}>预计收益 ¥ {v.maxShareFee}</View>}
                            </View>
                            <View className={styles.product_clear} onClick={() => this.clearProduct(v, index)}>清除</View>
                          </View>
                        </View>
                      </View>
                    }
                  </View>
                )
              })
            }
          </View>
        </ListView>
          : <View className={styles.nologinContainer}>
            <View className={styles.nologinInner}>
              <Entry />
            </View>
          </View>
        }
      </View>
    );
  }

}

export default Collect;
