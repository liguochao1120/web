$(function() {
    // 首次进来时添加comein
    setTimeout(function() {
        $('.section1').addClass('comein');
    }, 200);
    $('#fullpage').fullpage({
        //显示 项目符号
        navigation: true,
        //循环滚动
        loopBottom: true,
        onLeave: function(next, nextIndex, direction) {
            //当我们离开第一屏幕的时候,section1就移除comein
            $('.section1').removeClass('comein');
            //当再回到第一屏幕时,重新添加comein
            if (nextIndex == 1) {
                $('.section1').addClass('comein');
            }
            if (nextIndex != 1) {
                //如果不是第一屏幕就给背景添加旋转动画
                $('#bg').addClass('rotate');
            } else {
                $('#bg').removeClass('rotate');
            }

            //第二屏幕制作,当我们进入第二屏的时候图片变大
            if (nextIndex == 2) {
                $('.p2').css("transform", "translateX(-50%) translateY(-50%) translateZ(0px) scale(1)");
            } else {
                $('.p2').css("transform", "translateX(-50%) translateY(-50%) translateZ(1000px) scale(1)");
            }

            //第三屏幕制作
            if (nextIndex == 3) {
                $('.p3').css("transform", "translateZ(-50px) rotateX(30deg)");
                $('.title3').css("transform", "translateZ(0px) rotateX(0deg)");
            }

            //第四屏制作
            if (nextIndex == 4) {
                $('.p3').css("transform", "translateZ(-200px) rotateX(-45deg) translateX(2000px)");
                $('.title3').css("transform", "translateZ(1200px) rotateY(-60deg)");
            }

        },
    });
});