import { Libro } from '../models/libro';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';//<---

@Injectable({
  providedIn: 'root'
})
export class libroService {
  URL_API= 'http://localhost:3000/libros/'; //<-----
  public libro:Libro=
  {id_libro:0, titulo:'',autores:'' ,estatus:'' ,clasificacion:'', editorial:"",ubicacion:''};

  //empleados: Empleado[]=[{_id:'1',nombre:'Hugo',puesto:'Programador Jr.',email:'hugo@disney.com',sueldo:100}];
  libros: Libro[]=[];

  //constructor() { }
  constructor(private http: HttpClient){}     //<----------
  
  getLibro(){
    return this.http.get<Libro[]>(this.URL_API);   //<------
    //return this.empleados;
  }

  createLibro(libro:Libro){
    ///const id= this.empleados[this.empleados.length-1]._id;
     ///empleado._id= id;
    // console.log(id);
     ///this.empleados.push(empleado);
    // return this.empleados;
    return this.http.post(this.URL_API,libro);
  }

  deleteLibro(id_libro:number){
     ///const pos = this.empleados.findIndex(
      // item => item._id===_id);
      // console.log(pos);
      // this.empleados.splice(pos,1);
     //return this.empleados;
     return this.http.delete(this.URL_API+id_libro);
      
    }

    editAlumno(alumno:Libro){
      /// const pos= this.empleados.findIndex(
      ///   item => item._id===empleado._id);
      //     console.log(pos);
      ///     this.empleados[pos]=empleado;
      //     return this.empleados;
      return this.http.put(this.URL_API+this.libro.id_libro,this.libro);
    }
}