<template>
<div class="study">
  <h1>我的学习</h1>
   <div class="contant">
      <class-card class="item" v-for="item in classList" :data='item'></class-card>
    </div>
</div>
  

</template>

<script>
import ClassCard from 'components/contant/class/ClassCard.vue';
export default {
  name:"ProfileMyStudy",
  data(){
    return{
      classList:[
        {
          id:11,
          img:"https://edu-image.nosdn.127.net/12149ec4ca034069a03d50a5f5857ad1.png?imageView&quality=100",
          title:"【零基础Python数据分析】搞定考研和500强面试（7月21日）",
          username:"中国大学mooc",
          money:"99",
          score:3.7
        },
        {
          id:11,
          img:"https://edu-image.nosdn.127.net/12149ec4ca034069a03d50a5f5857ad1.png?imageView&quality=100",
          title:"【零基础Python数据分析】搞定考研和500强面试（7月21日）",
          username:"中国大学mooc",
          money:"99",
           score:3.7
        },
        {
          id:11,
          img:"https://edu-image.nosdn.127.net/12149ec4ca034069a03d50a5f5857ad1.png?imageView&quality=100",
          title:"【零基础Python数据分析】搞定考研和500强面试（7月21日）",
          username:"中国大学mooc",
          money:"99.00",
           score:3.7
        },
        {
          id:11,
          img:"https://edu-image.nosdn.127.net/12149ec4ca034069a03d50a5f5857ad1.png?imageView&quality=100",
          title:"【零基础Python数据分析】搞定考研和500强面试（7月21日）",
          username:"中国大学mooc",
          money:"99",
           score:3.7
        },
        {
          id:11,
          img:"https://edu-image.nosdn.127.net/12149ec4ca034069a03d50a5f5857ad1.png?imageView&quality=100",
          title:"【零基础Python数据分析】搞定考研和500强面试（7月21日）",
          username:"中国大学mooc",
          money:"99",
           score:3.7
        },
         {
           id:11,
          img:"https://edu-image.nosdn.127.net/12149ec4ca034069a03d50a5f5857ad1.png?imageView&quality=100",
          title:"【零基础Python数据分析】搞定考研和500强面试（7月21日）",
          username:"中国大学mooc",
          money:"99",
           score:3.7
        }
      ]
    }
  },
  components:{
    ClassCard
  }


}
</script>
<style scoped>
.study{
  padding: 30px 20px;
}
.contant {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
}

.item {
  width: 30%;
  margin-top: 30px;
}

</style>