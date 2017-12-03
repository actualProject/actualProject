$(function () {
    // const public = new Public();
    // const myData = public.getUser();
    // console.log(myData);
    if(sessionStorage.phone){
        window.location.href="../homePage/index.html?phone=" + sessionStorage.phone;
        return;
    }


    $('.loginT').click(function (){
        $('.loginT').addClass('active').siblings().removeClass('active')
        $('.login').css("display","block").siblings('.registered').css("display","none")
    })

    $('.regisT').click(function (){
        $('.regisT').addClass('active').siblings().removeClass('active')
        $('.registered').css("display","block").siblings('.login').css("display","none")
    })

    $('.login').click(function (){
        var userName=$('.userName').val();
        var passWord=$('.password').val();
        if(userName==''||passWord==''){
            alert("please enter your phone or password!");
            return;
        }else if(!phoneReg(userName)){
            alert('The number format is incorrect')
        }
        var public=new Public();
        var user= public.getUser();
        var obj={};
        $.each(user,function (index,value){
            if(userName==value['phone']&&passWord==value['password']){
                obj.phone = value['phone'];
                obj.password = value['password'];
                return;
            }
        })
        if(obj.phone && obj.password){
            sessionStorage.phone=obj.phone;
            window.location.href="../homePage/index.html?phone=" + obj.phone;
            return;
        }
        alert("Cell phone number or password error");
        return;
    })

    $('.registered').click(function (){
        var userName=$('.userName').val();
        var passWord=$('.password').val();
        if(userName==''||passWord==''){
            alert("please enter your phone or password!");
            return;
        }
         var public = new Public({
             phone: userName,
             password: passWord
         });
        var result = public.newUser();
        alert(result);
        sessionStorage.phone=userName;
        window.location.href="../getStarted/index.html?phone=" + userName;
        $('.userName').val("");
        $('.password').val("");
    })
    function phoneReg (phone) {  
        var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;  
        if (!myreg.test(pone)) {  
          return false;  
        } else {  
          return true;  
        }  
      };
})