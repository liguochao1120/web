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
                    'Content-Type': 'text/plain; charset=utf8'
                });
                res.end('服务器错误,请与管理员联系');
            }
            res.end(content);
        });
    } else if (req.url.startwith('/score') && req.methohd = 'POST') {
        //获取成绩的结果/score
        let pdata = '';
        req.on('data', (chunk) => {
            pdata += chunk;
        });
        req.on('end', () => {
            let obj = querystring.parse(pdata);
            let result = scoredata[obj.code];
            fs.readFile(path.join(__dirname, 'view', 'result.tpl'), 'utf8', (err, content) => {
                if (err) {
                    res.writeHead(500, {
                        'Content-Type': 'text/plain;charset=uft8'
                    });
                    res.end('服务器错误,请与管理员联系...');
                }
                //返回内容之前要进行数据渲染
                content = content.replace('$$chinese$$', result.chinese);
                content = content.replace('$$math$$', result.math);
                content = content.replace('$$english$$', result.english);
                content = content.replace('$$summary$$', result.summary);
                res.end(content);
            })
        })
    }



}).listen(3000, () => {
    console.log('running...');
});