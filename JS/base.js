$(document).ready(function () {
    $(".sidebar > .button-con > .button").on("click", function () {
        if ($(".sidebar").hasClass("extended")) {
            // is out
            if ($(this).hasClass("highlight")) {
                // then Collapse
                $(".sidebar").removeClass("extended");
                $(".sidebar > .button-con").removeClass("extended");
                $(".page").removeClass("extended");
                $(".game").removeClass("spacing-out");
                $(".odds").removeClass("spacing-out");
                $(".board-con").removeClass("spacing-out");
                $(this).removeClass("highlight");
            } else {
                // Select button and keep extended (swapping bar)
                $(".sidebar > .button-con > .button").removeClass("highlight");
                $(this).addClass("highlight");
            }
        } else {
            // if not out then extend
            $(".sidebar").addClass("extended");
            $(".sidebar > .button-con").addClass("extended");
            $(".page").addClass("extended");
            $(".game").addClass("spacing-out");
            $(".odds").addClass("spacing-out");
            $(".board-con").addClass("spacing-out");
            $(this).addClass("highlight");
        }
    });
    $("#ChatBut").on("click", function () {
        if ($(".sidebar > .chat").hasClass("hidden")) {
            $(".sidebar > .chat").removeClass("hidden");
            $(".sidebar > .affiliate").addClass("hidden");
            $(".sidebar > .info").addClass("hidden");
        } else {
            $(".sidebar > .chat").addClass("hidden");
            $(".sidebar > .affiliate").addClass("hidden");
            $(".sidebar > .info").addClass("hidden");
        }
    });
    $("#AffiliateBut").on("click", function () {
        if ($(".sidebar > .affiliate").hasClass("hidden")) {
            $(".sidebar > .chat").addClass("hidden");
            $(".sidebar > .affiliate").removeClass("hidden");
            $(".sidebar > .info").addClass("hidden");
        } else {
            $(".sidebar > .chat").addClass("hidden");
            $(".sidebar > .affiliate").addClass("hidden");
            $(".sidebar > .info").addClass("hidden");
        }
    });
    $("#InfoBut").on("click", function () {
        if ($(".sidebar > .info").hasClass("hidden")) {
            $(".sidebar > .chat").addClass("hidden");
            $(".sidebar > .affiliate").addClass("hidden");
            $(".sidebar > .info").removeClass("hidden");
        } else {
            $(".sidebar > .chat").addClass("hidden");
            $(".sidebar > .affiliate").addClass("hidden");
            $(".sidebar > .info").addClass("hidden");
        }
    });
});

$(document).on("scroll", function () {
    var scrollTop       = $(window).scrollTop(),
        elementOffset   = $('.page').offset().top,
        distance        = (elementOffset - scrollTop);
    if (distance < 100) {
        $(".sidebar").css("padding-top", distance);
    }
    else if (distance <= 0) {
        $(".sidebar").css("padding-top", "0px");
    }
});