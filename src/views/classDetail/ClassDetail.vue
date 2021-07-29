<template>

<div>
  <div class="navbar">
      <el-row>
        <el-col :span="20" :offset="2">
          <search-result-nav-bar class="bar" ></search-result-nav-bar>
        </el-col>
      </el-row>
  </div>
 
</div>
</template>

<script>
import SearchResultNavBar from '../searchResult/childComponents/SearchResultNavBar.vue';
export default {
  name: 'ClassDetail',
  components: {
    SearchResultNavBar
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