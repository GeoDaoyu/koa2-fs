const Koa = require('koa')
const controller = require('./controller')
const cfg = require('./config')
const app = new Koa()

const koaBody = require('koa-body');

app.use(koaBody({
  multipart: true,
  formidable: {
    maxFileSize: 200*1024*1024
  }
}));
// app.use(bodyParser())
app.use(controller())

app.listen(cfg.port, cfg.host, () => {
  console.log(`Server started at http://${cfg.host}:${cfg.port}`)
})
