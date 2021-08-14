<template>
  <div class="login">
    <div style="height:100%">
    <div class="title item"><h2>密码登录</h2></div>
    <div class="item" ><input class="useraccount" type="text" v-model="useraccount" placeholder="请输入账号"></input></div>
    <div class=" item"><input class="useraccount" type="password"  v-model="password" placeholder="请输入密码"></input></div>
    <div class="item"><el-button class="button" type="primary" plain @click="LoginClick" :loading="load"><span style="font-size:var(--font-size-big)">登录</span></el-button></div>
    <div class="item">没有账号？<router-link style="color:var(--color-high-text)" to="/register" >立即注册</router-link></div>
    </div>
  </div>
</template>

<script>
import {Login} from '../../../network/login'
export default {
  name: 'LoginContant',
  data() {
    return{
      useraccount:"133435433",
      password:"76890232szx",
      load:false
    }
  },
  methods:{
    LoginClick(){
      this.load = true;
      Login(this.useraccount,this.password).then((res)=>{
        //将按钮置回
        this.load = false;
        //发送成功提示并调转到首页
        if(res.data.msg == "success"){
          let data = res.data.userInfo;
          this.$store.commit('SetUserState',{
             login: 1,
            userId: data.id,
            userName: data.username,
            userImg: "admin.jpg",
            collection_class: data.collection_class,
            collection_question: data.collection_question   
          })
          let timer = 3;
         
          this.$message({
            type:"success",
            message:`登录成功，${timer}s后跳转!`
          })
           setInterval(()=>{
            timer--;
            if(timer == 0){
                this.$router.push('/home');
            }
          },1000)     
        }
        //发送失败提示
        if(res.data.msg == "fail"){
          this.$message({
            type:"error",
            message:"账号或密码错误，请重新登录！"
          })
        }
      })
    }
  }
}
</script>

<style scoped>
.login{
  box-sizing: border-box;
  width: 100%;
  margin-top: 45px;
  padding: 8% 15%;
  height: 60vh;
  background-color: white;
   box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.item {
  text-align: center;
  width: 100%;
  padding: 15px 0;
}

.title {
  text-align: center;
}

.useraccount{
  outline-style: none;
  box-sizing: border-box;
  width: 100%;
  font-size: var(--font-size);
  padding-left: 20px;
  height: 55px;
}

.button{
  margin-top: 40px;
  width: 100%;
 height: 55px;
}
</style>