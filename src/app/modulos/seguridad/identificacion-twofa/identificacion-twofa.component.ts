import { Component } from '@angular/core';
import { SeguridadService } from '../../../servicios/seguridad.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-identificacion-twofa',
  templateUrl: './identificacion-twofa.component.html',
  styleUrl: './identificacion-twofa.component.css'
})
export class IdentificacionTwofaComponent {
 
  usuarioId:string="";
  fGroup:FormGroup = new FormGroup({});

  constructor(
    private servicioSeguridad: SeguridadService,
    private fb: FormBuilder
    ) {

  }

  ngOnInit() {
    let datos = this.servicioSeguridad.ObtenerDatosUsuarioLS();
    if (datos != null) {
      this.usuarioId = datos._id!;
      this.ConstruirFormulario();
    }
  }

  ConstruirFormulario() {
    this.fGroup = this.fb.group({
      codigo: ['', [Validators.required]]
    })
  }

  ValidarCodigo2fa() {
    if(this.fGroup.invalid) {
      alert("Debe ingresar el código");
    }else {
      let codigo2fa = this.ObtenerFormGroup["codigo"].value;
      this.servicioSeguridad.ValidarCodigo2FA(this.usuarioId, codigo2fa).subscribe({
        next: (datos:object) => {
          console.log(datos);

        },
        error: (err) => {
          console.log(err);
        }
      })


    }
  }

  get ObtenerFormGroup() {
    return this.fGroup.controls;
  }
}
