/* 
    文件操作
*/
const fs = require('fs');
//异步操作
// fs.stat('./aaa', (err, stat) => {
//     //一般回调函数的第一个参数是错误对象,如果 err为null，表示 没有错误,否则表示报错了
//     if (err) return;
//     if (stat.isFile()) {
//         console.log("文件");
//     } else if (stat.isDirectory()) {
//         console.log("目录");
//     }
//     console.log(stat);
//     /* 
//         atime:文件 访问 时间 
//         ctime:文件的状态信息发生改变的时间(比如文件的权限)
//         mtime:文件的数据发生改变的时间 
//         birthtime:文件创建的时间 
//     */
// });

//文件的同步操作
let ret = fs.statSync('./data.txt');
console.log(ret);