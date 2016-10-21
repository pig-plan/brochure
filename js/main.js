;(function () {

	'use strict';

	// iPad and iPod detection
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) ||
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	// OffCanvass
	var offCanvass = function() {
		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			var $this = $(this);

			$('#fh5co-offcanvass').toggleClass('fh5co-awake');
			$('#fh5co-page, #fh5co-menu').toggleClass('fh5co-sleep');




			if ( $('#fh5co-offcanvass').hasClass('fh5co-awake') ) {
				$this.addClass('active');
			} else {
				$this.removeClass('active');
			}
			event.preventDefault();

		});
	};

	// Single Page Nav
	var clickMenu = function() {
		$('a:not([class="external"])').click(function(){
			var section = $(this).data('nav-section')
		    $('html, body').animate({
		        scrollTop: $('[data-section="' + section + '"]').offset().top
		    }, 500);
		    return false;
		});
	};

	// Owl Carousel
	var carouselTestimony = function() {

		var owl = $(".owl-carousel");

		owl.owlCarousel({
			items: 1,
		    margin: 0,
		    responsiveClass: true,
		    loop: true,
		    nav: true,
		    dots: true,
		    autoplay: true,
		    smartSpeed: 500,
			responsive:{
				0:{
					nav:false
				},
				480: {
					nav:false
				},
				768:{
					nav:false
				},
				1000:{
					nav:true,
				}
			},
		    navText: [
		      "<i class='icon-arrow-left owl-direction'></i>",
		      "<i class='icon-arrow-right owl-direction'></i>"
	     	]
		});
	};


	var footerFixed = function() {
		var fh = $('#fh5co-footer').innerHeight();
		$('#fh5co-wrap').css({
			marginBottom : fh + 'px'
		});

		if ( $(window).width() < 991 ) {
			$('#fh5co-wrap').css({
				marginBottom: ''
			})
		}

		$(window).resize(function(){

			var fh = $('#fh5co-footer').innerHeight();
			$('#fh5co-wrap').css({
				marginBottom : fh + 'px'
			});

			if ( $(window).width() < 991 ) {
				$('#fh5co-wrap').css({
					marginBottom: ''
				})
			}
		});
	};

	// Counter
	var counter = function() {
		$('.js-counter').countTo({
			formatter: function (value, options) {
		      	return value.toFixed(options.decimals);
		    },
		});
	};

	//  Faqs Accordion
	var faqsAccordion = function() {

		var faqAcc = $('.faq-accordion h3');

		// Click
		faqAcc.on('click', function(event){
			var $this = $(this);

			$('.faq-accordion').removeClass('active');
			$('.faq-accordion').find('.faq-body').slideUp(400, 'easeInOutExpo');

			if ( !$this.closest('.faq-accordion').find('.faq-body').is(':visible')) {
				$this.closest('.faq-accordion').addClass('active');
				$this.closest('.faq-accordion').find('.faq-body').slideDown(400, 'easeInOutExpo');
			} else {
				$this.closest('.faq-accordion').removeClass('active');
				$this.closest('.faq-accordion').find('.faq-body').slideUp(400, 'easeInOutExpo');
			}


			setTimeout(function(){
				// alert($this.closest('.faq-accordion.active').innerHeight());
				$('html, body').animate({
			        scrollTop: $this.closest('.faq-accordion.active').offset().top - 90
			    }, 500);
			}, 700);


			event.preventDefault();
			return false;

		});

	};

	// Click outside of offcanvass
	var mobileMenuOutsideClick = function() {
		$(document).click(function (e) {
	    var container = $("#fh5co-offcanvass, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	    	if ( $('#fh5co-offcanvass').hasClass('fh5co-awake') ) {
	    		$('#fh5co-offcanvass').removeClass('fh5co-awake');
	    		$('#fh5co-page, #fh5co-menu').removeClass('fh5co-sleep');

	    		$('.js-fh5co-nav-toggle').removeClass('active');
	    	}
	    }
		});

		$(window).scroll(function(){
			var $menu = $('#fh5co-menu');
			if ( $(window).scrollTop() > 150 ) {
				$menu.addClass('sleep');
			}

			if ( $(window).scrollTop() < 500 ) {
				$menu.removeClass('sleep');
				$('#fh5co-offcanvass ul li').removeClass('active');
				$('#fh5co-offcanvass ul li').first().addClass('active');
			}


			if ( $(window).scrollTop() > 500 ) {
				if ( $('#fh5co-offcanvass').hasClass('fh5co-awake') ) {
		    		$('#fh5co-offcanvass').removeClass('fh5co-awake');
		    		$('#fh5co-page, #fh5co-menu').removeClass('fh5co-sleep');

		    		$('.js-fh5co-nav-toggle').removeClass('active');
		    	}
	    	}
		});
	};

	// Magnific Popup

	var magnifPopup = function() {
		$('#popup-feature-1').magnificPopup({
			items: [
				{
					src: 'images/samples/ch4_bluewater1.jpg',
					title: '설명하는 부분1'
				},
				{
					src: 'images/samples/ch4_caution.jpg',
					title: '설명하는 부분2',
				},
				{
					src: 'images/samples/ch4_church.jpg',
					title: '설명하는 부분3',
				}
			],
			type: 'image',
			gallery:{
				enabled:true
			}
		});
		$('#popup-feature-2').magnificPopup({
			items: [
				{
					src: '//player.vimeo.com/video/188103849',
					type: 'iframe'
				}
			],
			type: 'image',
			gallery:{
				enabled:true
			}
		});
		$('#popup-feature-3').magnificPopup({
			items: [
				{
					src: 'images/samples/ch4_bluewater1.jpg',
					title: '설명하는 부분1',
				},
				{
					src: 'images/samples/ch4_caution.jpg',
					title: '설명하는 부분2',
				},
				{
					src: '//player.vimeo.com/video/188103849',
					type: 'iframe'
				}
			],
			type: 'image',
			gallery:{
				enabled:true
			}
		});
		$('#popup-feature-4').magnificPopup({
			items: [
				{
					src: 'images/samples/ch4_bluewater1.jpg',
					title: '설명하는 부분1',
				},
				{
					src: 'images/samples/ch4_caution.jpg',
					title: '설명하는 부분2',
				},
				{
					src: 'images/samples/ch4_church.jpg',
					title: '설명하는 부분3',
				}
			],
			type: 'image',
			gallery:{
				enabled:true
			}
		});
		$('#popup-gallery-1').magnificPopup({
			items: [
				{
					src: 'images/samples/ch4_bluewater1.jpg',
					title: '설명하는 부분1',
				},
				{
					src: 'images/samples/ch4_caution.jpg',
					title: '설명하는 부분2',
				},
				{
					src: 'images/samples/ch4_church.jpg',
					title: '설명하는 부분3',
				}
			],
			type: 'image',
			gallery:{
				enabled:true
			}
		});
		$('#popup-gallery-2').magnificPopup({
			items: [
				{
					src: 'images/samples/ch4_bluewater1.jpg',
					title: '설명하는 부분1',
				},
				{
					src: 'images/samples/ch4_caution.jpg',
					title: '설명하는 부분2',
				},
				{
					src: 'images/samples/ch4_church.jpg',
					title: '설명하는 부분3',
				}
			],
			type: 'image',
			gallery:{
				enabled:true
			}
		});
		$('#popup-gallery-3').magnificPopup({
			items: [
				{
					src: 'images/samples/ch4_bluewater1.jpg',
					title: '설명하는 부분1',
				},
				{
					src: 'images/samples/ch4_caution.jpg',
					title: '설명하는 부분2',
				},
				{
					src: 'images/samples/ch4_church.jpg',
					title: '설명하는 부분3',
				}
			],
			type: 'image',
			gallery:{
				enabled:true
			}
		});
		$('#popup-gallery-4').magnificPopup({
			items: [
				{
					src: 'images/samples/ch4_bluewater1.jpg',
					title: '설명하는 부분1',
				},
				{
					src: 'images/samples/ch4_caution.jpg',
					title: '설명하는 부분2',
				},
				{
					src: 'images/samples/ch4_church.jpg',
					title: '설명하는 부분3',
				}
			],
			type: 'image',
			gallery:{
				enabled:true
			}
		});
		$('#popup-gallery-5').magnificPopup({
			items: [
				{
					src: 'images/samples/ch4_bluewater1.jpg',
					title: '설명하는 부분1',
				},
				{
					src: 'images/samples/ch4_caution.jpg',
					title: '설명하는 부분2',
				},
				{
					src: 'images/samples/ch4_church.jpg',
					title: '설명하는 부분3',
				}
			],
			type: 'image',
			gallery:{
				enabled:true
			}
		});
		$('#popup-gallery-6').magnificPopup({
			items: [
				{
					src: 'images/samples/ch4_bluewater1.jpg',
					title: '설명하는 부분1',
				},
				{
					src: 'images/samples/ch4_caution.jpg',
					title: '설명하는 부분2',
				},
				{
					src: 'images/samples/ch4_church.jpg',
					title: '설명하는 부분3',
				}
			],
			type: 'image',
			gallery:{
				enabled:true
			}
		});
		$('#popup-gallery-7').magnificPopup({
			items: [
				{
					src: 'images/samples/ch4_bluewater1.jpg',
					title: '설명하는 부분1',
				},
				{
					src: 'images/samples/ch4_caution.jpg',
					title: '설명하는 부분2',
				},
				{
					src: 'images/samples/ch4_church.jpg',
					title: '설명하는 부분3',
				}
			],
			type: 'image',
			gallery:{
				enabled:true
			}
		});
		$('#popup-gallery-8').magnificPopup({
			items: [
				{
					src: 'images/samples/ch4_bluewater1.jpg',
					title: '설명하는 부분1',
				},
				{
					src: 'images/samples/ch4_caution.jpg',
					title: '설명하는 부분2',
				},
				{
					src: 'images/samples/ch4_church.jpg',
					title: '설명하는 부분3',
				}
			],
			type: 'image',
			gallery:{
				enabled:true
			}
		});
		$('#price-popup-1').magnificPopup({
			items: {
				src: '<div class="white-popup">가격 옵션 1에 대한 설명</div>',
				type: 'inline'
			}
		});
		$('#price-popup-2').magnificPopup({
			items: {
				src: '<div class="white-popup">가격 옵션 2에 대한 설명</div>',
				type: 'inline'
			}
		});
		$('#price-popup-3').magnificPopup({
			items: {
				src: '<div class="white-popup">가격 옵션 3에 대한 설명</div>',
				type: 'inline'
			}
		});
		$('#price-popup-4').magnificPopup({
			items: {
				src: '<div class="white-popup">가격 옵션 4에 대한 설명</div>',
				type: 'inline'
			}
		});

	};


	// Scroll Animations

	// Intro Animate
	var introWayPoint = function() {
		if ( $('#fh5co-hero').length > 0 ) {
			$('#fh5co-hero').waypoint( function( direction ) {

				if( direction === 'down' && !$(this).hasClass('animated') ) {

					setTimeout(function(){
						$('.intro-animate-1').addClass('fadeInUp animated');
					}, 100);
					setTimeout(function(){
						$('.intro-animate-2').addClass('fadeInUp animated');
					}, 400);
					setTimeout(function(){
						$('.intro-animate-3').addClass('fadeInUp animated');
						$('.intro-animate-4').addClass('fadeInUp animated');
					}, 700);

					$(this.element).addClass('animated');

				}
			} , { offset: '75%' } );
		}
	};

	var HeaderToggle = function() {

		var $this = $( '#fh5co-main' );


		$this.waypoint(function(direction) {

			if( direction === 'down' ) {
				$('body').addClass('scrolled');
			}
			else if( direction === 'up' ){
				$('body').removeClass('scrolled');
			}

		}, { offset: '-1px' } );

	};


	// Client Animate
	var clientAnimate = function() {
		if ( $('#fh5co-clients').length > 0 ) {
			$('#fh5co-clients .to-animate').each(function( k ) {

				var el = $(this);

				setTimeout ( function () {
					el.addClass('fadeIn animated');
				},  k * 200, 'easeInOutExpo' );

			});
		}
	};
	var clientWayPoint = function() {
		if ( $('#fh5co-clients').length > 0 ) {
			$('#fh5co-clients').waypoint( function( direction ) {

				if( direction === 'down' && !$(this).hasClass('animated') ) {


					setTimeout(clientAnimate, 100);


					$(this.element).addClass('animated');

				}
			} , { offset: '75%' } );
		}
	};

	// Features Animate
	var featuresAnimate = function() {
		if ( $('#fh5co-features').length > 0 ) {
			$('#fh5co-features .to-animate').each(function( k ) {

				var el = $(this);

				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );

			});
		}
	};
	var featuresWayPoint = function() {
		if ( $('#fh5co-features').length > 0 ) {
			$('#fh5co-features').waypoint( function( direction ) {

				if( direction === 'down' && !$(this).hasClass('animated') ) {


					setTimeout(featuresAnimate, 100);


					$(this.element).addClass('animated');

				}
			} , { offset: '75%' } );
		}
	};


	// Features 2 Animate
	var features2AnimateTitle = function() {
		if ( $('#fh5co-features-2').length > 0 ) {
			$('#fh5co-features-2 .to-animate').each(function( k ) {

				var el = $(this);

				setTimeout ( function () {
					el.addClass('fadeIn animated');
				},  k * 200, 'easeInOutExpo' );

			});
		}
	};
	var features2WayPoint = function() {
		if ( $('#fh5co-features-2').length > 0 ) {
			$('#fh5co-features-2').waypoint( function( direction ) {

				if( direction === 'down' && !$(this).hasClass('animated') ) {


					setTimeout(features2AnimateTitle, 100);

					setTimeout(function(){
						$('.features-2-animate-2').addClass('fadeInUp animated');
					}, 800);

					setTimeout(function(){
						$('.features-2-animate-3').addClass('fadeInRight animated');
						$('.features-2-animate-5').addClass('fadeInLeft animated');
					}, 1200);
					setTimeout(function(){
						$('.features-2-animate-4').addClass('fadeInRight animated');
						$('.features-2-animate-6').addClass('fadeInLeft animated');
					}, 1400);


					$(this.element).addClass('animated');

				}
			} , { offset: '75%' } );
		}
	};

	var features22AnimateTitle = function() {
		if ( $('#fh5co-features-22').length > 0 ) {
			$('#fh5co-features-22 .to-animate').each(function( k ) {

				var el = $(this);

				setTimeout ( function () {
					el.addClass('fadeIn animated');
				},  k * 200, 'easeInOutExpo' );

			});
		}
	};
	var features22WayPoint = function() {
		if ( $('#fh5co-features-22').length > 0 ) {
			$('#fh5co-features-22').waypoint( function( direction ) {

				if( direction === 'down' && !$(this).hasClass('animated') ) {


					setTimeout(features22AnimateTitle, 100);

					setTimeout(function(){
						$('.features-2-animate-22').addClass('fadeInUp animated');
					}, 800);

					setTimeout(function(){
						$('.features-2-animate-33').addClass('fadeInRight animated');
						$('.features-2-animate-55').addClass('fadeInLeft animated');
					}, 1200);
					setTimeout(function(){
						$('.features-2-animate-44').addClass('fadeInRight animated');
						$('.features-2-animate-66').addClass('fadeInLeft animated');
					}, 1400);


					$(this.element).addClass('animated');

				}
			} , { offset: '75%' } );
		}
	};

	var counterWayPoint = function() {
		if ( $('#fh5co-counter').length > 0 ) {
			$('#fh5co-counter').waypoint( function( direction ) {

				if( direction === 'down' && !$(this).hasClass('animated') ) {

					setTimeout(function(){
						$('.counter-animate').addClass('fadeInUp animated');
						counter();
					}, 100);


					$(this.element).addClass('animated');

				}
			} , { offset: '75%' } );
		}
	};


	// Products Animate
	var productsAnimate = function() {
		if ( $('#fh5co-products').length > 0 ) {
			$('#fh5co-products .to-animate').each(function( k ) {

				var el = $(this);

				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );

			});
		}
	};
	var productsWayPoint = function() {
		if ( $('#fh5co-products').length > 0 ) {
			$('#fh5co-products').waypoint( function( direction ) {

				if( direction === 'down' && !$(this).hasClass('animated') ) {




					setTimeout(function(){
						$('.product-animate-1').addClass('fadeIn animated');
					}, 200);

					setTimeout(function(){
						$('.product-animate-2').addClass('fadeIn animated');
					}, 400);

					setTimeout(productsAnimate, 800);


					$(this.element).addClass('animated');

				}
			} , { offset: '75%' } );
		}
	};

	// Call To Actions Animate
	var ctaAnimate = function() {
		if ( $('#fh5co-cta').length > 0 ) {
			$('#fh5co-cta .to-animate').each(function( k ) {

				var el = $(this);

				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );

			});
		}
	};
	var ctaWayPoint = function() {
		if ( $('#fh5co-cta').length > 0 ) {
			$('#fh5co-cta').waypoint( function( direction ) {

				if( direction === 'down' && !$(this).hasClass('animated') ) {



					setTimeout(ctaAnimate, 100);


					$(this.element).addClass('animated');

				}
			} , { offset: '75%' } );
		}
	};


	// Pricing Animate
	var pricingAnimate = function() {
		if ( $('#fh5co-pricing').length > 0 ) {
			$('#fh5co-pricing .to-animate').each(function( k ) {

				var el = $(this);

				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );

			});
		}
	};
	var pricingWayPoint = function() {
		if ( $('#fh5co-pricing').length > 0 ) {
			$('#fh5co-pricing').waypoint( function( direction ) {

				if( direction === 'down' && !$(this).hasClass('animated') ) {


					setTimeout(function(){
						$('.pricing-animate-1').addClass('fadeInUp animated');
					}, 100);
					setTimeout(function(){
						$('.pricing-animate-2').addClass('fadeInUp animated');
					}, 400);

					setTimeout(pricingAnimate, 800);


					$(this.element).addClass('animated');

				}
			} , { offset: '75%' } );
		}
	};



	// Features 3 Animate
	var features3Animate = function() {
		if ( $('#fh5co-features-3').length > 0 ) {
			$('#fh5co-features-3 .to-animate').each(function( k ) {

				var el = $(this);

				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );

			});
		}
	};
	var features3WayPoint = function() {
		if ( $('#fh5co-features-3').length > 0 ) {
			$('#fh5co-features-3').waypoint( function( direction ) {

				if( direction === 'down' && !$(this).hasClass('animated') ) {




					setTimeout(function(){
						$('.features3-animate-1').addClass('fadeIn animated');
					}, 200);

					setTimeout(function(){
						$('.features3-animate-2').addClass('fadeIn animated');
					}, 400);

					setTimeout(features3Animate, 800);


					$(this.element).addClass('animated');

				}
			} , { offset: '75%' } );
		}
	};

	// Features 3 Animate
	var faqsAnimate = function() {
		if ( $('#fh5co-faqs').length > 0 ) {
			$('#fh5co-faqs .to-animate').each(function( k ) {

				var el = $(this);

				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );

			});
		}
	};
	var faqsWayPoint = function() {
		if ( $('#fh5co-faqs').length > 0 ) {
			$('#fh5co-faqs').waypoint( function( direction ) {

				if( direction === 'down' && !$(this).hasClass('animated') ) {




					setTimeout(function(){
						$('.faqs-animate-1').addClass('fadeIn animated');
					}, 200);

					setTimeout(function(){
						$('.faqs-animate-2').addClass('fadeIn animated');
					}, 400);

					setTimeout(faqsAnimate, 800);


					$(this.element).addClass('animated');

				}
			} , { offset: '75%' } );
		}
	};

	// animate-box
	var contentWayPoint = function() {

		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this).hasClass('animated') ) {

				$(this.element).addClass('fadeInUp animated');

			}

		} , { offset: '75%' } );

	};


	// Reflect scrolling in navigation
	var navActive = function(section) {
		var el = $('#fh5co-offcanvass > ul');
		el.find('li').removeClass('active');
		el.each(function(){
			$(this).find('a[data-nav-section="'+section+'"]').closest('li').addClass('active');
		});
	};
	var navigationSection = function() {

		var $section = $('div[data-section]');

		$section.waypoint(function(direction) {
		  	if (direction === 'down') {
		    	navActive($(this.element).data('section'));

		  	}
		}, {
		  	offset: '150px'
		});

		$section.waypoint(function(direction) {
		  	if (direction === 'up') {
		    	navActive($(this.element).data('section'));
		  	}
		}, {
		  	offset: function() { return -$(this.element).height() + 155; }
		});

	};






	// Document on load.
	$(function(){

		magnifPopup();
		offCanvass();
		mobileMenuOutsideClick();
		footerFixed();
		faqsAccordion();
		carouselTestimony();
		clickMenu();
		HeaderToggle();

		// Animations
		introWayPoint();
		clientWayPoint();
		featuresWayPoint();
		features2WayPoint();
		features22WayPoint();
		features3WayPoint();
		counterWayPoint();
		productsWayPoint();
		ctaWayPoint();
		pricingWayPoint();
		faqsWayPoint();
		contentWayPoint();

		navigationSection();

	});


}());
