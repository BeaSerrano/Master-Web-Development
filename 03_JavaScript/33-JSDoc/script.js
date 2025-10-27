//! Validación de tipados con JSDOC

// @ts-check

//// Tipado variables
/**
 * Suma dos números y devuelde el resultado
 * @param {number} a - Primer número
 * @param {number} b - Segundo número
 * @returns {number} Resultado de la suma
 */

function sumar(a, b) {
    return a + b
}

console.log(sumar(5, 3));


/** @type {string} */
let nombre = 'Paula'

/** @type {number[]} */
let edad = [24, 12, 56]

/**
 * @type { {nombre: string, edad: number, estudiante: boolean} }
 */
const usuario = {
    nombre: 'Ana',
    edad: 24,
    estudiante: true
}

//// Crear constructo de objeto
/**
 * @typedef {Object} Producto
 * @property {string} nombre
 * @property {number} precio
 * @property {boolean} disponible
 */

/** @type {Producto} */
const producto1 = {
    nombre: 'Camiseta',
    precio: 25.50,
    disponible: false
}

//// callbacks
/**
 * @callback Operacion
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

/**
 * Aplica una operación a dos números
 * @param {Operacion} fn - Función de operación
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */

function aplicarOperacion(fn, num1, num2) {
    return fn(num1, num2)
}

console.log(aplicarOperacion((a, b) => a  + b, 2, 3)); // 5
// console.log(aplicarOperacion('no es una función'), 2, 3); // ERROR - fun no es una función

//// Unión de tipos
/**
 * @param {string | number} id - Puede ser texto o número
 */

function buscarUsuario(id) {
    console.log('Buscando usuario por ID:', id)
}

buscarUsuario('abc12345') // Buscando usuario por ID: abc12345


//// Parámetros opcionales
/**
 * @param {string} nombre
 * @param {number} [age] - Edad opcional
 */

function saludar(nombre, age) {
    console.log(`Hola ${nombre}${age ? ", tienes " + age + " años" : ""}`)
}

saludar('Luis') // podemos no incluir 'age' en la llamada a la función


//// Genérico
/**
 * @template T
 * @param {T[]} elementos
 * @returns {T}
 */

function obtenerElPrimero(elementos) {
    return elementos[0]
}

console.log(obtenerElPrimero(edad)); // 24
