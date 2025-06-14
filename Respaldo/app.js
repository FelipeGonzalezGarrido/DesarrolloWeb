document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nombre = form.querySelector('input[type="text"]');
    const email = form.querySelector('input[type="email"]');
    const tipo = form.querySelector('select');
    const mensaje = form.querySelector('textarea');

    // Autocompletar el campo "Tipo de Solicitud" según el mensaje
    mensaje.addEventListener("input", function () {
        const texto = mensaje.value.toLowerCase();

        if (texto.includes("compra")) {
            tipo.value = "compra";
        } else if (texto.includes("venta")) {
            tipo.value = "venta";
        }
    });

    // Validación del formulario
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Evitar que se envíe si hay errores

        let errores = [];

        if (nombre.value.trim() === "") {
            errores.push("El campo Nombre es obligatorio.");
        }
        if (email.value.trim() === "") {
            errores.push("El campo Email es obligatorio.");
        }
        if (tipo.value === "") {
            errores.push("Debe seleccionar un tipo de solicitud.");
        }
        if (mensaje.value.trim() === "") {
            errores.push("El campo Mensaje es obligatorio.");
        }

        if (errores.length > 0) {
            alert("Errores en el formulario:\n\n" + errores.join("\n"));
        } else {
            alert("Formulario enviado con éxito. ¡Gracias por contactarnos!");
            form.reset(); // Opcional: limpia el formulario
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modalObra");
    const modalTitulo = document.getElementById("modalTitulo");
    const modalImagen = document.getElementById("modalImagen");
    const modalDescripcion = document.getElementById("modalDescripcion");
    const cerrarBtn = document.getElementById("cerrarModal");

    // Datos de ejemplo para descripción (puedes expandir esto)
const descripciones = {
    "La Mona Lisa": "Pintura renacentista de Leonardo da Vinci, creada entre 1503 y 1506.",
    "La Creacion de Adam": "Fresco de Miguel Ángel en la Capilla Sixtina, realizado alrededor de 1511.",
    "Girl with a Pearl": "Obra de Johannes Vermeer, pintada cerca de 1665.",
    "Starry Night": "Pintura de Vincent van Gogh, realizada en 1889."
};

    // Asignar comportamiento a cada imagen
    document.querySelectorAll(".imagen").forEach((divImagen) => {
        const img = divImagen.querySelector("img");
        const titulo = divImagen.querySelector(".titulo_imagen").textContent;

        // Mostrar detalles en modal al hacer clic
        img.addEventListener("click", () => {
            modalTitulo.textContent = titulo;
            modalImagen.src = img.src;
            modalDescripcion.textContent = descripciones[titulo] || "Sin descripción disponible.";
            modal.classList.remove("d-none");
        });

        // Botón eliminar
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.className = "btn btn-danger mt-2";
        btnEliminar.addEventListener("click", () => {
            divImagen.parentElement.remove(); // Elimina toda la columna
        });
        divImagen.appendChild(btnEliminar);
    });

    // Cerrar modal
    cerrarBtn.addEventListener("click", () => {
        modal.classList.add("d-none");
    });

    // Cerrar modal si se hace clic fuera del contenido
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.add("d-none");
        }
    });
});
