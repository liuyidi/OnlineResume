/**
 * @file 登录
 * Created by liuyidi on 15/10/5.
 * @version 1.0
 */
/*功能1：借助jquery.cookie.js来实现“记住我”*/
if($.cookie('username')!=undefined){
    $("#rememberMe").attr("checked", true);
}else{
    $("#rememberMe").attr("checked", false);
}

//读取cookie
if($('#rememberMe:checked').length > 0){
    $('#username').val($.cookie('username'));
    $('#password').val($.cookie('password'));
}

//监听［记住我］事件
$("#rememberMe").click(function(){
   if($('#rememberMe:checked').length > 0)
       //存储cookie的值
       $.cookie('username',$('#username').val(),{expires:7}); //存储一个带7天期限的cookie
       $.cookie('password',$('#password').val(),{expires:7});
   }else{
       $.removeCookie('username',{expires: -1});
       $.removeCookie('password',{expires: -1});
   }
});