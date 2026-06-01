import fsService from '../service/fsService.js'

export default {
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
