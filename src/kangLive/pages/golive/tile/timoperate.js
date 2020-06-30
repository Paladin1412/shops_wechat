
import TIM from 'tim-wx-sdk';
import Taro from '@tarojs/taro';
import Model from '@/model';

export default function TimOprate() {
  /**
   * 发送自定义消息
  */
  this.dealSendMessage = function () {
    const { strInputText, liveDetail, identifier } = this.state;
    const userInfo = this.props.globalStore.data.userInfo;
    if (strInputText) {
      // 清除空格
      const str = strInputText.replace(/\s*/g, '')
      if (!str || str === '' || str === undefined || str.length === 0) {
        return
      }
      // 在本地先更新一条消息
      const objChat = {
        type: 'CHAT_MSG',
        name: userInfo.nickName ? userInfo.nickName : `游客_${identifier}`,
        text: strInputText,
        avatar: userInfo.headImg ? userInfo.headImg : 'https://static.wchoosemall.com/platform/manager/pic/20200317/11128503680065013.png',
        userType: userInfo.userType || 0
      }
      this.fillArrChat(objChat);
      let message = this.objTim.createCustomMessage({
        to: liveDetail.chatGroupId,
        conversationType: TIM.TYPES.CONV_GROUP,
        payload: {
          data: JSON.stringify({
            'msgType': 1,
            'operatorName': userInfo.nickName ? userInfo.nickName : `游客_${identifier}`,
            'operatorAdverImg': userInfo.headImg ? userInfo.headImg : 'https://static.wchoosemall.com/platform/manager/pic/20200317/11128503680065013.png',
            'value': 0,
            'chatContent': strInputText,
            'userType': userInfo.userType || 0,
            'executedUserId': userInfo.id,
          })
        }
      })
      let promise = this.objTim.sendMessage(message);
      console.log('promise', this.objTim);
      // this.inputFocusState = false  //看看是否有需求失去焦点
      const that = this;
      promise.then(function () {
        that.saveTextMsg(userInfo.id, liveDetail.id, strInputText);
      }).catch(function (imError) {
        console.warn('sendMessage error: ', imError)
      })
    }
  }.bind(this);


  /**
   * 后台保存一条消息
   */

  this.saveTextMsg = function (userId, liveId, strInputText) {
    const currentData = {
      userId: userId,
      liveId: liveId,
      content: strInputText,
      userType: 0
    }
    Model.liveapi.addChatRecord(currentData).then(res => {
      if (!res) return false;
      this.setState({
        strInputText: '',
        chatInputPopup: false,
        focusMes: false,
      })
    })
  }.bind(this);
}