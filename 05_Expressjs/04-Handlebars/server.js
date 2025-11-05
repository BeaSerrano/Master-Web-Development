const express = require("express");
const hbs = require('hbs')
const app = express();
const PORT = 3000;

// configurar hanblebars como motor de vistas
app.set("view engine", "hbs")

// carpeta de vistas (/views)
app.set('views', __dirname + '/views')

// registrar los partials
hbs.registerPartials(__dirname + '/views/partials')

// middleware procesar los datos del formulario - req.body
app.use(express.urlencoded({ extended: true }))

// ruta principal
app.get('/', (req, res) => {
    res.render('home', {
        titulo: 'Bienvenido/a a Handlebars 😀',
        mensaje: 'Renderizado dinámico con Express y Handlebars'
    })
})

// ruta /usuarios
app.get('/usuarios', (req, res) => {
    const usuarios = [
        { id: 1, nombre: "Laura" },
        { id: 2, nombre: "Carlos" },
        { id: 3, nombre: "Ana" },
    ];

    res.render('usuarios', {
        titulo: 'Lista de usuarios',
        listaUsuarios: usuarios
    })
})

// ruta /saludo
app.post('/saludo', (req, res) => {
    const { nombre } = req.body;

    res.render('home', {
        titulo: 'Saludo con Hanblebars',
        mensaje: `Hola ${nombre}, bienvenido/a`
    })
})

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
