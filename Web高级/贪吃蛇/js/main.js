;
(function(window, undefined) {

    var map = document.getElementById('map');
    var game = new Game(map);
    game.start();
})(window, undefined)
//自调用函数传入参数,用于压缩