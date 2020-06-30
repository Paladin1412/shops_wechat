// 基础 配置

const env = process.env.NODE_ENV;

export default {
  // 公众号 信息
  // appId: 'wx2b9d7d5e14e53d1f',
  // appSecret: 'a361af8be583c3530c28f617b455e383',
  // 小程序版本号
  version: '1.3.2',
  env,
  // 图片访问域名
  imgHost: env === 'production' ? 'https://jxkcdn.jingxiaokang.com' : 'https://test-static.jdxiaokang.com',
  // 文件下载域名
  downImgHost: 'https://public-jingxiaokang.oss-accelerate.aliyuncs.com',
  // 按要求文件名下载文件
  dowmImgUrl: 'https://web-service.jingxiaokang.com/common/download',
  // 跨域访问文件
  crossFile: 'https://web-service.jingxiaokang.com/common/cross/index',
  // 当前域名
  webHost: env === 'production' ? 'https://shop.kangxiaopu.com' : 'https://daily-shop.kangxiaopu.com',
  // 消息订阅 模板
  subscribe: [{
    id: 'bWJlk4-MLRUODrajHinIixJuC3ABytdDkwEHBAJwGbc',
    name: '下单成功提醒'
  },{
    id: 'PUxU2RlgWV2-irVWInnBvzQnIG2a3z769rqSjL_02-4',
    name: '售后状态通知'
  }/*,{
    id: '0GjEo6jyh5LfFJD3Wgt5UbJP8vTD13Y6tYZoln-zy-Y',
    name: '佣金结算通知'
  }*/,{
    id: 'VgOA9yyEVLUSjRCK2tnSbtNHCXyqX_e_Yeky7gmQkdk',
    name: '订单发货通知'
  }]
}