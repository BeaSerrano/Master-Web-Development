//! Ejercicio 1 – Clasificación por edad 

// let edad = prompt('¿cuántos años tienes?')

// if (edad < 12){
//     console.log('Eres un/a niño/a');
// } else if (edad >=12 && edad < 18){
//     console.log('Eres un/a adolestente');
// } else if (edad >= 18 && edad < 65){
//     console.log('Eres un/a adulto/a');
// } else {
//     console.log('Eres una persona mayor');
// }


//! Ejercicio 2 – Calificación académica 

// let nota = prompt('Introduce tu nota. De 0 a 10:')

// if(nota >= 0 && nota < 5){
//     console.log('Suspenso');
// } else if (nota >= 5 && nota < 7){
//     console.log('Aprobado');
// } else if (nota >= 7 && nota < 9){
//     console.log('Notable');
// } else if (nota >= 9 && nota <= 10){
//     console.log('Sobresaliente');
// } else {
//     console.log('Nota no válida');
// }



//! Ejercicio 3 – Día de la semana

// let dia = prompt('Introduce un día de la semana:').toLowerCase()

// switch (dia) {
//     case 'lunes':
//         console.log('¡Ánimo, empieza la semana!');
//         break;
    
//     case 'viernes':
//         console.log('¡Por fin es viernes!');
//         break;

//     case 'sábado':
//         console.log('Fin de semana. ¡A descansar!');
//         break;

//     case 'domingo':
//         console.log('Fin de semana. ¡A descansar!');
//         break;

//     default:
//         console.log('Un día más para seguir aprendiendo.');
//         break;
// }



//! Ejercicio 4 (extra) – Login sencillo

// let usuarioGuardado = 'admin'
// let contrasenaGuardado = '1234'

// let usuario = prompt('Introduce tu nombre de usuario')

// if(usuario === usuarioGuardado){
//     let contrasena = prompt('Introduce tu contraseña')

//     if(contrasena === contrasenaGuardado){
//         console.log('Acceso permitido');
//     } else {
//         console.log('Contraseña incorrecta');
//     }
// } else {
//     console.log('Usuario no válido');
// }