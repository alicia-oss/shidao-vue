<template>
<div>
  <div class="class-list" v-show="index === 0">
     <el-radio-group  v-model="sorts" >
    <el-radio :label="0">综合排序</el-radio>
    <el-radio :label="1">价格升序</el-radio>
    <el-radio :label="2">价格降序</el-radio>
    <el-radio :label="3">时长升序</el-radio>
    <el-radio :label="4">时长降序</el-radio>
  </el-radio-group>
    <big-class-card class="list-item" v-for="item in data.classList.list" :data="item"></big-class-card>
    <el-pagination class="page"
      background
      layout="prev, pager, next"
      :total="data.classList.number">
    </el-pagination>
  </div>
  <div class="help-list" v-show="index === 1">求助列表</div>
  <div class="user-list" v-show="index === 2">
    <user-card-one class="user-list-item" v-for="item in data.userList.list" :data="item"></user-card-one>
  </div>
  
</div>

</template>

<script>
import BigClassCard from '../../../components/contant/class/BigClassCard.vue'
import UserCardOne from '../../../components/contant/user/UserCardOne.vue'
export default {
  name: "SearchResultList",
  components: {
    BigClassCard,
    UserCardOne
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
      sorts: 0,//0.默认 1,价格升 2，价格降 3，时长升 4，时长降
    }
  }

}
</script>

<style scoped>
.page{
  text-align: center;

}

.list-item {
  margin: 25px 0;
}

.class-list{
  margin-top: 30px;
}

.user-list {

   display: flex;
  display: -webkit-flex;
   -webkit-justify-content: space-between;
  justify-content: flex-start ;
  -webkit-flex-wrap: flex-start ;
  flex-wrap: wrap;
  margin-top: 30px;
  width: 98%;
}

.user-list-item{
  margin: 25px 0;
  margin-right: 3%;
  width: 22%;
  height: 250px;
}
</style>