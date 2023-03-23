<template>
  <div></div>
</template>
<script>

/**
 * reduce 对数组中的每个元素执行一个由您提供的reduce函数
 * 
 * arr.reduce(function(prev, cur, index, arr) {
 *  ...
 * }, init)
 * 
 * prev 必需 上一次调用回调时的返回值  或初始值init
 * cur 必需 当前正在处理的数组元素
 * index 可选  当前正在处理的数组元素的索引值 有init值时，起始索引为0，否则为1
 * arr 可选 原始数组
 * init 可选 初始值
 */
export default {
  data() {
    return {
      arr: [1,2,3,4,5]
    }
  },
  methods: {
    testReduce() {
      const sum = arr.reduce((prev,cur,index,arr) => {
        return prev + cur
      })
      // 返回结果为 1+2+3+4+5=15
    }
  }
}
</script>