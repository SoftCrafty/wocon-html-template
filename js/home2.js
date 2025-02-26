$('.images_slider').slick({
    slidesToShow: 5,
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
$('.slider_parent').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: `<span class="left-arrow"><i class="fa-solid fa-arrow-left"></i></span>`,
    nextArrow: `<span class="right-arrow"><i class="fa-solid fa-arrow-right"></i></span>`,
});



$(document).ready(function () {
    function startCounter() {
        $('.counter').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');

            $({ countNum: $this.text() }).animate(
                { countNum: countTo },
                {
                    duration: 2000,
                    easing: 'linear',
                    step: function () {
                        $this.text(Math.floor(this.countNum) + "+");
                    },
                    complete: function () {
                        $this.text(this.countNum + "k+");
                    }
                }
            );
        });
    }

    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        return elemTop <= docViewBottom;
    }

    $(window).on('scroll', function () {
        if (isScrolledIntoView('.counter') && !$('.counter').hasClass('counted')) {
            $('.counter').addClass('counted');
            startCounter();
        }
    });
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
                    // dots: true,
                }
            }
        ]
    });
});

