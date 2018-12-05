'use strict'

/*

1. Pida seis numeros por pantalla y lo meta en un array 
2. mostrar el array entero / todos sus elementos en el cuerpo 
de la pagina y la consola
3. Ordenarlos y mostrarlos 
4. invertir su orden y mostrarlo
5. mostrar cuantos elementos tiene el array
6. busqueda de un valor introducido por el usuario, que nos diga si 
lo encuentra y su indice 
*/
function mostrararray(elementos, textcustom=' ') {
    document.write('<h1>contenido del array</h1>'+textcustom+'</h1>'); 
    document.write('<ul>'); 
    elementos.forEach((elemento, index) => {
    document.write('<li>'+ elemento+' </li>'); 
});
document.write('</ul>'); 

}

//var numeros = new Array(6); 
var numeros= []; 
for (var i=0; i <= 5; i ++){
   // numeros[i]= parseInt(prompt('introduce un numero: ', 0)); 
    numeros.push(parseInt(prompt('introduce un numero: ', 0))); 
}

//mostrar array en el cuerpo de pagina
mostrararray(numeros); 

//mostrar array en la consola
console.log(numeros); 

// ordenar y mostrar
numeros.sort(function(a,b){return a-b}); 
mostrararray(numeros, 'ordenado'); 

//invertir y mostrar
numeros.reverse();
mostrararray(numeros, 'invertido'); 

//contar elementos
document.write('<h1>El array tiene '+ numeros.length + ' elementos'); 

//busqueda
var busqueda =  parseInt(prompt('buscar numero: ', 0));

var posicion = numeros.findIndex( numero => numero == busqueda); 

if (posicion && posicion != -1){
   //console.log(posicion);
   document.write('<hr/><h1>Encontrado</h1>');
    document.write('<h1>posicion de la busqueda: '+ posicion + '</h1><hr/>'); 
} else {
    document.write('<hr/><h1>No encontrado</h1><hr/>');
}

