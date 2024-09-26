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




document.addEventListener('DOMContentLoaded', function () {
    const peopleNumber = document.getElementById('people-number');
    const plusButton = document.getElementById('plus-people');
    const minusButton = document.getElementById('minus-people');

    // Initialize the innerHTML if it's empty
    peopleNumber.innerHTML = peopleNumber.innerHTML || "0";

    plusButton.addEventListener('click', () => {
        peopleNumber.value++;
    });

    minusButton.addEventListener('click', () => {
        let currentValue = parseInt(document.getElementById("people-number").value);
        if (!isNaN(currentValue) && currentValue > 0) {
            document.getElementById("people-number").value--;
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const bagsNumber = document.getElementById('bags-number');
    const bagsPlus = document.getElementById('plus-bags');
    const bagsMinus = document.getElementById('minus-bags');

    // Initialize the innerHTML if it's empty
    bagsNumber.innerHTML = bagsNumber.innerHTML || "0";

    bagsPlus.addEventListener('click', () => {
        bagsNumber.value++;
    });

    bagsMinus.addEventListener('click', () => {
        let currentValue = parseInt(document.getElementById("bags-number").value);
        if (!isNaN(currentValue) && currentValue > 0) {
            document.getElementById("bags-number").value--;
        }
    });
});
