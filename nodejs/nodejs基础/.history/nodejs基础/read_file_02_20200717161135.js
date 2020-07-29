/* 
    读取文件操作
*/
//异步
const fs = require('fs');
const path = require('path');
let strpath = path.join(__dirname, 'data.txt');
console.log(strpath);
/* fs.readFile(strpath,(err, data) => {
    if (err) return;
    console.log(data.toString());
}) */

/* fs.readFile(strpath, "utf8", (err, data) => {
    if (err) return;
    // console.log(data.toString());
    console.log(data);
}) */

//同步
let ret = fs.readFileSync(strpath, "utf8");
console.log(ret);