// 求和
function getSum(){
    var sum=0;
    for(var i=0;i<=100;i++){
        sum+=i;
    }
    console.log(sum);
}
//求最大数
function getMax(arrs){
    var max=arrs[0];
    for(var i=1;i<arrs.length;i++){
        if(max<arrs[i]){
                max=arrs[i];
        }
    }
    return max;
}
//求最小数
function getMin(arr){
    var min=arr[0];
    for(var i=1;i<arr.length;i++){
        if(min>arr[i]){
            min=arr[i];
        }
    }
    return min;
}


var arrs=[6,4,8,7,40];
var mins=getMin(arrs);
// console.log(mins);
// var max=getMax(arrs);

// getSum();

//匿名函数
var fn=function(){
    console.log("匿名函数111")
}
// fn();

//自调用函数
// (function(){
//     console.log('自调用函数');
// })()

// var num=19;
// fun2();
// function fun2(){
//     console.log(num);
//     var num=20;
// }


// var num;
// function fun(){
//     var num;
    
//     console.log(num);
//     num=20;

// }
// num=19;
// fun();

//数组排序 数字
// function compare(a,b){
//     return a-b;
// }
// var array=[232,8,14,9,55];
// array.sort(compare);
// console.log(array);

//字符排序
// var array=['c','a','d','e'];
// array.sort();
// console.log(array);

var s="adbcooaoacb";
var ss={};
for(var i=0;i<s.length;i++){
   var item= s.charAt(i)
//    console.log(item);
    if(ss[item]){
        ss[item]++;
    }else{
        ss[item]=1;
    }
}
// console.log(ss);

for(var key in ss){
    console.log(ss[key]);
}

