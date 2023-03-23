<template>
  <div></div>
</template>
<script>

/**
 * $set 可以解决数据双向绑定问题，用来更新数组或对象
 * this.$set(原数组，索引值，值)
 * this.$set(原对象，属性名，值)
 */
export default {
  data() {
    return {
      arr: [1,2,3,4,5],
      obj: {
        a: 1
      }
    }
  },
  methods: {
    testSet() {
      this.$set(this.arr, 4, 6) // [1,2,3,4,6]
      this.$set(this.obj, 'a', 2) // {a: 2}
      this.obj.a = 2 // 不会触发视图更新
      this.$set(this.obj, 'b', 1) // {a:1, b:1}
    }
  }
}
</script>