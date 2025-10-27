const btnCargar = document.getElementById('btnCargar')
const contenedor = document.getElementById('contenedor')
const estado = document.getElementById('estado')

const RESULTADOS = 6
const URL = `https://randomuser.me/api/?results=${RESULTADOS}`

// Helpers - 'cargando...'
const setCargando = (cargando) => {
    btnCargar.disabled = cargando
    estado.textContent = cargando ? 'Cargando usuarios...' : ''
}

// Renderizar usuarios
const renderUsuarios = (lista) => {
    contenedor.innerHTML = ''
    lista.forEach(usuario => {
        const card = document.createElement('article');
        card.className = 'usuario';
        card.innerHTML = `
        <img src="${usuario.picture.medium}" alt="Foto de ${usuario.name.first} ${usuario.name.last}">
        <h3>${usuario.name.first} ${usuario.name.last}</h3>
        <p>${usuario.location.country}</p>
        <p><small>${usuario.email}</small></p>
        `;
        contenedor.appendChild(card);
    });

}

// función asíncrona de la carga de usuarios - llamada a la API
const cargarUsuarios = async () => {
    try {
        // gestionar le estado de carga - true
        setCargando(true)
        // limpiar los resultados anteriores
        contenedor.innerHTML = ''
        // lamada a la API
        const res = await fetch(URL)
        // comprobamos el estado HTTP
        if (!res.ok) throw new Error(`Error HTTP ${res.status}`);
        // si la res está ok - traeremos la lista de usuarios en formato JS
        const data = await res.json()
        // renderizaremos los usuarios de la data
        renderUsuarios(data.results)
    } catch (error) {
        contenedor.innerHTML = `<p style="color: red;"> ❌ ${error.message || '❌ Error inesperado'}</p>`
    } finally {
        // gestionar el estado de carga - false
        setCargando(false)
    }
}

// manejar el evento del botón - cargar los usuarios
btnCargar.addEventListener('click', cargarUsuarios)

