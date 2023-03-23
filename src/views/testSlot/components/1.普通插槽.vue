<template>
  <div>
    <a :href="url">
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: 'https://www.baidu.com/'
    }
  }
}
</script>