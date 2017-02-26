$(document).ready(function(){
    $(window).scroll(function(){
        var y = $(window).scrollTop();
        if(y>1500){
            $('.program-animation').addClass('program-animation-fade');
        }
        if(y>2500){
            $('.redsea-animation').addClass('redsea-animation-fade');
        }
    });
});



