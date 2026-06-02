# koa2-fs

这是一个基于Koa实现的文件服务器，提供上传、下载、删除、移动、更新和查询文件的功能。

RESTful风格的API。

用户可以上传文件到公共文件夹或以username命名的私有文件夹。

## 环境准备

+ node：>= 18.0.0
+ 安装nodemon ``` npm i nodemon -g 或者 npm i nodemon -D```

## 目录结构

```
koa2-fs
├── package.json
├── app.js (项目入口文件)
├── app
│   ├── controller
│   │   └── fsController.js
│   ├── helper
│   │   ├── cors.js (跨域处理)
│   │   └── error.js (异常处理)
│   ├── router
│   │   ├── router.js (路由总配置)
│   │   └── api.js (RESTful API 路由配置)
│   ├── service
│   │   ├── impl
│   │   │   ├── upload.js
│   │   │   ├── download.js
│   │   │   ├── delete.js
│   │   │   ├── move.js
│   │   │   ├── update.js
│   │   │   └── list.js
│   │   └── fsService.js
├── config
│   ├── config.default.js (服务器配置文件)
│   └── config.prod.js (生产环境配置)
└── fs (文件存储目录，运行时创建)
    ├── public (公共文件)
    └── private (私有文件)
```

## 运行启动

~~~ shell
cd koa2-fs
npm install
npm start
~~~

## 接口文档

### 下载文件

+ **下载公有文件**

**接口地址:** `GET /fs/public/<filename>`

| Property | Details |
| -------- | ------- |
| filename | 文件名  |

+ **下载私有文件**

**接口地址:** `GET /fs/private/<username>/<filename>`

| Property | Details |
| -------- | ------- |
| username | 用户名  |
| filename | 文件名  |

### 上传文件

+ **上传公有文件**

**接口地址:** `POST /fs/public/<filename>`

| Property | Details |
| -------- | ------- |
| filename | 文件名  |

+ **上传私有文件**

**接口地址:** `POST /fs/private/<username>/<filename>`

| Property | Details |
| -------- | ------- |
| username | 用户名  |
| filename | 文件名  |

### 更新文件

+ **更新公有文件**

**接口地址:** `PUT /fs/public/<filename>`

| Property | Details |
| -------- | ------- |
| filename | 文件名（必须已存在）  |

+ **更新私有文件**

**接口地址:** `PUT /fs/private/<username>/<filename>`

| Property | Details |
| -------- | ------- |
| username | 用户名  |
| filename | 文件名（必须已存在）  |

> 更新文件时，在原位置覆盖写入，保留文件的创建时间（birthtime），修改时间（mtime）自动更新为当前时间。

### 删除文件

+ **删除公有文件**

**接口地址:** `DELETE /fs/public/<filename>`

| Property | Details |
| -------- | ------- |
| filename | 文件名  |

+ **删除私有文件**

**接口地址:** `DELETE /fs/private/<username>/<filename>`

| Property | Details |
| -------- | ------- |
| username | 用户名  |
| filename | 文件名  |

### 移动文件

+ **移动私有文件到公共文件夹**

**接口地址:** `PATCH /fs/private/<username>/<filename>`

**请求体:**

``` json
{
  "targetType": "public"
}
```

| Property | Details |
| -------- | ------- |
| username | 用户名  |
| filename | 文件名  |
| targetType | 目标文件夹类型（public 或 private）  |

### 文件列表

+ **查询所有文件**

**接口地址:** `GET /fs/list/all`

+ **查询公共文件**

**接口地址:** `GET /fs/list/public`

+ **查询所有私有文件**

**接口地址:** `GET /fs/list/private`

+ **查询指定用户的私有文件**

**接口地址:** `GET /fs/list/private/<username>`

| Property | Details |
| -------- | ------- |
| username | 用户名  |

返回示例：

``` json
{
  "success": true,
  "count": 2,
  "files": [
    {
      "name": "example.txt",
      "path": "/path/to/fs/public/example.txt",
      "size": 1024,
      "birthtime": "2026-01-01T00:00:00.000Z",
      "mtime": "2026-06-02T00:00:00.000Z"
    }
  ]
}
```
