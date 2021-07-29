<template>
  <el-card class="card" :body-style="{ padding: '0px' }" shadow="hover">
    <div class="img"><img :src="data.img" alt=""></div>
    <div class="txt">
      <div class="title">{{data.title}}</div>
    <div class="username">{{data.username}}</div>
    <div class="money">{{price}}</div>
    </div>
    
  </el-card>
</template>

<script>
export default {
  name: "ClassCard",
  props:{
    data:{
      img:null,
      title:null,
      username:null,
      money:null
    }
  },
  computed: {
    price:function() {
      return "参考价格："+"$ "+this.data.money;
    }
  }

}
</script>

<style scoped>



.img {
  width: 100%;
  height: 170px;
  overflow: hidden;
}

img{
  height: 100%;
}
.txt {
  padding: 5px 10px;
  letter-spacing: 1px;
}

.title {
  font-size: var(--font-size);
}

.username {
  font-size: var(--font-size);
  color: var(--color-text);
   margin-top: 5px;
}

.money {
  margin-top: 15px;
  font-size: var(--font-size-big);
  color: red;
  font-weight: 600;
  letter-spacing: 2px;
  
}


</style>