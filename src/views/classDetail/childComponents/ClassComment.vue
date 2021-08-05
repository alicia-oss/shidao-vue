<template>
<div class="main">
  <div class="top">
    <h2>课程评价</h2>
    <p class="main-text">欢迎进入课程评论区，以下为所有用户购买并完成该课程后的心得感想，以及对于老师的评价。</p>
  </div>
  <div class="list">
    <comment v-for="item in comments" :data="item"></comment>
  </div>
  
  
</div>
  
</template>

<script>
import Comment from '../../../components/contant/comment/Comment.vue';

export default {
  name: "ClassComment",
  components:{
    Comment
  },
  props: {
    comments:{
      
    }
  }

}
</script>

<style scoped>

.main{
  padding: 20px 0;
}

.top{
  padding: 0,20px;
  padding-bottom: 20px;
}

</style>