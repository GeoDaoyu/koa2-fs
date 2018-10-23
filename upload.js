const path = require('path');
const Koa = require('koa');
const fs = require('fs');
const koaBody = require('koa-body');
const cfg = require('./config')

const app = new Koa();

const main = async function(ctx) {
  const filePaths = [];
  const files = ctx.request.files || {};
  const tmpdir = cfg.root + '/fs/public/'
  for (let key in files) {
    const file = files[key];
    const filePath = path.join(tmpdir, file.name);
    const reader = fs.createReadStream(file.path);
    const writer = fs.createWriteStream(filePath);
    reader.pipe(writer);
    filePaths.push(filePath);
  }

  ctx.body = filePaths;
};

app.use(koaBody({ multipart: true }));
app.use(main);
app.listen(3000, () => {
  console.log('l')
});