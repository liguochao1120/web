;
(function() { //自调用函数,开启一个新的作用域,避免命名冲突
    var position = 'absolute';
    //记录上一次创建的食物，为删除做准备
    var elements = [];

    function Food(options) {
        options = options || {};
        this.x = options.x || 0;
        this.y = options.y || 0;
        this.width = options.width || 20;
        this.height = options.height || 20;
        this.color = options.color || 'green';
    }

    Food.prototype.render = function(map) {
        //删除之前创建的食物
        remove();

        //随机生成食物的坐标
        this.x = Tools.getRandom(0, map.offsetWidth / this.width - 1) * this.width;
        this.y = Tools.getRandom(0, map.offsetHeight / this.height - 1) * this.height;
        //创建食物对象
        var div = document.createElement('div');
        map.appendChild(div);
        elements.push(div);
        div.style.left = this.x + 'px';
        div.style.top = this.y + 'px';
        div.style.position = position;
        div.style.height = this.height + 'px';
        div.style.width = this.width + 'px';
        div.style.backgroundColor = this.color;
    }

    function remove() { //为了避免出现删除错误,数组中的数据遍历 由大到小删除,索引不会改变
        for (var i = elements.length - 1; i >= 0; i--) {
            //删除div
            elements[i].parentNode.removeChild(elements[i]);
            //删除数组中的原素 
            //删除数组原素 
            //第一个参数,从哪个元素开始删除
            //第二个参数,删除几个元素
            elements.splice(i, 1);
        }
    }
    window.Food = Food;
})()

//测试代码
// var map = document.getElementById('map');
// var food = new Food();
// food.render(map);