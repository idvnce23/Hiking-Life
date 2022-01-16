$(function() {
    var header = $("#home"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();
        checkScroll(scrollOffset);

        // Fixed Header
    $(window).on("scroll", function(){
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });
    function checkScroll(scrollOffset){
        scrollOffset = $(this).scrollTop();
        if( scrollOffset >= introH ) {
            header.addClass("header--fixed");
        } else {
            header.removeClass("header--fixed");
        }
    }

        // Smooth Scroll
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();
        var $this = $(this),
            blockId = $(this).data('scroll');
            blockOffset = $(blockId).offset().top;
        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });
});