const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
const PORT = 3000

// middleware de cookies --- accedemos a las cookies desde req.cookies
// app.use(cookieParser())
app.use(cookieParser('mi-secreto'))
app.use(express.json())

// crear una cookie
app.get('/crear-cookie', (req, res) => {
    res.cookie('usuario', 'Luis', { maxAge: 60000 }) // 1 minuto
    res.cookie('token', 'abc123', {
        httpOnly: true, // no accesible desde JS
        secure: false, // solo envía si HTTPS es true
        maxAge: 60000, // duración en milisegundos
        sameSite: 'lax' // evita ciertos ataques
    })
    res.send('🍪 Cookie creada correctamente')
})

// leer una cookie guardada
app.get('/leer-cookie', (req, res) => {
    const usuario = req.cookies.usuario;

    if (usuario) {
        res.send(`😀 Bienvenido/a de nuevo, ${usuario}`)
    } else {
        res.send('No hay cookie de usuario guardada')
    }
})

// eliminar una cookie
app.get('/borrar-cookie', (req, res) => {
    res.clearCookie('usuario')
    res.send('😐 Cookie eliminada')
})

// ruta - cookie firmada
app.get("/crear-firmada", (req, res) => {
    res.cookie("admin", "true", { signed: true });
    res.send("🔒 Cookie firmada creada");
});

// firmar cookie
app.get("/ver-firmada", (req, res) => {
    res.json(req.signedCookies);
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
