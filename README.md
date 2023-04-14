# <img src="public/icons/icon_48.png" width="45" align="left"> Extension Chrome Demo V3

Esta es una extensión de Chrome que permite a los usuarios agregar textos predefinidos en cajas de texto, crear textos personalizados para utilizar luego, buscar información en Google y contar caracteres.

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

4. Puedes comenzar a modificar el codigo o fabricar la aplicación

4.1 Construir App (construye carpeta build para produccion)
`npm run build`

4.2 Dejar App en modo escucha para guardar cambios
`npm run build`

5. Una vez tengas tus cambios contruidos y tengas la carpeta build, realoza ños siguientes pasos
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

# Textos predefinidos
La extensión incluye una serie de textos predefinidos que se pueden pegar en cajas de texto. Para utilizarlos, haga clic derecho en la caja de texto y seleccione el texto deseado en el menú contextual.

# Textos personalizados
La extensión también permite crear textos personalizados que se pueden utilizar luego en cajas de texto. Para crear un texto personalizado, haga clic en el botón "Agregar nuevo texto" en el panel de opciones de la extensión. Ingrese un nombre para el texto y el contenido deseado, y haga clic en "Guardar". El texto personalizado aparecerá en el menú contextual de la extensión.

# Búsqueda en Google
La extensión también permite realizar búsquedas en Google directamente desde el menú contextual. Para utilizar esta función, seleccione el texto que desea buscar, haga clic derecho y seleccione "Buscar en Google".

# Conteo de caracteres
La extensión incluye una función para contar caracteres en un texto seleccionado. Para utilizar esta función, seleccione el texto deseado, haga clic derecho y seleccione "Contar caracteres" en el menú contextual.



## Contribution

Suggestions and pull requests are welcomed!.

---

This project was bootstrapped with [Chrome Extension CLI](https://github.com/dutiyesh/chrome-extension-cli)

