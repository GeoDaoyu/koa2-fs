/**
 * RESTful API 子路由
 */
const router = require('koa-router')()
const fsController = require('../controller/fsController')

const routers = router
  .get('/:type/:filename', fsController.getFile)
  .get('/:type/:username/:filename', fsController.getFile)
  .post('/:type/:filename', fsController.setFile)
  .post('/:type/:username/:filename', fsController.setFile)
  .delete('/:type/:filename', fsController.deleteFile)
  .delete('/:type/:username/:filename', fsController.deleteFile)

module.exports = routers