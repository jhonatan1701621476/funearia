import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from '../../../servicios/seguridad.service';
import { UsuarioModel } from '../../../modelos/usuario.model';
import { MD5 } from 'crypto-js';
import { Router } from '@angular/router';
@Component({
  selector: 'app-identificacion-usuario',
  templateUrl: './identificacion-usuario.component.html',
  styleUrl: './identificacion-usuario.component.css'
})
export class IdentificacionUsuarioComponent {
  fGroup: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private servicioSeguiridad: SeguridadService,
    private router: Router,
  ) {

  }

  ngOnInit() {
    this.ConstruirFormulario(); // Al iniciar el componente construye el formulario
  }

  ConstruirFormulario() {
    this.fGroup = this.fb.group({
      usuario: ['', [Validators.required, Validators.email]], // Validar que sea un email, es un control del formulario
      clave: ['', Validators.required] // Validar que no sea vacio, es un control del formulario
    });
  }

  IdentificarUsuario() {
    if (this.fGroup.invalid){
      alert("Datos incompletos...");
    } else {
      let usuario = this.obtenerFormGroup['usuario'].value;
      let clave = this.obtenerFormGroup['clave'].value;
      let claveCifrada = MD5(clave).toString();
      this.servicioSeguiridad.IdentificarUsuario(usuario, claveCifrada).subscribe({
        next: (datos:UsuarioModel) => {
          console.log(datos);
          if (datos._id == undefined || datos._id == null) {
            alert("Credenciales incorrectas o falta la verificación del correo electrónico.");
          } else {
            if (this.servicioSeguiridad.AlmacenarDatosUsuarioIdentificado(datos)) {
              this.router.navigate(['/seguridad/2fa']);
            }
          }
        },
        error: (err) => {
          console.log(err);
        }
      })
    }
  }

  get obtenerFormGroup(){
    return this.fGroup.controls; // Obtener los controles del formulario
  }

}
