const misiones = [
  {
    id: "apollo11",
    href: "https://www.nasa.gov/mission/apollo-11/",
    title: "Apollo 11",
    imgSrc: "images/apolo-11.jpg",
    imgAlt: "Apollo 11",
    description:
      "La histórica misión de 1969 que llevó a los primeros humanos a la Luna. Neil Armstrong y Buzz Aldrin caminaron sobre la superficie lunar.",
  },
  {
    id: "curiosity",
    href: "https://science.nasa.gov/mission/msl-curiosity/",
    title: "Curiosity",
    imgSrc: "images/rover.jpg",
    imgAlt: "Rover Curiosity",
    description:
      "El rover de la NASA que explora Marte desde 2012, estudiando la geología y buscando señales de vida pasada en el planeta rojo.",
  },
  {
    id: "juno",
    href: "https://science.nasa.gov/mission/juno/",
    title: "Juno",
    imgSrc: "images/juno.jpg",
    imgAlt: "Juno",
    description:
      "Misión lanzada en 2011 para estudiar Júpiter: su composición, campo gravitacional, magnético y auroras, desde una órbita polar.",
  },
];

function renderMisiones() {
  const section = document.getElementById("misiones");
  if (!section) return;

  const flexContainer = section.querySelector(".flex-container");
  if (!flexContainer) return;

  misiones.forEach((mision) => {
    // <a> con clase y href
    const a = document.createElement("a");
    a.className = "flex-card";
    a.href = mision.href;
    a.target = "_blank";

    // <article>
    const article = document.createElement("article");

    // <h3>
    const h3 = document.createElement("h3");
    h3.textContent = mision.title;

    // <hr>
    const hr = document.createElement("hr");

    // <img>
    const img = document.createElement("img");
    img.src = mision.imgSrc;
    img.alt = mision.imgAlt;

    // <p>
    const p = document.createElement("p");
    p.textContent = mision.description;

    // Armar la estructura
    article.appendChild(h3);
    article.appendChild(hr);
    article.appendChild(img);
    article.appendChild(p);

    a.appendChild(article);
    flexContainer.appendChild(a);
  });
}

// Ejecutar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  renderMisiones();
});
