<template>
  <div class="model-main">
    <ul>
      <li v-for="item in 50" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
.model-main {
  position: absolute;
  top: 100vh;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  li {
    color: #050505;
    margin: 10px 0;
  }
}
</style>