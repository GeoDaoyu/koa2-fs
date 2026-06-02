import uploadImpl from './impl/upload.js'
import downloadImpl from './impl/download.js'
import deleteImpl from './impl/delete.js'
import moveImpl from './impl/move.js'
import updateImpl from './impl/update.js'
import listImpl from './impl/list.js'

export default {
  async upload (ctx) {
    return await uploadImpl.impl(ctx)
  },
  async download (ctx) {
    await downloadImpl.impl(ctx)
  },
  async delete (ctx) {
    return await deleteImpl.impl(ctx)
  },
  async move (ctx) {
    return await moveImpl.impl(ctx)
  },
  async update (ctx) {
    return await updateImpl.impl(ctx)
  },
  async list (ctx) {
    return await listImpl.impl(ctx)
  }
}
