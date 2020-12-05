/* Loader Code Start */
$(window).on("load", function() { 
  $(".section-loader").fadeOut("slow");
  
  var $container = $('.portfolioContainer');
  $container.isotope({
      filter: '*',
      animationOptions: {
          queue: true
      }
  });

  $('.portfolio-nav li').click(function(){
      $('.portfolio-nav .current').removeClass('current');
      $(this).addClass('current');

      var selector = $(this).attr('data-filter');
      $container.isotope({
          filter: selector,
          animationOptions: {
              queue: true
          }
       });
       return false;
  });
});
/* Loader Code End */

// scroll to top

$(document).ready(function(){
	// show hide button on scroll
	$(window).scroll(function(){
		if($(this).scrollTop() > 200){
			$('.scrooltotop').fadeIn();
		} else {
			$('.scrooltotop').fadeOut();
		}
	});
});


$('.scrooltotop').click(function() {
    $('html,body').animate(
      {
        scrollTop: 0
      },
      2000
    ); //set animate time
  });

// scroll to top end
  


$(document).ready(function(){
	// smooth scrolling to top
	$('.scrooltotop').click(function(){
		$('html,body').animate({scrollTop: 0},1000) //set animate time
	})
});


// show hide nav

var lastscrollTop = 0;
navbars = document.getElementById('navbars');
window.addEventListener('scroll', function() {
  var scrollTop = window.pageYoffest || document.documentElement.scrollTop;
  if (scrollTop > lastscrollTop) {
    navbars.style.top = '-80px';
  } else {
    navbars.style.top = '0';
  }
  lastscrollTop = scrollTop;
});

// your choice use or not
// scrolling to navigation color change class addd class a color add kora
// and 200 px er niche gele work korbe;

$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  //>=, not <=
  if (scroll >= 200) {
    //clearHeader, not clearheader - caps H
    $('.navbar').addClass('nav-scrolling-color');
  } else {
    $('.navbar').removeClass('nav-scrolling-color');
  }
});


 /*
    |=================
    | Onepage Nav
    |================
    */
// Basice Code keep it 
    $(document).ready(function () {
        $(document).on("scroll", onScroll);

        //smoothscroll
        $('a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");

            $('a').each(function () {
                $(this).removeClass('active');
            })
            $(this).addClass('active');

            var target = this.hash,
                menu = target;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top+2
            }, 500, 'swing', function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        });
    });

// Use Your Class or ID For Selection 

    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $('.navbar-nav a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('#navbar-nav li a').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
    }


