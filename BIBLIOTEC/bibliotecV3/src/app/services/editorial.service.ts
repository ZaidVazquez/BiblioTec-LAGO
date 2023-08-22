import { Editorial } from '../models/editorial';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';//<---

@Injectable({
  providedIn: 'root'
})
export class EditorialService {
  URL_API= 'http://localhost:3000/editoriales/'; //<-----
  public editorial:Editorial=
  {id_editorial:0 ,editorial:''};

  //empleados: Empleado[]=[{_id:'1',nombre:'Hugo',puesto:'Programador Jr.',email:'hugo@disney.com',sueldo:100}];
  editoriales: Editorial[]=[];

  //constructor() { }
  constructor(private http: HttpClient){}     //<----------
  
  getEditorial(){
    return this.http.get<Editorial[]>(this.URL_API);   //<------
    //return this.empleados;
  }

  createEditorial(editorial:Editorial){
    ///const id= this.empleados[this.empleados.length-1]._id;
     ///empleado._id= id;
    // console.log(id);
     ///this.empleados.push(empleado);
    // return this.empleados;
    return this.http.post(this.URL_API,editorial);
  }

    deleteEditorial(id_editorial:number){
        ///const pos = this.empleados.findIndex(
         // item => item._id===_id);
         // console.log(pos);
         // this.empleados.splice(pos,1);
        //return this.empleados;
        return this.http.delete(this.URL_API+id_editorial);
         
       }
   
       editEditorial(editorial:Editorial){
         /// const pos= this.empleados.findIndex(
         ///   item => item._id===empleado._id);
         //     console.log(pos);
         ///     this.empleados[pos]=empleado;
         //     return this.empleados;
         return this.http.put(this.URL_API+editorial.id_editorial,editorial);
       }
  }
