// Prueba básica para el módulo de Facturación
const { crearFactura, obtenerFacturas } = require('./index.js');

console.log("Iniciando prueba de Facturación...");
crearFactura("Juan Perez", [
    { nombre: "Bandeja paisa", precio: 30000, cantidad: 1 },
    { nombre: "Jugo natural", precio: 8000, cantidad: 2 }
]);
crearFactura("Maria Garcia", [
    { nombre: "Sopa de mondongo", precio: 18000, cantidad: 2 }
]);

const facturasActuales = obtenerFacturas();

if (facturasActuales.length === 2 && facturasActuales[0].nombreCliente === "Juan Perez" && facturasActuales[0].total === 54740) {
    console.log("Prueba superada: El sistema de facturación funciona correctamente.");
} else {
    console.log("Prueba fallida.");
}