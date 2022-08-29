import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/mock'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import less from 'less'

// 全局过滤器
import * as filters from './filters'

Vue.use(ElementUI)
Vue.use(less)
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
