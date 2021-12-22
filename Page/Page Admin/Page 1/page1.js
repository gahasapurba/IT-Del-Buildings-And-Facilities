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

	if (wScroll > $('.tentang').offset().top - 250) {
		$('.tentang .karosel').each(function (i) {
			setTimeout(function () {
				$('.tentang .karosel').eq(i).addClass('muncul');
			}, 300 * (i + 1));
		});
	}

	if (wScroll > $('.aboutitdel').offset().top - 250) {
		$('.aboutitdel .kepala').each(function (i) {
			setTimeout(function () {
				$('.aboutitdel .kepala').eq(i).addClass('muncul');
			}, 300 * (i + 1));
		});
	}

	if (wScroll > $('.tulisan').offset().top - 600) {
		$('.tulisan .par').each(function (i) {
			setTimeout(function () {
				$('.tulisan .par').eq(i).addClass('muncul');
			}, 300 * (i + 1));
		});
	}

	if (wScroll > $('.portfolio').offset().top - 250) {
		$('.portfolio .card').each(function (i) {
			setTimeout(function () {
				$('.portfolio .card').eq(i).addClass('muncul');
			}, 300 * (i + 1));
		});
	}
});