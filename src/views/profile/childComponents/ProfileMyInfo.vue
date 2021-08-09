<template>
<div class="info">
    <h1>个人信息</h1>
    <h3>昵称：{{userInfo.userName}}</h3>
    <h3>账号：{{userInfo.account}}</h3>
    <div><h3>头像：<img class="av" :src="getImage(this.$store.state.userData.userImg)" alt=""></h3></div>
    <h3>性别：{{userInfo.sex}}</h3>
    <h3>兴趣领域: {{userInfo.domain}}</h3>
    <h3>个人介绍：{{userInfo.intro}}</h3>
</div>

</template>

<script>
export default {
  name:"ProfileMyInfo",
  data(){
    return{
        userInfo:{
          userName:"孙孟",
          account:"19876612",
          phone:"121387268",
          sex:"男",
          intro:"奥斯陆冬季索拉卡决定离开洒家灯笼裤洒家哦i赛多久哦i算的哦i实践活动艘海军的雷克萨等你咯咯撒几乎都i少i收到后",
          domain:"IT 前端"
        }
      }
    },
  methods: {
    getImage(src) {
      return require("assets/img/"+src);
    }
  }

  

}
</script>

<style scoped>
.info{
  box-sizing: border-box;
  padding: 30px 20px;
  height: 800px;
  background-color: white;
}

.av{
  width: 125px;
  height: 125px;
}

h3{
  width: 400px;
}
</style>