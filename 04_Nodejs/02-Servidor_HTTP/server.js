// PETICION - req - request
// RESPUESTA - res - response


// importar el módulo HTTP de Node
const http = require('http')

// Crear el servidor
const servidor = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Hola Mundo')
})

// Escuchar al servidor en un puerto - localhost
const PORT = 3000

servidor.listen(PORT, () => {
    console.log(`🎵 Servidor escuchando en http://localhost:${PORT}`);
})