/*
 * @Author: siwenfeng
 * @Date: 2019-11-19 15:11:01
 * @LastEditTime: 2019-11-26 10:59:29
 * @Description: this is ....
 */
import router from './router'
import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import {
  getToken
} from '@/utils/auth'

NProgress.configure({
  showSpinner: false
})
router.beforeEach(async (to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  NProgress.start()
  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      next({
        path: '/'
      })
      NProgress.done()
    } else {
      if (store.getters.menu.length === 0) {
        next()
      } else {
        next('/login')
      }
    }
  } else {
    if (to.path === '/login') { // 如果是登录页面，直接进入
      next()
    } else {
      next('/login') // 否则全部重定向到登录页
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
