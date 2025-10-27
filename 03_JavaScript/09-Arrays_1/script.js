//! Array -- es una colección ordenada de datos
// se guarda dentro de una sola variable
// cada dato del array tiene una posición que llama índice y siempre empieza a contar desde 0 (primera posición)

let frutas = [ 'Manzana', 'Pera', 'Kiwi', 'Fresa' ]
console.log(frutas); // ['Manzana', 'Pera', 'Kiwi', 'Fresa'] 🟢
console.log(frutas[0]); // Manzana
console.log(frutas[3]); // Fresa

//* Cambio de un elemento del array por posición
frutas[1] = 'Naranja'
console.log(frutas); // ['Manzana', 'Naranja', 'Kiwi', 'Fresa'] 🟢

//* Ver cuántos elementos tiene un array
// la propiedad .lenght nos devuelve el total de elementos del array

console.log(frutas.length); // 4

//* Añadir elementos

// .push(elemento) --> añade un elemento al final del array y devuelde la longitud del array
frutas.push('Plátano')
console.log(frutas); // ['Manzana', 'Naranja', 'Kiwi', 'Fresa', 'Plátano'] 🟢

// .unshift(elemento) --> añade un elemento al principio del array y devuelde la longitud del array
frutas.unshift('Sandía')
console.log(frutas); // ['Sandía', 'Manzana', 'Naranja', 'Kiwi', 'Fresa', 'Plátano'] 🟢

//* Eliminar elementos

// .pop() --> elimina el último elemento del array y devuelve ese elemento eliminado
frutas.pop()
console.log(frutas); // ['Sandía', 'Manzana', 'Naranja', 'Kiwi', 'Fresa'] 🟢

// .shift() --> elimina el primer elemento del array y devuelve ese elemento eliminado
frutas.shift()
console.log(frutas); // ['Manzana', 'Naranja', 'Kiwi', 'Fresa'] 🟢

//* Buscar elementos en un array

// .includes(elemento) --> devuelve true o false dependiendo de si el elemento está o no en el array
console.log(frutas.includes('Pera')); // false
console.log(frutas.includes('Manzana')); // true

// .indexOf(elemento) --> devuelve el índice o posición del elemento que buscamos. Si no lo encuentra, devuelve -1
console.log(frutas.indexOf('Pera')); // -1
console.log(frutas.indexOf('Manzana')); // 0


//* EJEMPLO LISTA DE TAREAS

let listaTareas = ['Estudiar', 'Hacer ejercicio', 'Comprar pan']

console.log('Lista inicial', listaTareas); // Lista inicial: ['Estudiar', 'Hacer ejercicio', 'Comprar pan'] 🟢

// Añadir una nueva tarea
listaTareas.push('Sacar perro')
console.log('Después de añadir', listaTareas); // ['Estudiar', 'Hacer ejercicio', 'Comprar pan', 'Sacar perro'] 🟢


// Eliminar la primera tarea
listaTareas.shift()
console.log('Después de eliminar la primera', listaTareas); // ['Hacer ejercicio', 'Comprar pan', 'Sacar perro'] 🟢

// Comprobar si una tarea existe
if (listaTareas.includes('Recoger lavadora')) {
    console.log('Si tienes que hacerlo'); // No tienes que hacerlo
} else {
    console.log('No tienes que hacerlo');
}

// Mostrar cuaántas tareas hay
console.log(`Tienes ${listaTareas.length} tareas pendientes`); // Tienes 3 tareas pendientes