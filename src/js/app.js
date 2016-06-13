jQuery(function($) {
    'use strict';
    
    //Main slider
    $(document).ready(function() {
        $("#main-slider .owl-carousel").owlCarousel({

            nav : true, // Show next and prev buttons
            slideSpeed : 300,
            paginationSpeed : 400,
            items: 1,
            singleItem: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 5000,
            loop: true,
            animateOut: 'owl-fadeUp-out',
            animateIn: 'owl-fade-in',
            navText: [
                "<span class='glyphicon glyphicon-menu-left'></span>",
                "<span class='glyphicon glyphicon-menu-right'></span>"]
        });

    });

    //Rangeslider.js
    $(document).ready(function() {
        var player = $("#player");
        var rangeslider = player.find('input[type="range"]').rangeslider({
            polyfill: false,

            // Callback function
            onInit: function() {},

            // Callback function
            onSlide: function(position, value) {},

            // Callback function
            onSlideEnd: function(position, value) {}
        });
        player.find(".volume-down").click(function(){
            console.log(123);
            rangeslider.val(0).change();
        });
        player.find(".volume-up").click(function(){
            rangeslider.val(100).change();
        });

    });

    //Scrollbar
    $(document).ready(function() {
        $('#program').perfectScrollbar({
            suppressScrollX: true,
            wheelSpeed: 0.5,
            wheelPropagation: true
        });
    });


    //Blockquote
    $(document).ready(function() {
        $("#blockquote .owl-carousel").owlCarousel({

            nav : true, // Show next and prev buttons
            slideSpeed : 300,
            paginationSpeed : 400,
            items: 1,
            singleItem: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 13000,
            loop: true,
            navText: [
                "<span class='glyphicon glyphicon-menu-left'></span>",
                "<span class='glyphicon glyphicon-menu-right'></span>"]
        });

    });


    //Efir Upper
    $(document).ready(function() {
        var slider = $("#efir-upper .owl-carousel");
        slider.owlCarousel({
            slideSpeed : 300,
            paginationSpeed : 400,
            items: slider.find(".item").length-1,
            autoplay: true,
            autoplayTimeout: 7000,
            loop: true
        });

    });

    //Video
    $(document).ready(function() {
        $("#video .owl-carousel").owlCarousel({
            slideSpeed : 300,
            paginationSpeed : 400,
            items: 1,
            singleItem: true,
            dots: true,
            loop: true
        });

    });

    //Efir Lower
    $(document).ready(function() {
        var slider = $("#efir-lower .owl-carousel");
        slider.owlCarousel({
            slideSpeed : 300,
            paginationSpeed : 400,
            items: slider.find(".item").length-1,
            autoplay: true,
            autoplayTimeout: 9000,
            loop: true
        });

    });
    
    

});


