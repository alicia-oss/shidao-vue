<template>
<div class="list">
  <div>
  <ul>
    <li class="item " v-for="item in items" ><router-link  class="white" to=""><span class="link">{{item}}</span></router-link></li>
  </ul>
  </div>
</div>
  
</template>

<script>
export default {
  name: 'ClassList',
  props: {
    items:null
  }

}
</script>

<style scoped>

.list {
  box-sizing:border-box;
  padding: 45px 20px;
  margin: 20px 4px;
  margin-left: 0;
  height: 400px;
  background-color: rgba(75, 72, 72, 0.3);
}

ul{
  margin: 0;
  padding: 0;
}

li {
  display: block;
  height: 30px;
  line-height: 30px;
  font-size: var(--font-size-big);
}

.white {
  color: white;
}


</style>