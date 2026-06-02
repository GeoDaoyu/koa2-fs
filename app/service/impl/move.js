import fs from 'fs'
import fsp from 'fs/promises'
import cfg from '../../../config/config.default.js'
import path from 'path'

export default {
  async impl (ctx) {
    const { username, filename } = ctx.params
    const { targetType } = ctx.request.body || {}

    if (!targetType || (targetType !== 'public' && targetType !== 'private')) {
      ctx.throw(400, 'targetType must be "public" or "private"')
    }

    const type = ctx.params.type
    if (type === targetType) {
      ctx.throw(400, 'source and target type are the same')
    }

    const srcPath = path.join(
      cfg.root,
      'fs',
      type,
      username || '',
      decodeURIComponent(filename)
    )
    const destDir = path.join(cfg.root, 'fs', targetType)
    const destPath = path.join(destDir, decodeURIComponent(filename))

    await fsp.mkdir(destDir, { recursive: true })
    await fsp.rename(srcPath, destPath)

    const relativePath = path.join('fs', targetType, decodeURIComponent(filename))
    return {
      success: true,
      source: path.join('fs', type, username || '', decodeURIComponent(filename)),
      target: relativePath
    }
  }
}
