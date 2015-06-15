/**
 * 项目: onlineresume 首页焦点图js实现
 * author: liuyidi
 * time:   2015-05-17 21:50
 */
(function($){

	var banner = $('#banner'),
		lists = $('#lists'),
		buttons = $('#buttons span'),
		prev = $('#prev'),
		next = $('#next'),
		index = 1,
		len = 3,
		interval = 5000,
		timer;
    
    function animate(offset){
    	var left = parseInt(lists.css('left')) + offset;
    	if(offset > 0){
    		offset = "+=" + offset;
    	}else{
    		offset = "-=" + Math.abs(offset);
    	}
    	lists.animate({'left': offset}, 300, function(){
    		if(left > -200){
    			lists.css('left', -1000*len);
    		}

    		if(left < (-1000*len)){
    			lists.css('left', -1000);
    		}
    	});
    }

    function showButton(){
    	buttons.eq(index-1).addClass('on').siblings().removeClass('on');
    }

    function play(){
    	timer = setTimeout(function(){
    		next.trigger('click');
    		play();
    	}, interval);
    }

    function stop(){
    	clearTimeout(timer);
    }

    next.bind('click', function(){
    	if(lists.is(':animated')){
    		return;
    	}
    	if(index == 3){
    		index = 1;
    	}else{
    		index +=1;
    	}
    	animate(-1000);
    	showButton();
    });

    prev.bind('click', function(){
    	if(lists.is(':animated')){
    		return;
    	}
    	if(index == 1){
    		index = 3;
    	}else{
    		index -=1;
    	}
    	animate(1000);
    	showButton();
    });

    buttons.each(function(){
    	$(this).bind('click', function(){
    		if(lists.is(':animated') || $(this).attr('class')=='on'){
    			return;
    		}
    		var myIndex = parseInt($(this).attr('index'));
    		var offset = -1000 * (myIndex - index);

    		animate(offset);
    		index = myIndex;
    		showButton();
    	})
    });

    banner.hover(stop, play);

    play();

})(jQuery);