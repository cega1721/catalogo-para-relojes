
// ========================================
// CATÁLOGO DE RELOJES
// ========================================

const relojes = [

    {
        id: 1,
        nombre: "Classic Black",
        referencia: "RB-001",
        categoria: "hombre",
        tipo: "Clásico",
        precio: 189000,
        imagen:
            "assets/img/relojeria-para-caballero/reloj-para-hombre-14.jpeg",
        descripcion:
            "Reloj clásico de diseño elegante, ideal para uso diario y ocasiones especiales.",
        caracteristicas: [
            "Correa de cuero",
            "Caja de acero",
            "Resistente a salpicaduras"
        ]
    },

    {
        id: 2,
        nombre: "Silver Edition",
        referencia: "RB-002",
        categoria: "elegante",
        tipo: "Elegante",
        precio: 245000,
        imagen:
            "assets/img/relojeria-para-caballero/reloj-para-hombre-2.jpeg",
        descripcion:
            "Un diseño elegante pensado para quienes buscan un estilo sofisticado.",
        caracteristicas: [
            "Caja metálica",
            "Correa de acero",
            "Cristal resistente"
        ]
    },

    {
        id: 3,
        nombre: "Sport Pro",
        referencia: "RB-003",
        categoria: "deportivo",
        tipo: "Deportivo",
        precio: 159000,
        imagen:
            "assets/img/relojeria-para-caballero/reloj-para-hombre-32.jpeg",
        descripcion:
            "Reloj deportivo pensado para acompañarte durante tus actividades.",
        caracteristicas: [
            "Correa deportiva",
            "Diseño resistente",
            "Cronómetro"
        ]
    },

    {
        id: 4,
        nombre: "Lady Gold",
        referencia: "RB-004",
        categoria: "mujer",
        tipo: "Femenino",
        precio: 219000,
        imagen:
            "assets/img/relojeria-para-dama/reloj-para-dama-1.jpeg",
        descripcion:
            "Diseño delicado y elegante para complementar cualquier estilo.",
        caracteristicas: [
            "Diseño femenino",
            "Correa metálica",
            "Acabado dorado"
        ]
    },

    {
        id: 5,
        nombre: "Urban Steel",
        referencia: "RB-005",
        categoria: "hombre",
        tipo: "Casual",
        precio: 199000,
        imagen:
            "assets/img/relojeria-para-caballero/reloj-para-hombre-21.jpeg",
        descripcion:
            "Un reloj urbano con diseño moderno para el día a día.",
        caracteristicas: [
            "Caja de acero",
            "Diseño urbano",
            "Correa metálica"
        ]
    },

    {
        id: 6,
        nombre: "Premium Gold",
        referencia: "RB-006",
        categoria: "elegante",
        tipo: "Premium",
        precio: 349000,
        imagen:
            "assets/img/relojeria-para-caballero/reloj-para-hombre-38.jpeg",
        descripcion:
            "Modelo premium con un acabado sofisticado y una presencia destacada.",
        caracteristicas: [
            "Acabado premium",
            "Caja metálica",
            "Diseño sofisticado"
        ]
    }

];


// ========================================
// ELEMENTOS DEL DOM
// ========================================

const contenedorProductos =
    document.getElementById("contenedorProductos");

const inputBusqueda =
    document.getElementById("inputBusqueda");

const filtros =
    document.getElementById("filtros");

const sinResultados =
    document.getElementById("sinResultados");

const modalProducto =
    document.getElementById("modalProducto");

const cerrarModal =
    document.getElementById("cerrarModal");

const detalleProducto =
    document.getElementById("detalleProducto");

const contadorFavoritos =
    document.getElementById("contadorFavoritos");


// ========================================
// ELEMENTOS DEL CARRUSEL
// ========================================

const carruselImagen =
    document.getElementById("carruselImagen");

const carruselCategoria =
    document.getElementById("carruselCategoria");

const carruselNombre =
    document.getElementById("carruselNombre");

