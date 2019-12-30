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

    $("#login").click(function () {
        new Vue({
            el: '#app',
            data () {
            },
            mounted () {
                axios
                    .post('https://localhost:44348/api/values/userinfo')
                    .then(function (response) {
                      if (response.data.name =="jack")
                      {
                          alert("登陆成功！");
                      }

                    })
                    .catch(function (error) { // 请求失败处理
                       alert("服务器错误")
                    })
            }
        })


    });


})