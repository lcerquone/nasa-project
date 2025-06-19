document.addEventListener("DOMContentLoaded", () => {
  // Datos para las imagenes del carrusel
  const carouselImages = [
    {
      src: "images/sol.jpg",
      alt: "Sol",
    },
    {
      src: "images/mercurio.jpg",
      alt: "Mercurio",
    },
    {
      src: "images/Venus.jpg",
      alt: "Venus",
    },
    {
      src: "images/Tierra-carrusel.jpg",
      alt: "La Tierra",
    },
    {
      src: "images/mars.jpg",
      alt: "Marte y sus polos con agua congelada",
    },
    {
      src: "images/jupiter.jpg",
      alt: "Jupiter",
    },
    {
      src: "images/saturno.jpg",
      alt: "Saturno con sus anillos",
    },
    {
      src: "images/Urano.jpg",
      alt: "Urano",
    },
    {
      src: "images/Neptuno.jpg",
      alt: "Neptuno",
    },
  ];

  /*DOM*/
  const carouselInner = document.querySelector(".carousel-inner");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentIndex = 0;
  const totalItems = carouselImages.length;

  function createCarouselItems() {
    carouselInner.innerHTML = "";

    carouselImages.forEach((imageData) => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "carousel-item";

      const img = document.createElement("img");
      img.src = imageData.src;
      img.alt = imageData.alt;

      itemDiv.appendChild(img);
      carouselInner.appendChild(itemDiv);
    });
  }

  
  function updateCarousel() {
    const offset = -currentIndex * 100; // Multiplicar por -100% para mover a la izquierda
    carouselInner.style.transform = `translateX(${offset}%)`;
    updateControls(); // Actualiza el estado del boton
  }

  /* Activa o desactiva los botones */
  function updateControls() {
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === totalItems - 1;
  }

  function handleNextClick() {
    if (currentIndex < totalItems - 1) {
      currentIndex++;
      updateCarousel();
    }
  }

  function handlePrevClick() {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  }

  // Inicializacion

  nextBtn.addEventListener("click", handleNextClick);
  prevBtn.addEventListener("click", handlePrevClick);

  createCarouselItems();

  updateCarousel();
});
