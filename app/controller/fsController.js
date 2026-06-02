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
  },
  async moveFile (ctx) {
    ctx.body = await fsService.move(ctx)
  },
  async updateFile (ctx) {
    ctx.body = await fsService.update(ctx)
  },
  async listFiles (ctx) {
    ctx.body = await fsService.list(ctx)
  }
}
