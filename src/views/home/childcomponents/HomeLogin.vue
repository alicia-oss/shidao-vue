<template>
<div>
  <div class="home-login " v-if="this.$store.state.login == 1">
    <div class="unlogin-img">
      <img src="~assets/img/admin.jpg" alt="" srcset="">
    </div>
     <div>
      <el-button type="success" plain class="button">我的课程</el-button>
    </div>
    <div>
      <el-button type="success" plain class="button">我的订单</el-button>
    </div>

  </div>


  <div class="home-login" v-if="this.$store.state.login == 0">
    <div>
      <img src="~assets/img/admin.jpg" alt="" srcset="">
    </div>
    <div>
      <el-button type="success" plain class="button">登录/注册</el-button>
    </div>
  <div class="home-login" v-if="this.$store.state.login == 1">
   <div>
      <img src="~assets/img/admin.jpg" alt="" srcset="">
    </div>
    <div class="username">
      {{this.$store.state.userData.username}}
    </div>

  </div>
</div>

  </div>
</template>

<script>
export default {
  name: "HomeLogin",
}
</script>

<style scoped>
.home-login{
  box-sizing:border-box;
  text-align: center;
  padding: 45px 20px;
  height: 400px;
  margin: 20px 4px;
  margin-right: 0;
  border: 2px solid var(--color-text);
}

img {
  width: 190px;
  border-radius: 50%;
}

.button {
  margin-top:30px;
  height: 50px;
  width: 160px;
  border-radius: 12px;
  font-size: var(--font-size-big);
}

.unlogin-img img{
  width: 140px;
  border-radius: 50%;
}

</style>