let resultado = document.querySelector('#resultado')
let sumar = document.querySelector('#sumar')
let restar = document.querySelector('#restar')
let contador = 0

sumar.addEventListener('click', () => {
    contador++
    resultado.textContent = contador
})

restar.addEventListener('click', () => {
    contador--
    resultado.textContent = contador
})