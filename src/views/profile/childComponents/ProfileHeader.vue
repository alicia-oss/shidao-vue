<template>
  <div class="header">
    <div class="main">
      <div class="img">
         <img :src="this.$store.state.userData.userImg" alt="">
      </div>
     <div class="content">
       <h1>{{this.$store.state.userData.userName}},你好</h1>
     </div>  
    </div>
    

  </div>
</template>

<script>

export default {
  name: "ProfileHeader",
  methods: {
    getImage(src) {
      return require("assets/img/"+src);
    }
  }


}
</script>

<style scoped>
.header{
  box-sizing: border-box;
  width: 100%;
  height: 250px;
  background-color: rgb(95, 205, 166);
}

.main{
  display: flex;
  margin-left: 15%; 
  
}

img{
  margin-top: 40px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
}

.content{
  align-self: center;
  margin-left: 30px;
  color: white;


}

</style>