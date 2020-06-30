const path = require('path');
const cp = require('child_process');

const { TARO_ENV, NODE_ENV, SYS_ENV } = process.env;
const pro_cwd = process.cwd();

const config = {
  projectName: 'shops_wechat',
  date: '2020-1-25',
  designWidth: 750,
  deviceRatio: {
    '640': 2.34 / 2,
    '750': 1,
    '828': 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: `dist/${TARO_ENV}`,
  babel: {
    sourceMap: true,
    presets: [
      ['env', {
        modules: false
      }]
    ],
    plugins: [
      'transform-decorators-legacy',
      'transform-class-properties',
      'transform-object-rest-spread',
      ['transform-runtime', {
          helpers: false,
          polyfill: false,
          regenerator: true,
          moduleName: 'babel-runtime'
        }
      ]
    ]
  },
  alias: {
    '@': path.resolve(pro_cwd, 'src')
  },
  defineConstants: {
  },
  mini: {
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
          browsers: [
            'last 3 versions',
            'Android >= 4.1',
            'ios >= 8'
          ]
        }
      },
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 10240 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    compile: {
      exclude: [
        require.resolve('tim-wx-sdk')
      ]
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    esnextModules: ['taro-ui'], // ['taro-ui','weui']
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
          browsers: [
            'last 3 versions',
            'Android >= 4.1',
            'ios >= 8'
          ]
        }
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },webpackChain(chain, webpack){
      const now = Date.now();
      chain.output.filename(`js/[name]_${now}.js`);
      chain.output.chunkFilename(`chunk/[name]_${now}.js`);
    }
  }
}

module.exports = function (merge) {
  setTimeout(function(){
    cp.execSync(`cd ${pro_cwd} && rm -rf ./package-lock.json && cp -r funcs sitemap.json dist/weapp`);
  },3000);
  if (NODE_ENV === 'development') {
    return merge({}, config, require('./dev'), {env:{NODE_ENV:JSON.stringify(SYS_ENV)}});
  }
  return merge({}, config, require('./prod'), {env:{NODE_ENV:JSON.stringify(SYS_ENV)}});
}
