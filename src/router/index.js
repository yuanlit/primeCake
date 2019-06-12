import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/',
    name: '/',
    meta: {
      keepAlive: true
    },
    component: resolve => require(['@/components/home'], resolve),
    redirect: '/index',
    children: [{
        path: 'index',
        name: 'index',
        meta: {
          keepAlive: true,
          title:"贝思客蛋糕"
        },
        component: resolve => require(['@/components/main/index'], resolve)
      },
      {
        path: 'classify',
        name: 'classify',
        meta: {
          keepAlive: true,
          title:"列表"
        },
        component: resolve => require(['@/components/main/classify'], resolve)
      },
      {
        path: 'cartList',
        name: 'cartList',
        meta: {
          keepAlive: true,
          title:"购物车"
        },
        component: resolve => require(['@/components/main/cartList'], resolve)
      },
      {
        path: 'about_me',
        name: 'about_me',
        meta: {
          keepAlive: true,
          title:"我的"
        },
        component: resolve => require(['@/components/main/mine'], resolve)
      },
      {
        path: 'mine',
        name: 'mine',
        component: resolve => require(['@/components/main/mine'], resolve)
      }, ,
      //详情页
      {
        path: 'show',
        name: 'show',
        component: resolve => require(['@/components/main/show'], resolve),
      }
    ]
  }]
})

router.beforeEach((to, from, next) => {
  console.log('全局路由监听_路由跳转之前')
  if (to.path === '/') {
    console.log('OK')
    if (location.search.indexOf('u') !== -1) {
      next({
        path: '/test'
      })
    } else if (location.search.indexOf('s') !== -1) {
      next({
        path: '/news'
      })
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
