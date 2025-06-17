document.addEventListener("DOMContentLoaded", () => {
  const heroSection = document.querySelector(".hero");
  const changeBtn = document.getElementById("changeBackgroundBtn");

  const images = [
    "url(images/mars-2051748_640.png)",
    "url(images/tierra.jpg)",
    "url(images/supernova.jpg)",
  ];
  let currentIndex = 0;

  changeBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    heroSection.style.backgroundImage = `linear-gradient(
      to top,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.6)
    ), ${images[currentIndex]}`;
  });

  changeBtn.style.position = "absolute";
  changeBtn.style.bottom = "1rem";
  changeBtn.style.right = "1rem";
  changeBtn.style.padding = "0.5rem 0.5rem";
  changeBtn.style.fontSize = "1.5rem";
  changeBtn.style.border = "none";
  changeBtn.style.borderRadius = "30%";
  changeBtn.style.backgroundColor = "#ffff";
  changeBtn.style.color = "#333";
  changeBtn.style.cursor = "pointer";
  changeBtn.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
  changeBtn.style.zIndex = "10";

  // Hover
  changeBtn.addEventListener("mouseover", () => {
    changeBtn.style.backgroundColor = "#ddeeff";
    changeBtn.style.transform = "scale(1.1)";
  });

  changeBtn.addEventListener("mouseout", () => {
    changeBtn.style.backgroundColor = "#ffffff";
    changeBtn.style.transform = "scale(1)";
  });

  // Active
  changeBtn.addEventListener("mousedown", () => {
    changeBtn.style.transform = "scale(0.95)";
    changeBtn.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";
  });

  changeBtn.addEventListener("mouseup", () => {
    changeBtn.style.transform = "scale(1.1)";
    changeBtn.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
  });
});
