<template>
  <div class="collect" @click="ButtonClick" >
      <i v-if="isCollect == false" class="el-icon-star-off"></i>
      <i v-if="isCollect == true" class="el-icon-star-on isC"></i>
  </div>
</template>

<script>
//说明：只样子，点击事件的方法和事件绑定全部放在父子件中
export default {
  name:"CollectButton",
  props:{
    questionId:null,
    classId:null,
  },
  data(){
    return{
      isCollect:false,
      isLogin:false
    }
  },
  methods:{
    IsCollected(){
      if(collectClass == null){
        return false;
      }
      if(this.classId != null){
        let collectClass =  this.$store.state.userData.collectionClass;   
        let  arrayClass = collectClass.split(",");
        arrayClass.forEach(element => {
          if(element === this.classId.toString()){
            this.isCollect = true;
            return true;
          }
        });
      }
      if(this.questionId != null){
        let collectQuestion =  this.$store.state.userData.collectionQuestion
        let  arrayQuestion = collectQuestion.split(",");
        arrayQuestion.forEach(element => {
          if(element == this.questionId){
            this.isCollect = true;
            return true;
          }
        });
      }  
      this.isCollect = false;
      return false;      
    },
    ButtonClick(){
      if(this.isLogin == false){
        this.$message({
          type:"error",
          message:"登录后即可收藏,请先登录！"
        })
        return;
      }
      if(this.isCollect == true){
        //发送取消收藏请求
        this.isCollect = false;
      }else{
        //发送收藏请求
        this.isCollect = true;
      }
    },
    IsLogin(){
      if(this.$store.state.login == 0){
        this.isLogin = false;
        return false;
      }else{
        this.isLogin = true;
        return true;
      }
    }
  },

  created(){
    if(this.IsLogin()){
       this.isCollect();
    } 
  },

}
</script>

<style scoped>

.collect{
  position: absolute;
  right: 20%;
  height: 40px;
  line-height: 40px;
  padding: 0 5px;
  border: 1px solid var(--color-border);
  border-radius: 5px;
  font-size: var(--font-size-very-big);
}

.isC{
  color: rgb(247, 186, 42);
}


</style>