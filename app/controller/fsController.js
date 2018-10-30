const fsService = require('../service/fsService')

module.exports = {
  async getFile (ctx) {
    await fsService.download(ctx)
  },
  async setFile (ctx) {
    ctx.body = await fsService.upload(ctx)
  },
  async deleteFile (ctx) {
    ctx.body = await fsService.delete(ctx)
  }
}