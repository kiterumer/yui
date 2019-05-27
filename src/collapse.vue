<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
//下面使用了eventBus，所以不要忘了引入Vue
import Vue from 'vue'
export default {
    name:'GuluCollapse',
    props:{
        single:{
            type:Boolean,
            defalut:false
        },
        selected:{
            type:Array
        }
    },
    data(){
        return {
            eventBus:new Vue()  //生成一个Vue实例作为eventBus
        }
    },
    provide(){
        return {
            eventBus:this.eventBus
        }
    },
    mounted(){
        this.eventBus.$emit('update:selected',this.selected)

        this.eventBus.$on('update:addSelected',(name) => {
            // 不能直接修改selected状态，先深拷贝一份
            let selectedCopy = JSON.parse(JSON.stringify(this.selected))
            if(this.single){
                selectedCopy = [name]
            }else{
                selectedCopy.push(name)
            }

            this.eventBus.$emit('update:selected',selectedCopy)
            // 为什么要发布两次
            this.$emit('update:selected',selectedCopy)
        })

        this.eventBus.$on('update:removeSelected',(name) => {
            let selectedCopy = JSON.parse(JSON.stringify(this.selected))
            //获取刚刚子组件发送过来的name,然后得到在数组中的下标，然后删掉
            let index = selectedCopy.indexOf(name)
            selectedCopy.splice(index,1)
            // 数组得到更新，所以要再次发布消息
            this.eventBus.$emit('update:selected',selectedCopy)
            this.$emit('update:selected',selectedCopy)
        })
    }
}
</script>

<style lang="scss" scoped>
$grey:#ddd;
$border-radius:4px;
.collapse{
    border:1px solid $grey;
    border-radius:$border-radius;
}
</style>


