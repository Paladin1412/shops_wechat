/**
 * @Author: chunxiao.zhang
 * @Email: chunxiao.zhang@jdxiaokang.com
 * @Update: 2020-02-19 10:22:28
 * @Description: 我的
 */
import Taro from '@tarojs/taro';
import { View, Text, Image, Icon, Button } from '@tarojs/components';
import { Common } from '@jxkang/wechat-utils';
import withPage from '@/components/with-page';
import Model from '@/model';
import Utils from '@/utils';
import Assets from '@/components/assets';
import UpgradeTip from '@/components/upgrade-tip';
import Collectmodal from '@/components/collect-modal';
import Foot from '@/components/foot';
import styles from './my.module.styl';
import { AtProgress, AtModal, AtFloatLayout } from 'taro-ui';

const { navigateToLogin } = Utils.appUtils;

@withPage
class My extends Taro.Component {
  constructor(props) {
    super(props);

    this.config = {
      navigationBarTitleText: '康小铺',
      navigationStyle: 'custom',
      navigationBarTextStyle: 'white',
    }

    const userInfo = props && props.globalStore ? props.globalStore.data.userInfo : {};
    this.state = {
      // 界面/组件 初始数据
      upgradeVisible: false,
      id: null,
      isLogin: !!userInfo.token,
      // 会员等级
      memberLevelInfo: {},
      // 弹窗等级
      dialogGrade: null,
      // 个人收益数据
      profitDetail: {},
      // 订单数量统计
      orderCount: [],
      // 用户信息
      userInfo,
      statusBarHeight: 0,
      isOpenShare: false,
    };
  }

  // 跳转二级页面
  goItem = (item, type = 'navigateTo') => {
    if (item === 'qrcode') {
      Model.inviter.userCode().then(res => {
        if (res) {
          Taro.navigateTo({
            url: `/pages/my-qrcode/my-qrcode?mark=${res.invitationCode}`
          })
        }
      })
      return
    }
    // switchTab
    const url = Common.seek()
      .equal(item === 'collect', '/pages/collect/collect')
      .equal(item === 'inviterecord', '/pages/yq-list/yq-list')
      .equal(item === 'address', '/pages/address/address')
      .equal(item === 'setting', '/pages/setting/setting')
      .get()
    Taro[type]({
      url
    })
  }

  // 获取弹窗
  getDialog = () => {
    Model.common.getUpMemberMsg().then(data => {
      if (data) {
        this.setState({
          id: data.id,
          upgradeVisible: true,
          dialogGrade: data.bizExtend,
        })
      }
    })
  }

  // 获取个人收益信息
  getAccountInfo = () => {
    Model.fund.show().then(resModel => {
      if (resModel) {
        this.setState({ profitDetail: resModel });
      }
    });
  }

  // 查会员等级
  getShopMemberLevel = () => {
    const companyId = this.getCompanyId();
    Model.my.getShopMemberLevelInfo({ companyId }).then(resp => {
      const resModel = resp.entry;
      // 1000010011 会员信息不存在
      if (`${resp.responseCode}` === '1000010011') {
        Utils.appUtils.navigateToLogin({
          params: {
            companyId
          },
          desc: '[system] file:my.jsx line:107'
        });
      } else if (resModel) {
        this.setState({
          memberLevelInfo: resModel,
        });
      }
    })
  }

  getSystemInfo = () => {
    const { globalStore } = this.props;
    const { systemInfo: { statusBarHeight } } = globalStore.data;

    this.setState({
      statusBarHeight,
    });
  }

  componentWillReact() { }

  componentDidMount() {

  }

  initData() {
    this.getDialog();
    this.getAccountInfo();
    this.getShopMemberLevel();
    this.getOrderCount();
  }

  componentWillUnmount() { }

  componentDidShow() {
    this.getSystemInfo();
    const userInfo = this.props.globalStore.data.userInfo;
    this.setState({ userInfo });
    if (userInfo.token) {
      this.initData();
    }
  }

  componentDidHide() {
    if (this.state.upgradeVisible) {
      this.setState({ upgradeVisible: false });
    }
  }

