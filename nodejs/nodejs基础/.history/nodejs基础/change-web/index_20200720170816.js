/* 
    动态网页开发
    成绩查询功能
*/
const http = require('http');
http.createServer((req, res) => {
    //查询成绩的入口地址 /query
    if (req.url.startWith('/query')) {

    }
}).listen(3000, () => {
    console.log('running...');
});