$(document).ready(function () {
	$("#toBtm, #logo, #main-menu, #portfolio-anchor, #contacts-anchor").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href');
		var	top = $(id).offset().top
		$('body,html').animate({
			scrollTop: top
		}, 1000);
	});
});

$(document).ready(function() {
		$('.menu-trigger').click(function() {
		$('header nav ul').slideToggle(500);
	});
});

$(window).scroll(function () {
	if ($(this).scrollTop() > 10) {
		$('header').addClass("sticky");
	} else {
		$('header').removeClass("sticky");
	}
});

$('.technologies-slider').slick({
	infinite: true,
  	slidesToShow: 5,
  	slidesToScroll: 1,
	draggable: false,
	autoplay: true,
	autoplaySpeed: 4000,
	pauseOnFocus: false,
	dots: true, 
	arrows: true
});

$('.testimotials-slider').slick({
	infinite: true,
  	slidesToShow: 1,
  	slidesToScroll: 1,
	draggable: false,
	autoplay: true,
	autoplaySpeed: 4000,
	pauseOnFocus: false,
	dots: true, 
	arrows: false
});

$('.blog-items').slick({
	infinite: true,
  	slidesToShow: 3,
  	slidesToScroll: 1,
	draggable: false,
	autoplay: true,
	autoplaySpeed: 4000,
	pauseOnFocus: false,
	dots: true, 
	arrows: false
});


lightbox.option({
	'wrapAround': true
})