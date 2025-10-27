//! Arrays

//* Recorrer un array

let frutas = ['Manzana', 'Pera', 'Naranja', 'Fresa']

//// for
// ejecuta una tarea en cada elemento del array, gracias a el recorrido del array y el .length

for (let i = 0; i < frutas.length; i++) {
    console.log(`Fruta ${i + 1}: ${frutas[i]}`);
}

    // Fruta 1: Manzana
    // Fruta 2: Pera
    // Fruta 3: Naranja
    // Fruta 4: Fresa

//// for ... of
// versión más moderna del bucle for pero no controlamos la iteración ni el número de repeticiones

for (let fruta of frutas) {
    console.log(fruta);
}

    // Manzana
    // Pera
    // Naranja
    // Fresa


//// .forEach()
// ejecuta una función en cada elemento del array

frutas.forEach(
    function (fruta, indice) {
        console.log(`Índice ${indice}: ${fruta}`);
    }
)

// forEach con función arrow (flecha)

frutas.forEach((fruta, indice) => console.log(`Índice ${indice}: ${fruta}`))

    // Índice 0: Manzana
    // Índice 1: Pera
    // Índice 2: Naranja
    // Índice 3: Fresa


//// .map()
// ejecuta una función en cada elemento del array y crea un nuevo array con los resultados
// no modifica el array original, crea una copia modificada

let numeros = [1, 2, 3, 4]
let cuadrados = numeros.map(numero => numero * numero) 

console.log('Original:', numeros); // [1, 2, 3, 4]
console.log('Cuadrados:', cuadrados); // [1, 4, 9, 16]

// -- otro ejemplo de map

let precios = [10, 20, 30]
let preciosIVA = precios.map(precio => precio * 1.21)
console.log(preciosIVA); // [12.1, 24.2, 36.3]


//// .filter()
// también crea un nuevo array pero solo incluye en el nuevo array los elementos que cumplan una condición

let edades = [12, 18, 25, 10, 30]
let mayoresEdad = edades.filter(edad => edad >= 18)

console.log(mayoresEdad); // [18, 25, 30]

// -- otro ejemplo de filter

let productos = ['Pan', 'Leche', 'Pasta', 'Pollo']
let resultado = productos.filter((producto) => producto.toLowerCase().includes('pa'))

console.log(resultado); // ['Pan', 'Pasta']


//// .find()
// es igual que filter pero solo devuelve el primer elemento del array que cumple la condición
// si ningún elemento cumple la condición, devuelve undefined

let varios = [3, 8, 12, 5, 10]
let encontrado = varios.find(elemento => elemento > 6)

console.log(encontrado); // 8


//* EJEMPLO PRÁCTICO

let alumnos = [
    { nombre: 'Ana', nota: 8 },
    { nombre: 'Luis', nota: 5 },
    { nombre: 'Marta', nota: 9 },
    { nombre: 'Pedro', nota: 4 }
]

// Mostrar todos los nombres
alumnos.forEach(alumno => console.log(alumno.nombre))

// Crear un array con solo las notas
let notas = alumnos.map(alumno => alumno.nota)
console.log('Notas:', notas);

// Filtrar todos los aprobados
let aprobados = alumnos.filter(alumno => alumno.nota >= 5)
console.log('Aprobados:', aprobados);

// Encontrar el primer sobresaliente
let sobresaliente = alumnos.find(alumno => alumno.nota >= 9)
console.log('Primer sobresaliente:', sobresaliente);