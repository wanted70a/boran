$(window).load(function(){
	var $nav = $('.navigacija');//kesiranje elementa koji se ponavlja
	var $burger = $('.burger').find('i');
	var $offset = $('nav').outerHeight();
	//caching nav height for scroll top offset

	//smooth scroll
	$('a[href^="#"]').on('click', function(event) {
		//$('a.active').removeClass('active');
		//$(this).addClass('active');
		var target = $(this.getAttribute('href'));

		if( target.length ) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top - $offset
			}, 680);
		}

		//SLIDE UP NAVIGACIJE  KAD KLIKNEMO NA MOBILE LINK
		if($( window ).width() < 1024){
			$burger.toggleClass('fa-bars').toggleClass('fa-times');
			$nav.toggleClass('drop-down-active');
		}
	});

	//hamburger nav
	$burger.click(function(){
		$burger.toggleClass('fa-bars').toggleClass('fa-times');
		$nav.toggleClass('drop-down-active');
	});
});
