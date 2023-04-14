'use strict';

// Este archivo se ejecutará en el contexto de la página web.
// Con el script de contenido se puede manipular las páginas web utilizando el Modelo de Objetos del Documento (DOM).
// También se puede pasar información a la extensión principal.

// Este script se ejecuta haciendo una entrada en el archivo manifest.json
// bajo la propiedad content_scripts.

// Para obtener más información sobre los Scripts de contenido,
// ver https://developer.chrome.com/extensions/content_scripts

// Registramos el título de la página web activa en la consola.
const pageTitle = document.head.getElementsByTagName('title')[0].innerHTML;
console.log(`El titulo de la pagina es: '${pageTitle}'`);

// Comuníquese con el archivo background,js enviando un mensaje
chrome.runtime.sendMessage({
    type: 'GREETINGS',
    payload: {
      message: 'Hola, vengo desde el ContentScript.',
    },
  },
  (response) => {
    console.log(response.message);
  });

// ejemplo como escuchar un mensaje desde el background
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'COUNT') {
    console.log(`Current count is ${request.payload.count}`);
  }
  // Send an empty response
  // See https://github.com/mozilla/webextension-polyfill/issues/130#issuecomment-531531890
  sendResponse({});
  return true;
});

//funcion para capitalizar texto
function capitalizeString(str) {
  return str.replace(/\b\w/g, function(l) {
    return l.toUpperCase();
  });
}

//funcion para contar caracteres
function contarCaracter(data){
  console.log(data.text)
  var query = data.text;
  query = query.toLowerCase().trim();
  query = query.length;
  alert(query);
}

//funcion para transformar texto
function textTransform(data) {
  // Inicializar variables
  let textPaste;
  var textTransform = data.text;
  
  // Aplicar transformación según el tipo
  if(data.type == "capitalize"){
    textPaste = capitalizeString(textTransform)
  }
  if(data.type == 'mayus'){
    textPaste = textTransform.toUpperCase();
  }
  if(data.type == 'minus'){
    textPaste = textTransform.toLowerCase();
  }
  
  // Obtener el elemento de texto activo
  const textarea = document.activeElement;
  
  // Si hay un elemento de texto activo, agregar el texto transformado
  if (textarea) {
    // Guardar la posición del cursor
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const scrollTop = textarea.scrollTop;
    
    // Agregar el texto transformado en la posición del cursor
    textarea.value = textarea.value.substring(0, start) + textPaste + textarea.value.substring(end, textarea.value.length);
    textarea.selectionStart = textarea.selectionEnd = start + textPaste.length;
    textarea.scrollTop = scrollTop;
  }
}

// Escuchar los mensajes enviados desde el archivo background.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  // Si el mensaje es de tipo "textTransform", ejecutar la función textTransform
  if (request.functionName === "textTransform") {
    textTransform(request.additionalData);
    return;
  }
  // Si el mensaje es de tipo "funciones", ejecutar la función contarCaracter
  if (request.functionName === "funciones") {
    if(request.additionalData.type == 'countchar'){
      contarCaracter(request.additionalData);
      return;
    }
  }
});


// Este archivo se ejecutará en el contexto de la extensión.
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  // Si el mensaje es de tipo "text", pega el texto en una area de texto activa.
  if (message.type === 'text') {
    const textarea = document.activeElement;
    if (textarea) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const scrollTop = textarea.scrollTop;
      textarea.value = textarea.value.substring(0, start) + message.text + textarea.value.substring(end, textarea.value.length);
      textarea.selectionStart = textarea.selectionEnd = start + message.text.length;
      textarea.scrollTop = scrollTop;
    }
  }

});
