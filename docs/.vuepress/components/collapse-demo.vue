<template>
    <div>
        <h2>手风琴</h2>
        <p>
            <strong>预览</strong>
        </p>

        <g-collapse :selected.sync="selectedTab" >
            <g-collapse-item title="标题1" name="1">吃饭</g-collapse-item>
            <g-collapse-item title="标题2" name="2">睡觉</g-collapse-item>
            <g-collapse-item title="标题3" name="3">打豆豆</g-collapse-item>
        </g-collapse>

        <p>
            <strong>代码</strong>
        </p>

        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
import GCollapse from '../../../src/collapse'
import GCollapseItem from '../../../src/collapse-item'
export default {
    components:{GCollapse,GCollapseItem},
    data(){
        return {
            selectedTab:['2','3'],
            content:`
            <g-collapse :selected.sync="selectedTab" >
                <g-collapse-item title="标题1" name="1">吃饭</g-collapse-item>
                <g-collapse-item title="标题2" name="2">睡觉</g-collapse-item>
                <g-collapse-item title="标题3" name="3">打豆豆</g-collapse-item>
            </g-collapse>
            `.replace(/^ {8}/gm, '').trim()
        }
    }
}
</script>

