<template>

  <div class="detail"> 
    <collect-button :classId="data.id"></collect-button>
    <div class="img">
      <el-carousel trigger="click">
        <el-carousel-item v-for="item in data.imgs" :key="item">
          <div class="imgitem"><img :src="item" alt=""></div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="contant">
      <div class="title title-text">{{data.title}}</div>
      <div class="score">
        <el-rate
          v-model="data.score"
          disabled
          show-score
          text-color="#ff9900"
          :score-template="data.score.toString()">
        </el-rate>
      </div>
      <div class="price tag-text">参考价格：￥{{data.price}}</div>
      <div class="time tag-text">参考时长：{{data.time}}</div>
      <div class="teacher tag-text">教师：{{data.teacherName}}</div>
      <div class="button"> <el-button type="primary" plain>立刻咨询</el-button></div>
    </div>

  </div>
</template>

<script>
import CollectButton from '../../../components/contant/collect/CollectButton.vue'
export default {
  name: "ClassDetailTop",
  props: {
    data:null,
  },
  data(){
    return{
      isCollect:true
    }
  },
  components:{
    CollectButton
  },
  methods: {
  
  }

}
</script>

<style scoped>

.detail{
  display: flex;
  margin-top: 45px;
  padding: 20px 20px;
  background-color: white;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.img {
  width: 37.5%;
}

.imgitem{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

img{
  
  width: 100%;
  overflow: hidden;
  
}

.contant {
  box-sizing: border-box;
  width: 62.5%;
  padding-left: 30px;
}


</style>