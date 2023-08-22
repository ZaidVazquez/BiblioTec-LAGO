import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { AdministradorComponent } from './componentes/administrador/administrador.component';
import { RegistrarseComponent } from './componentes/registrarse/registrarse.component';
import { IngresarComponent } from './componentes/ingresar/ingresar.component';
import { ReservarLibrosComponent } from './componentes/reservar-libros/reservar-libros.component';
import { ConsultarLibrosComponent } from './componentes/consultar-libros/consultar-libros.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { ActionsAlumnosComponent } from './componentes/actions-alumnos/actions-alumnos.component';
import { ActionsLibrosComponent } from './componentes/actions-libros/actions-libros.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', component: HomeComponent},
  {path:'administrador', component:AdministradorComponent},
  {path:'registrarse', component:RegistrarseComponent},
  {path:'ingresar', component:IngresarComponent},
  {path:'reservar-libros', component:ReservarLibrosComponent},
  {path:'consultar-libros', component:ConsultarLibrosComponent},
  {path:'perfil',component:PerfilComponent},
  {path:'alumnos', component:ActionsAlumnosComponent},
  {path:'libros',component:ActionsLibrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
