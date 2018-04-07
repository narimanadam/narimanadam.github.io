$(document).ready(function () {

    // Randomly Generate Cards Function
    function randomGenerateCards (){
        $(".cards").html($(".cards .card").sort(function(){
            return Math.random()-0.5;
        }));
    }

    // Reset Game Function
    function reset() {
        randomGenerateCards();
        moves = 0;
        $('.moves').text(moves + ' Move');
        clickCard();
        $('.card').removeClass('flipped');
        $('.card').removeClass('matched');
    }

    //  Randomly generate cards on page load
    randomGenerateCards();

    var moves = 0;
    $('.moves').text(moves + ' Move');

    // On card click flip it
    var clickedItem = '' ;

    function clickCard () {
        $('.card').click(function (){
            $(this).addClass('flipped');
            var clickedCard = $(this);
            moves = moves + 1;
            if(moves <= 1) {
                $('.moves').text(moves + ' Move');
            } else {
                $('.moves').text(moves + ' Moves');
            }
            // if item clicked change item cliked to true
            if( clickedItem == '') {
                 clickedItem = $(this);
            } else {
                if( clickedItem.data('card') == $(this).data('card')) {
                    $(this).addClass('matched');
                    clickedItem.addClass('matched');  
                    // if all matched Show Congratulations overlay  
                    if($('.matched').length == 16) {
                        $('.success').addClass('show');
                        // hide congratulations overlay after 7 sec
                        setTimeout(function (){
                            $('.success').removeClass('show');
                            reset()
                        }, 7000)
                    }
                } else {                    
                  var currentCard=$(this);
                  var previousCard=clickedItem;
                  currentCard.addClass('not-matched');
                  previousCard.addClass('not-matched');
                    setTimeout(function(){
                        currentCard.removeClass('flipped').removeClass('not-matched');
                        previousCard.removeClass('flipped').removeClass('not-matched');
                    }, 1000);
                }
                clickedItem = '';
            }

        });
    }

    clickCard();

    // on refresh button click reset Game
    $('#btn-refresh').click(function (){
        reset();
    });
});
