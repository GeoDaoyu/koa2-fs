const fs = require('fs')
const cfg = require('../../../config/config.default')
const path = require('path')
module.exports = {
  async impl (ctx) {
    console.log(path.join(cfg.root, ctx.path))
    fs.unlink(path.join(cfg.root, ctx.path), (err) => {
      
    })
  }
}
