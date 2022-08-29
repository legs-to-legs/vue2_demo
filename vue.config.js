const path = require('path')
// const { config } = require('process')
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: process.env.VUE_APP_BASE_URL, // 根地址 看环境变量配置里的VUE_APP_BASE_URL
  outputDir: 'dist', // 打包目录
  assetsDir: 'assets', // 静态资源目录
  lintOnSave: true,
  productionSourceMap: false, // 建议生产关闭
  //  - Network: unavailable
  // 输入 ip地址:8080 即可打开页面
  //  不同网络环境下记得切换ip地址
  devServer: {
    // open: true,
    host: '0.0.0.0', // 主机端口 '0.0.0.0'默认主机
    public: '21.239.62.214', // 该网络地址为你自己的ip地址
    port: '8080',
    https: false,
    hotOnly: true
    // 涉及跨域
    // proxy: {
    //     '/test': {
    //         target: '...',
    //         changeOrigin: true,
    //         pathRewrite: {
    //             '^/test': '/test'
    //         }
    //     }
    // }
  },
  // 别名
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src'))
  }
}
