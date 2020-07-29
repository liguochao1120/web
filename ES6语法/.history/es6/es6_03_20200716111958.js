/* 函数扩展
    1,参数默认值
    2,参数结构赋值
    3,rest参数
    4, ...扩展运算符

*/
// 1,参数默认值
// function foo(param = "hello") {
//     console.log(param);
// }
// foo("nihao");

// 2,参数结构赋值
/* function foo({ usename = "lisi", age = "12" } = {}) {
    console.log(usename, age);
}
foo({ usename: 'zhangsan', age: 15 }); */

//3,reset参数(剩余参数)
/* function foo(a, b, ...params) {
    console.log(a);
    console.log(params);
}
foo(1, 2, 3, 4); */

//4, ...扩展运算符
/* function foo(a, b, c, d) {
    console.log(a + b + c + d);
}
let arr = [1, 2, 3, 4];
foo(arr);
// foo.apply(null, arr); */

//4,合并数组
let arr1 = [1, 2, 3];
let arr2 = ["a, b, c"];
let arr3 = [...arr1, ...arr2];
console.log(arr3);