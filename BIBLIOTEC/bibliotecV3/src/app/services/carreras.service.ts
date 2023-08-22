import { Carrera } from '../models/carrera';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';//<---

@Injectable({
  providedIn: 'root'
})
export class CarrerasService {
  URL_API= 'http://localhost:3000/carreras/'; //<-----
  public carrera:Carrera=
  {id_carrera:0 ,carrera:"" ,area:""};

  //empleados: Empleado[]=[{_id:'1',nombre:'Hugo',puesto:'Programador Jr.',email:'hugo@disney.com',sueldo:100}];
  carreras: Carrera[]=[];

  //constructor() { }
  constructor(private http: HttpClient){}     //<----------
  
  getCarrera(){
    return this.http.get<Carrera[]>(this.URL_API);   //<------
    //return this.empleados;
  }

  createCarrera(carrera:Carrera){
    ///const id= this.empleados[this.empleados.length-1]._id;
     ///empleado._id= id;
    // console.log(id);
     ///this.empleados.push(empleado);
    // return this.empleados;
    return this.http.post(this.URL_API,carrera);
  }

    deleteCarrera(id_carrera:number){
        ///const pos = this.empleados.findIndex(
         // item => item._id===_id);
         // console.log(pos);
         // this.empleados.splice(pos,1);
        //return this.empleados;
        return this.http.delete(this.URL_API+id_carrera);
         
       }
   
       editAlumno(carrera:Carrera){
         /// const pos= this.empleados.findIndex(
         ///   item => item._id===empleado._id);
         //     console.log(pos);
         ///     this.empleados[pos]=empleado;
         //     return this.empleados;
         return this.http.put(this.URL_API+carrera.id_carrera,carrera);
       }
  }
