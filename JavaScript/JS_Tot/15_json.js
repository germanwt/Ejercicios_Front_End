'use strict'

//JSON

var peli = {
    titulo:'batman vs superman', 
    year:2017,
    pais: 'USA', 
};

var pelis =  [
    {titulo: 'la verdad', year:2016, pais:'francia'},
    peli, 
]; 


var caja_pelis= document.querySelector('#pelis'); 
for (var index in pelis){
    var p = document.createElement('p'); 
    p.append(pelis[index].titulo);
    caja_pelis.append(p);
}


console.log(peli);
