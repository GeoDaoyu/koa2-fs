import chalk from 'chalk'
import cfg from './config/config.default.js'
import Koa from 'koa'
import cors from './app/helper/cors.js'
import errorHandle from './app/helper/error.js'
import { koaBody } from 'koa-body'
import routers from './app/router/router.js'

const app = new Koa()

app.use(cors)
app.use(errorHandle)
app.use(koaBody({
  multipart: true,
  formidable: {
    maxFileSize: 200 * 1024 * 1024
  }
}))

app.use(routers.routes()).use(routers.allowedMethods())

app.listen(cfg.port, cfg.host, () => {
  const address = `http://${cfg.host}:${cfg.port}`
  console.info(`Server started at ${chalk.green(address)}`);
})
