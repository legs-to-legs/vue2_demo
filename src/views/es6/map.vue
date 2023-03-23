<template>
  <div></div>
</template>
<script>

/**
 * map 遍历数组对数组进行操作 会改变原数组
 * 不会对空数组进行检测
 * map的回调函数支持return返回值
 * map处理元素的范围是在callback方法第一次调用之前就已经确定了的
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
      this.arr.map((item, index) => {
        return {
          id: index,
          name: item.name,
          value: item.value
        }
      })
    },
    testMap2() {
      var newArr
      this.arr.map(item => {
        const tempobj = {}
        tempobj[item.name] = item.value
        newArr.push(tempobj)
      })
      return newArr
    },
    testMap3() {
      this.arr = this.arr.map(item => {
        if(item.name === 'c') {
          item.value = '5'
        } else {
          item.value = '3'
        }
        return item
      })
    }
  }
}
</script>