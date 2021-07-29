<template>
<div id = "app">
  <router-view></router-view>

</div>
  
</template>

<script>
export default {
  name: "App"
}
</script>

<style>
  @import './assets/css/base.css';
  @import './assets/css/ele-ui-index.css';
  .link:hover{
  color: var(--color-high-text);
  transition: color 0.3s;
  transition-timing-function: ease-in-out;
}
</style>
