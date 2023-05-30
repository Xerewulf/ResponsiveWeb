$(document).ready(function() {
	var randomStart = Math.floor(Math.random() * ($('#slider li').length)); 
	$("#slider").bxSlider({
	  startSlide: randomStart,
	  auto: true,
	  minSlides: 1,
	  maxSlides: 1,
	  slideWidth: 400,
	  slideMargin: 10,
	  moveSlides: 1,
	  pause: 3000,
	  pager: true,
	  pagerType: 'short',
	  pagerCustom: '#pager'
	});
  });