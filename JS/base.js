$(document).ready( function (){
    $(".sidebar > .button-con > .button").on("click", function () {
        if ($(".sidebar").hasClass("extended")) {
            if ($(this).hasClass("highlight")) {
                $(".sidebar").removeClass("extended");   
                $(".sidebar > .button-con").removeClass("extended");
                $(".page").removeClass("extended");   
                $(this).removeClass("highlight");   
            } else {
                $(".sidebar > .button-con > .button").removeClass("highlight");
                $(this).addClass("highlight");
            }
        } else {
            $(".sidebar").addClass("extended");    
            $(".sidebar > .button-con").addClass("extended");   
            $(".page").addClass("extended");   
            $(this).addClass("highlight");
        }
    });
});