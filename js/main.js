// Modo Oscuro
const boton = document.getElementById("btn-modo");
boton.addEventListener("click", function (e) {
    document.body.classList.toggle("oscuro");
    if (boton.textContent === "☀ Modo claro") {
        boton.textContent = "🌙🌙 Modo oscuro";
    }
    else {
        boton.textContent = "☀ Modo claro";
    }
});

//
const botonColaborar = document.querySelector(".inicio-btn");
const seccionAyuda = document.getElementById("como-ayudar-index");


const botonProgramas = document.querySelector(".btn-programas");

botonColaborar.addEventListener('click', function (e) {
    e.preventDefault()
    seccionAyuda.scrollIntoView({ behavior: 'smooth' })
});

botonProgramas.addEventListener('click', function () {
    window.location.href = 'programas.html'
});