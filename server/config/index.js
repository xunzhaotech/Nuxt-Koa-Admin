/*
 * @Author: your name
 * @Date: 2020-05-20 13:44:45
 * @LastEditTime: 2020-05-22 11:27:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Nuxt-Koa-Admin\server\config\index.js
 */ 
// 引入数据库链接
const mongoose = require('mongoose')
// 数据库链接配置
const dbConfig = {
    dbs: "mongodb://127.0.0.1:27017/test"
}
// 链接MongoDB数据库
const db = mongoose.connect(dbConfig.dbs, {
    useNewUrlParser:true, 
    useUnifiedTopology: true
}).then(err => {
  if(err) {
    console.log("MongoDB connected error")
  }else{
    console.log("MongoDB connected success")
  }
})
// 链接成功
// mongoose.connection.on("connected", function() {
//     console.log("MongoDB connected success")
// })
// 链接失败
// mongoose.connection.on("error", function() { 
//     console.log("MongoDB connected error")
// })
// 断开了
// mongoose.connection.on("disconnected", function() {
//     console.log("MongoDB connected disconnected")
// })
module.exports = db 