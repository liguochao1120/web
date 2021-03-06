/* 
  目录操作
  1,创建目录
     fs.mkdir(path,[,mode],callback);
     fs.mkdirSync(path[,mode]);
   2,读取目录
   fs.readdir(path,[,mode],callback);
   fs.mkdirSync(path,[,mode]);
*/
const path = require('path');
const fs = require('fs');
let sPath = path.join(__dirname, 'lgc');

//创建目录异步
// fs.mkdir(sPath, (err) => {
//     console.log('创建目录已完成');
// });

//创建目录同步
// let dir = fs.mkdirSync(sPath);
// console.log(dir);

//读取目录异步
fs.readdir(__dirname, (err, files) => {
    if (err) return;
    files.foreach((item, index) => {
        fs.stat(path.join(__dirname, item), (err, stat) => {
            if (err) return;
            if (stat.isFile()) {
                console.log("文件", item);
            } else if (stat.isDirectory()) {
                console.log("目录", item);
            }
        })
    })
});