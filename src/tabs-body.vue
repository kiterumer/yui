<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'GuluTabsBody',
    inject:['eventBus']
  }
</script>
<style>
  .tabs-body {
  }
</style> 