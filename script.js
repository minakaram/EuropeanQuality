window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navigation-bar");
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;

  if (scrolled > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const swiper1 = new Swiper(".mySwiper", {
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
      const paginationContainer = document.querySelector(
        ".hero-section .swiper-pagination"
      ); // Updated selector
      const maxVisibleDots = 5;

      // Get all child elements of the pagination container
      const paginationDots = Array.from(paginationContainer.children);

      // Hide pagination dots if they exceed the maxVisibleDots count
      paginationDots.forEach((dot, index) => {
        if (index >= maxVisibleDots) {
          dot.style.display = "none";
        }
      });

      // Check the number of pagination dots and append SVG only if there are more than 4
      if (paginationDots.length > 4) {
        const svgDots = document.createElement("div");
        svgDots.innerHTML = `
          <svg width="5" height="23" viewBox="0 0 4 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="23" width="3" height="4" rx="1" transform="rotate(-90 0 23)" fill="white" fill-opacity="0.3"/>
            <rect y="19" width="3" height="4" rx="1" transform="rotate(-90 0 19)" fill="white" fill-opacity="0.3"/>
            <rect y="15" width="3" height="4" rx="1" transform="rotate(-90 0 15)" fill="white" fill-opacity="0.3"/>
            <rect y="11" width="3" height="4" rx="1" transform="rotate(-90 0 11)" fill="white" fill-opacity="0.3"/>
            <rect y="11" width="3" height="4" rx="1" transform="rotate(-90 0 3)" fill="white" fill-opacity="0.3"/>
          </svg>
        `;
        paginationContainer.appendChild(svgDots);
      }
    },
  },
});

swiper1.on("slideChange", function () {
  const activeSlideIndex = swiper1.realIndex;
  const paginationContainer = document.querySelector(".swiper-pagination");
  const maxVisibleDots = 5;

  if (activeSlideIndex >= maxVisibleDots) {
    const svgDots = paginationContainer.querySelector("svg");
    if (svgDots) {
      const rects = svgDots.querySelectorAll("rect");
      rects.forEach((rect, index) => {
        if (index < maxVisibleDots) {
          rect.style.fill = "#0884f7";
          rect.style.fillOpacity = "1";
        }
      });
    }
  } else {
    const svgDots = paginationContainer.querySelector("svg");
    if (svgDots) {
      const rects = svgDots.querySelectorAll("rect");
      rects.forEach((rect, index) => {
        rect.style.fill = "white";
        rect.style.fillOpacity = "0.3";
      });
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const selectElements = document.querySelectorAll("select");

  selectElements.forEach((selectElement) => {
    selectElement.style.color = "gray"; // Initial color for all select elements

    selectElement.addEventListener("change", () => {
      if (selectElement.value === "") {
        selectElement.style.color = "black"; // Placeholder color
      }
    });
  });
});

// swiper upcomming
const mySwiper = new Swiper(".swiper-upcoming", {
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".upcoming-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-upcoming-next",
    prevEl: ".swiper-upcoming-prev",
  },
  on: {
    init: function () {
      const paginationContainer = document.querySelector(
        ".upcoming-pagination"
      ); // Updated selector
      const maxVisibleDots = 4;

      // Get all child elements of the pagination container
      const paginationDots = Array.from(paginationContainer.children);

      // Hide pagination dots if they exceed the maxVisibleDots count
      paginationDots.forEach((dot, index) => {
        if (index >= maxVisibleDots) {
          dot.style.display = "none";
        }
      });

      // Check the number of pagination dots and append SVG only if there are more than 4
      if (paginationDots.length > 4) {
        const svgDots = document.createElement("p");
        // svgDots.style.backgroundColor="#4c555d"
        svgDots.style.paddingBottom = "4px";
        svgDots.style.marginLeft = "2px";
        svgDots.innerHTML = `
        <svg width="23" height="4" viewBox="0 0 23 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="3" height="4" rx="1" fill="white" fill-opacity="0.3"/>
        <rect x="4" width="3" height="4" rx="1" fill="white" fill-opacity="0.3"/>
        <rect x="8" width="3" height="4" rx="1" fill="white" fill-opacity="0.3"/>
        <rect x="12" width="3" height="4" rx="1" fill="white" fill-opacity="0.3"/>
        <rect x="16" width="3" height="4" rx="1" fill="white" fill-opacity="0.3"/>
        <rect x="20" width="3" height="4" rx="1" fill="white" fill-opacity="0.3"/>
        </svg>
        
        `;
        paginationContainer.appendChild(svgDots);
      }
    },
  },

  breakpoints: {
    1025: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 1,
      spaceBetween: 70,
    },
  },
});

mySwiper.on("slideChange", function () {
  const activeSlideIndex = mySwiper.realIndex;
  const paginationContainer = document.querySelector(".upcoming-pagination");
  const maxVisibleDots = 4;

  if (activeSlideIndex >= maxVisibleDots) {
    const svgDots = paginationContainer.querySelector("svg");
    if (svgDots) {
      const rects = svgDots.querySelectorAll("rect");
      rects.forEach((rect, index) => {
        rect.style.fill = "#0884F7";
        rect.style.fillOpacity = "1";
      });
    }
  } else {
    const svgDots = paginationContainer.querySelector("svg");
    if (svgDots) {
      const rects = svgDots.querySelectorAll("rect");
      rects.forEach((rect, index) => {
        rect.style.fill = "#F2EDED";
        rect.style.fillOpacity = "0.3";
      });
    }
  }
});

// course categories

