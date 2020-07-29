/* 
    Buffer对象
*/

Buffer.alloc(); //创建实例
Buffer.from();
Buffer.isEncodeing() //判断传入的对象编码是否存在
Buffer.isBuffer(); //判断传入的对象是否是Buffer对象
Buffer.byteLength() //判断传入的buffer的长度
Buffer.concat([x, x1]); //将传入的两个buffer对象合并为一个buffer