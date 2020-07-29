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
// let ret = fs.readFileSync(strpath, "utf8");
// console.log(ret);

//写入文件
fs.open('./data.txt', 'wx', (err, fd) => {
    if (err) {
        if (err.code === 'EEXIST') {
            console.log('文件已存在');
            return;
        }
    } else {



        throw err;
    }
});