var sum = function(a, b) {
        return parseInt(a) + parseInt(b);
    }
    //导出模块成员 第一种
    // exports.sum = sum;
    //导出模块成员 第二种
module.exports = sum;