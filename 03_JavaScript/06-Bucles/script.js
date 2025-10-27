//! BUCLES

//* for
// cuando sabemos cuántas veces queremos repetir algo, cuando sabemos el número de iteraciones

    // for(inicialización; condicion; incremento){
    //     // código a repetir
    // }

        //? Imprimir del 1 al 5

        for (let i = 1; i <= 5; i++) {
            console.log('Números:', i);
        }
        
        // 1 --> i = 1 --> 1 + 1 = 2
        // 2 --> i = 2 --> 2 + 1 = 3
        // 3 ---> i = 3 --> 3 + 1 = 4
        // 4 ---> i = 4 --> 4 + 1 = 5
        // 5 --> i = 5 --> 5 + 1 = 6
        // 6 --> i = 6 --> sale del bucle

        //? Imprimir solo los impares del 1 al 5

        for (let i = 1; i <= 5; i+=2) {
            console.log('Impares:', i);
        }

        // 1 --> i = 1 --> 1 + 2 = 3
        // 2 --> i = 3 --> 3 + 2 = 5
        // 3 --> i = 5 --> 5 + 2 = 7
        // 4 --> i = 7 --> sale del bucle

        //? Imprimir solo los pares

        for (let i = 1; i <= 10; i++) {
            if(i % 2 === 0){
                console.log('Pares: ', i);
            }
        }


//* while
// cuando no sabemos cuántas veces se va a repetir algo, cuando no sabemos el número de iteraciones

    // let contador = 1;

    // while (contador <= 5) {
    //     console.log('Contando:', contador);
    //     contador++
    // }

    // //? Pedir contraseña

    // let password = ''

    // while (password !== '1234') {
    //     password = prompt('Introduce la contraseña')
    //     console.log(password);
    // }

    // console.log('Contraseña correcta!');


//* do...while
// parecido a while pero se ejecuta al menos una vez aunque la condición no se cumpla

    // let numero = 0

    // do {
    //     numero = prompt('Introduce un número mayor que 0')
    // } while (numero <= 0);



//* break y continue -- parar un bucle

// break -- interrumple el bucle completamente cuando se cumple una condición
for (let i = 1; i <= 10; i++) {
    if(i === 5){
        console.log('Se detiene el bucle en el número 5');
        break
    }
    console.log(i);
}

// continue -- salta una iteración y sigue con la siguiente
for (let i = 1; i <= 5; i++) {
    if(i === 3){
        continue
    }
    console.log(i);
}


//* EJEMPLO

let intentos = 0
let clave

while (clave !== '1234' && intentos < 3) {
    clave = prompt('Introduce la clave')
    intentos++
}

if(clave === '1234'){
    console.log('OK');
} else {
    console.log('KO');
}