const carruselReferencia =
    document.getElementById("carruselReferencia");

const carruselPrecio =
    document.getElementById("carruselPrecio");

const carruselAnterior =
    document.getElementById("carruselAnterior");

const carruselSiguiente =
    document.getElementById("carruselSiguiente");

const carruselDetalle =
    document.getElementById("carruselDetalle");

const carruselIndicadores =
    document.getElementById("carruselIndicadores");


// ========================================
// ESTADO DEL CARRUSEL
// ========================================

let indiceCarrusel = 0;

let intervaloCarrusel = null;


// ========================================
// INICIALIZAR CARRUSEL
// ========================================

function iniciarCarrusel() {

    if (!relojes.length) {
        return;
    }


    crearIndicadoresCarrusel();

    mostrarRelojCarrusel(indiceCarrusel);

    iniciarTemporizadorCarrusel();

}


// ========================================
// MOSTRAR RELOJ
// ========================================

function mostrarRelojCarrusel(indice) {

    const reloj =
        relojes[indice];


    if (!reloj) {
        return;
    }


    carruselImagen.classList.add("fade");


    setTimeout(() => {

        carruselImagen.src =
            reloj.imagen;

        carruselImagen.alt =
            reloj.nombre;


        carruselCategoria.textContent =
            reloj.tipo;


        carruselNombre.textContent =
            reloj.nombre;


        carruselReferencia.textContent =
            `Referencia: ${reloj.referencia}`;


        carruselPrecio.textContent =
            formatearPrecio(reloj.precio);


        actualizarIndicadoresCarrusel();


        carruselImagen.classList.remove("fade");

    }, 800);

}


// ========================================
// SIGUIENTE RELOJ
// ========================================

function siguienteReloj() {

    indiceCarrusel++;


    if (
        indiceCarrusel >= relojes.length
    ) {

        indiceCarrusel = 0;

    }


    mostrarRelojCarrusel(
        indiceCarrusel
    );


    reiniciarTemporizadorCarrusel();

}


// ========================================
// RELOJ ANTERIOR
// ========================================

function anteriorReloj() {

    indiceCarrusel--;


    if (indiceCarrusel < 0) {

        indiceCarrusel =
            relojes.length - 1;

    }


    mostrarRelojCarrusel(
        indiceCarrusel
    );


    reiniciarTemporizadorCarrusel();

}


// ========================================
// TEMPORIZADOR
// ========================================

function iniciarTemporizadorCarrusel() {

    intervaloCarrusel =
        setInterval(() => {

            siguienteReloj();

        }, 3000);

}


// ========================================
// REINICIAR TEMPORIZADOR
// ========================================

function reiniciarTemporizadorCarrusel() {

    clearInterval(
        intervaloCarrusel
    );


    iniciarTemporizadorCarrusel();

}


// ========================================
// INDICADORES
// ========================================

function crearIndicadoresCarrusel() {

    carruselIndicadores.innerHTML = "";


    relojes.forEach(
        (reloj, indice) => {

            const indicador =
                document.createElement("button");


            indicador.classList.add(
                "carrusel-indicador"
            );


            indicador.type = "button";


            indicador.setAttribute(
                "aria-label",
                `Mostrar ${reloj.nombre}`
            );


            indicador.addEventListener(
                "click",
                () => {

                    indiceCarrusel =
                        indice;


                    mostrarRelojCarrusel(
                        indiceCarrusel
                    );


                    reiniciarTemporizadorCarrusel();

                }
            );


            carruselIndicadores.appendChild(
                indicador
            );

        }
    );

}


// ========================================
// ACTUALIZAR INDICADORES
// ========================================

function actualizarIndicadoresCarrusel() {

    const indicadores =
        document.querySelectorAll(
            ".carrusel-indicador"
        );


    indicadores.forEach(
        (indicador, indice) => {

            indicador.classList.toggle(
                "activo",
                indice === indiceCarrusel
            );

        }
    );

}


