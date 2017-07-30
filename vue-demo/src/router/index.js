import Vue from 'vue'
import Router from 'vue-router'
import pageOne from '@/pages/page-one'
import pageTwo from '@/pages/page-two'
import pageThree from '@/pages/page-three'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pageOne',
      component: pageOne
    },
    {
      path: '/pageTwo',
      name: 'pageTwo',
      component: pageTwo
    },
    {
      path: '/pageThree',
      name: 'pageThree',
      component: pageThree
    }
  ]
})
