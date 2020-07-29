/* 
    读取/写入文件操作
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

//写入 异步文件
let data = "232aaa好呀";
/* fs.writeFile('./data.txt', data, 'utf8', (err) => {
    if (err) throw err;
    console.log('文件已被保存');
}) */

//写入 同步文件
fs.writeFileSync('./data.txt', data);