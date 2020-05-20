/*
 * @Author: your name
 * @Date: 2020-05-20 09:37:41
 * @LastEditTime: 2020-05-20 14:33:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Nuxt-Koa-Admin\server\router.js
 */ 
'use strict'
const Router = require('koa-router')
const User = require('../app/controllers/user')
const App = require('../app/conrtollers/app')
module.exports = function() {
    
    const router = new Router({
        prefix: '/api'
    })
    // // user
    router.post('/u/signup', App.hasBody, User.signup)
    router.post('/u/update', App.hasBody, App.hasToken, User.update)

    // // DB Interface test
    router.get('/test/user/users',User.users)
    router.post('/test/user/add',User.addUser)
    router.post('/test/user/delete',User.deleteUser)

    return router
}