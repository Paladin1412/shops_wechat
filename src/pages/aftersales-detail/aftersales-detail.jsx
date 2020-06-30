/**
 * @Author: limin.zhang
 * @Email: limin.zhang@jdxiaokang.com
 * @Update: 2020-03-02 11:54:29
 * @Description: 售后进度
 */
import Taro from '@tarojs/taro';
import { View, Text, Image, Input, ScrollView } from '@tarojs/components';
import withPage from '@/components/with-page';
import Model from '@/model';
import Assets from '@/components/assets';
import Ellipsis from '@/components/ellipsis';
import { message } from '@jxkang/wechat-utils';
import styles from './aftersales-detail.module.styl';
import { AtFloatLayout, AtModal, AtModalContent } from 'taro-ui';
import Utils, { appUtils } from '@/utils'
// import AfterSales from '../after-sales/after-sales';

const { getFileUrl, formatPoint } = Utils.appUtils;
@withPage
class AftersalesDetail extends Taro.Component {
  constructor(props) {
    super(props);

    this.config = {
      navigationBarTitleText: '查看售后',
      navigationBarBackgroundColor: "#F9482E",//头部背景色
      navigationBarTextStyle: "white",//头部字体颜色，
      enablePullDownRefresh: false,
      disableScroll: true
    }

    this.state = {
      // 界面/组件 初始数据
      showLogisticsPopup: false,
      stateList: [],
      imgs: [],
      afterInfo: {},
      newObj: {},
      actionType: '',
      actionDesc: '',
      sureModal: false,
      kefuVisible: false,
      telNo: '0571-88670307'
    };
    appUtils.delay(
      this,
      ['sendAfter']
    );

  }

  logisticsInfoClick = () => {
    this.setState({
      showLogisticsPopup: true,
      kefuVisible: false
    })
  }

  handleClose = () => {
    this.setState({
      showLogisticsPopup: false,
      sureModal: false,
      kefuVisible: false,
    })
  }
  getExpressCompany = (value) => {
    this.setState({
      company: value.detail.value
    })
  }

  getExpressNumber = (value) => {
    this.setState({
      expressNumber: value.detail.value
    })
  }

  handleExpressInfo = (value) => {
    this.setState({
      showLogisticsPopup: false
    })
  }
  setaction = () => {
    const { actionType } = this.state
    // if (actionType === '删除') {
    //   this.deleteOrder()
    // } else if (actionType === '收货') {
    //   this.receivedOrder()
    // } else
    if (actionType === '取消') {
      this.cancelAfter()
    }
  }
  cancelAfter = () => {
    const { afterSaleNo } = this.$router.params;
    Model.order.cancelAfter({ afterSaleNo }).then(res => {
      this.setState({
        sureModal: false
      })
      if (res) {
        message.success("已取消")
        Taro.navigateTo({
          url: `/pages/my-order/my-order?t=${new Date().getTime()}&isOrder=2`
        })
      }
    })
  }

  afterDetail = () => {
    const { afterSaleNo } = this.$router.params;
    const that = this;
    Model.order.afterDetail(afterSaleNo).then(res => {
      if (res) {
        const imgs = (res.imgs || '').split(',')
        // res.reason = Number(res.reason)
        that.setState({
          afterInfo: res,
          imgs
        }, () => {
          const { afterInfo } = that.state;
          let stateList = [{
            text: '申请售后',
            isFinish: false
          }, {
            text: '店主审核',
            isFinish: false
          }, {
            text: '商家收货',
            isFinish: false
          }, {
            text: '售后完成',
            isFinish: false
          }]
          if (res.afterSaleType === 3) {
            stateList = [{
              text: '申请售后',
              isFinish: false
            }, {
              text: '店主审核',
              isFinish: false
            }, {
              text: '售后完成',
              isFinish: false
            }]
          }
          if (afterInfo.afterSaleStatus === 98) {
            stateList = [{
              text: '申请售后',
              isFinish: false
            }, {
              text: '店主审核',
              isFinish: false
            }, {
              text: '售后驳回',
              isFinish: false
            }]
          }
          const newObj = that.afterStatus(afterInfo.afterSaleStatus);
          this.setState({
            newObj: newObj,
            stateList
          })
        })
      }
    })
  }


