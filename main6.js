

$(document).ready(function () {
    $("#pages").mouseenter(function () {
        $("#pcontent  ").css({
            display: "block",
            backgroundColor: "#ddd",
        });
    });
});
$(document).ready(function () {
    $("#links").mouseenter(function () {
        $("#lcontent").css({
            display: "block",
            backgroundColor: "#ddd",
        });
    });
});

$(document).ready(function () {
    $("#pages").mouseleave(function () {
        $("#pcontent").css({
            display: "none",

        });
    });
});

$(document).ready(function () {
    $("#links").mouseleave(function () {
        $("#lcontent").css({
            display: "none",

        });
    });
});