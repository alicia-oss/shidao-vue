<template>
  <div>
    <div ><label for="file" class="button">添加头像图片</label></div>
    <input type="file" @change="picChange($event)" id='file' name="file" accept="image/png, image/jpg, image/jpeg, image/gif" hidden/>
    <div class="imgList">
      <div class="img" v-if="imageUrl">
        <img :src="imageUrl" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"PicUpload",
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
  color: var(--color-high-text);
}


</style>