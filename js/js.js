$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1,
				dotsEach:true
			},
			
			1000:{
				items:1
			}
		}
	})
});

$(document).ready(function() {
	$("#lightSlider").lightSlider({
		
		item: 1,
		loop:true,
		slideMargin: 0,
		thumbItem: 9

	}); 
});

$(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() != 0) {
			$('#bttop').fadeIn();
		} else {
			$('#bttop').fadeOut();
		}
	});
	$('#bttop').click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
	});
});

document.addEventListener("DOMContentLoaded", function() {
	var mmenu=document.querySelector('.menu-toggle');
	var m_mobie=document.querySelector('.m_mobie');
	var den=document.querySelector('.den');

	mmenu.onclick=function(){
		den.classList.toggle('overlay');
		m_mobie.classList.toggle('active');
		mmenu.classList.toggle('dichphai');
	}
	den.onclick=function(){
		den.classList.remove('overlay');
		m_mobie.classList.remove('active');
		mmenu.classList.remove('dichphai');
	}

},false)