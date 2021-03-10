
(function ($) {
    "use strict";

    // Loader
    $(function () {
        var loader = function () {
            setTimeout(function () {
                if ($('#loader').length > 0) {
                    $('#loader').removeClass('show');
                }
            }, 1);
        };
        loader();
    });

    // Auto Init 
    M.AutoInit();

    // Carousel
    var elems = document.querySelectorAll('.carousel');
    var options = {
        fullWidth: false,
        indicators: false
    };
    var instance = M.Carousel.init(elems, options);
    setInterval(function () {
        $('.carousel').carousel('next');
    }, 5000);

})(jQuery);

console.clear();