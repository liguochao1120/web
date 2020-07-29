/* 
    文件操作
*/
const fs = require('fs');
fs.stat('./data.txt', (err, stat) => {
    //一般回调函数的第一个参数是错误对象,如果 err为null，表示 没有错误,否则表示报错了
    if (err) return;
    if (stat.isFile()) {
        console.log("文件");
    } else if (stat.isDirectory()) {
        console.log("目录");
    }
});