<template>
  <div class="form">
    <h1 class="headOne">基础信息</h1>
      <el-form ref="form" class="contantOne" :model="userInfo" label-width="20%" size="medium" label-position="left" label-suffix=":">
        <el-form-item class="item" label="账号" >
          <el-input v-model="userInfo.account"></el-input>
        </el-form-item>
        <el-form-item class="item" label="密码" >
          <el-input v-model="userInfo.password"></el-input>
        </el-form-item>
        <el-form-item class="item" label="手机号码" >
          <el-input v-model="userInfo.phone"></el-input>
        </el-form-item>
        <el-form-item class="item" label="昵称" >
          <el-input v-model="userInfo.username"></el-input>
        </el-form-item>
        <el-form-item class="item" label="头像" >
          <av-upload ref="RegisterAvUpload"></av-upload>
        </el-form-item>
        <el-form-item class="item" label="性别">
          <el-select v-model="userInfo.domain_id" placeholder="请选择课程领域">
            <el-option label="男" :value="1"></el-option>
            <el-option label="女" :value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="item" label="兴趣领域">
          <el-select v-model="userInfo.domain_id" placeholder="请选择课程领域">
            <el-option label="区域一" :value="1"></el-option>
            <el-option label="区域二" :value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item  label="个人简介">
          <el-input type="textarea"  resize="none" v-model="userInfo.selfIntro" :maxlength="200" :show-word-limit="true"></el-input>
        </el-form-item>
        
        <el-button type="primary" @click="submitClick" :loading="load">提交</el-button>
      </el-form>
  </div>
</template>

<script>
import AvUpload from '../../../components/common/upload/AvUpload.vue';
import { submit } from 'network/register.js'
export default {
  name:"RegisterForm",
  data(){
    return{
      load:false,
      userInfo:{
        id:0,
        graghId:0,
        collection_class:"",
        collection_question:"",
        username:"",
        account:"",
        password:"",
        phone:"",
        sex:1,
        selfIntro:"",
        domain_id:1
      },
      file:null,
    }   
  },
  components:{
    AvUpload
  },

  methods:{
    submitClick(){
      this.load = true;
       this.file = this.$refs.RegisterAvUpload.file;
       let data = new FormData();
       data.append('picture',this.file) ;
       let userInfo = JSON.stringify(this.userInfo);
       data.append('userInfo',userInfo)
      submit(data).then((res) =>{
        if(res.data.msg == "注册成功"){
          this.$message({
            type:"success",
            message:`注册成功，3s后跳转登录页面!`
          })

          setTimeout(()=>{
            this.load = false;
            this.$router.push('/login');          
          },3000);         
        }
        if(res.data.msg == "用户名已被占用，不能使用"){
          this.$message({
            type:"error",
            message:`账号已被占用，不能使用!`
          })
          this.load = false;         
        }  
      })  
    }

  }

}
</script>

<style scoped>
.form{
  margin-top: 45px;
  box-sizing: border-box;
  width: 100%;
  padding: 15px 30px;
  border: 1px solid var(--color-border);
  background-color: white;
}

.headOne{
  margin-left: 5%;
  width: 60%;
}

.contantOne{
  margin-left: 20%;
  width: 60%;
  
}

.headTwo{
  position: relative;
  left: calc(-20%*5/3);
  margin-left: calc(5%*5/3);
  width: 60%;
}


::v-deep .el-input__inner{
     height: 50px;
     font-size: var(--font-size);
 }

::v-deep .el-input{
  width: 60%;
}

::v-deep .el-form-item__label{
  height: 50px;
  line-height: 50px;
  font-size: var(--font-size);
}

::v-deep .el-textarea__inner{
  height: 150px;
    text-indent: 2em;
    letter-spacing: 0.1em;
    line-height: 1.6;
}

</style>