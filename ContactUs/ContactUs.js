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
  
  
  // search-navbar --------------------------------------------------------------------------------------------
  $(document).ready(function() {
    $("#search-icon-nav").click(function(event) {
      event.stopPropagation(); // Prevent click event from reaching document level
      $(".search-absolute-box").fadeToggle();
      $("#search-icon-nav").hide();
    });
  
    // $("#search-icon-absolute").click(function(event) {
    //   event.stopPropagation(); // Prevent click event from reaching document level
    //   $(".search-absolute-box").fadeToggle();
    //   $("#search-icon-nav").show();
    // });
  
    // Hide search box when clicking outside .navbar-search-box
    $(document).click(function(event) {
      if (!$(event.target).closest('.navbar-search-box').length) {
        $(".search-absolute-box").fadeOut();
        $("#search-icon-nav").show();
      }
    });
  });
  
  
  // dropdowns ---------------------------------------------------------------------------------
  
  // Elements for categories dropdown
  const categoriesArrow = document.getElementById("categories-dropdown-arrow");
  const categoriesDropDown = document.getElementById("categories-dropdown");
  
  // Elements for cities dropdown
  const citiesArrow = document.getElementById("cities-dropdown-arrow");
  const citiesDropDown = document.getElementById("cities-dropdown");
  
  // Ensure initial state is hidden
  categoriesDropDown.style.visibility = "hidden";
  categoriesDropDown.style.opacity = "0";
  
  citiesDropDown.style.visibility = "hidden";
  citiesDropDown.style.opacity = "0";
  
  // Toggle visibility function
  function toggleVisibility(dropdown, otherDropdown) {
    if (
      dropdown.style.visibility === "hidden" &&
      dropdown.style.opacity === "0"
    ) {
      dropdown.style.visibility = "visible";
      dropdown.style.opacity = "1";
      otherDropdown.style.visibility = "hidden";
      otherDropdown.style.opacity = "0";
    } else {
      dropdown.style.visibility = "hidden";
      dropdown.style.opacity = "0";
    }
  }
  
  // Event listener for categories arrow
  categoriesArrow.addEventListener("click", (event) => {
    event.stopPropagation();
  
    toggleVisibility(categoriesDropDown, citiesDropDown);
  });
  
  // Event listener for cities arrow
  citiesArrow.addEventListener("click", (event) => {
    event.stopPropagation();
  
    toggleVisibility(citiesDropDown, categoriesDropDown);
  });
  
  // Close dropdowns when clicking outside
  document.addEventListener("click", (event) => {
    if (
      !categoriesDropDown.contains(event.target) &&
      !categoriesArrow.contains(event.target)
    ) {
      categoriesDropDown.style.visibility = "hidden";
      categoriesDropDown.style.opacity = "0";
    }
    if (
      !citiesDropDown.contains(event.target) &&
      !citiesArrow.contains(event.target)
    ) {
      citiesDropDown.style.visibility = "hidden";
      citiesDropDown.style.opacity = "0";
    }
  });
  
  // navigation menu ----------------------------------------------------------------------------------------
  const navigationMenuBtn = document.getElementById("navigation-menu-btn");
  const navigationMenuDropdown = document.getElementById(
    "navigation-menu-dropdown"
  );
  
  navigationMenuDropdown.style.visibility = "hidden";
  navigationMenuDropdown.style.opacity = "0";
  
  navigationMenuBtn.addEventListener("click", () => {
    if (
      navigationMenuDropdown.style.visibility === "hidden" &&
      navigationMenuDropdown.style.opacity === "0"
    ) {
      navigationMenuDropdown.style.visibility = "visible";
      navigationMenuDropdown.style.opacity = "1";
      navigationMenuBtn.classList.add("rotated");
    } else {
      navigationMenuDropdown.style.visibility = "hidden";
      navigationMenuDropdown.style.opacity = "0";
      navigationMenuBtn.classList.remove("rotated");
    }
  });
  document.addEventListener("click", (event) => {
    if (
      !navigationMenuDropdown.contains(event.target) &&
      !navigationMenuBtn.contains(event.target)
    ) {
      navigationMenuDropdown.style.visibility = "hidden";
      navigationMenuDropdown.style.opacity = "0";
      navigationMenuBtn.classList.remove("rotated");
    }
  });
  
  // navigation bar scroll -----------------------------------------------------------------------------------
  window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navigation-bar");
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  
    if (scrolled > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });





  const headquarterSwiper = new Swiper(".quarters-swiper", {
    spaceBetween: 10,
  
    navigation: {
      nextEl: ".headquarter-button-next",
      prevEl: ".headquarter-button-prev",
    },
    breakpoints: {
      768: {
        direction: "vertical",
        loop: true,
        pagination: {
          el: ".headquarter-pagination",
          clickable: true,
        },
      },
      320: {
        direction: "horizontal",
        loop: true,
        pagination: {
          el: ".quarter-pagination",
          clickable: true,
        },
        // slidesPerView: 1,
        centeredSlides: true,
      },
    },
    on: {
      init: function () {
        const paginationContainer = document.querySelector(
          ".headquarter-pagination"
        );
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
          if (window.matchMedia("(min-width: 768px)").matches) {
            const svgDots = document.createElement("p");
            svgDots.style.marginTop = "-9px";
            svgDots.style.marginLeft = "0";
            svgDots.innerHTML = `
              <svg width="5" height="25" viewBox="0 0 4 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="23" width="3" height="6" rx="1" transform="rotate(-90 0 23)" fill="#CFCFCF" fill-opacity="1"/>
                <rect y="19" width="3" height="6" rx="1" transform="rotate(-90 0 19)" fill="#CFCFCF" fill-opacity="1"/>
                <rect y="15" width="3" height="6" rx="1" transform="rotate(-90 0 15)" fill="#CFCFCF" fill-opacity="1"/>
                <rect y="11" width="3" height="6" rx="1" transform="rotate(-90 0 11)" fill="#CFCFCF" fill-opacity="1"/>
                <rect y="11" width="3" height="6" rx="1" transform="rotate(-90 0 3)" fill="#CFCFCF" fill-opacity="1"/>
              </svg>
            `;
            paginationContainer.appendChild(svgDots);
          } else if (window.matchMedia("(max-width: 767px)").matches) {
            const svgDots = document.createElement("p");
            svgDots.style.display = "flex";
            svgDots.style.marginLeft = "2px";
            svgDots.innerHTML = `
            <svg width="23" height="5" viewBox="0 0 23 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="3" height="5" rx="1" fill="white" fill-opacity="0.3"/>
            <rect x="4" width="3" height="5" rx="1" fill="white" fill-opacity="0.3"/>
            <rect x="8" width="3" height="5" rx="1" fill="white" fill-opacity="0.3"/>
            <rect x="12" width="3" height="5" rx="1" fill="white" fill-opacity="0.3"/>
            <rect x="16" width="3" height="5" rx="1" fill="white" fill-opacity="0.3"/>
            <rect x="20" width="3" height="5" rx="1" fill="white" fill-opacity="0.3"/>
            </svg>
            `;
            paginationContainer.appendChild(svgDots);
          }
        }
      },
    },
  });
  
  headquarterSwiper.on("slideChange", function () {
    const activeSlideIndex = headquarterSwiper.realIndex;
    const paginationContainer = document.querySelector(".headquarter-pagination");
    const maxVisibleDots = 4;
  
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
          rect.style.fill = "#CFCFCF";
          rect.style.fillOpacity = "1";
        });
      }
    }
  });