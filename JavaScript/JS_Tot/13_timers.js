'use strict'

window.addEventListener('load', ()=>{

function intervalo(){

    var tiempo = setInterval(function(){ 
        console.log('set interval exect');
        
        var encabezado = document.querySelector('h1'); 
        if (encabezado.style.fontSize == '50px') {
            encabezado.style.fontSize = '30px'; 
        }else {
            encabezado.style.fontSize = '50px'; 
        }
    
        
    }, 1000); 

return tiempo; 
     }; 

var tiempo =  intervalo(); 

var stop = document.querySelector('#stop'); 

    stop.addEventListener('click', function() {
        alert('has parado el intervalo'); 
        clearInterval(tiempo); 
    }); 

    var start = document.querySelector('#start'); 

    start.addEventListener('click', function(){
        alert('has iniciado el intervalo'); 
        intervalo(); 
    }); 

});



