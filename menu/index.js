// Módulo de Menú Digital - Esqueleto básico
let menu = [];

function agregarPlato(nombre, precio) {
    menu.push({ nombre, precio });
    return `Plato '${nombre}' agregado al menú.`;
}

function obtenerMenu() {
    return menu;
}

module.exports = { agregarPlato, obtenerMenu };