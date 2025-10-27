//! Tipado nativo de JavaScript

//* Tipos primitivos
// string, boolean, number, undefined, null, symbol

//// string
let texto = 'Hola mundo'
console.log(typeof texto); // string
console.log(texto.toUpperCase()); // HOLA MUNDO

//// number
let edad = 30
let precio = 12.90
console.log(typeof edad, typeof precio); // number number

console.log(0.1 + 0.2); // 0.30000000000000004

let numeroInfinito = 0.30000000000000004
console.log(numeroInfinito.toFixed(2)); // 0.30

//// boolean
let activo = true
let visible = false

if ('hola') console.log('Truthy'); // se ejecuta
if (0) console.log('Falsy'); // no se ejecuta
if (undefined) console.log('Falsy'); // no se ejecuta

//// undefined y null
let dato
console.log(dato); // undefined - no está definido, no tiene valor
console.log(typeof dato); // undefined


let vacio = null
console.log(vacio); // null - tiene valor nulo o es una variable vacía
console.log(typeof vacio); // object


//// symbol
const id = Symbol('id')
console.log(id); // Symbol(id)
console.log(typeof id); // symbol




//* Tipos por referencia
// object, array, function, date, map, set, ...

//// object
const persona = {
    nombre: 'Ana',
    edad: 34,
    saludo: function () {
        return `Hola, soy ${this.nombre}`
    }
}

console.log(persona); // {nombre: 'Ana', edad: 34, saludo: ƒ}
console.log(typeof persona); // object


//// array
const viviendas = ['casa', 'piso', 'chalet']
console.log(viviendas); // ['casa', 'piso', 'chalet']
console.log(typeof viviendas); // object
console.log(Array.isArray(viviendas)); // true

const variado = [1, 'casa', 'pera', true, ['rojo', 'verde'], { coche: 'turismo', marca: 'toyota'}]
console.log(variado); // [1, 'casa', 'pera', true, ['rojo', 'verde'], { coche: 'turismo', marca: 'toyota'}]
console.log(typeof variado); // object
console.log(Array.isArray(variado)); // true


//// function
function saludar() {
    console.log('Hola');
}

saludar() // Hola
console.log(saludar); // imprime la función
console.log(typeof saludar); // function



//* Herramientas para comprobar tipos

//// typeof ---> devuelve el tipo primitivo de una variable (exc. function)

typeof 'hola' // string
typeof 25 // number
typeof null // object
typeof Date // function

//// Array.isArray() ---> permite saber si un valor es un array

console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray({})); // false

//// instanceof ---> comprueba si un objeto pertenece a una clase o un tipo específico

const fecha = new Date()
console.log(fecha instanceof Date); // true
console.log(fecha instanceof Array); // false

//// Object.prototype.toString.call() ---> más preciso

console.log(Object.prototype.toString.call([])); // [object Array]
console.log(Object.prototype.toString.call({})); // [object Object]
console.log(Object.prototype.toString.call(null)); // [object Null]
console.log(Object.prototype.toString.call(123)); // [object Number]


//* Curiosidades

console.log(typeof NaN); // number ---> Not a Number
console.log(NaN === NaN); // false
console.log(typeof null); // object
console.log([] == false); // true
console.log(0 == false); // true