// Condicion 

var edad1= 8; 
var edad2= 33; 
var nombre = 'David'; 

/*
if (edad1 > edad2) {
    console.log("edad uno es mayor que edad2");
}else{
    console.log("la edad uno es inferior"); 
}; 

if (edad2 >=18 ) {
    console.log(nombre + 'tiene'+ edad2+'años');
    
    if (edad2 == 33) {
        console.log('eres tonto'); 
    }
} else {
    console.log(nombre+'tiene'+edad2+'años, es menor de edad');
}
*/
// operadores logicos 
/*
or (o):||
negacion : !!
and :



if (year != 2015) {
    console.log ('el año es '+ year);
}else {

}



if (year >= 2000 && year <= 2020 && year !=2018 ) {
    console.log('estamos aqui');
    
} else {
    console.log('estamos futuro'); 
    
}

//or
var year = 2019; 
if (year == 2018 || (year >= 2018 && year == 2028)) {
    console.log('el año acaba en 8');
    
}else {
    console.log('año no registrado');
    
}
*/

// Switch
var edad=25;
var imprim= '';

switch(edad){ 
    case 18: 
        imprim ='Acabas cumplir mayor'; 
break; 
    case 25: 
    imprim ='adult'; 
    break; 

    case 40: 
    imprim ='cuarenta'; 
    break; 

    case 75: 
    imprim ='anciano'; 
    break; 
 };

 console.log (imprim); 
