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