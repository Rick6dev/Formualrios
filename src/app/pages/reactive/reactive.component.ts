import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
forma:any;
  constructor(private fb:FormBuilder) { 
  this.crearFormulario()

  }

  ngOnInit(): void {
  }
  crearFormulario(){
    this.forma=this.fb.group({
      nombre:['',Validators.required],
      apellido:['',[Validators.required,Validators.minLength(5)]],
      correo:['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]]
    })


  }


  get nombreNoValido(){
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched
  }
  get apellidoNoValido(){
    return this.forma.get('apellido').invalid && this.forma.get('apellido').touched
  }
  get emailNoValido(){
    return this.forma.get('correo').invalid && this.forma.get('correo').touched
  }

  get nombreValido(){
    return this.forma.get('nombre').valid && this.forma.get('nombre').touched
  }
  get apellidoValido(){
    return this.forma.get('apellido').valid && this.forma.get('apellido').touched
  }
  get emailValido(){
    return this.forma.get('correo').valid && this.forma.get('correo').touched
  }


  guardar(){
    if(this.forma.invalid){
      Object.values(this.forma.controls).forEach(control => {
        if (control instanceof FormControl || control instanceof FormGroup) {
          control.markAsTouched();
        }
      });

      return


    }
    console.log(this.forma);
  }

}
