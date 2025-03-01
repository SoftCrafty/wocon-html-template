$(document).ready(function () {
    $(".plus_btn").on("mouseenter", function () {
        $(".social_icon").addClass("active_icon");
    }).on("mouseleave", function () {
        $(".social_icon").removeClass("active_icon");
    });

    // Slick Carousel - albert_slider
    $('.albert_slider_contains').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: `<span class="left-arrow"><i class="fa-solid fa-arrow-left"></i></span>`,
        nextArrow: `<span class="right-arrow"><i class="fa-solid fa-arrow-right"></i></span>`,
    });


    // Slick Carousel - Images Slider
    $('.images_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: `<span class="left-arrow"><i class="fa-solid fa-arrow-left"></i></span>`,
        nextArrow: `<span class="right-arrow"><i class="fa-solid fa-arrow-right"></i></span>`,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 1, slidesToScroll: 1 } }
        ]
    });

});
