const http = require('http')

const servidor = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')

    if (req.url === '/') {
        res.statusCode = 200
        res.end('Inicio')
    } else if (req.url === '/contacto') {
        res.statusCode = 200
        res.end('Contacto')
    } else if (req.url === '/api') {
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ mensaje: 'Bienvenido a la API' }))
    } else {
        res.statusCode = 404
        res.end('Página no encontrada - NOT FOUND')
    }
})

const PORT = 3000

servidor.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})