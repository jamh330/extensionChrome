# <img src="public/icons/icon_48.png" width="45" align="left"> Extension Chrome Demo V3

Este repositorio permite crear una extensión para Chrome con la cual se podrá agregar textos predefinidos en cajas de texto, crear textos personalizados para utilizar luego, buscar información en Google y contar caracteres.

Esta realizada con la ayuda de chrome-extension-cli
`npm install -g chrome-extension-cli` 

## Manual chrome-extension-cli

https://github.com/dutiyesh/chrome-extension-cli

## Como Utilizar

1. Clona este repositorio:

    `git clone https://github.com/jamh330/extensionChrome.git`

2. Navega hasta la carpeta del proyecto:

    `cd extensionChrome`

3. Instala las dependencias:

    `npm install`

4. Puedes comenzar a modificar el código o fabricar la aplicación

    4.1 Construir App (construye carpeta build para producción)
    `npm run build`

    4.2 Dejar App en modo escucha para guardar cambios
    `npm run watch`

5. Una vez tengas tus cambios realizados y se haya creado la carpeta build, realiza los siguientes pasos

    5.1 Abre chrome://extensions
    
    5.2 Marca la casilla de modo Desarrollador
    
    5.3 Haz clic en el botón "Cargar descomprimida"
    
    5.4 Selecciona la carpeta "my-extension/build"

## Tecnologías utilizadas

- [JavaScript]
- [HTML]
- [CSS]
- [Node.js](https://nodejs.org/)
- [Chrome Extension API](https://developer.chrome.com/docs/extensions/reference/)
- [chrome-extension-cli](https://www.npmjs.com/package/chrome-extension-cli)


## Cómo utilizar
Para utilizar la extensión, primero debe ser instalada en el navegador. A continuación, se explican las funciones que se encuentran disponibles:

### Tranformación de Texto (capitaliza, mayus, minus)
En un texto seleccionado podrás cambiar el mismo a su formato capitalizado (primera letra de cada palabra en mayuscula), todo en mayuscula o todo en minuscula.

### Textos predefinidos
La extensión incluye una serie de textos predefinidos que se pueden pegar en cajas de texto. Para utilizarlos, haga clic derecho en la caja de texto y seleccione el texto deseado en el menú contextual.

### Textos personalizados
La extensión también permite crear textos personalizados que se pueden utilizar luego en cajas de texto. Para crear un texto personalizado, haga clic en el botón "Agregar nuevo texto" en el panel de opciones de la extensión. Ingrese un nombre para el texto y el contenido deseado, y haga clic en "Guardar". El texto personalizado aparecerá en el menú contextual de la extensión.

### Búsqueda en Google
La extensión también permite realizar búsquedas en Google directamente desde el menú contextual. Para utilizar esta función, seleccione el texto que desea buscar, haga clic derecho y seleccione "Buscar en Google".

### Conteo de caracteres
La extensión incluye una función para contar caracteres en un texto seleccionado. Para utilizar esta función, seleccione el texto deseado, haga clic derecho y seleccione "Contar caracteres" en el menú contextual.

## Si Tu Lo Deseas Puedes Volar

Para crear mas extensiones, aquí hay 5 posibles usos que se le podrían dar a las mismas.

1. Agregar funcionalidad para traducir automáticamente el texto seleccionado a diferentes idiomas usando una API de traducción. Por ejemplo, al seleccionar un texto en inglés, la extensión podría proporcionar una opción para traducirlo al español o francés.

2. Incorporar la capacidad de resaltar palabras clave en el texto seleccionado, lo que podría ser útil para lectores que buscan información específica. Por ejemplo, al seleccionar un texto en una página web, la extensión podría resaltar todas las palabras clave relacionadas con la búsqueda.

3. Proporcionar opciones de formateo de texto adicionales, como la capacidad de crear listas numeradas o con viñetas, ajustar el espaciado de líneas o cambiar el tamaño de fuente, negritas entre otros.

4. Agregar un botón de "leer en voz alta" que convierta el texto seleccionado en un archivo de audio para que los usuarios puedan escuchar en lugar de leer.

5. Proporcionar la capacidad de guardar notas rápidas en la extensión y sincronizarlas con una cuenta de Google Drive, lo que permitiría a los usuarios acceder a ellas desde cualquier dispositivo.

## Contribuciones

Si deseas contribuir a este proyecto, no dudes en enviar un Pull Request o abrir un Issue para discutir las mejoras o correcciones que podrían realizarse.

---

This project was bootstrapped with [Chrome Extension CLI](https://github.com/dutiyesh/chrome-extension-cli)

