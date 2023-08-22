import { Libro } from 'src/app/models/libro';
import { libroService } from 'src/app/services/libro.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EditorialService } from 'src/app/services/editorial.service';
import { Editorial } from 'src/app/models/editorial';


@Component({
  selector: 'app-actions-alumnos',
  templateUrl: './actions-libros.component.html',
  styleUrls: ['./actions-libros.component.css']
})

export class ActionsLibrosComponent implements OnInit{
  
  constructor(public libroService:libroService, public editorialService:EditorialService) { }

  ngOnInit(): void {
    //console.log(this.empleadoService.getEmpleados());
    this.getLibros();
    this.getEditorial();
  }

  getEditorial(){
    this.editorialService.getEditorial().subscribe(
      res => {
        this.editorialService.editoriales= res;
        console.log(res);
      },
      err => console.log(err)
    )
  }

  getLibros(){
    this.libroService.getLibro().subscribe(
      res => {
        this.libroService.libros= res;
        console.log(res);
      },
      err => console.log(err)
    )
  }

  createLibro(form:NgForm){
    alert('creando');
    this.libroService.createLibro(form.value).subscribe(
      res=> {
        this.getLibros();
        form.reset();
      },
      err=> console.log(err)
    )
  } 
  
  updateLibro(form:NgForm){                      //form.value.id
      alert('actualizando'); 
      this.libroService.editAlumno(form.value).subscribe(
       res=> console.log(res) ,
       err=> console.log(err)
      );
      
 } 
 

  deleteLibro(_id:any){
    alert('Borrando');
     const resp= confirm('Estas seguro de eliminarlo?');
     console.log('eliminando '+_id);
     if(resp){
       this.libroService.deleteLibro(_id).subscribe(
        res=>{
          this.getLibros();
        },
        (err)=> console.log(err)
       );
     }
  }

  editLibro(libro:Libro){
    this.libroService.libro= libro;
  }

  formReset(form:NgForm){
    this.libroService.libro=form.value;
    form.reset();
  }
}
