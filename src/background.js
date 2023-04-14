'use strict';

// Con los scripts de fondo puedes comunicarte con las ventanas emergentes y archivos de contenido.
// Para obtener más información sobre los scripts de fondo,
// consulta https://developer.chrome.com/extensions/background_pages.

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'GREETINGS') {
    const message = `Hola soy el mensaje que venia desde el content :D.`;

    //registro de mensaje en la consola desde el content script
    console.log(request.payload.message);
    // Envía una respuesta al archivo contentScript.js
    sendResponse({
      message,
    });
  }
});

//si existen los contextMenus
if (chrome.contextMenus) {

//crear contextMenus

//crear padre de los contextMenus Transformar Texto
chrome.contextMenus.create({
	id: "textTransform",
	title: "Transformar Texto",
	contexts: ["editable"]
}); 

//crear boton hijo de Transformar Texto para capitalizar
chrome.contextMenus.create({
  //texto visible en el boton
  title: "Capitalizar Texto",
  //id del boton
  id: "capitalize",
  //id del padre
  parentId: "textTransform",
  //contexto en el que se mostrara el boton
  contexts: ["editable"]
});

//crear boton hijo de Tramsformar Texto para mayuscula
chrome.contextMenus.create({
	title: "Mayus Texto",
	id: "mayus",
	parentId: "textTransform",
  contexts: ["editable"]
});

//crear boton hijo de Tramsformar Texto para minuscula
chrome.contextMenus.create({
	title: "Minuscula Texto",
	id: "minus",
	parentId: "textTransform",
  contexts: ["editable"]
});


/////////////////////////////////////////////
//textos predeterminados
chrome.contextMenus.create({
  id: "textos",   
  title: "Textos",
  contexts:["editable"]
}); 

chrome.contextMenus.create({
id: "texto1",
title: "Texto 1",
parentId: "textos",
contexts:["editable"]
});

chrome.contextMenus.create({
id: "texto2",
title: "Texto 2",
parentId: "textos",
contexts:["editable"]
});



////////////////////////////////////////////////////////

//Funciones
chrome.contextMenus.create({
id: "funciones",
title: "Funciones",
contexts: ["selection"]
});

chrome.contextMenus.create({
title: "Buscar en Google",
id:"searchGoogle",
parentId: "funciones",
contexts: ["selection"]
});

chrome.contextMenus.create({
title: "Contar caracteres",
id: "countchar",
parentId: "funciones",
contexts: ["selection"]
});



/////////////////////////////////////////////////////////////
//PERSONALIZADO

chrome.contextMenus.create({
title: "Personalizado",
contexts: ["editable"],
id: "Personalizado",
});

chrome.contextMenus.create({
id: "openpersonalizado",
title: "Editar personalizado",
parentId: "Personalizado",
contexts: ["editable"]
});


//funcion para crear los botones de personalizado
chrome.storage.sync.get(function(storage) {
  //si no existe el objeto items en el storage
  if (storage['items'] == undefined) storage['items'] = {};
  //variable items
  var items = storage['items'];
  //recorrer el objeto items y crear los botones por cada item
  for (var key in items) {
    (function(key) {
      chrome.contextMenus.create({
        'title': items[key]['item-title'],
        'contexts': ['editable'],
        'id': key,
        'parentId': 'Personalizado',
      }, function() {});
    })(key);
  }
});

//objeto con los textos predeterminados
const respuestas = {
  texto1: "Texto que pegara el boton texto1",
  texto2:"Texto que pegara el boton texto2",
}

//funcion para obtener el texto personalizado
function getItemPersonalizado(itemId) {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get('items', function(storage) {
      if (storage && storage['items'] && storage['items'][itemId]) {
        resolve(storage['items'][itemId]);
      } else {
        reject(new Error('Item not found in storage'));
      }
    });
  });
}

//funcion actualizar los botones de personalizado
chrome.storage.onChanged.addListener(function(changes, areaName) {
	if (areaName == 'sync') {
		chrome.contextMenus.remove("Personalizado", function() {
			chrome.contextMenus.create({
				title: "Personalizado",
				contexts: ["all"],
				id: "Personalizado",
			});
			chrome.contextMenus.create({
				id: "openpersonalizado",
				title: "Editar personalizado",
				contexts: ["all"],
				parentId: "Personalizado",
			});

      chrome.storage.sync.get(function(storage) {
        if (storage['items'] == undefined) storage['items'] = {};
        var items = storage['items'];
        for (var key in items) {
          (function(key) {
            chrome.contextMenus.create({
              'title': items[key]['item-title'],
              'contexts': ['editable'],
              'id': key,
              'parentId': 'Personalizado',
            }, function() {});
          })(key);
        }
      });
		});
	}
});

//funcion para ejecutar las acciones de los botones
chrome.contextMenus.onClicked.addListener(function(info, tab) {
//si el boton es de transformar texto
  if(info.parentMenuItemId === 'textos'){
    let predefinedText = respuestas[info.menuItemId];
    //enviar mensaje al archivo contentScript.js
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {text: predefinedText,type:"text"});
    });
    return;
  }

  //si el boton es de persnalizado
  if(info.parentMenuItemId === 'Personalizado'){

    //si el boton es editar personalizado abre las opciones de la extension
    if(info.menuItemId=='openpersonalizado'){
      chrome.runtime.openOptionsPage();
      return;
    }

    //obtener el texto personalizado
    getItemPersonalizado(info.menuItemId).then(item => {
      let predefinedText = item['item-content'];
      console.log(item['item-content']);
      //enviar mensaje al archivo contentScript.js
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {text: predefinedText,type:"text"});
      });
      return;
    })
    .catch(error => {
      console.log(error)
    });

    return;
  }

  //si el boton es de funciones determina que hacer en base al id del boton
  if(info.parentMenuItemId == 'funciones'){
  
    let query;
    let url;

    //si el boton es buscar en google abre una nueva pestaña con el resultado de la busqueda
    if(info.menuItemId=='searchGoogle'){
      url   = "https://google.com/search?q=";
      query = info.selectionText;
    }

    //si el boton es contar caracteres envia mensaje al archivo contentScript.js
    if(info.menuItemId=='countchar'){
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { functionName: info.parentMenuItemId, additionalData: {text:info.selectionText,type:info.menuItemId} });
      });
      return;
    }

    //abrir una nueva pestaña con el resultado de la funcion
    chrome.tabs.query({
      'active': true,
      'lastFocusedWindow': true
    }, function(tabs) {
      var index_number = tabs[0].index;
      index_number++;
      chrome.tabs.create({
        active: true,
        index: index_number,
        url: url + query,
      });
    });
    return;
  }

//si el boton es de pegar texto
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { functionName: info.parentMenuItemId, additionalData: {text:info.selectionText,type:info.menuItemId} });
  });
  return;

});
}