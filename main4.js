$("#pout").css({
    backgroundColor: "gray",
    color: "red"
});
$(document).ready(function () {
    $("#bin").click(function () {
        $("#pout").fadeIn("#bin");
    });
});

$(document).ready(function () {
    $("#bout").click(function () {
        $("#pout").fadeOut("#bout");
    });
});





