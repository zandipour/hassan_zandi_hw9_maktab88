

$(document).ready(function(){
        $(".cbtn").click(function(){
                $(".main").append("the main nodes child node");
        });
        $(".pbtn").click(function(){
                $(".main").append("Parent nodes text");
        });
});


