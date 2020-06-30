/**
 * @Author: zhanglimin
 * @Email: czhanglimin@126.com
 * @Update: 2020-04-20 11:05:32
 * @Description: 提现
 */
import Taro from '@tarojs/taro';
import { View, Image, Text, ScrollView } from '@tarojs/components';
import { AtNoticebar, AtInput, AtFloatLayout } from 'taro-ui'
import {
  paramType, message,
  // Common
} from '@jxkang/wechat-utils';
import withPage from '@/components/with-page';
import { appUtils } from '@/utils';
import Model from '@/model';
import Assets from '@/components/assets';
import {
  // add,
  subtract
} from '@/utils/tointerger';
import styles from './cashout.module.styl';

const { formatPoint } = appUtils


@withPage
class Cashout extends Taro.Component {
  constructor(props) {
    super(props);

    this.config = {
      navigationBarTitleText: '提现',
      navigationStyle: 'custom',
      enablePullDownRefresh: false,
      disableScroll: true,
    }

    this.state = {
      // 界面/组件 初始数据
      current: 1,
      isOpenShare: false,
      rateMes: {},
      bankList: [],
      showInfo: {},
      formData: {
        amount: '',
        selectedBank: {}
      },
      buttonTop: '',
      buttonHeight: ''
    };
    appUtils.delay(
      this,
      ['onWithdraw']
    );

    // 防止重复点 提现按钮
    this.amountClick = true;
    // 数据收集事件
    this.onInputChange = appUtils.formHandlerChange(this);
  }

  componentDidMount() {
    this.userbanklist();
    this.withdrawConfig();
    this.fundShow();
    this.setNav()
  }
  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  /**
   * 可提现金额 展示
   */
  fundShow = () => {
    Model.fund.show().then(resModel => {
      if (resModel) {
        this.setState({
          showInfo: resModel,
        })
      }
    })
  }
  setNav = () => {
    const { top, height } = Taro.getMenuButtonBoundingClientRect();
    this.setState({
      buttonTop: top,
      buttonHeight: height
    })
  }


  /**
   * 提现服务费、手续费说明
   */
  withdrawConfig = () => {
    Model.bankcard.withdrawConfig().then(resModel => {
      if (resModel) {
        this.setState({
          rateMes: resModel,
        })
      }
    })
  }

  /**
   * 提现记录 列表
   */
  withdrawList = () => {
    Model.bankcard.withdrawList().then(res => {
      console.log(res);
    })
  }



  /**
   * 银行列表
   */
  userbanklist = () => {
    Model.bankcard.userbanklist().then(resModel => {
      if (resModel) {
        if (resModel.length > 0) {
          this.clickItem(resModel[0], 0);
        }
        this.setState({
          bankList: resModel,
        })
      }
    })
  }

  clickItem = (v, index) => {
    this.setState({
      current: index
    });
    this.onInputChange(v, 'selectedBank');
  }

  cashItem = () => {
    const { formData } = this.state;
    const Interface = this.createInterface();

    if (paramType(formData, Interface, message.warn)) {
      this.setState({
        isOpenShare: true
      })
    }
  }

  closeItem = () => {
    this.setState({
      isOpenShare: false
    })
  }

  /**
   * 计算要扣除的金额
   */
  computeOffAmount = (amount) => {
    const { rateMes } = this.state;
    return formatPoint(rateMes.withdrawServiceRate * 0.01 * amount)
    // return add(rateMes.withdrawServiceRate * 0.01 * amount, rateMes.withdrawFeeAmount);
  }

  /**
   * 生成数据验证规则
   */
  createInterface = () => {
    return paramType.chain()
      .add('amount')
      .rule('required', true, '请输入提现金额')
      .rule('custom', (v) => v > 0, '请输入正确的提现金额')
      .end()
      .add('selectedBank')
      .rule('required', true, '请选择提现银行卡')
      .rule('custom', (v) => !!v.id, '请选择提现银行卡')
      .end()
      .toConfig();
  }

