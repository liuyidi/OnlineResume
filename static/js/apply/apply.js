/**
 * @project_name OnlineResume
 * @file_name apply.js 招聘公司申请表单
 * @author liuyidi <liuyidi1993@gmail.com>
 * @date   2015-12-06   06:20
 */

/* global.js 全局js
 * 根据登录情况进行判断
 */
var isLogined = false;  //默认状态未登录
var login = function(){
    return location.href="../login?ReturnUrl="+escape(location.href).replace(/\//g,"%2F");
};
var logout = function(){
    return location.href="/logout?ReturnUrl="+escape(location.href).replace(/\//g,"%2F");
};
var register = function(){
    return location.href="/register?ReturnUrl="+escape(location.href).replace(/\//g,"%2F");
};

//未登录状态页面跳转
$(document).ajaxSuccess(function(a,b,c){
    if(true){
        location.href="";
    }
});

//根据是否登录进行不同处理
$.verifyLogin = function(succFun, errorFun){
    $.getJSON("/mock?method=Login&callback=?", function(json) {
        /*  json{ Identity: {
                    isAuthenticated: true, name: "cv_1001", nick: "yiliuyidi"
         }}*/
        if(json != undefined && json.Identity != undefined && json.Identity.isAuthenticated != undefined){
            if(json.Identity.isAuthenticated && "function" == typeof succFun){
                succFun(json.Identity);
            }else{
                errorFun();
            }
        }
    });
};

$(function(){
    (function(){
        $.verifyLogin(function(u){
            //已经登录
            $("#unLogin").hide();
            $("#userAvatar").attr("src",u.avatar);        //更换用户头像
            $("#userName").html(u.nickname);  //更换昵称
            $("#isLogin").show();
        },function(){
            //未登录
            $("#isLogin").hide();
            $("#unLogin").show();
        });
    })();
});

/*表单验证部分*/
$(function(){
    //input 验证
    $(".apply-form-box").on("blur",".item-input",function(){
       $(this).closest(".apply-item").validate();
    });
    //textarea验证
    $(".apply-form-box").on("focus",".item-textarea",function(){
       $(this).siblings(".textarea-info").hide();
    });

    $(".apply-form-box").on("blur",".item-textarea",function(){
        var _this = $(this);
        var val = $.trim(_this.val());

        if(val == ''){
            var error = _this.siblings('.i-error');
            _this.siblings(".textarea-info").show();
            _this.addClass("box-error");
            error.addClass("error").text("此处不能为空");
        }
    });

    $(".apply-form-box").on("keyup",".item-textarea",function(){
       $(this).closest(".apply-item").validate();
    });
});
/*侧边栏固定&滚动监听部分*/
$(function(){
    $("#nav").navScrollSpy({
        current:"current",
        scrollSpeed: 750,
        oldTop: 110
    });
});

