//! localStorage y sessionStorage

//// localStorage
    // permanece al cerrar el navegador
    // pestañas del mismo dominio

//// sessionStorage
    // se borrar al cerrar la pestaña
    // solo la pestaña actual


//* EJEMPLO

// Seleccionamos los elementos
const input = document.querySelector('#nombre')
const btnGuardar = document.querySelector('#guardar')
const btnMostrar = document.querySelector('#mostrar')
const btnBorrar = document.querySelector('#borrar')
const mensaje = document.querySelector('#mensaje')

// Guardar en el localStorage
btnGuardar.addEventListener('click', () => {
    const valor = input.value.trim()
    if (!valor) return alert('Escribe un nombre primero')

    localStorage.setItem('nombreUsuario', valor)
    mensaje.textContent = `Nombre guardado: ${valor}`
})

// Mostrar el valor almacenado
btnMostrar.addEventListener('click', () => {
    const nombre = localStorage.getItem('nombreUsuario')
    
    mensaje.textContent = nombre 
    ? `Hola, ${nombre}`
    : 'No hay datos guardados en el localStorage en nombreUsuario'
})

// Borrar el valor almacenado
btnBorrar.addEventListener('click', () => {
    localStorage.removeItem('nombreUsuario')
    mensaje.textContent = 'Dato de nombreUsuario borrado'
})

// OBJETOS

const usuario = {
    nombre: 'Ana',
    edad: 53,
    hobbies: ['leer', 'viajar']
}

// guardamos el objeto
localStorage.setItem('usuarioObjeto', JSON.stringify(usuario))

// recuperamos el objeto
const usuarioGuardado = JSON.parse(localStorage.getItem('usuarioObjeto'))
console.log(usuarioGuardado.nombre);
console.log(usuarioGuardado.edad);
console.log(usuarioGuardado.hobbies);

// limpiar todo
// localStorage.clear()



//* sessionStorage

sessionStorage.setItem('visita', 'Primera vez en la pestaña')
console.log(sessionStorage.getItem('visita'));
