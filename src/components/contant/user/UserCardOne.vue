<template>
  <div class="card">
    <img :src="data.img" alt="">
    <div class="username">{{data.username}}</div>
    <div class="domain">{{data.domain}}</div>
    <div class="intro">{{data.intro}}</div>
  </div>
</template>

<script>
export default {
  name:"UserCardOne",
  props: {
    data:{
      id:null,
      domain:null,
      username:null,
      intro:null,
      img:null,
    }
  }
}
</script>

<style scoped>
.card{
  box-sizing: border-box;
  padding: 20px 30px;
  border-radius: 5px;
  overflow: hidden;
  background-color: white;
  text-align: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

img{
  width: 50%;
  border-radius: 50%;
  overflow: hidden;
}

.card:hover{
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  transition: box-shadow 0.3s;
  transition-timing-function: ease-in-out;
}

</style>