/**
 * @Author: limin.zhang
 * @Email: limin.zhang@jdxiaokang.com
 * @Update: 2020-04-10 12:30:50
 * @Description: 公共页
 */
import Taro from '@tarojs/taro';
import { View, Button, Image } from '@tarojs/components';
import withPage from '@/components/with-page';
import Ellipsis from '@/components/ellipsis';
import { $ajax, Common, message } from '@jxkang/wechat-utils';
import Model, { getFetchHeader } from '@/model';
import Utils from '@/utils';
import Assets from '@/components/assets';
import styles from './home.module.styl';

const { getFileUrl, navigateToLogin } = Utils.appUtils;


@withPage
class Home extends Taro.Component {
  constructor(props) {
    super(props);

    this.config = {
      navigationBarTitleText: '康小铺',
    }

    this.state = {
      // 界面/组件 初始数据
      companyList: [],
      exitPopup: false,
      isRequest: false,
      isTokenValid: false,
    };
    // 声明 wechatLogin 事件是能连续点击
    Utils.appUtils.delay(this, ['gotoLogin', 'onExit', 'enterShop']);
  }

  enterShop = (shop) => {
    const { isTokenValid } = this.state;

    const { globalStore } = this.props;
    const userInfo = globalStore.data.userInfo;
    userInfo.companyId = shop.companyId;
    userInfo.shopId = shop.shopId;
    userInfo.shopName = shop.shopName;
    userInfo.parentInvitationCode = '';
    globalStore.setData('userInfo', userInfo, 'home.jsx,line:47');
    globalStore.setData('shareImgInfo', {}, 'login.jsx,line:125');
    if (isTokenValid) {
      Model.login.addViewRecord({ companyIds: [shop.companyId] });
    }
    Taro.switchTab({
      url: `/pages/index/index`
    })
  }

  initData = () => {
    const { globalStore } = this.props;
    const { shopCacheList, userInfo } = globalStore.data;
    Model.login.getRecommendShopList({ companyIds: shopCacheList }).then(res => {
      const data = res.entry;
      this.logger({
        logs: '获取店铺列表',
        api_url: '/userservice/shopSearch/getRecommendShopList',
        api_req: JSON.stringify(shopCacheList),
        api_res: JSON.stringify(res),
      });
      // noLoginUser 表示token已失效
      if (res.status && res.message === 'noLoginUser' && userInfo.token) {
        userInfo.token = '';
        globalStore.setData('userInfo', userInfo, 'home.jsx,line:72');
      }
      if (data && data.length) {
        const r = [...data]
        const list = r.map(item => {
          const itemList = (item.goodsInfoList || []).slice(0, 6);
          item.goodsInfoList = itemList;
          return item
        })
        this.setState({
          companyList: list,
          isRequest: true,
          isTokenValid: res.status && res.message == 'noLoginUser' ? false : true
        })
      } else {
        this.setState({
          isRequest: true,
          isTokenValid: res.status && res.message == 'noLoginUser' ? false : true
        })
      }
    })
  }

  clickAvatar = () => {
    const { isTokenValid } = this.state;
    if (isTokenValid) {
      this.showExitPopup();
    } else {
      this.gotoLogin();
    }
  }

  showExitPopup = () => {
    const { exitPopup } = this.state;
    this.setState({
      exitPopup: !exitPopup
    })
  }

  onExit = () => {
    const { globalStore } = this.props;
    const { userInfo } = globalStore.data;
    const companyId = this.getCompanyId();

    this.setState({
      exitPopup: false
    })

    // 不能清除所有数据，只能清特定字段
    userInfo.token = '';
    globalStore.setData('userInfo', userInfo, 'setting.jsx,line:50');

    $ajax.uninjectHeaders();
    $ajax.injectHeaders(getFetchHeader(true));

    navigateToLogin({
      params: {
        companyId
      },
      desc: '[system] file:home.jsx line:132'
    });
  }

  gotoLogin = () => {
    navigateToLogin({
      params: {
        companyId: this.getCompanyId()
      },
      desc: '[system] file:home.jsx line:141'
    });
  }

  componentWillReact() { }

