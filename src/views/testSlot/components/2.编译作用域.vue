<template>
  <div>
    <a :href="url">
      <slot></slot>
    </a>
  </div>
</template>

<script>
/**
 * url 在父亲组件中是访问不到的
 */
export default {
  data() {
    return {
      url: 'https://www.baidu.com/'
    }
  }
}
</script>