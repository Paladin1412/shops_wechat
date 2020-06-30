import Taro from '@tarojs/taro';

class YunApi {

  getOpenId = () => {
    return Taro.cloud.callFunction({
      name: 'getuserinfo',
      data: {},
    }).then(d => {
      console.log(d)
    });
  }

  
  add = (x=1,y=1) => {
    return Taro.cloud.callFunction({
      name: 'add',
      data: {
        x,
        y
      },
    });
  }

}

export default new YunApi();