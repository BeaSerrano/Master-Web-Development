const http = require('http')

const servidor = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(`<h1>Bienvenida/o a la página principal</h1>
            <p>Este es mi primer ejercicio de rutas con un servidor Backend creado por mi</p>
            <small>Qué bien me ha salido!</small>
        `)
    } else if (req.url === '/contacto') {
        res.statusCode = 200
        res.end('Página de contacto')
    } else if (req.url === '/acerca') {
        res.statusCode = 200
        res.end('Página acerca de nosotros')
    } else if (req.url === '/api') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ nombre: 'Laura', rol: 'Desarrolladora Backend' }))
    } else {
        res.statusCode = 404
        res.end('Error 404: Página no encontrada')
    }
})

const PORT = 8080

servidor.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})