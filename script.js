 // Verificar si es la primera vez que entra
    window.onload = function() {
      if (!localStorage.getItem("avisoResponsiveMostrado")) {
        alert("⚠️ Este sitio web no es responsive. Te recomiendo abrirlo desde una computadora 💻");
        localStorage.setItem("avisoResponsiveMostrado", "true");
      }
    };

    document.addEventListener("DOMContentLoaded", () => {
    const titulo = document.querySelector("h1");
    const texto = "Henrry Torres";
    titulo.textContent = "";
    let i = 0;
    function escribir() {
      if (i < texto.length) {
        titulo.textContent += texto[i];
        i++;
        setTimeout(escribir, 120);
      }
    }
    escribir();

    
  });

  



