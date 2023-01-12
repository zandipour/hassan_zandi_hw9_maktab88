
$("#btn1").css({
    width: "80%",
    height:"50px",
    borderBottum: "3px solid green",
    color : "green"
})
$("#btn2").css({
    width: "80%",
    height:"50px",
    borderBottum: "3px solid green",
    color : "green"
})
$("#btn3").css({
    width: "80%",
    height:"50px",
    borderBottum: "3px solid green",
    color : "green"
})

$("#p1").css({
    width: "80%",
    height :"50px",
    display :"none"

})
$("#p2").css({
    width: "80%",
    height :"50px",
    display :"none"

})
$("#p2").css({
    width: "80%",
    height :"50px",

})
$(document).ready(function () {
    $("#btn1").click(function () {
        $("#p1").slideDown("#btn1");
    });
    $("#btn1").click(function () {
        $("#p2").slideUp("#btn1");
    });
    $("#btn1").click(function () {
        $("#p3").slideUp("#btn1");
    });
});
$(document).ready(function () {
    $("#btn2").click(function () {
        $("#p2").slideDown("#btn2");
    });
    $("#btn2").click(function () {
        $("#p1").slideUp("#btn2");
    });
    $("#btn2").click(function () {
        $("#p3").slideUp("#btn2");
    });
});
$(document).ready(function () {
    $("#btn3").click(function () {
        $("#p3").slideDown("#btn3");
    });
    $("#btn3").click(function () {
        $("#p1").slideUp("#btn3");
    });
    $("#btn3").click(function () {
        $("#p2").slideUp("#btn3");
    });
});