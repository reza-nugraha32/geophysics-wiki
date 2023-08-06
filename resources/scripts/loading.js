$(window).on('load', function () {
    setTimeout(removeLoader);
    });

function removeLoader() {
    $(".loading").fadeOut(1000, function () {
        $(".loading").remove();
    });
};
