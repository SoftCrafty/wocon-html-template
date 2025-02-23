

$(document).ready(function () {
    $(".tab").click(function () {
        $(".tab").removeClass("active");
        $(this).addClass("active");
    });

    // Off-Canvas Menu
    $(".menu_btn").on("click", function () {
        $(".off_canvas").addClass("active_offcanvas");
    });

    $(".cross_btn").on("click", function () {
        $(".off_canvas").removeClass("active_offcanvas");
    });
});


let plusBtn = document.querySelector(".plus_btn");
let socialIcon = document.querySelector(".social_icon");

plusBtn.addEventListener("mouseenter", function(){
    socialIcon.classList.add("active_icon");
});
plusBtn.addEventListener("mouseleave", function(){
    socialIcon.classList.remove("active_icon");
});


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
                // dots: true,
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
        initialSlide: 2   ,
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

