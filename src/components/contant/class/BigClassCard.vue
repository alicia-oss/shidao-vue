<template>
  <div class="card" @click="ItemClick">
    <div class="img"><img :src="data.img" alt=""></div>
    <div class="contant">
      <div class="title title-text">{{data.title}}</div>
      <div class="score"><el-rate
          v-model="data.score"
          disabled
          show-score
          text-color="#ff9900"
          :score-template="data.score.toString()">
        </el-rate></div>
      <div class="intro main-text">{{data.intro}}</div>
      <div class="price tag-text"><span>参考价格：{{data.price}}</span> <span class="time">参考时长：{{data.time}}(小时)</span></div>
      
      <div class="name tag-text">老师：{{data.teacherName}}</div>
    </div>
  </div>
</template>

<script>
import {getSrcImage} from '../../../utils/imgUtils';
export default {
  name: "BigClassCard",
  props: {
    data: {
      id:"11",
      img:"	https://edu-image.nosdn.127.net/99051863884453A56C…4236F.jpg?imageView&thumbnail=510y288&quality=100",
      title: "西式烹饪工艺--土豆烧牛逼",
      intro:"厨师长教你：“鸡蛋下饭菜”的三种做法，咸鲜微辣，拌饭拌面很赞!厨师长教你：“鸡蛋下饭菜”的三种做法，咸鲜微辣，拌饭拌面很赞!!厨师长教你：“鸡蛋下饭菜”的三种做法，咸鲜微辣，拌饭拌面很赞!!!",
      price:"998.99",
      time:"20.00",
      teacherName: "大厨王刚",
      score:4.5
    }
  },
  methods:{
    ItemClick(){
      this.$router.push({path:'/class',query:{class_id:this.data.id}})
    },
    getImage(src){
      getSrcImage(src);
    }

  }
}
</script>

<style scoped>

.card {
  box-sizing: border-box;
  display: flex;
  background-color:white;
  width: 95%;
  height: 220px;
  padding-left: 0px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.img {
  flex:1;
}

.img img{
  height: 100%;
  overflow: hidden;
}

.contant {
  margin-left: 50px;
  padding: 20px 0;
  padding-right: 30px;
  flex:2;
}

.card:hover{
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  transition: box-shadow 0.3s;
  transition-timing-function: ease-in-out;
}

.time {
  padding-left: 30%;
}

.price{
  padding-top: 10px;
}
</style>