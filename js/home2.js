$(document).ready(function () {
    $(".plus_btn").on("mouseenter", function () {
        $(".social_icon").addClass("active_icon");
    }).on("mouseleave", function () {
        $(".social_icon").removeClass("active_icon");
    });
});
