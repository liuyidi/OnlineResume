/**
 * Created by liuyidi on 15/10/26.
 */

/*placeholder的支持性问题*/
function placeholderFn() {
    if (!placeholderSupport()) {
        $('[placeholder]').focus(function () {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
                input.removeClass('placeholder');
            }
        }).blur(function () {
            var input = $(this);
            if (input.val() == '' || input.val() == input.attr('placeholder')) {
                input.addClass('placeholder');
                input.val(input.attr('placeholder'));
            }
        }).blur();
    }
    if ($('[placeholder]').value === '') {
        $('[placeholder]').value = $('[placeholder]').attr('placeholder');
    }
}
function placeholderSupport() {
    return 'placeholder' in document.createElement('input');
}



/*增强版取URL中的参数*/
function getQueryString(){
    var result = {},
        queryString = location.search.substring(1),
        re = /([^&=]+)=([^&]*)/g, m;

    while(m = re.exec(queryString)){
        result[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }

    return result;
}

//demo
var myParam = getQueryString()["myParam"];

/***********header*************/
/*替换登录信息*/
(function(){
    var username = null;

    //替换HTML的方式

})();


/***********common**************/
/*跳转到登录和注册页面*/
function login(){
    return location.href = "";
}

function register(){
    return location.href = "";
}

/*设置Cookie值*/
function createCookie(cname,value,expiredays,path){
    var path = path ? path : "/";
    var exdate = new Date();
    exdate.setDate(exdate.getDate()+expiredays);
    //cookie的名称,值,以及过期时间和路径
    document.cookie = cname + "=" +escape(value)+((expiredays==null)?"":";expires="+exdate.toGMTString())+"; path="+path;
}

/*读取Cookie值*/
function readCookie(cname){
    if(document.cookie.length > 0){
        c_start=document.cookie.indexof(cname+"=");
        //把获取的字符串按";"分割成数组遍历
        var arr = document.cookie.split(";");
        var str = cname + "=";
        for(var i = 0,len=arr.length; i<len; i++){
            //?是否要判断cookie值的第一个字符为空
            if(arr[i].indexOf(str) == 0) {
                return arr[i].substring(str.length,arr[i].length);
            }
        }

    }
    return ;
}
/*删除cookie的值*/
function deleteCookie(cname){
    return createCookie(cname,"",new Date(0),"");
}

/***********footer**************/
/*替换footer中的copyright时间*/
(function($){
    var a = $(".copyright");
    originHTML = a.html();
    var time = new Date().getFullYear();
    a.html(originHTML.replace("2013-2014", "2013-"+time));
})(jQuery);


/*判断移动端的设备device.js*/
var ua = navigator.userAgent.toLowerCase();
if(/iphone|ipad|ipod/.test(ua)){
    var device = 'iOS';
}else if(/android/.test(ua)){
    device = 'Desktop';
}
