/* 引入模块 */
var module = require('./01.js');
//第一种引入
// var ret = module.sum(1, 2);
//第二种引入 
var ret = module(2, 4);
console.log(ret);