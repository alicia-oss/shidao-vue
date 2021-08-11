<template>

<div class="search-item"  >
  <input type="text" v-model="input" @keyup.enter="search"  placeholder="请输入要搜索的内容" class="contant" >
  <el-button type="primary" icon="el-icon-search" class="button" :style="{backgroundColor: buttonColor}" @click="search"><span class="button-txt">搜索</span></el-button>
</div>

</template>

<script>

export default {
  name: 'SearchItem',
  props: {
    buttonColor:{
      type:String,
      default: "rgb(75, 175, 80)"
    },
    
  },
  data() {
    return {
      input: ""
    }
  },
  methods: {
    search() {
      this.$router.push ({
        path:'/search',
        query: {
          keyword:this.input
        }
      })
    }
  }
  
}
</script>

<style scoped>

.search-item{
  box-sizing: border-box;
  align-self: center;
  padding-left: 15px;
  width: 70%;
  background-color: white;
  border: 0.5px solid var(--color-text);
  border-radius: 22px;
  height: 44px;
  overflow: hidden;
}
.contant{
  box-sizing: border-box;
  padding: 0 0;
  padding-left: 20px;
  border: 0;
  height: 44px;
  width: 82%;
  font-size: var(--font-size-small);
  box-shadow: none !important;
  outline: none;
}



.search-item .button {
 box-sizing: border-box;
  padding: 0 5px;
  border-radius: 0;
  border: 0;
  height: 45px;
  width: 18%;
  font-size: 14px;
  text-align: left;
}




</style>