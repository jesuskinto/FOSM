import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/components/Home').default
    },
    {
      path: '/level',
      name: 'level',
      component: require('@/components/Level').default
    },
    {
      path: '/activity',
      name: 'activity',
      component: require('@/components/Activity').default
    },
    {
      path: '/profile',
      name: 'profile',
      component: require('@/components/Profile').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
