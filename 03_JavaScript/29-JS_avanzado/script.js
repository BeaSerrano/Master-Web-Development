//! Conceptos avanzados de JavaScript

// Tipado dinámico

let valor = '25' // string
valor = 25 // number

console.log(typeof valor);

//JSDoc
// TypeScript

// Testing - Jest

        // función de nuestro código
        function sumar(a, b) {
            return a + b
        }
        // test de nuestra función
        test('should return a + b', () => { 
            expect(sumar(2,3).toBe(5))
        })


// 1) Intro al tipado de variables
// 2) Tipado con TypeScript
// 3) Validación con JSDoc
// 4) Testing con Jest