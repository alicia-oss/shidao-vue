<template>
  <div>
    <div class="navbar">
      <el-row>
        <el-col :span="20" :offset="2">
          <search-result-nav-bar class="bar" ></search-result-nav-bar>
        </el-col>
      </el-row>
    </div>
    <profile-header></profile-header>
    <el-row>
      <el-col :span="4"><profile-sider></profile-sider></el-col>
      <el-col :span="20">
        <keep-alive>
          <router-view ></router-view>
        </keep-alive>
        
      </el-col>
    </el-row>
    
    <bottom></bottom>

  </div>
</template>

<script>
import ProfileHeader from './childComponents/ProfileHeader.vue';
import SearchResultNavBar from '../searchResult/childComponents/SearchResultNavBar.vue';
import HeaderBack from '../../components/contant/back/HeaderBack.vue';
import ProfileSider from './childComponents/ProfileSider.vue'
import Bottom from '../../components/contant/bottom/Bottom.vue';
export default {
  name: "Profile",
  components: {
    SearchResultNavBar,
    HeaderBack,
    ProfileHeader,
    ProfileSider,
    Bottom
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