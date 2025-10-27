//! Modelo Vista Controlador (MVC)

// Modelo (Model) - gestiona los datos y la lógica de negocio ---> cocina, dond se preparan los platos
// Vista (View) - muestra información al uusario ---> camarero mostrando el plato
// Controlador (Controller) - conecta el modelo con la vista y maneja las acciones del usuario ---> quien lleva el pedido de un lado a otro

//* ejemplo usuario
// Modelo de usuario
// Vista de perfil de usuario en la web
// Controlador - función que deja al usuario loguearse


//// Integrar todo MVC en el script.js que va unido al index.html

const app = new Controlador(new Modelo(), new Vista())