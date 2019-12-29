$(function () {
    var body = $("#body");
    var setting  = $("#setting");
    var activityBtn = $(".activityBtn");
    var settingPage = $("#settingPage");
    var createGuildActivity = $("#createGuildActivity");
    var createFleetActivity = $("#createFleetActivity");
    var createFleet = $("#createFleet");
    var findfleet = $("#findFleet");


    $("#roleInfoSetting").click(function ()
    {
        settingPage.children().replaceWith("" +
            "  <div class=\"container\" style=\"width: 100%;background: #ffffff;padding-bottom: 20px\">\n" +
            "            <h2>个人信息</h2>\n" +
            "            <form>\n" +
            "                <div class=\"form-group\">\n" +
            "                    <label for=\"email\">角色名</label>\n" +
            "                    <input type=\"text\" maxlength='8' class=\"form-control\" id=\"email\" placeholder=\"空白页法师\">\n" +
            "                </div>\n" +
            "                <div class=\"form-group\">\n" +
            "                    <label for=\"email\">职业</label>\n" +
            "                     <select class=\"form-control\" id=\"sel1\">\n" +
            "                <option>火焰</option>\n" +
            "                <option>冰霜</option>\n" +
            "                <option>奥术</option>\n" +
            "                <option>火焰</option>\n" +
            "                <option>火焰</option>\n" +
            "                <option>火焰</option>\n" +
            "                <option>火焰</option>\n" +
            "                <option>火焰</option>\n" +
            "                <option>火焰</option>\n" +
            "                <option>火焰</option>\n" +
            "            </select>\n" +
            "                </div>\n" +
            "                <div class=\"form-group\">\n" +
            "                    <label for=\"email\">等级</label>\n" +
            "                    <input type=\"number\" max=\"120\" class=\"form-control\" id=\"email\" placeholder=\"空白页法师\" >\n" +
            "                </div>\n" +
            "                <div class=\"form-group\">\n" +
            "                    <label for=\"email\">装备等级</label>\n" +
            "                    <input type=\"number\" max=\"500\" class=\"form-control\" id=\"email\" placeholder=\"空白页法师\">\n" +
            "                </div>\n" +
            "                <div class=\"form-group\">\n" +
            "                    <label for=\"email\">种族</label>\n" +
            "                    <input type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"空白页法师\">\n" +
            "                </div>\n" +
            "                <div class=\"form-group\">\n" +
            "                    <label for=\"email\">常用专精</label>\n" +
            "                    <select class=\"form-control\" id=\"sel1\">\n" +
            "                        <option>火焰</option>\n" +
            "                        <option>冰霜</option>\n" +
            "                        <option>奥术</option>\n" +
            "                    </select>\n" +
            "                </div>\n" +
            "\n" +
            "                <button id=\"settingEnable\" type=\"submit\" class=\"btn btn-primary col-md-12\">确认修改</button>\n" +
            "            </form>\n" +
            "        </div>");
        setting.show();
        $("#settingEnable").click(function ()
        {
            window.location.reload();
        });
    });
    $("#passwordSetting").click(function ()
    {
        settingPage.children().replaceWith("" +
            "<div class=\"container\"  style=\"width: 100%;background: #ffffff;padding-bottom: 20px\">\n" +
            "    <h2>密码设置</h2>\n" +
            "    <form>\n" +
            "        <div class=\"form-group\">\n" +
            "            <label for=\"email\">旧密码</label>\n" +
            "            <input type=\"password\" class=\"form-control\" id=\"email\" placeholder=\"旧密码\">\n" +
            "        </div>\n" +
            "        <div class=\"form-group\">\n" +
            "            <label for=\"email\">新密码</label>\n" +
            "            <input type=\"password\" max=\"120\" class=\"form-control\" id=\"email\" placeholder=\"新密码\" >\n" +
            "        </div>\n" +
            "        <div class=\"form-group\">\n" +
            "            <label for=\"email\">确认密码</label>\n" +
            "            <input type=\"password\" max=\"500\" class=\"form-control\" id=\"email\" placeholder=\"确认密码\">\n" +
            "        </div>\n" +
            "        <button id=\"settingEnable\" type=\"submit\" class=\"btn btn-primary col-md-12\">确认修改</button>\n" +
            "    </form>\n" +
            "</div>");
        setting.show();
        $("#settingEnable").click(function ()
        {
            window.location.reload();
        });
    });

    setting.click(function (e)
    {
        var settingPageX1 = settingPage.offset().left;
        var settingPageY1 = settingPage.offset().top;
        var settingPageX2 = settingPage.width()+settingPageX1;
        var settingPageY2 = settingPageY1+settingPage.height();
        x= e.pageX;
        y= e.pageY;
       if(x<settingPageX1||x>settingPageX2||y<settingPageY1||y>settingPageY2)
       {
           setting.hide();
       }
    });

    createFleetActivity.click(function () {
        alert("开发中，敬请期待！");
    });
    createFleet.click(function () {
        alert("开发中，敬请期待！");
    })
    findfleet.click(function () {
        alert("开发中，敬请期待！");
    })

    createGuildActivity.click(function ()
    {
     settingPage.children().replaceWith("" +
         "  <div class=\"container\" style=\"width: 100%; background: #ffffff;padding-bottom: 20px\">\n" +
         "            <h2>活动信息</h2>\n" +
         "            <form>\n" +
         "                <div class=\"form-group\">\n" +
         "                    <label for=\"email\">开始时间</label>\n" +
         "                    <div class=\"input-group date form_datetime col-md-5\" data-date=\"1979-09-16T05:25:07Z\" data-link-field=\"dtp_input1\">\n" +
             "                      <input class=\"form-control\" size=\"16\" type=\"text\" value=\"\" id='activityStartTime' readonly>\n" +
             "                      <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-remove\"></span></span>\n" +
             "                      <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-th\"></span></span>\n" +
         "                     </div>\n" +
     "                       <input type=\"hidden\" id=\"dtp_input1\" value=\"\" /><br/>\n" +
         "                </div>\n" +
         "                <div class=\"form-group\">\n" +
         "                    <label for=\"email\">结束时间</label>\n" +
         "                    <div class=\"input-group date form_datetime col-md-5\" data-date=\"1979-09-16T05:25:07Z\" data-link-field=\"dtp_input1\">\n" +
             "                      <input class=\"form-control\" size=\"16\" type=\"text\" value=\"\" id='activityStartTime' readonly>\n" +
             "                      <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-remove\"></span></span>\n" +
             "                      <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-th\"></span></span>\n" +
 "                            </div>\n" +
     "                        <input type=\"hidden\" id=\"dtp_input1\" value=\"\" /><br/>\n" +
         "                </div>\n" +
         "                <div class=\"form-group\">\n" +
         "                    <label for=\"email\">活动标题</label>\n" +
         "                    <input type=\"text\" maxlength=\"16\" class=\"form-control\" id=\"activityTitle\" placeholder=\"比如:开荒H尼奥罗萨\" >\n" +
         "                </div>\n" +
         "                <div class=\"form-group\">\n" +
         "                    <label for=\"email\">活动说明</label>\n" +
     "                        <textarea class=\"form-control\"  maxlength='500' rows=\"5\" id=\"activityContent\"></textarea>\n" +
         "                </div>\n" +
         "                <button id=\"settingEnable\" type=\"submit\" class=\"btn btn-primary col-md-12\">创建活动</button>\n" +
         "            </form>\n" +
         "        </div>");

        $('.form_datetime').datetimepicker({
            language:  'zh-CN',
            weekStart: 1,
            todayBtn:  1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 2,
            forceParse: 0,
            showMeridian: 1,
            format: 'yyyy-mm-dd hh:ii:ss',
            dateFormat: 'yyyy-mm-dd',//日期显示格式
            timeFormat: 'HH:mm:ss',//时间显示格式
        });
        $('.form_date').datetimepicker({
            language:  'zh-CN',
            weekStart: 1,
            todayBtn:  1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 2,
            minView: 2,
            forceParse: 0
        });
        $('.form_time').datetimepicker({
            language:  'zh-CN',
            weekStart: 1,
            todayBtn:  1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 1,
            minView: 0,
            maxView: 1,
            forceParse: 0
        });
     setting.show();

        $("#settingEnable").click(function ()
        {
            window.location.reload();
        });
    });

    activityBtn.click(function () {
        window.location.href = "activity.html?activityID = "+ $(this).attr("value");
    });

    $("#memberMgmt").click(function () {
        window.location.href="roleMgmt.html";
    })

})