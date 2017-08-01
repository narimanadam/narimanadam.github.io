$(document).ready(function () {
    // var percentage;

    $(window).scroll(function () {
    	$('.skill__percentage').each(function (index, value){
    		percentage = $(value).data('percentage');

    		var scrollFromTop = $(window).scrollTop();
    		if(scrollFromTop > 400){
    			$('[data-percentage="'+ percentage+'"]').animate({
    				width: percentage + '%'
    			})
    		}

    	})

    })

    $('.map-wrapper').find('.overlay').click(function () {
        $(this).addClass('hide');
    })

});
