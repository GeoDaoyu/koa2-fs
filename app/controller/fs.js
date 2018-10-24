const downloadService = require('./../service/download')
const uploadService = require('./../service/upload')

module.exports = {
  async getFile (ctx) {
    await downloadService.impl(ctx)
  },
  async setFile (ctx) {
    await uploadService.impl(ctx)
  }
}