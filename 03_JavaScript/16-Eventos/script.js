//! Eventos
// elemento.addEventListener('click', funcion)

const boton = document.getElementById('saludo')
const nombre = document.getElementById('nombre')
const mensaje = document.getElementById('mensaje')

// evento click
boton.addEventListener('click', () => {
    console.log('Has hecho click en el botón');
})

// evento input
nombre.addEventListener('input', () => {
    console.log('Escribiendo:', nombre.value);
})

// evento keydown y keyup
document.addEventListener('keydown', (e) => {
    console.log('Tecla presionada:', e.key);
})

// evento mouseover / mouseout
boton.addEventListener('mouseover', () => {
    boton.style.backgroundColor = 'yellow'
})

boton.addEventListener('mouseout', () => {
    boton.style.backgroundColor = ''
})

// El objeto 'event' = e
boton.addEventListener('click', (e) => {
    console.log(e); // evento completo
    console.log(e.type); // tipo de evento - click
    console.log(e.target); // elemento que origina el evento - boton en html
    console.log(e.key); // tecla pulsada - undefined (ratón)
})

nombre.addEventListener('input', (e) => {
    console.log('Evento:', e.type);
    console.log('Elemento:', e.target);
    console.log('Valor actual:', e.target.value);
})

//* EJEMPLO PRÁCTICO
// boton, nombre, mensaje

boton.addEventListener('click', () => {
    const valorInput = nombre.value.trim()

    if (valorInput === ''){
        mensaje.textContent = 'Por favor, escribe tu nombre primero'
        mensaje.style.color = 'red'
    } else {
        mensaje.textContent = `Hola, ${valorInput}`
        mensaje.style.color = 'green'
    }
})


//* Diferencias entre 'onclick' y 'addEventListener'

// onclick dentro de un elementoHTML

    // <button onclick="saludar()">Saludar</button>