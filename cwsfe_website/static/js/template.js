(function($){
	$(document).ready(function(){

		if ($('.boxed .fullscreen-bg').length>0) {
			$("body").addClass("transparent-page-wrapper");
		};

		//Show dropdown on hover only for desktop devices
		//-----------------------------------------------
		if ((Modernizr.mq('only all and (min-width: 992px)') && !Modernizr.touch)) {
		$('.main-navigation:not(.onclick) .navbar-nav>li.dropdown, .main-navigation:not(.onclick) li.dropdown>ul>li.dropdown').hover(
			function(){
				var $this = $(this);
				$this.addClass('show');
			}, function(){
				$(this).removeClass('show');
			});
		};

		//Show dropdown on click only for mobile devices
		//-----------------------------------------------
		if (Modernizr.mq('only all and (max-width: 991px)') || Modernizr.touch || $(".main-navigation.onclick").length>0 ) {
			$('.header [data-toggle=dropdown], .header-top [data-toggle=dropdown]').on('click', function(event) {
			// Avoid following the href location when clicking
			event.preventDefault();
			// Avoid having the menu to close when clicking
			event.stopPropagation();
			// close all the siblings
			$(this).parent().siblings().removeClass('show');
			// close all the submenus of siblings
			$(this).parent().siblings().find('[data-toggle=dropdown]').parent().removeClass('show');
			// opening the one you clicked on
			$(this).parent().toggleClass('show');
			});
		};

		//Transparent Header Calculations
		var timer_tr;
		if ($(".transparent-header").length>0) {
			var trHeaderHeight;
			$(window).on('load', function (e) {
				trHeaderHeight = $("header.header").outerHeight();
				$(".transparent-header .tp-bannertimer").css("marginTop", (trHeaderHeight)+"px");
			});
			var headerTopHeightResize = $(".header-top").outerHeight();
			$(window).resize(function() {
				if ($(this).scrollTop()  < headerTopHeightResize + trHeaderHeight -5) {
					trHeaderHeight = $("header.header").outerHeight();
					$(".transparent-header .tp-bannertimer").css("marginTop", (trHeaderHeight)+"px");
				}
			});
			$(window).scroll(function() {
				if ($(this).scrollTop() == 0 ) {
					if(timer_tr) {
						window.clearTimeout(timer_tr);
					};
					timer_tr = window.setTimeout(function() {
						trHeaderHeight = $("header.header").outerHeight();
						$(".transparent-header .tp-bannertimer").css("marginTop", (trHeaderHeight)+"px");
					}, 300);
				};
			});
		}

		if ($(".transparent-header .slideshow").length>0) {
			$(".header-container header.header").addClass("transparent-header-on");
		} else {
			$(".header-container header.header").removeClass("transparent-header-on");
		}

		//Full Width Slider with Transparent Header Calculations
		if ($(".transparent-header .slider-banner-fullwidth-big-height").length>0) {
			if (Modernizr.mq('only all and (max-width: 991px)')) {
				$("body").removeClass("transparent-header");
				$(".header-container header.header").removeClass("transparent-header-on");
				$(".tp-bannertimer").css("marginTop", "0px");
				$("body").addClass("slider-banner-fullwidth-big-height-removed");
			} else {
				$("body").addClass("transparent-header");
				$(".header-container header.header").addClass("transparent-header-on");
				$("body").removeClass("slider-banner-fullwidth-big-height-removed");
			}
		};

		if ($(".transparent-header .slider-banner-fullwidth-big-height").length>0 || $(".slider-banner-fullwidth-big-height-removed").length>0) {
			$(window).resize(function() {
				if (Modernizr.mq('only all and (max-width: 991px)')) {
					$("body").removeClass("transparent-header");
					$(".header-container header.header").removeClass("transparent-header-on");
					$(".tp-bannertimer").css("marginTop", "0px");
				} else {
					$("body").addClass("transparent-header");
					$(".header-container header.header").addClass("transparent-header-on");
				}
			});
		};

		//Full Page
		if ($(".fullpage-site").length>0) {
			$('.fullpage-site').fullpage({
				anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage'],
				navigation: true,
				navigationPosition: 'right',
				navigationTooltips: ['Intro', 'About', 'Portfolio', 'Clients', 'Contact Us'],
				fixedElements: '.header-container, .subfooter',
				responsiveWidth: 992,
				responsiveHeight: 600
			});
		}
		if ($(".fullpage-site-with-menu").length>0) {
			$('.fullpage-site-with-menu').fullpage({
				anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage'],
				navigation: true,
				navigationPosition: 'right',
				navigationTooltips: ['Intro', 'About', 'Menu', 'Reviews', 'Contact Us'],
				fixedElements: '.header-container, .subfooter',
				responsiveWidth: 992,
				responsiveHeight: 600,
				menu: '#fullpage-menu',
			});
		};

		//Owl carousel
		//-----------------------------------------------
		if ($('.owl-carousel').length>0) {
			$("*[dir='ltr'] .owl-carousel.carousel").owlCarousel({
				items:1,
				dots: false,
				nav: true,
				loop: true,
				navText: false,
				responsive:{
					479:{
						items:2
					},
					768:{
						items:2
					},
					992:{
						items:4
					},
					1200:{
						items:4
					}
				}
			});
			$("*[dir='rtl'] .owl-carousel.carousel").owlCarousel({
				items:1,
				rtl: true,
				dots: false,
				nav: true,
				loop: true,
				navText: false,
				responsive:{
					479:{
						items:2
					},
					768:{
						items:2
					},
					992:{
						items:4
					},
					1200:{
						items:4
					}
				}
			});
			$("*[dir='ltr'] .owl-carousel.carousel-autoplay").owlCarousel({
				items:1,
				autoplay: true,
				autoplayTimeout: 9000,
				autoplaySpeed: 700,
				loop: true,
				dots: false,
				nav: true,
				navText: false,
				responsive:{
					479:{
						items:2
					},
					768:{
						items:2
					},
					992:{
						items:4
					},
					1200:{
						items:4
					}
				}
			});
			$("*[dir='rtl'] .owl-carousel.carousel-autoplay").owlCarousel({
				items:1,
				rtl: true,
				autoplay: true,
				autoplayTimeout: 9000,
				autoplaySpeed: 700,
				loop: true,
				dots: false,
				nav: true,
				navText: false,
				responsive:{
					479:{
						items:2
					},
					768:{
						items:2
					},
					992:{
						items:4
					},
					1200:{
						items:4
					}
				}
			});
			$("*[dir='ltr'] .owl-carousel.clients").owlCarousel({
				items:2,
				autoplay: true,
				autoplayTimeout: 9000,
				autoplaySpeed: 700,
				loop: true,
				dots: false,
				responsive:{
					479:{
						items:3
					},
					768:{
						items:4
					},
					992:{
						items:4
					},
					1200:{
						items:6
					}
				}
			});
			$("*[dir='rtl'] .owl-carousel.clients").owlCarousel({
				items:2,
				rtl: true,
				autoplay: true,
				autoplayTimeout: 9000,
				autoplaySpeed: 700,
				loop: true,
				dots: false,
				responsive:{
					479:{
						items:3
					},
					768:{
						items:4
					},
					992:{
						items:4
					},
					1200:{
						items:6
					}
				}
			});
			$("*[dir='ltr'] .owl-carousel.content-slider").owlCarousel({
				items: 1,
				autoplay: true,
				autoplayTimeout: 9000,
				autoplaySpeed: 700,
				loop: true,
				nav: false,
				navText: false,
				dots: false
			});
			$("*[dir='rtl'] .owl-carousel.content-slider").owlCarousel({
				items: 1,
				rtl: true,
				autoplay: true,
				autoplayTimeout: 9000,
				autoplaySpeed: 700,
				loop: true,
				nav: false,
				navText: false,
				dots: false
			});
			$("*[dir='ltr'] .owl-carousel.content-slider-with-controls").owlCarousel({
				items: 1,
				loop: true,
				autoplay: false,
				nav: true,
				dots: true
			});
			$("*[dir='rtl'] .owl-carousel.content-slider-with-controls").owlCarousel({
				items: 1,
				loop: true,
				rtl: true,
				autoplay: false,
				nav: true,
				dots: true
			});
			$("*[dir='ltr'] .owl-carousel.content-slider-with-large-controls").owlCarousel({
				items: 1,
				loop: true,
				autoplay: false,
				nav: true,
				dots: true
			});
			$("*[dir='rtl'] .owl-carousel.content-slider-with-large-controls").owlCarousel({
				items: 1,
				loop: true,
				rtl: true,
				autoplay: false,
				nav: true,
				dots: true
			});
			$("*[dir='ltr'] .owl-carousel.content-slider-with-controls-autoplay").owlCarousel({
				items: 1,
				autoplay: true,
				autoplayTimeout: 9000,
				autoplaySpeed: 700,
				loop: true,
				nav: true,
				dots: true
			});
			$("*[dir='rtl'] .owl-carousel.content-slider-with-controls-autoplay").owlCarousel({
				items: 1,
				autoplay: true,
				rtl: true,
				autoplayTimeout: 9000,
				autoplaySpeed: 700,
				loop: true,
				nav: true,
				dots: true
			});
			$("*[dir='ltr'] .owl-carousel.content-slider-with-large-controls-autoplay").owlCarousel({
				items: 1,
				autoplay: true,
				autoplayTimeout: 9000,
				autoplaySpeed: 700,
				loop: true,
				nav: true,
				dots: true
			});
			$("*[dir='rtl'] .owl-carousel.content-slider-with-large-controls-autoplay").owlCarousel({
				items: 1,
				autoplay: true,
				rtl: true,
				autoplayTimeout: 9000,
				autoplaySpeed: 700,
				loop: true,
				nav: true,
				dots: true
			});
			$("*[dir='ltr'] .owl-carousel.content-slider-with-controls-autoplay-hover-stop").owlCarousel({
				items: 1,
				autoplay: true,
				autoplayTimeout: 9000,
				autoplaySpeed: 700,
				loop: true,
				nav: true,
				dots: true,
				autoplayHoverPause: true
			});
			$("*[dir='rtl'] .owl-carousel.content-slider-with-controls-autoplay-hover-stop").owlCarousel({
				items: 1,
				autoplay: true,
				rtl: true,
				autoplayTimeout: 9000,
				autoplaySpeed: 700,
				loop: true,
				nav: true,
				dots: true,
				autoplayHoverPause: true
			});

			var sync1 = $(".owl-carousel.content-slider-with-thumbs");
			var sync2 = $(".owl-carousel.content-slider-thumbs");
			var slidesPerPage = 4; //globaly define number of elements per page
			var syncedSecondary = true;

			if ($("*[dir='ltr']").length>0) {
				sync1.owlCarousel({
					items : 1,
					slideSpeed : 700,
					nav: true,
					autoplay: false,
					dots: false,
					loop: true,
					responsiveRefreshRate : 200
				}).on('changed.owl.carousel', syncPosition);

				sync2.on('initialized.owl.carousel', function () {
					sync2.find(".owl-item").eq(0).addClass("current");
				}).owlCarousel({
					items : slidesPerPage,
					dots: false,
					nav: false,
					smartSpeed: 200,
					slideSpeed : 500,
					slideBy: slidesPerPage,
					responsiveRefreshRate : 100
				}).on('changed.owl.carousel', syncPosition2);
			} else {
				sync1.owlCarousel({
					items : 1,
					slideSpeed : 700,
					nav: true,
					autoplay: false,
					rtl: true,
					dots: false,
					loop: true,
					responsiveRefreshRate : 200
				}).on('changed.owl.carousel', syncPosition);

				sync2.on('initialized.owl.carousel', function () {
					sync2.find(".owl-item").eq(0).addClass("current");
				}).owlCarousel({
					items : slidesPerPage,
					dots: false,
					nav: false,
					rtl: true,
					smartSpeed: 200,
					slideSpeed : 500,
					slideBy: slidesPerPage,
					responsiveRefreshRate : 100
				}).on('changed.owl.carousel', syncPosition2);
			}
			function syncPosition(el) {
				//if you set loop to false, you have to restore this next line
				//var current = el.item.index;

				//if you disable loop you have to comment this block
				var count = el.item.count-1;
				var current = Math.round(el.item.index - (el.item.count/2) - .5);

				if(current < 0) {
					current = count;
				}
				if(current > count) {
					current = 0;
				}

				//end block
				sync2.find(".owl-item").removeClass("current").eq(current).addClass("current");
				var onscreen = sync2.find('.owl-item.active').length - 1;
				var start = sync2.find('.owl-item.active').first().index();
				var end = sync2.find('.owl-item.active').last().index();

				if (current > end) {
					sync2.data('owl.carousel').to(current, 100, true);
				}
				if (current < start) {
					sync2.data('owl.carousel').to(current - onscreen, 100, true);
				}
			}

			function syncPosition2(el) {
				if(syncedSecondary) {
					var number = el.item.index;
					sync1.data('owl.carousel').to(number, 100, true);
				}
			}

			sync2.on("click", ".owl-item", function(e){
				e.preventDefault();
				var number = $(this).index();
				sync1.data('owl.carousel').to(number, 300, true);
			});
		};

		// Fixed header
		//-----------------------------------------------
		if (($(".header.fixed.fixed-desktop").length > 0) && Modernizr.mq('only all and (min-width: 992px)') && !Modernizr.touch) {
			var sticky = new Waypoint.Sticky({
				element: $('.header-container .header.fixed'),
				stuckClass: 'object-visible',
				handler: function(direction) {
					$('body').toggleClass('fixed-header-on');
				},
				offset: -1
			});
		};
		if ($(".header.fixed.fixed-all").length > 0) {
			var sticky = new Waypoint.Sticky({
				element: $('.header-container .header.fixed'),
				stuckClass: 'object-visible',
				handler: function(direction) {
					$('body').toggleClass('fixed-header-on');
				},
				offset: -1
			});
		};

		// Animations
		//-----------------------------------------------
		if ($("[data-animation-effect]").length>0) {
			$("[data-animation-effect]").each(function() {
				if(Modernizr.csstransitions) {
					var waypoints = $(this).waypoint(function(direction) {
						var appearDelay = $(this.element).attr("data-effect-delay"),
						animatedObject = $(this.element);
						setTimeout(function() {
							animatedObject.addClass('animated object-visible ' + animatedObject.attr("data-animation-effect"));
						}, appearDelay);
						this.destroy();
					},{
						offset: '95%'
					});
				} else {
					$(this).addClass('object-visible');
				}
			});
		};

		// Text Rotators
		//-----------------------------------------------
		if ($(".text-rotator").length>0) {
			$(".text-rotator").each(function() {
				var tr_animationEffect = $(this).attr("data-rotator-animation-effect");
				$(this).Morphext({
					animation: ""+tr_animationEffect+"", // Overrides default "bounceIn"
					separator: ",", // Overrides default ","
					speed: 3000 // Overrides default 2000
				});
			});
		};

	}); // End document ready

})(this.jQuery);

if (jQuery(".btn-print").length>0) {
	function print_window() {
		var mywindow = window;
		mywindow.document.close();
		mywindow.focus();
		mywindow.print();
		mywindow.close();
	}
}
