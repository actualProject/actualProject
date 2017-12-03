$(function () {
    //查询session数据
    let getSession = (key) => {
        return window.sessionStorage.getItem(key);
    };
    $('#loadMore').click(() => {
        if (getSession('phone') == null) {
            $('#panel').slideDown();
            $('#close').click(() => {
                $('#panel').slideUp();
                $('')
            })
        }
        let UI = (arr) => {
            //遍历json数组
            $.each(arr, (index, val) => {
                //获取数据
                let title = val.title;
                let timeT = val.time;
                let text = val.des;
                let img = val.img;
                //创建标签
                let newBox = '<div class="plan">' + '<img src="' + img + '" alt="">' + '<div class="plan_text">' +
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
            });
        };
        //发送请求获取数据
        $.ajax({
            url: '../page.json',
            dataType: 'json',
            async: true,
            success: (data) => {
                let dataArr = data.product;
                console.log(dataArr);
                UI(dataArr);
            },
            error: () => {
                alert('请求失败,请检查网络!');
            }
        });
    });

    // $('.plan').on('click', () => {
    //     if (getSession('phone') == null) {
    //         $('#panel').slideDown();
    //     }
    // })
})