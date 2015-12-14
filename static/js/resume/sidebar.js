

/*侧边栏固定,不随页面滚动*/
(function(){
	var oDiv = document.getElementById('sidebar');
	var H = 0;
	var Y = oDiv;
	while(Y){
		H += Y.offsetTop;
		Y = Y.offsetParent;
	};
	window.onscroll = function(){
		var s = document.body.scrollTop || document.documentElement.scrollTop;
		if( s+60 >H ){
			oDiv.className = "sidebar sidebar-fixed";			
		}else{
			oDiv.className = "sidebar";
		}
	};
})();