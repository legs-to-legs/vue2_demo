import router from './router'
import store from './store'
import { setStore, getStore, removeStore } from './utils/auth'
import { getUserInfo } from '@/apiMock'
// nprogress 跳转页面顶部进度条

const whiteList = ['/home', '/middlepage', '/testmodel', '/testmodel/model']

router.beforeEach(async (to, from, next) => {
  console.log('to=', to)
  // 判断是否登录
  const hasToken = getStore('token')
  console.log('hasToken==', hasToken)
  if (to.path === '/home') {
    next()
  } else {
    if (hasToken) {
      const hasName = store.getters.userInfo?.userName || ''
      if(hasName) {
        next()
      } else {
        // 调用获取用户信息接口
        try {
          const { record } = await getUserInfo()
          setStore('userName', record.userName)
          setStore('workId', record.workId)
          store.dispatch('user/setInfo', record)
          store.dispatch('route/addRoute', record.menus)
          next({...to, replace: true})
        } catch (error) {
          console.log('getUserInfo--error', error)
          removeStore('userName')
          removeStore('workId')
          store.dispatch('user/setInfo', {})
        }
      }
    } else {
      if (whiteList.includes(to.path)) {
        // 如果要跳转的地址在白名单内则继续进入
        next()
      } else {
        // 无权访问的页面重定向到首页
        next('/home')
      }
    }

  }
})
