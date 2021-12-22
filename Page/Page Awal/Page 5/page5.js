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

	if (wScroll > $('.konten').offset().top - 250) {
		$('.konten .card').each(function (i) {
			setTimeout(function () {
				$('.konten .card').eq(i).addClass('muncul');
			}, 300 * (i + 1));
		});
	}
});