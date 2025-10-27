//! Controller: conexión entre ambos

export class Controller {
    constructor(model, view){
        this.model = model;
        this.view = view;

        // conectar callbacks de la vista con las funciones del modelo

        this.view.onAdd = (text) => {
            this.model.add(text)
            this.update()
        }

        this.view.onToggle = (index) => {
            this.model.toggle(index)
            this.update()
        }
        this.view.onDelete = (index) => {
            this.model.remove(index)
            this.update()
        }

        // renderizado inicial
        this.update()
    }

    // atualizar la lista de tareas
    update() { // coge todas las tareas y las renderiza
        const tareas = this.model.getAll()
        this.view.render(tareas)
    }
}