// el controlador une las piezas: escucha los eventos del usuario, actualiza el modelo y refresca la vista

class Controlador {
    constructor(modelo, vista) {
        this.modelo = modelo
        this.vista = vista

        document
        .getElementById('botonAgregar')
        .addEventListener('click', () => this.agregarTarea())
    }

    agregarTarea() {
        const tarea = document.getElementById('inputTarea').value // lo coge de un input
        this.modelo.agregarTarea(tarea) // viene del modelo
        this.vista.mostrarTareas(this.modelo.obtenerTareas()) // mostrar viene de la vista y obtener viene del modelo
    }
}