<template>
  <div class="login">
    <div style="height:100%">
    <div class="title item"><h2>密码登录</h2></div>
    <div class="item" ><input class="useraccount" type="text" v-model="useraccount" placeholder="请输入账号"></input></div>
    <div class=" item"><input class="useraccount" type="password"  v-model="password" placeholder="请输入密码"></input></div>
    <div class="item"><el-button class="button" type="primary" plain><span style="font-size:var(--font-size-big)">登录</span></el-button></div>
    <div class="item">没有账号？<router-link style="color:var(--color-high-text)" to="" >立即注册</router-link></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginContant',
  data() {
    return{
      useraccount:"133435433",
      password:"76890232szx",
    }
  }

}
</script>

<style scoped>
.login{
  box-sizing: border-box;
  width: 100%;
  margin-top: 20%;
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