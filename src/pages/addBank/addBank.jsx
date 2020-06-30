
import Taro from '@tarojs/taro';
import { View, Input, Text } from '@tarojs/components';
import withPage from '@/components/with-page';
import Model from '@/model';
import { message } from '@jxkang/wechat-utils';
// import { AtIcon } from "taro-ui"
// import Assets from '@/components/assets';
import styles from './addBank.module.styl';

// import Pre from './pre'


@withPage
class Bankcard extends Taro.Component {
  constructor(props) {
    super(props);

    this.config = {
      navigationBarTitleText: '添加银行卡',
    }

    this.state = {
      // 界面/组件 初始数据
      userName: '',
      bankNum: '',
      tel: '',//
      bankName: '',//银行名称
    };
  }



  // componentWillReact() { }

  componentDidMount() {
    // this.accountInfo()
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
  getBankNum = (value) => {
    this.setState({
      bankNum: value.detail.value,
    }, () => {
      if (value.detail.value.length >= 16 && value.detail.value.length <= 19) {
        this.getBankInfo()
      } else {
        message.error('请填写正确的银行卡号')
      }

    })
  }

  getBankInfo = () => {
    // this.setState({
    //   bankName: '',
    // })
    const { bankNum } = this.state
    Model.bankcard.getBankInfo({
      bankNum
    }).then((data) => {
      if (data) {
        this.setState({
          bankName: data.bankName,
        })
      }
    })
  }

  getBind = () => {
    const { bankName, bankNum, tel, userName, agree, } = this.state
    if (agree === false) {
      message.error('请勾选同意开户服务协议')
      return
    }
    const params = {
      accountName: userName,
      cardNo: bankNum,
      bankName,
      // userMobile: tel,
    }
    // let p = hasInfo === true ?
    //   Model.bankcard.localBindCard(params) :
    //   Model.bankcard.getBindCard(params)
    let p = Model.bankcard.addCard(params)
    p.then(res => {
      if (res) {
        // this.logger('绑定银行卡信息', res); // 埋点
        Taro.navigateTo({
          url: `/pages/cashout/cashout`
        })
      }
    })
  }

  changeInput = (e, name) => {
    let s = e.detail.value
    if (name === 'userName') {
      // s = s.replace(/[^\a-zA-Z\u4E00-\u9FA5]/g, '')
      s = s.replace(/[^\u4E00-\u9FA5]/g, '').substr(0, 15)
    }
    if (name === 'idCard') {
      s = s.replace(/[\W]/g, '')
    }
    if (name === 'bankNum') {
      this.setState({
        bankName: ''
      })
      s = s.replace(/\D/g, '')
    }
    this.setState({
      [name]: s,
    })
    return s

  }


  accountInfo = () => {
    Model.bankcard.accountInfo().then(res => {
      if (res) {
        this.setState({
          // bankName: res.bankName,
          // bankNum: res.cardNum,
          // idCard: res.idCard,
          // tel: res.userMobile,
          userName: res
          // customerId: res.customerId
        })
      }

    })
  }

  render() {
    const {
      bankName, userName,
      bankNum,
      tel,
    } = this.state;
    // const isId = /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
    const isPhone = /^1\d{10}$/
    return (
      <View className={styles.out}>
        <View className={styles.back}></View>
        <View className={styles.container}>
          <View className={styles.form_box}>
            <View className={`${styles.list} last`}>
              <View className={styles.label_box}>
                <Text className={styles.symbol}>*</Text>
                <Text className={styles.name}>真实姓名</Text>
              </View>
              <Input className={styles.insert} type='text'
                maxLength={10}
                onBlur={this.scroll}
                placeholder='请输入真实姓名' value={userName} onInput={(e) => this.changeInput(e, 'userName')}
              ></Input>
            </View>
            {/* <View className={`${styles.list} last`}>
              <View className={styles.label_box}>
                <Text className={styles.symbol}>*</Text>
                <Text className={styles.name}> 身份证号</Text>
              </View>
              <Input className={styles.insert} type='text'
                value={idCard}
                maxLength={18}
                onBlur={this.scroll}
                placeholder='请输入身份证号' onInput={(e) => this.changeInput(e, 'idCard')}></Input>
              {(!isId.test(idCard) && idCard) && <AtIcon value='alert-circle' size='20' color='#F9482E'></AtIcon>}
            </View> */}
            <View className={`${styles.list} last`}>
              <View className={styles.label_box}>
                <Text className={styles.symbol}>*</Text>
                <Text className={styles.name}>银行卡号</Text>
              </View>
              <Input className={styles.insert} type='number' maxLength={19} placeholder='请输入银行卡号'
                onBlur={this.getBankNum}
                value={bankNum}
                onInput={(e) => this.changeInput(e, 'bankNum')}
              ></Input>
            </View>
            <View className={`${styles.list_bank} last`}>
              <View className={styles.label_box}>
                <View className={styles.bank_title}>所属银行</View>
              </View>
              <View style={{ float: 'right' }}>{bankName}</View>
            </View>
            {/* <View className={`${styles.list} last`}>
              <View className={styles.label_box}>
                <Text className={styles.symbol}>*</Text>
                <Text className={styles.name}> 开户手机</Text>
              </View>
              <Input className={styles.insert}
                maxLength={11}
                type='number' value={tel} placeholder='请输入开户手机' onInput={(e) => this.changeInput(e, 'tel')}
              ></Input>
              {(!isPhone.test(tel) && tel) && <View className={`iconfont ${styles.error_icon}`}>&#xe60e;</View>}
            </View> */}
          </View>

          {/* <View className={styles.desc} onClick={this.getAgree}>
            {agree === true && <Text className={`iconfont ${styles.icon} ${styles.active}`}>&#xe628;</Text>}
            {agree === false && <Text className={styles.nocheck}></Text>}
            <Text>我已同意<Text onClick={(e) => this.openXy(e)}>《汇付天下开户服务协议》</Text></Text>
          </View> */}
          <View className={styles.mes}>*请添加一张您本人的银行卡(借记卡)用于提现，不支持信用卡</View>
          {userName && bankNum && bankName && <View className={styles.bind_btn} onClick={this.getBind}>绑定</View>}
          {(!userName || !bankNum || !bankName) && <View className={`${styles.bind_btn} ${styles.gray}`} >绑定</View>}
        </View >
      </View>

    );
  }

}

export default Bankcard;
