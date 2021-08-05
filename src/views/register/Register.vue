<template>
<div>
  <div class="navbar">
      <el-row>
        <el-col :span="20" :offset="2">
          <search-result-nav-bar class="bar" ></search-result-nav-bar>
        </el-col>
      </el-row>
  </div>
  <header-back pageName="注册"></header-back>
  <div class="test">
    <av-upload></av-upload>
  </div>

</div>
  
</template>

<script>


import HeaderBack from '../../components/contant/back/HeaderBack.vue';
import SearchResultNavBar from '../searchResult/childComponents/SearchResultNavBar.vue'

export default {
  name: "Register",
  components:{
    HeaderBack,
    SearchResultNavBar,
    AvUpload
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