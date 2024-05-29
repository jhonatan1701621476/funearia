import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from '../../../servicios/seguridad.service';
import { UsuarioModel } from '../../../modelos/usuario.model';

@Component({
  selector: 'app-cambio-clave',
  templateUrl: './cambio-clave.component.html',
  styleUrls: ['./cambio-clave.component.css']
})
export class CambioClaveComponent implements OnInit {

  fgroup: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private servicioSeguridad: SeguridadService
  ) {}

  ngOnInit() {
    this.fgroup = this.fb.group({
      usuario: ['', [Validators.required, Validators.email]],
      claveActual: ['', [Validators.required]],
      nuevaClave: ['', [Validators.required, Validators.minLength(6)]],
      confirmarNuevaClave: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  CambiarClave() {
    if (this.fgroup.invalid || this.fgroup.value.nuevaClave !== this.fgroup.value.confirmarNuevaClave) {
      alert("Debe ingresar la nueva contraseña del usuario y asegurarse de que las contraseñas coincidan");
      return;
    } else {
      const datos = {
        usuario: this.fgroup.value.usuario,
        claveActual: this.fgroup.value.claveActual,
        nuevaClave: this.fgroup.value.nuevaClave
      };
      console.log("datos formulario datos", datos);
      console.log("datos formulario fgroup", this.fgroup.value);
      this.servicioSeguridad.CambiarClavePorUsuario(datos.usuario, datos.claveActual, datos.nuevaClave).subscribe({
        next: (response) => {
          alert("Se ha cambiado la contraseña correctamente");
        },
        error: (err) => {
          alert("Ha ocurrido un error cambiando la contraseña.");
        }
      });
    }
  }

  get obtenerFormGroup() {
    return this.fgroup.controls;
  }

}