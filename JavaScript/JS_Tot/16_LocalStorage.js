'use strict'

// local storage 

// existe local storage
if (typeof(Storage)!== 'undefined') {
    console.log('local disponible');    
} else {
    console.log('no esta disponible');
}; 

// guardar datos 

localStorage.setItem('titulo', 'curso de symfony'); 

// recuperar elemento

document.querySelector('#pelis').innerHTML= localStorage.getItem('titulo');

// guardar objetos 

var usuario = {
    nombre: 'german',
    email: 'german@',
    web: 'xxx'
}; 

localStorage.setItem('usuario', JSON.stringify(usuario)); 

// recuperar objeto 

var userjs= JSON.parse(localStorage.getItem('usuario')); 
console.log(userjs);

document.querySelector('#datos').append(' ' + userjs.web); 

//localStorage.removeItem('usuario'); 

//localStorage.clear(); 




