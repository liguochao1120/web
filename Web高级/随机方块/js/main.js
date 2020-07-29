//生成10个方块,随机生成颜色

//获取到容器
var container = document.getElementById('container');

//数组,存储创建的方块对象
var array = [];

//生成10个方块
for (var i = 0; i < 10; i++) {
    var r = Tools.getRandom(0, 255);
    var g = Tools.getRandom(0, 255);
    var b = Tools.getRandom(0, 255);
    var box = new Box(container, {
        backgroundColor: 'rgb(' + r + ',' + g + ',' + b + ')'
    });
    //把创建好的方块对象,添加到数组 中
    array.push(box);
}

//设置随机位置,开启定时器
setInterval(randomBox, 500);
randomBox();

function randomBox() {
    //随机生成方块坐标
    for (var i = 0; i < array.length; i++) {
        var box = array[i];
        box.random();

    }
}