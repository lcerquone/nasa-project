document.addEventListener("DOMContentLoaded", () => {
  renderEstacionEspacial();
});

function renderEstacionEspacial() {
  const section = document.getElementById("estacion-espacial");

  const overlay = document.createElement("div");
  overlay.className = "overlay";

  const contentBox = document.createElement("div");
  contentBox.className = "content-box";

  const title = document.createElement("h2");
  title.textContent = "Recorre la estación espacial en español";

  const paragraph = document.createElement("p");
  paragraph.textContent =
    "El astronauta de la NASA Frank Rubio, que batió récords, ofrece el primer recorrido en video en español de la agencia por el hogar de la humanidad en el espacio – la Estación Espacial Internacional.";

  const link = document.createElement("a");
  link.href =
    "https://plus.nasa.gov/video/un-tour-de-la-estacion-espacial-con-el-astronauta-frank-rubio/";
  link.className = "tour-button";
  link.target = "_blank";
  link.textContent = "Explorar la estacion";

  // Ensamblar
  contentBox.appendChild(title);
  contentBox.appendChild(paragraph);
  contentBox.appendChild(link);

  overlay.appendChild(contentBox);
  section.appendChild(overlay);
}
