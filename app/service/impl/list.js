import path from 'path'
import fsp from 'fs/promises'
import cfg from '../../../config/config.default.js'

async function walkDir (dirPath) {
  const result = []
  let entries
  try {
    entries = await fsp.readdir(dirPath, { withFileTypes: true })
  } catch {
    return result
  }
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name)
    if (entry.isDirectory()) {
      const children = await walkDir(fullPath)
      result.push(...children)
    } else {
      const stat = await fsp.stat(fullPath)
      result.push({
        name: entry.name,
        path: fullPath,
        size: stat.size,
        birthtime: stat.birthtime,
        mtime: stat.mtime
      })
    }
  }
  return result
}

export default {
  async impl (ctx) {
    const fsRoot = path.join(cfg.root, 'fs')
    const { type, username } = ctx.params

    let dirPath
    if (type === 'all') {
      dirPath = fsRoot
    } else if (type === 'public') {
      dirPath = path.join(fsRoot, 'public')
    } else if (type === 'private') {
      dirPath = username
        ? path.join(fsRoot, 'private', username)
        : path.join(fsRoot, 'private')
    } else {
      ctx.throw(400, 'type must be "all", "public", or "private"')
    }

    const files = await walkDir(dirPath)
    return {
      success: true,
      count: files.length,
      files
    }
  }
}
