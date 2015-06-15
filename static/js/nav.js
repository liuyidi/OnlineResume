/*导航栏滑入出现下拉,移开收回*/
(function($){
	var uinfo = $('#nav-pulldown'),
		ulist = $('.userlist');

	// ulist.mouseleave = uinfo.mouseleave(function(){
	// 	ulist.fadeOut();
	// 	ulist.css('display','none');

	// });

	// ulist.mouseenter = uinfo.mouseenter(function(){
	// 	ulist.fadeIn();
	// 	ulist.css('display','block');
	// });

	//导航效果（兼容IE6）

    uinfo.hover(function(){
		ulist.stop(true,true).slideDown(400);
    },function(){
	    ulist.stop(true,true).slideUp(2000);
	});


})(jQuery);
