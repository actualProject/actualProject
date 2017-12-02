$(function() {
    $(".getStart").click(function() {
        var in1 = $(".shang-in1 input").val();
        var in2 = $(".shang-in2 input").val();
        var in3 = $(".shang-in3 input").val();
        var in4 = $(".shang-in4 input").val();
        var text1 = $("#text1").val();

        if(in1 == "") {
            alert('fullName not null');
            return;
        }
        if(in2 == "") {
            alert('Email not null');
            return;
        }
        if(in3 == "") {
            alert('pass not null');
            return;
        }
        if(in4 == "") {
            alert('input not null');
            return;
        }
        if(text1 == ""){
            alert('text not null');
            return;
        }
        // alert(123);
        var obj = {};
        obj.fillName = in1;
        obj.email = in2;
        obj.pass = in3;
        obj.input = in4;
        obj.text = text1;
        console.log(obj);

    })
});

