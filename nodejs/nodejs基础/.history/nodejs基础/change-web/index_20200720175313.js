/* 
    动态网页开发
    成绩查询功能
*/
const http = require('http');
const path = require('path');
const fs = require('fs');
const scoredata = require('./score.json');
const querystring = require('querystring');
http.createServer((req, res) => {
    //路由 请求的路径 +请求的方式 
    //查询成绩的入口地址 /query
    if (req.url.startWith('/query') && req.method == 'GET') {
        fs.readFile(path.join(__dirname, 'view', 'index.tpl'), 'utf8', (err, content) => {
            if (err) {
                res.writeHead(500, {
                    'Content-type': 'text/Plain; charset=utf8'
                });
                res.end('服务器错误,请与管理员联系');
            }
            res.end(content);
        });
    } else if (req.url.startwith('/score')) {
        //获取成绩的结果/score
        let pdata = '';
        req.on('data', (chunk) => {
            pdata += chunk;
        });
        req.on('end', () => {
            let obj = querystring.parse(pdata);
        })
    }



}).listen(3000, () => {
    console.log('running...');
});