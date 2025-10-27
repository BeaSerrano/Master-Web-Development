//! Manipulación del DOM

//* Crear elementos desde JS

let nuevaTarea = document.createElement('li') // li
nuevaTarea.textContent = "Aprender JavaScript"
console.log(nuevaTarea); // <li>Aprender JavaScript</li>

let lista = document.getElementById('lista-tareas') // ul
lista.appendChild(nuevaTarea)


//* Añadir elementos con interacción

let botonAgregar = document.getElementById('agregar')
let contador = 1

botonAgregar.addEventListener('click', () => {
    let nuevaTarea = document.createElement('li')
    nuevaTarea.textContent = `Nueva tarea ${contador}`
    lista.appendChild(nuevaTarea)
    contador++
})


//* Eliminar elementos con interacción

let botonEliminar = document.getElementById('eliminar')

botonEliminar.addEventListener("click", () => {
    if (lista.lastChild) {
        lista.removeChild(lista.lastChild);
    } else {
        alert("No hay más tareas para eliminar");
    }
});



//* Clonar y reutilizar elementos

let tareaBase = document.querySelector('li')
let clon = tareaBase.cloneNode(true)
clon.textContent = 'Tarea clonada'
lista.appendChild(clon)


//* Modificar atributos y clases

let newTask = document.createElement('li')
newTask.textContent = 'Estudiar CSS'
newTask.setAttribute('class', 'importante')
newTask.classList.add('pendiente')
newTask.classList.toggle('hecho')
lista.appendChild(newTask)