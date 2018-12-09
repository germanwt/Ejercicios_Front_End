'use strict'

// BOM

console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.location);

function redirect(url) {
    window.location.href = url; 
}

function abrirventana(url) {
    window.open (url, ' ', 'width=400,height=300'); 
}
