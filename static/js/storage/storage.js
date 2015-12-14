/**
 * Created by liuyidi on 15/10/26.
 * @file storage.js 简历库
 */
$(function(){

    /*ajax加载简历数据*/



    /*收藏*/
    $(".storage-favorite").on("click",function(e){
        favorite(e);
    });

    function favorite(e){
        var me = $(e.target);
        var resume = me.parents(".storage-resume");
        var resumeId = resume.attr("data-resumeId");
        var userId = userId;
        if(me.text() == "已收藏"){
            me.text("收藏");
//            $.post("/ajax/storage/favorite-cancel",{"resumeId":resumeId,"userId":userId},function(data){
//                console.log(data);
//            },"json");
        }else{
            me.text("已收藏");
//            $.post("/ajax/storage/favorite",{"resumeId":resumeId,"userId":userId},function(data){
//                console.log(data);
//            },"json");
        }

    }
    /*点赞*/
    $(".storage-like").on("click",function(e){
        like(e);
    });

    function like(e){
        var me = $(e.target);
        var resumeId = me.parents('.storage-resume').attr("data-resumeId");
        var num = 0; //点赞次数
        var $i = $("<b>").text("+1");
        num++;			   //点赞数增加
        me.fadeOut(300);   //给点赞按钮添加渐隐效果
        //给点赞增加＋1效果
        $i.css({bottom: "150px", right: "103px",position:"absolute", color:"#0099E5"});
        me.parents(".storage-resume").append($i);
        $i.animate({bottom: "200px",opacity:0,"font-size":"1.4em"},1500,function(){ $i.remove()});
        //ajax回调success返回num值
//         $.ajax({
//			type: "post",
//			url: "/ajax/storage!favorite.do",
//			data: {
//				"num":num,
//				"photoId":photoId
//			},
//			dataType: "json",
//			async: true,
//			cache: false,
//			success: function(data){
//				if(data.error == 0) {
//					$(".discover-likeNum").text(num);
//				}
//			}
//
//		});
        me.fadeIn(300);   //给点赞按钮添加渐显效果
        me.parents(".storage-resume").find(".storage-likeNum").text(num);
        e.stopPropagation();
    }
});


