import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";

@Component({
    selector: 'videojuego', 
    templateUrl: './videojuego.component.html'
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
    public titulo: string;
    public listado: string;


    constructor (){
        this.titulo = 'Componente de Videojuegos';
        this.listado = 'Listado de los juegos mas populares'; 
        
        console.log('se ha cargado ');
        
    }

    ngOnInit(){
        console.log('onin ejecutado');
        
    }

    ngDoCheck(){
        console.log('doceck ejecutado');
        
    }
    
    ngOnDestroy(){
    console.log('ondestroy ejecutado');
    
}
    
    cambiartitulo (){
        this.titulo =  'nuevo titulo del componente !!!!!!!'; 
    }
}