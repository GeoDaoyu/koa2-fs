import cors from 'koa2-cors'
import cfg from '../../config/config.default.js'

export default cors({
  origin: cfg.allowOrigin,
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 600,
  credentials: true,
  allowMethods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
})
