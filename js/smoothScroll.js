$(document).ready(function() {
	$('.portfolio-nav').click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

	$('.about-nav').click(function() {
		$('html, body').animate({
			scrollTop: $('#about-section').offset().top
		}, 1000);
	});

	$('.contact-nav').click(function() {
		$('html, body').animate({
			scrollTop: $('#contact-section').offset().top
		}, 1000);
	});
	// $('html, body').animate({
	// 	scrollTop: $('.gal-wrapper').offset().top
	// }, 1000);
});