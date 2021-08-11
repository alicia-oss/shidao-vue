<template>
  <div>
    <div class="navbar">
      <el-row>
        <el-col :span="20" :offset="2">
          <search-result-nav-bar class="bar" ></search-result-nav-bar>
        </el-col>
      </el-row>
    </div>
      <header-back pageName="修改课程信息"></header-back>
    <el-row>
      <el-col :span="15" :offset="2">
        <class-form></class-form>
      </el-col>
      <el-col :span="5">
        <sider></sider>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import HeaderBack from '../../components/contant/back/HeaderBack.vue';
import ClassForm from './childComponents/ClassForm.vue';
import SearchResultNavBar from '../searchResult/childComponents/SearchResultNavBar.vue';
import Sider from './childComponents/Sider.vue'

export default {
  name:"UpdataClass",
  data(){
    return{

    }
  },
  components:{
    HeaderBack,
    ClassForm,
    SearchResultNavBar,
    Sider

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