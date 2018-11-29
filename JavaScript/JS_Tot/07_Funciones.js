// 'use strict'

// funciones 
// una funcion es una agrupacion reutilizable de un conjunto de instrucciones 
/*
function porconsola (nume1, nume2){
    console.log("suma" + (nume1+nume2)); 
}

function porpantalla (nume1,nume2){
    document.write("suma" + (nume1+nume2)); 
}

function calculadora(nume1, nume2, mostrar=false) {
if (mostrar == false) {
    porconsola(nume1,nume2); 
}else {
    porpantalla(nume1,nume2); 
}

return true; 
}

calculadora(13,8); 
calculadora(12,8, true); 
/*
for (var i = 1; i<=10; i++){
    console.log(i); 
    calculadora(i,8); 
}*/
/*
// param REST y SPREAf

function listfrutas(frut1, frut2, ...resto_frutas) { //...guardo en un array resto de parametros
    console.log('fruta 1: ', frut1);
    console.log('fruta 2: ', frut2);
    console.log(resto_frutas); 
    
}

listfrutas('naranja', 'manzana', 'sandia', 'pera', 'melon'); 

var frutas = ['naranja','manzana']
listfrutas(...frutas, 'sandia', 'pera', 'melon');  //... spread, trae el array de frutas para el console log



// FUNCIONES ANONIMAS

function sumame(num1, num2, sumaymuestra, sumapordos) {
    var sumar= num1+num2; 

    sumaymuestra(sumar); 
    sumapordos(sumar);

    return sumar; 
}

    sumame(4,5, dato =>{
        console.log('la suma es: ',dato); 

    },

    function(dato){
        console.log('la suma por dos es: ', (dato*2)); 
    }
    )
    
    
var texto= 'soy variable global'; 
var nume1= 12; 

function hola(texto) {
    var hola_local= 'texto dentro funcion'; 

    console.log(texto); 
    console.log(typeof nume1.toString()); 
    console.log(hola_local); 

}; 
hola(texto); 
*/

// transformación de textos 
/*
var  numero = 244; 
var text1 = 'welcome JS';
var text2 = 'aprendo bien';

var dato = numero.toString(); 
    dato = text1.toUpperCase(); 
    dato =  text2.toUpperCase(); 

//console.log(dato); 

// calcular longitud

var nombre = 'german'; 
var nombre = ['hola','ger']; 
//console.log(nombre.length);

// Concatenar

//var textotal  = text1+' ' +text2; 

var textotal  = text1.concat(' '+text2); 
console.log(textotal)
*/

//var busqueda= text1.search('JS');
// var busqueda= text1.lastIndexOf('JS');

//var busqueda= text1.match('JS');

//var busqueda= text1.substr(4,4);

// var busqueda= text1.startsWith('welc');

//// var busqueda= text1.includes('JS');  //Mas comun para fuscar en todo el texto


// var busqueda= text1.replace('JS', 'C++');


// var busqueda= text1.slice(4,6); // trae texto del intervalo seleccionado


//var busqueda= text1.split(' '); // convertir en array 


/*
var busqueda= text1.trim();

console.log(busqueda);
*/

var nombre = prompt('mete nombre');
var apell = prompt('mete apellidos'); 

// var texto=  nombre + ' ' + apell; 
var texto = `
    <h1>Hola que tal</h1>
    <h3>mi nombre es: ${nombre} </h3>
    <h3>mi apellido es: ${apell} </h3>
`; 
document.write(texto); 