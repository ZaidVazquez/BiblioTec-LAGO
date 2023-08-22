import { Alumno } from 'src/app/models/alumno';
import { AlumnosService } from 'src/app/services/alumno.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CarrerasService } from 'src/app/services/carreras.service';
import { Carrera } from 'src/app/models/carrera';

@Component({
  selector: 'app-actions-alumnos',
  templateUrl: './actions-alumnos.component.html',
  styleUrls: ['./actions-alumnos.component.css']
})

export class ActionsAlumnosComponent implements OnInit{
  
  constructor(public alumnosService:AlumnosService, public carrerasService:CarrerasService) { }

  ngOnInit(): void {
    //console.log(this.empleadoService.getEmpleados());
    this.getAlumnos();
    this.getCarrera();
  }

  getCarrera(){
    this.carrerasService.getCarrera().subscribe(
      res => {
        this.carrerasService.carreras= res;
        console.log(res);
      },
      err => console.log(err)
    )
  }

  getAlumnos(){
    this.alumnosService.getAlumno().subscribe(
      res => {
        this.alumnosService.alumnos= res;
        console.log(res);
      },
      err => console.log(err)
    )
  }

  createAlumno(form:NgForm){
    alert('creando');
    this.alumnosService.createAlumno(form.value).subscribe(
      res=> {
        this.getAlumnos();
        form.reset();
      },
      err=> console.log(err)
    )
  } 
  
  updateAlumno(form:NgForm){                      //form.value.id
      alert('actualizando'); 
      this.alumnosService.editAlumno(form.value).subscribe(
       res=> console.log(res) ,
       err=> console.log(err)
      );
      
 } 
 

  deleteAlumno(_id:any){
    alert('Borrando');
     const resp= confirm('Estas seguro de eliminarlo?');
     console.log('eliminando '+_id);
     if(resp){
       this.alumnosService.deleteAlumno(_id).subscribe(
        res=>{
          this.getAlumnos();
        },
        (err)=> console.log(err)
       );
     }
  }

  editAlumno(alumno:Alumno){
    this.alumnosService.alumno= alumno;
  }

  formReset(form:NgForm){
    this.alumnosService.alumno=form.value;
    form.reset();
  }
}