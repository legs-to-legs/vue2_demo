<template>
    <div>
        broemit
        <div>{{msg}}</div>
    </div>
</template>

<script>
export default {
    name: 'broEmit',
    data() {
        return {
            msg: ''
        }
    },
    mounted() {
        this.$bus.on('changemsg', (val) => {
            this.msg = val
        })
    },
    destroyed() {
        this.$bus.off('changemsg')
    }
}
</script>