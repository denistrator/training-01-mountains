$(function(){
	var mySwiper = new Swiper ('.swiper-container', {
		scrollbar: ".offerCard-scrollbar",
		scrollbarHide: false,
		scrollbarDraggable: true,
		slidesPerView: 5,
		breakpoints: {
			480: {
				slidesPerView: 1
			},
			680: {
				slidesPerView: 2
			},
			860:{
				slidesPerView: 3
			},
			1170: {
				slidesPerView: 4
			}
		}
    })  
})