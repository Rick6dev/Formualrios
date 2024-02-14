import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
usuario={
  nombre:'',
  apellido:'',
  correo:'',
  pais:'',
  genero:''
}
paises:any[]=[]

  constructor(private paisservice:PaisService) { }

  ngOnInit(): void {
    this.paisservice.getPaises().subscribe(paise=>{
     console.log("object");
      console.log(paise);
      this.paises=paise

      this.paises.unshift({
        nombre:'Seleccione Pais',
        codigo:'',
        img:''
      })
    })
  }
  guardar(forma:NgForm){
    if(forma.invalid){
      Object.values(forma.controls).forEach(control=>{
        console.log(control);
        control.markAsTouched()
      })
      return
    }
    console.log(forma.value);
  }

}
