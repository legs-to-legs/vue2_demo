<template>
    <div class="fatheremit">
        testemit
        <div>
            {{childmsg}}
        </div>
        <button @click="getchildmethod">点击调用子组件方法($refs)</button>
        
        <div style="margin: 20px 0;">----------------------------------------</div>

        <child-emit ref="childfn" :datalist="propdata" :parentmethod="emitparentmethod" @childEvent="getmsg"
                    :proptitle.sync="synctitle"
         />

        <div style="margin: 20px 0;">----------------------------------------</div>
        <bro-emit />
        
    </div>
</template>

<script>
import childEmit from './components/childemit.vue'
import broEmit from './components/broemit.vue'

export default {
  name: 'testEmit',
  components: {
    childEmit,
    broEmit
  },
  data() {
    return {
        propdata: [{
            name: 'a',
            value: '1'
        },{
            name: 'b',
            value: '2'
        },{
            name: 'c',
            value: '3'
        }],
        childmsg: '',
        synctitle: 'aaaaaaaa'
    }
  },
  methods: {
    getmsg(val,count) {
      this.childmsg = val + `点击了${count}次`
    },
    getchildmethod() {
      this.$refs.childfn.childmethod()
    },
    emitparentmethod() {
      console.log('子组件调用prop传过去的父组件的方法')
    }
  }
}
</script>

<style lang="less" scoped>
.fatheremit {
  div {
    margin: 10px 0;
  }
}
</style>
