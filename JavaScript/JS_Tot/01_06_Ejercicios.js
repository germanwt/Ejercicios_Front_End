'use strict'
/*
// 1. programa pida dos numeros y que diga cual es mayor y menor e iguales.

var numero1= parseInt(prompt ('introduce el primer numero', 0));
var numero2 =  parseInt(prompt('introduce seund numero', 0)); 
// console.log(numero1,numero2); 

while (numero1<=0 || numero2<=0 || isNaN(numero1)|| isNaN(numero2)) {
    var numero1= parseInt(prompt ('introduce el primer numero', 0));
    var numero2 =  parseInt(prompt('introduce seund numero', 0)); 
     
}

if (numero1==numero2) {
    console.log('el numero' + numero1 + 'es igual que' + numero2);  
} else if (numero1 > numero2) {
    console.log('el numero' + numero1 + 'es myor que' + numero2); 
 } else if (numero1 < numero2){
    console.log('el numero' + numero1 + 'es menor que' + numero2); 
 } else{
    console.log('introduce numeros correctos');
 }; 


// bucle, mostrar la suma y media hasta introducir nume negativos
var suma=0;
var cont=0; 

do {
    var numero1= parseInt(prompt('introd num hasta un negativo', 0)); 
    if (isNaN(numero1)){
        numero1=0;         
    }else if (numero1>=0){
        suma+= numero1; 
        cont ++; 
    }
    console.log(suma);
    console.log(cont); 
}while (numero1>=0)

alert('la suma de todos los numeros es: '+ suma); 
alert('la media es de todos los numeros es: '+ (suma/cont)); 


// hacer un programa que muestre todos numeros entre dos
// numeros introducidos por el usuario.
var numero1= parseInt(prompt ('introduce el primer numero', 0));
var numero2 = parseInt(prompt('introduce seund numero', 0)); 

document.write ('<h1>De '+numero1+ ' a ' + numero2+ ' estan estos numeros:</h1>'); 
for (var i= numero1; i <= numero2; i++){
    document.write (i+ "<br/>"); 
}
//4. ejercicio 
// Mostrar todos los numeros impares de dos numeros intrdocidos 
// por el usuario. 

var numero1= parseInt(prompt('introduce el primer numero', 0));
var numero2 = parseInt(prompt('introduce seund numero', 0)); 

while (numero1<numero2) {
    numero1++; 
    
    if (numero1%2 !=0) {
        console.log('el '+ numero1+' impar');
    }
}

//var suma= 1%2; 
//console.log(suma); 

//5. Todos los numeros divisores de un numero introd por pantalla

var numero1= parseInt(prompt('introduce el numero', 1));
//var numero2 = parseInt(prompt('introduce seund numero', 0)); 

for (var i=1; i<=numero1; i++){

    if (numero1%i == 0){
        console.log('Divisores son: ' +i); 
    }
}

// 6. Numero si es par e impar

var numero= parseInt(prompt('introduce el numero', 0));

while (isNaN(numero)){
    numero= parseInt(prompt('introduce el numero', 0));
}
if (numero%2 == 0) {
    alert ("Es un numero par");
} else{
    alert('es impar'); 
}

//7. tabla de multiplicar por un numero intr por pantalla

var numero= parseInt(prompt('introduce el numero de la tabla', 1));
var numero2= parseInt(prompt('hasta que numero quiere qe multiplique', 1));

document.write ('<h1> Tabla del '+numero+ ':</h1>'); 
for (var i=1; i<=numero2; i++){
    document.write(i+' x ' + numero + '=' + (i*numero) +'<br/>'); 
}; 

// todas las tablas 

var numero= parseInt(prompt('introduce el numero de la tabla', 1));

document.write ('<h1> Tabla del '+numero+ ':</h1>'); 
for (var i=1; i<=10; i++){
    document.write(i+' x ' + numero + '=' + (i*numero) +'<br/>'); 
};


for (var c=1; c<=10; c++){
    document.write('<h1> Tabla del '+c+ ':</h1>'); 
     for (var i=1; i<=10; i++){
    document.write(i+' x ' + c + '=' + (i*c) +'<br/>'); 
}
 };*/

 //8. calculadora 

var numero= parseInt(prompt('introduce el numero uno', 0));
var numero2= parseInt(prompt('introduce el numero dos', 0));


while (numero<0 || numero2<0 || isNaN(numero)|| isNaN(numero2)){
    var numero= parseInt(prompt('introduce el numero uno', 0));
    var numero2= parseInt(prompt('introduce el numero dos', 0));
}

var resul= "la suma es: "+ (numero+numero2)+'<br/>'+
"la resta es: "+ (numero-numero2)+'<br/>'+
"la mult es: "+ (numero*numero2)+'<br/>'+
"la divid es: "+ (numero/numero2)+'<br/>'; 

var resul1= "la suma es: "+ (numero+numero2)+'\n'+
"la resta es: "+ (numero-numero2)+'\n'+
"la mult es: "+ (numero*numero2)+'\n'+
"la divid es: "+ (numero/numero2)+'\n'; 


document.write(resul); 
alert(resul1); 
console.log(resul1); 


