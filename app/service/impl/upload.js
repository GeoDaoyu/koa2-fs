import path from 'path'
import fs from 'fs'
import { promisify } from 'util'
import cfg from '../../../config/config.default.js'

const exists = promisify(fs.exists)
const mkdir = promisify(fs.mkdir)

export default {
  async impl (ctx) {
    let filePath = ''
    if (ctx.params.type === 'public') {
      filePath = await this.publicUp(ctx)
    } else if (ctx.params.type === 'private') {
      filePath = await this.privateUp(ctx)
    } else {
      ctx.throw(400)
    }
    return {
      success: true,
      filePath
    }
  },

  async publicUp (ctx) {
    const files = ctx.request.files || {}
    let filePaths = []
    for (let key in files) {
      const file = files[key]
      const filePath = path.join(cfg.root, decodeURI(ctx.path))
      const reader = fs.createReadStream(file.path)
      const writer = fs.createWriteStream(filePath)
      reader.pipe(writer)
      filePaths.push(filePath);
    }
    return filePaths
  },

  async privateUp (ctx) {
    let filePaths = []
    const folderPath = path.join(cfg.root, ctx.path.substring(0, ctx.path.lastIndexOf('/')))
    const exist = await exists(folderPath)
    if (!exist) {
      await mkdir(folderPath)
    }
    filePaths.push(await this.publicUp(ctx))
    return filePaths
  }
}
