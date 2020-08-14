

var owl = $('#slider_owl');
owl.owlCarousel({
    items:1,
    loop:true,
	autoplay:true,
    autoplayTimeout:3000,
    nav:true,
    
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})




// owl-carousel for testimonial

var owl = $('#testimonial_active');
owl.owlCarousel({
    items:2,
    loop:true,
	autoplay:true,
    autoplayTimeout:3000,
    nav:false,
    margin:40,
    
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

// owl-carousel for company

var owl = $('#company_car_active');
owl.owlCarousel({
    items:5,
    loop:true,
	autoplay:true,
    autoplayTimeout:3000,
    nav:false,


    
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})








// counter-up


$('.count').counterUp({
    delay: 10,
    time: 1000
});



// isotope

$(".port_menu ul li").click(function(){
	$(".port_menu ul li").removeClass("active");
	$(this).addClass("active");
});


$(".port_menu ul li").click(function(){
	var select = $(this).attr("data-filter");
	$(".iso_active").isotope({
		filter : select,
	});
});



$(".iso_active").isotope();


// Magnific popup


$('.video_test').magnificPopup({
  type: 'iframe',
  iframe: {
  markup: '<div class="mfp-iframe-scaler">'+
            '<div class="mfp-close"></div>'+
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
          '</div>', 

  patterns: {
    youtube: {
      index: 'youtube.com/',

      id: 'v=', 

      src: 'https://www.youtube.com/embed/%id%?autoplay=1' 
    },
    vimeo: {
      index: 'vimeo.com/',
      id: '/',
      src: '//player.vimeo.com/video/%id%?autoplay=1'
    },
    gmaps: {
      index: '//maps.google.',
      src: '%id%&output=embed'
    }

   
  },

  srcAction: 'iframe_src',
}
});




$(window).on('scroll',function(){
  if ($(window).scrollTop()){
    $('.header_section').addClass('fixed');
  }
  else
  {
    $('.header_section').removeClass('fixed');
  }
});