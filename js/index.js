$(document).ready(function(){

	// skill chart
	var ctx = $("#myChart");
	var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ['HTML/CSS', 'Sass/Scss', 'Bootstrap', 'JS/jQuery', 'Vue', 'PHP', 'MySQL', 'Nodejs'],
			datasets: [{
				label: '',
				data: [5, 3, 5, 4, 3, 4, 5, 3],
				backgroundColor: [ // 背景色
					"#e881a7",
					"#e881a7",
					"#e881a7",
					"#e881a7",
					"#e881a7",
					"#e881a7",
					"#e881a7",
					"#e881a7"
				],
			}]
		},
		options: {
			scales: {
	            yAxes: [{
	                ticks: {
	                    max: 5,
                		min: 0,
                		stepSize: 1
	                }
	            }]
	        },
	        animation: {
	           duration: 3000,
	           easing: 'easeOutQuart'
        	}
	    }
	});


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