import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { InstitucionalComponent } from './componentes/institucional/institucional.component';
import { HomeComponent } from './componentes/home/home.component';
import { AdministradorComponent } from './componentes/administrador/administrador.component';
import { ConsultarLibrosComponent } from './componentes/consultar-libros/consultar-libros.component';
import { ReservarLibrosComponent } from './componentes/reservar-libros/reservar-libros.component';
import { RegistrarseComponent } from './componentes/registrarse/registrarse.component';
import { IngresarComponent } from './componentes/ingresar/ingresar.component';
import { ActionsAlumnosComponent } from './componentes/actions-alumnos/actions-alumnos.component';
import { ActionsLibrosComponent } from './componentes/actions-libros/actions-libros.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    InstitucionalComponent,
    HomeComponent,
    AdministradorComponent,
    ConsultarLibrosComponent,
    ReservarLibrosComponent,
    RegistrarseComponent,
    IngresarComponent,
    ActionsAlumnosComponent,
    ActionsLibrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
