import { Usuario } from '../models/usuario';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';//<---

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  URL_API= 'http://localhost:3000/usuarios/'; //<-----
  public usuario:Usuario=
  {id_usuario: 0, usuario:'',correo:"",contrasena:""};

  //empleados: Empleado[]=[{_id:'1',nombre:'Hugo',puesto:'Programador Jr.',email:'hugo@disney.com',sueldo:100}];
  usuarios: Usuario[]=[];

  //constructor() { }
  constructor(private http: HttpClient){}     //<----------
  
  getUsuario(){
    return this.http.get<Usuario[]>(this.URL_API);   //<------
    //return this.empleados;
  }

  createUsuario(usuario:Usuario){
    ///const id= this.empleados[this.empleados.length-1]._id;
     ///empleado._id= id;
    // console.log(id);
     ///this.empleados.push(empleado);
    // return this.empleados;
    return this.http.post(this.URL_API,usuario);
  }

  deleteUsuario(id_usuario:number){
     ///const pos = this.empleados.findIndex(
      // item => item._id===_id);
      // console.log(pos);
      // this.empleados.splice(pos,1);
     //return this.empleados;
     return this.http.delete(this.URL_API+id_usuario);
      
    }

    editUsuario(usuario:Usuario){
      /// const pos= this.empleados.findIndex(
      ///   item => item._id===empleado._id);
      //     console.log(pos);
      ///     this.empleados[pos]=empleado;
      //     return this.empleados;
      return this.http.put(this.URL_API+usuario.id_usuario,usuario);
    }
}