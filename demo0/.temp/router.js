import Vue from 'vue'
/* global Vue */
import Router from 'vue-router'
import Home from '@/views/Home'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
