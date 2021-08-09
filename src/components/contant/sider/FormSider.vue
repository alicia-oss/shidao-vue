<template>
  <div class="main">
    <div class="content">
      <slot></slot>  
    </div>
  </div>
</template>

<script>

export default {
  name:"FormSider",
}
</script>

<style scoped>
.main{
 box-sizing: border-box;
 width: 100%;

}

.content {
   padding: 30px 15px;
 background-color: white;
 border: 1px solid var(--color-border);
 margin-top: 45px;
 margin-left: 10%;
  
}

</style>