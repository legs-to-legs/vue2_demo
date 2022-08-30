<template>
    <div class="childemit">
        childemit
        <div>
            <ul v-for="(item, index) in datalist" :key="index">
                <li>
                    <span>{{item.name}}:  </span>
                    <span>{{item.value}}</span>
                </li>
            </ul>
        </div>
        <!-- 点击事件 父传子 -->
        <div>
            <button @click="sendmsg">点击向父组件传值(this.$emit)</button>
        </div>
        <div>
            父组件调用子组件的方法{{count2}}次
        </div>
        <div>
            <button @click="getparentmethod">点击调用父组件传的方法(props接收)</button>
        </div>

        <!-- 
            在 Vue 中，子父组件最常用的通信方式就是通过 props 进行数据传递，props 值只能在父组件中更新并传递给子组件。
            在子组件内部，是不允许改变传递进来的 props 值，这样做是为了保证数据单向流通。
            但有时候，我们会遇到一些场景，需要在子组件内部改变 props 属性值并更新到父组件中，这时就需要用到 .sync 修饰符。
        -->
        <div>
            <button @click="changeproptitle">.sync使用修改prop过来的值(子组件修改父组件的值)</button>
            <div>proptitle: {{proptitle}}</div>
        </div>

        <div>
          <button @click="sendbroMsg">点击触发bus</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'childEmit',
    props: {
        datalist: {
            type: Array,
            default: () => []
        },
        parentmethod: {
            type: Function,
            default: null
        },
        proptitle: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            emitdata: '子组件传过来的值',
            count: 0,
            count2: 0,
            newproptitle: 'bbbbbbbb',
            amsg: '我是来自兄弟方传值方的信息(from childemit)'
        }
    },
    methods: {
        sendmsg() {
            this.count += 1
            this.$emit('childEvent', this.emitdata, this.count)
        },
        childmethod() {
            this.count2 += 1
        },
        getparentmethod() {
            this.parentmethod()
        },
        changeproptitle() {
            this.newproptitle += '1'
            /* 
                必须用update:xxx
            */
            this.$emit('update:proptitle', this.newproptitle)
        },
        sendbroMsg() {
            this.$bus.emit('changemsg', this.amsg)
        }
    }
}
</script>

<style lang="less" scoped>
.childemit {
    div {
        margin: 10px 0;
    }
}
</style>