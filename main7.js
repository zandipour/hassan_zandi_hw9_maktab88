$("#loader").css({
    width : "600px",
    height : " 30px",
    border : "2px solid red",
    margin :"100px",
    overflow: "hidden"
});

$("#load").css({
    backgroundColor :"lightblue",
    width : "10%",
    height : "30px",
    
    
});
$("#btn").css({
    marginLeft :"100px"
});
let wit = 10;

$(document).ready(function(){
    $("#btn").click(function(){
        wit += 10;
        $("#load").css({
            width :`${wit}%`
            
        })
    })
})



