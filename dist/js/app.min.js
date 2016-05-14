$(document).ready(function () {


    $('.evart-volume input[type="range"]').rangeslider({

        // Feature detection the default is `true`.
        // Set this to `false` if you want to use
        // the polyfill also in Browsers which support
        // the native <input type="range"> element.
        polyfill: false,

        // Default CSS classes
        rangeClass: 'sound-rangeslider',
        disabledClass: 'sound-rangeslider--disabled',
        horizontalClass: 'sound-rangeslider--horizontal',
        verticalClass: 'sound-rangeslider--vertical',
        fillClass: 'sound-rangeslider__fill',
        handleClass: 'sound-rangeslider__handle',

        // Callback function
        onInit: function() {
            $(".evart-radio .evart-value").text($(this)[0].value + "%");
        },

        // Callback function
        onSlide: function(position, value) {
            var bg = "url('../img/volume-on.png')";
            $(".evart-volume .evart-value").text(value + "%");
            if(value < 1)
                bg = "url('../img/volume-off.png')";

            $(".evart-volume .evart-ico").css({
                backgroundImage: bg
            });
        },

        // Callback function
        onSlideEnd: function(position, value) {

        }
    });


    $('.evart-playlist input[type="range"]').rangeslider({

        // Feature detection the default is `true`.
        // Set this to `false` if you want to use
        // the polyfill also in Browsers which support
        // the native <input type="range"> element.
        polyfill: false,

        // Default CSS classes
        rangeClass: 'playlist-rangeslider',
        disabledClass: 'playlist-rangeslider--disabled',
        horizontalClass: 'playlist-rangeslider--horizontal',
        verticalClass: 'playlist-rangeslider--vertical',
        fillClass: 'playlist-rangeslider__fill',
        handleClass: 'playlist-rangeslider__handle',

        // Callback function
        onInit: function() {
            //$(".evart-radio .evart-value").text($(this)[0].value + "%");
        },

        // Callback function
        onSlide: function(position, value) {
            // var bg = "url('../img/volume-on.png')";
            // $(".evart-radio .evart-value").text(value + "%");
            // if(value < 1)
            //     bg = "url('../img/volume-off.png')";
            //
            // $(".evart-ico").css({
            //     backgroundImage: bg
            // });
        },

        // Callback function
        onSlideEnd: function(position, value) {

        }
    });

    // $('.evart-playlist-scroll').prop('scrollHeight');

});