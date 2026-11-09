// Módulo de Reservas - Esqueleto básico
let reservas = [];

function crearReserva(nombreCliente, fecha, hora, personas) {
    const nuevaReserva = { id: reservas.length + 1, nombreCliente, fecha, hora, personas };
    reservas.push(nuevaReserva);
    return `Reserva confirmada para ${nombreCliente} el ${fecha} a las ${hora}.`;
}

function obtenerReservas() {
    return reservas;
}

module.exports = { crearReserva, obtenerReservas };