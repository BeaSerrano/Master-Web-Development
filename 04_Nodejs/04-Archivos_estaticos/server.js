const http = require('http')
const fs = require('fs')
const path = require('path')
const mime = require('mime-types')

const PORT = 3000
const directorioPublico = path.join(__dirname, 'public')

const servidor = http.createServer((req, res) => {
    console.log('😀 Petición recibida:', req.url);

    // si no hay ruta, devuelve index.html
    let rutaArchivo = req.url === '/' ? 'index.html' : req.url

    // construir la ruta completa al archivo estático
    const archivoPath = path.join(directorioPublico, rutaArchivo)

    // detectar la extensión para configurar el tipo de contenido
    const extension = path.extname(archivoPath)
    // let tipoContenido = 'text/html'


    // switch (extension) {
    //     case '.css':
    //         tipoContenido = 'text/css'
    //         break;

    //     case '.js':
    //         tipoContenido = 'application/javascript'
    //         break;

    //     case '.png':
    //         tipoContenido = 'image/png'
    //         break;

    //     case '.jpg':
    //         tipoContenido = 'image/jpg'
    //         break;
    // }

    //* tipoContenido con librería mime
    const tipoContenido = mime.lookup(archivoPath) || 'text/html'

    // leer y enviar el archivo
    fs.readFile(archivoPath, (err, contenido) => {
        if (err) {
            const errorPath = path.join(directorioPublico, '404.html')
            fs.readFile(errorPath, (err, contenido404) => {
                res.writeHead(404, { 'Content-Type': 'text/html' })
                res.end(contenido404 || 'Error: página no encontrada')
            })
        } else {
            res.writeHead(200, { 'Content-Type': tipoContenido })
            res.end(contenido)
        }
    })

})

servidor.listen(PORT, () => {
    console.log(`🏄 Server listening on http://localhost:${PORT}`)    
})