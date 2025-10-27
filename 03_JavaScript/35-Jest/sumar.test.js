const sumar = require('./sumar')

test('La función sumar devuelde la suma entre dos números', () => { 
    expect(sumar(2, 3)).toBe(5)
})

test('La función sumar puede manejar números negativos', () => { 
    expect(sumar(-2, 5)).toBe(3)
})