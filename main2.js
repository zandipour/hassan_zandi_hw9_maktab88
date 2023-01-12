$("#box").css({
    width : "250px",
    height : "150px",
    backgroundColor:"blue",
    marginLeft : "100px",
    marginTop : "100px",
    color :"red",
    padding :"20px"
}).html("hover me !!!!");
$(()=>{
$( "#box" ).mouseenter(function() {
    $( this ).css({
        backgroundColor:"red",
        color:"blue"
});
  });
  $( "#box" ).mouseleave(function() {
    $( this ).css({
        backgroundColor:"blue",
        color:"red"
});
  });
});
