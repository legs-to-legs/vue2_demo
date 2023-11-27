const path = require('path')
// const { config } = require('process')
function resolve (dir) {
  return path.join(__dirname, dir)
}

const CompressionWebpackPlugin = require('compression-webpack-plugin');

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
    config.resolve.alias.set('@', resolve('src')),
    config.plugin("CompressionWebpackPlugin").use(new CompressionWebpackPlugin({
      algorithm: 'gzip', // 使用gzip压缩
      test: /\.js$|\.html$|\.css$/, // 匹配文件名
      filename: '[path].gz[query]', // 压缩后的文件名(保持原文件名，后缀加.gz)
      minRatio: 1, // 压缩率小于1才会压缩
      threshold: 10240, // 对超过10k的数据压缩
      deleteOriginalAssets: false, // 是否删除未压缩的源文件，谨慎设置，如果希望提供非gzip的资源，可不设置或者设置为false（比如删除打包后的gz后还可以加载到原始资源文件）
    }))
  }
}
