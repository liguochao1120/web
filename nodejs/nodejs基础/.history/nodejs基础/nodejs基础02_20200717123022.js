/* 
    Buffer对象
*/

//创建实例
/* Buffer.alloc(size); //创建实例 2
Buffer.from(array); //'hellow' 创建实例

//功能方法
Buffer.isEncoding("utf8") //判断传入的对象编码是否存在
Buffer.isBuffer(buf); //判断传入的对象是否是Buffer对象
Buffer.byteLength(buf) //判断传入的buffer的长度
Buffer.concat([buf1, buf2]); //将传入的两个buffer对象合并为一个buffer */

//实例方法
/* write() //向buffer中写入内容
let buf = Buffer.alloc(5);
buf.write("hello"); */

// slice() //截取一个新的buf对象
// let buf1 = Buffer.from("hello");
// let buf2 = buf1.slice(2, 4);
// console.log(buf2.toString());

// toString()//将一个buf对象转换成一个字符串对象

// toJson()//将一个buf对象转换成一个json对象