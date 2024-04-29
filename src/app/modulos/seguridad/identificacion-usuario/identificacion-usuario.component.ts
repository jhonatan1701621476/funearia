import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-identificacion-usuario',
  templateUrl: './identificacion-usuario.component.html',
  styleUrl: './identificacion-usuario.component.css'
})
export class IdentificacionUsuarioComponent {
  fGroup: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
  ) {

  }

  ngOnInit() {
    this.ConstruirFormulario(); // Al iniciar el componente construye el formulario
  }

  ConstruirFormulario() {
    this.fGroup = this.fb.group({
      usuario: [Validators.required, Validators.email], // Validar que sea un email, es un control del formulario
      clave: [Validators.required] // Validar que no sea vacio, es un control del formulario
    });
  }

  IdentificarUsuario() {
    if (this.fGroup.invalid){
      alert("Datos Incompletos..")
    } else {
      alert ("Identificar Usuario..")
    }
  }

  get obtenerFormGroup(){
    return this.fGroup.controls; // Obtener los controles del formulario
  }

}
