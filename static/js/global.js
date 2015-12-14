/*导航栏滑入出现下拉,移开收回*/
(function($){
	var uinfo = $('#nav-pulldown'),
        menuIsLogin = $('.menu_islogin');
		ulist = $('.userlist');

	//导航效果

    menuIsLogin.hover(function(){
		ulist.slideDown(500);
    },function(){
	    ulist.slideUp(500);
	});


})(jQuery);
