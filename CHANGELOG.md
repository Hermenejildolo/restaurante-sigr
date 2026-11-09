# Registro de Cambios (Changelog)

## [1.0.0] - 2026-11-08
### Añadido (Línea Base Inicial)
* Estructura base del proyecto: una carpeta por módulo (`usuarios`, `menu`, `pedidos`, `reservas`, `facturacion`), cada una con su código (`index.js`) y su prueba básica (`index.test.js`).
* Módulo de usuarios: inicio de sesión (`login`) con credenciales fijas de ejemplo.
* Módulo de menú digital: agregar y consultar platos (`agregarPlato`, `obtenerMenu`).
* Módulo de pedidos: registro y consulta de pedidos por mesa (`registrarPedido`, `obtenerPedidos`).
* Módulo de reservas: creación y consulta de reservas por fecha y hora (`crearReserva`, `obtenerReservas`).
* Módulo de facturación: generación de facturas con subtotal, impuesto y total (`crearFactura`, `obtenerFacturas`).
* Documentación: `README.md`, `CHANGELOG.md`, `LICENSE.txt` y la carpeta `docs/` (convenciones, estructura de la base de datos y manual de despliegue).
* Seguimiento de tareas con GitHub Issues (#1 a #5, cerradas en la línea base).

### Pendiente para versiones posteriores
* CRUD completo del menú (editar y eliminar platos, categorías).
* Cierre de caja y reportes de ventas diarios.
* Persistencia en base de datos y autenticación con contraseñas cifradas.
