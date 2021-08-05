<template>
  <div class="main">
       <el-image class="img"
      style="width:80px;height:80px"
      :src="data.img"
    ></el-image>
    <div class="contant">
      <div class="one">
        <h3 class="username">
        {{data.username}}
        </h3>
        <h5 class="date">{{data.date}}</h5>
         
      </div>  
         
       <el-rate class="score"
          v-model="data.score"
          disabled
          show-score
          text-color="#ff9900"
          :score-template="data.score.toString()">
        </el-rate>
      <p class="main-text">{{data.text}}</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "Comment",
  props:{
    data:{
      id:null,
      img:null,
      username:null,
      date:null,
      score:null,
      text:null
    }
    
  }
}
</script>

<style scoped>
.main{
  box-sizing: border-box;
  display: flex;
  width: 100%;
  padding: 10px 30px;
  border-bottom: 1px  solid rgba(102, 102, 102,0.2);
}

.contant{
  margin-left: 20px;
}

.img{
  border-radius: 50%;
  overflow: hidden;
}

.one {
  display: flex;
}

.date{
  margin-left: 30px;
}
</style>