// Smooth Scrolling

$('a').on('click', function (e) {

	var tujuan = $(this).attr('href');

	var elemenTujuan = $(tujuan);

	$('html,body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1250, 'easeInOutExpo')

	e.preventDefault();

});

// Parallax Effect

$(window).scroll(function () {
	var wScroll = $(this).scrollTop();

	$('.jumbotron img').css({
		'transform': 'translate(0px, ' + wScroll / 4 + '%)'
	});

	$('.jumbotron h1').css({
		'transform': 'translate(0px, ' + wScroll / 2 + '%)'
	});

	$('.jumbotron h4').css({
		'transform': 'translate(0px, ' + wScroll / 1.2 + '%)'
	});

	if (wScroll > $('.aboutus').offset().top - 250) {
		$('.aboutus .card').each(function (i) {
			setTimeout(function () {
				$('.aboutus .card').eq(i).addClass('muncul');
			}, 300 * (i + 1));
		});
	}
});