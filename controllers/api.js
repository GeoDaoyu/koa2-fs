const fs = require('fs')
const path = require('path')
const promisify = require('util').promisify
const stat = promisify(fs.stat)
const readdir = promisify(fs.readdir)
const cfg = require('../config')
async function getFileList (filePath) {
  try {
    const stats = await stat(filePath)
    if (stats.isFile()) {
      return []
    } else if (stats.isDirectory()) {
      const files = await readdir(filePath)
      return files
    }
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  'GET /fs/public': async (ctx, next) => {
    ctx.response.type = 'appliction/json'
    const fileList = await getFileList(cfg.root + '/fs/public')
    ctx.response.body = {
      fileList
    }
  },
  'POST /fs/public': async (ctx, next) => {
    const filePaths = [];
    const files = ctx.request.files || {};
    const folerPath = cfg.root + '/fs/public/'
    for (let key in files) {
      const file = files[key];
      const filePath = path.join(folerPath, file.name);
      const reader = fs.createReadStream(file.path);
      const writer = fs.createWriteStream(filePath);
      reader.pipe(writer);
      filePaths.push(filePath);
    }
    return ctx.body = {
      success: true,
      filePath: filePaths
    };
  },

  // 'DELETE /fs/public': async (ctx, next) => {
  //   console.log(`delete file ${ctx.params.filename}...`);
  //   const folerPath = cfg.root + '/fs/public/'
  //   fs.unlink(folerPath + filename, () => {
  //     console.log('delete')
  //   })
  // }
}