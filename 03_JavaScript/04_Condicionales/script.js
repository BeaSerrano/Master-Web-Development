//! CONDICIONALES

//* if 

let edad = 18

if (edad >= 18) {
    console.log('Eres mayor de edad'); // Eres mayor de edad
}

//* if ... else

let hora = 9

if(hora < 12){
    console.log('Buenos días'); // Buenos días
} else {
    console.log('Buenas tardes');
}

//* if..else if...else

let nota = 7

if(nota >= 9){
    console.log('Sobresaliente');
} else if(nota >= 7){
    console.log('Notable'); // Notable
} else if(nota >= 5){
    console.log('Aprobado');
} else {
    console.log('Suspenso');
}

//* condiciones anidadas

let user = 'admin'
let password = '1234'

if(user === 'admin'){
    if(password === '1234'){
        console.log('Acceso a admin permitido'); // Acceso a admin permitido
    } else {
        console.log('Contraseña incorrecta');
    }
} else {
    console.log('Usuario admin no reconocido');
}


//* operador ternario
// condicion ? true : false

let age = 20

let mensaje = (age >= 18) ? 'Puedes entrar' : 'No puedes entrar'

console.log(mensaje); // Puedes entrar


//* switch

let dia = 'martes'

switch (dia) {
    case 'lunes':
        console.log('Inicio de semana, es lunes');
        break;

    case 'martes':
        console.log('Ya queda menos de semana, es martes'); // 🟢
        break;

    case 'miércoles':
        console.log('Mitad de semana, es miércoles');
        break;

    case 'jueves':
        console.log('Ya casi eds finde, es jueves');
        break;

    case 'viernes':
        console.log('Por fin! Es fin de semana, es viernes');
        break;

    default:
        console.log('Sábado y domingo no se trabaja');
        break;
}


//* EJEMPLO PRÁCTICO - semáforo

let color = prompt('Introduce un color: 🔴 rojo, 🟡 amarillo o 🟢 verde').toUpperCase()
console.log(color);

if(color === 'ROJO'){
    console.log('No puedes pasar');
} else if (color === 'AMARILLO'){
    console.log('Precaución, tienes que estar atento');
} else if(color === 'VERDE'){
    console.log('Puedes pasar');
} else {
    console.log('Introduce un color válido');
}


// .toLowerCase() ---> convierte en minúscula
// .toUpperCase() ---> convierte en mayúscula