  /**
   * 进入订单界面
   */
  gotoOrder = (index) => {
    Taro.navigateTo({
      url: `/pages/my-order/my-order?index=${index}`
    });
  }
  // 售后列表
  gotoAfter = () => {
    Taro.navigateTo({
      url: `/pages/my-order/my-order?index=0&isOrder=2`
    });
  }

  /**
   * 立即升级
   */
  onGotoUpgrade = () => {
    Taro.navigateTo({
      url: '/pages/index/index'
    });
  }

  /**
   * 修改个人信息
   */
  onGotoModify = () => {
    const { userInfo } = this.state;
    if (userInfo.token) {
      Taro.navigateTo({
        url: '/pages/personinfo/personinfo'
      });
    } else {
      this.gotoLogin();
    }
  }

  gotoLogin = () => {
    navigateToLogin({
      params: {
        companyId: this.getCompanyId()
      },
      desc: '[system] file:my.js line:193'
    });
  }

  /**
   * 查询订单数量
   */
  getOrderCount = () => {
    const { orderCount } = this.state;
    let setCount = 0;
    const setVal = () => {
      setCount += 1;
      if (setCount >= 4) {
        this.setState({ orderCount });
      }
    }
    // 全部订单
    // Model.my.getOrderCount().then(resModel => {
    //   orderCount[0] = resModel;
    //   setVal();
    // });
    // 待付款
    Model.my.getOrderCount({ orderStatus: 0 }).then(resModel => {
      orderCount[1] = resModel;
      setVal();
    });
    // 待发货
    Model.my.getOrderCount({ orderStatus: 1 }).then(resModel => {
      orderCount[2] = resModel;
      setVal();
    });
    // 待收货
    Model.my.getOrderCount({ orderStatus: 2 }).then(resModel => {
      orderCount[3] = resModel;
      setVal();
    });
    // 退换货
    Model.order.afterCount().then(res => {
      orderCount[4] = res;
      setVal();
    })
  }

  /**
   * 跳转至收益详情界面
   */
  gotoAmountDetail = (index) => {
    Taro.navigateTo({
      url: `/pages/accountinfo/accountinfo?current=${index}`
    });
  }

  onShowItem = () => {
    this.collect.setState({
      shareVisible: true
    })
  }

  onCloseUpgrade = () => {
    const id = this.state.id;
    if (id) {
      Model.common.upRead({
        id
      })
    }
    this.setState({ upgradeVisible: false });
  }

  showInvite = () => {
    // this.setState({
    //   isOpenShare: true
    // })
    this.goItem('qrcode')
  }

  onCancalShare = () => {
    this.setState({
      isOpenShare: false,
    })
  }

