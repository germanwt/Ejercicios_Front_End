var bici = {
    color: 'rojo',
    modelo:'BMX',
    frenos:'disco', 
    velMaxima:'60km',
    cambiacolor: function (nuecolor) {
        this.color = nuecolor; 
        console.log(this);
    }
};

bici.cambiacolor('azul'); 


