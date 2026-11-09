# SIGR - Sistema Integral de Gestión de Restaurante

Aplicación para gestionar la operación de un restaurante: autenticación de usuarios, menú, pedidos, reservas y facturación. Es un proyecto del curso *Gestión del software*, desarrollado como práctica de control de versiones y gestión de la configuración.

> **Estado actual:** línea base `v1.0.0`. Cada módulo es un esqueleto funcional en JavaScript (Node.js) con una prueba básica. Los datos se guardan en memoria: todavía no hay interfaz web ni base de datos.

## Módulos

| Carpeta | Descripción | Estado |
|---|---|---|
| `usuarios/` | Inicio de sesión (`login`), por ahora con credenciales fijas de ejemplo | Esqueleto con prueba |
| `menu/` | Menú digital: agregar y consultar platos (`agregarPlato`, `obtenerMenu`) | Esqueleto con prueba |
| `pedidos/` | Registro de pedidos por mesa (`registrarPedido`, `obtenerPedidos`) | Esqueleto con prueba |
| `reservas/` | Reservas por fecha y hora (`crearReserva`, `obtenerReservas`) | Esqueleto con prueba |
| `facturacion/` | Facturas con subtotal, impuesto y total (`crearFactura`, `obtenerFacturas`) | Esqueleto con prueba |
| Cierre de caja y reportes | Reportes de ventas diarios | Planificado para una versión posterior |

## Requisitos

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) 18 o superior

## Instalación

```bash
git clone https://github.com/Hermenejildolo/restaurante-sigr.git
cd restaurante-sigr
node --version
```

El proyecto no tiene dependencias externas, por lo que no hace falta ejecutar `npm install`.

## Ejecución de las pruebas

Prueba de un módulo (por ejemplo, reservas):

```bash
node reservas/index.test.js
```

Todos los módulos a la vez:

```powershell
# Windows (PowerShell)
foreach ($m in "menu","pedidos","reservas","usuarios","facturacion") { node "$m/index.test.js" }
```

```bash
# Linux / macOS
for m in menu pedidos reservas usuarios facturacion; do node "$m/index.test.js"; done
```

Cada prueba imprime `Prueba superada` si el módulo funciona correctamente, o `Prueba fallida` en caso contrario.

## Estructura del repositorio

```
restaurante-sigr/
├── facturacion/
│   ├── index.js          # código del módulo
│   └── index.test.js     # prueba básica del módulo
├── menu/                 # mismo patrón
├── pedidos/              # mismo patrón
├── reservas/             # mismo patrón
├── usuarios/             # mismo patrón
├── docs/
│   ├── BASE_DE_DATOS.md
│   ├── CONVENCIONES.md
│   └── MANUAL_DESPLIEGUE.md
├── CHANGELOG.md
├── LICENSE.txt
└── README.md
```

## Documentación

- [Convenciones del proyecto](docs/CONVENCIONES.md): ramas, commits, código y nombres de carpetas.
- [Estructura de la base de datos](docs/BASE_DE_DATOS.md): modelo de datos propuesto.
- [Manual de despliegue](docs/MANUAL_DESPLIEGUE.md): cómo obtener, ejecutar y verificar el sistema.
- [Historial de cambios](CHANGELOG.md).

## Control de versiones

- Herramienta: Git, con el repositorio alojado en GitHub.
- Rama principal estable: `main`.
- La línea base está marcada con la etiqueta `v1.0.0`. Para ver el código exacto de esa versión: `git checkout v1.0.0`.
- Los cambios pendientes y las mejoras se registran en [GitHub Issues](https://github.com/Hermenejildolo/restaurante-sigr/issues).

## Licencia

Consulta el archivo [LICENSE.txt](LICENSE.txt).
