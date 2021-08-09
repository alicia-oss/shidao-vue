<template>
<div class="main">
  <div class="content">
    <user-card-one :data="data.userInfo"></user-card-one>

  </div>
  
</div>
  

</template>

<script>
import FormSider from '../../../components/contant/sider/FormSider.vue';
import UserCardOne from '../../../components/contant/user/UserCardOne.vue'
export default {
  name:"Sider",
  props:{
    data:null

  },
  components:{
    UserCardOne,
  },



}
</script>

<style scoped>
.main{
  box-sizing: border-box;
  width: 100%;
  
  padding-left: 30px;
}

.content {
  
}

</style>