const categoriesSwiper = new Swiper(".swiper-categories", {
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".categories-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-categories-next",
    prevEl: ".swiper-categories-prev",
  },
  on: {
    init: function () {
      const paginationContainer = document.querySelector(
        ".categories-pagination"
      );
      const maxVisibleDots = 4;

      const paginationDots = Array.from(paginationContainer.children);

      paginationDots.forEach((dot, index) => {
        if (index >= maxVisibleDots) {
          dot.style.display = "none";
        }
      });
      if (paginationDots.length > 4) {
        const svgDots = document.createElement("p");
        svgDots.style.display = "flex";
        // svgDots.style.paddingBottom = "1px";
        svgDots.style.marginLeft = "1px";
        svgDots.innerHTML = `
        <svg width="23" height="6" viewBox="0 0 23 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="3" height="6" rx="1" fill="white" fill-opacity="0.3"/>
        <rect x="4" width="3" height="6" rx="1" fill="#cccccc" fill-opacity="1"/>
        <rect x="8" width="3" height="6" rx="1" fill="#cccccc" fill-opacity="1"/>
        <rect x="12" width="3" height="6" rx="1" fill="#cccccc" fill-opacity="1"/>
        <rect x="16" width="3" height="6" rx="1" fill="#cccccc" fill-opacity="1"/>
        <rect x="20" width="3" height="6" rx="1" fill="#cccccc" fill-opacity="1"/>
        </svg>
        
        `;
        paginationContainer.appendChild(svgDots);
      }
    },
  },

  breakpoints: {
    1025: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 1,
      spaceBetween: 70,
    },
  },
});

categoriesSwiper.on("slideChange", function () {
  const activeSlideIndex = categoriesSwiper.realIndex;
  const paginationContainer = document.querySelector(".categories-pagination");
  const maxVisibleDots = 4;

  if (activeSlideIndex >= maxVisibleDots) {
    const svgDots = paginationContainer.querySelector("svg");
    if (svgDots) {
      const rects = svgDots.querySelectorAll("rect");
      rects.forEach((rect, index) => {
        rect.style.fill = "#0884F7";
        rect.style.fillOpacity = "1";
      });
    }
  } else {
    const svgDots = paginationContainer.querySelector("svg");
    if (svgDots) {
      const rects = svgDots.querySelectorAll("rect");
      rects.forEach((rect, index) => {
        rect.style.fill = "#CCCCCC";
        rect.style.fillOpacity = "1";
      });
    }
  }
});

// top courses

const topCoursesSwiper = new Swiper(".swiper-top-courses", {
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".top-courses-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".swiper-top-courses-prev",
    nextEl: ".swiper-top-courses-next",
  },
  on: {
    init: function () {
      const paginationContainer = document.querySelector(
        ".top-courses-pagination"
      );
      const maxVisibleDots = 4;

      const paginationDots = Array.from(paginationContainer.children);

      paginationDots.forEach((dot, index) => {
        if (index >= maxVisibleDots) {
          dot.style.display = "none";
        }
      });
      if (paginationDots.length > 4) {
        const svgDots = document.createElement("div");
        svgDots.style.display = "flex";
        // svgDots.style.paddingBottom = "1px";
        svgDots.style.marginLeft = "2px";
        // svgDots.style.marginBottom ="1px !important;"
        svgDots.innerHTML = `
        <svg width="23" height="5" viewBox="0 0 23 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="3" height="5" rx="1" fill="white" fill-opacity="0.3"/>
        <rect x="4" width="3" height="5" rx="1" fill="#cccccc" fill-opacity="1"/>
        <rect x="8" width="3" height="5" rx="1" fill="#cccccc" fill-opacity="1"/>
        <rect x="12" width="3" height="5" rx="1" fill="#cccccc" fill-opacity="1"/>
        <rect x="16" width="3" height="5" rx="1" fill="#cccccc" fill-opacity="1"/>
        <rect x="20" width="3" height="5" rx="1" fill="#cccccc" fill-opacity="1"/>
        </svg>
        
        `;
        paginationContainer.appendChild(svgDots);
      }
    },
  },

  breakpoints: {
    1025: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 1,
      spaceBetween: 70,
    },
  },
});

topCoursesSwiper.on("slideChange", function () {
  const activeSlideIndex = topCoursesSwiper.realIndex;
  const paginationContainer = document.querySelector(".top-courses-pagination");
  const maxVisibleDots = 4;

  if (activeSlideIndex >= maxVisibleDots) {
    const svgDots = paginationContainer.querySelector("svg");
    if (svgDots) {
      const rects = svgDots.querySelectorAll("rect");
      rects.forEach((rect, index) => {
        rect.style.fill = "#0884F7";
        rect.style.fillOpacity = "1";
      });
    }
  } else {
    const svgDots = paginationContainer.querySelector("svg");
    if (svgDots) {
      const rects = svgDots.querySelectorAll("rect");
      rects.forEach((rect, index) => {
        rect.style.fill = "#CCCCCC";
        rect.style.fillOpacity = "1";
      });
    }
  }
});

// cities ------------------------------------------------------------
const citiesContainer = document.querySelector(".cities-container");

const handleCitiesNumber = () => {
  const cities = Array.from(citiesContainer.children);
  const maxVisibleDots = 5;

  cities.forEach((city, index) => {
    if (index >= maxVisibleDots) {
      city.style.display = "none";
    } else {
      city.style.display = "block";
    }
  });
};

const checkScreenSize = () => {
  const mediaQuery = window.matchMedia("(max-width: 767px)");

  if (mediaQuery.matches) {
    handleCitiesNumber();
  } else {
    // Reset display property if screen size is larger than 768px
    const cities = Array.from(citiesContainer.children);
    cities.forEach((city) => {
      city.style.display = "block";
    });
  }
};

// Initial check
checkScreenSize();

// Add event listener for resize
window.addEventListener("resize", checkScreenSize);
