import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Customers from '@/components/Customers'
import About from '@/components/About'
import Header from '@/components/widget/Header'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Header
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/Header',
      name: 'Header',
      component: Header
    }
  ]
})
