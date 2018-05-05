$(document).ready(function(){

	// header 改變顏色
	$(window).on("scroll",function(event) {
		var scroll_distance = $(window).scrollTop();
		var header = $(".js-header");
		if(scroll_distance > 80){
			header.addClass("header--colored");
		}else{
			header.removeClass("header--colored");
		}
	});

	// 手機版不會有進場效果
	if($(window).width() > 768){
		// wow plugin 初始化
		new WOW().init();
	}
	
	// fancybox plugin options
	$("[data-fancybox]").fancybox({
		loop: true
	});

});