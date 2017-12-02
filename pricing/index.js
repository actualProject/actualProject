$(function () {
    //头部下面标签
    xia();
    function xia(){
        var sudu=0;

        setInterval(function(){
            sudu+=2;
            zifu = sudu+'px';
            if(sudu==30){
                sudu=-30
            }
            $('.banner>div>img').css('margin-top',zifu);

        },100)

    }

    //中间部分点击选择
    $('.btn').each(function (index) {
        $(this).click(function(){
            $('.btn').removeClass('cur');
            $(this).addClass('cur');
        });
    });
    //底部点击选择
    $('.jiaobu>ul>li').each(function(){
        $(this).click(function(){
            $('.jiaobu>ul>li').removeClass('cur2');
            $(this).addClass('cur2');
        });
    })
});