$(function(){
    "use strict";

    //News
    $(function(){

        $(".item .mini").click(function(){
            var container = $(this).next();
            var $this = $(this);
            var main = $("main");
            $this.slideUp(300);
            container.slideDown(300);
            $this.next().find(".content .details").one("click", function(){
                $this.slideDown(300);
                container.slideUp(300);
            });
        });
    });

});
