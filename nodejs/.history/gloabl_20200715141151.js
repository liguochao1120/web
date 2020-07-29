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

//非模块化开发缺点
/* 1,命名冲突
    2,文件依赖
 */

//前端标准模块化开发
/* 1, AMD - requirejs
2, CMD - seajs */

//服务器端的模块化开发
/* 1, CommonJS - Node.
 */

模块化相关的规则:
    /* 1,如何定义模块:一个js文件就是一个模块, 模块内部的成员都是独立的
    2,模块成员的导出和导入 */