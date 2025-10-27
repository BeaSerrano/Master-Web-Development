//! View: interfaz visual y eventos del usuario

export class View {
    constructor(root) {
        this.root = root;
        this.input = root.querySelector('#inputTarea')
        this.btn = root.querySelector('#btnAgregar')
        this.list = root.querySelector('#lista')

        this.onAdd = null;
        this.onToggle = null;
        this.onDelete = null;

        this._initUI()
    }

    _initUI() {
        this.btn.addEventListener('click', () => {
            const text = this.input.value.trim();
            if(!text || !this.onAdd) return;
            this.onAdd(text);
            this.input.value = '';
            this.input.focus();
        })

        this.input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') this.btn.click()
        })
    }

    render(tareas) {
        this.list.innerHTML = ''

        if (tareas.length === 0) {
            const li = document.createElement('li')
            li.className = 'empty'
            li.textContent = 'No hay tareas, ¡Añade la primera!'
            this.list.appendChild(li)
            return;
        }

        tareas.forEach((t, i) => {
            const li = document.createElement('li')
            li.className = 'item' + (t.done ? ' completed' : '')
            li.innerHTML = `
                <span class="txt">${t.text}</span>
                <div class="actions">
                    <button class="done">${t.done ? 'Marcar como no terminada' : 'Marcar como terminada'}</button>
                    <button class="delete">Borrar tarea</button>
                </div>
            `;
            li.querySelector('.done').addEventListener('click', () => {
                this.onToggle && this.onToggle(i);
            });
            li.querySelector('.delete').addEventListener('click', () => {
                this.onDelete && this.onDelete(i);
            });
            this.list.appendChild(li)
        });
    }
}