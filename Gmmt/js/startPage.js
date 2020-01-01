$(function ()
{
    window.serverAddr = "https://localhost:44386"
    window.cookieName = "Token";
    var serverAddr =  window.serverAddr;
    var cookieName =  window.cookieName;
    var registerbBtn = $("#register");
    var registerConfirm = $("#registerConfirm");
    var registerConfirm_guildRegister = $("#registerConfirm_guildRegister");
    var body = $("#body");
    var loginBbtn = $("#login");
    var guildName = $("#guildName");
    var guildTipsSelectOption = $("#guildTipsSelect>p");
    var guildTipsSelect = $("#guildTipsSelect");
    var lastTime = 0;

    token = $.cookie(cookieName);

    /**
     * 检查本地cookie
     */
    if(token!=null)
    {
        new Vue({
            mounted () {
                axios
                    .post(serverAddr+'/api/values/userinfo')
                    .then(function (response) {
                        if (response.code==200)
                        {
                            $(this).text("登录中...");
                            $.cookie(cookieName,token,{expires:7,path:'/'})
                            window.location.href=serverAddr+"/index";
                        }else {
                            if($.removeCookie(cookieName,{path:'/'})){
                                $.cookie(cookieName,"",{expires:7,path:'/'})
                            }
                        }
                    })
                    .catch(function (error) { // 请求失败处理
                        alert("服务器错误");
                    })
            }
        });
    }

    /**
     * 注册
     */
    registerbBtn.click(function () {
        window.location.href="regist.html";
    });

    /**
     * 注册提交
     */
    registerConfirm.click(function ()
    {
        var guildName = $("#guildName").val();
        var roleName = $("#roleName").val();
        var pwd_1 = $("#pwd-1").val();
        var pwd_2 = $("#pwd-2").val();

        if(pwd_1==""||pwd_2=="")
        {
            alert("密码不能为空");
        }else if(pwd_1!=pwd_2)
        {
            alert("密码不一致");
        }else {
            pwd_2 =  hex_md5(pwd_2);
            if($(this).html()!="提交中..."){
                $(this).text("提交中...");
                new Vue({
                    el: '#app',
                    data () {
                    },
                    mounted () {
                        axios
                            .post(serverAddr+'/api/member/add',{"guildName":guildName,"roleName":roleName,"password":pwd_2})
                            .then(function (response) {
                                if (response.code==200)
                                {
                                    window.location.href="toExamine.html"
                                }else {
                                    alert(response.msg);
                                }
                                registerConfirm.text("提交管理员审核");
                            })
                            .catch(function (error) { // 请求失败处理
                                registerConfirm.text("提交管理员审核");
                                alert("服务器错误");
                            })
                    }
                });
            }
        }
    });

    /**
     * 公会注册提交
     */
    registerConfirm_guildRegister.click(function () {
        var guildName = $("#guildName_guildRegister").val();
        var roleName = $("#roleName_guildRegister").val();
        var pwd_1 = $("#pwd-1_guildRegister").val();
        var pwd_2 = $("#pwd-2_guildRegister").val();

        if(pwd_1==""||pwd_2=="")
        {
            alert("密码不能为空");
        }else if(pwd_1!=pwd_2)
        {
            alert("密码不一致");
        }else {
            pwd_2 =  hex_md5(pwd_2);
            if($(this).html()!="提交中..."){
                $(this).text("提交中...");
                new Vue({
                    el: '#app',
                    data () {
                    },
                    mounted () {
                        axios
                            .post(serverAddr+'/api/guild/add',{"guildName":guildName,"roleName":roleName,"password":pwd_2})
                            .then(function (response) {
                                if (response.code==200)
                                {
                                    window.location.href="index.html"
                                }else {
                                    alert(response.msg);
                                }
                                registerConfirm_guildRegister.text("立即注册");
                            })
                            .catch(function (error) { // 请求失败处理
                                registerConfirm_guildRegister.text("立即注册");
                                alert("服务器错误");
                            })
                    }
                });
            }
        }
    });

    /**
     * 登录
     */
    loginBbtn.click(function () {
        if($(this).html() != "登录中...")
        {
            var rolename = $("#roleName").val();
            var password = $("#password").val();
            password =  hex_md5(password);
            $(this).text("登录中...");
            new Vue({
                el: '#app',
                data () {
                },
                mounted () {
                    axios
                        .post(serverAddr+'/api/member/login',{rolename:rolename,password:password},{
                        emulateJSON: true
                    })
                        .then(function (response) {
                            if (response.code==200)
                            {
                                loginBbtn.text("登录中...");
                                $.cookie(cookieName,token,{expires:7,path:'/'})
                                window.location.href=serverAddr+"/index";
                            }else {
                                if($.removeCookie(cookieName,{path:'/'})){
                                    $.cookie(cookieName,"",{expires:7,path:'/'})
                                }
                                alert("账号或密码错误");
                                loginBbtn.text("登录");
                            }

                        })
                        .catch(function (error) { // 请求失败处理
                            loginBbtn.text("登录");
                            alert("服务器错误");
                        })
                }
            });
        }
    });

    guildName.bind("input propertychange",function(event){
        if(guildName.val().length>1){
            difference = Date.parse(new Date()) -lastTime;
            lastTime = Date.parse(new Date());
            if(difference>5000){
                var name = guildName.val();
                new Vue({
                    el: '#app',
                    data () {
                    },
                    mounted () {
                        axios
                            .post(serverAddr+'/api/guild/queryLikeName',{"name":name})
                            .then(function (response) {
                                if (response.code==200)
                                {
                                    var names = response.names;
                                    var options = "";
                                    for (var i =0 ;i<names.length;i++)
                                    {
                                        options+=" <p id=\"option"+i+"\">"+names[i]+"</p>\n"
                                    }
                                    guildTipsSelect.children().replaceWith(options);
                                }else {
                                    alert(response.msg);
                                }
                            })
                            .catch(function (error) { // 请求失败处理
                                alert("服务器错误");
                            })
                    }
                });
                guildTipsSelect.show();
            }
        }else {
            guildTipsSelect.hide();
        }
    });
    guildTipsSelectOption.mouseover(function (e) {
        $("#guildTipsSelect>p").css("background","white")
        $(this).css("background","gray");
    });
    guildTipsSelectOption.click(function () {
        guildName.val($(this).html());
        guildTipsSelect.hide();
    });

})