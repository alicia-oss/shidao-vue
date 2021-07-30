<template>
  <div class="detail">
    <div class="img"><img :src='data.img' alt=""></div>
    <div class="contant">
      <div class="title">{{data.title}}</div>
      <div class="score">
        <el-rate
          v-model="data.score"
          disabled
          show-score
          text-color="#ff9900"
          :score-template="data.score.toString()">
        </el-rate>
      </div>
      <div class="price">参考价格：￥{{data.price}}</div>
      <div class="time">参考时长：{{data.time}}</div>
      <div class="teacher">教师：{{data.teacherName}}</div>
      <div class="button"> <el-button type="primary" plain>立刻咨询</el-button></div>
    </div>

  </div>
</template>

<script>
export default {
  name: "ClassDetailTop",
  props: {
    data:null
  },
  methods: {
    getImage(src) {
      return require("assets/img/"+src);
    },
  
  }

}
</script>

<style scoped>

.detail{
  display: flex;
  margin-top: 45px;
  padding: 20px 20px;
  background-color: white;
}

.img {
  width: 37.5%;
}

img{
  width: 100%;
}

.contant {
  box-sizing: border-box;
  width: 62.5%;
  padding-left: 30px;
 
}


</style>