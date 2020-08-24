import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Transfer from '../components/Transfer'
import Home from '../views/Landing'

let router = new VueRouter({
    routes: [{
        name: "Home",
        component: Home,
        path: '/home'
      }, {
        name: "Transfer",
        component: Transfer,
        path: '/transfer'
      }]
})

//Export router
export default router