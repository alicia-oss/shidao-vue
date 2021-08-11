<template>
<div class="box">
 <el-dropdown>
      <span class="el-dropdown-link">
        我要发布<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="CreateClassClick">发布课程</el-dropdown-item>
        <el-dropdown-item>发布求助</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  
</div>
   
</template>

<script>
export default {
  name:"TopDownMenu",
  methods:{
    CreateClassClick(){
      this.$router.push('/createClass');
    }
  }

}
</script>

<style scoped>
.box{
  width: 120px;
  align-self: center;
 margin-left: 10%;
}

 .el-dropdown-link {
   font-size: var(--font-size-big);
    cursor: pointer;
  }
  .el-icon-arrow-down {
    font-size: var(--font-size-big);
  }

  .el-dropdown-link:hover{
    color: var(--color-high-text);
    transition: color 0.3s;
    transition-timing-function: ease-in-out;
  }

</style>