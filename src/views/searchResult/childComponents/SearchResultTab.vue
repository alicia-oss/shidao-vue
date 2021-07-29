<template>
  <div class="tab">
    <div class="contant">
    <tab-control class="item" :names = "names" @ItemClick ='TabClick'></tab-control>
    </div>

  </div>

</template>

<script>

import TabControl from 'components/common/tabbar/TabControl.vue';
export default {
  name: "SearchResultTab",
  components:{
    TabControl  
  },
  data() {
    return{
      names: ["课程","求助","用户"]
    }
  },
  methods: {
    TabClick(index) {
      this.$emit('ItemClick',index);
    }
  }

}
</script>

<style scoped>
.tab {
  width: 95%;
  background-color: var( --color-background-one);
  border: 1px solid rgba(102, 102, 102, 0.4);
}

.contant {
  width: 25%;
}


</style>