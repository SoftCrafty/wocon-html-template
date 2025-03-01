$(document).ready(function () {
    // Tab Active Class Toggle
    $(".tab").click(function () {
        $(".tab").removeClass("active");
        $(this).addClass("active");
    });

    // Sidebar (Off-Canvas Menu) Toggle
    $(".mobile-menu-toggle-btn, .mobile-menu-bar").on("click", function () {
        $(".menu-sidebar-area, .body-overlay").addClass("active");
    });

    $(".menu-sidebar-close-btn, .cross_btn, .body-overlay").on("click", function () {
        $(".menu-sidebar-area, .body-overlay").removeClass("active");
    });

    // Sticky Navbar
    function addStickyNav(navSelector, scrollOffset = 120, activeClass = 'active') {
        let nav = $(navSelector);
        $(window).on('scroll', function () {
            $(window).scrollTop() > scrollOffset ? nav.addClass(activeClass) : nav.removeClass(activeClass);
        });
    }
    addStickyNav('#top_nav');
    addStickyNav('#top_home_nav'); // Home page er navbar

    // Header Scroll Effect
    $(window).on("scroll", function () {
        $("#header-area").toggleClass("scrolled", $(window).scrollTop() > 100);
    });

    // Slick Carousel - Review Content
    $('.review_content').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: `<span class="left-arrow"><i class="fa-solid fa-arrow-left"></i></span>`,
        nextArrow: `<span class="right-arrow"><i class="fa-solid fa-arrow-right"></i></span>`,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 1, slidesToScroll: 1 } }
        ]
    });

    // Slick Carousel - Logo Section
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
            { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } }
        ]
    });

    

    

    // Counter Animation
    function startCounter() {
        $(".counter").each(function () {
            let $this = $(this), countTo = $this.attr("data-count");
            $({ countNum: $this.text() }).animate({ countNum: countTo }, {
                duration: 2000,
                easing: "linear",
                step: function () { $this.text(Math.floor(this.countNum) + "+"); },
                complete: function () { $this.text(this.countNum + "k+"); }
            });
        });
    }

    function isScrolledIntoView(elem) {
        let docViewBottom = $(window).scrollTop() + $(window).height();
        return $(elem).offset().top <= docViewBottom;
    }

    $(window).on("scroll", function () {
        if (isScrolledIntoView(".counter") && !$(".counter").hasClass("counted")) {
            $(".counter").addClass("counted");
            startCounter();
        }
    });

    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".experts_person_child", {
        scrollTrigger: { trigger: ".experts_person", start: "top 80%", toggleActions: "play none none reverse" },
        opacity: 0, y: 50, duration: 1, stagger: 0.3,
    });

    gsap.from(".blog_box", {
        scrollTrigger: { trigger: ".blog_box_parent", start: "top 80%", toggleActions: "play none none reverse" },
        opacity: 0, y: 50, duration: 1, stagger: 0.3,
    });
    gsap.from(".child_box", {
        scrollTrigger: { trigger: ".our_teams_box", start: "top 80%", toggleActions: "play none none reverse" },
        opacity: 0, y: 50, duration: 1, stagger: 0.3,
    });

    // Social Icon Hover Effect
    $(".plus_btn").on("mouseenter", function () {
        $(".social_icon").addClass("active_icon");
    }).on("mouseleave", function () {
        $(".social_icon").removeClass("active_icon");
    });

});



document.addEventListener("DOMContentLoaded", function () {
    const dropdownBtns = document.querySelectorAll(".dropdown_btn");

    dropdownBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            const dropdown = this.parentElement.nextElementSibling;

            // যদি বর্তমানে খোলা থাকে, তাহলে বন্ধ করবো
            if (dropdown.classList.contains("active")) {
                dropdown.classList.remove("active");
                this.innerHTML = '<i class="fal fa-plus"></i>';
            } else {
                // অন্য সব সাবমেনু বন্ধ করা
                document.querySelectorAll(".dropdown").forEach((drop) => drop.classList.remove("active"));
                document.querySelectorAll(".dropdown_btn i").forEach((icon) => icon.classList.replace("fa-minus", "fa-plus"));

                // নতুন সাবমেনু ওপেন করা
                dropdown.classList.add("active");
                this.innerHTML = '<i class="fal fa-minus"></i>';
            }
        });
    });
});



