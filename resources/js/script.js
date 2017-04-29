$(document).ready(function () {

    /* For sticky navigation */
    /* Uses Waypoint plugin (imakewebthings.com) */
    
    /* This code adds the 'sticky' class to the nav element if we get to js--section-features and scroll direction is down */
    /* This code removes the 'sticky' class from the nav element if we get to js--section-features and scroll direction is up */
    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });

    /* Stick navigation with some animation */
    //    $('.js--section-features').waypoint(function(direction) {
    //        var nav=$('nav');
    //        if (direction == "down") {
    //            nav.addClass('sticky animated fadeInDown');
    //        } else {
    //            nav.addClass('fadeOutUp');
    //            setTimeout(function() {
    //                nav.removeClass('sticky animated fadeInDown fadeOutUp');
    //            },500);
    //        }
    //    }, {offset: '60px;'
    //    });

    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-plans').offset().top - 60
        }, 1000);
    });

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-features').offset().top - 60
        }, 1000);
    });


    $('#features').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-form').offset().top - 60
        }, 1000);
    });
    
    /* Smooth Scroll for navigation links */
    /* https://css-tricks.com/snippets/jquery/smooth-scrolling/ */
    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 60  /* Add '- 60' offset to give room for nav bar to appear */
                    }, 1000);
                    return false;
                }
            }
        });
    });

    /* Animation on scroll */
    /* Using waypoint plugin + Animate.css framework (daneden.github.io/animate.css/ )*/

    /* FadeIn Features Part */
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%' /* want to have animation start before you scroll to element..in this case offset b 50% */
    });

    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });

    /* Mobile Navi: Manual close */
    /* With this code the nav menu you will stay open until the user manually closes it. */
//    $('.js--nav-icon').click(function () {
//        var nav = $('.js--main-nav');
//        var icon = $('.js--nav-icon i');
//        nav.slideToggle(200);
//
//        if (icon.hasClass('ion-navicon-round')) {
//            icon.addClass('ion-close-round');
//            icon.removeClass('ion-navicon-round');
//        } else {
//            icon.addClass('ion-navicon-round');
//            icon.removeClass('ion-close-round');
//        }
//
//    });
    
    /* Mobile Navi: Auto close */
    /* With this code the nav menu you will stay open until the user manually closes it. */
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');
    
    /* Mobile navigation */
    $('.js--nav-icon, .js--main-nav a, .logo-black').click(function(element){
        //Gets the class name of the element that triggered the event
        var clicked = element.target.className;
        //Exits the function if the menu is closed AND the logo-black element (logo image) was clicked
        if (icon.hasClass('ion-navicon-round') && clicked == 'logo-black')
		{return;}
        //Opens and closes the menu
        if ($(window).width() < 768){
            nav.slideToggle(100);
        }
        //Changes icon states of the menu button
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });
    
    $(window).resize(function(){
        if ($(window).width() > 767){
            nav.css("display", "block");
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            nav.css("display", "none");
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });


    
    
    
    

    /* Create a "Basic" Google map with markers */
    /* using JQuery Plugin gmaps.js @ http://hpneo.github.io/gmaps/examples/basic.html */

//    var map = new GMaps({
//        div: '#map',
//        lat: 32.7063936,
//        lng: -117.1569142,
//        zoom: 13,
//        scrollwheel: false,
//        streetViewControlOptions: {
//            position: google.maps.ControlPosition.LEFT_TOP
//        }
//    });
//
//    map.addMarker({
//        lat: 32.71153469,
//        lng: -117.1628646103,
//        title: 'San Diego',
//        infoWindow: {
//            content: '<p>Our San Diego HQ</p>'
//        }
//    });


// More complex code that recenters the marker when the screen size changes
// Got the base of code
// The downside is that this doesn't really help when the form is layered ontop of half of the map...
// map marker is centered but its not centered in area where map is visible.

    var coordinates = {

        lat: 32.7063936,
        lng: -117.111569142
    };

    var map = new GMaps({
        div: '#map',
        lat: coordinates.lat,
        lng: coordinates.lng,
        resize: function () {
        // Don't recenter map on marker lat/lng unless on a mobile device (<768)
        if ($(window).width() < 768) {
            // Set coordinates to marker location for recentering
            coordinates.lat = 32.715738;
            coordinates.lng = -117.161084;
            this.setCenter(coordinates);
        }},
        tilesloaded: function () {
            map.refresh();
        },
        zoom: 13,
        scrollwheel: false,
        streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP
        }

    });

    // Add map marker
    map.addMarker({
        lat: 32.715738,
        lng: -117.161084,
        title: 'San Diego',
        infoWindow: {
            content: '<p>Our San Diego HQ</p>'
        }
    });

    // Trigger resize event of the map when the window is resized — but only when
    // the actual resizing has stopped for 200 ms, so that we are not triggering the
    // event continuously while the browser is being resized.
    var resizingTimeOut;
    $(window).resize(function () {
        clearTimeout(resizingTimeOut);
        resizingTimeOut = setTimeout(function () {
            map.refresh();
        }, 200);
    });




    /* Simple js sample code */

    //    'use strict';
    //    $('h1').click(function () {
    //        $(this).css('backgroud-color', '#ff0000');
    //    });

});
