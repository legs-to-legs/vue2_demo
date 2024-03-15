<template>
  <div class="tags-view-container">
    <scroll-pane ref="scrollPane" class="tags-view-wrapper" @scroll="handleScroll">
      <div>
        111
      </div>
    </scroll-pane>
  </div>
</template>

<script>
import scrollPane from './scrollPane.vue';
export default {
  components: {
    scrollPane
  },
  methods: {
    handleScroll() {

    }
  }
}
</script>

<style lang="less" scoped>
.tags-view-container {
  position: relative;
  top: 60px;
  height: 35px;
}
</style>