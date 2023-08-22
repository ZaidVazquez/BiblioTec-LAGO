import { Alumno } from '../models/alumno';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';//<---

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  URL_API= 'http://localhost:3000/alumnos/'; //<-----
  public alumno:Alumno=
  {id_alumno:0, nombre:'',id_carrera:0 ,cuatrimestre:0 ,genero:"", correo:"",estatus:""};

  //empleados: Empleado[]=[{_id:'1',nombre:'Hugo',puesto:'Programador Jr.',email:'hugo@disney.com',sueldo:100}];
  alumnos: Alumno[]=[];

  //constructor() { }
  constructor(private http: HttpClient){}     //<----------
  
  getAlumno(){
    return this.http.get<Alumno[]>(this.URL_API);   //<------
    //return this.empleados;
  }

  createAlumno(alumno:Alumno){
    ///const id= this.empleados[this.empleados.length-1]._id;
     ///empleado._id= id;
    // console.log(id);
     ///this.empleados.push(empleado);
    // return this.empleados;
    return this.http.post(this.URL_API,alumno);
  }

  deleteAlumno(id_alumno:number){
     ///const pos = this.empleados.findIndex(
      // item => item._id===_id);
      // console.log(pos);
      // this.empleados.splice(pos,1);
     //return this.empleados;
     return this.http.delete(this.URL_API+id_alumno);
      
    }

    editAlumno(alumno:Alumno){
      /// const pos= this.empleados.findIndex(
      ///   item => item._id===empleado._id);
      //     console.log(pos);
      ///     this.empleados[pos]=empleado;
      //     return this.empleados;
      return this.http.put(this.URL_API+alumno.id_alumno,alumno);
    }
}