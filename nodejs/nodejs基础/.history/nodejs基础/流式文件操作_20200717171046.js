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
readStream.on("data", (chunk) => {
    writeStream.write(chunk);
})