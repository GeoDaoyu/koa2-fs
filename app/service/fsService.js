const uploadImpl = require('./impl/upload')
const downloadImpl = require('./impl/download')
const deleteImpl = require('./impl/delete')

module.exports = {
  async upload (ctx) {
    await uploadImpl.impl(ctx)
  },
  async download (ctx) {
    await downloadImpl.impl(ctx)
  },
  async delete (ctx) {
    await deleteImpl.impl(ctx)
  }
}
