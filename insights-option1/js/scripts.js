$(document).ready(function (){
	$('.grid-item').on('click', function (){

		$('.material-bg').toggleClass('material-center');

		$(this).toggleClass('active');

		var classVal = $(this).find('i').attr('class');

		console.log(classVal);

		$('.material-bg i').attr('class', classVal);

		setTimeout(function(){

			$('.material-bg').removeClass('material-center');

		}, 1500);



	});


	var animationDelay = 2500;

	animateHeadline($('.animated-heading'));

	function animateHeadline($headlines) {

		$headlines.each(function(){
			var headline = $(this);
			//trigger animation
			setTimeout(function(){ hideWord( headline.find('.prefixed .is-visible') ) }, animationDelay);
			setTimeout(function(){ hideWord( headline.find('.suffixed .is-visible') ) }, animationDelay);
			//other checks here ...
		});
	}

	function hideWord($word) {
		var nextWord = takeNext($word);
		switchWord($word, nextWord);
		setTimeout(function(){ hideWord(nextWord) }, animationDelay);
	}

	function takeNext($word) {
		return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
	}

	function switchWord($oldWord, $newWord) {
		$oldWord.removeClass('is-visible').addClass('is-hidden');
		$newWord.removeClass('is-hidden').addClass('is-visible');
	}

});
