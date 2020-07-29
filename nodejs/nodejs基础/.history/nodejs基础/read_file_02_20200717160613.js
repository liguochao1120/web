/* 
    读取文件操作
*/
const fs = require('fs');
const path = require('path');
let strpath = path.join(__dirname, 'data.txt');
/* fs.readFile(strpath,(err, data) => {
    if (err) return;
    console.log(data.toString());
}) */

fs.readFile(strpath, "utf8", (err, data) => {
    if (err) return;
    // console.log(data.toString());
    console.log(data);
})