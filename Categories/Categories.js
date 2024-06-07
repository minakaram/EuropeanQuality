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

  $("#search-icon-absolute").click(function(event) {
    event.stopPropagation(); // Prevent click event from reaching document level
    $(".search-absolute-box").fadeToggle();
    $("#search-icon-nav").show();
  });

  // Hide search box when clicking outside .navbar-search-box
  $(document).click(function(event) {
    if (!$(event.target).closest('.navbar-search-box').length) {
      $(".search-absolute-box").fadeOut();
      $("#search-icon-nav").show();
    }
  });
});



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
const navigationMenuDropdown = document.getElementById("navigation-menu-dropdown");

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
  

// swapping between rows and cards -------------------------------------------------------------------------

const categoriesCards = document.querySelector(".categories-cards-container");
const categoriesRows = document.querySelector(".categories-rows-container");

const cardsBtn = document.querySelector(".cards-svgs");
const rowsBtn = document.querySelector(".rows-svgs");

const cardsSvgOn = document.querySelector(".cards-on");
const cardSvgOff = document.querySelector(".cards-off");

const rowsSvgOn = document.querySelector(".rows-on");
const rowsSvgOff = document.querySelector(".rows-off");

// Initialize the display state
categoriesCards.style.display = "flex";
categoriesRows.style.display = "none";


categoriesCards.classList.add('active');
categoriesRows.classList.remove('active');


// Event listener for rows button
rowsBtn.addEventListener("click", () => {
  categoriesCards.style.display = "none";
  categoriesRows.style.display = "flex";

  cardsSvgOn.style.opacity = "0";
  cardSvgOff.style.opacity = "1";
  rowsSvgOn.style.opacity = "1";
  rowsSvgOff.style.opacity = "0";

  categoriesCards.classList.remove('active');
  categoriesRows.classList.add('active');
});

// Event listener for cards button
cardsBtn.addEventListener("click", () => {
  categoriesCards.style.display = "flex";
  categoriesRows.style.display = "none";

  cardsSvgOn.style.opacity = "1";
  cardSvgOff.style.opacity = "0";
  rowsSvgOn.style.opacity = "0";
  rowsSvgOff.style.opacity = "1";

  categoriesCards.classList.add('active');
  categoriesRows.classList.remove('active');
});


