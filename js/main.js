$(document).ready(function () { 
    'use strict';
    // Nice Scroll
    $("body").niceScroll({
    cursorcolor:"#00e8e8",
    cursorwidth:"15px",
    zindex: "99999",
    cursorborder: "1px solid #00e8e8",
    scrollspeed: 50,
    cursorborderradius: "2px"
    });
    

    window.sr = ScrollReveal({duration: 2000});
    sr.reveal('.site-content .d-flex');
    sr.reveal('.section-1 .card');
    sr.reveal('.section-2 .d-flex');
    sr.reveal('.section-3 .col-lg-4');
    sr.reveal('.section-4 .col-md-7, col-md-5');
});