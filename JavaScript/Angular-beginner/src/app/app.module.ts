import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VideojuegoComponent } from './videojuego/videojuego.component'; 
import { ZapatillasComponent } from './Zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component'; 

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent, 
    ZapatillasComponent, CursosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
