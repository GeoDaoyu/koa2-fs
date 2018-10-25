const path = require('path')
const fs = require('fs')
const cfg = require('../../config/config.default')

module.exports = {
  async impl (ctx) {
    const filePaths = [];
    const files = ctx.request.files || {};
    for (let key in files) {
      const file = files[key];
      const filePath = path.join(cfg.root, decodeURI(ctx.path));
      const reader = fs.createReadStream(file.path);
      const writer = fs.createWriteStream(filePath);
      reader.pipe(writer);
      filePaths.push(filePath);
    }
    ctx.body = filePaths;
  }
}
