/*
 * @Author: siwenfeng
 * @Date: 2019-11-26 10:09:34
 * @LastEditTime: 2019-11-28 16:31:38
 * @Description: this is ....
 */
import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/page/index'
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/page/login/index'),
      meta: {
        title: '登录',
        keepAlive: true
      }
    },
    {
      path: '/404',
      component: () => import('@/components/error-page/404'),
      name: '404',
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/403',
      component: () => import('@/components/error-page/403'),
      name: '403',
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/500',
      component: () => import('@/components/error-page/500'),
      name: '500',
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/',
      name: '主页',
      redirect: '/wel'
    },
    {
      path: '/wel',
      component: Layout,
      redirect: '/wel/index',
      children: [{
        path: 'index',
        name: 'home',
        meta: {
          title: '首页'
        },
        component: () => import('@/views/wel')
      }]
    },
    {
      path: '/one-map',
      component: Layout,
      redirect: '/one-map/index',
      children: [
        {
          path: 'index',
          name: 'one-map',
          meta: {
            title: '一张图'
          },
          component: () => import('@/page/one-map')
        }
      ]
    },
    {
      path: '/konwledge-base',
      component: Layout,
      redirect: '/konwledge-base/index',
      children: [
        {
          path: 'index',
          name: 'konwledge-base',
          meta: {
            title: '知识库'
          },
          component: () => import('@/page/konwledge-base')
        }
      ]
    },
    {
      path: '/data-service',
      component: Layout,
      redirect: '/data-service/index',
      children: [
        {
          path: 'index',
          name: 'data-service',
          meta: {
            title: '数据服务'
          },
          component: () => import('@/page/data-service')
        }
      ]
    },
    {
      path: '/seo',
      component: Layout,
      redirect: '/seo/index',
      children: [
        {
          path: 'index',
          name: 'seo',
          meta: {
            title: '综合查询',
            keepAlive: true
          },
          component: () => import('@/page/seo')
        }
      ]
    },
    {
      path: '/valuation-analysis',
      component: Layout,
      redirect: '/valuation-analysis/index',
      children: [
        {
          path: 'index',
          name: 'valuation-analysis',
          meta: {
            title: '评估分析'
          },
          component: () => import('@/page/valuation-analysis')
        }
      ]
    },
    {
      path: '/warning-analysis',
      component: Layout,
      redirect: '/warning-analysis/index',
      children: [
        {
          path: 'index',
          name: 'warning-analysis',
          meta: {
            title: '预警分析'
          },
          component: () => import('@/page/warning-analysis')
        }
      ]
    },
    {
      path: '/myiframe',
      component: Layout,
      redirect: '/myiframe',
      children: [{
        path: ":routerPath",
        name: 'iframe',
        component: () => import('@/components/iframe/main')
      }]
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]

});
