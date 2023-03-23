<template>
  <div></div>
</template>
<script>

/**
 * filter 筛选符合条件的数据并返回一个新数组
 * 不会对空数组进行检测
 * 不会改变原始数组
 */
export default {
  data() {
    return {
      arr: [{
          name: 'a',
          value: '1'
        }, {
          name: 'a',
          value: '2'
        }, {
          name: 'b',
          value: '3'
        }, {
          name: 'c',
          value: '4'
        }
      ]
    }
  },
  methods: {
    testFilter() {
      // const temp = this.arr.filter((item) => {
      //   return item.value % 2 !== 0
      // })
      const temp = this.arr.filter(item => item.value % 2 !== 0)
      return temp
    }
  }
}
</script>