module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  mini: {},
  h5: {
    devServer: {
      // host: 'localhost',
      disableHostCheck: true,
      port: 4251,
      // publicPath: '/public'
      contentBase: 'public'
    },
  }
}
