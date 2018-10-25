const send = require('koa-send')
module.exports = {
  async impl (ctx) {
    ctx.attachment(ctx.params.filename)
    await send(ctx, ctx.path)
  }
}
