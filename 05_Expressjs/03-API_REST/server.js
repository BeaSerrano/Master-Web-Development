//! API REST

// GET --->  /api/usuarios ---> Obtener todos los usuarios
// GET --->  /api/usuarios/:id ---> Obtener un usuario por id
// POST --->  /api/usuarios ---> Crear un nuevo usuario
// PUT --->  /api/usuarios/:id ---> Actualizar un usuario existente
// DELETE --->  /api/usuarios/:id ---> Eliminar un usuario


const express = require('express')
const app = express()
const PORT = 3000

// Middleware para procesar JSON
app.use(express.json())

// Datos simulados
let usuarios = [
    { id: 1, nombre: 'Marta' },
    { id: 2, nombre: 'Paula' },
    { id: 3, nombre: 'Marcos' }
]

// GET ---> /api/usuarios ---> Obtener todos los usuarios
app.get('/api/usuarios', (req, res) => {
    res.status(200).json(usuarios)
})

// GET --->  /api/usuarios/:id ---> Obtener un usuario por id
app.get('/api/usuarios/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const usuario = usuarios.find(usuario => usuario.id === id)

    if(usuario){
        res.status(200).json({ mensaje: 'Usuario encontrado', usuario })
    } else {
        res.status(404).json({ mensaje: 'Usuario no encontrado' })
    }
})

// POST --->  /api/usuarios ---> Crear un nuevo usuario
app.post('/api/usuarios', (req, res) => {
    const nuevoUsuario = req.body;

    if(!nuevoUsuario.nombre) {
        return res.status(400).json({ error: `El campo "nombre" es obligatorio`})
    }

    nuevoUsuario.id = usuarios.length + 1;
    usuarios.push(nuevoUsuario);
    res.status(201).json(nuevoUsuario)
})

// PUT --->  /api/usuarios/:id ---> Actualizar un usuario existente
app.put('/api/usuarios/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { nombre } = req.body;
    const usuario = usuarios.find(usuario => usuario.id === id);

    if (!usuario) {
        return res.status(404).json({ error: 'Usuario no encontrado' })
    }

    if (!nombre) {
        return res.status(400).json({ error: `El campo "nombre" es obligatorio`})
    }

    usuario.nombre = nombre;
    res.status(200).json({ mensaje: 'Usuario actualizado', usuario })
})


// DELETE --->  /api/usuarios/:id ---> Eliminar un usuario
app.delete('/api/usuarios/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const usuario = usuarios.find(usuario => usuario.id === id);

    if (!usuario) {
        return res.status(404).json({ error: 'Usuario no encontrado' })
    }

    usuarios = usuarios.filter(usuario => usuario.id !== id);
    res.status(200).json({ mensaje: 'Usuario eliminado correctamente' }) // 204 - No content
})

// Middlewares
app.use((err, req, res, next) => {
    console.error("Error detectado:", err.message);
    res.status(500).json({ error: "Error interno del servidor" });
});


// Servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
})