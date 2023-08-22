import { Component } from '@angular/core';
import { ConsultaService } from 'src/app/services/consulta.service';
import { Libro } from 'src/app/models/libro';
import { libroService } from 'src/app/services/libro.service';
import { EditorialService } from 'src/app/services/editorial.service';
import { OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-consultar-libros',
  templateUrl: './consultar-libros.component.html',
  styleUrls: ['./consultar-libros.component.css']
})
export class ConsultarLibrosComponent implements OnInit{

  searchTitle: string = '';
  searchAuthor: string = '';
  searchClassification: string = 'Clasificacion';

  librosFiltrados: Libro[] = [];

  constructor(public libroService:libroService, public editorialService:EditorialService, public consultaService:ConsultaService) { }

  ngOnInit(): void {
    //console.log(this.empleadoService.getEmpleados());
    this.getLibros();
    this.getEditorial();
  }

  performSearch() {
    this.librosFiltrados = this.libroService.libros.filter(libro => {
      const coincideTitulo = libro.titulo.toLowerCase().includes(this.searchTitle.toLowerCase());
      return coincideTitulo;
    });
  }

  getLibroByTitulo(form:NgForm){
    alert('Consultando título');
    this.consultaService.getLibroByTitulo(form.value.titulo).subscribe(
      res => {
        this.libroService.libros= res;
        console.log(res);
      },
      err => console.log(err)
    )
  }
  
  getLibroByAutor(form:NgForm){
    alert('Consultando autor');
    this.consultaService.getLibroByAutor(form.value.autores).subscribe(
      res => {
        this.libroService.libros= res;
        console.log(res);
      },
      err => console.log(err)
    )
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

  

  
  

  getLibroByClasificacion(){
    this.libroService.getLibro().subscribe(
      res => {
        this.libroService.libros= res;
        console.log(res);
      },
      err => console.log(err)
    )
  }

  

}
