function rate(value){
    //alert(value);
    clearRates(); 
    addRates(value); 
    }

// limpiar todos los botones     
function clearRates(){
    for(var i=1; i <= 5; i++){
        document.getElementById('start'+i).classList.remove('active');
    }
}

// activar con respecto al icono que doy click
function addRates(value){
    for(var i=1; i<=value; i++){
        document.getElementById('start'+i).classList.add('active');
    }
}

// Limpiar cuando doy cliclk en cualquier parte de la pantalla 
window.addEventListener('click', function(e){
    if (!document.getElementById('rate')
    .contains(e.target)){
        clearRates(); 
    }   
}); 