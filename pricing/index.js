$(function () {
    //头部下面标签
    (function () {
        var sudu = 0;
        setInterval(function () {
            sudu += 2;
            zifu = sudu + 'px';
            if (sudu == 30) {
                sudu = -30
            }
            $('.banner>div>img').css('margin-top', zifu);
        }, 100)
    })();
//    点击蒙版出现
    $('.btn').click(function () {
        $('.mengban').css('display', 'block');
        $('body').css('overflow', 'hidden');
        //    获取单价
        var danjia = $(this).siblings('.big').text();
        //    修改单价
        $('.x-meng>h3>span').text(danjia);
        $('.x-meng>p>span').text(danjia);
    });
    //    监听表单改变事件
    $('#mySelect').change(function () {
        var danjia = $('.mengban .x-meng h3 span').text();
        var ss = $(this).children('option:selected').val();
        var je = ss * danjia;
        $('.x-meng>p>span').text(je);
    });


    $('.x-meng').click(function (event) {
        event.stopPropagation();
    });
    $('.submit').click(function () {
        //获取数据
        obj = {};
        obj.price = $('.mengban .x-meng h3 span').text();
        obj.month = $('#mySelect').children('option:selected').val();

    //    显示二维码
        $('.mengban>.ewm').css('display','block');
        $('.x-meng').css('display', 'none');
    });
//点击蒙版消失 清除记录
    $('.mengban').click(function () {
        $('.mengban').css('display', 'none');
        $('body').css('overflow', 'auto');
        $("#mySelect option:first").prop("selected", 'selected');
        $('.mengban>.ewm').css('display','none');
        $('.x-meng').css('display', 'block');
    });
//    提交事件
});