  /**
   * 确定提现
   */
  onWithdraw = () => {
    const { formData, rateMes } = this.state;
    /**
     * merPriv   用户私有域
     * 商户业务域 p_m:pc-m端,  p_b:pc-b端, p_shop:pc-服务商端,  m_h5:m端-h5
     * requestType: P、 M
     */
    const Interface = this.createInterface();
    const serverFee = formatPoint(rateMes.withdrawServiceRate * 0.01) > 2 ? formatPoint(rateMes.withdrawServiceRate * 0.01) : 2
    if (formData.amount - serverFee <= 0) {
      return message.warn('到账金额必须大于0');
    }
    if (paramType(formData, Interface, message.warn)) {
      if (this.amountClick === false) {
        return message.warn('不能重复点击提现');
      }
      this.amountClick = false;
      Model.fund.withdrawApi({
        amount: formData.amount,
        // requestType: 'M',
        // merPriv: `TOPSAASSERVICE`,
        // thirdBankCardId: formData.selectedBank.bindCardId
        bankCardId: formData.selectedBank.id
      }).then(res => {
        this.amountClick = true;
        if (res) {
          message.success('提现申请已提交')
          Taro.navigateTo({
            url: '/pages/cashout-result/cashout-result'
          })
        }
      })
    }
  }

  // onChangeAmount = (e) => {
  //   const { showInfo } = this.state;
  //   this.onInputChange(Math.min(Math.max(0, e), showInfo.balanceAccount), 'amount');
  // }
  onChangeAmount = (e) => {
    const { showInfo } = this.state;
    let s = e.replace(/[^\d.]/g, '')//去除小数点和数字以外
    s = s.replace(/\.{2,}/g, ".").replace(".", "$#$").replace(/\./g, "").replace("$#$", ".") //只留一个小数点
    s = s.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3') //最多两位小数
    s = s > showInfo.balanceAccount ? showInfo.balanceAccount : s
    this.onInputChange(s, 'amount');
    return s
  }

  allMoney = () => {
    const { showInfo } = this.state;
    const all = (Number(showInfo.balanceAccount || 0)).toFixed(2)
    this.onInputChange(Math.min(Math.max(0, all), showInfo.balanceAccount), 'amount');
  }
  addbank = () => {
    console.log(">>")
    Taro.navigateTo({
      url: '/pages/addBank/addBank'
    })
  }
  goBack = () => {
    Taro.redirectTo({
      url: '/pages/accountinfo/accountinfo?current=1'
    })
  }

