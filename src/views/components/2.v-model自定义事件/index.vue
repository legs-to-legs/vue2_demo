<template>
  <div>
    <p>测试自定义组件v-model</p>
    <p>值：{{checkeddata}}</p>
    <base-check v-model="checkeddata" />
    <!-- <base-check :myprop="myprop" @myevent="myevent" /> -->
  </div>
</template>

<script>
/**
 * 一个组件上的v-model会被默认为：名为value的prop 和名为input的事件
 * :value="" @input=""
 * v-model 在内部为不同的输入元素使用不同的属性并抛出不同的事件：
 * text 和 textarea  :value @input
 * checkbox 和 radio :checked @change
 * select :value @change
 * ...
 * 
 * 当子组件触发自定义myevent事件时，checkeddata也会跟着自动更新
 * 
 * 自定义组件可以针对任何元素 不只是用在input上
 * 
 */
import baseCheck from './baseCheck.vue'
export default {
  components: {
    baseCheck
  },
  data() {
    return {
      checkeddata: false
    }
  }
}
</script>