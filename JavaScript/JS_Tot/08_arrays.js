'use strict'
// arrays 

var nombre = ['victor', 'ger', 'pepe', 'carlos', 53]; 

var leng = new Array('php','js','go','java', 'c+', 'pascal');

// console.log(nombre[2]); 
// console.log(nombre.length); 
/*
var elemento =parseInt(prompt('Q elemento del array quiere', 0)); 
if (elemento >= nombre.length) {
    alert ('introduce numero menor que ' + nombre.length);
} else{
    alert ('el usuario seleccionado es: '+ nombre[elemento]); 
}
document.write("<h1>lenguajes de programacion del 2018 </h1>"); 
document.write('</ul>');

for (var i=0;i<leng.length; i++ ){
   document.write('<li>'+leng[i]+'</li>'); 
}
*/
for (let lenguaje in leng){
    document.write('<li>'+leng[lenguaje]+'</li>'); 

}
document.write('</ul>');


var precios = [10,20,30,60]; 

//var busqueda = leng.findIndex(lenguaje=> lenguaje == 'java'); 
var busqueda = precios.some(precios=>  precios >= 70); 

console.log(busqueda); 

// Arrays Multidimensional
/*
var categorias = ['Accion', 'terror', 'comedia'];

var pelis =  ['la verdad duele', 'la vida es bella', 'gran torino'];
var cine = [categorias,pelis];

pelis.sort(); 
console.log(pelis); 

// console.log(cine[0][1]);
// console.log(cine[1][2]);
/*
var element = ''; 
do {
element = prompt('introduce tu pelicula: ');
    pelis.push(element); 
}while (element!= 'acabar'); 

// pelis.pop(); 


var indice= pelis.indexOf('gran torino'); 
if (indice > -1) {
    pelis.splice(indice, 1); 
}
var pel = pelis.join(); 

var cadena =  'text1, text2, text3';
var cad_array = cadena.split(','); 
console.log(cad_array);
*/
