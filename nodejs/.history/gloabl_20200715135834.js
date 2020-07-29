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

//模块化开发
1, AMD - requirejs
2, CMD - seajs

//非模块化开发缺点
/* 1,命名冲突
    2,文件依赖
 */