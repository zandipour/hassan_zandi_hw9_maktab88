
$("#pout").css({
    backgroundColor: "gray",
    color: "red"
});

$(document).ready(function () {
    $("#sdown").click(function () {
        $("#pout").slideDown("#sdown");
    });
});

$(document).ready(function () {
    $("#sup").click(function () {
        $("#pout").slideUp("#sup");
    });
});

$(document).ready(function () {
    $("#toggle").click(function () {
        $("#pout").slideToggle("#toggle");
    });
});
