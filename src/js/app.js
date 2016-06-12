jQuery(function($) {
    'use strict';
    $(document).ready(function() {

        $("#owl-demo").owlCarousel({

            nav : true, // Show next and prev buttons
            slideSpeed : 300,
            paginationSpeed : 400,
            items: 1,
            singleItem: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 2000,
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

});


