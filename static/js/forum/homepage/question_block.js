/**
 * Created by liuyidi on 15/11/13.
 */

/*请您帮忙&所有问答*/
define("homepage/question_block", ["jquery"], function(e){
    function question(content, statis){
        //鼠标进入
        $(".block_q_item").bind("mouseenter", function(){
            var content = $(this).children(".block_q_item_content"),
                statis = $(".block_q_item_statis", this),
                mask = $(".block_q_item_mask", this),
                btn = content.next();
            mask.stop().animate({
                height: 107,
                opacity: 1
            }, 200);
            content.animate({height: 264}, 200, function(){
               statis.stop().fadeIn(100);
            });
            btn.stop().fadeIn(200);
        });

        //鼠标离开
        $(".block_q_item").bind("mouseleave", function(){

        });

        //点击切换到更多话题Tab
        var tabLeft = e("#tab_left");
        $("#btn_view_all").bind("click", function(){
            //判断如果滚动到下面,先让页面滚动到具体地方再执行Tab操作
            $(window).scrollTop() > tabLeft.offset().top ? $("body, html").animate({
                scrollTop: tabLeft.offset().top - 10
            }, 200, function(){
                content.switchTab(statis);
            }) : content.switchTab(statis);
        });
    }

    return question;
});