// Módulo de Pedidos - Esqueleto básico
let pedidos = [];

function registrarPedido(mesa, platos) {
    const nuevoPedido = { id: pedidos.length + 1, mesa, platos, estado: "Pendiente" };
    pedidos.push(nuevoPedido);
    return `Pedido registrado para la mesa ${mesa}.`;
}

function obtenerPedidos() {
    return pedidos;
}

module.exports = { registrarPedido, obtenerPedidos };