// Prueba básica para el módulo de Pedidos
const { registrarPedido, obtenerPedidos } = require('./index.js');

console.log("Iniciando prueba de Pedidos...");
registrarPedido(5, ["Hamburguesa", "Gaseosa"]);
registrarPedido(2, ["Papas Fritas"]);

const pedidosActuales = obtenerPedidos();

if (pedidosActuales.length === 2 && pedidosActuales[0].mesa === 5) {
    console.log("Prueba superada: El registro de pedidos funciona correctamente.");
} else {
    console.log("Prueba fallida.");
}