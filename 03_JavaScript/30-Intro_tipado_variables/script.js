//! Intro - Tipado de variables

// Tipado = tipo de datos

let nombre = 'Laura' // string
let edad = 30 // number
let estudiante = true // boolean
let frutas = ['manzana', 'fresa'] // array
let persona = { nombre: 'Paula', edad: 24 } // object
let nada = null // null
let indefinido // undefined

// Tipado dinámico (débil)

let dato = '25' // string
dato = 25 // number

console.log('2' + 2); // 22 - string - el operador + concatena
console.log('2' * 2); // 4 - number - otros operadores convierten el string el número

console.log(typeof nombre); // string
console.log(typeof edad); // number
console.log(typeof estudiante); // boolean
console.log(typeof frutas); // object - array
console.log(typeof persona); // object - object
console.log(typeof nada); // object - null
console.log(typeof indefinido); // undefined


// Coerción de tipos

    // Coerción implícita
    console.log('5' + 3); // 53 - string
    console.log('5' - 3); // 2 - number
    
    // Coerción explícita
    let texto = '42' // string
    let numero = Number(texto) // 42 - number
    console.log(numero + 8); // 50 - hace la suma


// Valores primitivos y tipos por referencia

    //* Primitivos (primitives)
    // string, number, boolean, undefined, null, symbol
    //? inmutables - su valor no puede cambiar una vez creado

    let a = 10
    let b = a
    b = 20
    console.log(a); // 10 - no cambia
    

    //* Por referencia (reference)
    // object, array, function
    //? se almacenan por referencia, no por valor

    let numeros = ['uno', 'dos', 'tres']
    let copiaNumeros = numeros
    copiaNumeros.push('cuatro')
    console.log(numeros); // ['uno', 'dos', 'tres', 'cuatro'] - ha cambiado


//* BUENAS PRÁCTICAS

// usar const en vez de let siempre que el valor no vaya a cambiar
// validar los tipos
// evitar mezclar string y numbers con operaciones
// usar: typeof, Array.isArray(), instanceOf --- para verificar tipos

