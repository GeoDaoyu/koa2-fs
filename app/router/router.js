import Router from '@koa/router'
import api from './api.js'

const router = new Router()
router.use('/fs', api.routes(), api.allowedMethods())

export default router
