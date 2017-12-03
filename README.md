# 文件结构以及意义
```js
actualProject
    |    |---core                核心模块。
    |    |    |---images         公共图片。
    |    |    |---lib            第三方资源。
    |    |    |    |---normalize.css       css初始化。
    |    |    |    |---jquery-3.2.1.js     jq包。
    |    |    |    |---less.min.js         less包。
    |    |    |    |---fun.js              公共方法。
    |    |    |    |---storingUser.js      初始化用户数据。
    |    |    |    |---bootstrap.min.js    bootstrapJS包。
    |    |    |    |---bootstrap.min.css   bootstrapCSS包。
    |    |    |    |---underscore-min.js   underscoreJS包。
    |    |    |    |---animate.js          animate包。  
    |    |    |
    |    |    |---header.html       头部公共代码。
    |    |    |---footer.html       头部公共代码。
    |    |    |---style.less        公共样式。
    |    |
    |    |---homePage       首页。
    |    |---login          登陆注册页。
    |    |---articels       产品。
    |    |---Features       
    |    |---GetStarted
    |    |---Pricing
    |    |---ArticelsDatalis
    |
    |---page.json                     项目的内容数据。
    |---README.md                     项目信息。


/////////////////数据结构/////////////////
//用户表
// users
{
    phone: '123456', // 手机号码
    password: 'xxxxx',
    id: 066624, // 用户ID
    photo: './core/images/portrait.png', // 头像
    fillName: 'xxxx',   // 全名
    emall: 'xxx@xx.com',  // 邮箱
    sex: 'man/',    // 性别
    servcice: 'smile/cry'  // 心情
    text: 'xxxx',    // 个人简介
},

{
    "吴昊": "Articels",
    "李晓艳": "Features",
    "吴加良": "GetStarted",
    "邓军祥": "HomePage",
    "何勇": "Pricing",
    "李晓艳"： "ArticelsDatalis"
}
```