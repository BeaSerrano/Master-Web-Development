//! Operadores Rest y Spread
// ...

//// Rest - agrupar

// arrays
const numeros = [10, 20, 30, 40 , 50]
const [primero, segundo, ...resto] = numeros

console.log(primero); // 10
console.log(segundo); // 20
console.log(resto); // [30, 40, 50]
console.log(...numeros); // 10 20 30 40 50


// funciones
function sumar(...numeros) {
    return numeros.reduce((acc, n) => acc + n, 0)
}

console.log(sumar(2, 4, 6)); // 12
console.log(sumar(1, 2, 3, 4, 5)); // 15

// objetos
const usuario = {
    nombre: 'María',
    edad: 40,
    pais: 'España',
    profesion: 'Ingeniera'
}

const {nombre, ...restousuario} = usuario
console.log(nombre); // María
console.log(restousuario); // {edad: 40, pais: 'España', profesion: 'Ingeniera'}


//// Spread - expandir

// copiar arrays
const frutas = ['manzana', 'pera', 'naranja']
const copiaFrutas = [...frutas]

console.log(frutas); // ['manzana', 'pera', 'naranja']
console.log(copiaFrutas); // ['manzana', 'pera', 'naranja']

console.log(frutas === copiaFrutas); // false

// combinar arrays
const tropicales = ['piña', 'mango']
const todas = [...frutas, ...tropicales]

console.log(todas); // ['manzana', 'pera', 'naranja', 'piña', 'mango']


// uso en funciones
const numerosM = [3, 8, 1, 6]
console.log(Math.max(...numerosM)); // 8

// uso en objetos
const persona = {
    nombre: 'Sergio',
    edad: 29
}

const datosExtra = {
    pais: 'Chile',
    profesion: 'Desarrollador'
}

const perfil = {...persona, ...datosExtra}

console.log(perfil); // {nombre: 'Sergio', edad: 29, pais: 'Chile', profesion: 'Desarrollador'}