  render() {
    const {
      upgradeVisible,
      id,
      profitDetail,
      memberLevelInfo,
      dialogGrade,
      orderCount,
      userInfo,
      statusBarHeight,
      isOpenShare,
    } = this.state;


    const memberLevel = memberLevelInfo && memberLevelInfo.memberLevel;
    let percent = 0;
    if (memberLevelInfo.invitationMemberNum) {
      percent = (memberLevelInfo.invitationMemberNum / memberLevelInfo.nextMemberNeedInvitationNum).toFixed(2);
    }

    return (
      <View className={styles.container}>
        {/**
        *   已登陆
        */}
        <View className={styles.top_back}>
        </View>
        <View className={styles.user_box} style={{ paddingTop: `${statusBarHeight + 50}px` }}>
          <Button className={`${styles.reset_btn} ${styles.user_box_inner}`} onClick={this.onGotoModify}>
            <View className={styles.user_pic}>
              <Image
                src={userInfo.token ? Utils.appUtils.getFileUrl(userInfo.headImg) : Assets.common.default_photo}
                className={styles.user_photo} />
            </View>
            {userInfo.token ? <View className={styles.user_info}>
              <View className={styles.desc}>
                <Text className={styles.name}>{userInfo.nickName}</Text>
                {memberLevel === 1 && <View><Image src={Assets.my.silver} className={`${styles.levelIcon} no-loading`} /><Text className={styles.levelText}>白银会员</Text></View>}
                {memberLevel === 2 && <View><Image src={Assets.my.gold} className={`${styles.levelIcon} no-loading`} /><Text className={`${styles.levelText} ${styles.goldLevelText}`}>黄金会员</Text></View>}
                {memberLevel === 3 && <View><Image src={Assets.my.diamond} className={`${styles.levelIcon_diamond} no-loading`} /><Text className={`${styles.levelText} ${styles.diamondLevelText}`}>钻石会员</Text></View>}
              </View>
              <View className={styles.id}>
                ID：{userInfo.id}
                -
                {this.getCompanyId()}
              </View>
            </View> : null}
            {userInfo.token ? null : <View className={styles.user_info}>
              <View className={`${styles.name} ${styles.nologinName}`}>您好，请先登录</View>
            </View>}
            <View className={`iconfont icongengduo1 ${styles.more}`}></View>
          </Button>
          {/**
           * 立即升级
           */}
          {
            memberLevel === 1 && !memberLevelInfo.invitationMemberNum && memberLevelInfo.nextMemberNeedInvitationNum
              ? <View className={styles.upgrade_container}>
                <Image src={Assets.my.silverBgNoInvite} className={`${styles.upgrade_img} ${styles.silver_noinvite_img}`} />
                <View className={styles.upgradeHeader}>
                  <View className={styles.headerTitle}>
                    邀请{memberLevelInfo.nextMemberNeedInvitationNum}人注册即可升级为黄金会员
                </View>
                  <View className={styles.headBtn} onClick={this.showInvite}>立即邀请</View>
                </View>
                <View className={styles.upgradeFooter}>享受自购返佣和分享购物返佣权益</View>
              </View>
              : null
          }
          {
            memberLevel === 1 && memberLevelInfo.invitationMemberNum && memberLevelInfo.nextMemberNeedInvitationNum
              ? <View className={styles.upgrade_container}>
                <Image src={Assets.my.silverBgInvited} className={`${styles.upgrade_img} ${styles.silver_invited_img}`} />
                <View className={`${styles.upgradeHeader} ${styles.headerPadding}`}>
                  {memberLevelInfo.invitationMemberNum && <View
                    className={styles.percentInner}
                    style={{
                      left: `${parseInt(205 * percent, 10)}px`,
                    }}
                  >
                    <Image className={`${styles.innerBg} no-loading`} src={Assets.my.inviteNumBg}></Image>
                    <Text>{memberLevelInfo.invitationMemberNum || 0}</Text>
                  </View>}
                  <AtProgress className={styles.silverProgress} percent={parseInt(percent * 100, 10)} color='#FF590A' isHidePercent strokeWidth={4} />
                  <View className={`${styles.headBtn} ${styles.silverBtn}`} onClick={this.showInvite}>继续邀请</View>
                </View>
                <View className={`${styles.upgradeFooter} ${styles.footerMargin}`}>
                  已邀请{memberLevelInfo.invitationMemberNum}人，
                再邀请{memberLevelInfo.nextMemberNeedInvitationNum - memberLevelInfo.invitationMemberNum}人就可以升级为黄金会员享受自购和分享购物返佣了
              </View>
              </View>
              : null
          }
          {
            memberLevel === 2 && memberLevelInfo.nextMemberNeedInvitationNum
              ? <View className={styles.upgrade_container}>
                <Image src={Assets.my.goldBg} className={`${styles.upgrade_img} ${styles.gold_img}`} />
                <View className={`${styles.upgradeHeader} ${styles.headerPadding}`}>
                  {memberLevelInfo.invitationMemberNum && <View
                    className={styles.percentInner}
                    style={{
                      left: `${parseInt(205 * percent, 10)}px`,
                    }}
                  >
                    <Image className={`${styles.innerBg} no-loading`} src={Assets.my.inviteNumBg}></Image>
                    <Text>{memberLevelInfo.invitationMemberNum || 0}</Text>
                  </View>}
                  <AtProgress className={styles.goldProgress} percent={parseInt(percent * 100, 10)} color='#FFFFFF' isHidePercent strokeWidth={4} />
                  <View className={`${styles.headBtn} ${styles.goldbtn}`} onClick={this.showInvite}>
                    {memberLevelInfo.invitationMemberNum ? '继续邀请' : '立即邀请'}
                  </View>
                </View>
                <View className={`${styles.upgradeFooter} ${styles.goldFooter}`}>
                  已邀请{memberLevelInfo.invitationMemberNum || 0}人，
                再邀请{memberLevelInfo.nextMemberNeedInvitationNum - memberLevelInfo.invitationMemberNum}人就可以升级为钻石会员享受更高自购和分享购物返佣了
              </View>
              </View>
              : null
          }
          {
            memberLevel === 3
              ? <View className={styles.upgrade_container}>
                <Image src={Assets.my.diamondBg} className={`${styles.upgrade_img} ${styles.diamond_img}`} />
                <View className={`${styles.upgradeHeader} ${styles.diamondHeader}`}>
                  <View className={`${styles.headerTitle} ${styles.diamondTitle}`}>
                    您已尊享最高额自购、分享返佣
                </View>
                  <View className={`${styles.headBtn} ${styles.diamondbtn}`} onClick={() => this.goItem('inviterecord')}>查看会员</View>
                </View>
              </View>
              : null
          }
        </View>
        {/**
         * 未登陆
         */}
        {/**
         * 账户信息
         */}
        {
          memberLevel == 2 || memberLevel == 3 ?
            <View className={styles.account_info}>
              {/* <View className={styles.info}>
            <Text>账户余额</Text>
            <View className={styles.price}>¥10394.00</View>
          </View>
          <View>
            <Text className={styles.btn}>提现</Text>
            <Icon type='success'></Icon>
          </View> */}
              <View className={styles.whiteBg}></View>
              <View className={styles.account_item} onClick={() => this.gotoAmountDetail(0)}>
                <View className={styles.account_price}>{profitDetail.totalIncome}</View>
                <View className={styles.account_type}>累计收入</View>
              </View>
              <View className={styles.account_item} onClick={() => this.gotoAmountDetail(1)}>
                <View className={styles.account_price}>{profitDetail.balanceAccount}</View>
                <View className={styles.account_type}>可提现</View>
              </View>
              <View className={styles.account_item} onClick={() => this.gotoAmountDetail(2)}>
                <View className={styles.account_price}>{profitDetail.todayIncome}</View>
                <View className={styles.account_type}>今日收益</View>
              </View>
            </View> : null
        }
        {/**
         * 订单
         */}
        <View className={styles.order_box}>
          <View className={styles.order_header} onClick={() => this.gotoOrder(0)}>
            <View className={styles.header_title}>我的订单</View>
            <View className={styles.header_label}>
              全部订单<View className={`iconfont iconwode-gengduo ${styles.header_arrow}`}></View>
            </View>
          </View>
          <View className={styles.order_list}>
            <View className={styles.order_item} onClick={() => this.gotoOrder(1)}>
              <View className={`iconfont icondaifukuan ${styles.icon}`}></View>
              <View className={styles.order_num} hidden={orderCount[1] === 0}>{orderCount[1]}</View>
              待付款
            </View>
            <View className={styles.order_item} onClick={() => this.gotoOrder(2)}>
              <View className={`iconfont icondaifahuo ${styles.icon}`}></View>
              <View className={styles.order_num} hidden={orderCount[2] === 0}>{orderCount[2]}</View>
              待发货
            </View>
            <View className={styles.order_item} onClick={() => this.gotoOrder(3)}>
              <View className={`iconfont icondaishouhuo ${styles.icon}`}></View>
              <View className={styles.order_num} hidden={orderCount[3] === 0}>{orderCount[3]}</View>
              待收货
            </View>
            <View className={styles.order_item} onClick={() => this.gotoAfter()}>
              <View className={`iconfont icontuihuanhuo ${styles.icon}`}></View>
              <View className={styles.order_num} hidden={orderCount[4] === 0}>{orderCount[4]}</View>
              退换货
            </View>
          </View>
        </View>
        {/**
         * 地址，设置
         */}
        <View className={styles.list_box}>
          <View className={`${styles.list}`} onClick={() => this.goItem('collect', 'switchTab')}>
            <View className={styles.list_header}>
              <Image className={`${styles.list_icon} no-loading`} src={Assets.my.collection}></Image>
              <View className={styles.list_title}>我的收藏</View>
            </View>
            <View className={`iconfont iconwode-gengduo ${styles.arrow}`}></View>
          </View>
          <View className={`${styles.list}`} onClick={() => this.goItem('address')}>
            <View className={styles.list_header}>
              <Image className={`${styles.list_icon} no-loading`} src={Assets.my.adress}></Image>
              <View className={styles.list_title}>我的地址</View>
            </View>
            <View className={`iconfont iconwode-gengduo ${styles.arrow}`}></View>
          </View>
          <View className={`${styles.list}`} onClick={() => this.goItem('qrcode')}>
            <View className={styles.list_header}>
              <Image className={`${styles.list_icon} no-loading`} src={Assets.my.inviteCode}></Image>
              <View className={styles.list_title}>邀请码</View>
            </View>
            <View className={`iconfont iconwode-gengduo ${styles.arrow}`}></View>
          </View>
          <View className={`${styles.list}`} onClick={() => this.goItem('inviterecord')}>
            <View className={styles.list_header}>
              <Image className={`${styles.list_icon} no-loading`} src={Assets.my.inviteList}></Image>
              <View className={styles.list_title}>邀请记录</View>
            </View>
            <View className={styles.num}>
              {/* <Text className={styles.mr}>18</Text> */}
              <View className={`iconfont iconwode-gengduo ${styles.arrow}`}></View>
            </View>
          </View>
          <View className={`${styles.list}`} onClick={() => this.goItem('setting')}>
            <View className={styles.list_header}>
              <Image className={`${styles.list_icon} no-loading`} src={Assets.my.config}></Image>
              <View className={styles.list_title}>设置</View>
            </View>
            <View className={`iconfont iconwode-gengduo ${styles.arrow}`}></View>
          </View>
        </View>
        {/** 底部导航 */}
        {/* <Foot onShowItem={this.onShowItem} /> */}
        {/** 收藏提示框 */}
        <Collectmodal ref={node => this.collect = node} />
        {/** 已成为 高级会员 用户提示 */}
        {/* <UpgradeTip
          dialogGrade={dialogGrade}
          id={id}
          visible={upgradeVisible}
          onCancel={() => this.setState({ upgradeVisible: false })}
        /> */}
        <View className={styles.upgrade_tip}>
          <AtModal
            isOpened={upgradeVisible}
            onClose={this.onCloseUpgrade}
          >
            {dialogGrade == 1 && <Image className={styles.silverImg} src={Assets.common.silverDialog} onClick={this.onCloseUpgrade} />}
            {dialogGrade == 2 && <Image className={styles.img} src={Assets.common.goldDialog} onClick={this.onCloseUpgrade} />}
            {dialogGrade == 3 && <Image className={styles.img} src={Assets.common.diamondDialog} onClick={this.onCloseUpgrade} />}
            <View className={`iconfont iconguanbi1 ${styles.close}`} onClick={this.onCloseUpgrade} />
          </AtModal>
        </View>
        {/* 邀请弹窗 */}
        <View className={styles.share_popup}>
          <AtFloatLayout isOpened={isOpenShare} onClose={() => this.onCancalShare()}>
            <View className={`${styles.share_title} last`}>邀请</View>
            <View className={styles.share_container}>
              <Button className={styles.item} open-type='share'>
                <Image src={Assets.other.wx} className={styles.imgicon}></Image>
                <View className={styles.font}  >微信</View>
              </Button>
            </View>
            <View className={styles.cancalItem}>
              <View className={styles.cancalBtn} onClick={() => this.onCancalShare()}>
                取消
              </View>
            </View>
          </AtFloatLayout>
        </View>
      </View >
    );
  }

}

export default My;
