const cors = require('koa2-cors')
const cfg = require('../../config/config.default')
module.exports = cors({
  origin: cfg.allowOrigin,
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 600,
  credentials: true,
  allowMethods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
})
