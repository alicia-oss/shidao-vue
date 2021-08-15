<template>
<div>
  <div class="navbar">
      <el-row>
        <el-col :span="20" :offset="2">
          <search-result-nav-bar class="bar" ></search-result-nav-bar>
        </el-col>
      </el-row>
  </div>
  <header-back pageName="课程详情"></header-back>
  <el-row>
    <el-col :span="20" :offset="2">
      <class-detail-top :data="TopData"></class-detail-top>
    </el-col>
  </el-row>
  <el-row class="contant">
    <el-col  :span="15" :offset="2">
      <el-tabs type="border-card">
        <el-tab-pane>
          <span slot="label"><i class="el-icon-date"></i> 课程介绍</span>
            <class-intro :data="IntroData"></class-intro>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label"><i class="el-icon-chat-dot-square"></i> 课程评价</span>
            <class-comment :comments="CommentsData"></class-comment>
        </el-tab-pane>       
      </el-tabs>
    </el-col>

    <el-col class="side" :span="5">
      <sider :data="siderData"></sider>
    </el-col>
  </el-row>

 
</div>
</template>

<script>
import SearchResultNavBar from '../searchResult/childComponents/SearchResultNavBar.vue';
import ClassDetailTop from './childComponents/ClassDetailTop.vue';
import ClassIntro from './childComponents/ClassIntro.vue';
import ClassComment from './childComponents/ClassComment.vue';
import HeaderBack from '../../components/contant/back/HeaderBack.vue';
import Sider from './childComponents/Sider.vue';
import {GetClassData} from '../../network/classDetail'
export default {
  name: 'ClassDetail',
  components: {
    SearchResultNavBar,
    ClassDetailTop,
    ClassIntro,
    ClassComment,
    HeaderBack,
    Sider
    
  },
  data(){
    return{
       TopData: {
        id:11,
        imgs:[],
        title:"2021最新安全框架",
        score:4.5,
        price:"300.00",
        time:"6.21",
        teacherName:"泡泡老师"
       },
       IntroData: {
        intro:"笔记资料交流都在我们的平台：www.kuangstudy.com秦疆老师Java系列课程之Springboot系列4天课程的合集，从初识SpringBoot，然后进入web开发，原理探究，再到数据库连接，然后集成一些常用的框架，由易到难，层层递进，无论你是新手还是老手都能够有所收获，录得不好，请不要吐槽！狂神说Java系列，努力打造通俗易懂的教程QQ交流群 : 664386224",
        classContant:"安徽的开啥会的空间啥客户端撒看见很多Sakhalin空间的撒谎健康撒谎看见撒谎的看见啥的空间撒谎丢奥iui家咯空间离开家离开家和矿工遗体郭富城天圆地方6要",
        frontKnowledge:"顶萨顶萨还不能规范化规范化规范",
        tools:"哥和肖总Klan哭会规格",
        add:"起飞美女雷克萨很简单啊艰苦的比赛一个"   
       },
       CommentsData:[
         {  
           id:15,
          img:"http://edu-image.nosdn.127.net/2F092A1A8BDF6A7FC5A1425A5F0BBF1C.jpg?imageView&amp;thumbnail=310x205&amp;quality=100",
          username:"赵总",
          date:"2077-1-30",
          score:4.5,
          text:"很多小伙伴问为什么和雷丰阳老师讲的差不多，因为我在最开始备课给学生讲解SpringBoot的时候，也是看的雷丰阳老师学习的哈~"
         },
         {  
           id:15,
          img:"http://edu-image.nosdn.127.net/2F092A1A8BDF6A7FC5A1425A5F0BBF1C.jpg?imageView&amp;thumbnail=310x205&amp;quality=100",
          username:"赵总",
          date:"2077-1-30",
          score:4.5,
          text:"很多小伙伴问为什么和雷丰阳老师讲的差不多，因为我在最开始备课给学生讲解SpringBoot的时候，也是看的雷丰阳老师学习的哈~"
         },
         {  
           id:15,
          img:"http://edu-image.nosdn.127.net/2F092A1A8BDF6A7FC5A1425A5F0BBF1C.jpg?imageView&amp;thumbnail=310x205&amp;quality=100",
          username:"赵总",
          date:"2077-1-30",
          score:4.5,
          text:"很多小伙伴问为什么和雷丰阳老师讲的差不多，因为我在最开始备课给学生讲解SpringBoot的时候，也是看的雷丰阳老师学习的哈~"
         },
         {  
           id:15,
          img:"http://edu-image.nosdn.127.net/2F092A1A8BDF6A7FC5A1425A5F0BBF1C.jpg?imageView&amp;thumbnail=310x205&amp;quality=100",
          username:"赵总",
          date:"2077-1-30",
          score:4.5,
          text:"很多小伙伴问为什么和雷丰阳老师讲的差不多，因为我在最开始备课给学生讲解SpringBoot的时候，也是看的雷丰阳老师学习的哈~"
         },
         {  
           id:15,
          img:"http://edu-image.nosdn.127.net/2F092A1A8BDF6A7FC5A1425A5F0BBF1C.jpg?imageView&amp;thumbnail=310x205&amp;quality=100",
          username:"赵总",
          date:"2077-1-30",
          score:4.5,
          text:"很多小伙伴问为什么和雷丰阳老师讲的差不多，因为我在最开始备课给学生讲解SpringBoot的时候，也是看的雷丰阳老师学习的哈~"
         },

       ],
       class_id:1,
       siderData:{
         userInfo:{
            id:"15",
            domain:"IT",
            username:"泡泡老师",
            intro:"CF十年老枪战游戏，实现3亿电竞人的枪战王者梦，做梦一般是大脑在睡眠时兴奋的体现。服务无数喜欢IT年轻人",
            img:"https://edu-image.nosdn.127.net/4b9cd4995f6b41089aae13621c32d867.jpg",
              }
            }
    }
  },
  created() {
    
    this.class_id = parseInt(this.$route.query.class_id);
    console.log(typeof(this.class_id))
    GetClassData(this.class_id).then((res)=>{
      console.log(res);
      this.IntroData.intro = res.data.classInfo.textIntro;
      this.IntroData.classContant = res.data.classInfo.class_content;
      this.IntroData.frontKnowledge = res.data.classInfo.front_knowledge;
      this.IntroData.tools = res.data.classInfo.tools;
      this.IntroData.add = "未写入";

      this.TopData.id = res.data.classInfo.id;
      this.TopData.imgs = res.data.imgPath;
      this.TopData.title = res.data.classInfo.title;
      this.TopData.score = 3.9;
      this.TopData.price = res.data.classInfo.price;
      this.TopData.time = res.data.classInfo.suggestTime;
      this.TopData.teacherName = res.data.user.username;

      this.siderData.userInfo.id = res.data.user.id;
      this.siderData.userInfo.domain = res.data.category.domain;
      this.siderData.userInfo.intro = res.data.user.selfIntro;
      this.siderData.userInfo.img = res.data.user.graghId;
      this.siderData.userInfo.username = res.data.user.username;

      

      
    })
    
  }
  


}
</script>

<style scoped>
.navbar {
  height: 80px;
  width: 100%;
  background-color: black;
}

.bar {
  margin-top: 10px;
}

.contant {
  margin-top: 45px;
}

</style>