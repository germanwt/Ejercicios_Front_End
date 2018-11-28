 //"use strict" 

    var nombre=["g","e","r","m","a","3","n", "n"];
    var vocales= ["a","e","i","o","u"];
    var surname= ["w","i","t","t","i","n","g","h","a","m"]; 

  // Fase 1. 
  for (var contador=0; contador < nombre.length; contador ++)
    {  console.log (nombre[contador]);
    }; 
    
// Fase 2. 
        for ( i=0; i < nombre.length; i ++)
        {  
                       if (!isNaN(nombre[i])) {
              console.log(nombre[i], "los nombres no contienen numeros") 
            }
            else if (vocales.indexOf(nombre[i]) != -1) 
                {
                console.log(nombre[i], "es vocal")
                }
            else {
                 console.log(nombre[i], "es consonante");
                }
           
          }; 

// Fase 3. 

        var Fullname=[]; // Crea un array vacio
        Fullname.push(nombre+", ,"+surname);  // Llena el array Fullname con array nombre y surname
        console.log("Full name:",Fullname); // Muestra en la consola array Fullname

          
// Fase 4. 


var cont = new Map() // Crea una nueva array

nombre.forEach(function(elem) {  // realiza revision de cada elemento del array nombre
                if (cont.has(elem)) { // verifica si el elemento es verdadero o falso 
                  cont.set(elem,cont.get(elem) +1) // si el elemento es verdadero (igual) a otro elemento, le suma uno
                    } else {
                      cont.set(elem, 1)  //sino no sume nada 
                      }
            } );

            console.log(cont);   // muestra nuevo array 

