//获取元素
var newsT = document.getElementById('newsT');
//红色线
var flag = document.getElementById('flag');
//详细内容的容器
var newContainer = document.getElementById('newContainer');

//1，获取到 a标签注册事件
for (var i = 0; i < 2; i++) {
    var link = newsT.children[i];
    link.onmouseover = linkMouseover;
    //设置标签的自定义属性,记录索引
    link.setAttribute('index', i);
}

function linkMouseover() {
    //2，当触发a标签的mouseover,让红色的线执行动画,显示对应的详细内容
    //让红色的线执行动画
    //获取当前执行动画的a的标签的位置 
    var offsetLeft = this.offsetLeft;
    animate(flag, offsetLeft - 3, 30);

    // // 显示对应的详细内容
    // // 让所有的详细内容隐藏
    for (var i = 0, len = newContainer.children.length; i < len; i++) {
        var div = newContainer.children[i];
        //首先让所有的div都隐藏起来
        //判断当前div是否已经隐藏起来了
        if (div.className.indexOf('hide') === -1) {
            div.className = 'news-b hide';
        }
    }

    //当前对应的详细内容显示
    var index = parseInt(this.getAttribute('index'));
    newContainer.children[index].className = 'news-b show';
}