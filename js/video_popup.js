document.getElementById("playBtn").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("videoModal").classList.add("active");
});

document.getElementById("closeBtn").addEventListener("click", function () {
    document.getElementById("videoModal").classList.remove("active");
    setTimeout(() => {
        document.getElementById("videoFrame").src = document.getElementById("videoFrame").src;
    }, 400); // Delay video stop after closing
});
