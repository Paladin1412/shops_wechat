import Taro from '@tarojs/taro';
import { AtImagePicker, AtToast } from 'taro-ui';
import { View } from '@tarojs/components';
import { message } from '@jxkang/wechat-utils';
import { appUtils } from '@/utils';
import Model from '@/model';

const { getFileUrl, navigateToLogin } = appUtils;

class Collect extends Taro.Component {
  constructor(props) {
    super(props);

    this.config = {
      navigationBarTitleText: '',
    }

    this.state = {
      // 界面/组件 初始数据
      files: [],
      isloading: false
    };
  }




  componentDidMount() {
  }
  click = () => {
    if (this.props.onClick) {
      this.props.onClick()
    }
  }

  onChangeFile = (list, operationType, index) => {
    const { files } = this.state
    if (operationType === 'remove') {
      files.splice(index, 1)
      this.setState({
        files,
      })
      this.props.onRemove(index)
    }
    if (operationType === 'add') {
      if (list) {
        const info = list.slice(-1)
        const {
          // type,
          size } = info[0].file
        const arr = info[0].file.path.split('.')
        const extension = arr[arr.length - 1]
        const { maxSize } = this.props
        // const extension = type.replace(/.+\//, '')
        if (typeof maxSize === 'number' && size > maxSize) {
          const uni = maxSize / 1024 / 1024 > 1 ? `${maxSize / 1024 / 1024}M` : `${maxSize / 1024}KB`;
          message.error(`上传文件大小已超过${uni}`);
          return false;
        }
        this.setState({
          isloading: true
        })
        Taro.uploadFile({
          url: Model.common.upload(),
          name: 'file',
          filePath: info[0].file.path,
          header: {
            token: Taro.getStorageSync('userInfo').token || ''
          },
          formData: {
            extension
          }
        }).then(res => {
          const { entry, responseCode } = JSON.parse(res.data)
          if (entry) {
            if (this.props.showList !== false) {
              files.push({
                url: getFileUrl(entry.filePath)
              })
            }
            this.setState({
              files,
              isloading: false
            }, () => {
              this.props.onSuccess(entry.filePath)
            })
          } else if (`${responseCode}` === '1000010003' || `${responseCode}` === '1000010001' || `${responseCode}` === '1000010002') {
            navigateToLogin({
              desc: '[system] file:cmpt/upload.jsx line:80'
            });
          }

        })
      }
    }
  }


  render() {
    const { files, isloading } = this.state
    return (
      <View>
        <AtImagePicker
          files={files}
          showAddBtn={files.length < (this.props.size || 1)}
          {...this.props.option}
          onImageClick={this.click}
          onChange={this.onChangeFile}
        />
        <AtToast isOpened={isloading} text='正在上传' icon='loading' status='loading' duration={0}></AtToast>
      </View>

    );
  }

}

export default Collect;
