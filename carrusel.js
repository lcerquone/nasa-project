// Select DOM elements
const carouselInner = document.querySelector(".carousel-inner");
const carouselItems = document.querySelectorAll(".carousel-item");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Calculate total number of items
const totalItems = carouselItems.length;
// Initialize current image index
let currentIndex = 0;

/**
 * Updates the carousel position to show the correct image.
 * It's based on `currentIndex` and applies a CSS transform.
 */
function updateCarousel() {
  // Calculates the necessary offset to display the current image
  const offset = -currentIndex * 100; // Multiplies by -100% to move left
  carouselInner.style.transform = `translateX(${offset}%)`;
  updateControls(); // Updates the state of buttons (disable/enable)
}

/**
 * Enables or disables navigation buttons (prev/next)
 * based on whether the start or end of the carousel has been reached.
 */
function updateControls() {
  // Disables 'previous' button if we are at the first image
  prevBtn.disabled = currentIndex === 0;
  // Disables 'next' button if we are at the last image
  nextBtn.disabled = currentIndex === totalItems - 1;
}

/**
 * Handles the click on the 'next' button.
 * Increments `currentIndex` and updates the carousel.
 */
function handleNextClick() {
  if (currentIndex < totalItems - 1) {
    // Ensures it doesn't exceed image limit
    currentIndex++;
    updateCarousel();
  }
}

/**
 * Handles the click on the 'previous' button.
 * Decrements `currentIndex` and updates the carousel.
 */
function handlePrevClick() {
  if (currentIndex > 0) {
    // Ensures it doesn't go below the first image
    currentIndex--;
    updateCarousel();
  }
}

// Assign event listeners to buttons
nextBtn.addEventListener("click", handleNextClick);
prevBtn.addEventListener("click", handlePrevClick);

// Initialize the carousel when the page loads
document.addEventListener("DOMContentLoaded", updateCarousel);
