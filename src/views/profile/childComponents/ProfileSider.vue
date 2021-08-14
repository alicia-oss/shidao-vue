<template>
   <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :router="true"
      :default-active="defaultActive">
      <el-menu-item index="info">
        <i class="el-icon-user-solid"></i>
        <span slot="title">个人信息</span>
      </el-menu-item>
      <el-menu-item index="collection">
        <i class="el-icon-user-solid"></i>
        <span slot="title">我的收藏</span>
      </el-menu-item>
      <el-menu-item index="study" >
        <i class="el-icon-s-management"></i>
        <span slot="title">我的学习</span>
      </el-menu-item>
      <el-menu-item index="order">
        <i class="el-icon-s-order"></i>
        <span slot="title">我的订单</span>
      </el-menu-item>
      <el-menu-item index="class">
        <i class="el-icon-menu"></i>
        <span slot="title">课程发布</span>
      </el-menu-item>
      <el-menu-item index="help">
        <i class="el-icon-menu"></i>
        <span slot="title">求助发布</span>
      </el-menu-item>
    </el-menu>

</template>

<script>
export default {
  name:"ProfileSider",
  data() {    
    return {
      defaultActive:this.$route.meta.active
    }
    
  },
  methods:{
     handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
  },
  created(){
    console.log(this.$route)
  }


}
</script>

<style scoped>
.el-menu-vertical-demo{
  height: 800px;
}

::v-deep .el-menu-item{
  padding-left: 50px !important;
}

</style>