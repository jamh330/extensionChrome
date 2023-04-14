$( document ).ready(function() {
//aqui puedes ejecutar el codigo que desees con jquery en cualquier sitio.


//definimos variables de verificacion
	var url = location.toString();
	var accionEnGoogle = url.indexOf(".google.");


function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

if(accionEnGoogle != -1){
	alert("estoy en Google :D");
   }


});

