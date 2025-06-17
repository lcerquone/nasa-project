// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  // --- Data for Carousel Images ---
  // You can easily add, remove, or change images here
  const carouselImages = [
    {
      src: "images/saturno.jpg",
      alt: "Saturno con sus anillos",
    },
    {
      src: "images/mars.jpg",
      alt: "Marte y sus polos con agua congelada",
    },
    {
      src: "images/jupiter.jpg",
      alt: "Jupiter",
    },
  ];

  // --- Select DOM elements ---
  const carouselInner = document.querySelector(".carousel-inner");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  // --- State variables ---
  let currentIndex = 0;
  const totalItems = carouselImages.length;

  // --- Functions ---

  /**
   * Creates and inserts carousel items into the DOM based on the carouselImages array.
   */
  function createCarouselItems() {
    // Clear any static content first
    carouselInner.innerHTML = ''; 
    
    // Create and append each carousel item
    carouselImages.forEach(imageData => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "carousel-item";
      
      const img = document.createElement("img");
      img.src = imageData.src;
      img.alt = imageData.alt;
      
      itemDiv.appendChild(img);
      carouselInner.appendChild(itemDiv);
    });
  }

  /**
   * Updates the carousel's position to show the correct image.
   * This is based on `currentIndex` and applies a CSS transform.
   */
  function updateCarousel() {
    const offset = -currentIndex * 100; // Multiplies by -100% to move left
    carouselInner.style.transform = `translateX(${offset}%)`;
    updateControls(); // Updates the state of the buttons (disable/enable)
  }

  /**
   * Enables or disables navigation buttons (prev/next)
   * based on whether the carousel is at the beginning or end.
   */
  function updateControls() {
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === totalItems - 1;
  }

  /**
   * Handles the click on the 'next' button.
   * Increments `currentIndex` and updates the carousel.
   */
  function handleNextClick() {
    if (currentIndex < totalItems - 1) {
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
      currentIndex--;
      updateCarousel();
    }
  }

  // --- Initialization ---

  // Assign event listeners to the buttons
  nextBtn.addEventListener("click", handleNextClick);
  prevBtn.addEventListener("click", handlePrevClick);

  // Create the dynamic content
  createCarouselItems();
  
  // Set the initial state of the carousel
  updateCarousel();
});
