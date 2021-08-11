<template>
  <div class="main">
    <input type="file" @change="picChange($event)" id='file' name="file" accept="image/png, image/jpg, image/jpeg, image/gif" hidden/>
    <div class="imgList">
      <div class="img">
        <img :src="imageUrl" alt="">
      </div>
    </div>
    <div ><label for="file" class="button">点我添加头像</label></div>
  </div>
</template>

<script>
export default {
  name:"AvUpload",
  data() {
    return {
      imageUrl: null,
      file:null
    }
  },
  methods: {
    picChange(event){
      this.file = event.target.files[0];
      console.log(this.file);
     this.imageUrl =URL.createObjectURL(event.target.files[0]); 
    }
  }
}
</script>

<style scoped>
.main {
  display: flex;
}
.img{
  height: 155px;
  width: 155px;
  border: 2px dashed var(--color-border);
  border-radius: 10px;
  overflow: hidden;
}
img{
  height: 155px;
}

.button{
  display: block;
  margin-left: 45px;
  color: var(--color-high-text);
}


</style>