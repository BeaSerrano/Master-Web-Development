//! Model: datos y lógica de negocio

export class Model {
    constructor(){
        this._tareas = []
    }

    getAll() { // traer todas las tareas
        return [...this._tareas]
    }

    add(text) { // añadir tarea, done por defecto en false
        this._tareas.push({ text, done: false })
    }

    toggle(index) { // interuptor para cambiar de tarea hecha a no hecha
        const tarea = this._tareas[index];
        if (!tarea) return;
        tarea.done = !tarea.done;
    }

    remove(index) { // eliminar una tarea concreta
        this._tareas.splice(index, 1)
    }
}