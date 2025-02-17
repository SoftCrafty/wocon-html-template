

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
    // autoplay: true,
    // autoplaySpeed: 2000,
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

