<template>
  <div class="tab-control">
    <div class="tab-item" v-for="(item, index) in names"  @click="ClickItem(index)"><span :class="{current : (currentIndex === index)}">{{item}}</span></div>

  </div>
</template>

<script>
//可以与父组件双向绑定，当有多个TabBar需要同步时
export default {
  name: 'TabControl',
  data() {
    return {
      currentIndex: 0
    }

  },
  props:{
    names:{
      type: Array,
      default() {
        return []
      },
    },
     currentItem: {
        type: Number,
        default: 0
      }
  },
  methods: {
    ClickItem(index){ 
      this.$emit('ItemClick',index);
      this.currentIndex = index;
    }
  },
  watch: {
    currentItem(val) {
      this.currentIndex = val
    },
    currentIndex(index) {
      this.$emit('ItemClick',index);
    },
  }
  

}
</script>

<style scoped>
  .tab-control {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
  }

  .tab-item {
    flex: 1;
    font-size: 18px;
    color: #666;
  }

  .current {
    color: var(--color-high-text);
    border-bottom: 2px solid var(--color-high-text);
    padding: 10px 5px;
  }

</style>