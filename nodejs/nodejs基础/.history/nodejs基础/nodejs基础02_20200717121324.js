/* 
    Buffer对象
*/

Buffer.alloc(size); //创建实例 2
Buffer.from(array); //'hellow'
Buffer.isEncoding("utf8") //判断传入的对象编码是否存在
Buffer.isBuffer(buf); //判断传入的对象是否是Buffer对象
Buffer.byteLength(buf) //判断传入的buffer的长度
Buffer.concat([buf1, buf2]); //将传入的两个buffer对象合并为一个buffer