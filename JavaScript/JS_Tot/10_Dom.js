'use strict'

//DOM - Document Objects Model

function cambiacolor(color){
    caja.style.background = color; 
}

// conseguir elementos con ID concreto

// var caja= document.getElementById('micaja');
var caja=document.querySelector('#micaja'); 

caja.innerHTML = 'TEXTO EN LA CAJA DESDE JS'; 
caja.style.background = 'red'; 
caja.style.padding = '20px'; 
caja.className= 'hola'; 

console.log(caja);

// conseguir elementos por su etiiqueta

var todosdiv= document.getElementsByTagName('div'); 


var seccion= document.querySelector('#miseccion'); 
var hr = document.createElement('hr'); 



var valor; 
for (valor in todosdiv){
    if (typeof todosdiv[valor].textContent=='string') {
        
    var parrafo = document.createElement('p'); 
    var texto = document.createTextNode(todosdiv[valor].textContent); 
    parrafo.append(texto); 
    seccion.append(parrafo); 
 }
 }
seccion.append(hr); 

//console.log(conten);

var divrojos = document.getElementsByClassName ('rojo'); 
var divamar = document.getElementsByClassName ('amarillo'); 
divamar[0].style.background = 'yellow'; 


var div; 
for (div in divrojos){
    if (divrojos[div].className == 'rojo') {
       divrojos[div].style.background = 'red';  
    }
    
}
console.log(divrojos);

// query selector

var id = document.querySelector('#encabezado'); 
console.log(id);

var claserojo= document.querySelector('div.rojo'); 
console.log(claserojo);




