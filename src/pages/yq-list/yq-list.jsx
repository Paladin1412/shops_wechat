// 邀请列表
import Taro from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';
import ListView, { LazyBlock } from 'taro-listview';
import { Common } from '@jxkang/wechat-utils';
import withPage from '@/components/with-page';
import Model from '@/model';
import Assets from '@/components/assets';
import Empty from '@/components/empty';
import styles from './yq-list.module.styl';
import Utils from '@/utils'

const { getFileUrl } = Utils.appUtils;

@withPage
class Success extends Taro.Component {
  constructor(props) {
    super(props);

    this.config = {
      navigationBarTitleText: '邀请记录',
      enablePullDownRefresh: false
    }

    this.state = {
      // 界面/组件 初始数据
      list: [],
      screenHeight: '',
      isLoaded: false,
      error: false,
      hasMore: true,
      isEmpty: false,
      pageNum: 1
    };
  }

  getData = ({ pageNum = 1, pageSize = 15, callback }) => {
    Model.inviter.getRecordList({
      pageNum,
      pageSize
    }).then(res => {
      if (res) {
        const { list } = this.state
        const l = list.concat(res.records)
        this.setState({
          isLoaded: true,
          isShow: true,
          list: l,
          hasMore: res.hasNextPage,
          pageNum: res.pageNum,
          isEmpty: l.length <= 0
        })
        if (callback) {
          callback()
        }
      }

    })
  }

  onScrollToLower = (fn) => {
    this.state.pageNum += 1;
    const pageNum = this.state.pageNum;
    this.getData({ pageNum: pageNum, callback: fn })
  };

  onPullDownRefresh = (fn) => {
    this.setState({
      list: []
    }, () => this.getData({ callback: fn }))
  }

  onInvite = () => {
    Model.inviter.userCode().then(res => {
      if (res) {
        Taro.navigateTo({
          url: `/pages/my-qrcode/my-qrcode?mark=${res.invitationCode}`
        })
      }
    })
  }

  componentWillReact() { }

  componentDidMount() {
    const { globalStore } = this.props;
    const { systemInfo: { screenHeight } } = globalStore.data;

    this.setState({
      screenHeight,
    })
    this.getData({})
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const {
      isLoaded, hasMore, isEmpty, list,
      screenHeight,
    } = this.state;

    return (
      <View className={styles.list_out}>
        <ListView
          // lazy
          ref={node => this.scrollV = node}
          isLoaded={isLoaded}
          hasMore={hasMore}
          isEmpty={isEmpty}
          onScrollToLower={this.onScrollToLower}
          onPullDownRefresh={this.onPullDownRefresh}
          className={styles.scroll_content}
          style={{ height: `${screenHeight}px` }}
          launch={{
            launchEmpty: true
          }}
          renderEmpty={<View style={{ height: `${screenHeight}px` }} className={styles.empty_box}>
            <Empty
              msg="您还未邀请过用户，快去邀请好友吧～"
              type={5}
            />
            <View onClick={this.onInvite} className={styles.inviteBtn}>邀请好友</View>
          </View>}
        >
          <View style={{ 'min-height': `${screenHeight}px` }}>
            <View className={styles.container}>
              {
                list.map(item =>
                  <View className={`${styles.item} last`}>
                    <Image className={styles.img} src={getFileUrl(item.icon) || Assets.register.logo} ></Image>
                    <View className={styles.right}>
                      <View className={styles.rightTop}>
                        <View className={styles.name}>{item.inviteeName}</View>
                        <View className={styles.name}>{item.phone.substr(0, 3)}****{item.phone.substr(7, 10)}</View>
                      </View>
                      <View className={styles.bottom}>
                        <Text>{Common.dateFormat(item.invitationTime, 'yyyy-mm-dd hh:ii:ss')}</Text>
                      </View>
                    </View>
                  </View>
                )
              }
            </View>
          </View>
        </ListView>
      </View>
    );
  }

}

export default Success;
