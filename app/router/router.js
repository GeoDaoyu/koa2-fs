/**
 * 整合所有路由
 */
const router = require('koa-router')()

const api = require('./api')
router.use('/fs', api.routes(), api.allowedMethods())

module.exports = router
