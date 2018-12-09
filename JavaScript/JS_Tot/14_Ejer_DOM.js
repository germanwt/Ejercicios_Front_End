'use strict'

window.addEventListener('load', ()=>{
console.log('dom cargado');


var formulario =  document.querySelector('#formulario');
var box_dashed =  document.querySelector('.dashed');
box_dashed.style.display = 'none';


formulario.addEventListener('submit', ()=>{
    console.log('evento submit capturado');
    

    var nombre =  document.querySelector ('#nombre').value; 
    var apellidos = document.querySelector ('#apellidos').value; 
    var edad = parseInt(document.querySelector ('#edad').value); 

if (nombre.trim() == null || nombre.trim().lenght == 0) {
    alert('nombre no es valido');
    return false; 
}; 

if (apellidos.trim() == null || apellidos.trim().lenght == 0) {
    alert('apellido no es valido');
    return false; 
}; 
/*
if (edad == null || edad <= 0 || isNaN(edad)) {
    alert('edad no es valido');
    return false; 
}; 
*/



    box_dashed.style.display = 'block'; 

    var datos = [nombre, apellidos, edad];

for (var indice in datos){
    var parrafo = document.createElement('p'); 
    parrafo.append(datos[indice]);
    box_dashed.append(parrafo); 
}

    
}); 

}); 