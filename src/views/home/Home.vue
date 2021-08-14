<template>
  <div class="home">
    <el-row class="navbar">
      <el-col :span = 20 :offset = 2>
        <home-nav-bar></home-nav-bar>
      </el-col>
    </el-row>
    <el-row >
      <el-col :span = 20 :offset="2">
        <home-tab ></home-tab>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span = 5 :offset="2">
        <category-list :items="CateListData"></category-list>
      </el-col>
      <el-col :span = 10 >
        <home-swiper :imgs="HomeSwiperData"></home-swiper>
      </el-col>
      <el-col :span = 5 >
        <home-login></home-login>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="20" :offset="2">
        <recommand-teacher :datas="RecommandTeacherData"></recommand-teacher>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="20" :offset="2">
        <recommand-class :classes="RecommandClassData" ></recommand-class>
      </el-col>
    </el-row>
    <el-row class="bottom">
      <el-col>
<bottom></bottom>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src

import HomeNavBar from './childcomponents/HomeNavBar.vue';
import HomeTab from './childcomponents/HomeTab.vue'
import CategoryList from './childcomponents/CategoryList.vue';
import HomeSwiper from './childcomponents/HomeSwiper.vue';
import HomeLogin from './childcomponents/HomeLogin.vue'
import RecommandTeacher from './childcomponents/RecommandTeacher.vue'
import RecommandClass from './childcomponents/RecommandClass.vue';
import Bottom from '../../components/contant/bottom/Bottom.vue'
import {GetData,CheckLogin} from '../../network/home'
export default {
  name: 'Home',
  components: {
    HomeNavBar,
    HomeTab,
    CategoryList,
    HomeSwiper,
    HomeLogin,
    RecommandTeacher,
    RecommandClass,
    Bottom,
  },
  data() {
    return {
      CateListData:["Java","web","视觉设计","绘图","机械设计"],
      HomeSwiperData:["https://edu-image.nosdn.127.net/a13f3f4f15f343668eceab7ea9bb6c02.png?imageView&quality=100",
      "https://edu-image.nosdn.127.net/aeeb2dd73fac4523b3c79ec99eeec1ec.png?imageView&quality=100",
      "https://edu-image.nosdn.127.net/a13f3f4f15f343668eceab7ea9bb6c02.png?imageView&quality=100"],
      RecommandTeacherData:[{
        id:15,
       username:"用户名",
      avatar:"//img-s-msn-com.akamaized.net/tenant/amp/entityid/AAMgdAK.img?h=547&w=690&m=6&q=60&o=f&l=f&x=423&y=201",
      domin:"领域",
      classes:"设计风格大揭秘：【MBE风格设计技巧讲解】"
    },{
      id:15,
       username:"用户名",
      avatar:"//img-s-msn-com.akamaized.net/tenant/amp/entityid/AAMgdAK.img?h=547&w=690&m=6&q=60&o=f&l=f&x=423&y=201",
      domin:"领域",
      classes:"设计风格大揭秘：【MBE风格设计技巧讲解】"
    },
    {
      id:15,
       username:"用户名",
      avatar:"//img-s-msn-com.akamaized.net/tenant/amp/entityid/AAMgdAK.img?h=547&w=690&m=6&q=60&o=f&l=f&x=423&y=201",
      domin:"领域",
      classes:"设计风格大揭秘：【MBE风格设计技巧讲解】"
    },
    {
      id:15,
       username:"用户名",
      avatar:"//img-s-msn-com.akamaized.net/tenant/amp/entityid/AAMgdAK.img?h=547&w=690&m=6&q=60&o=f&l=f&x=423&y=201",
      domin:"领域",
      classes:"设计风格大揭秘：【MBE风格设计技巧讲解】"
    },
    {
      id:15,
       username:"用户名",
      avatar:"//img-s-msn-com.akamaized.net/tenant/amp/entityid/AAMgdAK.img?h=547&w=690&m=6&q=60&o=f&l=f&x=423&y=201",
      domin:"领域",
      classes:"设计风格大揭秘：【MBE风格设计技巧讲解】"
    },
    {
      id:15,
       username:"用户名",
      avatar:"//img-s-msn-com.akamaized.net/tenant/amp/entityid/AAMgdAK.img?h=547&w=690&m=6&q=60&o=f&l=f&x=423&y=201",
      domin:"领域",
      classes:"设计风格大揭秘：【MBE风格设计技巧讲解】"
        }],
      RecommandClassData:[
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
        }],

    }
  },
  created(){
    GetData().then((res)=>{
      console.log(res);
    }); 
  }
}
</script>

<style  scoped>

.navbar {
  background-color:white;
}

.bottom{
  margin-top: 70px;
}
   
</style>
