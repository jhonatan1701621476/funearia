import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConfiguracionRutasBackend } from '../../../../config/configuracion.rutas.backend';
import { ParametrosService } from '../../../../servicios/parametros/servicios.service';
import { Router } from 'express';

@Component({
  selector: 'app-crear-servicio-plan',
  templateUrl: './crear-servicio-plan.component.html',
  styleUrl: './crear-servicio-plan.component.css'
})
export class CrearServicioPlanComponent {

  nombreArchivoCargado: String = '';
  fGroup: FormGroup = new FormGroup({});
  cargaArchivoFG: FormGroup = new FormGroup({});
  archivoCargado: Boolean = false;
  BASE_URL: String = ConfiguracionRutasBackend.urlNegocio;

  constructor(
    private fb: FormBuilder,
    private servicio: ParametrosService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.ConstruirFormularioDatos();
    //this.ConstruirFormularioArchivo();
  }

  ConstruirFormularioDatos() {
    //this.
  }

}
