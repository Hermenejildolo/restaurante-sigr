# Sistema Integral de Gestión de Restaurante (SIGR)

## Descripción del Proyecto
El Sistema Integral de Gestión de Restaurante (SIGR) es una aplicación web diseñada para centralizar y optimizar las operaciones diarias de un establecimiento gastronómico. Esta herramienta permite gestionar de forma eficiente el menú, los pedidos, las reservas y la facturación, mejorando la experiencia del cliente y el control administrativo.

## Módulos de la Línea Base (v1.0.0)
Esta versión inicial incluye los siguientes componentes estables:
* **Módulo de Usuarios:** Autenticación y autorización con roles (Administrador, Mesero, Cliente).
* **Menú Digital:** Operaciones CRUD para categorías y platos.
* **Gestión de Pedidos:** Registro y seguimiento de órdenes en tiempo real.
* **Reservas:** Administración de disponibilidad de mesas por fecha y hora.
* **Facturación:** Cierre de caja y generación de reportes de ventas diarios.

## Requisitos Previos
* Node.js (v16 o superior)
* Base de datos MySQL
* Git

## Instalación y Despliegue Local
1. Clonar el repositorio:
   git clone https://github.com/Hermenejildolo/restaurante-sigr.git

2. Instalar dependencias:
   cd sigr
   npm install

3. Configurar variables de entorno:
   Copiar el archivo `.env.example` a `.env` y ajustar credenciales.

4. Ejecutar la aplicación en entorno de desarrollo:
   npm run dev

## Licencia
Este proyecto se distribuye bajo los términos de la licencia MIT. Consulta el archivo `LICENSE` para más detalles.
