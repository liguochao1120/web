/* 字符串扩展
    includes() 判断字符串中是否包含指定的字符串,有的话返回true没有返回false
    参数一:匹配的字符串;参数二:从指定的位置开始判断
    startsWith()
    endsWith()
    字符串模板
*/
// console.log('hello world'.includes('world', 6));
let obj = {
    username: 'lisi',
    age: 18,
    gender: 'male'
};

let tpl = `<div>
<span>${obj.username}</span>
<span>${obj.age}</span>
<span>${obj.gender}</span>
</div>`;
console.log(tpl);