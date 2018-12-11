'use strict'

// fetch (ajax) y peticiones a servicios api

var usuarios; 
fetch('https://jsonplaceholder.typicode.com/users')
.then(data=>data.json())
.then(data=>{
    usuarios = data; 
    console.log(usuarios);
    
})