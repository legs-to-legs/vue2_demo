import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/mock'
import "@/styles/index.less"

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import less from 'less'

// 全局过滤器
import * as filters from './filters'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
/*
  Object.keys(obj) 返回属性名数组
  Object.keys(str) Object.keys(arr) 返回索引数组
  Object.keys(fun())  返回[] 或者属性名数组
*/

// 全局注册组件
import testModel from '@/views/components/2.v-model自定义事件/index.vue'
Vue.component('testModel', testModel)

import './permission' // 触发 permission.js 文件

import Bus from 'vue-bus'
Vue.use(Bus)

Vue.use(ElementUI)
Vue.use(less)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
