# Convenciones del proyecto

Este documento define las reglas de trabajo del equipo para mantener el repositorio ordenado y los cambios trazables.

## 1. Estructura y nombres de carpetas

- Cada módulo del sistema es una carpeta en la raíz del repositorio.
- Los nombres de carpeta van en **minúsculas, en español, sin tildes, sin espacios y sin caracteres especiales**. Por ejemplo: `facturacion`, no `Facturación`.
- Se usa plural cuando el módulo agrupa registros (`pedidos`, `reservas`, `usuarios`) y singular cuando nombra un concepto (`menu`, `facturacion`).
- Cada módulo contiene:
  - `index.js`: el código del módulo.
  - `index.test.js`: su prueba básica.
  - `.keep`: opcional, solo para conservar la carpeta cuando está vacía.
- La documentación va en la carpeta `docs/`, con nombres en mayúsculas y guion bajo (`BASE_DE_DATOS.md`).
- En la raíz solo viven `README.md`, `CHANGELOG.md` y `LICENSE.txt`, además de los módulos y `docs/`.

| Módulo | Carpeta |
|---|---|
| Autenticación de usuarios | `usuarios/` |
| Menú digital | `menu/` |
| Pedidos | `pedidos/` |
| Reservas | `reservas/` |
| Facturación | `facturacion/` |

## 2. Ramas

- `main` es la rama estable. Solo debe contener código probado.
- Hasta establecer la línea base `v1.0.0` se trabajó directamente sobre `main`. **A partir de la línea base, todo cambio se hace en una rama temática** y entra a `main` mediante pull request, revisado por al menos otro integrante.
- Nombre de las ramas temáticas: `tipo/modulo-descripcion-corta`, en minúsculas y con guiones.

| Prefijo | Uso | Ejemplo |
|---|---|---|
| `feature/` | Nueva funcionalidad | `feature/reservas-validar-fecha` |
| `fix/` | Corrección de errores | `fix/facturacion-calculo-impuesto` |
| `docs/` | Documentación | `docs/actualizar-readme` |

## 3. Commits

Formato: `tipo: descripcion corta en español, sin tildes`

| Tipo | Uso |
|---|---|
| `feat` | Nueva funcionalidad |
| `fix` | Corrección de un error |
| `docs` | Cambios en documentación |
| `test` | Pruebas |
| `refactor` | Reorganizar código sin cambiar su comportamiento |
| `chore` | Tareas de mantenimiento |

Ejemplo: `feat: agregar esqueleto y prueba del modulo facturacion`

Reglas:
- Hacer commits pequeños y frecuentes, con un solo propósito cada uno.
- Si el commit resuelve una incidencia, agregar en el cuerpo `Closes #N` para que GitHub la cierre automáticamente.
- No subir código que no ejecute su prueba con éxito.

## 4. Código

- Lenguaje: JavaScript sobre Node.js, con módulos CommonJS (`require` y `module.exports`).
- Indentación de 4 espacios y punto y coma al final de cada instrucción.
- Declarar variables con `const` o `let`, nunca con `var`.
- Funciones y variables en `camelCase` y en español: `crearReserva`, `nombreCliente`. Se aceptan términos técnicos comunes en inglés (`login`, `username`, `password`).
- Constantes en `MAYUSCULAS_CON_GUION_BAJO`: `TASA_IMPUESTO`.
- Cada archivo `index.js` empieza con un comentario de encabezado (`// Módulo de Reservas`) y termina exportando sus funciones con `module.exports`.
- Las pruebas imprimen `Prueba superada` o `Prueba fallida`.

## 5. Versionado

- Se usa versionado semántico: `MAJOR.MINOR.PATCH`.
- Las versiones se marcan con etiquetas anotadas: `git tag -a vX.Y.Z -m "descripcion"`.
- La línea base del sistema es `v1.0.0`.
- Cada versión nueva se registra en `CHANGELOG.md`.

## 6. Gestión de cambios

1. Todo cambio o error se registra como una incidencia (issue) en GitHub.
2. Se implementa en una rama temática.
3. Se abre un pull request, que otro integrante revisa.
4. Al integrarse en `main`, la incidencia se cierra con `Closes #N`.
5. El cambio queda documentado en `CHANGELOG.md` al publicar la siguiente versión.
