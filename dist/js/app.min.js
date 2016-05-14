$(document).ready(function () {


    $('input[type="range"]').rangeslider({

        // Feature detection the default is `true`.
        // Set this to `false` if you want to use
        // the polyfill also in Browsers which support
        // the native <input type="range"> element.
        polyfill: false,

        // Default CSS classes
        rangeClass: 'rangeslider',
        disabledClass: 'rangeslider--disabled',
        horizontalClass: 'rangeslider--horizontal',
        verticalClass: 'rangeslider--vertical',
        fillClass: 'rangeslider__fill',
        handleClass: 'rangeslider__handle__evart',

        // Callback function
        onInit: function() {
            $(".evart-radio .evart-value").text($(this)[0].value + "%");
        },

        // Callback function
        onSlide: function(position, value) {
            $(".evart-radio .evart-value").text(value + "%");
        },

        // Callback function
        onSlideEnd: function(position, value) {

        }
    });

});