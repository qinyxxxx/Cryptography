import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        redirect: '/RSA_1'
    },
    {
      path: '/Home',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      meta: { title: '路由描述' },
      children: [
        {
          path: '/RSA_1',
          component: resolve => require(['../components/page/RSA_1.vue'], resolve),
          meta: { title: 'Generate Keys' }
        },
        {
          path: '/RSA_2',
          component: resolve => require(['../components/page/RSA_2.vue'], resolve),
          meta: { title: 'Exchange Public Keys' }
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
