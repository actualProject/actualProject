$(function() {
    // 默认自动注册10个用户
    const public = new Public();
    public.autoRegistered();

    // const scale = $('body').width() / 1920;
    // $('html').css('font-size', `${100 * scale}px`);

    // 头部
    $('#header').load('../core/header.html');
    $('#footer').load('../core/footer.html');
    // $('head').load('../../core/corePage.js');
})