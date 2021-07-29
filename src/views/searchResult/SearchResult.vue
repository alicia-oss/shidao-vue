<template>
  <div>
    <div class="navbar">
      <el-row>
        <el-col :span="20" :offset="2">
          <search-result-nav-bar class="bar" ></search-result-nav-bar>
        </el-col>
      </el-row>
    </div>
    <div class="breadcrumb">
      <el-row >
          <el-col :span="20" :offset="2">
            <el-breadcrumb class="contant" separator="/">
              <el-breadcrumb-item  :to="{ path: '/home' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>搜索结果</el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>
      </el-row>
      </div>
        <el-row >
          <el-col :span="14" :offset="2" class="list">
            <div class="list-number">共<span class="number">{{listData.classList.number}}</span>条与<span class="number">{{keyWord}}</span>相关的结果</div>
            <div class="tab"><search-result-tab @ItemClick = "TabClick"></search-result-tab></div>
            <div class="list"><search-result-list :data="listData" :index="listTabIndex"></search-result-list></div>
          </el-col>
           <el-col :span="6" class="recommond">
            <recommand-class :classes="recommandClasses"></recommand-class>
          </el-col>
        </el-row>
   
  </div>
</template>

<script>
import SearchResultNavBar from './childComponents/SearchResultNavBar.vue';
import SearchResultTab from './childComponents/SearchResultTab.vue';
import SearchResultList from './childComponents/SearchResultList.vue';
import RecommandClass from './childComponents/RecommandClass.vue';

export default {
  name: "SearchResult",
  data() {
    return {
      keyWord:"",
      listTabIndex: 0,
      navBarData: {
        username:"测试用户名",
        userImg:"admin.jpg"
      },
      listData: {
  
        classList: {
        number: "30",
        list:[
          {
            img:"	https://edu-image.nosdn.127.net/315E9C5EA9F821DB257B6CA2F028D21D.png?imageView&thumbnail=510y288&quality=100",
            title: "西式烹饪工艺--土豆烧牛逼",
            price:"998.99",
            time:"20.00",
            teacherName: "大厨老八"
          },
          {
            img:"	https://edu-image.nosdn.127.net/315E9C5EA9F821DB257B6CA2F028D21D.png?imageView&thumbnail=510y288&quality=100",
            title: "西式烹饪工艺--土豆烧牛逼",
            price:"998.99",
            time:"20.00",
            teacherName: "大厨王刚"
          },
          {
            img:"	https://edu-image.nosdn.127.net/315E9C5EA9F821DB257B6CA2F028D21D.png?imageView&thumbnail=510y288&quality=100",
            title: "西式烹饪工艺--土豆烧牛逼",
            price:"998.99",
            time:"20.00",
            teacherName: "大厨王刚"
          },
          {
            img:"https://edu-image.nosdn.127.net/315E9C5EA9F821DB257B6CA2F028D21D.png?imageView&thumbnail=510y288&quality=100",
            title: "西式烹饪工艺--土豆烧牛逼",
            price:"998.99",
            time:"20.00",
            teacherName: "大厨王刚"
          },
          {
            img:"	https://edu-image.nosdn.127.net/315E9C5EA9F821DB257B6CA2F028D21D.png?imageView&thumbnail=510y288&quality=100",
            title: "西式烹饪工艺--土豆烧牛逼",
            price:"998.99",
            time:"20.00",
            teacherName: "大厨王刚"
          },
          ]
        },
        helpList: {

        }
      } ,
      recommandClasses: [{
          img:"https://edu-image.nosdn.127.net/12149ec4ca034069a03d50a5f5857ad1.png?imageView&quality=100",
          title:"【零基础Python数据分析】搞定考研和500强面试（7月21日）",
          username:"中国大学mooc",
          money:"99"
        },
        {
          img:"https://edu-image.nosdn.127.net/12149ec4ca034069a03d50a5f5857ad1.png?imageView&quality=100",
          title:"【零基础Python数据分析】搞定考研和500强面试（7月21日）",
          username:"中国大学mooc",
          money:"99"
        },
        {
          img:"https://edu-image.nosdn.127.net/12149ec4ca034069a03d50a5f5857ad1.png?imageView&quality=100",
          title:"【零基础Python数据分析】搞定考研和500强面试（7月21日）",
          username:"中国大学mooc",
          money:"99.00"
        },
        {
          img:"https://edu-image.nosdn.127.net/12149ec4ca034069a03d50a5f5857ad1.png?imageView&quality=100",
          title:"【零基础Python数据分析】搞定考研和500强面试（7月21日）",
          username:"中国大学mooc",
          money:"99"
        },
        {
          img:"https://edu-image.nosdn.127.net/12149ec4ca034069a03d50a5f5857ad1.png?imageView&quality=100",
          title:"【零基础Python数据分析】搞定考研和500强面试（7月21日）",
          username:"中国大学mooc",
          money:"99"
        },
         {
          img:"https://edu-image.nosdn.127.net/12149ec4ca034069a03d50a5f5857ad1.png?imageView&quality=100",
          title:"【零基础Python数据分析】搞定考研和500强面试（7月21日）",
          username:"中国大学mooc",
          money:"99"
        }]
      } 
  },
  components: {
    SearchResultNavBar,
    SearchResultTab,
    SearchResultList,
    RecommandClass
  },
  methods: {
    TabClick(index) {
      this.listTabIndex = index;
    }
  },
  created() {
    this.keyWord = this.$route.query.keyword;
  }
  
}
</script>

<style scoped>
.navbar {
  height: 80px;
  width: 100%;
  background-color: black;
}

.bar {
  margin-top: 10px;
}

.breadcrumb {
  height: 55px;
  width: 100%;
  background-color: white;

}

.breadcrumb .contant {

line-height: 55px;
    font-size: var(--font-size-big) ;
}

.list-number {
  height: 89px;
  line-height: 89px;
  font-size: var(--font-size);
}

.number {
  color: var(--color-high-text);
}



</style>