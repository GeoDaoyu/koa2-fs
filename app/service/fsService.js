const uploadImpl = require('./impl/upload')
const downloadImpl = require('./impl/download')
const deleteImpl = require('./impl/delete')

module.exports = {
  async upload (ctx) {
    return await uploadImpl.impl(ctx)
  },
  async download (ctx) {
    await downloadImpl.impl(ctx)
  },
  async delete (ctx) {
    return await deleteImpl.impl(ctx)
  }
}
