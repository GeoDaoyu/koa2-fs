const path = require('path')
const fs = require('fs')


module.exports = {
  async impl (ctx) {
    const filePaths = [];
    const files = ctx.request.files || {};
    console.log(ctx.path)
    const foler = ctx.path
    for (let key in files) {
      const file = files[key];
      const filePath = path.join(foler, file.name);
      const reader = fs.createReadStream(file.path);
      const writer = fs.createWriteStream(filePath);
      reader.pipe(writer);
      filePaths.push(filePath);
    }
    ctx.body = filePaths;
  }
}
