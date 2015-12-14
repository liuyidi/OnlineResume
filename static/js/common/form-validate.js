/**
 * @project_name OnlineResume
 * @file_name form-validate.js   表单验证基础库
 * @author liuyidi <liuyidi1993@gmail.com>
 * @date   2015-12-06   06:15
 */

//判断一个值是否在数组里
Array.prototype.contains = function(obj){
    var i = this.length;
    while(i--){
        if(this[i] === obj){
            return true;
        }
    }
    return false;
}

/*
 * 1.是否未空  2.格式是否正确  3.长短
 * */
$.fn.validate = function(){
    _this = $(this);
    var dataVal = _this.data("validate");
    if(dataVal){
       var aval = dataVal.split(" ");
       var input = _this.find("input");
       var inputVal = $.trim(input.val());
       var error = _this.find(".i-error");
       //input为空
       if(aval.contains("notnull")){
           if(inputVal == ''){
               input.addClass("box-error");
               error.addClass("error").html("此处不能为空");
           }else{
               input.removeClass("box-error");
               error.removeClass("error").html("<span class='ok-icon'>OK</span>");
           }
       }
    }

    //textarea验证

    //手机号验证

    //邮箱验证

}