// interface, tiene que cumplir estas reglas en los metodos de la class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// decorador
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log('camiseta estampada con logo: ' + logo);
        };
    };
}
// clase (molde del objeto)
var Camisetas = /** @class */ (function () {
    // metodos (funciones o acciones del objeto)
    function Camisetas(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Camisetas.prototype.setColor = function (color) {
        this.color = color;
    };
    Camisetas.prototype.getColor = function () {
        return this.color;
    };
    Camisetas = __decorate([
        estampar('Gucci')
    ], Camisetas);
    return Camisetas;
}());
// clase hija, traigo las propiedades de camiseta 
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camisetas));
var camiseta = new Camisetas('rojo', 'manga larga', 'nike', 'L', 14);
// console.log(camiseta);
camiseta.estampacion();
var sudaNike = new Sudadera('rojo', 'adidas', 'nike', 'L', 14);
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
