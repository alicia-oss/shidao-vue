<template>

<div>
  <div class="navbar">
      <el-row>
        <el-col :span="20" :offset="2">
          <search-result-nav-bar class="bar" ></search-result-nav-bar>
        </el-col>
      </el-row>
  </div>
  <el-row>
    <el-col :span="20" :offset="2">
      <class-detail-top :data="TopData"></class-detail-top>
    </el-col>
  </el-row>

 
</div>
</template>

<script>
import SearchResultNavBar from '../searchResult/childComponents/SearchResultNavBar.vue';
import ClassDetailTop from './childComponents/ClassDetailTop.vue';
export default {
  name: 'ClassDetail',
  components: {
    SearchResultNavBar,
    ClassDetailTop
  },
  data(){
    return{
       TopData: {
        img:"https://edu-image.nosdn.127.net/68611f0975fe453c818679cc9057e46e.png?imageView&quality=100&type=webp",
        title:"2021最新安全框架",
        score:4.5,
        price:"300.00",
        time:"6.21",
        teacherName:"泡泡老师"
       }
    }
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


</style>