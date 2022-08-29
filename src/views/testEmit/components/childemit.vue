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
        }
    },
    data() {
        return {
            emitdata: '子组件传过来的值',
            count: 0,
            count2: 0
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