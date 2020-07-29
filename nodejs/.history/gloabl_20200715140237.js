//全局成员概述gloabl

//包含文件名在内的全路径
console.log("文件名:" + __filename);
//文件的路径 (不包含文件名)
console.log("文件全路径:" + __dirname);

//定时函数
setTimeout(function() {
    console.log(1212);
}, 2000);

console.log(process.argv);

//前端标准模块化开发
/* 1, AMD - requirejs
2, CMD - seajs */
//服务器端的模块化开发
1, CommonJS - Node.js

//非模块化开发缺点
/* 1,命名冲突
    2,文件依赖
 */