//! FUNCIONES
// es un bloque de código reutilizable

    // entrada - datos que le damos
    // ejecución - hace algo con esos datos
    // salida -- devuelve un resultado

    //* SINTAXIS

    // function nombreFuncion (un parámetro, varios o ninguno){
        // código que ejecuta
    // }

    //* Ejemplo de saludo

    function saludar() {
        console.log('Hola!');
    }

    // llamo a la función - ejecuta el contenido
    saludar() // 'Hola!'

    //* Ejemplo de saludo a un usuario

    function saludarUsuario(nombreUsuario) {
        console.log(`Hola ${nombreUsuario}`);
    }

    saludarUsuario('Pedro') // Hola Pedro
    saludarUsuario('Susana') // Hola Susana

    //* Ejemplo suma de dos parámetros (números)

    function sumar(a, b) {
        console.log(a + b);
    }

    sumar(5, 3) // 8
    sumar(10, 30) // 40


    //* Una función puede devolver un valor --> return

    function multiplicar(a, b) {
        return a * b
    }

    let resultado = multiplicar(2, 10) // el return guarda la info donde se llama a la función

    console.log(`Este es el resultado: ${resultado}`); // Este es el resultado: 20



//* VARIABLES GLOBALES Y LOCALES
// ámbito local --- las variables creadas dentro de las funciones solo viven dentro de ellas, como los parámetros

function prueba() {
    let mensaje = 'Estoy dentro de la función'
    console.log(mensaje);
}

prueba() // Estoy dentro de la función

// console.log(mensaje); // 🔴 ReferenceError: mensaje is not defined - mensaje solo existe dentro de la función 'prueba', fuera de esta función, el programa no la reconoce. Por eso usamos return y almacenamos su resultado en variables globales.

let nombre = 'María'

function despedida() {
    console.log(`Adiós ${nombre}`);
}

despedida() // Adiós María


//* FUNCIONES ANÓNIMAS Y FUNCIONES ARROW (flecha)

// Función anónima --> se guardan sin nombre normalmente dentro de una variable

const dividir = function (a, b) {
    return a / b
}

console.log(dividir(10, 2)); // 5


// Función arrow (flecha) - MODERNA

const saludoCompleto = (nombreCompleto) => {
    return `Hola ${nombreCompleto}`
}

console.log(saludoCompleto('Pedro Gómez')); // Hola Pedro Gómez

// Función arrow en una sola línea - un parámetro

const saludoLinea = nombreCompleto => `Hola ${nombreCompleto}`

console.log(saludoLinea('Bea Serrano')); // Hola Bea Serrano

// Función arrow en una sola línea - varios parámetros --- paréntesis

const saludoVarios = (nombre, apellido) => `Hola ${nombre} ${apellido}`

console.log(saludoVarios('María', 'Martín')); // Hola María Martín
