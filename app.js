const chalk = require('chalk')

const cfg = require('./config/config.default')

const Koa = require('koa')
const app = new Koa()

const cors = require('./app/helper/cors')
app.use(cors)

const errorHandle = require('./app/helper/error')
app.use(errorHandle)

const koaBody = require('koa-body')
app.use(koaBody({
  multipart: true,
  formidable: {
    maxFileSize: 200*1024*1024
  }
}))

const routers = require('./app/router/router')
app.use(routers.routes()).use(routers.allowedMethods())

app.listen(cfg.port, cfg.host, () => {
  const address = `http://${cfg.host}:${cfg.port}`
  console.info(`Server started at ${chalk.green(address)}`);
})
