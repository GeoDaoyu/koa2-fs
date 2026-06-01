import send from 'koa-send'

export default {
  async impl (ctx) {
    ctx.attachment(ctx.params.filename)
    await send(ctx, ctx.path)
  }
}