// ========================================
// BOTONES DEL CARRUSEL
// ========================================

carruselSiguiente.addEventListener(
    "click",
    siguienteReloj
);


carruselAnterior.addEventListener(
    "click",
    anteriorReloj
);


// ========================================
// VER DETALLE DESDE EL CARRUSEL
// ========================================

carruselDetalle.addEventListener(
    "click",
    () => {

        abrirDetalle(
            relojes[indiceCarrusel].id
        );

    }
);


// ========================================
// VIDEOS - REPRODUCCIÓN AL PASAR EL PUNTERO
// ========================================

const videosCatalogo =
    document.querySelectorAll(".video-contenedor video");


videosCatalogo.forEach(video => {

    // Reproducir al entrar con el puntero
    video.addEventListener("mouseenter", () => {

        video.currentTime = 0;

        video.play().catch(() => {
            // El navegador puede bloquear la reproducción
            // en algunas circunstancias.
        });

    });


    // Pausar al retirar el puntero
    video.addEventListener("mouseleave", () => {

        video.pause();

        video.currentTime = 0;

    });

});



// ========================================
// ESTADO DE LA APLICACIÓN
// ========================================

let categoriaActual = "todos";

let favoritos = [];


// ========================================
// FORMATEAR PRECIO
// ========================================

function formatearPrecio(precio) {

    return new Intl.NumberFormat(
        "es-CO",
        {
            style: "currency",
            currency: "COP",
            maximumFractionDigits: 0
        }
    ).format(precio);

}


// ========================================
// MOSTRAR PRODUCTOS
// ========================================

function mostrarProductos(lista) {

    contenedorProductos.innerHTML = "";

    if (lista.length === 0) {

        sinResultados.hidden = false;

        return;

    }

    sinResultados.hidden = true;


    lista.forEach(reloj => {

        const esFavorito =
            favoritos.includes(reloj.id);


        const tarjeta =
            document.createElement("article");

        tarjeta.classList.add("producto");


        tarjeta.innerHTML = `

            <div class="producto-imagen">

                <img
                    src="${reloj.imagen}"
                    alt="${reloj.nombre}"
                    loading="lazy"
                >

                <button
                    class="btn-favorito ${
                        esFavorito ? "activo" : ""
                    }"
                    data-id="${reloj.id}"
                    type="button"
                    aria-label="Agregar a favoritos"
                >
                    ${esFavorito ? "♥" : "♡"}
                </button>

            </div>


            <div class="producto-info">

                <span class="producto-categoria">
                    ${reloj.tipo}
                </span>

                <h3 class="producto-nombre">
                    ${reloj.nombre}
                </h3>

                <p class="producto-referencia">
                    Ref: ${reloj.referencia}
                </p>

                <p class="producto-precio">
                    ${formatearPrecio(reloj.precio)}
                </p>

                <button
                    class="btn-detalle"
                    data-id="${reloj.id}"
                    type="button"
                >
                    Ver detalles
                </button>

            </div>

        `;


        contenedorProductos.appendChild(tarjeta);

    });

}


// ========================================
// FILTRAR PRODUCTOS
// ========================================

function filtrarProductos() {

    const texto =
        inputBusqueda.value
            .trim()
            .toLowerCase();


    const resultados =
        relojes.filter(reloj => {

            const coincideCategoria =
                categoriaActual === "todos" ||
                reloj.categoria === categoriaActual;


            const coincideBusqueda =
                reloj.nombre
                    .toLowerCase()
                    .includes(texto) ||

                reloj.referencia
                    .toLowerCase()
                    .includes(texto) ||

                reloj.tipo
                    .toLowerCase()
                    .includes(texto);


            return (
                coincideCategoria &&
                coincideBusqueda
            );

        });


    mostrarProductos(resultados);

}


// ========================================
// BUSCADOR
// ========================================

inputBusqueda.addEventListener(
    "input",
    filtrarProductos
);


