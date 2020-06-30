/**
 * @Author: chunxiao.zhang
 * @Email: chunxiao.zhang@jdxiaokang.com
 * @Update: 2020-02-25 18:23:38
 * @Description: 修改个人资料
 */
import Taro from '@tarojs/taro';
import { AtImagePicker } from 'taro-ui';
import { View, Image } from '@tarojs/components';
import { message, paramType } from '@jxkang/wechat-utils';
import withPage from '@/components/with-page';
import Model, { getFetchHeader } from '@/model';
import Utils, { imgshare } from '@/utils';
import styles from './personinfo.module.styl';


@withPage
class Personinfo extends Taro.Component {
  constructor(props) {
    super(props);

    this.config = {
      navigationBarTitleText: '个人资料',
    }

    this.state = {
      formData: {}
    };
  }

  componentDidShow() {
    const { globalStore: { data: { userInfo } } } = this.props;
    this.setState({
      formData: {
        headImg: userInfo.headImg,
        nickName: userInfo.nickName
      }
    });
  }

  onChangeUpload = (files) => {

    const { file } = files[0];
    const { size } = file;
    const arr = file.path.split('.')
    const extension = arr[arr.length - 1]
    // if (type.indexOf('image') !== 0) {
    //   return message.warn('请上传图片文件');
    // } else
    if (size > 5242880) {
      return message.warn('请上传5M以内的图片');
    }
    message.loading('正在上传');
    Taro.uploadFile({
      url: Model.common.upload(),
      name: 'file',
      filePath: file.path,
      header: getFetchHeader(),
      formData: {
        extension
      }
    }).then(resData => {
      const resModel = JSON.parse(resData.data);
      if (resModel.responseCode !== 0) {
        return message.warn(resModel.message);
      } else {
        Taro.hideToast();
        const { formData } = this.state;
        formData.headImg = resModel.entry.filePath;
        this.setState({
          formData
        }, () => {
          this.onSave()
        });
      }
    });
  }

  enterEdit = () => {
    Taro.navigateTo({
      url: '/pages/edit-info/edit-info'
    })
  }

  /**
   * 保存个人信息
   */
  onSave = () => {
    const { formData } = this.state;
    const { globalStore } = this.props;

    /**
     * 接口参数 数据类型定义
     */
    const Interface = paramType.chain()
      .add('headImg')
      .rule('required', true, '请上传图片')
      .rule('string')
      .end()
      .toConfig();

    if (paramType(formData, Interface, message.warn)) {
      const data = {
        headImg: formData.headImg
      }
      Model.my.updateBaseInfo(data).then(resModel => {
        if (resModel) {
          const userInfo = globalStore.data.userInfo;
          Object.assign(userInfo, data);
          globalStore.setData('userInfo', userInfo, 'personinfo.jsx,line:103');
          message.success('操作成功');
          this.editShareInfo(); // 头像改变时，删除本地缓存的分享图片
        }
      });
    }
  }
  editShareInfo = () => {
    const { globalStore } = this.props;
    const { shareImgInfo } = globalStore.data;
    shareImgInfo.shopShareUrl = '';
    shareImgInfo.codeShareUrl = '';
    shareImgInfo.avatarImg = '';
    globalStore.setData('shareImgInfo', shareImgInfo, 'personinfo.jsx,line:167');
    imgshare.init();
  }

  render() {
    const { formData } = this.state;

    return (
      <View className={styles.container}>
        <View className={`${styles.list} last`}>
          <View className={styles.cellTitle}>头像</View>
          <View className={styles.head_img}>
            <Image src={Utils.appUtils.getFileUrl(formData.headImg)} className={styles.user_photo} />
            <AtImagePicker
              className={styles.upload}
              onChange={this.onChangeUpload}
              multiple={false}
              count={1}
            />
          </View>
          <View className={`iconfont ${styles.icon}`}>&#xe694;</View>
        </View>
        <View className={`${styles.list} last`} onClick={this.enterEdit}>
          <View className={styles.cellTitle}>昵称</View>
          <View className={`${styles.cellTitle} ${styles.nickname}`}>
            {formData.nickName}
          </View>
          <View className={`iconfont ${styles.icon}`}>&#xe694;</View>
        </View>
      </View >
    );
  }

}

export default Personinfo;
