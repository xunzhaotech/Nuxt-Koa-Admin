/*
 * @Author: your name
 * @Date: 2020-05-19 13:34:52
 * @LastEditTime: 2020-05-19 13:36:31
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-koa-admin\api\index.js
 */ 
// implement your own methods in here, if your data is coming from A rest API

import * as User from './user';

export default {
  // user
  getUser: User.getUser,
}