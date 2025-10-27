// @ts-check

// crearProducto() -- crear el objeto producto - ✅
// agregarProducto() -- añadirlo al array global - ✅
// calcularTotal() -- sumar los precios de los productos disponibles - ✅

//! Crear el tipo personalizado Producto
/**
 * @typedef {Object} Producto
 * @property {string} nombre
 * @property {number} precio
 * @property {boolean} disponible
 */

//! Tipas el array global de productos
/** @type {Producto[]} */
const productos = []

//! Añadir validación y tipado a crearProducto()
/**
 * Crea un nuevo producto
 * @param {string} nombre - Nombre del producto
 * @param {number} precio - Precio del producto
 * @param {boolean} disponible - Indica si está disponible
 * @returns {Producto}
 */
function crearProducto(nombre, precio, disponible) {
    if (typeof nombre !== 'string') throw new Error("El nombre debe ser un texto");
    if (typeof precio !== 'number') throw new Error("El precio debe ser un número");
    if (typeof disponible !== 'boolean') throw new Error("El valor disponible debe ser booleano");
    return { nombre, precio, disponible}
}

//! Validar productos antes de añadirlos
/**
 * Verifica si un valor cumple con la estructura Producto. La usamos en la función agregarProducto
 * @param {any} valor
 * @returns {boolean}
 */
function esProductoValido(valor) {
    return (
        valor
        && typeof valor.nombre === 'string'
        && typeof valor.precio === 'number'
        && typeof valor.disponible === 'boolean'
    )
}

//! Añadir productos con validación - agregarProductos()
/**
 * Añade un producto al listado global si es válido y no estña duplicado
 * @param {Producto} producto
 */
function agregarProducto(producto) {
    if (!esProductoValido(producto)){
        console.warn('El producto no es válido y no se ha añadido');
        return;
    }

    const duplicado = productos.find(p => p.nombre === producto.nombre)
    if (duplicado) {
        console.warn('El producto ya esxiste y no se ha añadido');
        return;
    }

    productos.push(producto)
}

//! Calcular el total
/**
 * Calcula el total de los productos disponibles
 * @returns {number}
 */
function calcularTotal() {
    return productos
    .filter(p => p.disponible)
    .reduce((acc, actual) => acc + actual.precio, 0)
}

//! PRUEBA
try {
    const p1 = crearProducto('Camiseta', 20, true);
    const p2 = crearProducto('Pantalón', 30, false);
    const p3 = crearProducto('Zapatillas', 60, true);

    agregarProducto(p1)
    agregarProducto(p2)
    agregarProducto(p3)

    console.log('Productos 🗳️', productos);
    console.log('Total disponible ✅:', calcularTotal());
    

    //* Prueba con error
    // const p4 = crearProducto('100', 'barato', 'si');
    // agregarProducto(p4)
} catch (error) {
    console.error('Error 💀', error.message);
}