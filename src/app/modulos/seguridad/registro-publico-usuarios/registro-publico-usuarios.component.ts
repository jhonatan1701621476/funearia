import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from '../../../servicios/seguridad.service';
import { UsuarioModel } from '../../../modelos/usuario.model';


@Component({
  selector: 'app-registro-publico-usuarios',
  templateUrl: './registro-publico-usuarios.component.html',
  styleUrl: './registro-publico-usuarios.component.css'
})
export class RegistroPublicoUsuariosComponent {
  fGroup: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private servicioSeguridad: SeguridadService
  ){
  }

  ngOnInit() {
    this.ConstruirFormulario();
  }

  /**
   * Construcción del formulario con los controles 
  */

  ConstruirFormulario() {
    this.fGroup = this.fb.group({
      primerNombre: ['', [Validators.required, Validators.minLength(2)]],
      segundoNombre: ['', [Validators.minLength(2)]],
      primerApellido: ['', [Validators.required, Validators.minLength(2)]],
      segundoApellido: ['', [Validators.minLength(2)]],
      correo: ['', [Validators.required]],
      telefono: ['',[Validators.required, Validators.minLength(12)]],
    });
  }

  /**
   * Función de registro público
   */

  Registrarse() {
    let campos = this.ObtenerFormGroup;
    let datos = {
      PrimerNombre: campos["primerNombre"].value,
      SegundoNombre: campos["segundoNombre"].value,
      PrimerApellido: campos["primerApellido"].value,
      SegundoApellido: campos["segundoApellido"].value,
      Correo: campos["correo"].value,
      Celular: campos["telefono"].value
    }
    this.servicioSeguridad.RegistrarUsuarioPublico(datos).subscribe({
      next: (respuesta:UsuarioModel) => {
        alert("Registro correcto, se ha enviado un mensaje para validar su dirección de correo electronico.")
      },
      error: (err) => {
        alert("Se ha producido un error en el registro.")
      }
    });

  }

  get ObtenerFormGroup() {
    return this.fGroup.controls;

  }


}
