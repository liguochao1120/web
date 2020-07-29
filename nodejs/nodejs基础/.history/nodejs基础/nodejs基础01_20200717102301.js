/* 
    文件操作案例(初始化目录结构)
*/

const path = require('path');
const fs = require('fs');
let root = 'C:\\Users\\producer developer\\Desktop';
let fileContent = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>nodejs基础</title>
</head>

<body>
    <div>welcome to nodejs</div>
</body>

</html>`;

//初始化数据
let initData = {
    projectName: "mydemo",
    data: [{
            name: 'img',
            type: 'dir',
        },
        {
            name: 'css',
            type: 'dir',
        }, {
            name: 'js',
            type: 'dir'
        }, {
            name: 'index.html',
            type: 'file'
        }
    ],
}