$(document).ready(function () {
    // Scroll to top
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    //     // Floating Form Check if input has value 
    $('.form__field').blur(function () {
        if ($(this).val()) {
            $(this).parent().addClass('form-filled');
        } else {
            console.log('no value');
        }
    })

    // Isotope Filter
    var $grid = $('.grid').imagesLoaded(function () {
        // init Isotope after all images have loaded
        $grid.isotope({
            // options...
            masonry: {
                columnWidth: '.grid__sizer'
            },
            // resize: true
        });

        // filter items on button click
        $('.filter-button-group').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });

    });

    $('.grid__item').mouseenter(function () {
        $(this).find('.info').addClass('show');
    }).mouseleave(function () {
        $(this).find('.info').removeClass('show');
    })

    // // Counter

    $(window).scroll(function () {
        var height = $(window).scrollTop();

        if (height > 4300) {
            $('.stats-list__number').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');

                $({ countNum: $this.text() }).animate({
                    countNum: countTo
                },

                    {

                        duration: 1000,
                        easing: 'linear',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                        }
                    });
            });
        }

        var height = $(window).scrollTop();

        if (height > 600) {
            $('.navbar-default').addClass('dark');
        } else {
            $('.navbar-default').removeClass('dark')
        }
    });
    
    var height = $(window).scrollTop();

    if (height > 600) {
        $('.navbar-default').addClass('dark');
    } else {
        $('.navbar-default').removeClass('dark')
    }
})

$('.carousel').carousel({
    pause: 10000
})

$('.card').matchHeight(false);

$('#startHeading').hide();
$('#startField').hide();

$('#start').click(function () {
    $('#infoCard').hide();
    $('#contactCard').addClass('col-md-offset-3 col-md-6');
    $('#contactHeading').hide();
    $('#startHeading').show();
    $('#startField').show();
    $('#contactField').hide();
});

$('#contactlink').click(function () {
    $('#infoCard').show();
    $('#contactCard').removeClass('col-md-offset-3');
    $('#contactHeading').show();
    $('#startHeading').hide();
    $('#startField').hide();
    $('#contactField').show();
});

$('.navbar ul li a').click(function () {
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
});

// Contact Form 
var $contactForm = $('#contact-form');
function getFormData(){
    return $('#contact-form').serializeArray()
    .reduce(function(a, x) { a[x.name] = x.value; return a; }, {})
}

$contactForm.submit(function (e) {
    e.preventDefault();
    $.ajax({
        url: '//formspree.io/info@keysnapp.com',
        method: 'POST',
        data: getFormData(),
        dataType: 'json',
        beforeSend: function () {
            $contactForm.append('<div class="alert alert--loading">Sending message…</div>');
        },
        success: function (data) {
            $contactForm.find('.alert--loading').hide();
            $contactForm.append('<div class="alert alert-success">Message sent!</div>');
            $('#contact-form')[0].reset();
        },
        error: function (err) {
            $contactForm.find('.alert--loading').hide();
            $contactForm.find('.alert-error').addClass('show');
        }
    });
});



