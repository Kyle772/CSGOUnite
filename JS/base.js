$(document).ready( function (){
    $(".sidebar > .button-con > .button").on("click", function () {
        if ($(".sidebar").hasClass("extended")) {
            if ($(this).hasClass("highlight")) {
                $(".sidebar").removeClass("extended");    
                $(this).removeClass("highlight");   
            } else {
                $(".sidebar > .button-con > .button").removeClass("highlight");
                $(this).addClass("highlight");
            }
        } else {
            $(".sidebar").addClass("extended");    
            $(this).addClass("highlight");
        }
    });
});