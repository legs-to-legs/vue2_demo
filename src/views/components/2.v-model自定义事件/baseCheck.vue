<template>
  <div>
    <input type="checkbox" :checked="myprop" @change="changeStatus">
  </div>
</template>

<script>
export default {
  model: {
    prop: 'myprop',
    event: 'myevent'
  },
  props: {
    myprop: Boolean
  },
  data() {
    return {
      
    }
  },
  methods: {
    changeStatus($event) {
      console.log('$event==', $event)
      this.$emit('myevent', $event.target.checked)
    }
  }
}
</script>