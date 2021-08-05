<template>
  <div :style="{color: fontColor}">
    <div class="tab" v-if="this.$store.state.login == 1">
      <div class="item my-study"><router-link class="link" to="profile">个人中心</router-link></div>
      <div class="item "><router-link class="link" to=""><span class="message "><i class = "el-icon-bell"></i>消息&nbsp</span></router-link></div>
      <div class=" username" >
        <div class="username-txt">{{this.$store.state.userData.userName}}</div> 
        <img :src="getImage(this.$store.state.userData.userImg)" alt="">
      </div>
    </div>
    <div class="tab" v-if="this.$store.state.login == 0">
      <div class="username">
        <div class="login">
          <router-link class="link" to="/login">登录&nbsp |</router-link>
      <router-link class="link" to="/register"> &nbsp注册</router-link>
        </div>
      </div>
    </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'HomeUserTab',
  props: {
    fontColor: {
      type:String,
      default: "var(--color-font)"
    }
  },
  data() {
    return {
      
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
.tab{
  display: flex;
  font-size: var(--font-size-big);
  height: 57px;
  line-height: 57px;
  
}

.item {
  text-align: right;
  flex: 1;
  
}

.message {
  border-right: 1px solid var(--color-text);
}

.username {
  flex:2;
  
}

img{
  float:right;
  border-radius: 50%;
  height: 55px;
  width: 55px;
}

.username-txt {
  float: right;
  margin-left: 10px;
}

.login {
  float: right;
  margin-left: 10px;
}


</style>