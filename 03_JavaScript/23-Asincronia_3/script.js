//! Asincronía - Promesas 3

//// async / await

    // function promesaSimple() {
    //     return new Promise((resolve) => {
    //         setTimeout(() => resolve('✅ Promesa resuelta'), 2000);
    //     })
    // }

    // async function ejecutar() {
    //     console.log('🕛 Esperando...');
    //     const resultado = await promesaSimple()
    //     console.log(resultado);
    //     console.log('🥳 Terminamos');
    // }

    // ejecutar()

//* diferencia de await y .then

//? con .then

    // obtenerDatos()
    // .then((res) => procesarDatos(res))
    // .then((resultadoDatos) => console.log(resultadoDatos))
    // .catch((error) => console.error(error))

//? con async/await

    // async function obtenerDatos() {
    //     try {
    //         const res = await obtenerDatos()
    //         const resultadoDatos = await procesarDatos()
    //         console.log(resultadoDatos);
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }

//* manejar try catch en asincronía con async/await

// const obtenerNumero = () => {
//     return new Promise((resolve, reject) => {
//         const numero = Math.random()
//         setTimeout(() => {
//             if(numero > 0.5){
//                 resolve(`✅ Número válido: ${numero.toFixed(2)}`)
//             } else {
//                 reject(`❌ Número demasiado bajo: ${numero.toFixed(2)}`)
//             }
//         }, 2000);
//     })
// }

// const ejecutarPromesa = async () => {
//     try {
//         console.log('🔄 Iniciando comprobación...');
//         const resultado = await obtenerNumero()
//         console.log(resultado);
//     } catch (error) {
//         console.error('⚠️ Error detectado:', error)
//     } finally {
//         console.log('🕓 Proceso finalizado')        
//     }
// }

// ejecutarPromesa()


//* fetch

const obtenerUsuarios = async () => {
    try {
        console.log('👥 Cargando usuarios...');
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        console.log(res);

        if (!res.ok) throw new Error("❌ Error en la respuesta del servidor");

        const usuarios = await res.json()
        console.log('✅ Usuarios obtenidos:');
        usuarios.forEach(usuario => console.log(`- ${usuario.name}`));
    } catch (error) {
        console.error('⚠️ Ocurrió un error:', error.message)
    } finally {
        console.log('🕓 Petición a la API finalizada')
    }
}

obtenerUsuarios()