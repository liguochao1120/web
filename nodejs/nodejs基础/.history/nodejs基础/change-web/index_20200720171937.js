/* 
    动态网页开发
    成绩查询功能
*/
const http = require('http');
const path = require('path');
const fs = require('fs');
http.createServer((req, res) => {
    //查询成绩的入口地址 /query
    if (req.url.startWith('/query')) {
        fs.readFile(path.join(__dirname, 'view', 'index.tpl'), 'utf8', (err, content) => {

        })
    }

    //获取成绩的结果/score

}).listen(3000, () => {
    console.log('running...');
});