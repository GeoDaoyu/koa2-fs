const fsService = require('../service/fsService')

module.exports = {
  async getFile (ctx) {
    await fsService.download(ctx)
  },
  async setFile (ctx) {
    await fsService.upload(ctx)
  },
  async deleteFile (ctx) {
    await fsService.delete(ctx)
  }
}