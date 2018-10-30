const path = require('path')
const fs = require('fs')
const exists = require('util').promisify(fs.exists)
const cfg = require('../../../config/config.default')

module.exports = {
  async impl (ctx) {
    let filePath = ''
    if (ctx.params.type === 'public') {
      filePath = await this.publicUp(ctx)
    } else if (ctx.params.type === 'private') {
      this.privateUp(ctx)
    } else {
      ctx.throw(400)
    }
    return {
      success: true,
      filePath
    }
  },

  async publicUp (ctx) {
    const files = ctx.request.files || {}
    let filePaths = []
    for (let key in files) {
      const file = files[key]
      const filePath = path.join(cfg.root, decodeURI(ctx.path))
      const reader = fs.createReadStream(file.path)
      const writer = fs.createWriteStream(filePath)
      reader.pipe(writer)
      filePaths.push(filePath);
    }
    return filePaths
  },

  async privateUp (ctx) {

  },

  async exsitFolderOrFile (p) {
    const exist = await exists(p)
    console.log(exist)
    if (exist) return true
    return false
  }
}
