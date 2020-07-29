/* 
    大文件操作(流式操作)
    1,fs.createReadStream(path,[,options]);
    2,fs.createWriteStream(path,[,options]);

*/
const path = require('path');
const fs = require('fs');
let sPath = path.join(__dirname, "nvm.zip");
let dPath = path.join('C:\\Users\\producer developer\\Desktop', 'nvm.zip');

let readStream = fs.createReadStream(sPath);
let writeStream = fs.createWriteStream(dPath);

//第一种方式:
//基于事件的处理方式 data 与 end为Nodejs固定定义
/* let num = 1;
readStream.on("data", (chunk) => {
    num++;
    writeStream.write(chunk);
})
readStream.on("end", () => {
    console.log('文件已读取完:' + num);
}) */

//第二种方式
//pipe的作用直接把输入流与输出流
readStream.pipe(writeStream);