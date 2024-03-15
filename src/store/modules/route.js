import { constantRoute } from '@/router'
import Layout from '@/views/login/index' // 顶部导航
import router from '@/router'

const loadView = (view) => {
  // 要先截取出/views之后的路径再拼接.vue ,否则会报错
  if (view && view !== '') view = view.replace('/views/', '')
  // 路由懒加载
  return (resolve) => require([`@/views/${view}.vue`], resolve)
}

const routerView = () => {
  return (resolve) => require([`@/views/redirect/routerView.vue`], resolve)
}

export function filterAsyncRoutes(routes) {
  var res = []
  routes.map((item) => {
    // 排除一级不可用目录
    if (!item.path) return
    var obj
    // 一级菜单
    obj = {
      path: item.path,
      hidden: Boolean(item.visible),
      component: Layout,
      meta: {
        title: item.name,
        id: item.id,
        type: item.menuType
      },
      children: []
    }
    
    var objC = []
    item.children.map((child) => {
      if (!child.path) return
      var childObj
      if (child.children && child.children.length > 0) {
        childObj = {
          path: item.path + child.path,
          hidden: Boolean(child.visible),
          component: routerView(),
          meta: {
            title: child.name,
            id: child.id,
            type: child.menuType
          },
          children: []
        }
        var childObjC = []
        // 三级菜单
        child.children.map((grand) => {
          if (!grand.path) return
          childObjC.push({
            path: item.path + child.path + grand.path,
            hidden: Boolean(grand.visible),
            component: loadView(grand.componentPath),
            meta: {
              title: grand.name,
              id: grand.id,
              newScenaries: grand.newScenaries,
              type: grand.menuType
            }
          })
        })
        if (childObjC.length) childObj.children = childObjC
      } else {
        // 二级菜单
        childObj = {
          path: item.path + child.path,
          hidden: Boolean(child.visible),
          component: loadView(child.componentPath),
          meta: {
            title: child.name,
            id: child.id,
            newScenaries: child.newScenaries,
            type: child.menuType
          },
          children: []
        }
      }
      objC.push(childObj)
    })
    if (objC.length) obj.children = objC || []
    res.push(obj)
  })
  return res
}

const state = {
  routes: constantRoute
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.routes = constantRoute.concat(routes)
    routes.forEach(item => {
      router.addRoute(item);
    })// 添加到全局路由对象里
    // console.log('permission-routes', state.routes, router)
  }
}

const actions = {
  addRoute: ({ commit }, routes) => {
    const newRoutes = filterAsyncRoutes(routes)
    commit('SET_ROUTES', newRoutes)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}