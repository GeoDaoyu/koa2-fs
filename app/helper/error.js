const chalk = require('chalk')
module.exports = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    console.info(`${chalk.red(err.message)}`)
    ctx.response.status = err.statusCode || err.status || 500
    ctx.response.body = {
      error: {
        code: err.statusCode || err.status || 500,
        message: err.message,
        details: []
      }
    }
  }
}