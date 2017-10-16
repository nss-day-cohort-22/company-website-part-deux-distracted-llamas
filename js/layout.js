// /* Show/Hide Navigation */
// let checkScroll = function() {
//     if ($('#call-to-action')) {
//         let el = $('#call-to-action');
//     //   let top_of_object = el.offset().top;
//         let bottom_of_object = el.offset().top + el.outerHeight();
//         let top_of_window = $(window).scrollTop();
//         let bottom_of_window = $(window).scrollTop() + $(window).height();

//     //   if (top_of_window <= bottom_of_object && bottom_of_window >= top_of_object) {
//         if (top_of_window >= bottom_of_object) {
//             // $('#nav').show();
//             // $('#nav').fadeIn('slow');
//             // $('header').css("display", "block");
            
//             // for some reason #nav was defaulting to display:none 
//             $('#nav').css('display', 'flex');
//             $('header').fadeIn('slow');
//             $('#nav li').fadeIn('slow');
//             $('#back-to-top-container a').fadeIn('slow');
//             $('#back-to-top').fadeIn('slow');
//         } else {
//             // $('#nav').hide();
//             $('#nav').fadeOut('fast');
//             $('#back-to-top-container a').fadeOut('fast');
//             $('#back-to-top').fadeOut('fast');
//         }
//     }
//   }
// // $(document).ready(checkScroll);
// $(window).on('scroll', function() {checkScroll()});
// /* End Show/Hide Navigation */

/* Smooth Scroll */
$('#back-to-top').click(function () {
    document.querySelector('#nav').scrollIntoView({
        behavior: 'smooth'
    });
});
/* End Smooth Scroll */
