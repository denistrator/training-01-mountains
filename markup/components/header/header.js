$(function(){
	$(".header-nav-toggler").on('click', function(){
		$(this).toggleClass("active");
		$(".header-overlay").toggleClass("menu-open");
		$(".header-nav").toggleClass("open");
	});
	
	$('a[href ^= "#"]').click(function () {
		$(".navigation__elem").removeClass('navigation__elem_active');
		$(this).parent().addClass('navigation__elem_active');
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html,body').animate( { scrollTop: destination }, 1000 );
		return false;
	});
})