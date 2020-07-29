//自调用函数,开启一个新的局部作用域,防止命名冲突
;
(function() {
    var position = 'absolute';
    //记录之前创建的蛇
    var elements = [];

    function Snake(options) {
        options = options || {};
        //蛇节的大小
        this.width = options.width || 20;
        this.height = options.height || 20;
        //蛇移动的方向
        this.direction = options.direction || 'right';
        //蛇的身体(蛇节) 第一个元素是蛇头
        this.body = [{ x: 3, y: 2, color: 'red' },
            { x: 2, y: 2, color: 'blue' },
            { x: 1, y: 2, color: 'blue' }
        ];
    }

    Snake.prototype.render = function(map) {
        //删除之前创建的蛇
        remove();

        //把每一个蛇节渲染到地图上map
        for (var i = 0, len = this.body.length; i < len; i++) {
            //蛇节
            var object = this.body[i];

            var div = document.createElement('div');
            map.appendChild(div);
            elements.push(div);
            //设置样式
            div.style.position = position;
            div.style.width = this.width + 'px';
            div.style.height = this.height + 'px';
            div.style.left = object.x * this.width + 'px';
            div.style.top = object.y * this.height + 'px';
            div.style.backgroundColor = object.color;

        }
    }

    //私有成员
    function remove() {
        for (var i = elements.length - 1; i >= 0; i--) {
            //删除div
            elements[i].parentNode.removeChild(elements[i]);
            //删除数组中的元素
            elements.splice(i, 1);
        }

    }

    //控制蛇移动的方法
    Snake.prototype.move = function(food, map) {
        //控制蛇的移动方法(当前蛇节 到 上一个蛇节的位置)
        for (var i = this.body.length - 1; i > 0; i--) {
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }

        //控制蛇头的移动
        //判断蛇移动的方向
        var head = this.body[0];
        switch (this.direction) {
            case 'right':
                head.x += 1;
                break;
            case 'left':
                head.x -= 1;
                break;
            case 'top':
                head.y -= 1;
                break;
            case 'bottom':
                head.y += 1;
                break;
        }

        //2.4判断蛇头是否和食物的坐标重合
        var headX = head.x * this.width;
        var headY = head.y * this.height;
        if (headX === food.x && headY === food.y) {
            //让蛇增加一节
            //获取蛇的最后一节
            var last = this.body[this.body.length - 1];
            var obj = {};
            extend(last, obj);
            //对象拷贝
            this.body.push(obj);
            // this.body.push({ x: last.x, y: last.y, color: last.color });
            //随机在地图上重新生成食物
            food.render(map);
        }

    }

    function extend(parent, child) {
        for (var key in parent) {
            if (child[key]) {
                continue;
            }
            child[key] = parent[key];
        }
    }

    window.Snake = Snake;
})()

//压缩后代码
// (function() {
//     var b = "absolute";
//     var d = [];

//     function c(e) {
//         e = e || {};
//         this.width = e.width || 20;
//         this.height = e.height || 20;
//         this.direction = e.direction || "right";
//         this.body = [{ x: 3, y: 2, color: "red" }, { x: 2, y: 2, color: "blue" }, { x: 1, y: 2, color: "blue" }]
//     }
//     c.prototype.render = function(h) {
//         a();
//         for (var g = 0, e = this.body.length; g < e; g++) {
//             var f = this.body[g];
//             var j = document.createElement("div");
//             h.appendChild(j);
//             d.push(j);
//             j.style.position = b;
//             j.style.width = this.width + "px";
//             j.style.height = this.height + "px";
//             j.style.left = f.x * this.width + "px";
//             j.style.top = f.y * this.height + "px";
//             j.style.backgroundColor = f.color
//         }
//     };

//     function a() {
//         for (var e = d.length - 1; e >= 0; e--) {
//             d[e].parentNode.removeChild(d[e]);
//             d.splice(e, 1)
//         }
//     }
//     c.prototype.move = function(k, j) {
//         for (var g = this.body.length - 1; g > 0; g--) {
//             this.body[g].x = this.body[g - 1].x;
//             this.body[g].y = this.body[g - 1].y
//         }
//         var f = this.body[0];
//         switch (this.direction) {
//             case "right":
//                 f.x += 1;
//                 break;
//             case "left":
//                 f.x -= 1;
//                 break;
//             case "top":
//                 f.y -= 1;
//                 break;
//             case "bottom":
//                 f.y += 1;
//                 break
//         }
//         var e = f.x * this.width;
//         var l = f.y * this.height;
//         if (e === k.x && l === k.y) {
//             var h = this.body[this.body.length - 1];
//             this.body.push({ x: h.x, y: h.y, color: h.color });
//             k.render(j)
//         }
//     };
//     window.Snake = c
// })();

//测试代码
// var map = document.getElementById('map');
// var snake = new Snake();
// snake.render(map);