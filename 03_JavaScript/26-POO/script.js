//! Programación orientada a objetos (POO)

// clase - class ---> plantilla o molde
// objeto ---> instancia concreta de esa clase

// datos - propiedades
// acciones - métodos

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`)
    }
}

const persona1 = new Persona('Laura', 35)
persona1.saludar() // Hola, soy Laura y tengo 35 años.

//* Encapsulación
// ocultar detalles internos de un objeto

class CuentaBancaria {
    #saldo = 0 // propiedad privada

    depositar(cantidad) {
        this.#saldo += cantidad
    }

    verSaldo() {
        return this.#saldo
    }
}

const cuenta = new CuentaBancaria()
cuenta.depositar(100)
console.log(cuenta.verSaldo())


//* Herencia
// permite crear nuevas clases basadas en otras que ya existen

class Animal {
    constructor(nombre) {
        this.nombre = nombre
    }
    hacerSonido() {
        console.log('Emite un sonido genérico');
    }
}

class Perro extends Animal {
    hacerSonido() {
        console.log('Guau!');
    }
}

const miPerro = new Perro('Uma')
console.log(miPerro); // Perro {nombre: 'Uma'}
miPerro.hacerSonido() // Guau!


//* Polimorfismo
// una misma acción puede tener diferentes comportamientos

const animales = [new Perro('Max'), new Animal('Bicho')]
console.log(animales); // [Perro, Animal]

animales.forEach(animal => animal.hacerSonido());
// Guau!
// Emite un sonido genérico


//* Abstracción
// simplificar la realidad y quedarnos con lo esencial



//// Clases y constructores
// cada vez que usamos 'new' se crea un nuevo objeto con las propiedades y métodos definidos en esa clase

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre
        this.precio = precio
    }

    mostrarInfo(){
        console.log(`${this.nombre}: ${this.precio}€`)        
    }
}

const producto1 = new Producto('Camiseta', 50)
producto1.mostrarInfo() // Camiseta: 50€

const producto2 = new Producto('Corbata', 20)
producto2.mostrarInfo() // Cortaba: 20€


//* Métodos estáticos
// no pertenecen a un objeto concreto, pertenecen a la clase en sí misma

class Matematica {
    static sumar(a, b){
        return a + b
    }
}

console.log(Matematica.sumar(5, 3)); // 8


