// la vista se encarga de mostrar los datos en el navegador, sin saber de dónde vienen

class Vista {
    constructor() {
        this.lista = document.getElementById('lista') // ul
    }

    mostrarTareas(tareas) {
        this.lista.innerHTML = ''
        tareas.forEach(tarea => {
            const li = document.createElement('li') // li
            li.textContent = tarea
            this.lista.appendChild(li)
        });
    }
}