//! Desestructuración de arrays y objetos - DESTRUCTURING

//// ARRAYS
// Ejemplo tradicional
const numeros = [10, 20, 30]
const a = numeros[0]
const b = numeros[1]
const c = numeros[2]
console.log(a, b, c);

// Ejemplo moderno - destructuring
const frutas = ['manzana', 'fresa', 'kiwi']
const [uno, dos, tres] = frutas
console.log(uno, dos, tres);

// Ignorar elementos
const colores = ['rojo', 'verde', 'azul', 'amarillo']
const [primero, ,tercero] = colores
console.log(primero, tercero);

// Valores por defecto
const fruta = ['manzana']
const [f1, f2 = 'pera'] = fruta
console.log(f1, f2);

// Intercambio de variables
// let x = 1
// let y = 2
// [x, y] = [y, x]
// console.log(x, y) // 2 1


//// OBJETOS
//* Destructuring en Objetos
const persona = {
    nombre: 'Laura',
    edad: 28,
    pais: 'España'
}

const {nombre, edad, pais} = persona
console.log(nombre, edad, pais); // Laura 28 España

//* Cambiar el nombre de las variables
const {nombre: name, edad: age} = persona
console.log(name, age); // Laura 28

//* Valores por defecto
const {profesion = 'Sin especificar'} = persona
console.log(profesion); // Sin especificar

//* Destructuring de propiedades anidadas
const usuario = {
    nombre: 'Carlos',
    direccion: {
        ciudad: 'Zaragoza',
        codigoPostal: 34004
    }
}

const {direccion: { ciudad, codigoPostal }} = usuario
console.log(ciudad, codigoPostal); // Zaragoza 34004


//// COMBINAR ARRAYS Y OBJETOS
const productos = [
    {
        id: 1,
        nombre: 'pantalón',
        precio: 30
    }, 
    {
        id: 2,
        nombre: 'camiseta',
        precio: 20
    }
]

productos.forEach(({ nombre, precio }) => {
    console.log(`${nombre} - ${precio}`);
})

    // pantalón - 30
    // camiseta - 20


//// FUNCIONES
function mostrarUsuario({ nombre, edad }) {
    console.log(nombre, edad);
}
const personaUsuario = { nombre: 'Lucía', edad: 30 }
mostrarUsuario(personaUsuario) // Lucía 30