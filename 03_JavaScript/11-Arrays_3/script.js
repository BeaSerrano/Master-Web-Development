//! Arrays

//// .reduce()
// reducimos un array a un solo valor -- ej: suma de todos los elementos de un array

let numeros = [5, 10, 15, 20]

let suma = numeros.reduce((acumulador, actual) => acumulador + actual, 0)
console.log('Suma total:', suma); // 50

    // 0 + 5 = 5
    // 5 + 10 = 15
    // 15 + 15 = 30
    // 30 + 20 = 50

// -- ejemplo real

let precios = [10, 20, 30.50, 29.90]
let gastosEnvio = 5 // valor inicial del acumulador

let total = precios.reduce((acc, precio) => acc + precio, gastosEnvio)
console.log(total); // 95.4

//// .sort()
// ordenar los elementos de un array - hecho para strings pero se puede usar en numbers

let frutas = ['plátano', 'pera', 'sandia', 'kiwi']
console.log(frutas.sort()); // ['kiwi', 'pera', 'plátano', 'sandia']

let numerosSort = [10, 2, 8, 1, 20]

// orden ascendente
numerosSort.sort((a, b) => a - b)
console.log(numerosSort); // [1, 2, 8, 10, 20]

// orden descendente
numerosSort.sort((a, b) => b - a)
console.log(numerosSort); // [20, 10, 8, 2, 1]

//// .some() y .every()
// comprobar condiciones en un arrays
// devuelven un valor booleano

// some ---> devuelve true si al menos un elemento del array cumple la condición
// every ---> devuelve true si todos los elementos de un array cumplen la condición

let edades = [12, 17, 25, 30]

console.log(edades.some((edad) => edad >= 18)); // true
console.log(edades.every((edad) => edad >= 18)); // false


//* COMBINAR MÉTODOS

let productos = [
    { nombre: 'Pan', precio: 1.2 },
    { nombre: 'Leche', precio: 1.8 },
    { nombre: 'Huevos', precio: 2.5 },
    { nombre: 'Café', precio: 4.0 }
]

// Obtener los nombres de los productos que valen más de 2€

let resultado = productos
.filter((producto) => producto.precio > 2)
.map((producto) => producto.nombre)
.sort()


console.log(resultado); // ['Café', 'Huevos']


