// Prueba básica para el módulo de Menú
const { agregarPlato, obtenerMenu } = require('./index.js');

console.log("Iniciando prueba del Menú...");
agregarPlato("Hamburguesa", 15000);
agregarPlato("Papas Fritas", 5000);

const menuActual = obtenerMenu();

if (menuActual.length === 2 && menuActual[0].nombre === "Hamburguesa") {
    console.log("Prueba superada: El menú funciona correctamente.");
} else {
    console.log("Prueba fallida.");
}