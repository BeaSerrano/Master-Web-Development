//! Variables
// Las variables guardan datos de distinto tipo

let nombre = "Sara"; // dato string - cadena de texto
let edad = 25; // dato number - número

console.log(nombre)
console.log(edad);


//! Reglas para nombrar variables

let apellido = 'Martín'; // 🟢
let Apellido = 'Martín'; // 🔴

let nombre_completo = 'Sara Martín' // 🟢
let nombreCompleto = 'Sara Martín' // 🟢 camelCase
// let nombre-completo = 'Sara Martín' // 🔴

// let 1nombre = 'Luis' // 🔴 - no puede empezar con número
// let let = 'texto' // 🔴 - palabra reservada


//! Formas de declarar una variable - Keywords

var ciudad = 'Sevilla' // 🔴 - en desuso

let pais = 'España' // 🟢 - puede reasignar el valor de una variable con let
pais = 'Alemania'

const continente = 'Europa' // 🟢 - variables constantes, su valor no cambia


//! Tipos de datos en variables

let comida = 'Macarrones con tomate' // string (texto)
let telefono = 600600600 // number
let mayorDeEdad = true // booleano (true o false)
let frutas = ['manzana', 'plátano', 'kiwi'] // array (colección de datos)
let persona = { // objeto (colección de datos con clave : valor)
    nombre: 'Laura',
    edad: 30,
    estudiante: false
}
let sinValor = null; // nulo, sin valor
let vacio; // undefined - variable indefinida, no hay ningún valor dentro

console.log(comida); // 'Macarrones con tomate'
console.log(telefono); // 600600600
console.log(mayorDeEdad); // true
console.log(frutas); // ['manzana', 'plátano', 'kiwi']
console.log(frutas[0]); // 'manzana'
console.log(persona); // {nombre: 'Laura', edad: 30, estudiante: false}
console.log(persona.edad); // 30
console.log(sinValor); // null
console.log(vacio); // undefined


//! Concatenación y Template String

let name = 'Carlos';
let age = 31;

console.log('Hola, me llamo ' + name + ' y tengo ' + age + ' años.'); // concatenar

console.log(`Hola, me llamo ${name} y tengo ${age} años.`); // 🟢 template string con backticks `` 


