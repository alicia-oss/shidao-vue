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

     <el-row>
        <el-col :span="13" :offset="2">
         <div>
           szx

         </div>
        </el-col>
        <el-col :span="7" >
         <login-contant></login-contant>
        </el-col>
      </el-row>
  </div>
</template>

<script>
import LoginContant from './chlidcomponents/LoginContant.vue';
import SearchResultNavBar from '../searchResult/childComponents/SearchResultNavBar.vue';
import HeaderBack from '../../components/contant/back/HeaderBack.vue'
export default {
  name: "Login",
  components: {
    LoginContant,
    SearchResultNavBar,
    HeaderBack
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