  render() {
    const {
      current, isOpenShare, rateMes, bankList, showInfo, formData,
      buttonTop,
      buttonHeight
    } = this.state;
    const serverFee = formatPoint(formData.amount * rateMes.withdrawServiceRate * 0.01) < 2 ? 2 : formatPoint(formData.amount * rateMes.withdrawServiceRate * 0.01)
    return (
      <View className={styles.cashout} style={{ paddingTop: `${buttonTop + buttonHeight + buttonHeight / 5}px` }}>
        <View className={styles.top_box}>
          <View className={styles.top_inner} style={{ marginTop: `${buttonTop}px`, height: `${buttonHeight}px`, marginBottom: `${buttonHeight / 5}px` }}>
            <View className={`iconfont ${styles.go_back_icon}`} onClick={this.goBack}>&#xe682;</View>
            <View className={styles.font}>提现</View>
          </View>
        </View>
        <AtNoticebar icon='volume-plus' className={styles.AtNoticebar}>
          提现手续费：平台服务费{rateMes.withdrawServiceRate || ''}%(至少2元）
            <View className={`iconfont ${styles.hideNotice}`}>&#xe6dd;</View>
        </AtNoticebar>
        <View className={styles.pricetitle}>提现金额</View>
        <View className={styles.pricelist}>
          <AtInput
            name='amount'
            title='￥'
            type='text'
            placeholder='0.00'
            value={formData.amount}
            onChange={this.onChangeAmount}
          />
          <View className={styles.priceTop}>
            <View className={styles.canprice}>可提现金额：¥ {(Number(showInfo.balanceAccount || 0)).toFixed(2)}</View>
            <View className={styles.allCanPrice} onClick={this.allMoney}>全部提现</View>
          </View>
        </View>
        <View className={styles.pricetitle}>
          提现到银行卡
          {bankList.length > 0 && bankList.length < 5 &&
            <View className={styles.add_btn} onClick={this.addbank}>添加银行卡</View>
          }

        </View>
        {bankList.length > 0 && <ScrollView className={styles.scroll_content} scrollY
          style={{ paddingTop: `${buttonTop + buttonHeight + 15}px` }}
        >
          <View className={styles.allbanks}>
            {
              bankList.map((v, index) => (
                <View className={styles.eveback} key={index + 1} onClick={() => this.clickItem(v, index)}>
                  <View className={styles.leftMes}>
                    <View className={styles.eveleft}>
                      <Image className={`${styles.imageMes} no-loading`} src={Assets.other.backcard} alt='' />
                    </View>
                    <View>
                      <View className={styles.bankTit}>{v.bankName}</View>
                      <View className={styles.bankNum}>{v.cardNum}</View>
                    </View>
                  </View>
                  <View className={`iconfont  ${current == index ? styles.icon_color : ''}`} style={{ fontSize: '18px' }} >&#xe6af;</View>
                </View>
              ))
            }
          </View>
        </ScrollView>}
        {/* <View className={styles.allbanks}>
          {
            bankList.map((v, index) => (
              <View key={index + 1} className={styles.eveback} onClick={() => this.clickItem(v, index)}>
                <View className={styles.leftMes}>
                  <View className={styles.eveleft}>
                    <Image className={styles.imageMes} src={Assets.home.backcard} alt='' />
                  </View>
                  <View>
                    <View className={styles.bankName}>{v.bankName}</View>
                    <View className={styles.cardNum}>{v.cardNum}</View>
                  </View>
                </View>
                <View className={`iconfont  ${current == index ? styles.icon_color : ''}`} style={{ fontSize: '18px' }}>&#xe6c8;</View>
              </View>
            ))
          }
        </View> */}
        {bankList.length === 0 && <View className={styles.add_box} onClick={this.addbank}>
          <View className={`iconfont ${styles.add_icon}`} >&#xe68d;</View>
          <View>添加银行卡</View>
        </View>}
        <View className={styles.mes}>*最多支持绑定5张银行卡</View>
        <View className={styles.footerbar}>
          {bankList.length > 0 && <View className={styles.footerInner} onClick={this.cashItem}>
            申请提现
           </View>
          }
          {bankList.length <= 0 && <View className={`${styles.footerInner} ${styles.gray}`}>
            申请提现
           </View>
          }
        </View>
        <AtFloatLayout isOpened={isOpenShare} onClose={this.closeItem}>
          <View className={styles.cash_top}>
            <View style={{ opacity: '0' }}>demo</View>
            <Text className={styles.confirmTitle}>确认提现</Text>
            <View className='iconfont iconguanbi1' style={{ marginRight: '20px' }} onClick={this.closeItem} />
          </View>
          <View className={styles.fact}>
            <View className={styles.fact_price}>实际到账(元)</View>
            <View className={styles.fact_all}>
              <Text className={styles.fact_num}>{formatPoint(formData.amount - serverFee)}</Text>
            </View>
          </View>
          <View className={styles.eveprice}>
            <View className={styles.realContainer}>
              <View className={styles.evePrice_mes_left}>提现金额(元)</View>
              <View className={styles.evePrice_mes_right}>{formData.amount}</View>
            </View>
            <View className={styles.evePrice_mes_container}>
              <View className={styles.evePrice_mes}>
                <View className={styles.evePrice_mes_left}>手续费(元)</View>
                <View className={styles.evePrice_mes_right}>
                  {serverFee}
                </View>
              </View>
              <View className={styles.evePrice_text}>(含{rateMes.withdrawServiceRate}%平台服务费（至少2元)</View>
            </View>
            <View className={styles.evePrice_mes_container}>
              <View className={styles.evePrice_mes}>
                <View className={styles.evePrice_mes_left}>提现到</View>
                <View className={styles.evePrice_mes_right}>
                  {formData.selectedBank.cardNum}
                </View>
              </View>
              <View className={styles.evePrice_text}>{formData.selectedBank.bankName}</View>
            </View>
          </View>
          <View className={styles.cancalItem}>
            <View className={styles.cancalBtn} onClick={this.onWithdraw}>
              确认提现
              </View>
          </View>
        </AtFloatLayout>
      </View >
    );
  }

}

export default Cashout;
