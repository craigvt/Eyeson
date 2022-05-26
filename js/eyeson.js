
// Back to top button
$("#scroll-top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});

// Nav link scrolling
$('a[href^="#benefits"], a[href^="#pricing"], a[href^="#news"], a[href^="#faq"]').click(function(){   
    var the_id = $(this).attr("href");
        $('html, body').animate({
            scrollTop:$(the_id).offset().top
        }, 'slow');
    return false;
});

// animated header
$(window).scroll(function(){
    if($(document).scrollTop() > 100) {
        $( ".navbar" ).removeClass( "navbar-big" ).addClass( "navbar-small" );
        $('#scroll-top').fadeIn();
    }
    else {
        $( ".navbar" ).removeClass( "navbar-small" ).addClass( "navbar-big" );
        $('#scroll-top').fadeOut();
    }
});

/*
// change default Bootstrap mobile menu breakpoint
$('#monitor').html($(window).width());

$(window).resize(function() {
    var viewportWidth = $(window).width();
    $('#monitor').html(viewportWidth);
});
*/

// close mobile menu on link click and back to top button click
$('.navbar-collapse a').click(function (e) {
    if ($(window).width() < 1200) {
        $('.navbar-collapse').collapse('toggle');
     }
});
$('.scroll-top').click(function (e) {
    $('.navbar-collapse').collapse('toggle');
});

// stop playing video when video modal closed
$('.close').click(function(){
    $('iframe').attr('src', $('iframe').attr('src'));
});

$('div.modal').modal();
