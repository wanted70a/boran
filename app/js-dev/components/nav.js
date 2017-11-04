$(window).load(function(){
	var $nav = $('.navigacija');//kesiranje elementa koji se ponavlja
	var $burger = $('.burger').find('i');
	
	
	//smooth scroll
	$('a[href^="#"]').on('click', function(event) {
		//$('a.active').removeClass('active');
		//$(this).addClass('active');
		var target = $(this.getAttribute('href'));
		
		if( target.length ) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top -70
			}, 680);
		}
		
		//SLIDE UP NAVIGACIJE  KAD KLIKNEMO NA MOBILE LINK
		if($( window ).width() < 1024){
			
			$nav.slideUp(300);
		}
	});
	
	//hamburger nav
	$burger.click(function(){
		$burger.toggleClass('fa-bars').toggleClass('fa-times');
		$nav.toggleClass('drop-down-active');
	});
});
