var bodyTop = my$('top');
var toTop = my$('totop');

//当拖动滚动条的时候执行
window.onscroll = function () {
    //1,当拖动滚动条的时候,当内容滚动出去 10px的时候,改变top的高度,并且显示回到顶部按钮

    //调用 common.js getScroll函数，获取页面滚动出去的距离
    var scrollTop=getScroll().scrollTop;
    if(scrollTop>10){
        //改变top高度
        bodyTop.className='header fixed';
        //显示回到顶部按钮
        toTop.style.display='block';
    }else{
        //恢复top高度
        bodyTop.className='header';
        //隐藏回到顶部按钮
        toTop.style.display='none';
    }
    console.log(scrollTop);
    //如何获取滚动出去的距离
    // document.body.scrollTop
    // document.documentElement.scrollTop
   
}

 //2,当点击回到顶部按钮的时候,动画的方式,回到最上面,让滚动距离为0
 var timerId=null;
 toTop.onclick=function(){
     //如果有动画就停止 
     if(timerId){
         clearInterval(timerId);
         timerId=null;
     }
     //如果没有就执行
     timerId=setInterval(function(){
         //步进
         var step=30;
         //目标位置
         var target=0;

         //当前位置 
         var current=getScroll().scrollTop;
         if(current>target){
             step=-Math.abs(step);
         }

         //判断当前位置是否到目标位置
         if(Math.abs(current-target)<=Math.abs(step)){
             clearInterval(timerId);
                document.body.scrollTop=target;
                document.documentElement.scrollTop=target;
                return;
         }
         current+=step;
         document.body.scrollTop=current;
         document.documentElement.scrollTop=current;
     },5);
 }