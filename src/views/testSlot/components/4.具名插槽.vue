<template>
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
/**
 * slot插槽 name属性 可以用来定义额外的插槽
 * 不加name属性相当于 name="default"
 */
export default {
  
}
</script>