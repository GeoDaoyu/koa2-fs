const fs = require('fs')
const cfg = require('../../../config/config.default')
const path = require('path')
module.exports = {
  async impl (ctx) {
    fs.unlink(path.join(cfg.root, ctx.path), (err) => {
      if (err) throw err
      return true
    })
  }
}
