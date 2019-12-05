import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        redirect: '/RSA'
    },
    {
      path: '/Home',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      meta: { title: '路由描述' },
      children: [
        {
          path: '/RSA',
          component: resolve => require(['../components/page/RSA.vue'], resolve),
          meta: { title: 'RSA' }
        },
        {
          path: '/AES',
          component: resolve => require(['../components/page/AES.vue'], resolve),
          meta: { title: 'AES' }
        },
        {
          path: '/DigitalSign',
          name: 'DigitalSign',
          component: resolve => require(['../components/page/DigitalSign.vue'], resolve),
          meta: { title: 'Digital Sign' }
        },
      ]
    },
  ]
})
