$(window).on('load', function () {
    setTimeout(removeLoader);
    });

function removeLoader() {
    $(".loading-box").fadeOut(1000, function () {
        $(".loading-box").remove();
    });
};
