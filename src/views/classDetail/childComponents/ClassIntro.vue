<template>
<div class="main">
  <div class="item">
    <h2><i class="el-icon-thumb" />&nbsp课程简介：</h2>
    <p class="main-text">{{data.intro}}</p>
  </div>

  <div class="item">
    <h2><i class="el-icon-collection" />&nbsp教学内容：</h2>
    <p class="main-text">{{data.classContant}}</p>
  </div>

  <div class="item">
    <h2><i class="el-icon-box" />&nbsp前置知识：</h2>
    <p class="main-text">{{data.fontKnowledge}}</p>
  </div>

  <div class="item">
    <h2><i class="el-icon-paperclip" />&nbsp附加：</h2>
    <p class="main-text">{{data.add}}</p>
  </div>


</div>
  
</template>

<script>
export default {
  name: 'ClassIntro',
  props: {
    data: {
      intro:null,
      classContant:null,
      fontKnowledge:null,
      tools:null,
      add:null   
    }
  }

}
</script>

<style scoped>

.main{
  padding: 20px 20px;
}

.item {
  padding-bottom: 30px;
}

</style>