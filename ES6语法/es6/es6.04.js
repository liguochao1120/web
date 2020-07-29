 /* 箭头函数扩展
                
             */
 /*  function foo() {
      console.log('111');
  }
  foo(); */

 /* let foo = () => console.log(222);
 foo(); */


 //  let foo = v => v;
 //  let ret = foo(333);
 //  console.log(ret);

 let arr = [123, 456, 789];
 arr.forEach((element, index) => {
     console.log(element, index);
 });

 /* 
    箭头函数注意事项
    1,箭头函数中的this取决定函数的定义,而不是调用
    2,箭头函数不可以调用
    3,箭头函数不可以使用arguments获取参数,可以使用rest参数代替

 */