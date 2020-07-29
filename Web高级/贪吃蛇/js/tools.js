(function() {
    var Tools = { //求一个范围内之间的随机数
        getRandom: function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
    window.Tools = Tools;
})()