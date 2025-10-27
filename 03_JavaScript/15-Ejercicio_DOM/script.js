// Selecciones base
const input = document.querySelector('#tarea');
const btnAgregar = document.querySelector('#agregar');
const lista = document.querySelector('#lista');
const spanContador = document.querySelector('#contador');

// Utilidad: actualizar el contador
function actualizarContador() {
    const total = lista.querySelectorAll('li').length
    spanContador.textContent = total === 1 ? '1 tarea' : `${total} tareas`
}

// Crear los list items: texto + botón borrar
function crearItem(texto) {
    const li = document.createElement('li')

    const spanTexto = document.createElement('span')
    spanTexto.className = 'texto'
    spanTexto.textContent = texto

    const btnBorrar = document.createElement('button')
    btnBorrar.className = 'borrar'
    btnBorrar.textContent = '❌'

    li.append(spanTexto, btnBorrar)
    return li
}

// Agregar item
btnAgregar.addEventListener('click', () => {
    const texto = input.value.trim()

    if(!texto) return; // evitamos listar un item vacío

    const li = crearItem(texto)
    lista.appendChild(li)

    input.value = ''  // resetear los valores
    input.focus()
    actualizarContador()
})

// Delegación: clicks dentro de la lista

lista.addEventListener('click', (e) => {
    // Si click en botón borrar
    if (e.target.matches('.borrar')) {
        e.target.closest('li').remove();
        actualizarContador();
        guardarEnLocalStorage(); // lo añadiremos luego
        return;
    }

    // Si click en el texto: toggle completado
    if (e.target.matches('.texto')) {
        e.target.closest('li').classList.toggle('completada');
        guardarEnLocalStorage(); // lo añadiremos luego
    }
});


// Guardar en el local Storage
let tareas = []

function guardarEnLocalStorage() {
    // Leer el DOM y sincronizar estado
    tareas = [...lista.querySelectorAll('li')].map(li => ({
        texto: li.querySelector('.texto').textContent,
        completada: li.classList.contains('completada')
    }));
    localStorage.setItem('tareas', JSON.stringify(tareas));
}
