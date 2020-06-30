/**
 * @Author: zhanglimin
 * @Email: czhanglimin@126.com
 * @Update: 2020-04-27 14:37:48
 * @Description: 修改个人资料
 */
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import withPage from '@/components/with-page';
import { message, paramType } from '@jxkang/wechat-utils';
import Model from '@/model';
import Assets from '@/components/assets';
import styles from './edit-info.module.styl';



@withPage
class EditInfo extends Taro.Component {
  constructor(props) {
    super(props);

    this.config = {
      navigationBarTitleText: '修改昵称',
    }

    this.state = {
      // 界面/组件 初始数据
      currentValue: '',
    };
  }

  componentWillReact() { }

  componentDidMount() {
    this.initData();
  }

  initData = () => {
    const { globalStore: { data: { userInfo } } } = this.props;
    this.setState({
      currentValue: userInfo.nickName || ''
    });

  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  changeInput = (e) => {
    this.setState({
      currentValue: e.detail.value
    })
  }

  clearInput = () => {
    this.setState({
      currentValue: ''
    })
  }
  onSave = () => {
    const { currentValue } = this.state;
    const { globalStore } = this.props;
    /**
     * 接口参数 数据类型定义
     */
    const Interface = paramType.chain()
      .add('currentValue')
      .rule('required', true, '请填写昵称')
      .rule('string')
      .end()
      .toConfig();

    if (paramType({ currentValue }, Interface, message.warn)) {
      const formData = {
        nickName: currentValue
      }
      Model.my.updateBaseInfo(formData).then(resModel => {
        if (resModel) {
          const userInfo = globalStore.data.userInfo;
          Object.assign(userInfo, formData);
          globalStore.setData('userInfo', userInfo, 'edit-info.jsx,line:63');
          message.success('修改成功');
          setTimeout(() => {
            Taro.navigateBack()
          }, 1000)
        }
      });
    }
  }

  render() {
    const { currentValue } = this.state;
    return (
      <View className={styles.container}>
        <View className={styles.title}>修改昵称</View>
        <View className={styles.value}>
          <Input className={`${styles.cellInput} ${styles.singleEllipsis}`} type='text'
            maxLength={15} name='nickname'
            placeholder='请输入昵称' value={currentValue}
            placeholderClass={styles.placeholderStyle}
            onInput={(e) => this.changeInput(e)}
          ></Input>
          <View onClick={this.clearInput} className={`iconfont ${styles.icon}`}>&#xe6f7;</View>
        </View>
        <View className={styles.saveBtn} onClick={this.onSave}>保存修改</View>
      </View >
    );
  }

}

export default EditInfo;
