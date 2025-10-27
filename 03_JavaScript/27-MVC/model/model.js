// el modelo se encarga de guardar y gestionar los datos, en este caso las tareas

class Modelo {
    constructor(){
        this.tareas = []
    }

    agregarTarea(tarea) {
        this.tareas.push(tarea)
    }

    obtenerTareas(){
        return this.tareas
    }
}