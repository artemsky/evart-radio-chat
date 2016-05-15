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

    $(".evart-playlist .list-unstyled").customScrollbar({fixedThumbHeight: 14, fixedThumbWidth: 18});


    $(".evart-submenu .list-unstyled").customScrollbar({
        updateOnWindowResize:true,
        fixedThumbHeight: 18, 
        fixedThumbWidth: 8
    });
    
    $(".evart-submenu").css({
        display: "none",
        visibility: "visible"
    });

    var audioMenu = false;
    $("nav li > a:eq(1), .evart-submenu").focus(function(){
            audioMenu = true;

        $(".evart-submenu").css({
            display: "block"
        });
    });

    $("nav li > a:eq(1), .evart-submenu").blur(function(){
        audioMenu = false;
        $(".evart-submenu").css({
            display: "none"
        });
    });
    
    
    $("nav li > a:eq(1), .evart-submenu").hover(function(){
        $(".evart-submenu").css({
            display: "block"
        });
    }, function(){
        if(!audioMenu)
            $(".evart-submenu").css({
                display: "none"
            });
    });

    $("nav ul a").click(function(e){
        e.preventDefault();
    });


});