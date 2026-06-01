import fs from 'fs'
import cfg from '../../../config/config.default.js'
import path from 'path'
import { promisify } from 'util'

const unlink = promisify(fs.unlink)

export default {
  async impl (ctx) {
    const filePath = path.join(cfg.root, decodeURI(ctx.path))
    await unlink(filePath)
    return {
      success: true,
      filePath
    }
  }
}
