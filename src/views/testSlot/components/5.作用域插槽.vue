<template>
  <div>
    <p>
      <!-- <slot>
        {{user.name}}
      </slot> -->
      <slot :user="user">
        {{user.name}}
      </slot>
    </p>
  </div>
</template>

<script>
/**
 * 如果想让父级访问访问data并在父级作用域中使用
 * 可以将data里的元素作为一个属性绑定到插槽上
 */
export default {
  data() {
    return {
      user: {
        name: 'tt',
        job: 'developer'
      }
    }
  }
}
</script>