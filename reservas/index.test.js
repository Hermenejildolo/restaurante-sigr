// Prueba básica para el módulo de Reservas
const { crearReserva, obtenerReservas } = require('./index.js');

console.log("Iniciando prueba de Reservas...");
crearReserva("Juan Perez", "2026-11-10", "19:00", 4);
crearReserva("Maria Garcia", "2026-11-12", "20:30", 2);

const reservasActuales = obtenerReservas();

if (reservasActuales.length === 2 && reservasActuales[0].nombreCliente === "Juan Perez") {
    console.log("Prueba superada: El sistema de reservas funciona correctamente.");
} else {
    console.log("Prueba fallida.");
}