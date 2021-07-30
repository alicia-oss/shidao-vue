<template>
  <div class="card">
    <div class="img"><img :src="data.img" alt=""></div>
    <div class="contant">
      <div class="title">{{data.title}}</div>
      <div class="intro">{{data.intro}}</div>
      <div class="price">{{data.price}}</div>
      <div class="time">{{data.time}}</div>
      <div class="name">{{data.teacherName}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BigClassCard",
  props: {
    data: {
      img:"	https://edu-image.nosdn.127.net/99051863884453A56C…4236F.jpg?imageView&thumbnail=510y288&quality=100",
      title: "西式烹饪工艺--土豆烧牛逼",
      intro:"厨师长教你：“鸡蛋下饭菜”的三种做法，咸鲜微辣，拌饭拌面很赞!!",
      price:"998.99",
      time:"20.00",
      teacherName: "大厨王刚"
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
  height: 240px;
  padding-left: 0px;
  box-shadow: rgba(0, 0, 0, 0.10) 1.45px 1.45px 2.15px;
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

</style>