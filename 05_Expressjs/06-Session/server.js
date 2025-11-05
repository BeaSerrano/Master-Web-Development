const express = require('express')
const session = require('express-session')

const app = express()
const PORT = 3000

// Usuarios simulados --> BBDD con contraseñas encriptadas
const usuarios = [
    {
        id: 1,
        nombre: 'Laura',
        email: 'laura@example.com',
        password: '123456',
        rol: 'admin'
    },
    {
        id: 2,
        nombre: 'Miguel',
        email: 'miguel@example.com',
        password: 'abc123',
        rol: 'user'
    }
]

// Middlewares
app.use(express.json()) // parsear JSON
app.use(express.urlencoded({extended: true})) // leer formularios
app.use(session({
    secret: 'mi-secreto', // firma de la sesión --> cambia en producción y se oculta ---> .env
    resave: false, // si no hay cambios no reescribe
    saveUninitialized: false, // crea una sesión aunque este vacío --> desarrollo
    cookie: { maxAge: 1000 * 60 * 15 } // expira en 15 minutos
}))

// Helper ---> generar página HTML
const pagina = (titulo, contenido) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${titulo}</title>
        </head>
        <body>
            ${contenido}
        </body>
        </html>
    `
}

// Rutas

// GET /login ---> muestra el formulario (no autentica, no envía nada, solo trae el formulario)
app.get('/login', (req, res) => {
    const contenido = `
        <h1>Iniciar sesión</h1>
        <form action="/login" method="POST">
            <label for="email">Correo electrónico</label>
            <input type="email" name="email" required autocomplete="username">
            <br><br>
            <label for="password">Contraseña</label>
            <input type="password" name="password" required autocomplete="current-password">
            <br><br>
            <button type="submit">Iniciar sesión</button>
        </form>

        <p>Usuarios demo: <code>laura@example.com / 123456</code> · <code>miguel@example.com / abc123</code></p>
    `

    res.send(pagina('Login', contenido))
})

// POST /login ---> procesa el formulario y crea la sesión
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const user = usuarios.find(u => u.email === email && u.password === password);

    if (!user) {
        const contenido = `
            <h1>Login</h1>
            <p style="color: red;">Credenciales no válidas.</p>
            <p><a href="/login">Volver al formulario</a></p>
        `

        return res.status(404).send(pagina('Credenciales no válidas', contenido))
    }

    req.session.user = {
        id: user.id,
        nombre: user.nombre,
        email: user.email,
        rol: user.rol
    }

    console.log('😀 REQ.SESSION', req.session);
    
    res.redirect('/profile')
})

// GET /profile ---> protegida, si no hay sesión, pide el login
app.get('/profile', (req, res) => {
    if (!req.session.user) {
        const contenido = `
            <h1>No hay iniciado sesión</h1>
            <p><a href="/login">Ir a iniciar sesión</a></p>
        `

        return res.status(401).send(pagina('No autenticado', contenido))
    }

    const { nombre, email, rol } = req.session.user;

    const contenido = `
        <h1>Tu perfil</h1>
        <p><strong>Nombre: </strong>${nombre}</p>
        <p><strong>Email: </strong>${email}</p>
        <p><strong>Rol: </strong>${rol}</p>

        <form action="/logout" method="POST">
            <button type="submit">Cerrar sesión</button>
        </form>
    `

    res.send(pagina('Profile', contenido))
})

// POST / logout ---> destruye la sesión y vuelve al login
app.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            const contenido = `
                <p style="color: red;">Error al cerrar sesión</p>
                <p><a href="/profile">Volver a mi perfil</a></p>
            `

            return res.status(500).send(pagina('Error logout', contenido))
        }

        res.clearCookie('connect.sid');
        res.redirect('/login')
    })
})

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`)    
})