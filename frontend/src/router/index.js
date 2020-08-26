import Vue from 'vue'
import VueRouter from 'vue-router'

import Transfer from '../components/Transfer'
import Home from '../views/Landing'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    name: 'Home',
    component: Home,
    path: '/'
  }, {
    name: 'Transfer',
    component: Transfer,
    path: '/transfer'
  }]
})

// Export router
export default router
