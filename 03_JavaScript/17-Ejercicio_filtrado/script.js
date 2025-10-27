const botones = document.querySelectorAll('#filtros button')
const tarjetas = document.querySelectorAll('#galeria .card')
const buscador = document.querySelector('#buscador') // bonus

let filtroActivo = 'todos'
let textoBusqueda = ''

//* aplicados filtros en las cards

const aplicarFiltros = () => {
    tarjetas.forEach(card => {
        // filtrado botones categoria
        const esCategoria = filtroActivo === 'todos' || card.classList.contains(filtroActivo)
        // búsqueda por texto
        const texto = (card.innerText || '').toLowerCase()
        const coincideTexto = texto.includes(textoBusqueda)
        // mostrar solo si cumple ambos (categoria + texto)
        if (esCategoria && coincideTexto) {
            card.classList.remove('oculto')
        } else {
            card.classList.add('oculto')
        }
    })
}

//* hacer funcionales los botones de filtrado

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        // removemos boton activo anterior
        botones.forEach((boton) => {
            boton.classList.remove('activo')
            boton.setAttribute('aria-selected', 'false')
        })
        // en el boton donde hacemos click:
        boton.classList.add('activo')
        boton.setAttribute('aria-selected', 'true')
        // cambiar el filtro y aplicar - cogemos el data-filtro del botón
        filtroActivo = boton.dataset.filtro
        aplicarFiltros()
    })
})

//* bonus - búsqueda por texto

if (buscador) {
    buscador.addEventListener('input', (e) => {
        textoBusqueda = e.target.value.trim().toLowerCase()
        aplicarFiltros()
    })
}

//* iniciar
aplicarFiltros()



//! Accesilidad
// role='tablist' o aria-selected
// para comunicar el filtro activo a teccnologías de asistencia

//! Mejoras futuras 
// paginación
// contador de resultados
// 'no hay resultados'
// cargar de los datos
// animaciones...