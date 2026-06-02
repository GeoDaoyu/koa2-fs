import path from 'path'
import fs from 'fs'
import fsp from 'fs/promises'
import cfg from '../../../config/config.default.js'

export default {
  async impl (ctx) {
    const filePath = path.join(cfg.root, decodeURI(ctx.path))

    try {
      await fsp.access(filePath, fs.constants.F_OK)
    } catch {
      ctx.throw(404, 'file not found, use POST to create a new file')
    }

    const files = ctx.request.files || {}
    const filePaths = []
    for (const key in files) {
      const file = files[key]
      const reader = fs.createReadStream(file.path)
      const writer = fs.createWriteStream(filePath)
      reader.pipe(writer)
      await new Promise((resolve, reject) => {
        writer.on('finish', resolve)
        writer.on('error', reject)
      })
      filePaths.push(filePath)
    }

    return {
      success: true,
      filePath: filePaths
    }
  }
}
