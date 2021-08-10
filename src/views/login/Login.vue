<template>
  <div class="login">
    <div class="navbar">
      <el-row>
        <el-col :span="20" :offset="2">
          <search-result-nav-bar class="bar" ></search-result-nav-bar>
        </el-col>
      </el-row>
    </div>
    <header-back pageName="登录"></header-back>

     <el-row class="content">
        <el-col :span="13" :offset="2">
         <div>
           <img src="~assets/img/LoginBg.svg" alt="">

         </div>
        </el-col>
        <el-col :span="7" >
         <login-contant></login-contant>
        </el-col>
      </el-row>
      <bottom></bottom>
  </div>
</template>

<script>
import LoginContant from './chlidcomponents/LoginContant.vue';
import SearchResultNavBar from '../searchResult/childComponents/SearchResultNavBar.vue';
import HeaderBack from '../../components/contant/back/HeaderBack.vue';
import Bottom from '../../components/contant/bottom/Bottom.vue'

export default {
  name: "Login",
  components: {
    LoginContant,
    SearchResultNavBar,
    HeaderBack,
    Bottom
  },



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

img{
  width: 90%;
}

.content{
  margin-top: 45px;
  margin-bottom: 45px;
}
</style>