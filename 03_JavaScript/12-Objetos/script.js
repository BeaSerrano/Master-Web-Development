//! Objetos literales
// conjunto de pares {clave:valor}

let persona = {
    nombre: 'Laura',
    edad: 30,
    profesion: 'Fullstack'
}

console.log(persona);

//* Acceder a las propiedades

console.log(persona.nombre); // Laura - común
console.log(persona['edad']); // 30

let propiedad = 'profesion'
console.log(persona[propiedad]); // Fullstack


//* Modificar, añadir y eliminar propiedades

persona.edad = 31 // modificar
persona.ciudad = 'Madrid' // añadir
delete persona.profesion // eliminar

console.log(persona);


//* Métodos en objetos

let coche = {
    marca: 'Toyota',
    modelo: 'Auris',
    arrancar: function () {
        console.log('El coche ha arrancado 🚗'); // método - es una función dentro de un objeto
    },
    describir: function () {
        console.log(`Este coche es un ${this.marca} ${this.modelo}`); // this - se refiere al propio objeto en el que nos encontramos
    }
}

coche.arrancar() // El coche ha arrancado 🚗
coche.describir() // Este coche es un Toyota Auris


//* Objetos anidados y arrays dentro de objetos

let alumno = {
    nombre: 'Carlos',
    edad: 22,
    curso: 'Desarrollo Web',
    notas: [8, 7, 9],
    direccion: {
        calle: 'Calle Carlos',
        numero: 10,
        ciudad: 'Barcelona'
    },
    promedio: function () {
        let total = this.notas.reduce((acc, actual) => acc + actual, 0)
        return (total / this.notas.length).toFixed(2)
    }
}

console.log(alumno.nombre); // Carlos
console.log(alumno.direccion.ciudad); // Barcelona
console.log(alumno.promedio()); // 8.00


//* Recorrer propiedades en un objeto

//// buble for...in

for (const propiedad in persona) {
    console.log(`${propiedad}: ${persona[propiedad]}`);
}

    // nombre: Laura
    // edad: 31
    // ciudad: Madrid

//// Object.keys(), Object.values(), Object.entries() 
// devuelven un array

console.log(Object.keys(persona)); // ['nombre', 'edad', 'ciudad']
console.log(Object.values(persona)) // ['Laura', 31, 'Madrid']
console.log(Object.entries(persona));

        // [Array(2), Array(2), Array(2)]
        //     ['nombre', 'Laura']
        //     ['edad', 31]
        //     ['ciudad', 'Madrid']


