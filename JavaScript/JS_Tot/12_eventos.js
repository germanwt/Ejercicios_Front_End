'use strict'

// eventos del mouse

window.addEventListener('load', ()=> {
    

function cambiarcolor() {
    var bg=boton.style.background; 
    if ( bg == 'green') {
        boton.style.background = 'red'; 
    }else{
        boton.style.background = 'green'; 
    }
    boton.style.padding = '10px'; 
    boton.style.border = '1px solid #ccc';
    return true; 
}

var boton  = document.querySelector('#boton'); 

// Evento click
boton.addEventListener('click',function (){
    cambiarcolor(); 
}); 

// evento mouse over

boton.addEventListener('mouseover', function(){
    boton.style.background = 'yellow'; 
}); 

// mouse out

boton.addEventListener('mouseout', function(){
    boton.style.background = '#ccc'; 
}); 

// focus

var inpiut = document.querySelector("#campo_nombre"); 

inpiut.addEventListener('focus', function(){
    console.log('estas dentro input'); 
}); 

// blur
inpiut.addEventListener('blur', function(){
    console.log('estas fuera input'); 
}); 

// keydown

inpiut.addEventListener('keydown', function(event){
    console.log('pulsa tecla', String.fromCharCode(event.keyCode)); 
}); 

// keypress

inpiut.addEventListener('keypress', function(event){
    console.log('tecla presionada', String.fromCharCode(event.keyCode)); 
}); 

// Keyup

inpiut.addEventListener('keyup', function(event){
    console.log('tecla soltada', String.fromCharCode(event.keyCode)); 
}); 

}); 