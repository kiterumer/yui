<template>
  <div style="padding-top: 16px;">

    <g-tabs :selected="selected">
      <g-tabs-head>
        <g-tabs-item name="1">1</g-tabs-item>
        <g-tabs-item name="2">2</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="1">stay hungry</g-tabs-pane>
        <g-tabs-pane name="2">stay foolish</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>


  </div>
</template>
<script>
  import GTabs from '../../../src/tabs'
  import GTabsBody from '../../../src/tabs-body'
  import GTabsHead from '../../../src/tabs-head'
  import GTabsItem from '../../../src/tabs-item'
  import GTabsPane from '../../../src/tabs-pane'
  export default {
    components: {GTabs, GTabsBody, GTabsHead, GTabsItem, GTabsPane},
    data () {
      return {
        selected: '1',
      }
    }
  }
</script> 