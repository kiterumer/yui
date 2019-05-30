<template>
    <div style="padding-top:16px;">
        <g-button-group>
            <g-button>上一页</g-button>
            <g-button>下一页</g-button>
        </g-button-group>
    </div>
</template>

<script>
    import GButton from '../../../src/button'
    import GButtonGroup from '../../../src/button-group'
export default {
     components:{
         'g-button':GButton,
         'g-button-group':GButtonGroup
     }
}
</script>

