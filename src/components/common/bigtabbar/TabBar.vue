<template>
<div class="tabbar">
<slot></slot>  
</div>
</template>

<script>
export default {
    name:"TabBar"
}
</script>

<style>
.tabbar{
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(245, 245, 245);
  box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.1) ;
}
</style>