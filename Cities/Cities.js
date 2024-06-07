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
  

  // sorting

  document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.cities-cards-container');
    const items = Array.from(container.querySelectorAll('.cities-card-item'));
    const aToZButton = document.querySelector('.a-to-z');
    const zToAButton = document.querySelector('.z-to-a');
    
    // Initial setup: make "A to Z" button active
    aToZButton.style.backgroundColor = '#e4f1fe';
    aToZButton.querySelector('path').setAttribute('fill', '#0884F7');
    zToAButton.style.backgroundColor = 'transparent';
    zToAButton.querySelector('path').setAttribute('fill', '#A1A8AE');

    function sortItems(container, items, order) {
        items.sort((a, b) => {
            const cityA = a.querySelector('.city-info p').textContent.trim();
            const cityB = b.querySelector('.city-info p').textContent.trim();

            return order === 'asc' ? cityA.localeCompare(cityB) : cityB.localeCompare(cityA);
        });

        items.forEach(item => container.appendChild(item));
    }

    function setActiveButton(activeButton, inactiveButton) {
      // Set background color and SVG fill color of active button
      activeButton.style.backgroundColor = '#e4f1fe';
      activeButton.querySelectorAll('path').forEach(path => {
          path.setAttribute('fill', '#0884F7');
      });
  
      // Reset background color and SVG fill color of inactive button
      inactiveButton.style.backgroundColor = 'transparent';
      inactiveButton.querySelectorAll('path').forEach(path => {
          path.setAttribute('fill', '#A1A8AE');
      });
  }
  

    aToZButton.addEventListener('click', function () {
        sortItems(container, items, 'asc');
        setActiveButton(aToZButton, zToAButton);
    });

    zToAButton.addEventListener('click', function () {
        sortItems(container, items, 'desc');
        setActiveButton(zToAButton, aToZButton);
    });
});
