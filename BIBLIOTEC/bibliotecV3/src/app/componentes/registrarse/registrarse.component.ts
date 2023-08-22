import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit{
  
    constructor(public usuariosService:UsuariosService) { }
  
    ngOnInit(): void {
      //console.log(this.empleadoService.getEmpleados());
      this.getUsuario();
      
    }
  
    getUsuario(){
      this.usuariosService.getUsuario().subscribe(
        res => {
          this.usuariosService.usuarios= res;
          console.log(res);
        },
        err => console.log(err)
      )
    }
  
  
    createUsuario(form:NgForm){
     
      this.usuariosService.createUsuario(form.value).subscribe(
        res=> {
          this.getUsuario();
          form.reset();
        },
        err=> console.log(err)
      )
    } 

}