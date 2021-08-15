<template>
<div class="info">
  <div class="updata"><router-link to="/updataMyInfo" style="color:var(--color-high-text)">修改个人信息</router-link></div>
    <h1>个人信息</h1>
    <h3><span class="lable">昵称：</span> {{userInfo.userName}}</h3>
    <h3><span class="lable">账号：</span>{{userInfo.account}}</h3>
    <div><h3><span class="lable">头像：</span><img class="av" :src="this.$store.state.userData.userImg" alt=""></h3></div>
    <h3><span class="lable">性别：</span>{{userInfo.sex}}</h3>
    <h3><span class="lable">兴趣领域：</span> {{userInfo.domain}}</h3>
    <h3><span class="lable">个人介绍：</span><span class="content">{{userInfo.intro}}</span></h3>
    
</div>

</template>

<script>
import { GetUser } from "../../../network/user";
export default {
  name:"ProfileMyInfo",
  data(){
    return{
        userInfo:{
          id:1,
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
  },

  created(){
    GetUser().then((res)=>{
      console.log(res);
      this.userInfo.userName = res.data.userInfo.username;
      this.userInfo.account = res.data.userInfo.account;
      this.userInfo.id = res.data.userInfo.id;
      this.userInfo.phone = res.data.userInfo.phone;
      this.userInfo.intro = (res.data.userInfo.selfIntro == null)? "这个用户很懒，什么都没有写！":res.data.userInfo.selfIntro;
      this.userInfo.domain = this.$domainMapper[res.data.userInfo.domain_id].domain;
      
    })

  }

  

}
</script>

<style scoped>
.info{
  box-sizing: border-box;
  padding: 30px 5%;
  height: 800px;
  background-color: white;
}

.av{
  width: 125px;
  height: 125px;
}

h3{
  width: 70%;
}

.lable {
  display: inline-block;
  width: 20%;
  vertical-align: top;
  text-align: right;
  padding-right: 20px;
}


.content{
  display: inline-block;
  width: 50%;
  
}

.updata{
  position: absolute;
  right: 30%;
}
</style>