$(document).ready(function (){
	var percentage;
	
	$(window).scroll(function () {
		$('.skill-percentage').each(function (index, value){
			percentage = $(value).data('percentage');

			var scrollFromTop = $(window).scrollTop();
			if(scrollFromTop > 900){
				$('[data-percentage="'+ percentage+'"]').animate({
					width: percentage + '%'
				})
			}
			
		})
			
	})

});