window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navigation-bar");
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;

  if (scrolled > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  // cssMode: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    init: function () {
      const paginationContainer = document.querySelector(".swiper-pagination"); // Updated selector
      const maxVisibleDots = 5;

      const paginationDots = Array.from(paginationContainer.children);

      paginationDots.forEach((dot, index) => {
        if (index >= maxVisibleDots) {
          dot.style.display = "none";
        }
      });

      const svgDots = document.createElement("div");
      svgDots.innerHTML = `<svg width="5" height="23" viewBox="0 0 4 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="23" width="3" height="4" rx="1" transform="rotate(-90 0 23)" fill="white" fill-opacity="0.3"/>
      <rect y="19" width="3" height="4" rx="1" transform="rotate(-90 0 19)" fill="white" fill-opacity="0.3"/>
      <rect y="15" width="3" height="4" rx="1" transform="rotate(-90 0 15)" fill="white" fill-opacity="0.3"/>
      <rect y="11" width="3" height="4" rx="1" transform="rotate(-90 0 11)" fill="white" fill-opacity="0.3"/>
      <rect y="11" width="3" height="4" rx="1" transform="rotate(-90 0 3)" fill="white" fill-opacity="0.3"/>
      </svg>
      `;
      paginationContainer.appendChild(svgDots);
    },
  },
});

swiper.on("slideChange", function () {
  const activeSlideIndex = swiper.realIndex;
  const paginationContainer = document.querySelector(".swiper-pagination");
  const maxVisibleDots = 5;

  if (activeSlideIndex >= maxVisibleDots) {
    const svgDots = paginationContainer.querySelector("svg");
    if (svgDots) {
      const rects = svgDots.querySelectorAll("rect");
      rects.forEach((rect, index) => {
        if (index < maxVisibleDots) {
          rect.style.fill = "#0884f7";
          rect.style.fillOpacity="1";
        }
      });
    }
  } else {
    const svgDots = paginationContainer.querySelector("svg");
    if (svgDots) {
      const rects = svgDots.querySelectorAll("rect");
      rects.forEach((rect, index) => {
        rect.style.fill = "white";
        rect.style.fillOpacity="0.3";
      });
    }
  }
});
