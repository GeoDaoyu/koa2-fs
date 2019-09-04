# koa2-fs

这是一个基于Koa实现的文件服务器，提供上传、下载和删除文件的功能。

RESTful风格的API。

用户可以上传文件到公共文件夹或以username命名的私有文件夹。

## 环境准备

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

## 接口文档

+ **下载公有文件**

**接口地址:**`http://127.0.0.1:3000/fs/public/<filename>`

**请求方式：**get
**参数说明：**

| Property | Details |
| -------- | ------- |
| filename | 文件名  |

+ **下载私有文件**

**接口地址:**`http://127.0.0.1:3000/fs/private/<username>/<filename>`

**请求方式：**get

| Property | Details |
| -------- | ------- |
| username | 用户名  |
| filename | 文件名  |

+ **上传公有文件**

**接口地址:**`http://127.0.0.1:3000/fs/public/<filename>`

**请求方式：**post
**参数说明：**

| Property | Details |
| -------- | ------- |
| filename | 文件名  |

+ **上传私有文件**

**接口地址:**`http://127.0.0.1:3000/fs/private/<username>/<filename>`

**请求方式：**post

| Property | Details |
| -------- | ------- |
| username | 用户名  |
| filename | 文件名  |

+ **删除公有文件**

**接口地址:**`http://127.0.0.1:3000/fs/public/<filename>`

**请求方式：**delete
**参数说明：**

| Property | Details |
| -------- | ------- |
| filename | 文件名  |

+ **删除私有文件**

**接口地址:**`http://127.0.0.1:3000/fs/private/<username>/<filename>`

**请求方式：**delete

| Property | Details |
| -------- | ------- |
| username | 用户名  |
| filename | 文件名  |

## 未完待续

+ 功能
  + 移动文件夹：从私有文件夹移动到公共文件夹
  + 更新文件：新文件替换旧文件，思考如何处理创建时间和修改时间
  + 文件列表：查询所有文件、公共文件和私有文件
+ 部署
  准备用[pm2](http://pm2.keymetrics.io/)管理进程