// Módulo de Facturación - Esqueleto básico
let facturas = [];

const TASA_IMPUESTO = 0.19; // Valor de ejemplo (IVA 19%)

function crearFactura(nombreCliente, items) {
    const subtotal = items.reduce((acumulado, item) => acumulado + item.precio * item.cantidad, 0);
    const impuesto = Math.round(subtotal * TASA_IMPUESTO);
    const total = subtotal + impuesto;
    const nuevaFactura = { id: facturas.length + 1, nombreCliente, items, subtotal, impuesto, total };
    facturas.push(nuevaFactura);
    return `Factura #${nuevaFactura.id} generada para ${nombreCliente}. Total: $${total}`;
}

function obtenerFacturas() {
    return facturas;
}

module.exports = { crearFactura, obtenerFacturas };