// Add loading animation on load and remove it when the document done parsing
$(window).on('load', function () {
    setTimeout(removeLoader);
    });

function removeLoader() {
    $(".loading").fadeOut(1000, function () {
        $(".loading").remove();
    });
};
