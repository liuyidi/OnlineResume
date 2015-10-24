/**
 * Created by liuyidi on 15/10/24.
 * @file:  resume-add
 */


/**
 * 教育信息
 */

/*添加教育信息*/
function addEdu(){
    //让val都为空

    $("").hide();
    //#resumeEdu-add 可以和 #resumeEdu-edit使用同一套模版
    $("#resumeEdu-add").show();
}
/*修改教育信息*/
function editEdu(){

    var eduId = eduId;

    $.get("/resumeEdit/getResumeEdu",data,function(msg){
        var obj = JSON.parse(msg); //解析返回的JSON数据
        //让返回的值赋值给相应的表单数据
        //xxx.value = obj.data1;
        $("#resumeEdu-edit").show();
    });
}
/*删除教育信息*/
$("#resumeEdu-del").click(function(){
    $.MsgBox.Confirm("温馨提示","您确定要删除此项教育经历？",function(){
        //obj.id 为该教育经历的ID
        delEdu(obj.id , this);
    });
});

function delEdu(id,obj){
    var paramObj = {
        id: id,
        flag: "resumeEdu-del"
    };
    $.ajax({
        type: "post",
        datatype: "json",
        url: "/resumeEdit/toDelResumeAbout.do",
        data: paramObj,
        success: function(msg){
            $("#resumeEdu-info").hide(); //清除某项教育经历
        }
    });
}

/*保存*/
$("resumeEdu-save").click(function(){
    //先验证提交的值
//    $("#resume_post_JYJL").Validform({
//        tiptype:3,
//        beforeSubmit:function(curform){
//            $.ajax({
//                type: "POST",
//                url: "/resumeEdit/toSaveOrUpdate_Resume_edu.do",//${domain_job }
//                data: $("#resume_post_JYJL").serialize()+"&college_id_flexselect="+$("#college_id_flexselect").val(),
//                dataType:"html",
//                success: function(msg){
//                    $("#resumeedit_edu").html(msg);
//                    $("#resumeJYJL_edit").hide();
//                }
//            });
//
//            return false;
//            //在验证成功后，表单提交前执行的函数，curform参数是当前表单对象。
//            //这里明确return false的话表单将不会提交;
//        }
//    });
});
/*取消*/
$("#resumeEdu-cancel").click(function(){
    $("#resumeEdu-edit").hide();
    self.location.href="#resumeEdu-edit";  //给链接加hash＃
});