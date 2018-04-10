$(document).ready(function () {

    // Randomly Generate Cards Function
    function randomGenerateCards() {
        $(".cards").html($(".cards .card").sort(function () {
            return Math.random() - 0.5;
        }));
    }

    var moves = 0;
    $('.moves').text(moves + ' Move');

    // On card click flip it
    var clickedItem = '';
    // Reset Game Function
    function reset() {
        randomGenerateCards();
        moves = 0;
        clickedItem = '';
        $('.moves').text(moves + ' Move');
        clickCard();
        $('.card').removeClass('flipped');
        $('.card').removeClass('matched');
        clearInterval(myTimer);
        $('#minutes').text('00');
        $('#seconds').text('00');
        if($('.fa-star').hasClass('far')){
            $('.fa-star').removeClass('far').addClass('fas')
        }
        $(document).one("click", ".card", function(){
            timer();
        });
    }

    //  Randomly generate cards on page load
    randomGenerateCards();

    // Trigger Timer on the first click of the card only
    $(document).one("click", ".card", function(){
        timer();
    });

    // Click Card Function
    function clickCard() {
        $('.card').click(function () {
            $(this).addClass('flipped');
            var clickedCard = $(this);
            moves = moves + 1;
            if (moves <= 1) {
                $('.moves').text(moves + ' Move');
            } else {
                $('.moves').text(moves + ' Moves');
            }

            if( moves == 24) {
                $('.star-3').removeClass('fas').addClass('far')
            } else if (moves == 36) {
                $('.star-2').removeClass('fas').addClass('far')
            }
            // if item clicked change item cliked to true
            if (clickedItem == '') {
                clickedItem = $(this);
            } else {
                if (clickedItem.data('card') == $(this).data('card')) {
                    $(this).addClass('matched');
                    clickedItem.addClass('matched');
                    // if all matched Show Congratulations overlay  
                    if ($('.matched').length == 16) {
                        $('.success').addClass('show');
                        stopTimer();
                        $('.success.show').append('<p id="game-time"> You Won the Game in ' + $('#minutes').text() + ':' + $('#seconds').text() +'</p>');
        
                    }
                } else {
                    var currentCard = $(this);
                    var previousCard = clickedItem;
                    currentCard.addClass('not-matched');
                    previousCard.addClass('not-matched');
                    setTimeout(function () {
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
    $('#btn-refresh').click(function () {
        reset();
    });

    // Play Again
    $('#play-again').click(function () {
        reset();
        $('.success').removeClass('show');
    })

    // Timer
    var myTimer;
    function timer() {
        var minutesLabel = document.getElementById("minutes");
        var secondsLabel = document.getElementById("seconds");
        var totalSeconds = 0;
        myTimer = setInterval(setTime, 1000);

        function setTime() {
            ++totalSeconds;
            secondsLabel.innerHTML = pad(totalSeconds % 60);
            minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
        }

        function pad(val) {
            var valString = val + "";
            if (valString.length < 2) {
                return "0" + valString;
            } else {
                return valString;
            }
        }
    }

    function stopTimer() {
        clearInterval(myTimer);
    }


});