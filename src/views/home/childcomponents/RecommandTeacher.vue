<template>
  <div class="recommand">
    <div class="title">
      <span class="one">优秀教师推荐</span>
    </div>
    <div class="contant">
      <teacher-card v-for="item in datas" class="item" :data = item></teacher-card>
    </div>
  </div>
</template>

<script>
import TeacherCard from 'components/contant/user/TeacherCard.vue'
export default {
  name: "RecommandTeacher",
  props:{
      datas:null
      },
  components: {
    TeacherCard
  }

}
</script>

<style scoped>

.recommand {
  margin-top: 20px;
  width: 100%;
}

.contant {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
}

.item {
  width: 30%;
  margin-top: 30px;
}

 .one{
  display: block;
  color: #000;
  font-size: var(--font-size-very-big);
  font-weight:normal;
  letter-spacing: 2px;
}



</style>