<template>
  <div>
    <el-card class="card" shadow="hover" body-style="{display:flex;}">
        <div class="avatar"><img :src="data.avatar" alt=""></div>
        <div class="txt">
          <div class="username">{{data.username}}</div>
          <div class="classes">热门课程：{{data.classes}}</div>
          <div class="domin">{{data.domin}}</div>
        </div>
    </el-card>
  </div>

</template>

<script>
export default {
  name: "TeacherCard",
  props: {
    data:null
  },
  computed :{}

}
</script>

<style scoped>
.card {
  height: 145px;
}

.avatar {
  float: left;
  width: 145px;
  overflow: hidden;
}

.txt {
  float: left;
  width: 280px;
  margin-left: 10px;
}
img{
  
  height: 115px;
}

.username {
  height: 25px;
  line-height: 25px;
  color: black;
  font-size: var(--font-size-samll);
}

.classes {
  height: 75px;
  color: var(--color-font);
  font-size: var(--font-size-samll);
}

.domin {
  height: 25px;
  line-height: 15px;
  color: var(--color-font);
  font-size: var(--font-size-samll);
}

</style>