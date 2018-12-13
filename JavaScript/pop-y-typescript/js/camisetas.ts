// interface, tiene que cumplir estas reglas en los metodos de la class

interface camisetabase{
    setColor (color);
    getColor ();
}

// decorador

function estampar (logo:string){
    return function (target: Function ){
        target.prototype.estampacion = function(): void{
        console.log('camiseta estampada con logo: ' +logo);
    } 
    }

}

// clase (molde del objeto)
@estampar('Gucci')

class Camisetas implements camisetabase{
    
    // propiedades(caracteristicas del objeto)
    private color: string;  // privada y por eso abajo se declara como public
    public modelo: string;
    public marca: string;
    public talla: string;
    public precio: number;
    
    // metodos (funciones o acciones del objeto)
    constructor(color, modelo, marca, talla, precio){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca; 
        this.talla=talla;
        this.precio = precio;
    }



    public setColor(color){
        this.color= color; 
    }
    public getColor(){
        return this.color; 
    }

}

// clase hija, traigo las propiedades de camiseta 

class Sudadera extends Camisetas {
    public capucha: boolean;

    setCapucha(capucha: boolean){
        this.capucha = capucha;

    }
    getCapucha():boolean{
        return this.capucha; 
    }

}



 
var camiseta = new Camisetas('rojo', 'manga larga', 'nike','L',14);

// console.log(camiseta);
camiseta.estampacion (); 


var sudaNike= new Sudadera('rojo', 'adidas','nike','L',14); 
sudaNike.setCapucha(true);
sudaNike.setColor('green');

console.log(sudaNike);


/*
camiseta.setColor('rojo');
camiseta.marca = 'Nike';
camiseta.talla = 'L';
camiseta.precio = 10;

var camisa = new Camisetas();

camisa.setColor('azul');
camisa.modelo = 'larga'; 
camisa.marca = 'Adidas';
camisa.talla = 'S';
camisa.precio = 15;

*/
console.log(camiseta);









