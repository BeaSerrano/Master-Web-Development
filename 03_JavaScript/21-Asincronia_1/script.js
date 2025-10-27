//! Asincronía - Promesas 1

// console.log('Inicio');

// setTimeout(() => {
//     console.log('Tarea asíncrona completada');
// }, 2000);

// console.log('Fin');

//* sincronía y asincronía

// // ejemplo síncrono
// console.log('1️⃣ Prepar café');
// console.log('2️⃣ Servirlo');
// console.log('3️⃣ Beberlo');

// // ejemplo asíncrono
// console.log('1️⃣ Pido un café');
// setTimeout(() => console.log('2️⃣ El camarero me lo sirve'), 2000)
// console.log('3️⃣ Mientras tanto, miro el móvil');

//* callbacks - función como parámetro de otra función

// function pedirPizza(callback) {
//     console.log('🍕 Pidiendo pizza...');
    
//     setTimeout(() => {
//         console.log('👌 Pizza lista');
//         callback()
//     }, 2000);
// }

// function comerPizza() {
//     console.log('🤤 Comiendo la pizza');
    
// }

// pedirPizza(comerPizza)


//* callback hell ❌

// setTimeout(() => {
//     console.log("Paso 1");
//     setTimeout(() => {
//         console.log("Paso 2");
//         setTimeout(() => {
//         console.log("Paso 3");
//         }, 1000);
//     }, 1000);
// }, 1000);


//* PROMESAS

// pending - pendiente - la operación está en curso
// fulfilled - resuelta - se completó correctamente (.then)
// rejected - rechazada - ocurrió un error (.catch)

// Ejemplo de promesa

const pedido = new Promise((resolve, reject) => {
    const exito = false // prueba con false para ver el error
    console.log('🍔 Haciendo el pedido...');
    
    setTimeout(() => {
        if (exito) {
            resolve('👌 Pedido entregado correctamente')
        } else {
            reject('❌ El pedido ha tenido un problema')
        }
    }, 2000);
})

pedido
.then((resultado) => {
    console.log('✅ Éxito:', resultado);
})
.catch((error) => {
    console.log('🔸 Error:', error);
})