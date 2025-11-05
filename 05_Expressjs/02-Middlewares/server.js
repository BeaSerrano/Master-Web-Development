//! Middlewares
// req, res, next

/*
        function ejemploMmiddleware(req, res, next) {
            console.log('Middlewate ejecutado');
            next() // permite pasar al siguiente middleware o ruta
        }
*/

//! Orden de este ejercicio

// Petición
// Middleware 1 ---> express.json
// Middleware 2 ---> registro
// Middleware 3 ---> estáticos -- Si coincide
// Middleware 4 ---> validarAdmin -- Si coincide
// Ruta
// Middleware 5 ---> error
// Respuesta



const express = require("express");
const app = express();
const PORT = 3000;

// Middlewares propios de Express - EJEMPLO req.body
app.use(express.json())

// Middleware de registro - GLOBAL - siempre pasa por el servidor antes de la respuesta
app.use((req, res, next) => {
    console.log(`Petición recibida: ${req.method} ${req.url}`); // GET /
    next() // pasa al siguiete middleware o ruta
})

// Middleware de archivos estáticos
app.use(express.static("public"))

// Middleware para ruta concreta
const validarAdmin = (req, res, next) => {
    console.log('Ejecutando middleware para /admin');
    next()
}

// RUTAS

app.get("/", (req, res) => {
    res.send("Bienvenido a la página principal");
});

// Ruta con middleware
app.get("/admin", validarAdmin, (req, res) => {
    console.log('Dentro de /ADMIN');
    res.send("Area de administración");
});

// Ruta con req.body - middleware express.json()
app.post('/api/usuarios', (req, res) => {
    const nuevoUsuario = req.body;
    console.log(`Usuario recibido`, nuevoUsuario);
    res.status(201).json({ mensaje: 'Usuario creado correctamente', usuario: nuevoUsuario })
})

// Middleware de manejo de errores
app.use((err, req, res, next) => {
    console.error("ERROR DETECTADO", err.message);
    res.status(500).json('Error interno del servidor')
})

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});