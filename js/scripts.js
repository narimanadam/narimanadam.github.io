$(document).ready(function () {

    // Skills Percentage
    $(window).scroll(function () {
        var percentage;
        $('.skill__percentage').each(function (index, value) {
            percentage = $(value).data('percentage');

            var scrollFromTop = $(window).scrollTop();
            if (scrollFromTop > 1200) {
                $('[data-percentage="' + percentage + '"]').animate({
                    width: percentage + '%'
                })
            }
        });

    });

    // Smooth Scrolling
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

    // Map Overlay
    $('.map-wrapper').find('.overlay').click(function () {
        $(this).addClass('hide');
    });

    // Isotope and Images Loaded
    $('.grid').imagesLoaded(function () {
        // images have loaded
        // init Isotope
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            masonry: {
                columnWidth: 50,
                gutter: 10,
                fitWidth: true
            }
        });

        $('.filter-button-group').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
    });

});

$(window).load(function () {
    // Isotope and Images Loaded
    $('.grid').imagesLoaded(function () {
        // images have loaded
        // init Isotope
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            masonry: {
                columnWidth: 50,
                gutter: 10,
                fitWidth: true
            }
        });

        $('.filter-button-group').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
    });

})
