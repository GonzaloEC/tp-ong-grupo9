// Modo Oscuro
const boton = document.getElementById("btn-modo");
boton.addEventListener("click", function () {
    document.body.classList.toggle("oscuro");
    if (boton.textContent === "☀ Modo claro") {
        boton.textContent = "🌙 Modo oscuro";
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

//
const formContacto = document.getElementById("contacto");
const msgContacto = document.getElementById("msg-contacto");

formContacto.addEventListener("click", (e) => {
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("email").value.trim();
    const tel = document.getElementById("telefono").value.trim();
    const motivo = document.getElementById("motivo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !correo || !tel || !motivo || !mensaje) {
        msgContacto.textContent = "Completa todos los campos para continuar.";
        msgContacto.className = "error";
        return;
    }

    msgContacto.textContent = `¡Gracias ${nombre}! Tu pedido ya fue recibido.`;
    msgContacto.className = "exito";
    
    formContacto.reset();
});