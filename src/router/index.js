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
          path: '/RSA_3',
          component: resolve => require(['../components/page/RSA_3.vue'], resolve),
          meta: { title: 'Secure Your Communication With Keys!' }
        },
        {
          path: '/AES_1',
          component: resolve => require(['../components/page/AES_1.vue'], resolve),
          meta: { title: 'Generate A Shared Secret' }
        },
        {
          path: '/AES_2',
          component: resolve => require(['../components/page/AES_2.vue'], resolve),
          meta: { title: 'Secure Your Communication With Your Key!' }
        },
        {
          path: '/DigitalSign_1',
          component: resolve => require(['../components/page/DigitalSign_1.vue'], resolve),
          meta: { title: 'Generate Keys' }
        },
        {
          path: '/DigitalSign_2',
          component: resolve => require(['../components/page/DigitalSign_2.vue'], resolve),
          meta: { title: 'Sign Messages And Send It' }
        },
        {
          path: '/DigitalSign_3',
          component: resolve => require(['../components/page/DigitalSign_3.vue'], resolve),
          meta: { title: 'Validate Messages' }
        },
      ]
    },
  ]
})