// ========================================
// FILTROS
// ========================================

filtros.addEventListener(
    "click",
    evento => {

        const boton =
            evento.target.closest(".filtro");


        if (!boton) {
            return;
        }


        document
            .querySelectorAll(".filtro")
            .forEach(item => {

                item.classList.remove("activo");

            });


        boton.classList.add("activo");


        categoriaActual =
            boton.dataset.categoria;


        filtrarProductos();

    }
);


// ========================================
// FAVORITOS
// ========================================

contenedorProductos.addEventListener(
    "click",
    evento => {

        const boton =
            evento.target.closest(".btn-favorito");


        if (!boton) {
            return;
        }


        const id =
            Number(boton.dataset.id);


        if (favoritos.includes(id)) {

            favoritos =
                favoritos.filter(
                    favoritoId => favoritoId !== id
                );

        } else {

            favoritos.push(id);

        }


        actualizarContadorFavoritos();

        filtrarProductos();

    }
);


// ========================================
// CONTADOR FAVORITOS
// ========================================

function actualizarContadorFavoritos() {

    contadorFavoritos.textContent =
        favoritos.length;

}


// ========================================
// ABRIR DETALLE
// ========================================

contenedorProductos.addEventListener(
    "click",
    evento => {

        const boton =
            evento.target.closest(".btn-detalle");


        if (!boton) {
            return;
        }


        const id =
            Number(boton.dataset.id);


        abrirDetalle(id);

    }
);


// ========================================
// DETALLE DEL PRODUCTO
// ========================================

function abrirDetalle(id) {

    const reloj =
        relojes.find(
            producto => producto.id === id
        );


    if (!reloj) {
        return;
    }


    const listaCaracteristicas =
        reloj.caracteristicas
            .map(
                caracteristica =>
                    `<li>${caracteristica}</li>`
            )
            .join("");


    detalleProducto.innerHTML = `

        <div class="detalle">

            <div>

                <img
                    src="${reloj.imagen}"
                    alt="${reloj.nombre}"
                >

            </div>


            <div>

                <span class="producto-categoria">
                    ${reloj.tipo}
                </span>

                <h2>
                    ${reloj.nombre}
                </h2>

                <p>
                    Referencia:
                    <strong>${reloj.referencia}</strong>
                </p>

                <p class="detalle-precio">
                    ${formatearPrecio(reloj.precio)}
                </p>

                <p>
                    ${reloj.descripcion}
                </p>

                <br>

                <h3>
                    Características
                </h3>

                <ul>
                    ${listaCaracteristicas}
                </ul>

                <br>

                <a
                    class="btn-consultar"
                    href="https://wa.me/573001234567?text=Hola,%20estoy%20interesado%20en%20el%20reloj%20${encodeURIComponent(reloj.nombre)}%20referencia%20${encodeURIComponent(reloj.referencia)}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    💬 Consultar por WhatsApp
                </a>

            </div>

        </div>

    `;


    modalProducto.classList.add("visible");

    modalProducto.setAttribute(
        "aria-hidden",
        "false"
    );

}


// ========================================
// CERRAR MODAL
// ========================================

cerrarModal.addEventListener(
    "click",
    cerrarDetalle
);


modalProducto.addEventListener(
    "click",
    evento => {

        if (
            evento.target === modalProducto
        ) {

            cerrarDetalle();

        }

    }
);


function cerrarDetalle() {

    modalProducto.classList.remove("visible");

    modalProducto.setAttribute(
        "aria-hidden",
        "true"
    );

}


// ========================================
// ESC PARA CERRAR
// ========================================

document.addEventListener(
    "keydown",
    evento => {

        if (
            evento.key === "Escape" &&
            modalProducto.classList.contains("visible")
        ) {

            cerrarDetalle();

        }

    }
);



// ========================================
// INICIALIZAR APLICACIÓN
// ========================================

mostrarProductos(relojes);

actualizarContadorFavoritos();

iniciarCarrusel();

