import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// vue-router是基于路由和组件的
// 路由用户设定访问路径的，将路径和组件映射起来。
// 在vue-router的单页面应用中，页面的路径的改变就是组件的切换

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/mockdata',
    name: 'mockData',
    component: () => import('../views/mockdata.vue')
  },{
    path: '/testemit',
    name: 'testEmit',
    component: () => import('../views/testEmit/fatheremit.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
