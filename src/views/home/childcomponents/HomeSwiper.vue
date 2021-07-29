<template>
  <div >
    <el-carousel class = 'home-swiper'>
      <el-carousel-item v-for="item in imgs" class="item"><img :src="item" alt=""></el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props:{
     imgs:[]
  }
  
     
    
  
}
</script>

<style scoped>
.home-swiper {
  height: 400px;
  margin: 20px 4px;
}

.item {
  height: 400px;
  width: 100%;
  overflow: hidden;
}

img{
  height: 400px;
}

</style>