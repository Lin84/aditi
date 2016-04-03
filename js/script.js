$(document).ready(function(){
// ***remove default setting automoving of top after click on button   *******************************
	$(".btn").on("click",function(){
		event.preventDefault();
	})

// ***smooth autohiding navbar************************************************************************
	$(function(){
		var scroll=$(document).scrollTop();
		var navbarHeight=$("#navbar").height();
		$(window).scroll(function(){
			var scrolled=$(document).scrollTop();
			if(scrolled>scroll && scroll>navbarHeight){
				$("#navbar").slideUp();
			}
			else{
				$("#navbar").slideDown();
			}
			scroll=$(document).scrollTop();
		})
	})

// ***click on toggle to unveal the navbar************************************************************

	$(".navbar-toggle").on("click",function(){
	/* click on toggle to unveal the navbar*/		
		$(".navbar-collapse").slideToggle(500);
	})


	$(window).resize(function() {
		/* to fix problem with hiding problem navbar-collapse after */
	    if ($(window).width() > 739) {
	        $(".navbar-collapse").show();
	        // console.log($(window).width());			
	    }
	    if ($(window).width() <= 739) {
	        $(".navbar-collapse").hide();
	        // console.log($(window).width());
	    }
	});

// ***click on logo move to top of website************************************************************
	$("#logo").on("click",function(){
		/* click on logo move to home = top of website*/
		$("html,body").stop().animate({scrollTop:0})
	})

// ***slider in "home section" ***********************************************************************
	var mySwiper = new Swiper ('.swiper-home', {
		/* initial slider created by using swiper*/
		// Optional parameters
		direction: 'horizontal',
		loop: true,

		// If we need pagination
		pagination: '.swiper-pagination',

		// Navigation arrows
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',

		// And if we need scrollbar
		// scrollbar: '.swiper-scrollbar',
		 slidesPerView: 'auto',

		 /*auto-play*/
	    autoplay: 5000,
        autoplayDisableOnInteraction: false
	}) 

// ***slider in "products section"********************************************************************
	// var width = $(window).width();	
	var ww = $(window).width()
		var a; /* create variable a to automaticly determinate the amount of column in slider=> "slidesPerView:a" */
		if (ww<745) {a=1;}		
		if (ww>=745) {a=2;}
		if(ww>=1024){a=3;}

	var mySwiper2 = new Swiper ('.swiper-categories', {
		/* initial slider created by using swiper*/
		// Optional parameters
		direction: 'horizontal',
		loop: true,

		// If we need pagination
		// pagination: '.swiper-pagination',

		// Navigation arrows
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',

		// And if we need scrollbar
		// scrollbar: '.swiper-scrollbar',

		 slidesPerView: a,		 

        //  autoplay: 5000,
        // autoplayDisableOnInteraction: false

        // slidesPerView: 2,
         // spaceBetween: 4
	})

	$(window).resize(function(){
		/* if resizing screen will change the amount of column in section categories*/
		var ww = $(window).width()		
		if (ww<745) {mySwiper2.params.slidesPerView = 1;}		
		if (ww>=745) {mySwiper2.params.slidesPerView = 2;}		
		if (ww>=1024) {mySwiper2.params.slidesPerView = 3;}
	})	

// ***click on toggle to unveal the "#summary" featured***********************************************
	$(".summary-toggle").on("click",function(){
	/* click on toggle to unveal the #summary featured*/
	/*$(this) for specific section, refer to button; parent()=return direct parent of button; after that find class .summaryCollapse to slideToggle*/		
		$(this).parent().find(".summaryCollapse").slideToggle();
	})

// ***text:"more" after click will show text:"less" in "summary" section   ***************************
	$(".summary-toggle").on("click",function(){
		$(this).attr("id","hovno");
	    var el = document.getElementById("hovno");
	   if (el.firstChild.data == "more") 
	   {
	       el.firstChild.data = "less";
	   }
	   else 
	   {
	     el.firstChild.data = "more";
	   }
	   $(this).removeAttr("id");
	})

	$(window).resize(function() {
		/* to fix problem with hiding problem summary-collapse after */
	    if ($(window).width() > 565) {
	        $(".summary-collapse").show();
	        // console.log($(window).width());			
	    }
	    if ($(window).width() <= 565) {
	        $(".summary-collapse").hide();
	        // console.log($(window).width());
	    }
	});	

//******************************************************************************************************
})