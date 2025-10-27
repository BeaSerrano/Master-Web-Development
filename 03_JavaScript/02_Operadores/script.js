//! Operadores

let resultado = 5 + 3;
console.log(resultado); // 8


//! Operadores aritméticos
// +, -, *, /, %, **

let a = 10;
let b = 3;

console.log('Suma:', a + b); // Suma: 13
console.log('Resta:', a - b); // Resta: 7
console.log('Multiplicación:', a * b); // Multiplicación: 30
console.log('División:', a / b); // División: 3.3333333333333335
console.log('Resto de la división:', a % b); // Resto de la división: 1
console.log('Exponente:', a ** b); // Exponente: 1000

// Ejemplo de número par o impar
console.log(10 % 2 === 0); // true --> es par


//! Operadores de asignación
// =, +=, -=, *=, /=

let x = 5;
x += 3 // x = x + 3 ---> 8
x -= 2 // x = x - 2 ---> 6
x *= 4 // x = x * 4 ---> 24
x /= 2 // x = x / 2 ---> 12

console.log(x);


//! Operadores de incremento y decremento
// ++, --

let contador = 0
contador++ // contador = contador + 1 ---> incrementado en 1 ---> Resultado: 1
contador-- // contador = contador - 1 ---> decrementado en 1 ---> Resultado: 0

console.log(contador);


//! Operadores de comparación
// devuelven un valor booleano ---> true o false
// >, <, >=, <=, ==, ===, !=, !==

let y = 5;
let z = 8;

console.log(y > z); // false
console.log(y < z); // true
console.log(y >= 5); // true
console.log(y <= 3); // false
console.log(y == '5'); // true ---> compara el valor, ignora el tipo de dato
console.log(y === '5'); // false ---> compara valor y tipo de dato, a la vez
console.log(y != z); // true ---> distinto en valor
console.log(y !== 5); // false ---> distinto estrictamente

console.log(5 == '5'); // true
console.log(5 === '5'); // false



//! Operadores lógicos
// && ---> AND ---> todas las condiciones tiene que ser true, si no es false
// || ---> OR ---> al menos una condición tiene que ser true, si no es false
// ! ---> NOT ---> niega el valor, lo pone en el valor contrario

let edad = 25
let carnet = true

console.log(edad >= 18 && carnet === true); // true ---> mayor de edad y carnet
console.log(edad < 18 || carnet === true); // true ---> cumple una sola condición 
console.log(!carnet); // false ---> carnet el inicio es true, y esto es lo contrario

// Ejemplo con un condicional

if (edad >= 18 && carnet) {
    console.log('Puedes conducir 🟢');
} else {
    console.log('NO puedes conducir 🔴');
} 
// Resultado: Puedes conducir 🟢


//! Operador de concatenación
// +

let nombre = 'Laura'
let saludo = 'Hola'
console.log(saludo + ' ' + nombre); // Hola Laura

// o usamos plantillas literales --> literal strings ---> backticks ```
console.log(`${saludo} ${nombre}`); // Hola Laura

// Más ejemplos de concatenaciones

console.log(typeof (1 + '2')); // 12 ---> string
console.log(typeof ('2' - 1)); // 1 ---> number