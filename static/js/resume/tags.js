/**
 * Created by liuyidi on 15/10/25.
 * @file tags.js 标签
 */
$(function(){
    var timer;
    $(".tags-input").val("");
    //输入框失去焦点
    $(document).on("blur",".tags-input",function(){
       timer = setTimeout(function(){
           $(this).parents(".tags").find(".tags-list").slideUp();
       }, 400);
    });
    //输入框得到焦点,里面的说明文字清空
    $(document).on("focus",".tags-input",function(){
        $(this).parents(".tags").find(".tags-lable").hide();
        clearTimeout(timer);
    });
    //输入框点击,获得焦点事件
    $(document).on("click",".tags-input",function(){
        $(this).find(".tags-input").focus();
        $(this).find(".tags-list").slideDown();
    });

    /*得到所有的标签值*/
    function getTagVal(obj){
        var str = "";
        var token = $(obj).parents(".tags").find(".tags-token");
        if(token.length<1){
            $(obj).parents(".tags").find(".tags-val").val("");
            return false;
        }
        for(var i= 0, len = token.length; i<len; i++){
            str += token.eq(i).text()+","
        }
        //将字符串去重后转化为数组
        str = unique(str);
        //将数组转化为字符串
        str = str.join();
        //字符串截取
        str = str.substring(0,str.length-1);
        $(obj).parents(".tags").find(".tags-val").val(str);
    }

    /*点击删除标签*/
    $(document).on("click",".tags-token",function(){
        var token = $(this).parents(".tags").find(".tags-token");
        var it = $(this).parents(".tags");
        $(this).remove();
    });

    //字符串去重转化为数组函数
    function unique(){
        var a = this.concat();
        for(var i=0; i<a.length; ++i){
            for(var j=i+1; j< a.length; ++j){
                if(a[i] === a[j]){
                    a.splice(j, 1);
                }
            }
        }
        return a;
    }

});
