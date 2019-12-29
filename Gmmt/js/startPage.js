$(function () {
    var registerbBtn = $("#register");
    var registerConfirm = $("#registerConfirm");
    var body = $("#body");

    registerbBtn.click(function () {
        window.location.href="regist.html";
    });
    registerConfirm.click(function () {
        var pwd_1 = $("#pwd-1").val();
        var pwd_2 = $("#pwd-2").val();

        if(pwd_1==""||pwd_2=="")
        {
            alert("密码不能为空");
        }else if(pwd_1!=pwd_2)
        {
            alert("密码不一致");
        }else {
            window.location.href="toExamine.html"
        }


    });



})