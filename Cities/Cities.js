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

// sorting cards -------------------------------------------------------------------------------------

// document.addEventListener("DOMContentLoaded", function () {
//   const container = document.querySelector(".cities-cards-container");
//   const items = Array.from(container.querySelectorAll(".cities-card-item"));
//   const aToZButton = document.querySelector(".a-to-z");
//   const zToAButton = document.querySelector(".z-to-a");

//   // Initial setup: make "A to Z" button active
//   setActiveButton(aToZButton, zToAButton);

//   function sortItems(container, items, order) {
//     // Remove the active class to reset animation
//     container.classList.remove("active");

//     // Sort items
//     items.sort((a, b) => {
//       const cityA = a.querySelector(".city-info p").textContent.trim();
//       const cityB = b.querySelector(".city-info p").textContent.trim();

//       return order === "asc"
//         ? cityA.localeCompare(cityB)
//         : cityB.localeCompare(cityA);
//     });

//     // Append sorted items back to the container
//     items.forEach((item) => container.appendChild(item));

//     // Re-add the active class to trigger the animation
//     requestAnimationFrame(() => {
//       container.classList.add("active");
//     });
//   }

//   function setActiveButton(activeButton, inactiveButton) {
//     // Set background color and SVG fill color of active button
//     activeButton.style.backgroundColor = "#e4f1fe";
//     activeButton.querySelectorAll("path").forEach((path) => {
//       path.setAttribute("fill", "#0884F7");
//     });

//     // Reset background color and SVG fill color of inactive button
//     inactiveButton.style.backgroundColor = "transparent";
//     inactiveButton.querySelectorAll("path").forEach((path) => {
//       path.setAttribute("fill", "#A1A8AE");
//     });
//   }

//   aToZButton.addEventListener("click", function () {
//     sortItems(container, items, "asc");
//     setActiveButton(aToZButton, zToAButton);
//   });

//   zToAButton.addEventListener("click", function () {
//     sortItems(container, items, "desc");
//     setActiveButton(zToAButton, aToZButton);
//   });
// });


// sorting rows --------------------------------------------------------------------------------------
// document.addEventListener("DOMContentLoaded", function () {
//   const container = document.querySelector(".cities-rows-container");
//   const items = Array.from(container.querySelectorAll(".cities-rows-item"));
//   const aToZButton = document.querySelector(".a-to-z-rows");
//   const zToAButton = document.querySelector(".z-to-a-rows");

//   // Initial setup: make "A to Z" button active
//   setActiveButton(aToZButton, zToAButton);

//   function sortItems(container, items, order) {
//     // Remove the active class to reset animation
//     container.classList.remove("active");

//     // Sort items
//     items.sort((a, b) => {
//       const cityA = a.querySelector(".row-city-name").textContent.trim();
//       const cityB = b.querySelector(".row-city-name").textContent.trim();

//       return order === "asc"
//         ? cityA.localeCompare(cityB)
//         : cityB.localeCompare(cityA);
//     });

//     // Append sorted items back to the container
//     items.forEach((item) => container.appendChild(item));

//     // Re-add the active class to trigger the animation
//     requestAnimationFrame(() => {
//       container.classList.add("active");
//     });
//   }

//   function setActiveButton(activeButton, inactiveButton) {
//     // Set background color and SVG fill color of active button
//     activeButton.style.backgroundColor = "#e4f1fe";
//     activeButton.querySelectorAll("path").forEach((path) => {
//       path.setAttribute("fill", "#0884F7");
//     });

//     // Reset background color and SVG fill color of inactive button
//     inactiveButton.style.backgroundColor = "transparent";
//     inactiveButton.querySelectorAll("path").forEach((path) => {
//       path.setAttribute("fill", "#A1A8AE");
//     });
//   }

//   aToZButton.addEventListener("click", function () {
//     sortItems(container, items, "asc");
//     setActiveButton(aToZButton, zToAButton);
//   });

//   zToAButton.addEventListener("click", function () {
//     sortItems(container, items, "desc");
//     setActiveButton(zToAButton, aToZButton);
//   });
// });


