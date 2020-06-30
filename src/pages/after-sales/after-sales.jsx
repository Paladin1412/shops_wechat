/**
 * @Author: cai.ping
 * @Email: cai.ping@jdxiaokang.com
 * @Update: 2020-03-02 11:54:29
 * @Description: true
 */
import Taro from '@tarojs/taro';
import { View, Text, Image, Input } from '@tarojs/components';
import { message } from '@jxkang/wechat-utils';
// import { Ellipsis } from '@jxkang/wechat-cmpt';
import Ellipsis from '@/components/ellipsis';
import withPage from '@/components/with-page';
import Model from '@/model';
import Assets from '@/components/assets';
import styles from './after-sales.module.styl';
import { AtList, AtListItem, AtFloatLayout, AtRadio, AtInput, AtImagePicker, AtTextarea } from 'taro-ui'
import Utils, { appUtils } from '@/utils'
import Upload from '@/components/upload'

const { getFileUrl, formatPoint } = Utils.appUtils;

@withPage
class AfterSales extends Taro.Component {
  constructor(props) {
    super(props);

    this.config = {
      navigationBarTitleText: '申请售后',
      navigationBarBackgroundColor: '#F7F8FA',
    }

    this.state = {
      // 界面/组件 初始数据
      tuiModal: false,
      tuiOption: [],
      checkTuiType: '',//售后类型
      reasonModalOption: [
        { label: '质量问题', value: 1 },
        { label: '实物与图片不符', value: 2 },
        { label: '七天无理由', value: 3 },
        { label: '其他', value: 4 },
      ],
      reasonModal: false,
      checkReasonType: null,
      postFile: [],
      item: {},
      remarks: '',
      amount: '',
      maxAmount: 0
    };
    appUtils.delay(
      this,
      ['goResult']
    );

  }
  tuiClick = () => {
    this.setState({
      tuiModal: true
    })
  }
  handleClose = () => {
    this.setState({
      tuiModal: false
    })
  }
  changetuiModal = (v) => {
    let reasonModalOption = []
    if (v === 2) {
      reasonModalOption = [
        { label: '七天无理由', value: '七天无理由' },
        { label: '质量做工不好', value: '质量做工不好' },
        { label: '商品描述不符', value: '商品描述不符' },
        { label: '卖家发错货', value: '卖家发错货' },
        { label: '其他', value: '其他' },
      ]
    }
    if (v === 3) {
      reasonModalOption = [
        { label: '少发漏发不足分量', value: '少发漏发不足分量' },
        { label: '有明显破损补差', value: '有明显破损补差' },
        { label: '其他', value: '其他' },
      ]
    }
    this.setState({
      checkTuiType: v,
      reasonModalOption,
      checkReasonType: null
      // tuiModal: false
    })
  }
  reasonClick = () => {
    this.setState({
      reasonModal: true
    })
  }
  reasonModalClose = () => {
    this.setState({
      reasonModal: false
    })
  }
  changereasonModal = (v) => {
    this.setState({
      checkReasonType: v,
      // reasonModal: false
    })
  }
  goResult = () => {
    // Taro.navigateTo({
    //   url: '/pages/sub-result/sub-result'
    // })
    const { orderNo } = this.$router.params
    const { checkTuiType, postFile, checkReasonType, remarks, item, amount } = this.state
    //只有订单状态为1待发货 2已发货 3已完成的情况可以发起售后
    if (item.orderStatus !== 1 && item.orderStatus !== 2 && item.orderStatus !== 3) {
      message.error('该订单不支持发起售后')
      return false
    } else if (item.settle === 1) {
      message.error('订单可结算，不支持售后')
      return false
    }
    Model.order.creatAfter({
      afterSaleType: checkTuiType,
      imgs: postFile.join(','),
      orderNo,
      reason: checkReasonType,
      remarks,
      scmOrderNo: item.scmOrderNo,
      afterSaleAmount: amount
    }).then(res => {
      if (res) {
        Taro.navigateTo({
          url: '/pages/sub-result/sub-result'
        })
      }
    })
  }
  removeWx = (index) => {
    const { postFile } = this.state
    postFile.splice(index, 1)
    this.setState({
      postFile
    })
  }
  successWx = (url) => {
    const { postFile } = this.state
    postFile.push(url)
    this.setState({
      postFile
    })
  }
  queryDetail = (orderNo) => {
    Model.order.queryDetail({
      orderNo
    }).then(res => {
      if (res) {
        res.propsValue = this.getProps(res.newPropsValue)
        const type = (Number(res.orderStatus) === 2 || Number(res.orderStatus) === 3) ? 2 : 1
        const tuiOption = type == 2 ?
          [
            { label: '退货退款', value: 2 },
            { label: '申请赔付', value: 3 }
          ] :
          [{ label: '仅退款', value: 1 }]
        const reasonModalOption = type === 2 ?
          [
            { label: '七天无理由', value: '七天无理由' },
            { label: '质量做工不好', value: '质量做工不好' },
            { label: '商品描述不符', value: '商品描述不符' },
            { label: '卖家发错货', value: '卖家发错货' },
            { label: '其他', value: '其他' },
          ] :
          [
            { label: '我不想要了', value: '我不想要了' },
            { label: '未按约定时间发货', value: '未按约定时间发货' },
            { label: '快递无跟踪记录', value: '快递无跟踪记录' },
            { label: '其他', value: '其他' },
          ]

        this.setState({
          item: res,
          amount: formatPoint(res.agentUnitPrice * res.count),
          tuiOption,//售后选项
          type: Number(type),
          checkTuiType: Number(type),//售后选中类型
          reasonModalOption,
        }, () => this.checkClaimAmount())
      }
    })
  }
  goIndex = () => {
    const companyId = this.getCompanyId();

    Taro.switchTab({
      url: `/pages/index/index?companyId=${companyId}`
    })
  }
  getProps = (propsValue = '') => {
    propsValue = `${propsValue}`.replace('[', '').replace(']', '').replace(/\"/g, "").split(',')
    const str = []
    for (let k of propsValue) {
      str.push(k.split(':')[1])
    }
    return str.join('/')
  }
  // 赔付最大金额
  checkClaimAmount = () => {
    const { orderNo } = this.$router.params
    const { amount } = this.state
    Model.order.checkClaimAmount({ orderNo }).then(res => {
      if (res !== null) {
        this.setState({
          maxAmount: res,
          amount: amount > res ? res : amount
        })
      }
    })
  }
  componentWillReact() { }

  componentDidMount() {
    const { orderNo } = this.$router.params
    this.queryDetail(orderNo)
    // const { tuiOption } = this.state


  }
  setAmount = (e) => {
    // const { value } = e.detail
    const value = e
    const { maxAmount } = this.state
    let s = value.replace(/[^\d.]/g, '') //去除小数点和数字以外
    s = s.replace(/\.{2,}/g, ".").replace(".", "$#$").replace(/\./g, "").replace("$#$", ".") //只留一个小数点
    s = s.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3') //最多两位小数
    s = s > maxAmount ? maxAmount : s
    this.setState({
      amount: s
    })
    return s
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const {
      tuiModal, tuiOption, checkTuiType, reasonModal,
      checkReasonType, reasonModalOption,
      files,
      item,
      remarks,
      type,
      amount,
      maxAmount
    } = this.state;
    let { shopLevel } = this.$router.params
    shopLevel = Number(shopLevel)
    return (
      <View className={styles.content}>
        <View className={styles.product_box}>
          <View className={styles.title}>
            <View className={`iconfont ${styles.icon_shop}`}>&#xe6dd;</View>
            <Text className={styles.font} onClick={this.goIndex}>{Taro.getStorageSync('userInfo').shopName}</Text>
          </View>
          <View className={styles.info_box}>
            <Image className={styles.img} src={getFileUrl(item.skuImg)}></Image>
            <View className={styles.info_right}>
              {/* <View className={styles.info_title}>
                <Ellipsis count={2}>{item.itemTitle}</Ellipsis>
              </View>
              <View className={styles.size_box}>
                {item.propsValue}
              </View>
              <View className={styles.price_box}>
                <View className={styles.left}>
                  <View className={styles.num}>¥ {item.skuPrice}  <Text className={styles.count}>x{item.count}合计:￥{formatPoint(item.skuPrice * item.count)}</Text></View>
                  {shopLevel >= 2 && <View className={styles.recv}>预计收益￥{item.income || 0}</View>}
                </View>
              </View> */}
              <View className={styles.item_line}>
                <View className={styles.info_title}>
                  <Ellipsis count={1}>{item.itemTitle}</Ellipsis>
                </View>
                <View className={styles.num}>¥ {item.agentUnitPrice}</View>
              </View>
              <View className={`${styles.item_line} ${styles.second}`}>
                <View>
                  {item.propsValue}
                </View>
                <View className={styles.count_box}>x{item.count}</View>
              </View>
              <View className={styles.income_container}>{shopLevel >= 2 && <View className={`${styles.item_line}`}>
                <View className={styles.recv}>预计收益￥{item.income || 0}</View>
                <View ></View>
              </View>}</View>
              <View className={`${styles.all_price}`}>
                总计：<View className={styles.all_num}>￥{formatPoint(item.agentUnitPrice * item.count, 4)}</View>
              </View>
            </View>
          </View>
        </View>
        <View className={styles.product_box}>
          <View className={styles.transfee_box}>
            <Text>运费</Text>
            <Text className={styles.gray}>{item.freePostage === 1 ? '免运费' : null}<Text className={styles.red}>¥ {item.postage || 0}</Text></Text>
          </View>
        </View>
        <View className={styles.form_box}>
          <AtList>
            {type === 1 && <AtListItem title={'退款类型'}
              extraText={tuiOption[tuiOption.findIndex(r => r.value === checkTuiType)].label || '请选择类型'} />}
            {/* {type === 2 && <AtListItem title={'售后类型'}
              extraText={(tuiOption[tuiOption.findIndex(r => r.value === checkTuiType)].label) || '请选择类型'} />} */}
            {type === 2 && <AtListItem title={'售后类型'} onClick={this.tuiClick} arrow='down'
              extraText={(`${checkTuiType}` && tuiOption[tuiOption.findIndex(r => r.value === checkTuiType)].label) || '请选择类型'} />}
            {checkTuiType !== 3 && <AtListItem title='退款金额' extraText={`￥${amount}`} />}
            {checkTuiType === 3 &&
              <View className={styles.input_box}>
                <AtListItem title='退款金额' />
                <View className={styles.inner}>
                  <AtInput value={amount} onChange={this.setAmount} onBlur={this.getAmount}></AtInput>
                </View>
              </View>

            }
            <AtListItem title='退款原因' onClick={this.reasonClick} arrow='down'
              extraText={checkReasonType ? reasonModalOption[reasonModalOption.findIndex(r => r.value === checkReasonType)].label : '请选择原因'}
            />
            {/* <AtTextarea
              // name='value'
              // title='退款说明'
              // type='text'
              maxLength={20}
              placeholder='可详细描述退款理由，限200字'
              value={remarks}
              onChange={(e) => { this.setState({ remarks: e.target.value }) }}
            /> */}
            {/* <AtListItem title='退款说明' /> */}
            <View className={styles.line_box}>
              <View className={styles.label}>退款说明</View>
              <View className={styles.right}>
                <AtTextarea
                  value={remarks}
                  onChange={(e) => { this.setState({ remarks: e }) }}
                  maxLength={200}
                  placeholder=''
                />
              </View>

            </View>

            {type === 2 && <View className={styles.photo_box}>
              <View className={styles.title}>
                <View className={styles.lable_font}>上传凭证</View>
                <View>(最多可上传5张)</View>
              </View>
              <Upload
                // option={{ length: 1 }}
                onRemove={this.removeWx} onSuccess={this.successWx}
                onClick={() => this.setState({ mask: true })}
                size={5}
                ref={node => this.wxup = node}></Upload>
            </View>}

          </AtList>
        </View>
        <View className={styles.bottom_box}>
          {(!remarks || !`${checkTuiType} ` || !checkReasonType || !amount || amount <= 0) && <View className={`${styles.button} ${styles.gray_button} `}>提交</View>}
          {remarks && `${checkTuiType} ` && checkReasonType && amount > 0 && <View className={styles.button} onClick={this.goResult}>提交</View>}
        </View>

        <AtFloatLayout isOpened={tuiModal} title={`${type === 1 ? '退款' : '售后'} 类型`} onClose={this.handleClose}>
          <AtRadio
            options={tuiOption}
            value={checkTuiType}
            onClick={this.changetuiModal}
          />
          <View className={styles.button} onClick={this.handleClose}>确定</View>
        </AtFloatLayout>
        <AtFloatLayout isOpened={reasonModal} title="退款原因" onClose={this.reasonModalClose}>
          <AtRadio
            options={reasonModalOption}
            value={checkReasonType}
            onClick={this.changereasonModal}
          />
          <View className={styles.button} onClick={this.reasonModalClose}>确定</View>
        </AtFloatLayout>
      </View >
    );
  }

}

export default AfterSales;
