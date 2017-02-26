$(document).ready(function(){
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		if(scrollTop>700){
			$('.front-page nav').addClass('navbar-fixed-top');
		}
		else{
			$('.front-page nav').removeClass('navbar-fixed-top');
		}
	});
    $(document).ready(function(){
	    $('.navbar-form a').click(function(){
	        $('.navbar-form .form-control').toggle();
	    });
	});
        
	$('.over-map').click(function(){
		$(this).hide();
	});
	new WOW().init();
	$('.top-btn').hover(function(){
		$(this).addClass('pulse')
	}, 
	function(){
		$(this).removeClass('pulse');
	});
});

