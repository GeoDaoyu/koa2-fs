# koa2-fs

这打算是一个基于Koa实现的文件服务器，提供上传、下载和删除文件的功能。

## 环境准备

+ 操作系统：Windows
+ node：>= 8.0.0
+ 安装nodemon ``` npm i nodemon -g 或者 npm i nodemon -D```

## 目录结构
参考Egg.js，目录结构如下:

```
koa2-fs
├── package.json
├── app.js (项目入口文件)
├── app
│   ├── controller
│   |   └── fsController.js
│   ├── helper
│   │   ├── cors.js (跨域处理)
│   |   └── error.js (异常处理)
│   ├── router (可选)
│   │   ├── router.js (路由总配置)
│   |   └── api.js (RESTful API 路由配置)
│   ├── servie
│   │   ├── impl
│   │   │   ├── delete.js
│   │   │   ├── upload.js
│   |   │   └── download.js
│   |   └── fsService.js
├── config
│   └──  config.default.js (服务器配置文件)
└── fs (文件管理文件夹)
    ├──  public (公共文件文件夹)
    └──  private (私有文件文件夹)
```

## 运行启动

~~~ shell
cd koa2-fs
npm install
npm start
~~~

## 未完待续

+ 功能
  + 移动文件夹：从私有文件夹移动到公共文件夹
  + 更新文件：
+ 测试
  准备用[Jest](https://jestjs.io/zh-Hans/)测试api接口
+ 混淆压缩
  没想好用什么做
+ 部署
  准备用[pm2](http://pm2.keymetrics.io/)管理进程