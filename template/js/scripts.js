$(function () {
  $('.col-md-6').matchHeight();

  $('#openMenuBtn').click(function () {
    $('.menu-overlay').toggleClass('open');
    $('.overlay .toggleCheckbox').prop('checked', true);
    $('body').addClass('disable-scroll');
  });

  $('#closeMenuOverlayBtn').click(function () {
    $('.menu-overlay').toggleClass('open');
    $('#openMenuBtn .toggleCheckbox').prop('checked', false);;
    $('body').removeClass('disable-scroll');
  });

  $('#closeContactOverlayBtn').click(function () {
    $('.contact-overlay').toggleClass('open');
    $('#openMenuBtn .toggleCheckbox').prop('checked', false);;
    $('body').removeClass('disable-scroll');
  });

  $('.form__field').blur(function () {
    if ($(this).val()) {
      $(this).parent().addClass('form-filled');
    } else {
       $(this).parent().removeClass('form-filled');
    }
  })

  $('#contact-link').click(function (){
    $('.contact-overlay').addClass('open');
  })

});