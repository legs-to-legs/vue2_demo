import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Layout from '@/views/login/index' // 顶部导航
import Home from '@/views/login/main'
import middlePage from '@/views/middlePage/index'

// vue-router是基于路由和组件的
// 路由用户设定访问路径的，将路径和组件映射起来。
// 在vue-router的单页面应用中，页面的路径的改变就是组件的切换

/**
 * 全局路由守卫 所有的路由切换都会执行
 * beforeEach 前置守卫
 * afterEach 后置守卫
 * beforeResolve 解析守卫
 * 
 * 路由的守卫
 * beforeRouterEnter 进入组件之前出发 created之前 不能获取组件实例
 * beforeRouterUpdated 路由更新但是内容不会改变
 * beforeRouterLeave 离开之前触发 在beforeDestory之前触发
 * 
 * 路由独享守卫
 * beforeEnter 读取路由信息
 * 
 * 进入前置守卫beforeEach---->读取路由信息beforeEnter------>进入组件beforeRouterEnter------>进行解析beforeResolve----->进入后置守卫afterEach
 * 
 * to 去哪里
 * from 从哪里来
 * next next(false) 表示不能通过  next('/login') 跳转到该地址对应的页面
 * 不写next()默认不通过
 * 
 * 路由守卫案例：
 * 实现页面权限控制
 * 菜单白名单设置
 * 新建、修改、删除菜单 编辑菜单状态
 * 
 */

Vue.use(VueRouter)

export const constantRoute = [
  {
    path: '/',
    meta: { title: '首页' },
    component: Layout,
    hidden: true,
    redirect: '/home',
    children: [
      {
        path: '/home',
        meta: { title: '首页' },
        component: Home
      }
    ],
    // beforeEnter: (to, from, next) => {
    //   console.log('路由独享守卫的enter---2')
    //   next()  // 不写next()默认不通过 显示空页面
    // }
  },
  {
    path: '/middlepage',
    meta: { title: '中间页' },
    component: middlePage,
    hidden: true
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  // {
  //   path: '/mockdata',
  //   name: 'mockData',
  //   component: () => import('../views/mockdata.vue')
  // },{
  //   path: '/testemit',
  //   name: 'testEmit',
  //   component: () => import('../views/testEmit/fatheremit.vue')
  // },{
  //   path: '/testmap',
  //   name: 'testmap',
  //   component: () => import('../views/testGaode/index.vue')
  // }, {
  //   path: '/testslot',
  //   name: 'testslot',
  //   component: () => import('../views/testSlot/index.vue')
  // }, {
  //   path: '/testsiderbar',
  //   name: 'testsiderbar',
  //   component: () => import('../views/components/3.侧边导航栏/index.vue')
  // }
]

const router = new VueRouter({
  routes: constantRoute
})

// // 全局的前置守卫
// router.beforeEach((to, from, next) => {
//   console.log('前置路由守卫beforeEach---1')
//   next()
// })

// // 全局解析守卫
// router.beforeResolve((to, from, next) => {
//   console.log('全局解析守卫beforeResolve---3')
//   next()
// })

// // 后置路由守卫
// router.afterEach((to, from) => {
//   console.log('后置路由守卫afterEach---4')
// })


export default router
