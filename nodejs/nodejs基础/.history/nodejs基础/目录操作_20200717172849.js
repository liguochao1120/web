/* 
  目录操作
  1,创建目录
     fs.mkdir(path,[,mode],callback);
     fs.mkdirSync(path[,mode]);
   2,读取目录
*/
const path = require('path');
const fs = require('fs');
let sPath = path.join(__dirname, 'lgc');

//异步
// fs.mkdir(sPath, (err) => {
//     console.log('创建目录已完成');
// });

//同步
let dir = fs.mkdirSync(sPath);
console.log(dir);