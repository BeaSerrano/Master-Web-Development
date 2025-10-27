//! TypeScript
// codigo.ts --> tsc codigo.ts ---> codigo.js -----> index.html -----> navegador

//* Tipado de variables en TS

let nombre: string = 'Ana'
let edad: number = 35
let estudiante: boolean = true
let frutas: string[] = ['manzana', 'fresa']
let persona: { nombre:string, edad: number } = {
    nombre: 'Paula',
    edad: 23
}

//* Tipado de variables en TS

function suma(a: number, b: number):number {
    return a + b
}

//* Tipos opcionales (?) y unión (|) de tipos en TS

function saludo(nombre: string, edad?: number) {
    console.log(`Hola ${nombre}${edad ? `, tengo ${edad} años.` : '' }`)
}

saludo('ANA', 30)
saludo('LUIS')

let id: string | number;
id = 123
id = 'abc123'


//* Interfaces y tipos personalizados (type aliases)

// interface

interface Usuario {
    nombre: string
    email: string
    registrado: boolean
}

const usuario1: Usuario = {
    nombre: 'Luis',
    email: 'luis@email.com',
    registrado: true
}


// type alias - personalizado

type ID = string | number;

let usuarioId: ID = 100
let pedidoId: ID = 'P-02125'
let devolucionId: ID = 'D-12'


//* Tipos genéricos

function identidad<T>(valor: T): T {
    return valor;
}

console.log(identidad<string>('Hola'));
console.log(identidad<number>(123));