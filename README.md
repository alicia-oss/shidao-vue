# shidao

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


```
├─ src
│  ├─ App.vue
│  ├─ assets
│  │  ├─ css
│  │  │  ├─ base.css
│  │  │  └─ normalize.css
│  │  └─ img
│  │     ├─ admin.jpg
│  │     └─ LoginBg.svg
│  ├─ components
│  │  ├─ common
│  │  │  ├─ bigtabbar
│  │  │  │  ├─ TabBar.vue
│  │  │  │  └─ TabBarItem.vue
│  │  │  ├─ navbar
│  │  │  │  └─ NavBar.vue
│  │  │  ├─ tabbar
│  │  │  │  └─ TabControl.vue
│  │  │  └─ upload
│  │  │     ├─ AvUpload.vue
│  │  │     └─ PicsUpload.vue
│  │  └─ contant
│  │     ├─ back
│  │     │  └─ HeaderBack.vue
│  │     ├─ bottom
│  │     │  └─ Bottom.vue
│  │     ├─ class
│  │     │  ├─ BigClassCard.vue
│  │     │  └─ ClassCard.vue
│  │     ├─ collect
│  │     │  └─ CollectButton.vue
│  │     ├─ comment
│  │     │  └─ Comment.vue
│  │     ├─ order
│  │     │  └─ OrderCard.vue
│  │     ├─ search
│  │     │  └─ SearchItem.vue
│  │     ├─ sider
│  │     │  └─ FormSider.vue
│  │     ├─ user
│  │     │  ├─ TeacherCard.vue
│  │     │  ├─ test.vue
│  │     │  └─ UserCardOne.vue
│  │     └─ usertab
│  ├─ main.js
│  ├─ network
│  │  ├─ classDetail.js
│  │  ├─ createClass.js
│  │  ├─ home.js
│  │  ├─ login.js
│  │  ├─ register.js
│  │  ├─ request.js
│  │  └─ search.js
│  ├─ router
│  │  └─ index.js
│  ├─ store
│  │  └─ index.js
│  └─ views
│     ├─ classDetail
│     │  ├─ childComponents
│     │  │  ├─ ClassComment.vue
│     │  │  ├─ ClassDetailNavBar.vue
│     │  │  ├─ ClassDetailTop.vue
│     │  │  ├─ ClassIntro.vue
│     │  │  └─ Sider.vue
│     │  └─ ClassDetail.vue
│     ├─ createClass
│     │  ├─ childComponents
│     │  │  ├─ ClassForm.vue
│     │  │  └─ Sider.vue
│     │  └─ CreateClass.vue
│     ├─ createHelp
│     ├─ helpDetail
│     ├─ home
│     │  ├─ childcomponents
│     │  │  ├─ ClassList.vue
│     │  │  ├─ HomeLogin.vue
│     │  │  ├─ HomeNavBar.vue
│     │  │  ├─ HomeSwiper.vue
│     │  │  ├─ HomeTab.vue
│     │  │  ├─ HomeUserTab.vue
│     │  │  ├─ RecommandClass.vue
│     │  │  └─ RecommandTeacher.vue
│     │  └─ Home.vue
│     ├─ login
│     │  ├─ chlidcomponents
│     │  │  └─ LoginContant.vue
│     │  └─ Login.vue
│     ├─ orderDetail
│     ├─ profile
│     │  ├─ childComponents
│     │  │  ├─ ProfileHeader.vue
│     │  │  ├─ ProfileMyClass.vue
│     │  │  ├─ ProfileMyHelp.vue
│     │  │  ├─ ProfileMyInfo.vue
│     │  │  ├─ ProfileMyOrder.vue
│     │  │  ├─ ProfileMyStudy.vue
│     │  │  └─ ProfileSider.vue
│     │  └─ Profile.vue
│     ├─ register
│     │  ├─ childComponents
│     │  │  ├─ RegisterForm.vue
│     │  │  └─ Sider.vue
│     │  └─ Register.vue
│     ├─ searchResult
│     │  ├─ childComponents
│     │  │  ├─ RecommandClass.vue
│     │  │  ├─ SearchResultList.vue
│     │  │  ├─ SearchResultNavBar.vue
│     │  │  └─ SearchResultTab.vue
│     │  └─ SearchResult.vue
│     └─ userDetail
└─ vue.config.js

```