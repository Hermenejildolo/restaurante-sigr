// Prueba básica para el módulo de Usuarios
const { login } = require('./index.js');

console.log("Iniciando prueba de Usuarios...");
const resultado = login("admin", "1234");

if (resultado === "Autenticación exitosa") {
    console.log("Prueba superada: El login funciona correctamente.");
} else {
    console.log("Prueba fallida.");
}
