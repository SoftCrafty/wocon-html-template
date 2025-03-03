$('.review_content').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: `<span class="left-arrow"><i class="fa-solid fa-arrow-left"></i></span>`,
    nextArrow: `<span class="right-arrow"><i class="fa-solid fa-arrow-right"></i></span>`,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});


$(document).ready(function () {
    $('.logo-carousel').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,
        infinite: true,
        centerMode: true,
        centerPadding: "0px",
        initialSlide: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});
