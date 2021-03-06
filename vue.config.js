const path = require('path')
const config = require('./my.config');
module.exports = {
  outputDir:'demo1',
  publicPath: config.publicPath,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src')
      }
    },
    //关闭 webpack 的性能提示
    performance: {
      hints:false
    },
    externals: { // CDN配置

    }
  },
  devServer: {
    host: config.devHost,
    port: '8081',
    open: true,
    // proxy: {
    //   '/': {
    //     // target: '', // 代理服务器地址
    //     ws: true, // websockets
    //     changeOrigin: true,
    //   }
    // }
  }
}