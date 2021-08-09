<template>
  <div class="home-nav-bar">
    <nav-bar>
          <div slot="left" class="left" @click="backHome">
            <div>
            <span class="one">师到学堂</span>
            <span class="two">你的职业学堂</span>
            </div>
          </div>
          <div slot="center" class="center">
            <search-item></search-item>
          </div>
          <div slot="right">
            <home-user-tab></home-user-tab>
          </div>
        </nav-bar>
  </div>
</template>

<script>
import NavBar from '../../../components/common/navbar/NavBar.vue';
import SearchItem from 'components/contant/search/SearchItem';
import HomeUserTab from './HomeUserTab.vue';
export default {
  name: 'HomeNavBar',
 
  components: {
    NavBar,
    SearchItem,
    HomeUserTab
  },
  methods:{
    backHome(){
      this.$router.push("/home");
    }
  }

}
</script>

<style scoped>
.home-nav-bar {
  width: 100%;
  margin: 10px 0;
}

.left .one{
  display: block;
  color: #000;
  font-size: 40px;
  font-weight:normal;
  letter-spacing: 2px;
}

.left .two {
  display: block;
  color: var(--color-text);
  font-size: var(--font-size-big);
  letter-spacing: 3px;
}

.center {

  padding: 6.5px 120px;
}




</style>