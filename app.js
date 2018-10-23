const Koa = require('koa')
const controller = require('./controller')
const cfg = require('./config')
const cors = require('koa2-cors')
const app = new Koa()

const koaBody = require('koa-body')

app.use(koaBody({
  multipart: true,
  formidable: {
    maxFileSize: 200*1024*1024
  }
}))

app.use(cors({
  origin: function (ctx) {
      return 'http://localhost:8081'
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))

// app.use(bodyParser())
app.use(controller())

app.listen(cfg.port, cfg.host, () => {
  console.log(`Server started at http://${cfg.host}:${cfg.port}`)
})
