function animate(element, target, step) {
    //保证页面上只有一个定时器在执行 
    if (element.timerId) {
        clearInterval(element.timerId);
        timerId = null;
    }

    //box.offsetLeft 是只读属性，不能被赋值
    // box.style.left=box.offsetLeft+10+'px';
    element.timerId = setInterval(function () {

        var current = element.offsetLeft;

        //当从400到800执行动画
        //从800到400 不执行动画

        //判断如果当前位置>目标位置 此时的step值 要小于0
        if (current > target) {
            step = -Math.abs(step);
        }
        if (Math.abs(current - target) < Math.abs(step)) {
            //停止定时器
            clearInterval(element.timerId);
            //设置坐标为500
            element.style.left = target + 'px';
            //退出函数
            return;
        }
        //移动盒子
        current += step;
        element.style.left = current + 'px';
    }, 30)
}