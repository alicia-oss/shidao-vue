<template>
   <div >
      <el-row class="breadcrumb">
          <el-col :span="20" :offset="2">
            <el-page-header @back='GoBack' class="header" :content="pageName">
            </el-page-header>
          </el-col>
      </el-row>
    </div>
</template>

<script>
export default {
  name:"HeaderBack",
  props:{
    pageName:null
  },
  methods:{
    GoBack(){
      window.history.go(-1);
    }
  }

}
</script>

<style scoped>

.breadcrumb {
  height: 55px;
  width: 100%;
  background-color: white;
}

.header{
  line-height: 55px;
}

</style>