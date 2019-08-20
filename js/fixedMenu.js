$(document).ready(function () {
	var num = 120; //number of pixels before modifying styles

	$(window).bind('scroll', function () {
	    if ($(window).scrollTop() > num) {
	        $('.scroll-menu').slideDown().addClass('fixed');
	    } else {
	        $('.scroll-menu').slideUp("fast").removeClass('fixed');
	    }
	});
});