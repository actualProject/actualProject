$(function() {
    $(".getStart").click(function() {
        var in1 = $(".shang-in1 input").val();
        var in2 = $(".shang-in2 input").val();
        var in3 = $(".shang-in3 select").val();
        var in4 = $(".shang-in4 select").val();
        var text1 = $("#text1").val();

        if(in1 == "") {
            alert('fullName not null');
            return;
        }
        if(in2 == "") {
            alert('Email not null');
            return;
        }
        //if(in3 == "") {
        //    alert('sex not null');
        //    return;
        //}
        //if(in4 == "") {
        //    alert('service not null');
        //    return;
        //}
        if(text1 == ""){
            alert('text not null');
            return;
        }
        //var obj = {};
        var fillName = in1;
        var email = in2;
        var sex = in3;
        var service = in4;
        var text = text1;
        var arrDate=window.localStorage.getItem("users");
        var data=JSON.parse(arrDate);
        //console.log(arrDate);
        //console.log(obj);
        var myPhone=window.sessionStorage.getItem("phone");
        //console.log(myPhone);
        $.each(data,function (index,value){
            if(this['phone']==myPhone){
                this.fillName=fillName;
                this.email = email;
                this.sex = sex;
                this.service = service;
                this.text = text;
            }
        });


        console.log(1111);
        console.log(data);
        window.localStorage.setItem("users",JSON.stringify(data));
        console.log(window.localStorage.getItem("users"));


    })
});

