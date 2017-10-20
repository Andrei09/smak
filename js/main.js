$(document).ready(function(){
    $('.image-container p').addClass("hideme").viewportChecker({
        classToAdd: 'visible animated fadeInDown',
        offset: 10
    });
    $('h1').addClass("hideme").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 100
    });
    $('.bounce-left').addClass("hideme").viewportChecker({
        classToAdd: 'visible animated bounceInLeft',
        offset: 100
    });
    $('.row p').addClass("hideme").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 50
    });
    $('.work-example').addClass("hideme").viewportChecker({
        classToAdd: 'visible animated flipInX',
        offset: 100
    });
    $('.avatar').addClass("hideme").viewportChecker({
        classToAdd: 'visible animated zoomInRight',
        offset: 100
    });
    var header = $('#site-header'),
        hamburger = $('.hamburger-menu'),
        nav = $(".site-nav");
    nav.on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 100;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    hamburger.click(function() {
        $('.bar').toggleClass('animate');
        header.toggleClass('left');
        nav.toggleClass('left');
    });
});
