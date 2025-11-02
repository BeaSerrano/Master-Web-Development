const http = require('http')

const PORT = 3000

// Datos simulados
let usuarios = [
    { id: 1, nombre: 'Laura' },
    { id: 2, nombre: 'Luis' },
    { id: 3, nombre: 'Ana' }
]

const servidor = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
    // traer el método y la url de la petición del cliente
    const { method, url } = req;

    // Ruta ---> GET /usuarios ---> obtener todos los usuarios
    // Ruta ---> GET /usuarios/id ---> obtener un usuario por su id
    // Ruta ---> POST /usuarios ---> crear un nuevo usuario
    // Ruta ---> DELETE /usuarios/id ---> eliminar un usuario por su id
    // Ruta ---> Cualquier otra ruta no definida ---> 404 - Not Found

    if (url === '/usuarios' && method === 'GET') {
        res.statusCode = 200;
        res.end(JSON.stringify(usuarios))
    } else if (url.startsWith("/usuarios/") && method === "GET") {
        const id = parseInt(url.split("/")[2]); // cogemos el id de la req.url del cliente
        const usuario = usuarios.find(u => u.id === id); // buscamos al usuario por su id

        if (usuario) {
            res.statusCode = 200; // Ok
            res.end(JSON.stringify(usuario));
        } else {
            res.statusCode = 404;
            res.end(JSON.stringify({ error: "Usuario no encontrado" }));
        }
    } else if (url === '/usuarios' && method === 'POST') {
        // chunks ---> trozos de datos del cuerpo de la petición del cliente
        let body = ''; // vamos guardando en body los chunks
        req.on('data', (chunk) => body += chunk) // evento data que se dispara por cada chunck - añade el chunck al body
        req.on('end', () => { // evento end se lanza cuando termina de recibir datos el body
            const nuevoUsuario = JSON.parse(body);
            nuevoUsuario.id = usuarios.length + 1;
            usuarios.push(nuevoUsuario);
            res.statusCode = 201; // created
            res.end(JSON.stringify(nuevoUsuario));
        })
    } else if (url.startsWith("/usuarios/") && method === "DELETE") {
        const id = parseInt(url.split("/")[2]);
        usuarios = usuarios.filter(usuario => usuario.id !== id) // no guardamos en el nuevo array el usuario que tiene le id que me da el cliente
        res.statusCode = 204; // No content
        res.end()
    } else {
        res.statusCode = 404; // Not Found
        res.end(JSON.stringify({ error: 'Ruta no encontrada' }))
    }

})

servidor.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})