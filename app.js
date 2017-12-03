const Koa = require('koa')
const path = require('path')
const Bodyparser = require('koa-bodyparser')
const router = require('./routes')
const serve = require('koa-static')

const app = new Koa()

app
  .use(Bodyparser())
  .use(serve(path.resolve('static')))
  .use(router.routes())
  .on('error', err => console.log('server error', err))
  .listen(3000, () => console.log('Koa is listening in 3000'))

module.exports = app