  componentDidMount() {
    this.initData();
    // Utils.yunapi.getOpenId().then(e => {
    //   console.log(e)
    // })
  }

  componentWillUnmount() { }

  componentDidShow() {
    Taro.hideHomeButton({
      success: function () { },
      fail: function () { },
      complete: function () { },
    });
  }

  componentDidHide() { }

  render() {
    const { companyList, exitPopup, isRequest, isTokenValid } = this.state;
    const { globalStore } = this.props;
    const userInfo = globalStore.data.userInfo;

    return (
      <View className={styles.container}>
        <View className={`${styles.header}`} onClick={this.clickAvatar}>
          <View className={styles.headerLeft}>
            {isRequest ? <View>
              <View className={styles.headerName}>
                <Ellipsis count={1}>您好，{isTokenValid ? userInfo.nickName : '请先登录'}</Ellipsis>
              </View>
              {isTokenValid && <View className={styles.headerExtra}>快去看看今天有没有你喜欢的宝贝～</View>}
            </View> : null}
          </View>
          <Button className={styles.reset_btn}>
            <Image
              className={`${styles.headerImg} no-loading`}
              src={isTokenValid ? getFileUrl(userInfo.headImg) : Assets.common.default_photo}
            />
          </Button>
          {exitPopup ? <View className={styles.exit}>
            <View className={styles.popup_items} onClick={this.onExit}>
              <View className={`iconfont icontuichudenglu ${styles.exitIcon}`} />
              <View className={styles.exitLabel}>退出当前账号</View>
            </View>
          </View> : null}
        </View>
        <View className={styles.body}>
          <View className={styles.bodyHeader}>
            <Image
              className={`${styles.bodyHeaderImg} no-loading`}
              src={getFileUrl(Assets.common.homeFootprint, { query: 'x-oss-process=image/quality,q_50/format,jpg/interlace,1' })}
            ></Image>
            <View className={styles.bodyTitle}>店铺记录</View>
          </View>
          {companyList.length || !isRequest ? <View className={styles.bodyContent}>
            {
              companyList.map((item, index) => <View className={styles.listItem} key={index + 1} onClick={() => this.enterShop(item)}>
                <Image mode='aspectFill' src={getFileUrl(item.logo || Assets.register.logoF, { query: 'x-oss-process=image/quality,q_50/format,jpg/interlace,1' })} className={styles.imgBlur}></Image>
                <View className={styles.itemHeader}>
                  {item.shopMaster ? <View className={styles.shopMaster}>我的店铺</View> : null}
                  <Image src={getFileUrl(item.logo || Assets.register.logoF, { query: 'x-oss-process=image/quality,q_50/format,jpg/interlace,1' })} className={styles.itemLogo} />
                  <View className={styles.itemName}>
                    <View className={styles.shopName}>{item.shopName}</View><Image src={getFileUrl(Assets.common.jdLogo, { query: 'x-oss-process=image/quality,q_50/format,jpg/interlace,1' })} className={`${styles.jdLogo} no-loading`} />
                  </View>
                </View>
                <View className={styles.itemContent}>
                  <View className={styles.itemBody}>
                    {item.goodsInfoList.map((shop, index) => <View className={styles.imgContainer} key={index + 1}>
                      <Image mode='aspectFill' src={getFileUrl(shop.mainImgUrl, { query: 'x-oss-process=image/quality,q_30/format,jpg/interlace,1' })} className={styles.bodyImg} />
                      {(index === item.goodsInfoList.length - 1) && <View className={styles.imgExtra}>
                        <View>{item.goodsTotalNum > 99 ? '99+' : item.goodsTotalNum || item.goodsInfoList.length}</View>
                        <View className={styles.label}>宝贝</View>
                      </View>}
                    </View>)}
                  </View>
                  <View className={styles.itemBtn}>进入店铺</View>
                </View>
              </View>)
            }
          </View>
            : <View className={styles.nogoodsContainer}>
              <Image className={styles.nogoodsImg} src={Assets.goods.defalutNoGoods}></Image>
              <View className={styles.nogoodsLabel}>暂无店铺记录~</View>
            </View>
          }
        </View>
      </View >
    );
  }

}

export default Home;
