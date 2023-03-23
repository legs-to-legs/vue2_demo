<template>
  <div></div>
</template>
<script>

/**
 * find 查找数组中符合条件的第一个元素并返回索引号
 * 如果没有查到则返回undefined
 * 不改变原数组的值
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
    testMap() {
      const index = this.arr.find(item => item.value > 3)
      return index
    }
  }
}
</script>