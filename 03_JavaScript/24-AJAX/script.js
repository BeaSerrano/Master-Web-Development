//! AJAX

//* antes de fetch -- XMLHttpRequest

// const xhr = new XMLHttpRequest()
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts')
// xhr.onload = () => console.log(JSON.parse(xhr.responseText));
// xhr.send()

//* ejemplo con fetch()

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(error => console.error('Error:', error))

//* ejemplo con HTML - boton cargar usuarios - recibir datos GET

const boton = document.getElementById('cargar')
const lista = document.getElementById('lista')

boton.addEventListener('click', async () => {
    try {
        lista.innerHTML = "<li>Cargando usuarios...</li>"

        const res = await fetch('https://jsonplaceholder.typicode.com/users')

        if (!res.ok) throw new Error('Error al cargar los ususarios.')
        
        const data = await res.json()
        lista.innerHTML = '' // limpiamos el li con Cargando usuarios...

        data.forEach(usuario => {
            const li = document.createElement('li')
            li.textContent = `${usuario.name} (${usuario.email})`
            lista.appendChild(li)
        });

    } catch (error) {
        lista.innerHTML = `<li style="color:red;">${error.message}</li>`
    } finally {
        console.log('✅ Petición AJAX finalizada');
    }
})

//* enviar datos con POST

const enviarDatos = async () => {
    const nuevoUsuario = {
        name: 'María',
        email: 'maria@example.com'
    }

    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevoUsuario)
    })

    const data = res.json()
    console.log('Usuario creado:', data);
}

enviarDatos()