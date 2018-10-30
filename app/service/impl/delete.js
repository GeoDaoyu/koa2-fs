const fs = require('fs')
const cfg = require('../../../config/config.default')
const path = require('path')
const unlink = require('util').promisify(fs.unlink)

module.exports = {
  async impl (ctx) {
    const filePath = path.join(cfg.root, decodeURI(ctx.path))
    await unlink(filePath)
    return {
      success: true,
      filePath
    }
  }
}
