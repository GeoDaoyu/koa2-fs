/**
 * RESTful API 子路由
 */
const router = require('koa-router')()
const fsController = require('../controller/fs')

const routers = router
  .get('/public/:filename', fsController.getFile)
  .get('/pravite/:username/:filename', fsController.getFile)
  .post('/public/:filename', fsController.setFile)

module.exports = routers