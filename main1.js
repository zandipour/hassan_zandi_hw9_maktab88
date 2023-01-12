$("#container").css({
    width:"400px",
    height:"350px",
    backgroundColor:"green",
    marginLeft:"250px",
    marginTop:"100px",
    color:"white"

}).html("click here!!!");


$(document).ready(function(){
    $("#container").click(function(){
      $("#container").append("Click here and watch the text change!!");
    });
  
  });

