//event pada saat link
$('.halaman-scroll').on('click', function(e) { //jqury tolong carikan elemen dengan nama kelas halaman-scroll, saat di klik jalankan fungsi ini
	// ambil isi href
	var tujuan = $(this).attr('href');

	//tangkap elemen yang bersangkutan
	var elementujuan = $(tujuan);


	//pindahkan scroll
	$('html, body').animate({
		scrollTop : elementujuan.offset().top - 50
	}, 1300, 'swing');

	e.preventDefault();
});



//paralax
$(window).on('load', function() {
	$('.jumbotron h1, .jumbotron p, .jumbotron img').addClass('muncul');


	$('.about .kiri, .about .kanan').addClass('muncul');
});

$(window).scroll(function () {
	var winscroll = $(this).scrollTop();

	//jumbotron
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+winscroll/3+'%)',
		'transition' : '0s'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+winscroll/1.2+'%)',
		'transition' : '0s'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+winscroll*1.2+'%)',
		'transition' : '0s'
	});

	//portofolio muncul
	
	if (winscroll > $('.portofolio').offset().top - 400) {
		$('.portofolio .box').each(function(i) {
			setTimeout(function() {
				$('.portofolio .box').eq(i).addClass('start');
			}, 500 * (i+1));
		});
		
	}

});