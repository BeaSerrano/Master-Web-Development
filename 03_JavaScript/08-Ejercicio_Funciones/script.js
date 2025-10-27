//! Ejercicio 1 - Función de saludo

function saludar(nombre) {
    console.log(`Hola ${nombre}, ¡bienvenida/o al vurso de JavaScript!`);
}

saludar('Lucía') // Hola Lucía, ¡bienvenida/o al vurso de JavaScript!
saludar('Carlos') // Hola Carlos, ¡bienvenida/o al vurso de JavaScript!


//! Ejercicio 2 - Cálculo de área de un rectángulo

const cacularAreaRectangulo = function (base, altura) {
    const area = base * altura
    return area
}

let resultado = cacularAreaRectangulo(5, 3)
console.log(resultado); // 15


//! Ejercicio 3 - Número par o impar

const esPar = (numero) => {
    if(numero % 2 === 0){
        console.log(`El número ${numero} es par`);
    } else {
        console.log(`El número ${numero} es impar`);
    }
}

esPar(12) // El número 12 es par
esPar(5) // El número 5 es impar

//! Ejercicio 4 - Calculadora básica

const calculadora = (a, b, operacion) => {
    if (operacion === 'sumar'){
        return a + b
    } else if (operacion === 'restar'){
        return a - b
    } else if (operacion === 'multiplicar'){
        return a * b
    } else if (operacion === 'dividir'){
        if (b === 0) {
            return '📣 No se puede dividir entre 0'
        } else {
            return a / b
        }
    } else {
        return `📣 La operación '${operacion}' no es una operación válida. Usa: sumar, restar, multiplicar o dividir.`
    }
}

console.log(calculadora(5, 3, 'sumar')); // 8
console.log(calculadora(10, 5, 'restar')); // 5
console.log(calculadora(2, 8, 'multiplicar')); // 16
console.log(calculadora(50, 0, 'dividir')); // 📣 No se puede dividir entre 0
console.log(calculadora(50, 2, 'dividir')); // 25
console.log(calculadora(5, 3, 'otra cosa')); // 📣 La operación 'otra cosa' no es una operación válida. Usa: sumar, restar, multiplicar o dividir.


//! Ejercicio 5 - Función de cáculo de IMC

const calcularIMC = (peso, altura) => {
    let imc = peso / (altura * altura)
    return imc.toFixed(2)
}

const interpretarIMC = (imc) => {
    if (imc < 18.5){
        return 'Tienes un peso bajo'
    } else if (imc < 25) {
        return 'Tu peso es saludable'
    } else {
        return 'Tienes un peso alto'
    }
}

let resultadoIMC = calcularIMC(65, 1.70)
console.log(resultadoIMC); // 22.49
console.log(interpretarIMC(resultadoIMC)); // Tu peso es saludable
