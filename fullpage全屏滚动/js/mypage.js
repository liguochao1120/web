$(function() {
    var k = $(window).height();
    var flag = false;
    $('.next').click(function(event) {
        //点击next 往下播放一屏
        $.fn.fullpage.moveSectionDown();
    });
    $("#fullpage").fullpage({ //fullpage 方法里面接收json形式数据
        //是否显示项目导航
        navigation: true,
        navigationPosition: 'right',
        //滚动之后的回调函数，index 当前离开的页面的索引值从1开始
        afterLoad: function(anchorLink, index) {
            if (index == 2) {
                $('.next').fadeOut(); //等第二屏滚动的时候,先消失，等所有的动画都执行完毕后,next才淡出
                //animate为js中动画调用 参数一:操作对象,参数二 执行时间 参数三 动画执行完毕的回调函数
                $('.search').show().animate({ "right": 370 }, 1500, function() {
                    //方块走进来,文字显示出来
                    $('.search-words').animate({ 'opacity': 1 }, 500, function() {
                        $('.search').hide();
                        $('.search-02-1').show().animate({ 'height': 30, 'right': 250, 'bottom': 452 }, 1000);

                        $('.goods-02').show().animate({ 'height': 218 }, 800);
                        $('.words-02').animate({ 'opacity': 1 }, 500, function() {
                            $('.next').fadeIn(); //显示
                        });
                    });
                });
            }
        },

        //刚开始滚动屏幕就触发的回调函数
        //next 当前页面的索引值从1开始 nextIndex要滚动到的页面索引值 
        onLeave: function(index, nextIndex, direction) {
            if (index == 2 && nextIndex == 3) {
                $('.next').fadeOut();
                $('.shirt-02').show().animate({ "bottom": -(k - 250), "width": 207, "left": 260 }, 2000, function() {
                    $('.img-01-a').animate({ "opacity": 1 }, 500, function() {
                        $(".btn-01-a").animate({ "opacity": 1 }, 500);
                    });
                });
                $('.cover').show();
                $('.next').fadeIn();
            }

            //第三屏到第四屏的过渡
            if (index == 3 && nextIndex == 4) {
                $('.next').fadeOut();
                $(".shirt-02").hide();
                // 沙发的距离   当前屏幕的高度  - 250    + 第三屏幕的 50距离
                $(".t1f").show().animate({ "bottom": -((k - 250) + 50), "left": 260 }, 2000, function() {
                    $(this).hide(); // 动画完毕之后，自动隐藏
                    $(".car-img").show();
                    // 这购物车就开始往右走
                    $(".car").animate({ "left": "150%" }, 3000, 'easeInElastic', function() {
                        $('.note').show();
                        $('.note-img,.word-04-a').show().animate({ "opacity": 1 }, 1000);
                        $('.next').fadeIn();
                    });
                })

            }

            //第四屏到第五屏的过渡
            if (index == 4 && nextIndex == 5) {
                $('.next').fadeOut();
                //小手上来
                $('.hand-05').animate({ "bottom": 0 }, 1000, function() {
                    //鼠标显示  fadeIn(); //显示
                    $('.mouse-05-a').animate({ "opacity": 1 }, 1000);
                    //沙发从800 到70
                    $('.t1f-05').show().animate({ "bottom": 70 }, 1000, function() {
                        //单子往上走
                        $('.order-05').animate({ "bottom": 390 }, function() {
                            $('.words-05').addClass('words-05-a');
                            $('.next').fadeIn();
                        });
                    });

                });
            }

            //第五屏到第六屏的过渡
            if (index == 5 && nextIndex == 6) {
                $('.next').fadeOut();
                $('.t1f-05').animate({ 'bottom': -(k - 500), "left": "40%", "width": 65 }, 1500, function() {
                    $(this).hide();
                });
                $('.box-06').animate({ "left": "38%" }, 1500, function() {
                    $('.box-06').animate({ "bottom": 40 }, 500, function() {
                        $(this).hide();
                        //jquery中背景里面改变比较麻烦, 使用backgroundPositionX,Y轴同等
                        $('.section6').animate({ "backgroundPositionX": "100%" }, 4000, function() {
                            $('.pop-06').show();
                            //当背景动画执行完毕,boy大小复原
                            $('.boy').animate({ "height": 305, "bottom": 116 }, 1000, function() {
                                $('.boy').animate({ 'right': 500 }, 500, function() {
                                    //门显示出来,模拟门打开的效果
                                    $('.door').animate({ "opacity": 1 }, 500, function() {
                                        $('.girl').show().animate({ "right": 350, "height": 306 }, 500, function() {
                                            $('.pop-07').show();
                                            $('.next').fadeIn();
                                        });
                                    });
                                });
                            });
                            //光的速度
                            $('.words-06-a').show().animate({ "left": "30%" }, 2000, "easeOutElastic");

                        });
                    });
                });
            }
            // 第六屏滚动到第七屏
            if (index == 6 && nextIndex == 7) {
                $('.next').fadeOut();
                // $('.star').animate({ "width": 120 }, 500);
                setTimeout(function() {
                    $('.star').animate({ "width": 120 }, 500, function() {
                        $('.goods-07').show();
                        $('.next').fadeIn();
                    });
                }, 1000);
            }
            //第八屏动画 toggle()方法用于操作之间切换 显示与隐藏的切换 hover与togger方法混搭效果很好
            $('.beginShopping').hover(function() {

                $('.btn-08-a').toggle();
            });
            //大手跟随鼠标移动
            $(document).mousemove(function(event) {
                //把鼠标的坐标给大手hand left top
                var x = event.pageX - $('.hand-08').width() / 2; //获取 鼠标在页面中的X坐标
                var y = event.pageY + 10; //获取 鼠标在页面中的Y坐标

                //手的top值不能小于这个大小, 当前屏幕的高度k 减去手的高度,449
                var minY = k - 449;
                if (y < minY) {
                    y = minY;
                }
                $('.hand-08').css({ "left": x, "top": y });
            });
            //当我们点击 再来一次 的时候,分两步进行
            //1，当返回第1屏幕
            $('.again').click(function() {
                $.fn.fullpage.moveTo(1);
                //2,所有的动画都复原,就是原来没有看过的样子
                //核心原理就是 让我们的图片(做动画的元素清除行内样式就可以)
                //所有的动画div 盒子珈move类名
                $('img,.move').attr("style", "");
            });


        },
    });
});