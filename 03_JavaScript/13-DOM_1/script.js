//! Manipulación del DOM
// DOM = Document Object Modelo - Modelo de Objeto del Documento
// En el navegador cada elemento de HTML, gracias a JavaScript, se convierte en un nodo del DOM
// Con JS accedemos al DOM mediante la palabra clave: document
// document - representa el documento HTML completo y nos da acceso a todos los sus elementos


//* Acceder a elementos del DOM

let titulo = document.getElementById('titulo')
console.log(titulo); // <h1 id="titulo">Manipulación del DOM 1</h1>

let parrafos = document.getElementsByClassName('mensaje')
console.log(parrafos); // HTMLCollection [p.mensaje]

let boton = document.querySelector('#boton')
console.log(boton); // <button id="boton">Haz click aquí</button>

let todos = document.querySelectorAll('p')
console.log(todos); // NodeList [p.mensaje]


//* Modificar el contenido de los elementos

// Cambiar texto
titulo.textContent = 'Hola mundo!'

// Cambiar HTML interno
document.querySelector('.mensaje').innerHTML = '<strong>Ahora esto es strong</strong>'

//* Modificar el estilo de los elementos

titulo.style.color = 'red'
titulo.style.fontSize = '3rem'
titulo.style.textTransform = 'uppercase'

//* Interacción básica con eventos

boton.addEventListener('click', function () {
    titulo.textContent = 'Has hecho click en el botón!'
    titulo.style.color = 'blue'
})