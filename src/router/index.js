import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/reto-1',
    name: 'Reto-1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "reto-1" */ '../views/Reto-1.vue')
  },
  {
    path:'/reto-2',
    name:'Reto-2',
    component: () => import(/* webpackChunkName: "reto-2" */ '../views/Reto-2.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
