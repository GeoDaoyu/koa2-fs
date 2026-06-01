import uploadImpl from './impl/upload.js'
import downloadImpl from './impl/download.js'
import deleteImpl from './impl/delete.js'

export default {
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
