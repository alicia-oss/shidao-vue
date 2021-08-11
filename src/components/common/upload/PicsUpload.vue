<template>
  <div class="main">
    <input type="file" @change="picChange($event)" id='file' name="file" accept="image/png, image/jpg, image/jpeg, image/gif" hidden/>
    <div class="imgList">
      <div class="img" v-for="(item,index) in imageUrls">
        <i class="el-icon-circle-close close" @click="picDelete"></i>
        <img :src="item" alt="">
      </div>
    </div>
    <div ><label for="file" class="button">点我添加图片</label></div>
  </div>
</template>

<script>
export default {
  name:"PicsUpload",
  data() {
    return {
      imageUrls:[],
      files:[],
    }
  },
  methods: {
    picChange(event){
      console.log(event.target.files[0]);
      this.files.push( event.target.files[0]);
      let urls = new Array();
      for (let i = 0;i<this.files.length;i++) {
        urls.push(URL.createObjectURL(this.files[i]));
      }
      this.imageUrls = urls;
    },
    picDelete(index){
      this.files.splice(index,1);
      let urls = new Array();
      for (let i = 0;i<this.files.length;i++) {
        urls.push(URL.createObjectURL(this.files[i]));
      }
      this.imageUrls = urls;
      

    }
  }
}
</script>

<style scoped>
.main {
  display: flex;
}

.imgList{
  display: flex;
  flex-wrap: wrap;
  width: 400px;
}
.img{
  height: 145px;
  width: 145px;
  margin: 5px 10px;
  border: 2px dashed var(--color-border);
  border-radius: 10px;
  overflow: hidden;
}
img{
  height: 155px;
}

.button{
  display: block;
  margin-left: 15px;
  color: var(--color-high-text);
}

.close{
  cursor: pointer;
  position: absolute;
  color: whitesmoke;
  font-size: var(--font-size-very-big);
}

.close:hover{
  color: black;
    transition: color 0.3s;
    transition-timing-function: ease-in-out;
}



</style>