// js/astronomy.js

document.addEventListener("DOMContentLoaded", () => {
  const features = [
    {
      id: "pilares",
      titulo: "Foto astronómica del día",
      imagen: {
        src: "images/Webb_s_portrait_of_the_Pillars_of_Creation_NIRCam_5.jpg",
        alt: "Pilares de la Creación",
      },
      subtitulo: "Pilares de la Creación",
      descripcion: `Los Pilares de la Creación son una región icónica dentro de la
Nebulosa del Águila, ubicada a unos 6,500 años luz de la
Tierra en la constelación de Serpens. Esta estructura cósmica,
famosa por las impresionantes imágenes capturadas por el
telescopio Hubble y más recientemente por el telescopio James
Webb, es esencialmente una gigantesca nube de gas y polvo
interestelar donde nacen nuevas estrellas.`,
    },
    {
      id: "halley",
      titulo: "Asteroides cercanos a la Tierra",
      imagen: {
        src: "images/Cometa_Halley.jpg",
        alt: "Cometa Halley",
      },
      subtitulo: "Cometa Halley",
      descripcion: `El Cometa Halley es uno de los cometas más famosos y
brillantes que se hacen visibles desde la Tierra a simple
vista. Su nombre oficial es 1P/Halley, donde "1P" indica que
fue el primer cometa periódico identificado.
La Tierra atraviesa dos corrientes de escombros dejadas por el
Cometa Halley en su órbita, lo que provoca dos lluvias de
meteoros anuales: las Eta Acuáridas en mayo y las Oriónidas en
octubre.`,
    },
    {
      id: "kepler",
      titulo: "Archivo de Exoplanetas de la NASA",
      imagen: {
        src: "images/150723163303_sp_kepler-452b__624x351_nasa.jpg.webp",
        alt: "Kepler-452b",
      },
      subtitulo: "Kepler-452b",
      descripcion: `El exoplaneta Kepler-452b fue el primer planeta de tamaño
cercano a la Tierra descubierto orbitando dentro de la zona
habitable de una estrella muy similar a nuestro Sol. Fue
anunciado por la NASA el 23 de julio de 2015, basándose en
datos del telescopio espacial Kepler.
Debido a su tamaño, órbita dentro de la zona habitable y la
similitud de su estrella con el Sol, Kepler-452b generó gran
interés como un posible candidato para albergar vida.`,
    },
    {
      id: "tormentas",
      titulo: "Meteorología del espacio",
      imagen: {
        src: "images/earth-mag-field.webp",
        alt: "Tormentas Solares",
      },
      subtitulo: "Tormentas Solares",
      descripcion: `Las tormentas solares son perturbaciones en la atmósfera del
Sol que pueden liberar enormes cantidades de energía en forma
de radiación electromagnética, partículas energéticas y
eyecciones de masa coronal (EMC). Estos eventos pueden tener
un impacto significativo en la Tierra y en el espacio cercano.
La interacción de las partículas energéticas con la atmósfera
terrestre cerca de los polos magnéticos crea las
espectaculares auroras boreales y australes.`,
    },
  ];

  const container = document.getElementById("featuresContainer");

  features.forEach((feature) => {
    // <article class="feature">
    const article = document.createElement("article");
    article.className = "feature";
    article.dataset.id = feature.id;

    // <h2>
    const h2 = document.createElement("h2");
    h2.textContent = feature.titulo;

    // <hr>
    const hr = document.createElement("hr");

    // <div class="card">
    const card = document.createElement("div");
    card.className = "card";

    // <a href="..." target="_blank">
    const a = document.createElement("a");
    a.href = feature.imagen.src;
    a.target = "_blank";

    // <img class="card-img" src="..." alt="...">
    const img = document.createElement("img");
    img.className = "card-img";
    img.src = feature.imagen.src;
    img.alt = feature.imagen.alt;

    a.appendChild(img);

    // <div class="card-container">
    const cardContainer = document.createElement("div");
    cardContainer.className = "card-container";

    const h3 = document.createElement("h3");
    h3.textContent = feature.subtitulo;

    const p = document.createElement("p");
    p.textContent = feature.descripcion;

    // Estructura final
    cardContainer.appendChild(h3);
    cardContainer.appendChild(p);

    card.appendChild(a);
    card.appendChild(cardContainer);

    article.appendChild(h2);
    article.appendChild(hr);
    article.appendChild(card);

    container.appendChild(article);
  });
});
