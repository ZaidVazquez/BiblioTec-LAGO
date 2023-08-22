import { consulta } from './../models/consulta';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';//<---
import { libroService } from './libro.service';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
  URL_API= 'http://localhost:3000/consultas'; //<-----
  public consulta:consulta=
  {id:0, titulo:'',autores:'',estatus:'',clasificacion:'',id_editorial:0,ubicacion:''};

  //empleados: Empleado[]=[{_id:'1',nombre:'Hugo',puesto:'Programador Jr.',email:'hugo@disney.com',sueldo:100}];
  consultas: consulta[]=[];
  libros: Libro[]=[];

  //constructor() { }
  constructor(private http: HttpClient){}     //<----------
  
  getConsultas(){
    return this.http.get<consulta[]>(this.URL_API);   //<------
    //return this.empleados;
  }

  getLibroByTitulo(titulo:string){
    console.log(this.URL_API+'/titulo/'+titulo);
    return this.http.get<Libro[]>(this.URL_API+'/titulo/'+titulo);   //<------
    //return this.libro;
  }

  getLibroByAutor(autores:string){
    return this.http.get<Libro[]>(this.URL_API+'/autor/'+autores);   //<------
    //return this.libro;
  }

  getLibroByClasificacion(){
    return this.http.get<Libro[]>(this.URL_API);   //<------
    //return this.libro;
  }
}