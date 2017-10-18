/* Image Slideshow */
$('.background-image').hide();

function anim() {
    $("#background-image-container img").first().appendTo('#background-image-container').fadeOut(2000);
    $("#background-image-container img").first().fadeIn(2000);    
    setTimeout(anim, 4500);
}
anim();
/* End Image Slideshow */

/* Smooth Scroll */
$('#call-to-action h1').click(function () {
    document.querySelector('#packages-container').scrollIntoView({ 
        behavior: 'smooth'
    });
});
$('#back-to-top').click(function () {
    document.querySelector('#background-image-container').scrollIntoView({
        behavior: 'smooth'
    });
});
$('#packages-btn').click(function () {
    document.querySelector('#packages-container').scrollIntoView({
        behavior: 'smooth'
    });
});
$('#testimonials-btn').click(function () {
    document.querySelector('#testimonials').scrollIntoView({
        behavior: 'smooth'
    });
});
$('#personal-guides-btn').click(function () {
    document.querySelector('#personal-guides').scrollIntoView({
        behavior: 'smooth'
    });
});
$('#packages-card').click(function () {
    window.location.href = "/packages.html";
});
$('#testimonials-card').click(function () {
    window.location.href = "/testimonials.html";
});
$('#personal-guides-card').click(function () {
    window.location.href = "/guides.html";
});
// $('#contact-btn').click(function () {
//     document.querySelector('#contact').scrollIntoView({
//         behavior: 'smooth'
//     });
// });
/* End Smooth Scroll */

/* Show/Hide Navigation */
let checkScroll = function() {
    if ($('#call-to-action')) {
        let el = $('#call-to-action');
    //   let top_of_object = el.offset().top;
        let bottom_of_object = el.offset().top + el.outerHeight();
        let top_of_window = $(window).scrollTop();
        let bottom_of_window = $(window).scrollTop() + $(window).height();

    //   if (top_of_window <= bottom_of_object && bottom_of_window >= top_of_object) {
        if (top_of_window >= bottom_of_object) {
            // $('#nav').show();
            // $('#nav').fadeIn('slow');
            // $('header').css("display", "block");
            
            // for some reason #nav was defaulting to display:none 
            $('#nav').css('display', 'flex');
            $('header').fadeIn('slow');
            $('#nav li').fadeIn('slow');
            $('#back-to-top-container').css('display', 'flex');
            $('#back-to-top-container a').fadeIn('slow');
            $('#back-to-top').fadeIn('slow');
            // $('back-to-top-container ul').fadeIn('slow');
        } else {
            // $('#nav').hide();
            $('#nav').fadeOut('fast');
            $('#back-to-top-container a').fadeOut('fast');
            $('#back-to-top').fadeOut('fast');
            // $('back-to-top-container ul').fadeOut('fast');
        }
    }
  }
// $(document).ready(checkScroll);
$(window).on('scroll', function() {checkScroll()});
/* End Show/Hide Navigation */

/* fetching data for this page */
landingData = JSON.parse(localStorage.getItem("landingData"));
$('#personal-guides #personal-guides-card img').attr('src', landingData.guides.image);
$('#personal-guides #personal-guides-card p').text(landingData.guides.content);
$('#testimonials #testimonials-card img').attr('src', landingData.testimonials.image);
$('#testimonials #testimonials-card p').text(landingData.testimonials.testimonial);