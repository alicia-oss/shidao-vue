<template>
   <div class="recommand">
    <div class="title">
      <span class="one">课程推荐</span>
    </div>
    <div class="contant">
      <class-card class="item" v-for="item in classes" :data='item'></class-card>
    </div>
  </div>

</template>

<script>
import ClassCard from 'components/contant/class/ClassCard.vue';
export default {
  name: "RecommandClass",
  props:{
      classes: null
    },
  components: {
    ClassCard
  }

}
</script>

<style scoped>
.recommand {
  width: 90%;
  margin: 30px 0;
  margin-left: 10%;
  
}

.title {
   text-align: center;
}
.one{
  display: block;
  color: #000;
  font-size: var(--font-size-very-big);
  font-weight:normal;
  letter-spacing: 2px;
}

.contant {
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  
}

.item {
  margin-top: 30px;
}
</style>