document.addEventListener("DOMContentLoaded", function () {
  const sortButtons = [
    { containerSelector: ".cities-rows-container", itemSelector: ".cities-rows-item", buttonSelectors: [".a-to-z-rows", ".z-to-a-rows"], textSelector: ".row-city-name" },
    { containerSelector: ".cities-cards-container", itemSelector: ".cities-card-item", buttonSelectors: [".a-to-z", ".z-to-a"], textSelector: ".city-info p" }
  ];

  sortButtons.forEach(config => {
    const container = document.querySelector(config.containerSelector);
    const items = Array.from(container.querySelectorAll(config.itemSelector));
    const [aToZButton, zToAButton] = config.buttonSelectors.map(selector => document.querySelector(selector));

    // Initial setup: make "A to Z" button active
    setActiveButton(aToZButton, zToAButton);

    aToZButton.addEventListener("click", function () {
      sortItems(container, items, config.textSelector, "asc");
      setActiveButton(aToZButton, zToAButton);
    });

    zToAButton.addEventListener("click", function () {
      sortItems(container, items, config.textSelector, "desc");
      setActiveButton(zToAButton, aToZButton);
    });
  });

  function sortItems(container, items, textSelector, order) {
    // Remove the active class to reset animation
    container.classList.remove("active");

    // Sort items
    items.sort((a, b) => {
      const cityA = a.querySelector(textSelector).textContent.trim();
      const cityB = b.querySelector(textSelector).textContent.trim();

      return order === "asc" ? cityA.localeCompare(cityB) : cityB.localeCompare(cityA);
    });

    // Append sorted items back to the container
    items.forEach(item => container.appendChild(item));

    // Re-add the active class to trigger the animation
    requestAnimationFrame(() => {
      container.classList.add("active");
    });
  }

  function setActiveButton(activeButton, inactiveButton) {
    // Set background color and SVG fill color of active button
    activeButton.style.backgroundColor = "#e4f1fe";
    activeButton.querySelectorAll("path").forEach(path => {
      path.setAttribute("fill", "#0884F7");
    });

    // Reset background color and SVG fill color of inactive button
    inactiveButton.style.backgroundColor = "transparent";
    inactiveButton.querySelectorAll("path").forEach(path => {
      path.setAttribute("fill", "#A1A8AE");
    });
  }
});

// switching -------------------------------------------------------------------------------------
const citiesCards = document.querySelector(".cities-cards-container");
const citiesRows = document.querySelector(".cities-rows-container");

const cardsBtn = document.querySelector(".cards-svgs");
const rowsBtn = document.querySelector(".rows-svgs");

const cardsSvgOn = document.querySelector(".cards-on");
const cardSvgOff = document.querySelector(".cards-off");

const rowsSvgOn = document.querySelector(".rows-on");
const rowsSvgOff = document.querySelector(".rows-off");

const cardsSort = document.querySelector(".cards-sorting-btns");
const rowsSort = document.querySelector(".rows-sorting-btns");

citiesCards.style.display = "flex";
citiesRows.style.display = "none";

citiesCards.classList.add("active");
citiesRows.classList.remove("active");

rowsBtn.addEventListener("click", () => {
  citiesCards.style.display = "none";
  citiesRows.style.display = "flex";
  rowsSort.style.display = "flex";
  cardsSort.style.display = "none";

  cardsSvgOn.style.opacity = "0";
  cardSvgOff.style.opacity = "1";
  rowsSvgOn.style.opacity = "1";
  rowsSvgOff.style.opacity = "0";

  citiesCards.classList.remove("active");
  citiesRows.classList.add("active");
});
cardsSort.style.visibility = "visible";
// Event listener for cards button
cardsBtn.addEventListener("click", () => {
  citiesCards.style.display = "flex";
  citiesRows.style.display = "none";
  cardsSort.style.display = "flex";
  rowsSort.style.display= "none";
  cardsSvgOn.style.opacity = "1";
  cardSvgOff.style.opacity = "0";
  rowsSvgOn.style.opacity = "0";
  rowsSvgOff.style.opacity = "1";

  citiesCards.classList.add("active");
  citiesRows.classList.remove("active");
});
