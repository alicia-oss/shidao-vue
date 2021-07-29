<template>
  <div class="tabbar-item" @click="itemClick(path)">
    <div v-if = "isActive"><slot name="item-icon-active"></slot></div>
    <div v-else><slot name="item-icon"></slot></div>
    <div :style = "activeStyle"><slot name="item-txt"></slot></div>
    </div>
</template>

<script>
export default {
    name:"TabBarItem",
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'red'
      }
    },
    data(){
      return{
        // isActive :true
      }
    },
    computed:{
     isActive(){
      return this.$route.path.indexOf(this.path) === 1
      },
    activeStyle(){
      return this.isActive ? { color:this.activeColor }: {}
    }
    },
    methods:{
      itemClick(path){
        this.$router.push(path)
      }
    }
}
</script>

<style>

.tabbar-item{
  flex: 1;
  text-align: center;
  height: 49px;
}

 .tabbar-item img{
  margin-top: 3px;
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-bottom: 1px;
}



</style>