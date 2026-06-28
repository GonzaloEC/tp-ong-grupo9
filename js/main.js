// Modo Oscuro
const boton = document.getElementById("btn-modo");
boton.addEventListener("click", () => {
    document.body.classList.toggle("oscuro");
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