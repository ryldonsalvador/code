const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn_burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav_item');

var upButton = $('.upButton');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));

        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));

        showMenu = false;
    }
}
/*----------------------------------------------------*/
/*	Make sure that #header-background-image height is
/* equal to the browser height.
------------------------------------------------------ */

$('.home').css({ 'height': $(window).height() });
$(window).on('resize', function() {    
     $('body').css({ 'width': $(window).width() })
});
$(window).on('load', function() {    
    $('body').css({ 'width': $(window).width() })
          // will first fade out the loading animation 
    $("#loader").fadeOut("slow", function(){
        // will fade out the whole DIV that covers the website.
        // $("#preloader").delay(300).fadeOut("slow");
        $("#preloader").delay(300).fadeOut("slow").queue(function(done) {
            scrollReveal();
        });
        
    });   
});
/*----------------------------------------------------*/
/* Highlight the current section in the navigation bar
------------------------------------------------------*/

var sections = $("section");
var navigation_links = $(".nav a");

sections.waypoint({

  handler: function(event, direction) {
       var active_section;
        active_section = $(this);
        if (direction === "up") active_section = active_section.prev();
        var active_link = $('.nav a[href="#' + active_section.attr("id") + '"]');
        navigation_links.parent().removeClass("current");
        active_link.parent().addClass("current");
    },
    offset: '50%'
});



/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */

$('.menu-nav_link').on('click',function (e) {
    e.preventDefault();
    var target = this.hash,
    $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 800, 'swing', function () {
        window.location.hash = target;
    });
    toggleMenu();
});

/*----------------------------------------------------*/
/*	Fade In/Out Primary Navigation
------------------------------------------------------*/

$(window).on('scroll', function() {

    var h = $('.home').height();
    var y = $(window).scrollTop();
    var nav = $('.nav');

   if ((y > h*.20) && (y < h) && ($(window).outerWidth() > 768 )) {
        nav.fadeOut('slow');
        upButton.fadeIn('fast');
   }
    else {
        if (y < h*.20) {
            nav.removeClass('opaque').fadeIn('fast');
            upButton.fadeOut('fast');
        }
        else {
            nav.addClass('opaque').fadeIn('fast');
            upButton.fadeIn('fast');
        }
  }
});


// });


/*----------------------------------------------------*/
/*----------------------------------------------------*/
/* up button function */
$('.upButton').click(function(){
    $("html, body").animate({ scrollTop: 0 });
});

/*----------------------------------------------------*/
/*----------------------------------------------------*/
/*	Make sure that #header-background-image height is
/* equal to the browser height.
------------------------------------------------------ */

$('.home').css({ 'height': $(window).height() });
$(window).on('load', function() {
     $('.home').css({ 'height': $(window).height() });
     $('body').css({ 'width': $(window).width() })
});
$(window).on('resize', function() {
    $('.home').css({ 'height': $(window).height() });
    $('body').css({ 'width': $(window).width() })
});
