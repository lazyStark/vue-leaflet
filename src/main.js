/*
 * @Author: siwenfeng
 * @Date: 2019-11-07 11:07:08
 * @LastEditTime: 2019-11-27 10:40:35
 * @Description: this is ....
 */
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './permission'; // 权限
import ElementUI from 'element-ui'
// import i18n from './lang' // Internationalization
// import VueBus from '@/utils/vue-bus';
import './styles/common.scss'
import { loadStyle } from './utils/util'
import {
  iconfontUrl,
  iconfontVersion
} from '@/config/env'
import basicContainer from './components/basic-container/main'
// eslint-disable-next-line no-unused-vars
import mock from '@/mock'

Vue.config.productionTip = false

// 注册全局容器
Vue.component('basicContainer', basicContainer)
Vue.use(ElementUI);
// Vue.use(VueBus) // 总线
// 动态加载阿里云字体库
iconfontVersion.forEach(ele => {
  loadStyle(iconfontUrl.replace('$key', ele));
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
