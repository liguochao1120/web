function my$(id) {
    return document.getElementById(id);
  }
  
  // 处理浏览器兼容性
  // 获取第一个子元素
  function getFirstElementChild(element) {
      var node, nodes = element.childNodes, i = 0;
      while (node = nodes[i++]) {
          if (node.nodeType === 1) {
              return node;
          }
      }
      return null;
  }
  
  // 处理浏览器兼容性
  // 获取下一个兄弟元素
   function getNextElementSibling(element) {
      var el = element;
      while (el = el.nextSibling) {
        if (el.nodeType === 1) {
            return el;
        }
      }
      return null;
    }
  
  
  // 处理innerText和textContent的兼容性问题
  // 设置标签之间的内容
  function setInnerText(element, content) {
    // 判断当前浏览器是否支持 innerText
    if (typeof element.innerText === 'string') {
      element.innerText = content;
    } else {
      element.textContent = content;
    }
  }


  //获取两个日期之间的时间差
  function getInterval(start,end){
    //两个日期对象，相差的毫秒数
    var interval=end-start;
    //求 相差的天数/小时数/分钟数/秒数
    var day,hour,minute,second;
    //两个日期相差的秒数
    interval=interval/1000;
     day=Math.round(interval/24/60/60);
     hour=Math.round(interval/60/60%24);
     minute=Math.round(interval/60%60);
     second=Math.round(interval%60);
     return {
       day:day,
       hour:hour,
       minute:minute,
       second:second
     };

  }