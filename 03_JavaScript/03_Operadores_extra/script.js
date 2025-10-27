//! Operadores EXTRA

//! Operador ternario
// condicion ? true : false

// Ejemplo de condición normal

let edad = 20;
let mensaje;

if(edad >= 18){
    mensaje = 'Eres mayor de edad'
} else {
    mensaje = 'Eres menor de edad'
}

console.log('Mensaje:', mensaje); // Eres mayor de edad


// Mismo ejemplo con operador ternario

let mensajeTernario = (edad >= 18) ? 'Eres mayor de edad' : 'Eres menor de edad';

console.log('Mensaje Ternario:', mensajeTernario); // Eres mayor de edad


//! Operador de concantenación de arrays

let frutas1 = ['manzana', 'pera']
let frutas2 = ['kiwi', 'sandía', 'limón']

let todasString = frutas1 + frutas2 // 'manzana,perakiwi,sandía,limón'

let todasArray = frutas1.concat(frutas2) // ['manzana', 'pera', 'kiwi', 'sandía', 'limón']


//! Operador de coalescencia nula
// ??
// sirve para asignar un valor por defecto cuando una variable es null o undefined

let usuario = null
let nombre = usuario ?? 'Invitado'
console.log(nombre); // Invitado
