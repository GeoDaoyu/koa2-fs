# koa2-fs

这打算是一个基于Koa实现的文件服务器，提供上传、下载和删除文件的功能。

## 目录结构
参考Egg.js，目录结构如下:

```
koa2-fs
├── package.json
├── app.js (项目入口文件)
├── app
│   ├── controller
│   |   └── fs.js
│   ├── helper 
│   |   └── cors.js (跨域处理)
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
    ├──  public (公有文件文件夹)
    └──  private (私有文件文件夹)
```