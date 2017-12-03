$(function () {
    //查询session数据
    const getSession = (key) => {
        return window.sessionStorage.getItem(key);
    };
    //创建新plan
    function showMore(self){
        let textM = '“Handset with diamonds, yellow sapphires and blue topaz in 18 karat gold, the jewels are set into a Victoria’s Secret Dream Angels Demi bra. The garment took almost 350 hours to create and is embellished with nearly 6,000 precious gemstones.This year’s Swarovski outfit is probably our most spectacular. The outfit has an incredible wing that is completely covered in brilliant multicolored stones. It is one of the heaviest wings we have ever made.”';
        let title = $(self).find('h3').text();
        let imgSrc = $(self).find('img').attr('src');
        let text = $(self).find('p').text() + textM;
        $('#mdTitle').text(title);
        $('#mdText img').attr('src', imgSrc);
        $('#mdText p').text(text);
    };
    //
    let UI = (arr) => {
        //遍历json数组
        $.each(arr, (index, val) => {
            //获取数据
            let title = val.title;
            let timeT = val.time;
            let text = val.des;
            let img = val.img;
            //创建标签
            let newBox = '<div class="plan" data-toggle="modal" data-target="#details">' + '<img src="' + img + '" alt="">' + '<div class="plan_text">' +
                '<div class="plan_text">' +
                '<h3>' + title + '</h3>' +
                '<span>' + timeT + '</span>' +
                '<span></span>' +
                '<p>' + text + '</p>' +
                '<img src="images/small.png" alt="">' +
                '<span>24comments</span>' +
                '<a href="#">' + '<img src="images/share.png" alt="">' + '</a>' +
                '</div>';
            $('.case_data').append(newBox);
            $(newBox).click(showMore(self));
        });
    };
    $('#loadMore').click(() => {
        if (getSession('phone') == null) {
            $('#panel').slideDown();
        } else {
            const public = new Public({
                form: 'product'
            });
            const dataArr = public.getData();
            UI(dataArr);
            //发送请求获取数据
            // $.ajax({
            //     url: '../page.json',
            //     dataType: 'json',
            //     async: true,
            //     success: (data) => {
            //         let dataArr = data.product;
            //         UI(dataArr);
            //     },
            //     error: () => {
            //         alert('请求失败,请检查网络!');
            //     }
            // });
        }

    });
    //关闭按钮
    $('#close').click(() => {
        $('#panel').slideUp();
    });
    //提交注册
    $('.login').click(() => {
        let userName = $('.userName').val();
        let passWord = $('.password').val();
        if (userName == '' || passWord == '') {
            alert("please enter your phone or password!");
            return;
        }
        let public = new Public();
        let user = public.getUser();
        let obj = {};
        $.each(user, (index, value) => {
            if (userName == value['phone'] && passWord == value['password']) {
                obj.phone = value['phone'];
                obj.password = value['password'];
                return;
            }
        });
        if (obj.phone && obj.password) {
            sessionStorage.phone = obj.phone;
            $('.userName').val('');
            $('.password').val('');
            setTimeout(function () {
                alert('SUCESS!');
                $('#panel').css({'display': 'none'});
            }, 10);
            return;
        }
        alert("Cell phone number or password error");
        return;
    });
    //实现详情弹窗
    $('.plan').on('click',function () {
        let self=this;
        showMore(self);
    });
    //跳转到付款页面
    $('#pay').click(() => {
        window.location.href = '../pricing/index.html#pay';
    });
});