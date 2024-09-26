document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopButton = document.querySelector(".top-arrow-icon");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 150) {
            scrollToTopButton.classList.add("show");
        } else {
            scrollToTopButton.classList.remove("show");
        }
    });

    scrollToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});


