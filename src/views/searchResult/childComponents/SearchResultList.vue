<template>
<div>
  <div class="class-list" v-show="index === 0">
    <el-switch
  style="display: block"
  v-model="value2"
  active-color="#13ce66"
  inactive-color="#ff4949"
  active-text="按月付费"
  inactive-text="按年付费">
</el-switch>
<el-switch
  style="display: block"
  v-model="value2"
  active-color="#13ce66"
  inactive-color="#ff4949"
  active-text="按月付费"
  inactive-text="按年付费">
</el-switch>
    <big-class-card class="list-item" v-for="item in data.classList.list" :data="item"></big-class-card>
  </div>
  <div class="help-list" v-show="index === 1">求助列表</div>
  <div class="user-list" v-show="index === 2">用户列表</div>
  
</div>
  

</template>

<script>
import BigClassCard from '../../../components/contant/class/BigClassCard.vue'
export default {
  name: "SearchResultList",
  components: {
    BigClassCard,


  },
  props:  {
    data: null,
    index: {
      typeof: Number,
      default: 1
    }
  },
  data() {
    return {
      sortNames:["价格","时长"]
    }
  }

}
</script>

<style>
.list-item {
  margin: 25px 0;
}

</style>