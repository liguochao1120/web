  //获取元素
  var box = my$('box');
  var screen = box.children[0];
  var ul = screen.children[0];
  var ol = screen.children[1];
  //箭头
  var arr = my$('arr');
  var arrLeft = my$('left');
  var arrRight = my$('right');

  //图片的位置 
  var imgWidth = screen.offsetWidth;

  //1 动态生成序列号
  var count = ul.children.length;
  for (var i = 0; i < count; i++) {
      var li = document.createElement('li');
      ol.appendChild(li);
      setInnerText(li, i + 1);
      //2 点击序列号，动画的方式 , 切换图片 
      li.onclick = liclick;
      //让当前的li记录它的索引
      //设置标签的自定义的属性
      li.setAttribute('index', i);
  }
  ol.children[0].className = 'current';

  function liclick() {
      //2.1 取消其它高亮显示的li，让当前li高亮显示
      for (var i = 0; i < ol.children.length; i++) {
          var li = ol.children[i];
          li.className = '';
      }
      this.className = 'current';
      //2.2点击序号，动画的方式切换到当前点击的图片的位置 
      var liIndex = parseInt(this.getAttribute('index'));
      animate(ul, -liIndex * imgWidth);
      index = liIndex;
  }
  //让序列号1高亮显示
  ol.children[0].className = 'current';

  //3 鼠标放在盒子上显示箭头
  box.onmouseover = function () {
      arr.style.display = 'block';
      //当鼠标放在盒子上时，停止轮播
      clearInterval(timerId);
  }
  box.onmouseout = function () {
      arr.style.display = 'none';
      timerId = setInterval(function () {
          arrRight.click();
      }, 2000);
  }
  //4 实现上一张和下一张的功能 
  //上一张

  arrLeft.onclick = function () {
      //如果不是最后一张图片,index--
      if (index === 0) {
          index = count;
          // animate(ul,-index*imgWidth);

          //模拟点击了当前的li

          ul.style.left = -index * imgWidth + 'px';
      }
      index--;
      ol.children[index].click();
  }

  //下一张
  var index = 0;
  arrRight.onclick = function () {
      //判断是否是克隆的第一张图片,如果是克隆的第一张图片,此时修改ul的坐标,显示真正的第一张图片
      if (index === count) {
          ul.style.left = '0px';
          index = 0;
      }
      index++;
      //如果是最后一张图片,不让index++
      if (index < count) {

          // animate(ul,-index*imgWidth);

          //模拟点击了当前的li
          ol.children[index].click();
      } else {
          //如果是最后一张图片,以动画的方式,移动到克隆的第一张图片
          animate(ul, -index * imgWidth);
          //取消所有序号的高亮显示,让第一序号高亮显示
          for (var i = 0; i < ol.children.length; i++) {
              var li = ol.children[i];
              li.className = '';
          }
          ol.children[0].className = 'current';
      }
  }
  //无缝滚动 获取ul中的第一个li
  var firstLi = ul.children[0];
  //克隆li
  var cloneLi = firstLi.cloneNode(true);
  ul.appendChild(cloneLi);
  //5 自动切换图片 
  var timerId = setInterval(function () {
      arrRight.click();
  }, 2000);
