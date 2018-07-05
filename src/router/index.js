import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/contacts/create',
      name: 'contacts.create',
      component: require('@/components/Contact/VcCreate')
    },
    {
      path: '/soccer_expert',
      name: 'soccer_expert.index',
      component: require('@/components/SoccerExpert/VcIndex')
    }
  ],
  mode: 'history'
})
