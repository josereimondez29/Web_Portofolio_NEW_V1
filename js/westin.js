var $window = $(window);

$(window).on("load", (function() {
    $(".loader").delay(1000).fadeOut('slow');
    $("#overlayer").delay(1000).fadeOut('slow');
}));
/*-------------------------
        SMOOTH SCROLL
-------------------------*/
$('.header-section .navbar-nav a').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 60
    }, 1500, 'easeInOutQuart');
    event.preventDefault();
});

/*-------------------------
        HEADER STICKY
-------------------------*/
$window.on('scroll', function () { // $window = $(window)
    if ($(this).scrollTop() > 100) {
        $('#header').addClass('header-sticky');
    } else {
        $('#header').removeClass('header-sticky');
    }
});

/*-------------------------
   SIDEBAR SMOOTH SCROLL
-------------------------*/
$('.sidebar .navbar-nav a, .sidebar .list-group a').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 0
    }, 1500, 'easeInOutQuart');
    event.preventDefault();
});
/*-------------------------
    SIDEBAR TOGGLER
-------------------------*/
$sidebarToggler = $('.sidebar-toggler');
$sidebarToggler.on('click', function(){
    $(this).toggleClass('move lni-chevron-left lni-menu');
    $('.sidebar').toggleClass('hide');
    $('.page-content').toggleClass('full-width');
});

if($window.width() < 992){
    $sidebarToggler.addClass('move lni-menu');
    $sidebarToggler.removeClass('lni-chevron-left');
    $('.sidebar').addClass('hide');
    $('.page-content').addClass('full-width');


    $('.sidebar-list a').on('click', function(){
        setTimeout(function () {
            $sidebarToggler.toggleClass('move lni-chevron-left lni-menu');
            $('.sidebar').toggleClass('hide');
            $('.page-content').toggleClass('full-width');
        }, 1500);
    });
}



/*-------------------------
        TYPED JS
-------------------------*/
var options = {
    strings: $(".element").attr('data-elements').split(','),
    typeSpeed: 100,
    backDelay: 3000,
    backSpeed: 50,
    loop: true
};
var typed = new Typed(".element", options);

/*-------------------------
MAGNIFIC POPUP JS FOR VIDEO
-------------------------*/
$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
});


/*-------------------------
     MAGNIFIC POPUP JS
-------------------------*/
if (('.portfolio-items').length > 0) {
    $('.portfolio-items').each(function() {
        $(this).magnificPopup({
            delegate: '.js-zoom-gallery',
            type: 'image',
            gallery: {
                enabled:true
            }
        });
    });
}

/*-------------------------
     OWL CAROUSEL JS
-------------------------*/
$(".testimonial .owl-carousel").owlCarousel({
    items: 1,
    nav: false,
    autoplay: true,
    loop: true,
    dots: true,
    mouseDrag: true,
    touchDrag: true,
    smartSpeed: 1000,
    autoplayHoverPause: true,
});


/*-------------------------
        ISOTOPE JS
-------------------------*/
$window.on('load', function () {
    var $container = $('.portfolio-items');
    var $filter = $('#portfolio-filter');
    $container.isotope({
        filter: '*',
        layoutMode: 'masonry',
        animationOptions: {
            duration: 750,
            easing: 'linear'
        }
    });
    $filter.find('a').on("click",function() {
        var selector = $(this).attr('data-filter');
        $filter.find('a').removeClass('active');
        $(this).addClass('active');
        $container.isotope({
            filter: selector,
            animationOptions: {
                animationDuration: 750,
                easing: 'linear',
                queue: false,
            }
        });
        return false;
    });
});

/*-------------------------
        RIPPLE JS
-------------------------*/
$('.ripple').ripples({
    resolution: 500,
    dropRadius: 20,
    perturbance: 0.04
}, 'show');


