<template>
  <div class="form">
    <h1 class="headOne">基础信息</h1>
      <el-form ref="form" class="contantOne" :model="classInfo" label-width="20%" size="medium" label-position="left" label-suffix=":">
        <el-form-item class="item" label="课程标题" >
          <el-input v-model="classInfo.title"></el-input>
        </el-form-item>
        <el-form-item class="item" label="课程领域">
          <el-select v-model="classInfo.domain_id" placeholder="请选择课程领域">
            <el-option label="区域一" value="1"></el-option>
            <el-option label="区域二" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item  label="课程简介">
          <el-input type="textarea"  resize="none" v-model="classInfo.textIntro"></el-input>
        </el-form-item>
        <el-form-item label="参考价格" >
          <el-input v-model="classInfo.price"></el-input>
        </el-form-item>
        <el-form-item label="参考时间">
          <el-input v-model="classInfo.suggestTime"></el-input>
        </el-form-item>
         <el-form-item class="item" label="图片" >
          <pics-upload ref="ClassFormAvUpload"></pics-upload>
        </el-form-item>

        <h1 class="headTwo">详细信息</h1>     
        <el-form-item  label="教学内容">
          <el-input type="textarea"  resize="none" v-model="classInfo.class_content"></el-input>
        </el-form-item>
        <el-form-item  label="前置知识">
          <el-input type="textarea"  resize="none" v-model="classInfo.front_knowledge"></el-input>
        </el-form-item>
        <el-form-item  label="教学工具">
          <el-input type="textarea"  resize="none" v-model="classInfo.tools"></el-input>
        </el-form-item>
        <!-- <el-form-item  label="附加信息">
          <el-input type="textarea"  resize="none" v-model="classInfo.add"></el-input>
        </el-form-item> -->
        <el-button type="primary" @click= "submitClick">提交</el-button>
      </el-form>
  </div>
</template>


<script>
import PicsUpload from '../../../components/common/upload/PicsUpload.vue'
import{ submitUpdate,getPageData } from'../../../network/updateClass'
export default {
  name: "ClassForm",
  data(){
    return{
      classInfo:{
        use_id:0,
        id: 0,
        statu:0,
        title:"勇敢的心",
        textIntro:"html label标签的for属性有什么作用？ 关于label标签的for属性介绍 <label>专为input元素服务，为其定义标记。 1.将表单控件作为label的内容，这样就是隐士绑定。 此时不需要for属性，绑定的控件也不需要id属性。 2.为<label>标签下的for属性命名一个目标表单的id，这就是显示绑定。",
        domain_id:"1",
        suggestTime:12,
        price:14, 
        class_content:"",
        front_knowledge:"",
        tools:"",
        //add:"",
      },
      files:null,
      videos:null

    }
  },
  components:{
    PicsUpload
  },
  methods: {
    //改
    submitClick() {
      this.files = this.$refs.ClassFormAvUpload.files;
      let data = new FormData();
      for( let i = 0; i < this.files.length; i++ ){
        console.log(this.files[i]);
      data.append('pictures',this.files[i]);
      }
      data.append('videos',this.videos);
      let classInfo = JSON.stringify(this.classInfo);
      data.append('classInfo',classInfo);
      submit(data).then((res)=>{
        console.log(res);
      })
    }, 
  },
  created(){
    getPageData()

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