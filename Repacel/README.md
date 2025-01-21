# Proyecto de Sitio Web Dinámico

Este proyecto es una implementación de un sitio web dinámico que incluye múltiples páginas, estilos, scripts y funcionalidades interactivas. A continuación se detallan los componentes del proyecto y cómo configurarlo.

## Estructura del Proyecto

```
dynamic-website
├── css
│   └── styles.css         # Hojas de estilo para el sitio web
├── images
│   ├── image1.jpg         # Imagen utilizada en el sitio
│   ├── image2.jpg         # Otra imagen utilizada en el sitio
│   └── image3.jpg         # Tercera imagen utilizada en el sitio
├── js
│   └── script.js          # Script de JavaScript que maneja la lógica del sitio
├── data
│   └── data.json          # Archivo JSON con datos para el sitio
├── index.html             # Archivo principal de la aplicación
├── page1.html             # Página adicional con contenido relacionado
├── page2.html             # Otra página adicional que complementa el contenido
└── README.md              # Documentación del proyecto
```

## Instrucciones de Configuración

1. **Clonar el Repositorio**: Clona este repositorio en tu máquina local.
   ```
   git clone <URL_DEL_REPOSITORIO>
   ```

2. **Abrir el Proyecto**: Navega a la carpeta del proyecto.
   ```
   cd dynamic-website
   ```

3. **Abrir en un Navegador**: Abre `index.html` en tu navegador para ver el sitio web en acción.

4. **Despliegue en GitHub Pages**:
   - Asegúrate de que tu repositorio esté en GitHub.
   - Ve a la configuración del repositorio en GitHub.
   - Busca la sección de "GitHub Pages" y selecciona la rama `main` para el despliegue.
   - Guarda los cambios y tu sitio estará disponible en `https://<TU_USUARIO>.github.io/<NOMBRE_DEL_REPOSITORIO>/`.

## Funcionalidades

- **Formulario CRUD**: El formulario en `index.html` permite realizar operaciones CRUD con una base de datos remota de Firebase.
- **Animaciones y Transiciones**: Se han implementado animaciones y transiciones en el archivo `css/styles.css` para mejorar la experiencia del usuario.
- **Fetch de Datos**: El script en `js/script.js` incluye funciones para obtener datos de `data/data.json` y de APIs remotas.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar este proyecto, por favor abre un "issue" o envía un "pull request".

## Licencia

Este proyecto está bajo la Licencia MIT.