/*
 * @Author: your name
 * @Date: 2020-05-19 13:49:45
 * @LastEditTime: 2020-05-20 16:24:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Nuxt-Koa-Admin\server\index.js
 */ 
const Koa = require('koa')
const consola = require('consola')
const json = require('koa-json')
// const session = require('koa-generic-session')
const bodyParser = require('koa-bodyparser')
const Redius = require('koa-redis')
const logger = require('koa-logger')
const session = require('koa-session')
const { Nuxt, Builder } = require('nuxt')

// 路由引入


const app = new Koa()
app.keys = ['xunzhaotech']
app.use(logger())
app.use(session(app))
app.use(bodyParser())
// 引入数据库配置

/**
 * 使用路由转发请求
 * @type {[type]}
 */
// const router = require('./routers/index.js')()
// 引入数据库链接
const db = require('./config/index.js')

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = app.env !== 'production'

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  await nuxt.ready()
  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  app.use((ctx) => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
