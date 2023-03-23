<template>
  <div>
    <button type="submit">
      <slot>提交</slot>
    </button>
  </div>
</template>

<script>
/**
 * 
 */
export default {
  data() {
    return {
      url: 'https://www.baidu.com/'
    }
  }
}
</script>