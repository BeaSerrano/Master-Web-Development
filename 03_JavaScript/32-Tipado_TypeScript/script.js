//! TypeScript
// codigo.ts --> tsc codigo.ts ---> codigo.js -----> index.html -----> navegador
//* Tipado de variables en TS
var nombre = 'Ana';
var edad = 35;
var estudiante = true;
var frutas = ['manzana', 'fresa'];
var persona = {
    nombre: 'Paula',
    edad: 23
};
//* Tipado de variables en TS
function suma(a, b) {
    return a + b;
}
//* Tipos opcionales (?) y unión (|) de tipos en TS
function saludo(nombre, edad) {
    console.log("Hola ".concat(nombre).concat(edad ? ", tengo ".concat(edad, " a\u00F1os.") : ''));
}
saludo('ANA', 30);
saludo('LUIS');
var id;
id = 123;
id = 'abc123';
var usuario1 = {
    nombre: 'Luis',
    email: 'luis@email.com',
    registrado: true
};
var usuarioId = 100;
var pedidoId = 'P-02125';
var devolucionId = 'D-12';
//* Tipos genéricos
function identidad(valor) {
    return valor;
}
console.log(identidad('Hola'));
console.log(identidad(123));
