//! Asincronía - Promesas 2

//* encadenar promesas

// function paso1() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('✅ Paso 1 completado');
//             resolve()
//         }, 1500);
//     })
// }

// function paso2() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('✅ Paso 2 completado');
//             resolve()
//         }, 1500);
//     })
// }

// function paso3() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('✅ Paso 3 completado');
//             resolve()
//         }, 1500);
//     })
// }

// paso1()
// .then(paso2)
// .then(paso3)
// .then(() => console.log('🥳 Todos los pasos completados'))


//* encadenar datos entre promesas

// function obtenerUsuario() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ nombre: 'Laura', id: 101})
//         }, 1500);
//     })
// }

// function obtenerPedidos(usuario) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([
//                 { id: 1, producto: 'camiseta'},
//                 { id: 2, producto: 'pantalón'}
//             ])
//         }, 1500);
//     })
// }

// function mostrarPedidos(pedidos) {
//     console.log("📦 Pedidos del usuario:");
//     pedidos.forEach((pedido) => console.log(`- ${pedido.producto}`));
// }

// obtenerUsuario()
// .then((usuario) => {
//     console.log('🧑‍🤝‍🧑 Usuario:', usuario.nombre);
//     return obtenerPedidos(usuario)
// })
// .then((pedidos) => mostrarPedidos(pedidos))
// .catch((error) => console.error('❌ Error:', error))


//* manejo de errores

// function pedirDatos() {
//     return new Promise((resolve, reject) => {
//         const exito = Math.random() > 0.5
//         console.log(exito);


//         setTimeout(() => {
//             if (exito) {
//                 resolve('✅ Datos recibidos correctamente')
//             } else {
//                 reject('❌ Error al recibir los datos')
//             }
//         }, 2000);
//     })
// }

// pedirDatos()
// .then((mensaje) => console.log(mensaje))
// .catch((error) => console.error(error))
// .finally(() => console.log('🕛 Operación finalizada'))



//* Promise.all() - varias promesas al mismo tiempo

// const promesa1 = new Promise((resolve) => {
//     setTimeout(() => resolve('🍞 Pan listo'), 2000)
// })

// const promesa2 = new Promise((resolve) => {
//     setTimeout(() => resolve('🧀 Queso listo'), 1500)
// })

// const promesa3 = new Promise((resolve) => {
//     setTimeout(() => resolve('🍅 Tomate listo'), 1000)
// })

// Promise.all([ promesa1, promesa2, promesa3 ])
// .then((resultados) =>{
//     console.log('🥪 Ingredientes preparados:', resultados);
//     console.log('✅ Bocadillo completado');
// })
// .catch((error) => console.error('❌ Falló alguna promesa:', error))


//* Promise.race() - devuelve la primera promesa que se resuelva o se rechace

const lenta = new Promise((resolve) => {
    setTimeout(() => resolve('🐢 Lenta'), 3000)
})

const rapida = new Promise((resolve) => {
    setTimeout(() => resolve('💫 Rápida'), 1000)
})

Promise.race([ lenta, rapida ])
.then((resultado) => console.log('Ganadora:', resultado))