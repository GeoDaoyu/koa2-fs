const fsService = require('../service/fsService')

module.exports = {
  async getFile (ctx) {
    await fsService.download(ctx)
  },
  async setFile (ctx) {
    await fsService.upload(ctx)
  },
  async deleteFile (ctx) {
    if (await fsService.delete(ctx)) {
      ctx.response.status = 200
      ctx.body ={
        delete: 1
      }
    }
  }
}