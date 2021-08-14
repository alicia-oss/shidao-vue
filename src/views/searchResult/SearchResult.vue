<template>
  <div>
    <div class="navbar">
      <el-row>
        <el-col :span="20" :offset="2">
          <search-result-nav-bar class="bar" ></search-result-nav-bar>
        </el-col>
      </el-row>
    </div>
    <header-back pageName="搜索结果"></header-back>
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
import {ClassSearch} from '../../network/search';
import SearchResultNavBar from './childComponents/SearchResultNavBar.vue';
import SearchResultTab from './childComponents/SearchResultTab.vue';
import SearchResultList from './childComponents/SearchResultList.vue';
import RecommandClass from './childComponents/RecommandClass.vue';
import HeaderBack from '../../components/contant/back/HeaderBack.vue'

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
        number: 5,
        page:1,
        list:[
          // {
          //   id:"12",
          //   img:"	https://edu-image.nosdn.127.net/315E9C5EA9F821DB257B6CA2F028D21D.png?imageView&thumbnail=510y288&quality=100",
          //   title: "西式烹饪工艺--土豆烧肉",
          //   intro:"厨师长教你：“鸡蛋下饭菜”的三种做法，咸鲜微辣，拌饭拌面很赞!厨师长教你：“鸡蛋下饭菜”的三种做法，咸鲜微辣，拌饭拌面很赞!!厨师长教你：“鸡蛋下饭菜”的三种做法，咸鲜微辣，拌饭拌面很赞!!!",
          //   price:"998.99",
          //   time:"20.00",
          //   teacherName: "大厨老八",
          //   score:3.9
          // },
          // {
          //   id:"12",
          //   img:"	https://edu-image.nosdn.127.net/315E9C5EA9F821DB257B6CA2F028D21D.png?imageView&thumbnail=510y288&quality=100",
          //   title: "西式烹饪工艺--土豆烧肉",
          //   intro:"厨师长教你：“鸡蛋下饭菜”的三种做法，咸鲜微辣，拌饭拌面很赞!厨师长教你：“鸡蛋下饭菜”的三种做法，咸鲜微辣，拌饭拌面很赞!!厨师长教你：“鸡蛋下饭菜”的三种做法，咸鲜微辣，拌饭拌面很赞!!!",
          //   price:"998.99",
          //   time:"20.00",
          //   teacherName: "大厨王刚",
          //   score:3.9
          // },
          // {
          //   id:"12",
          //   img:"	https://edu-image.nosdn.127.net/315E9C5EA9F821DB257B6CA2F028D21D.png?imageView&thumbnail=510y288&quality=100",
          //   title: "西式烹饪工艺--土豆烧肉",
          //   intro:"厨师长教你：“鸡蛋下饭菜”的三种做法，咸鲜微辣，拌饭拌面很赞!厨师长教你：“鸡蛋下饭菜”的三种做法，咸鲜微辣，拌饭拌面很赞!!厨师长教你：“鸡蛋下饭菜”的三种做法，咸鲜微辣，拌饭拌面很赞!!!",
          //   price:"998.99",
          //   time:"20.00",
          //   teacherName: "大厨王刚",
          //   score:3.9
          // },
          // {
          //   id:"12",
          //   img:"https://edu-image.nosdn.127.net/315E9C5EA9F821DB257B6CA2F028D21D.png?imageView&thumbnail=510y288&quality=100",
          //   title: "西式烹饪工艺--土豆烧肉",
          //   intro:"厨师长教你：“鸡蛋下饭菜”的三种做法，咸鲜微辣，拌饭拌面很赞!厨师长教你：“鸡蛋下饭菜”的三种做法，咸鲜微辣，拌饭拌面很赞!!厨师长教你：“鸡蛋下饭菜”的三种做法，咸鲜微辣，拌饭拌面很赞!!!",
          //   price:"998.99",
          //   time:"20.00",
          //   teacherName: "大厨王刚",
          //   score:3.9
          // },
          // {
          //   id:"12",
          //   img:"	https://edu-image.nosdn.127.net/315E9C5EA9F821DB257B6CA2F028D21D.png?imageView&thumbnail=510y288&quality=100",
          //   title: "西式烹饪工艺--土豆烧肉",
          //   intro:"厨师长教你：“鸡蛋下饭菜”的三种做法，咸鲜微辣，拌饭拌面很赞!厨师长教你：“鸡蛋下饭菜”的三种做法，咸鲜微辣，拌饭拌面很赞!!厨师长教你：“鸡蛋下饭菜”的三种做法，咸鲜微辣，拌饭拌面很赞!!!",
          //   price:"998.99",
          //   time:"20.00",
          //   teacherName: "大厨王刚",
          //   score:3.9
          // },
          ]
        },
        helpList: {

        },
        userList: {
          number:30,
          page:1,
          list:[
            {
            id:"15",
            domain:"IT",
            username:"泡泡老师",
            intro:"CF十年老枪战游戏，实现3亿电竞人的枪战王者梦，做梦一般是大脑在睡眠时兴奋的体现。服务无数喜欢IT年轻人",
            img:"https://edu-image.nosdn.127.net/4b9cd4995f6b41089aae13621c32d867.jpg",
            },
            {
            id:"15",
            domain:"IT",
            username:"泡泡老师",
            intro:"CF十年老枪战游戏，实现3亿电竞人的枪战王者梦，做梦一般是大脑在睡眠时兴奋的体现。服务无数喜欢IT年轻人",
            img:"https://edu-image.nosdn.127.net/4b9cd4995f6b41089aae13621c32d867.jpg",
            },
            {
            id:"15",
            domain:"IT",
            username:"泡泡老师",
            intro:"CF十年老枪战游戏，实现3亿电竞人的枪战王者梦，做梦一般是大脑在睡眠时兴奋的体现。服务无数喜欢IT年轻人",
            img:"https://edu-image.nosdn.127.net/4b9cd4995f6b41089aae13621c32d867.jpg",
            },
            {
            id:"15",
            domain:"IT",
            username:"泡泡老师",
            intro:"CF十年老枪战游戏，实现3亿电竞人的枪战王者梦，做梦一般是大脑在睡眠时兴奋的体现。服务无数喜欢IT年轻人",
            img:"https://edu-image.nosdn.127.net/4b9cd4995f6b41089aae13621c32d867.jpg",
            },
            {
            id:"15",
            domain:"IT",
            username:"泡泡老师",
            intro:"CF十年老枪战游戏，实现3亿电竞人的枪战王者梦，做梦一般是大脑在睡眠时兴奋的体现。服务无数喜欢IT年轻人",
            img:"https://edu-image.nosdn.127.net/4b9cd4995f6b41089aae13621c32d867.jpg",
            },
            {
            id:"15",
            domain:"IT",
            username:"泡泡老师",
            intro:"CF十年老枪战游戏，实现3亿电竞人的枪战王者梦，做梦一般是大脑在睡眠时兴奋的体现。服务无数喜欢IT年轻人",
            img:"https://edu-image.nosdn.127.net/4b9cd4995f6b41089aae13621c32d867.jpg",
            },
            {
            id:"15",
            domain:"IT",
            username:"泡泡老师",
            intro:"CF十年老枪战游戏，实现3亿电竞人的枪战王者梦，做梦一般是大脑在睡眠时兴奋的体现。服务无数喜欢IT年轻人",
            img:"https://edu-image.nosdn.127.net/4b9cd4995f6b41089aae13621c32d867.jpg",
            },
          ]
        }
      } ,
      recommandClasses: [{
        id:11,
          img:"https://edu-image.nosdn.127.net/12149ec4ca034069a03d50a5f5857ad1.png?imageView&quality=100",
          title:"【零基础Python数据分析】搞定考研和500强面试（7月21日）",
          username:"中国大学mooc",
          money:"99",
          score:3.9
        },
        {
          id:11,
          img:"https://edu-image.nosdn.127.net/12149ec4ca034069a03d50a5f5857ad1.png?imageView&quality=100",
          title:"【零基础Python数据分析】搞定考研和500强面试（7月21日）",
          username:"中国大学mooc",
          money:"99",
          score:3.9
        },
        {
          id:11,
          img:"https://edu-image.nosdn.127.net/12149ec4ca034069a03d50a5f5857ad1.png?imageView&quality=100",
          title:"【零基础Python数据分析】搞定考研和500强面试（7月21日）",
          username:"中国大学mooc",
          money:"99.00",
          score:3.9
        },
        {
          id:11,
          img:"https://edu-image.nosdn.127.net/12149ec4ca034069a03d50a5f5857ad1.png?imageView&quality=100",
          title:"【零基础Python数据分析】搞定考研和500强面试（7月21日）",
          username:"中国大学mooc",
          money:"99",
          score:3.9
        },
      ]
      } 
  },
  components: {
    SearchResultNavBar,
    SearchResultTab,
    SearchResultList,
    RecommandClass,
    HeaderBack
  },
  methods: {
    TabClick(index) {
      this.listTabIndex = index;
    },
    UpData(){
      this.keyWord = this.$route.query.keyword;
      this.GetClass();
      

  
    },
    GetClass(){    
      ClassSearch(this.keyWord,this.listData.classList.page).then((res)=>{
      console.log("!!搜索结果课程:")
      console.log(res);
      let classInfos = res.data.classInfos;
      let userInfos = res.data.userInfos;
      let imgs = res.data.imgPath;
     this.listData.classList.number = res.data.resultNum;
     this.listData.classList.list = new Array();
      for(let i = 0;i<classInfos.length;i++){
        let obj = {
            id : classInfos[i].id,
            img : imgs[i],
            title : classInfos[i].title,
            intro : classInfos[i].textIntro,
            price : classInfos[i].price,
            time : classInfos[i].suggestTime,
            teacherName : userInfos[i].username,
            score : 3.9,
        }
        if(obj.img === "no picture") obj.img ="ClassDefault.jpeg";
      this.listData.classList.list.push(obj);
      
      }      
    })

    }
  },
  created() {
    this.UpData()
  },
  watch: {
    $route: {
          handler() {
              this.UpData();
              //深度监听，同时也可监听到param参数变化
        },
        deep: true,
    }
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


.list-number {
  height: 89px;
  line-height: 89px;
  font-size: var(--font-size);
}

.number {
  color: var(--color-high-text);
}



</style>