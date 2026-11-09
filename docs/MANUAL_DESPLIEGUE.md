# Manual de despliegue

## 1. Alcance

La línea base `v1.0.0` de SIGR es una aplicación de **Node.js sin dependencias externas**. Todavía no incluye servidor web ni base de datos, así que "desplegar" significa obtener el código, instalar el entorno y verificar que todos los módulos pasen sus pruebas.

## 2. Requisitos

| Herramienta | Versión | Para qué se usa |
|---|---|---|
| Git | cualquier versión reciente | Descargar el código |
| Node.js | 18 o superior | Ejecutar los módulos y sus pruebas |

Para comprobar que están instalados:

```bash
git --version
node --version
```

## 3. Obtener el código

```bash
git clone https://github.com/Hermenejildolo/restaurante-sigr.git
cd restaurante-sigr
```

Para trabajar exactamente con la línea base:

```bash
git checkout v1.0.0
```

Esto deja el repositorio en modo "detached HEAD", que es normal al posicionarse sobre una etiqueta. Para volver a la rama principal:

```bash
git checkout main
```

## 4. Instalación

No hay dependencias que instalar: el proyecto no usa `npm install`.

## 5. Verificación del despliegue

Desde la carpeta raíz del repositorio, ejecuta las pruebas de todos los módulos.

Windows (PowerShell):

```powershell
foreach ($m in "menu","pedidos","reservas","usuarios","facturacion") { node "$m/index.test.js" }
```

Linux o macOS:

```bash
for m in menu pedidos reservas usuarios facturacion; do node "$m/index.test.js"; done
```

### Resultado esperado

Cada módulo imprime un mensaje de `Prueba superada`. Por ejemplo:

```
Iniciando prueba de Reservas...
Prueba superada: El sistema de reservas funciona correctamente.
Iniciando prueba de Facturación...
Prueba superada: El sistema de facturación funciona correctamente.
```

El despliegue es correcto cuando **ningún módulo imprime `Prueba fallida`**.

## 6. Solución de problemas

| Síntoma | Causa probable | Solución |
|---|---|---|
| `node` no se reconoce como comando | Node.js no está instalado o la terminal no se reinició | Instalar Node.js y abrir una terminal nueva |
| `Cannot find module './index.js'` | Se ejecutó desde otra carpeta | Ejecutar los comandos desde la raíz del repositorio |
| `Prueba fallida` | Un módulo cambió su comportamiento | Revisar el último commit del módulo y su `index.test.js` |
| `git clone` pide credenciales | El repositorio es privado | Iniciar sesión en GitHub o pedir acceso al equipo |

## 7. Evolución prevista

En fases posteriores se espera automatizar esta verificación con una herramienta de integración continua (Jenkins o GitHub Actions), de modo que las pruebas se ejecuten solas en cada cambio que llegue a `main`.
