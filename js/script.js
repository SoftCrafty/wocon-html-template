$(document).ready(function () {
    $(".tab").click(function () {
        $(".tab").removeClass("active");
        $(this).addClass("active");
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

