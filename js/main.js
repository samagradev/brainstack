(function ($) {
 "use strict";

/*--------------------------
preloader
---------------------------- */	
	
	$(window).on('load',function(){
		var pre_loader = $('#preloader')
	pre_loader.fadeOut('slow',function(){$(this).remove();});
	});	
    
/*---------------------
  venobox
--------------------- */
	var veno_box = $('.venobox');
	veno_box.venobox();
	
/*------------------------------------
 search option
------------------------------------- */ 
	
    $('.search-option').hide();
    $(".main-search").on('click', function(){
        $('.search-option').animate({
            height:'toggle',
        });
    });
	
/*---------------------
 TOP Menu Stick
--------------------- */
	
var windows = $(window);
var sticky = $('#sticker');

windows.on('scroll', function() {
    var scroll = windows.scrollTop();
    if (scroll < 300) {
        sticky.removeClass('stick');
    }else{
        sticky.addClass('stick');
    }
});
	
/*----------------------------
 jQuery MeanMenu
------------------------------ */
	
    var mean_menu = $('nav#dropdown');
    mean_menu.meanmenu();
    
/*---------------------
 wow .js
--------------------- */
    function wowAnimation(){
        new WOW({
            offset: 100,          
            mobile: true
        }).init()
    }
    wowAnimation()	
    
/*--------------------------
 scrollUp
---------------------------- */
	
	$.scrollUp({
		scrollText: '<i class="fa fa-angle-up"></i>',
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'fade'
	});

    
/*----------------------------
 Counter js active
------------------------------ */
	
    var count = $('.counter');
    count.counterUp({
		delay: 40,
		time: 3000
	});
	
/*--------------------------
 collapse
---------------------------- */
	
	var panel_test = $('.panel-heading a');
	panel_test.on('click', function(){
		panel_test.removeClass('active');
		$(this).addClass('active');
	});

/*--------------------------
 MagnificPopup
---------------------------- */	
	
    $('.video-play').magnificPopup({
        type: 'iframe'
    });
    

/*--------------------------
     slider carousel
---------------------------- */
    var intro_carousel = $('.intro-carousel');
    intro_carousel.owlCarousel({
        loop:true,
        nav:true,		
        autoplay:false,
        dots:false,
        navText: ["<i class='ti-angle-left'></i>","<i class='ti-angle-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    }); 
/*--------------------------
     Project carousel
---------------------------- */
	var Project_carousel = $('.project-carousel');
	Project_carousel.owlCarousel({
        loop:true,
        nav:true,		
        autoplay:false,
        dots:false,
        navText: ["<i class='ti-angle-left'></i>","<i class='ti-angle-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            700:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
/*---------------------
 Brand carousel
---------------------*/
	
    var brand = $('.brand-carousel');
    brand.owlCarousel({
		loop:true,
		nav:false,
        margin:50,
		dots:true,
		autoplay:false,
		responsive:{
			0:{
				items:2
			},
			768:{
				items:4
			},
			1000:{
				items:5
			}
		}
	});
    /*---------------------
 Testimonial carousel
---------------------*/
	
    var review = $('.testimonial-carousel');
    review.owlCarousel({
		loop:true,
		nav:false,
        margin:15,
		center:true,
		dots:true,
		autoplay:false,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});
/*--------------------------
     Project Details carousel 
---------------------------- */
    $('.project-carousel-2').owlCarousel({
        loop:true,
        nav:true,		
        autoplay:false,
        dots:false,
		margin:30,
        navText: ["<i class='ti-angle-left'></i>","<i class='ti-angle-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            700:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

/*----------------------------
    Contact form
------------------------------ */
	$("#contactForm").on("submit", function (event) {
		if (event.isDefaultPrevented()) {
			formError();
			submitMSG(false, "Did you fill in the form properly?");
		} else {
			event.preventDefault();
			submitForm();
		}
	});
	function submitForm(){
		var name = $("#name").val();
		var email = $("#email").val();
		var msg_subject = $("#msg_subject").val();
		var message = $("#message").val();


		$.ajax({
			type: "POST",
			url: "assets/contact.php",
			data: "name=" + name + "&email=" + email + "&msg_subject=" + msg_subject + "&message=" + message,
			success : function(text){
				if (text === "success"){
					formSuccess();
				} else {
					formError();
					submitMSG(false,text);
				}
			}
		});
	}

	function formSuccess(){
		$("#contactForm")[0].reset();
		submitMSG(true, "Message Submitted!")
	}

	function formError(){
		$("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$(this).removeClass();
		});
	}

	function submitMSG(valid, msg){
		if(valid){
			var msgClasses = "h3 text-center tada animated text-success";
		} else {
			var msgClasses = "h3 text-center text-danger";
		}
		$("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
	}
    
  /*----------------------------
   Services Tab
	------------------------------ */

	// setTimeout(() => {
	// 	$('#exampleModal').modal()
	// }, 2000)


	const selector = '.left-menu li';
	const current = location.hash;
	
	function scrollToTargetAdjusted(el, offset){
		var element = document.getElementById(el);
		if(!element) return
    var headerOffset = offset;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
			top: offsetPosition,
			behavior: "smooth"
    });
	}

	$('.left-menu li a').each(function(index){
		var $this = $(this);
		const $parent = $this.closest('li')

		if($this.attr('href') === current.replace('%20', ' ')){
			// document.getElementById(current.replace('%20', ' ')).scrollIntoView();
			const offset = 250 + index*25
			scrollToTargetAdjusted(current.replace('%20', " "), offset)
			// $('html, body').animate({
      //   scrollTop: parseInt($("#DevOps-As-A-Service").offset().top)
    	// }, 1000);

			$(selector).removeClass('active');
			$parent.addClass('active');
			const serviceDetails = '.service-details-section div';
			$(serviceDetails).removeClass('visible');
			$(`.service-details-section div:nth-child(${$($parent).index() + 1})`).addClass('visible')
		}
	})

	$(selector).on('click', function(){

		$(selector).removeClass('active');
		$(this).addClass('active');

		const serviceDetails = '.service-details-section div';
		$(serviceDetails).removeClass('visible');
		$(`.service-details-section div:nth-child(${$(this).index() + 1})`).addClass('visible')
	});


	var resizeElement2 = document.getElementById('review-card')
  addResizeListener(resizeElement2, function(){
		const el = document.querySelectorAll('.review-vid-resize1')
		el.forEach(element => {
			const style  = `height: ${$('#review-card').height()}px;`;
			element.setAttribute('style', style);
		})
	});

	window.addEventListener("hashchange", function(){
		$(selector).removeClass('active');
	
		$(".app-eng-details").removeClass('visible');
		$(".tech-consult-details").removeClass('visible');
		$(".testing-details").removeClass('visible');
		$(".web-dev-details").removeClass('visible');
		$(".mobile-dev-details").removeClass('visible');
		$(".dev-ops-details").removeClass('visible');

		window.scrollTo({
			top: 250,
			behavior: "smooth"
    });

		if(location.hash === "#Application%20Engineering"){
			$(".app-eng").addClass('active');
			$(`.app-eng-details`).addClass('visible')
			return 
		}
		if(location.hash === "#Technology%20consulting"){
			$(".tech-consult").addClass('active');
			$(`.tech-consult-details`).addClass('visible')
			return 
		}
		if(location.hash === "#Testing-as-a-Service"){
			$(".testing").addClass('active');
			$(".testing-details").addClass('visible');
			return 
		}
		if(location.hash === "#Web%20development"){
			$(".web-dev").addClass('active');
			$(".web-dev-details").addClass('visible');
			return 
		}
		if(location.hash === "#Mobile%20development"){
			$(".mobile-dev").addClass('active');
			$(".mobile-dev-details").addClass('visible');
			return 
		}
		if(location.hash === "#DevOps-as-a-service"){
			$(".dev-ops").addClass('active');
			$(".dev-ops-details").addClass('visible');
			return 
		}
		

	}, false);

	var sync1 = $(".owl-carousel");
	var sync2 = $(".owl-carousel2"); 
	var intro_slider = $(".intro-slider"); 
	// var intro_carousel = $(".intro-carousel-custom");

  sync1.owlCarousel({
    items : 1,
    slideSpeed : 500,
		nav: true,
		dots:false,
    autoplay: true,
    loop: true,
    responsiveRefreshRate : 50,
    navText: ['',''],
	});

	sync2.owlCarousel({
    items : 1,
    slideSpeed : 500,
		nav: true,
		dots:false,
    autoplay: true,
    loop: true,
    responsiveRefreshRate : 50,
    navText: ['',''],
	});

	intro_slider.owlCarousel({
    items : 1,
    slideSpeed : 500,
		nav: true,
		dots:false,
    autoplay: true,
    loop: true,
    responsiveRefreshRate : 50,
    navText: ['',''],
	});
	


})(jQuery); 


function submitForm(event){
	const name = $('#name').val()
	const email = $('#email').val()
	const subject = $('#subject').val()
	const message = $('#message').val()

	console.log(name, email, subject, message)
}

function scrollToKnowMore(){
	var element = document.getElementById('know-more');
	var headerOffset = 105;
	var elementPosition = element.getBoundingClientRect().top;
	var offsetPosition = elementPosition - headerOffset;

	window.scrollTo({
		top: offsetPosition,
		behavior: "smooth"
	});
}

function showSentinelCert(){
	$('#exampleModal2').modal()
}