<template>
<div>
  <nav-bar>
    <div slot="left">
      <div class="logo" @click="backHome">师到课堂</div>
    </div>
    <div class="center" slot="center">
      <search-item  class="search-item" buttonColor = "rgb(71, 68, 67)" contantColor = "rgb(71, 68, 67)"></search-item>
      <top-down-menu></top-down-menu>
    </div>
    <div slot="right">
      <home-user-tab  fontColor="white"></home-user-tab>
    </div>
  </nav-bar>
</div>
  

</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue';
import SearchItem from 'components/contant/search/SearchItem.vue';
import HomeUserTab from '../../home/childcomponents/HomeUserTab.vue';
import TopDownMenu from '../../../components/contant/downMenu/TopDownMenu.vue';

export default {
  name: 'SearchResultNavBar' ,
  
  components: {
    NavBar,
    SearchItem,
    HomeUserTab,
    TopDownMenu
  },
  methods:{
    backHome(){
      this.$router.push("/home");
    }
  }

}
</script>

<style scoped>
 .logo{
  display: block;
  height: 60px;
  line-height: 60px;
  color: white;
  font-size: var(--font-size-very-big);
  font-weight:normal;
  letter-spacing: 2px;
}


.center {
  padding: 6.5px 120px;
}

</style>