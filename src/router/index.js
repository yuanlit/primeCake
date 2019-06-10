import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: '/',
      meta: {
        keepAlive: true
      },
      component: resolve => require(['@/components/home'], resolve),
      redirect: '/index',
      children: [
        { path: 'index',
          name: 'index',
          component: resolve => require(['@/components/main/index'], resolve) },
        { path: 'news',
          name: 'news',
          component: resolve => require(['@/components/main/lay_news'], resolve),
          children: [
            { path: '/news/china_news',
              name: 'china_news',
              component: resolve => require(['@/components/children/china_news'], resolve) },
            { path: '/news/other_news',
              name: 'other_news',
              component: resolve => require(['@/components/children/other_news'], resolve) }
          ]
        },
        { path: 'info',
          name: 'info',
          component: resolve => require(['@/components/main/lay_info'], resolve) },
        { path: 'about_me',
          name: 'about_me',
          component: resolve => require(['@/components/main/about_me'], resolve) },
        { path: 'call_me',
          name: 'call_me',
          component: resolve => require(['@/components/main/call_me'], resolve) }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log('全局路由监听_路由跳转之前')
  if (to.path === '/') {
    console.log('OK')
    if (location.search.indexOf('u') !== -1) {
      next({path: '/test'})
    } else if (location.search.indexOf('s') !== -1) {
      next({path: '/news'})
    } else {
      next()
    }
  } else {
    next()
  }
})

// 全局路由钩子二 跳转之后钩子执行函数

router.afterEach((to, from, next) => {
  console.log('全局路由监听_跳转之后')
})

export default router
