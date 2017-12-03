$(function() {
    var userList =eval(window.localStorage.getItem("users"));
    $(".teamlist li").each(function (index, element){
        var userId=userList[index].id;
        var userPhone = userList[index].phone;
        // console.log(userId,userPhone);
        var teamTitle = this.children[1].children[0];
        var teamCon = this.children[1].children[1];
        $(teamTitle).html(userId);
        $(teamCon).html(userPhone);
    });
})