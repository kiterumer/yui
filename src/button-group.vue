<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
    mounted(){
        console.log(this.$children)
        console.log(this.$el.children)
    
        for(let node of this.$el.children){
            let name = node.nodeName.toLowerCase()
            if(name !== 'button')
            console.warn(`g-button-group 的子元素应该全是 g-button,但你写的是${name}`)
        }
    }
}
</script>
<style lang="scss" scoped>
 .g-button-group{
    display:inline-flex;  //与其他按钮排在一行
    vertical-align:middle;  //与其他按钮对齐

    > .g-button{
        border-radius: 0;

        &:not(:first-child){  //第一个button不需要margin-left:-1px
            margin-left: -1px;
        }

        &:first-child{
            border-top-left-radius: var(--border-radius);
            border-bottom-left-radius: var(--border-radius);
          
        }
        &:last-child{
            border-bottom-right-radius: var(--border-radius);
            border-top-right-radius: var(--border-radius);
        }
        &:hover{
            position: relative;  
            z-index: 1;
        }
    }
}
</style>


