// Importar express
const express = require('express')

// Crear aplicación
const app = express()

// Definir puerto
const PORT = 3000

// Datos simulados
const usuarios = [
    { id: 1, nombre: 'Pedro'},
    { id: 2, nombre: 'Ana'},
    { id: 3, nombre: 'Luis'}
]

// Rutas
app.get('/', (req, res) => {
    res.send('Bienvenido a mi primer servidor con Express 😀')
})

app.get('/contacto', (req, res) => {
    res.end('Pagina de contacto 📧')
})

app.get('/acerca', (req, res) => {
    res.send(`
        <h1>Página acerca de nosotros</h1>
        <p>Hola, soy el primer párrafo de esta sección hecha con Express</p>
        `)
})

app.get('/api/usuarios', (req, res) => {
    res.json([
        { id: 1, nombre: 'Pedro'},
        { id: 2, nombre: 'Ana'},
        { id: 3, nombre: 'Luis'}
    ])
})

app.post('/api/usuarios', (req, res) => {
    // instrucciones de creación de usuario
    res.status(201).json({ mensaje: 'Usuario creado correctamente' })
})

// Ruta dinámica --> /api/usuarios/:id --> param = id
app.get('/api/usuarios/:id', (req, res) => {
    const id = parseInt(req.params.id); // cogemos la propiedad id de los params, de la ruta dinámica

    const usuario = usuarios.find(usuario => usuario.id === id) // encontrar el usuario por su id

    if (usuario) {
        res.json(usuario)
    } else {
        res.status(404).json({ error: 'Usuario no encontrado' })
    }
})

app.put('/api/usuarios/:id', (req, res) => {
    // instrucciones de actualización de usuario
    res.json({ mensaje: `Usuario ${req.params.id} actualizado` })
})

app.delete('/api/usuarios/:id', (req, res) => {
    // instrucciones de borrado de usuario
    res.json({ mensaje: `Usuario ${req.params.id} eliminado` })
})


//Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`)    
})