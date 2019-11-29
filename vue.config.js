/*
 * @Author: siwenfeng
 * @Date: 2019-11-06 14:56:04
 * @LastEditTime: 2019-11-27 16:38:42
 * @Description: this is ....
 */
module.exports = {
  // 是否在保存的时候检查
  lintOnSave: true,
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // 忽略打包的文件
  chainWebpack: (config) => {
    config.externals({
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      'axios': 'axios',
      'element-ui': 'ELEMENT'
    })
    const entry = config.entry('app')
    entry
      .add('babel-polyfill')
      .end()
    entry
      .add('classlist-polyfill')
      .end()
    entry
      .add('@/mock')
      .end()
  },
  configureWebpack: () => {},
  devServer: {
    // 端口配置
    port: 8028,
    // 反向代理配置
    proxy: {
      '/api': {
        target: 'http://localhost',
        ws: true, // 是否启用websockets
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}
