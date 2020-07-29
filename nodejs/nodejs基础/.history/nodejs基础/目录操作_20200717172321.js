/* 
  目录操作
  1,创建目录
     fs.mkdir(path,[,mode],callback);
     fs.mkdirSync(path[,mode]);
*/
const path = require('path');
const fs = require('fs');
let sPath = path.join(__dirname, 'lgc');
fs.mkdir(sPath);