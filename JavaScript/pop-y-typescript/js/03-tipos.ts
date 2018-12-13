type letonum = string | number; 
let llegar: letonum = 'ger'; 

// string 
let cadena: string | number | boolean = 'german'; 
cadena = 3; 
cadena = true 

// number
let numero: number = 12; 

// Boleanos
let verdadero_falso: boolean=true; 

// any 
let cualquiera : any= 'hola'; 
cualquiera=77; 

// arrays
var lenguajes : Array<string> = ['php', 'js', 'sql']; 
let year : any[] = ['doce',12,23]; 

// let vs var

var num1= 10; 
var num2= 12; 

if (num1==10) {
    let num1 = 22;
    let num2 = 55; 

    console.log(num1,num2);
    
}

console.log(num1,num2);
console.log(cadena, numero, verdadero_falso, num1);
