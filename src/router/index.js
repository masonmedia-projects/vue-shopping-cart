import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Welcome from '../views/Welcome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/get-started',
    name: 'GetStarted',
    component: () => import(/* webpackChunkName: "get-started" */ '../views/GetStarted.vue')
  },
  {
    path: '/my-plan',
    name: 'MyPlan',
    component: () => import(/* webpackChunkName: "my-plan" */ '../views/MyPlan.vue')
  },
  {
    path: '/my-history',
    name: 'MyHistory',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "my-history" */ '../views/MyHistory.vue')
  },
  {
    path: '/food-details',
    // path: '/food-details/:id',
    name: 'FoodDetails',
    component: () => import(/* webpackChunkName: "about" */ '../views/FoodDetails.vue')
  },
  {
    path: '/item-details/:id',
    name: 'ItemDetails',
    component: () => import(/* webpackChunkName: "item-details" */ '../views/ItemDetails.vue')
  },
  {
    path: '/:catchAll(.*)*',
    name: "PageNotFound",
    component: () => import(/* webpackChunkName: "page-not-found" */ '../views/PageNotFound.vue')
  },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,  
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 1000)
    })
  }
  
})

export default router