  afterStatus = (status) => {
    let title = '售后中'
    let desc = '您的售后申请已提交，正在等待审核...'
    let iconName = 'iconshouhou'
    const currentStatus = Number(status);
    if (currentStatus === 98) {
      title = '商家驳回'
      desc = '商家已驳回申请,请与商家沟通'
      iconName = 'iconzhifushibai'
    } else if (21 <= currentStatus && currentStatus < 52) {
      title = '商家审核通过'
      desc = '请保持物品完好、无破损、根据商家提供的地址联系快递退回并录入快递信息'
      iconName = 'iconkaidianchenggong'
    } else if (52 <= currentStatus && currentStatus < 53) {
      title = '商家确认收货'
      desc = '等待商家收货后，售后即可完成'
      iconName = 'iconkaidianchenggong'
    } else if (currentStatus === 99 || currentStatus === 53) {
      title = '售后成功'
      desc = '您的售后订单已成功，退款金已原路退回'
      iconName = 'iconkaidianchenggong'
    } else if (currentStatus === 97) {
      title = '售后已取消'
      desc = '您的售后订单已取消'
      iconName = 'iconkaidianchenggong'
    }
    return { title, desc, iconName }
  }

  sendAfter = (afterSaleNo) => {
    const { company, expressNumber } = this.state
    Model.order.sendAfter({
      orderAfterNo: afterSaleNo,
      shippingCompany: company,
      shippingId: expressNumber
    }).then(res => {
      if (res) {
        this.setState({
          showLogisticsPopup: false
        })
        Taro.navigateTo({
          url: `/pages/my-order/my-order?isOrder=2`
        })
      }

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
  tel = () => {
    const { telNo } = this.state;
    Taro.makePhoneCall({
      phoneNumber: telNo
    });
  }
  componentWillReact() { }

  componentDidMount() {
    this.afterDetail()
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const {
      stateList,
      imgs,
      showLogisticsPopup,
      afterInfo,
      expressNumber,
      company,
      newObj,
      actionType,
      actionDesc,
      sureModal,
      kefuVisible,
      telNo
    } = this.state;


    return (
      <View className={styles.content}>
        <View className={styles.back}>
        </View>
        <ScrollView className={styles.body} scrollY>
          <View className={styles.scroll_content}>
            <View className={styles.info_box}>
              {/** 进度条 */}
              {(afterInfo.afterSaleType === 2 || afterInfo.afterSaleType === 3) && <View className={styles.progress_bar}>
                {
                  stateList.map((item, index) => {
                    let isFinish = item.isFinish;
                    // 1、2申请售后   21、23店主审核 52买家发送物流 53商家收货 99售后成功 98商家驳回申请
                    if (index === 0) {
                      isFinish = true
                    } else if (index === 1 && afterInfo.afterSaleStatus >= 21) {
                      isFinish = true
                    } else if (index === 2 && afterInfo.afterSaleStatus >= 52) {
                      isFinish = true
                    } else if (index === 3 && afterInfo.afterSaleStatus >= 53) {
                      isFinish = true
                    }
                    return (
                      <View className={`${styles.state_item} ${(afterInfo.afterSaleType === 3 || afterInfo.afterSaleStatus === 98) && styles.state_item_large}`}>
                        <View className={styles.state_info}>
                          <View className={`${styles.state_num} ${isFinish ? styles.finish_num : ''}`}>{index + 1}</View>
                          <View className={`${styles.state_text} ${isFinish ? styles.finish_text : ''}`}>{item.text}</View>
                        </View>
                        {index === stateList.length - 1 ? null : <View className={`iconfont ${styles.state_next} ${isFinish && styles.red}`}>&#xe6a7;</View>}
                      </View>
                    )
                  })
                }
              </View>}
            </View>

            <View className={styles.header}>
              <View className={styles.header_title}>
                <View className={`iconfont ${newObj.iconName} ${styles.header_icon}`} style={{ fontSize: '18px' }} />
                <Text>
                  {
                    newObj.title
                  }
                </Text>
              </View>
              <View className={styles.header_content}>{newObj.desc}</View>
            </View>

            <View className={styles.product_box}>
              <View className={styles.title}>
                <View className="iconfont">&#xe691;</View>
                <Text className={styles.font} >{Taro.getStorageSync('userInfo').shopName}</Text>
              </View>
              <View className={styles.info_box} >
                <Image className={`${styles.img} no-loading`} src={getFileUrl(afterInfo.skuImgs)}></Image>
                <View className={styles.info_right}>
                  <View className={styles.item_line}>
                    <View className={styles.info_title}>
                      <Ellipsis count={1}>{afterInfo.itemTitle}</Ellipsis>
                    </View>
                    <View className={styles.num}>¥ {afterInfo.unitPrice}</View>
                  </View>
                  <View className={`${styles.item_line} ${styles.second}`}>
                    <View>
                      {this.getProps(afterInfo.propsValue)}
                    </View>
                    <View className={styles.count_box}>x{afterInfo.afterSaleCount}</View>
                  </View>
                  {/* {shopLevel >= 2 && */}
                  {/* <View className={`${styles.item_line}`}>
                  <View className={styles.recv}>预计收益￥{afterInfo.income || 0}</View>
                  <View ></View>
                </View> */}
                  {/* } */}
                  <View className={`${styles.all_price}`}>
                    总计:<View className={styles.all_num}>￥{formatPoint(afterInfo.unitPrice * afterInfo.afterSaleCount, 4)}</View>
                  </View>
                </View>
              </View>

            </View>

            {
              afterInfo.afterSaleStatus === 98 && <View className={styles.info_box}>
                <View className={styles.return}>驳回原因</View>
                <View className={styles.return_item}>
                  <Text className={styles.return_title}>卖家留言：</Text>
                  <Text className={styles.return_remarks}>{afterInfo.refuseReason}</Text>
                </View>
              </View>
            }
            {afterInfo.afterSaleStatus !== 98 && afterInfo.afterSaleStatus !== 97 && afterInfo.afterSaleType === 2 &&
              <View>
                {afterInfo.afterSaleStatus >= 52 &&
                  <View className={styles.info_box}>
                    <View className={styles.return}>退回物流</View>
                    <View className={styles.return_item}>
                      <Text className={styles.return_title}>快递公司：</Text>
                      <Text className={styles.return_remarks}>{afterInfo.deliveryCompany}</Text>
                    </View>
                    <View className={`${styles.return_item} ${styles.noborder_bottom}`}>
                      <Text className={styles.return_title}>快递单号：</Text>
                      <Text className={styles.return_remarks}>{afterInfo.deliveryNo}</Text>
                    </View>
                  </View>
                }
                {afterInfo.afterSaleStatus >= 21 &&
                  <View className={styles.info_box}>
                    <View className={styles.return}>商品退回</View>
                    <View className={styles.return_item}>
                      <Text className={styles.return_title}>退回地址：</Text>
                      <Text className={styles.return_remarks}>{afterInfo.receiveDetailAddress}</Text>
                    </View>
                    <View className={styles.return_item}>
                      <Text className={styles.return_title}>收货人：</Text>
                      <Text className={styles.return_remarks}>{afterInfo.receivePerson || afterInfo.receiveName}</Text>
                    </View>
                    <View className={`${styles.return_item} ${styles.noborder_bottom}`}>
                      <Text className={styles.return_title}>联系电话：</Text>
                      <Text className={styles.return_remarks}>{afterInfo.receivePhone}</Text>
                    </View>
                  </View>
                }
              </View>
            }
            <View className={styles.info_box}>
              <View className={styles.info_box_title}>您发起的</View>
              <View className={styles.refund_item}>
                <Text className={styles.refund_title}>售后单ID：</Text>
                <Text className={styles.refund_remarks}>
                  {afterInfo.afterSaleNo}
                </Text>
              </View>
              <View className={styles.refund_item}>
                <Text className={styles.refund_title}>售后类型：</Text>
                <Text className={styles.refund_remarks}>
                  {afterInfo.afterSaleType === 1 ? '仅退款' : null}
                  {afterInfo.afterSaleType === 2 ? '退货退款' : null}
                  {afterInfo.afterSaleType === 3 ? '赔付' : null}
                </Text>
              </View>
              <View className={styles.refund_item}>
                <Text className={styles.refund_title}>退款金额：</Text>
                <Text className={styles.refund_remarks}>{afterInfo.afterSaleAmount}</Text>
              </View>
              <View className={styles.refund_item}>
                <Text className={styles.refund_title}>售后原因：</Text>
                <Text className={styles.refund_remarks}>

                  {Number(afterInfo.reason) === 1 ? '质量问题' : ''}
                  {Number(afterInfo.reason) === 2 ? '实物与图片不符' : ''}
                  {Number(afterInfo.reason) === 3 ? '七天无理由' : ''}
                  {Number(afterInfo.reason) === 4 ? '其他' : ''}
                  {!Number(afterInfo.reason) ? afterInfo.reason : ''}
                </Text>
              </View>
              <View className={styles.refund_item}>
                <Text className={styles.refund_title}>售后说明：</Text>
                <Text className={styles.refund_remarks}>{afterInfo.remarks}</Text>
              </View>
              {(afterInfo.afterSaleType === 2 || afterInfo.afterSaleType === 3) && <View className={styles.refund_proof}>
                <View className={styles.title}>售后凭证：</View>
                <View className={styles.proof_img}>
                  {imgs.map((item) =>
                    <Image className={`${styles.img} no-loading`} src={getFileUrl(item)}></Image>
                  )}
                </View>
              </View>}
            </View>
          </View>
        </ScrollView>
        <View className={styles.button_box}>
          {21 <= afterInfo.afterSaleStatus && afterInfo.afterSaleStatus < 52 && afterInfo.afterSaleType === 2 &&
            <View className={styles.last_button} onClick={this.logisticsInfoClick}>填写退货</View>
          }
          <View className={`${styles.last_button}`} onClick={() => this.setState({ kefuVisible: true })}>
            <View className={`iconfont ${styles.icon_phone}`}>&#xe6c2;</View>
            联系客服
          </View>
          {(afterInfo.afterSaleStatus !== 99 && afterInfo.afterSaleStatus !== 53 && afterInfo.afterSaleStatus !== 97 && afterInfo.afterSaleStatus !== 98) &&
            <View className={`${styles.last_button} ${styles.red_button}`}
              onClick={() => this.setState({
                sureModal: true,
                kefuVisible: false,
                showLogisticsPopup: false,
                actionType: '取消',
                actionDesc: '您仅能主动取消一次，取消后将不能再主动取消，且超出保障期无法再次发起售后'
              })}>
              取消售后</View>
          }
        </View>


        {/* 填写物流信息弹出层 */}
        <AtFloatLayout isOpened={showLogisticsPopup} onClose={this.handleClose}>
          <View className={styles.popup_header}>
            <Text>填写退回物流</Text>
            <View className={styles.close}>
              <View className="iconfont close_icon" onClick={this.handleClose}>&#xe693;</View>
            </View>
          </View>
          <View className={styles.popup_body}>
            <View className={styles.item}>
              <Text className={styles.xrequired}>快递公司 : </Text>
              <Input className={styles.input} type='text'
                name='text' placeholder='请填写快递公司'
                value={company}
                onInput={this.getExpressCompany}></Input>
            </View>
            <View className={styles.item}>
              <Text className={styles.xrequired}>快递单号 : </Text>
              <Input className={styles.input} type='text' value={expressNumber}
                name='text' placeholder='请填写快递单号' onInput={this.getExpressNumber}></Input>
            </View>
          </View>
          <View className={styles.bottom_tool}>

          </View>
          <View className={styles.popup_button}>
            {expressNumber && company && <View className={styles.btn} onClick={() => this.sendAfter(afterInfo.afterSaleNo)}>我已退回</View>}
            {(!expressNumber || !company) && <View className={`${styles.btn} ${styles.gray_btn}`} >我已退回</View>}
          </View>
        </AtFloatLayout>
        <AtModal
          isOpened={sureModal}
          title={false}
          cancelText='再想想'
          confirmText='确定'
          onClose={() => this.setState({ sureModal: false, kefuVisible: false, showLogisticsPopup: false })}
          onCancel={() => this.setState({ sureModal: false, kefuVisible: false, showLogisticsPopup: false })}
          onConfirm={() => this.setaction()}
          content={actionType === '取消' && actionDesc}
        />
        {/* 联系客服弹出 */}
        <AtModal isOpened={kefuVisible} onClose={() => this.setState({ sureModal: false, kefuVisible: false, showLogisticsPopup: false })}>
          <AtModalContent>
            <View className={styles.kefu_box} onClick={this.tel}>
              <View className={styles.title}>平台联系电话</View>
              <View>{telNo}</View>
            </View>
          </AtModalContent>
        </AtModal>
      </View >
    );
  }

}

export default AftersalesDetail;
