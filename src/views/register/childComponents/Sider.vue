<template>
<div class="main">
  <div class="content">
        <div class="img">
      <img src="" alt="">
      </div>
      <h1>常见问题</h1>
      <!-- <div>
        <p class="main-text"><i class="el-icon-question"></i>不确定自己发布的课程属于哪个领域怎么办？</p>
      </div>
      <div>
        <p class="main-text"><i class="el-icon-info"></i>可以模糊选择多个课程</p>
      </div>
      <div>
        <p class="main-text"><i class="el-icon-question"></i>参考时长就是具体的上课时长吗？</p>
      </div>
      <div>
        <p class="main-text"><i class="el-icon-info"></i>参考时长是您对自己课程有效教学时长的大概估计，是方便学生判断的，最终结果由您与学生共同沟通决定。</p>
      </div> -->
       <div>
      <p class="main-text"><i class="el-icon-question"></i>不确定自己的兴趣领域怎么办？</p>
    </div>
    <div>
      <p class="main-text one"><i class="el-icon-info"></i>可以模糊选择多个领域</p>
    </div>
    <div>
      <p class="main-text one"><i class="el-icon-question"></i>头像不能裁切，无法上传满意的头像</p>
    </div>
    <div>
      <p class="main-text one"><i class="el-icon-info"></i>很抱歉，目前我们还没有实现图片裁剪的功能，给您带来不便了，很抱歉。后续我们会抓紧时间推出相关功能，在此之前您可以借助其他软件将头像裁切好再上传。</p>
  </div>
  </div>
 
</div>
  

</template>

<script>

export default {
  name:"Sider",
}
</script>

<style scoped>
.main{
 box-sizing: border-box;
 width: 100%;

}

.content {
   padding: 30px 15px;
 background-color: white;
 border: 1px solid var(--color-border);
 margin-top: 45px;
 margin-left: 10%;
  
}

.one{
  -webkit-line-clamp: 100;
}

</style>